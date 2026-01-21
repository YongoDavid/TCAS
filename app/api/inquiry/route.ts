import { NextRequest, NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongoose'
import { Inquiry } from '@/lib/models/inquiry'
import { inquirySchema } from '@/lib/validators'
import { z } from 'zod'
import { isRateLimitedRedis } from '@/lib/redis'
import { sendInquiryEmail } from '@/lib/email'

// ============================================================================
// ENVIRONMENT CONFIGURATION
// ============================================================================
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || String(60 * 60 * 1000)) // 1 hour
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || '20')
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET || process.env.RECAPTCHA_SECRET_KEY || ''
const MIN_SCORE = Number(process.env.RECAPTCHA_MIN_SCORE || '0.5')

// Validate critical environment variables in production
if (process.env.NODE_ENV === 'production') {
  const requiredEnvVars = ['MONGODB_URI', 'RECAPTCHA_SECRET']
  const missingEnvVars = requiredEnvVars.filter(key => !process.env[key])
  
  if (missingEnvVars.length > 0) {
    console.error(`⚠️ Missing required environment variables: ${missingEnvVars.join(', ')}`)
  }
}

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================
interface RecaptchaVerificationResult {
  success: boolean
  score: number
  data?: any
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Extracts the client's IP address from request headers
 * Handles various proxy configurations (x-forwarded-for, x-real-ip)
 */
function getIpFromRequest(request: NextRequest): string {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

/**
 * Verifies reCAPTCHA v3 token with Google's API
 * @param token - reCAPTCHA token from client
 * @param secret - reCAPTCHA secret key
 * @param remoteIp - Optional client IP for additional verification
 * @returns Verification result with success status and score
 */
async function verifyRecaptcha(
  token: string,
  secret: string,
  remoteIp?: string
): Promise<RecaptchaVerificationResult> {
  if (!token) {
    console.warn('No reCAPTCHA token provided')
    return { success: false, score: 0 }
  }

  try {
    const params = new URLSearchParams()
    params.append('secret', secret)
    params.append('response', token)
    if (remoteIp) params.append('remoteip', remoteIp)

    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })

    if (!res.ok) {
      throw new Error(`reCAPTCHA API returned ${res.status}`)
    }

    const data = await res.json()
    
    return {
      success: Boolean(data.success),
      score: Number(data.score) || 0,
      data,
    }
  } catch (err) {
    console.error('reCAPTCHA verification failed:', err instanceof Error ? err.message : String(err))
    return { success: false, score: 0 }
  }
}

// ============================================================================
// API ROUTE HANDLER
// ============================================================================

/**
 * POST /api/inquiry
 * Handles contact form submissions with:
 * - Rate limiting (Redis-backed)
 * - reCAPTCHA v3 bot protection
 * - Input validation (Zod)
 * - MongoDB persistence
 * - Email notification
 */
export async function POST(request: NextRequest) {
  const ip = getIpFromRequest(request)

  try {
    // ========================================================================
    // RATE LIMITING
    // ========================================================================
    const limited = await isRateLimitedRedis(ip, RATE_LIMIT_WINDOW_MS, RATE_LIMIT_MAX)
    
    if (limited) {
      console.warn(`Rate limit exceeded for IP: ${ip}`)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      )
    }

    // ========================================================================
    // PARSE REQUEST BODY
    // ========================================================================
    const body = await request.json()

    // ========================================================================
    // RECAPTCHA VERIFICATION
    // ========================================================================
    if (!RECAPTCHA_SECRET) {
      console.error('RECAPTCHA_SECRET not configured')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Bot protection not configured. Please contact support.' 
        },
        { status: 500 }
      )
    }

    const recaptchaToken = typeof body.recaptchaToken === 'string' ? body.recaptchaToken : ''
    const recaptchaResult = await verifyRecaptcha(recaptchaToken, RECAPTCHA_SECRET, ip)

    if (!recaptchaResult.success || recaptchaResult.score < MIN_SCORE) {
      console.warn(
        `reCAPTCHA verification failed: score=${recaptchaResult.score}, ip=${ip}, success=${recaptchaResult.success}`
      )
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed bot verification. Please try again.' 
        },
        { status: 400 }
      )
    }

    // Log successful verification (optional, for monitoring)
    console.log(`reCAPTCHA passed: score=${recaptchaResult.score}, ip=${ip}`)

    // ========================================================================
    // INPUT VALIDATION
    // ========================================================================
    const validatedData = inquirySchema.parse(body)

    // ========================================================================
    // DATABASE PERSISTENCE
    // ========================================================================
    await connectToDatabase()
    
    const created = await Inquiry.create({
      ...validatedData,
      submitted_at: new Date(),
    })

    console.log(`Inquiry created successfully: ${created._id}`)

    // ========================================================================
    // EMAIL NOTIFICATION (Best Effort)
    // ========================================================================
    // Note: In production, consider using a message queue (Bull, BullMQ)
    // for reliable email delivery without blocking the response
    try {
      const payloadForEmail = {
        id: created._id.toString(),
        ...(created.toObject ? created.toObject() : created),
      }
      
      const sendResult = await sendInquiryEmail(payloadForEmail)
      
      if (!sendResult.ok) {
        console.warn('Email send failed:', sendResult)
      } else {
        console.log(`Inquiry email sent successfully for: ${created._id}`)
      }
    } catch (emailError) {
      console.error(
        'Error sending inquiry email:',
        emailError instanceof Error ? emailError.message : String(emailError)
      )
      // Continue - don't fail the request due to email errors
    }

    // ========================================================================
    // SUCCESS RESPONSE
    // ========================================================================
    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry submitted successfully',
        id: created._id.toString(),
      },
      { status: 201 }
    )

  } catch (error) {
    // ========================================================================
    // ERROR HANDLING
    // ========================================================================
    console.error(
      'Error processing inquiry:',
      error instanceof Error ? error.message : String(error)
    )

    // Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      )
    }

    // MongoDB duplicate key error
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json(
        {
          success: false,
          error: 'A submission with this information already exists',
        },
        { status: 409 }
      )
    }

    // Generic server error
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error. Please try again later.',
      },
      { status: 500 }
    )
  }
}