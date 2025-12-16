'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, VisuallyHidden } from '@/components/ui/sheet'

const navLinks = [
  { name: 'Learn', href: '/learn' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Verify', href: '/verify' },
  { name: 'About', href: '/about' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="w-7 h-7 text-[#10B981] transition-transform group-hover:scale-105" />
            <span className="text-lg font-semibold tracking-tight">
              TRUE<span className="text-[#10B981]">SPEC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/verify">
              <Button className="bg-[#10B981] hover:bg-[#059669] text-[#0A0A0A] font-medium px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#10B981]/20">
                Verify Before You Buy
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#FAFAFA]">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0A0A0A] border-[#27272A] w-[280px]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/verify" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-[#0A0A0A] font-medium mt-4">
                    Verify Before You Buy
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}