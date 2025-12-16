import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { inquirySchema } from '@/lib/validators'
import { z } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validatedData = inquirySchema.parse(body)
    
    // Create inquiry in database
    const inquiry = await prisma.inquiry.create({
      data: {
        ...validatedData,
        submitted_at: new Date(),
      },
    })
    
    // Optional: Send email notification
    // Uncomment and implement if you want email notifications
    /*
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      const nodemailer = require('nodemailer')
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      })
      
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Vehicle Inquiry - TrueSpec',
        html: `
          <h2>New Inquiry Received</h2>
          <p><strong>Name:</strong> ${inquiry.name}</p>
          <p><strong>Phone:</strong> ${inquiry.phone}</p>
          <p><strong>Email:</strong> ${inquiry.email || 'N/A'}</p>
          <p><strong>Vehicle:</strong> ${inquiry.vehicle_year} ${inquiry.vehicle_make} ${inquiry.vehicle_model}</p>
          <p><strong>Asking Price:</strong> ${inquiry.asking_price || 'N/A'}</p>
          <p><strong>Dealer Location:</strong> ${inquiry.dealer_location || 'N/A'}</p>
          <p><strong>VIN:</strong> ${inquiry.vin || 'N/A'}</p>
          <p><strong>Contact Preference:</strong> ${inquiry.contact_preference}</p>
          ${inquiry.additional_info ? `<p><strong>Additional Info:</strong> ${inquiry.additional_info}</p>` : ''}
        `,
      })
    }
    */
    
    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry submitted successfully',
        id: inquiry.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing inquiry:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          details: error.errors,
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        submitted_at: 'desc',
      },
      take: 50,
    })
    
    return NextResponse.json({
      success: true,
      data: inquiries,
    })
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch inquiries',
      },
      { status: 500 }
    )
  }
}