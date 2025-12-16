'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Search, FileText, CheckCircle, LucideIcon } from 'lucide-react'

interface Step {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Submit your inquiry',
    description: 'Share the vehicle details, dealer information, and any photos or VIN you have access to.'
  },
  {
    number: '02',
    icon: Search,
    title: 'We analyze the data',
    description: 'Our team reviews available history, compares market pricing, and identifies potential red flags.'
  },
  {
    number: '03',
    icon: FileText,
    title: 'Receive your insights',
    description: 'Get a clear breakdown of what we found — the good, the bad, and the questions you should ask.'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Make an informed decision',
    description: 'You decide whether to proceed, negotiate, or walk away — armed with real information.'
  }
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#10B981] uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Four steps to clarity
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            A simple process that could save you millions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#27272A] via-[#10B981]/30 to-[#27272A]" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                  index !== steps.length - 1 ? 'mb-8 lg:mb-24' : ''
                }`}
              >
                {/* Content */}
                <div className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16 lg:col-start-2'}`}>
                  <div className={`bg-[#0A0A0A] border border-[#27272A] rounded-2xl p-8 hover:border-[#3F3F46] transition-all duration-300`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <span className="text-4xl font-bold text-[#27272A]">{step.number}</span>
                      <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-[#10B981]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#FAFAFA]">
                      {step.title}
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot (desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#10B981] ring-4 ring-[#141414]" />

                {/* Empty column for grid alignment */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}