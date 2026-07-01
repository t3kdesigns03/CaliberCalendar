'use client'

import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQS = [
  { q: 'What exactly does "pay-per-show" mean?', a: 'It means exactly what it says. You are only charged when a qualified prospect actually shows up to your scheduled appointment. If a prospect books but doesn\'t show, you owe nothing for that slot. Zero risk on no-shows — ever.' },
  { q: 'How do you qualify prospects at the $500K+ asset level?', a: 'We use a combination of demographic data targeting, behavioral signals, and a direct qualification conversation before the appointment is set. Our setters ask about investable assets, retirement timeline, and openness to reviewing their current plan. Only prospects who meet your criteria and confirm their asset level make it onto your calendar.' },
  { q: 'What does the pre-education sequence look like?', a: 'Before the appointment, prospects receive a structured sequence of educational content that positions the value of annuities and wealth planning in the context of their specific situation — income planning, asset protection, legacy. They aren\'t receiving a sales pitch. They\'re receiving context. By the time they speak with you, they understand why the conversation is relevant.' },
  { q: 'How many appointments can I receive per month?', a: 'We work with you to define a monthly volume target based on your capacity to run discovery calls and follow up. We can typically support 10–50+ qualified show appointments per month depending on geography and asset criteria. Volume is scalable as your process and bandwidth grow.' },
  { q: 'Is this compliant with my broker-dealer or RIA requirements?', a: 'Our process is designed to be fully compliant — we do not make financial representations on your behalf, we do not guarantee investment returns in any educational materials, and all prospect communications follow established guidelines. That said, compliance requirements vary by firm. We strongly recommend reviewing our process materials with your compliance team before onboarding.' },
  { q: 'What types of advisors is Caliber Calendar built for?', a: 'We work exclusively with established, experienced financial advisors and annuity producers who have a proven close process and the capacity to run qualified discovery calls. This is not for new advisors or those without a defined process. If you are closing 6- and 7-figure annuity or wealth management cases and want a consistent, qualified pipeline, you are exactly who we built this for.' },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={cn('border rounded-xl transition-all duration-200', isOpen ? 'bg-[#0E243A] border-white/[0.14]' : 'bg-[#0A1F35] border-white/[0.06] hover:border-white/10')}>
      <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" onClick={onToggle} aria-expanded={isOpen}>
        <span className={cn('font-semibold text-base transition-colors', isOpen ? 'text-white' : 'text-slate-200')}>{q}</span>
        <span className={cn('shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200', isOpen ? 'bg-emerald-600/20 border-emerald-600/30 text-emerald-400' : 'bg-white/[0.05] border-white/10 text-slate-400')}>
          {isOpen ? <Minus className="w-3.5 h-3.5" strokeWidth={2.5} /> : <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />}
        </span>
      </button>
      <div className={cn('overflow-hidden transition-all duration-300 ease-in-out', isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
        <p className="px-6 pb-6 text-slate-400 text-[15px] leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 lg:py-32 section-divider">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-600/10 border border-emerald-600/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">Questions Serious Producers Ask</h2>
          <p className="text-slate-400 text-lg">If something isn't answered here, ask us directly on your discovery call.</p>
        </div>
        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} isOpen={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
