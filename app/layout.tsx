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
      <body className={inter.className}>
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}