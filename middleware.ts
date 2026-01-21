import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const res = NextResponse.next()

  // Security headers
  res.headers.set('X-Frame-Options', 'DENY')
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('Referrer-Policy', 'no-referrer')
  res.headers.set('Permissions-Policy', 'geolocation=()')
  res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')

  // Content Security Policy: conservative default for this app. Adjust as needed.
  const csp = [
    "default-src 'self'",
    "img-src 'self' data: images.unsplash.com",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    "font-src 'self' fonts.gstatic.com data:",
  ].join('; ')

  res.headers.set('Content-Security-Policy', csp)

  // Remove server identifying headers for security-through-obscurity
  res.headers.delete('x-powered-by')

  return res
}

export const config = {
  matcher: '/:path*',
}
