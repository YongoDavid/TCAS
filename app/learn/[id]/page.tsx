import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { articles } from '@/lib/constants'

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const article = articles.find((a) => a.id === id)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} - TrueSpec Automotive`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = articles.find((a) => a.id === id)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <section className="py-12 lg:py-20 border-b border-[#27272A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/learn"
            className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learn
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${article.tagColor}`}>
              {article.tag}
            </span>
            <div className="flex items-center gap-2 text-xs text-[#71717A]">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime} min read</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {article.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-4 text-[#FAFAFA]">
                  {section.title}
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-[#141414] border border-[#27272A] rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to verify your purchase?</h3>
            <p className="text-[#A1A1AA] mb-6">
              Submit your vehicle details and let us help you make an informed decision.
            </p>
            <Link href="/verify">
              <Button className="bg-[#10B981] hover:bg-[#059669] text-[#0A0A0A] font-semibold px-8 py-6 text-base rounded-xl">
                Verify Before You Buy
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-[#0A0A0A] border border-[#27272A] rounded-xl">
            <p className="text-xs text-[#71717A] leading-relaxed">
              <strong className="text-[#A1A1AA]">Disclaimer:</strong> Content is for informational purposes and should not be considered a substitute for professional inspection.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}