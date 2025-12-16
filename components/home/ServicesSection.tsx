'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Search, MessageSquare, LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: GraduationCap,
    title: 'Educate',
    description: 'Learn how the market works, what red flags to spot, and how to protect yourself from common scams.',
    features: ['Free educational content', 'Real case studies', 'Buyer checklists']
  },
  {
    icon: Search,
    title: 'Review',
    description: 'Submit vehicle details for independent analysis. We examine what dealers don\'t show you.',
    features: ['VIN interpretation', 'Price analysis', 'History insights']
  },
  {
    icon: MessageSquare,
    title: 'Clarify',
    description: 'Get clear answers to your specific questions. No sales pressure, just honest guidance.',
    features: ['Direct communication', 'Unbiased opinions', 'Decision support']
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#10B981] uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Three ways we help you decide
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            We&apos;re not dealers. We&apos;re not agents. We&apos;re your checkpoint before the biggest purchase of the year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-[#0A0A0A] border border-[#27272A] rounded-2xl p-8 hover:border-[#10B981]/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#10B981]/10 flex items-center justify-center mb-6 group-hover:bg-[#10B981]/20 transition-colors">
                <service.icon className="w-7 h-7 text-[#10B981]" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4 text-[#FAFAFA]">
                {service.title}
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[#A1A1AA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}