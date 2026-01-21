import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TrueSpec Automotive - Vehicle Transparency Platform',
  description: 'Nigeria\'s independent vehicle transparency platform. We help buyers make informed decisions through education and advisory services.',
  keywords: ['Nigeria cars', 'vehicle inspection', 'car verification', 'foreign used cars', 'car scams'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Load Google reCAPTCHA v3 if site key is provided */}
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} async />
        )}
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}