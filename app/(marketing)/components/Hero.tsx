import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, BookOpen, Heart } from 'lucide-react'

const STATS = [
  { value: '100%',    label: 'No Cost — Ever'          },
  { value: '$0',      label: 'No Hidden Fees'           },
  { value: '5+',      label: 'Retirement Topics'        },
  { value: '1-on-1',  label: 'Personal Attention'       },
]

const TRUST_SIGNALS = [
  { icon: ShieldCheck, text: 'Independent Support' },
  { icon: BookOpen,    text: 'Educational First'   },
  { icon: Heart,       text: 'No Pressure — Ever'  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0F2C5A] flex flex-col justify-center overflow-hidden">

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 60% 0%, rgba(197,164,110,0.09) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(255,255,255,0.03) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Gold accent line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A46E]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">

          {/* Tagline badge */}
          <div className="gold-badge mb-8 text-sm font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46E] shrink-0" />
            Free retirement reviews. Clear guidance. No pressure.
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Clear Guidance for{' '}
            <span className="gradient-text">Your Retirement Goals</span>
            {' '}— At No Cost to You
          </h1>

          {/* Subheadline */}
          <p className="text-slate-300 text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl">
            Get a personalized, no-obligation review of your retirement assets and income
            strategy from an independent educational team — completely free.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <Link
              href="#review-form"
              className="btn-gold text-base px-8 py-4 group"
            >
              Request Your Free Retirement Review
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/resources"
              className="btn-outline-gold text-base px-8 py-4"
            >
              Explore Retirement Resources
            </Link>
          </div>

          {/* Soft risk profile link */}
          <div className="mb-10">
            <Link
              href="/risk-profile"
              className="inline-flex items-center gap-1.5 text-[#C5A46E]/80 hover:text-[#C5A46E] text-sm font-medium transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-[#C5A46E]/50 inline-block" />
              Or take our free 2-min retirement risk profile →
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 mb-16">
            {TRUST_SIGNALS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-300 text-sm">
                <Icon className="w-4 h-4 text-[#C5A46E] shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/[0.04] border border-[#C5A46E]/[0.18] rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-extrabold text-[#C5A46E] mb-0.5 tabular-nums">
                  {value}
                </div>
                <div className="text-slate-400 text-xs font-medium leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative logo treatment — right side on large screens */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 opacity-90">
          <div className="w-40 h-40 rounded-2xl bg-white/[0.06] border border-[#C5A46E]/[0.2] flex items-center justify-center p-4 shadow-gold-sm">
            <Image
              src="/logo2.jpg"
              alt="JBAdvantage"
              width={120}
              height={120}
              className="object-contain rounded-lg"
              priority
            />
          </div>
          <p className="text-[#C5A46E]/70 text-xs text-center max-w-[140px] leading-snug">
            Independent retirement support you can trust
          </p>
        </div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FAF8F5]/20 to-transparent pointer-events-none" />
    </section>
  )
}
