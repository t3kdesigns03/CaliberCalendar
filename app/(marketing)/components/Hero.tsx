import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react'

const STATS = [
  { value: '$500K+', label: 'Min. Investable Assets',  sub: 'Per qualified prospect'  },
  { value: '4.2×',   label: 'Average Advisor ROI',     sub: 'vs. traditional lead gen' },
  { value: '97%',    label: 'Appointment Show Rate',   sub: 'Pre-confirmed & reminded' },
  { value: '$0',     label: 'Upfront Investment',      sub: 'Pay only on show'          },
]

const TRUST_BULLETS = [
  { icon: CheckCircle, text: 'No retainers. No long-term contracts.' },
  { icon: CheckCircle, text: 'Pay only when prospects actually show.' },
  { icon: Shield,      text: 'Compliance-reviewed qualification process.' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        <div className="absolute -top-32 -left-48 w-[600px] h-[600px] bg-emerald-700/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -right-48 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-emerald-900/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="inline-flex items-center gap-2.5 bg-emerald-600/10 border border-emerald-600/25 rounded-full px-4 py-2 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-emerald-300 text-sm font-medium tracking-wide">
            Pay-Per-Show · Zero Upfront Risk · Elite Producers Only
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.04] tracking-tight mb-7 max-w-4xl">
          Only Pay for Wealth & Annuity Appointments{' '}
          <span className="text-emerald-400">That Actually Show.</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl">
          Qualified{' '}
          <strong className="text-white font-semibold">$500K–$2M+ asset prospects</strong>
          {' '}— pre-educated, professionally set, and pre-confirmed.
          You close. We handle everything before "hello."{' '}
          <span className="text-emerald-400 font-semibold">Zero risk.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <Link
            href="#book-call"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-9 rounded-xl text-lg transition-all duration-200 hover:shadow-emerald-glow hover:-translate-y-0.5 active:scale-[0.98] group"
            style={{ paddingTop: '1.125rem', paddingBottom: '1.125rem' }}
          >
            Book Your Discovery Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="#roi"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white hover:bg-white/[0.05] font-semibold px-9 py-4 rounded-xl text-lg transition-all duration-200 active:scale-[0.98]"
          >
            Calculate My ROI
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-20 text-sm text-slate-400">
          {TRUST_BULLETS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STATS.map(({ value, label, sub }) => (
            <div
              key={label}
              className="bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.08] rounded-2xl p-5 lg:p-6 transition-colors duration-200"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 mb-1.5 tabular-nums">{value}</div>
              <div className="text-white font-semibold text-sm mb-0.5">{label}</div>
              <div className="text-slate-500 text-xs">{sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3 text-slate-400 text-sm">
          <div className="flex -space-x-2">
            {['A','B','C','D','E'].map((l) => (
              <div key={l} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 border-2 border-[#0A192F] flex items-center justify-center text-xs font-bold text-white">
                {l}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-yellow-400">
            {[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
          </div>
          <span>Trusted by top-producing advisors closing 6- and 7-figure annuity cases</span>
        </div>
      </div>
    </section>
  )
}
