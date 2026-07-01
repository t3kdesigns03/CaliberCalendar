import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react'

const STATS = [
  { value: '$500K+', label: 'Min. Investable Assets',  sub: 'Per qualified prospect'  },
  { value: '4.2×',   label: 'Average Advisor ROI',     sub: 'vs. traditional lead gen' },
  { value: '97%',    label: 'Show Rate',               sub: 'Pre-confirmed & reminded' },
  { value: '$0',     label: 'Upfront Risk',            sub: 'Pay only on show'          },
]

const TRUST_BULLETS = [
  { icon: CheckCircle, text: 'No retainers or long-term contracts.' },
  { icon: CheckCircle, text: 'Pay only when prospects show up.'    },
  { icon: Shield,      text: 'Compliance-reviewed process.'         },
]

export default function Hero() {
  return (
    // pb-28 on mobile gives clearance above the fixed floating CTA button
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-28 lg:pb-0">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Ambient glow orbs — much more visible */}
        <div className="absolute -top-40 -left-32 w-[700px] h-[700px] bg-emerald-500/25 rounded-full blur-[160px]" />
        <div className="absolute -bottom-20 -right-32 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-800/30 rounded-full blur-[200px]" />
        {/* Sharp accent line at top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-36">

        {/* ── Logo lockup ──────────────────────────────────── */}
        <div className="mb-8 lg:mb-12">
          <Image
            src="/logo-light.svg"
            alt="Caliber Calendar"
            width={260}
            height={68}
            priority
            className="h-12 sm:h-14 lg:h-16 w-auto max-w-[260px] sm:max-w-[320px]"
          />
        </div>

        {/* ── Badge ────────────────────────────────────────── */}
        <div className="inline-flex items-center gap-2 bg-emerald-600/10 border border-emerald-600/25 rounded-full px-3 py-1.5 mb-7 lg:mb-10">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {/* Shorter on mobile, full on sm+ */}
          <span className="text-emerald-300 text-xs sm:text-sm font-medium tracking-wide">
            <span className="sm:hidden">Pay-Per-Show · Zero Risk</span>
            <span className="hidden sm:inline">Pay-Per-Show · Zero Upfront Risk · Elite Producers Only</span>
          </span>
        </div>

        {/* ── Headline ─────────────────────────────────────── */}
        <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-[1.06] tracking-tight mb-5 lg:mb-7 max-w-4xl">
          <span className="text-white">Only Pay for Wealth &amp; Annuity Appointments </span>
          <span className="gradient-text">That Actually Show.</span>
        </h1>

        {/* ── Sub-headline ─────────────────────────────────── */}
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-8 lg:mb-12 max-w-2xl lg:max-w-3xl">
          Qualified{' '}
          <strong className="text-white font-semibold">$500K–$2M+ asset prospects</strong>
          {' '}— pre-educated, professionally set, and pre-confirmed.
          You close.{' '}
          <span className="text-emerald-400 font-semibold">Zero risk.</span>
        </p>

        {/* ── CTAs ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 lg:mb-14">
          <Link
            href="#book-call"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl text-base sm:text-lg transition-all duration-200 hover:shadow-emerald-glow hover:-translate-y-0.5 active:scale-[0.98] group"
          >
            Book Your Discovery Call
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="#roi"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white hover:bg-white/[0.05] font-semibold px-7 py-4 rounded-xl text-base sm:text-lg transition-all duration-200 active:scale-[0.98]"
          >
            Calculate My ROI
          </Link>
        </div>

        {/* ── Trust bullets ────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-6 mb-10 lg:mb-20 text-sm text-slate-400">
          {TRUST_BULLETS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* ── Stats grid ───────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {STATS.map(({ value, label, sub }) => (
            <div
              key={label}
              className="bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.08] rounded-xl lg:rounded-2xl p-4 lg:p-6 transition-colors duration-200"
            >
              <div className="text-2xl lg:text-4xl font-extrabold text-emerald-400 mb-1 tabular-nums">{value}</div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-0.5">{label}</div>
              <div className="text-slate-500 text-[11px] sm:text-xs">{sub}</div>
            </div>
          ))}
        </div>

        {/* ── Social proof strip ───────────────────────────── */}
        <div className="mt-8 lg:mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-slate-400 text-xs sm:text-sm">
          <div className="flex -space-x-2 shrink-0">
            {['A','B','C','D','E'].map((l) => (
              <div key={l} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 border-2 border-[#0A192F] flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">
                {l}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-0.5 text-yellow-400 shrink-0">
            {[0,1,2,3,4].map((i) => <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />)}
          </div>
          <span className="text-slate-400">Trusted by top-producing advisors closing 6- and 7-figure cases</span>
        </div>
      </div>
    </section>
  )
}
