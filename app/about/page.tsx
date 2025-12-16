import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Target, Eye, Heart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About - TrueSpec Automotive',
  description: 'We\'re Nigeria\'s independent vehicle transparency platform — built to help buyers see what dealers won\'t show.',
}

const values = [
  {
    icon: Target,
    title: 'Independence',
    description: 'We don\'t sell cars. We don\'t take commissions from dealers. Our only interest is helping you make informed decisions.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We believe buyers deserve to know what they\'re paying for. No hidden agendas, no sales pressure, just clear information.'
  },
  {
    icon: Heart,
    title: 'Advocacy',
    description: 'We exist because too many Nigerians have been burned by dishonest dealers. We\'re here to shift the balance of power.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-[#27272A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#10B981]/10 mb-6">
              <Shield className="w-7 h-7 text-[#10B981]" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About TrueSpec
            </h1>
            <p className="text-xl text-[#A1A1AA] leading-relaxed">
              We&apos;re Nigeria&apos;s independent vehicle transparency platform — built to help buyers see what dealers won&apos;t show.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-sm font-medium text-[#10B981] uppercase tracking-wider">Our Story</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-6">
                Why we started TrueSpec
              </h2>
              <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
                <p>
                  Nigeria&apos;s car market operates on information asymmetry. Dealers know everything about a vehicle&apos;s history, condition, and true value. Buyers know almost nothing — and pay the price for that ignorance.
                </p>
                <p>
                  We&apos;ve seen families pay ₦15 million for cars worth ₦8 million. We&apos;ve seen first-time buyers drive home in vehicles with hidden structural damage. We&apos;ve seen dreams of reliable transportation turn into expensive nightmares.
                </p>
                <p>
                  TrueSpec exists to change that dynamic. We provide education, analysis, and advisory services that help buyers understand what they&apos;re actually purchasing — before they hand over their money.
                </p>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-[#10B981] uppercase tracking-wider">Our Position</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-6">
                What we are (and what we&apos;re not)
              </h2>
              <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
                <p>
                  <strong className="text-[#FAFAFA]">We are:</strong> An independent advisory platform that helps you understand vehicle history, market pricing, and potential red flags before you buy.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">We are not:</strong> A dealership, an inspection service, or a guarantee provider. We don&apos;t sell cars, and we don&apos;t certify vehicles.
                </p>
                <p>
                  Our role is to provide clarity. We review available information, highlight concerns, and help you ask the right questions. The final decision — and responsibility — is always yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#10B981] uppercase tracking-wider">Our Values</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4">
              What guides us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#0A0A0A] border border-[#27272A] rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#FAFAFA]">
                  {value.title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to make an informed decision?
          </h2>
          <p className="text-[#A1A1AA] mb-8">
            Submit your vehicle details and let us help you see the full picture.
          </p>
          <Link href="/verify">
            <Button className="bg-[#10B981] hover:bg-[#059669] text-[#0A0A0A] font-semibold px-8 py-6 text-base rounded-xl">
              Verify Before You Buy
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-[#141414] border-t border-[#27272A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-medium text-[#A1A1AA] uppercase tracking-wider">Connect With Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-8">
              Follow for daily insights
            </h2>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://www.instagram.com/truespecautomotivesolutions?igsh=MWs5ZnRhNGFlbG8yeA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#0A0A0A] border border-[#27272A] rounded-xl hover:border-[#E1306C]/50 transition-colors"
              >
                <svg className="w-6 h-6 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-[#FAFAFA]">@truespecautomotivesolutions</span>
              </a>
              
              <a 
                href="https://tiktok.com/@truespec_ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#0A0A0A] border border-[#27272A] rounded-xl hover:border-[#FAFAFA]/30 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="text-[#FAFAFA]">@truespecautomotivesolutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}