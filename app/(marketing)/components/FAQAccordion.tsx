'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'Is this really free? What is the catch?',
    a: 'There is no catch. The retirement review and educational support we provide are completely free of charge. We believe everyone deserves access to clear, honest retirement guidance — regardless of how much they have saved. If you ultimately connect with a vetted advisor through us, our service may be compensated through that relationship, but there is no cost to you at any point.',
  },
  {
    q: 'What actually happens during the retirement review?',
    a: 'We start with a short conversation or intake form to understand your current situation — your assets, income sources, timeline, and biggest concerns. From there, we provide personalized educational insights: what your current plan looks like, where the gaps might be, and what options you have. Think of it as a thoughtful second opinion from someone who has seen hundreds of retirement situations.',
  },
  {
    q: 'Will I be pressured to work with a financial advisor?',
    a: 'Absolutely not. The review stands completely on its own. If you want, we can share educational resources and insights and you never have to speak to an advisor at all. If it genuinely makes sense for your situation and you express interest, we can make a warm introduction — but that decision is entirely yours, entirely optional, and there is zero pressure either way.',
  },
  {
    q: 'How do you choose which advisors you recommend?',
    a: 'We only work with a small number of thoroughly vetted, independent advisors who have demonstrated a client-first approach and clear, fee-transparent practices. We do not take referral fees from advisors that would influence who we recommend. Referrals are made only when we genuinely believe a professional relationship would benefit you.',
  },
  {
    q: 'What if I am not ready to retire yet?',
    a: 'The review is equally valuable whether retirement is 10 years away or 10 months away. In fact, many people find it most helpful 3-7 years out — when decisions about savings, Social Security strategy, and tax planning still have time to make a significant difference.',
  },
  {
    q: 'What topics does the review cover?',
    a: 'Your review can cover any combination of the following, depending on your priorities: retirement income and asset assessment, Social Security timing, tax and withdrawal strategy, healthcare and Medicare planning, portfolio risk and protection, and legacy and estate basics. You guide the conversation.',
  },
  {
    q: 'What information do I need to provide?',
    a: 'Nothing formal is required. A general picture of your retirement accounts, income sources (Social Security, pension, etc.), and your biggest concerns is enough to start. You do not need to share account statements or personal documents to request a review.',
  },
  {
    q: 'Is my information kept private?',
    a: 'Yes. Any information you share with us is treated with complete confidentiality and is never sold or shared with third parties without your explicit consent. We take your privacy seriously.',
  },
  {
    q: 'I already have a financial advisor. Can I still get a review?',
    a: 'Absolutely. Many people come to us for an independent second perspective — not to replace their existing advisor, but to make sure they fully understand what they have and what strategy is being followed. An informed client is always in a better position, regardless of who they work with.',
  },
  {
    q: 'How soon can I get my review?',
    a: 'We typically respond to review requests within 1 business day to schedule a time that works for you. The review itself usually takes 30-45 minutes depending on how many topics you want to explore.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 lg:py-36 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="navy-badge justify-center mb-7">
            Common Questions
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2C5A] mb-5 tracking-tight leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xl max-w-xl mx-auto leading-relaxed font-light">
            Everything you need to know about the free retirement review.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={cn(
                  'card-premium overflow-hidden transition-all duration-200',
                  isOpen && 'border-[#C5A46E]/28 shadow-card'
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-5 text-left px-7 py-5 group"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    'font-medium text-sm leading-snug transition-colors',
                    isOpen ? 'text-[#C5A46E]' : 'text-[#0F2C5A] group-hover:text-[#C5A46E]'
                  )}>
                    {q}
                  </span>
                  <span className={cn(
                    'shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors mt-0.5',
                    isOpen
                      ? 'bg-[#C5A46E]/15 text-[#C5A46E]'
                      : 'bg-slate-100 text-slate-400 group-hover:bg-[#C5A46E]/10 group-hover:text-[#C5A46E]'
                  )}>
                    {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </span>
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="px-7 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Still have questions?{' '}
            <a href="#review-form" className="text-[#C5A46E] font-semibold hover:underline">
              Request your free review
            </a>{' '}
            and ask us directly.
          </p>
        </div>
      </div>
    </section>
  )
}
