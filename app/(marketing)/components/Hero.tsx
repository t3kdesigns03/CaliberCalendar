import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react'

const STATS = [
  { value: '$500K+', label: 'Min. Investable Assets', sub: 'Per qualified prospect'   },
  { value: '4.2×',   label: 'Average ROI',            sub: 'vs. traditional lead gen'  },
  { value: '97%',    label: 'Show Rate',               sub: 'Pre-confirmed & reminded'  },
  { value: '$0',     label: 'Upfront Cost',            sub: 'Pay only on show'           },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pb-28 lg:pb-16">

      {/* ── Backgrounds ──────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-48 -left-24 w-[750px] h-[750px] bg-emerald-500/20 rounded-full blur-[180px]" />
        <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-blue-700/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-emerald-900/25 rounded-full blur-[200px]" />
        {/* Top hairline */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0A192F] to-transparent" />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32">

        {/* ════════════════════════════════════════════════════
            LOGO — the brand anchor
        ════════════════════════════════════════════════════ */}
        <div className="mb-10 sm:mb-12 lg:mb-14">

          {/* Glow halo sits behind the logo */}
          <div className="relative inline-flex">
            <div
              className="absolute -inset-6 sm:-inset-8 rounded-[40px] pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 40% 50%, rgba(5,150,105,0.22) 0%, rgba(77,166,255,0.08) 55%, transparent 80%)',
                filter: 'blur(20px)',
              }}
            />

            <Image
              src="/logo-light.svg"
              alt="Caliber Calendar"
              width={520}
              height={136}
              priority
              className="relative h-[72px] sm:h-24 lg:h-[110px] w-auto max-w-[340px] sm:max-w-[480px] lg:max-w-[600px]"
              style={{
                filter:
                  'drop-shadow(0 0 32px rgba(5,150,105,0.42)) drop-shadow(0 6px 28px rgba(0,0,0,0.65))',
              }}
            />
          </div>

          {/* Thin emerald rule — anchors the logo visually */}
          <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-px bg-gradient-to-r from-emerald-500/70 to-transparent" />
        </div>

        {/* ── Trust badges ─────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2.5 mb-7 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-600/[0.12] border border-emerald-500/30 rounded-full px-3.5 py-2">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide">
              Pay-Per-Show · Zero Upfront Risk
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-amber-500/[0.08] border border-amber-500/20 rounded-full px-3.5 py-2">
            <span className="text-amber-300/90 text-xs sm:text-sm font-medium">⚡ Limited advisor capacity</span>
          </div>
        </div>

        {/* ── Headline ─────────────────────────────────────── */}
        <h1 className="text-[2.15rem] sm:text-4xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight mb-5 lg:mb-6 max-w-[22ch] lg:max-w-[24ch]">
          <span className="text-white">Qualified $500K+ Appointments. </span>
          <span className="gradient-text">Pay Only When They Show.</span>
        </h1>

        {/* ── Sub-headline ─────────────────────────────────── */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 lg:mb-10 max-w-xl lg:max-w-2xl">
          Pre-educated wealth and annuity prospects — professionally set, double-confirmed,
          and delivered directly to your calendar.{' '}
          <span className="text-white font-semibold">No-show? You pay nothing.</span>
        </p>

        {/* ── CTAs — one dominant primary, one clear secondary ─ */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 gap-x-5 mb-7 lg:mb-10">

          {/* Primary — full-weight button */}
          <Link
            href="#book-call"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 sm:px-8 py-4 rounded-xl text-base sm:text-lg transition-all duration-200 hover:shadow-emerald-glow hover:-translate-y-0.5 active:scale-[0.98] group w-full sm:w-auto"
          >
            Apply for a Discovery Call
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Secondary — text link, zero visual competition */}
          <Link
            href="#roi"
            className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors duration-150 underline underline-offset-[5px] decoration-slate-700 hover:decoration-emerald-500/50 text-center sm:text-left"
          >
            Calculate my ROI first →
          </Link>
        </div>

        {/* ── Micro trust signals ──────────────────────────── */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 lg:mb-14">
          {[
            { Icon: CheckCircle, label: 'No retainers or contracts'     },
            { Icon: CheckCircle, label: '$500K–$2M+ verified assets'    },
            { Icon: Shield,      label: 'Compliance-reviewed'           },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-slate-500 text-xs sm:text-sm">
              <Icon className="w-3.5 h-3.5 text-emerald-500/80 shrink-0" strokeWidth={2.5} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* ── Stats grid ───────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {STATS.map(({ value, label, sub }) => (
            <div
              key={label}
              className="bg-white/[0.04] hover:bg-white/[0.065] border border-white/[0.07] rounded-xl p-4 lg:p-5 transition-colors duration-200 group"
            >
              <div className="text-2xl lg:text-[2rem] font-extrabold text-emerald-400 mb-1 tabular-nums leading-none">
                {value}
              </div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-0.5">{label}</div>
              <div className="text-slate-600 text-[10px] sm:text-xs">{sub}</div>
            </div>
          ))}
        </div>

        {/* ── Social proof ─────────────────────────────────── */}
        <div className="mt-7 lg:mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-slate-500 text-xs sm:text-sm">
          <div className="flex -space-x-2 shrink-0">
            {['A','B','C','D','E'].map((l) => (
              <div
                key={l}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 border-2 border-[#0A192F] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white"
              >
                {l}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-0.5 text-yellow-400/80 shrink-0">
            {[0,1,2,3,4].map((i) => (
              <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            ))}
          </div>
          <span>Trusted by top-producing advisors closing 6- and 7-figure cases</span>
        </div>

      </div>
    </section>
  )
}
