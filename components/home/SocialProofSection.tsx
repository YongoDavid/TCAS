'use client'

import { motion } from 'framer-motion'
import { Instagram, Play } from 'lucide-react'

interface SocialPost {
  platform: 'instagram' | 'tiktok'
  handle: string
  preview: string
  engagement: string
}

const socialPosts: SocialPost[] = [
  {
    platform: 'instagram',
    handle: '@truespecautomotivesolution',
    preview: 'How to spot a repainted accident car in 30 seconds...',
    engagement: '12.4K views'
  },
  {
    platform: 'tiktok',
    handle: '@truespec_ng',
    preview: 'This dealer wanted ₦18M for a car worth ₦11M...',
    engagement: '45.2K views'
  },
  {
    platform: 'instagram',
    handle: '@truespec_ng',
    preview: 'VIN check revealed this "foreign used" was totaled in Texas...',
    engagement: '8.7K views'
  }
]

export default function SocialProofSection() {
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
          <span className="text-sm font-medium text-[#A1A1AA] uppercase tracking-wider">Follow The Truth</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Real cases. Real savings.
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            We expose what dealers hide — every day on social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#141414] border border-[#27272A] rounded-2xl overflow-hidden hover:border-[#3F3F46] transition-all duration-300"
            >
              {/* Video placeholder */}
              <div className="aspect-[9/16] bg-gradient-to-b from-[#1C1C1E] to-[#141414] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#0A0A0A]/50 flex items-center justify-center group-hover:bg-[#0A0A0A]/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
                
                {/* Platform badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0A0A0A]/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                  {post.platform === 'instagram' ? (
                    <Instagram className="w-4 h-4 text-[#E1306C]" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
                    </svg>
                  )}
                  <span className="text-xs text-[#A1A1AA]">{post.handle}</span>
                </div>

                {/* Preview text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                  <p className="text-sm text-[#FAFAFA] font-medium line-clamp-2">
                    {post.preview}
                  </p>
                  <p className="text-xs text-[#71717A] mt-2">{post.engagement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12"
        >
          <a 
            href="https://instagram.com/truespec_ng" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#141414] border border-[#27272A] rounded-full hover:border-[#E1306C]/50 transition-colors"
          >
            <Instagram className="w-5 h-5 text-[#E1306C]" />
            <span className="text-sm text-[#A1A1AA]">@truespec_ng</span>
          </a>
          <a 
            href="https://tiktok.com/@truespec_ng" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#141414] border border-[#27272A] rounded-full hover:border-[#FAFAFA]/30 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="text-sm text-[#A1A1AA]">@truespec_ng</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}