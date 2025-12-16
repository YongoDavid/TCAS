'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Wrench, TrendingUp, EyeOff, LucideIcon } from 'lucide-react'

interface Problem {
  icon: LucideIcon
  title: string
  description: string
  color: string
  bgColor: string
}

const problems: Problem[] = [
  {
    icon: AlertTriangle,
    title: 'Accidented cars sold as foreign-used',
    description: 'Salvage vehicles from the US are imported, repaired, and marketed as clean foreign-used cars.',
    color: 'text-[#EF4444]',
    bgColor: 'bg-[#EF4444]/10'
  },
  {
    icon: Wrench,
    title: 'Cosmetic repairs hiding real damage',
    description: 'Body shops mask structural damage with paint and filler. The car looks perfect — until it fails.',
    color: 'text-[#F59E0B]',
    bgColor: 'bg-[#F59E0B]/10'
  },
  {
    icon: TrendingUp,
    title: 'Inflated pricing with no breakdown',
    description: 'Dealers add arbitrary margins without explaining auction price, shipping, or clearing costs.',
    color: 'text-[#8B5CF6]',
    bgColor: 'bg-[#8B5CF6]/10'
  },
  {
    icon: EyeOff,
    title: 'Buyers forced to trust blindly',
    description: 'Without access to vehicle history, buyers rely on dealer claims and photos that hide the truth.',
    color: 'text-[#3B82F6]',
    bgColor: 'bg-[#3B82F6]/10'
  }
]

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#EF4444] uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Why Nigerian car buyers lose money
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            The system is designed to keep you uninformed. Here&apos;s what dealers don&apos;t want you to know.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#141414] border border-[#27272A] rounded-2xl p-8 hover:border-[#3F3F46] transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.bgColor} mb-6`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#FAFAFA]">
                {problem.title}
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}