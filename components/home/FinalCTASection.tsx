'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#27272A] rounded-3xl p-10 lg:p-16 text-center overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mx-auto mb-8">
              <Shield className="w-8 h-8 text-[#10B981]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Don&apos;t pay for someone else&apos;s mistake.
            </h2>
            
            <p className="text-lg text-[#A1A1AA] max-w-xl mx-auto mb-10 leading-relaxed">
              One submission. One conversation. Potentially millions saved. 
              Get clarity before you commit.
            </p>

            <Link href="/verify">
              <Button 
                size="lg"
                className="bg-[#10B981] hover:bg-[#059669] text-[#0A0A0A] font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/20 group"
              >
                Verify Before You Buy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <p className="text-sm text-[#52525B] mt-6">
              Free initial consultation • No obligations • Advisory only
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}