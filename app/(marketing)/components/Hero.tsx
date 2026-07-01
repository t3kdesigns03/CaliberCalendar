import Link from 'next/link'
import { ArrowRight, ShieldCheck, BookOpen, Heart } from 'lucide-react'

const STATS = [
  { value: '100%', label: 'Free to Start' },
  { value: '$0',   label: 'No Hidden Fees' },
  { value: '5+',   label: 'Topics Covered' },
  { value: '1:1',  label: 'Personal Session' },
]

const TRUST_SIGNALS = [
  { icon: ShieldCheck, text: 'Independent Support' },
  { icon: BookOpen,    text: 'Educational First'   },
  { icon: Heart,       text: 'No Pressure — Ever'  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0F2C5A] flex items-center overflow-hidden">

      {/* Background texture — subtle radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 65% 55% at 50% -5%, rgba(197,164,110,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 35% 45% at 90% 70%, rgba(255,255,255,0.025) 0%, transparent 55%),
            radial-gradient(ellipse 30% 40% at 5% 75%, rgba(255,255,255,0.02) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A46E]/45 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A46E]/20 to-transparent" />

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center">

        {/* Tagline badge */}
        <div className="inline-flex gold-badge mb-10 text-sm font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46E] shrink-0 inline-block" />
          Free retirement reviews. Clear guidance. No pressure.
        </div>

        {/* Main headline — Playfair Display */}
        <h1 className="font-heading font-bold text-white tracking-tight leading-[1.06] mb-7">
          <span className="block text-[clamp(3rem,7vw,5.5rem)]">Clear Guidance for</span>
          <span className="block text-[clamp(3rem,7vw,5.5rem)] gradient-text-italic">
            Your Retirement Goals
          </span>
          <span className="block text-[clamp(3rem,7vw,5.5rem)]">— At No Cost.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-300 text-xl lg:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          A personalized, no-obligation review of your retirement assets and
          income strategy — from an independent educational team.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
          <Link href="#review-form" className="btn-gold text-base px-9 py-5 group">
            Request Your Free Retirement Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link href="/resources" className="btn-outline-gold text-base px-9 py-5">
            Explore Resources
          </Link>
        </div>

        {/* Soft secondary link */}
        <div className="mb-16">
          <Link
            href="/risk-profile"
            className="inline-flex items-center gap-1.5 text-[#C5A46E]/70 hover:text-[#C5A46E] text-sm font-medium transition-colors"
          >
            <span className="w-1 h-1 rounded-full bg-[#C5A46E]/50 inline-block" />
            Or take our free 2-min retirement risk profile →
          </Link>
        </div>

        {/* Gold rule */}
        <div className="gold-line mb-14 max-w-sm mx-auto" />

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {TRUST_SIGNALS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-slate-300 text-sm">
              <Icon className="w-4 h-4 text-[#C5A46E] shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/[0.045] border border-[#C5A46E]/[0.18] rounded-2xl px-4 py-5 text-center"
            >
              <div className="font-heading text-3xl font-bold text-[#C5A46E] mb-1 tabular-nums">
                {value}
              </div>
              <div className="text-slate-400 text-xs font-medium leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
