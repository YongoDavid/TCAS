'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { Article } from '@/lib/types'

interface ArticleCardProps {
  article: Article
  index: number
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        href={`/learn/${article.id}`}
        className="group block bg-[#141414] border border-[#27272A] rounded-2xl overflow-hidden hover:border-[#3F3F46] transition-all duration-300"
      >
        {/* Image placeholder */}
        <div className="aspect-[16/9] bg-gradient-to-br from-[#1C1C1E] to-[#141414] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-20">{article.icon}</span>
          </div>
          <div className="absolute top-4 left-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${article.tagColor}`}>
              {article.tag}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-[#FAFAFA] group-hover:text-[#10B981] transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-[#71717A]">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime} min read</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-[#10B981] font-medium group-hover:gap-2 transition-all">
              Read more
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}