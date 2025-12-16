import { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import ArticleCard from '@/components/learn/ArticleCard'
import { articles } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Learn - TrueSpec Automotive',
  description: 'Free educational content to help you navigate Nigeria\'s car market with confidence.',
}


export default function LearnPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-[#27272A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#10B981]/10 mb-6">
              <BookOpen className="w-7 h-7 text-[#10B981]" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Learn Before You Buy
            </h1>
            <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
              Free educational content to help you navigate Nigeria&apos;s car market with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-[#141414] border-b border-[#27272A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#71717A] text-center">
            <strong className="text-[#A1A1AA]">Disclaimer:</strong> Content is for informational purposes and should not be considered a substitute for professional inspection.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}