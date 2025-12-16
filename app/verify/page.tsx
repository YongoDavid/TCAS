import { Metadata } from 'next'
import { Shield } from 'lucide-react'
import InquiryForm from '@/components/verify/InquiryForm'

export const metadata: Metadata = {
  title: 'Verify Before You Buy - TrueSpec Automotive',
  description: 'Submit your vehicle inquiry and let us help you see what the dealer won\'t show.',
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-[#27272A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#10B981]/10 mb-6">
              <Shield className="w-7 h-7 text-[#10B981]" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Verify Before You Buy
            </h1>
            <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
              Submit your vehicle inquiry and let us help you see what the dealer won&apos;t show.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}