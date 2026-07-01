import { X, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ROWS = [
  {
    label:  'Show Rate',
    old:    '20–40% — if they even pick up',
    new:    '97% average show rate, confirmed',
  },
  {
    label:  'Asset Level',
    old:    'Self-reported or completely unknown',
    new:    '$500K–$2M+ verified investable assets',
  },
  {
    label:  'Cost Model',
    old:    'Pay per lead, click, or event — no matter what',
    new:    'Pay only when they show. No exceptions.',
  },
  {
    label:  'Prospect Mindset',
    old:    'Cold, confused, no idea why they\'re talking to you',
    new:    'Pre-educated on wealth planning — ready to engage',
  },
  {
    label:  'Your Time',
    old:    'Hours chasing, confirming, rescheduling',
    new:    'Zero. We target, educate, set, and confirm.',
  },
  {
    label:  'Pipeline',
    old:    'Feast-or-famine. Completely unpredictable.',
    new:    '10–50+ confirmed appointments per month',
  },
]

const PAIN_POINTS = [
  'Burning $3,000 on a seminar dinner for 2 good prospects',
  'Facebook leads who have $40K in a 401(k) and "just want info"',
  'Cold calling lists with 15% contact rates and zero qualification',
  'Direct mail with no accountability and no follow-up tracking',
  'Referrals you can\'t scale no matter how good your service is',
]

export default function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 section-divider relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-red-900/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-emerald-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <span className="text-red-400 text-sm font-semibold tracking-wide">The Hard Truth</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Every Other Lead Source Has{' '}
            <span className="text-red-400">a Fatal Flaw.</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            You already know this. You've spent the money and lived through the disappointment.
            Here's what that actually looks like — and what we built instead.
          </p>
        </div>

        {/* Pain points row */}
        <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-7 mb-10">
          <p className="text-red-300 font-semibold text-sm uppercase tracking-[0.12em] mb-5">Sound familiar?</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PAIN_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
          {/* Column headers */}
          <div className="grid grid-cols-3 bg-[#060F1C]">
            <div className="px-6 py-4 text-slate-600 text-xs font-semibold uppercase tracking-[0.12em]">Category</div>
            <div className="px-6 py-4 border-l border-white/[0.06]">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.12em]">Everything Else</span>
            </div>
            <div className="px-6 py-4 border-l border-emerald-600/20 bg-emerald-600/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.12em]">Caliber Calendar</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map(({ label, old, new: newVal }, i) => (
            <div key={label} className={`grid grid-cols-3 border-t border-white/[0.06] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
              <div className="px-6 py-5 flex items-center">
                <span className="text-white font-semibold text-sm">{label}</span>
              </div>
              <div className="px-6 py-5 border-l border-white/[0.06] flex items-start gap-2.5">
                <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-slate-500 text-sm leading-relaxed">{old}</span>
              </div>
              <div className="px-6 py-5 border-l border-emerald-600/20 bg-emerald-600/[0.04] flex items-start gap-2.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-emerald-100 text-sm font-medium leading-relaxed">{newVal}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-emerald-600/[0.08] border border-emerald-600/25 rounded-2xl px-7 py-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">Ready to stop gambling on lead gen?</p>
            <p className="text-slate-400 text-sm">See exactly what your ROI looks like with Caliber Calendar — before you commit to anything.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="#roi"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/10 border border-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all"
            >
              Run the ROI Calculator
            </Link>
            <Link
              href="#book-call"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all hover:shadow-emerald-glow group"
            >
              Book Discovery Call <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
