import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const REASSURANCES = [
  'No cost — completely free',
  'No pressure or commitment',
  'No jargon or confusing terms',
  'No obligation to act on anything',
]

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#0F2C5A] relative overflow-hidden">

      {/* Decorative gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(197,164,110,0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Gold accent line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A46E]/30 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Section label */}
        <div className="gold-badge justify-center mb-8 text-sm font-semibold tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46E] shrink-0" />
          Free retirement reviews. Clear guidance. No pressure.
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
          Ready to Get Clear on{' '}
          <span className="gradient-text">Your Retirement Picture?</span>
        </h2>

        <p className="text-slate-300 text-xl mb-10 leading-relaxed">
          A complimentary retirement asset review is waiting for you — no strings attached,
          no financial documents required, no commitment needed.
        </p>

        {/* Reassurances */}
        <div className="grid sm:grid-cols-2 gap-3 mb-12 text-left max-w-xl mx-auto">
          {REASSURANCES.map((text) => (
            <div key={text} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#C5A46E] shrink-0" />
              <span className="text-slate-300 text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <Link
          href="#review-form"
          className="btn-gold text-base px-10 py-5 group"
        >
          Start My Free Retirement Review
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <p className="mt-6 text-slate-500 text-sm">
          We respond within 1 business day. No spam, ever.
        </p>
      </div>
    </section>
  )
}
