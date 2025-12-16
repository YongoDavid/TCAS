'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#141414]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#27272A] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs text-[#A1A1AA] font-medium">Independent Vehicle Advisory</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
            Before you pay millions
            <br />
            <span className="text-[#A1A1AA]">for a car — </span>
            <span className="text-[#10B981]">check the truth.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed">
            Nigeria&apos;s car market hides damage, inflates prices, and withholds information. 
            TrueSpec helps you confirm before you commit.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/verify">
              <Button 
                size="lg"
                className="bg-[#10B981] hover:bg-[#059669] text-[#0A0A0A] font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/20 group"
              >
                Verify Before You Buy
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/learn">
              <Button 
                variant="outline"
                size="lg"
                className="border-[#27272A] bg-transparent text-[#FAFAFA] hover:bg-[#141414] hover:border-[#3F3F46] px-8 py-6 text-base rounded-xl transition-all duration-200"
              >
                <BookOpen className="mr-2 w-4 h-4" />
                Learn How Scams Work
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-[#27272A]/50"
        >
          <p className="text-sm text-[#52525B]">
            Trusted by informed buyers across Nigeria
          </p>
        </motion.div>
      </div>
    </section>
  )
}