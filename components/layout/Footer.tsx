import Link from 'next/link'
import { Shield } from 'lucide-react'

const navLinks = [
  { name: 'Learn', href: '/learn' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Verify', href: '/verify' },
  { name: 'About', href: '/about' }
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#27272A] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-[#10B981]" />
              <span className="text-lg font-semibold">
                TRUE<span className="text-[#10B981]">SPEC</span>
              </span>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-md">
              Nigeria&apos;s independent vehicle transparency platform. We help buyers make informed decisions through education and advisory services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#FAFAFA]">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#FAFAFA]">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-[#A1A1AA]">
              <span>Instagram: @truespec_ng</span>
              <span>TikTok: @truespec_ng</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#27272A]">
          <p className="text-xs text-[#71717A] leading-relaxed max-w-4xl">
            <strong className="text-[#A1A1AA]">Disclaimer:</strong> TrueSpec Automotive provides educational and advisory insights based on available information. We do not guarantee vehicle condition, history, or outcome. All decisions remain the buyer&apos;s responsibility.
          </p>
          <p className="text-xs text-[#52525B] mt-4">
            © {new Date().getFullYear()} TrueSpec Automotive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}