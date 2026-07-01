import { Ban, DollarSign, Users, TrendingUp, Clock, Layers } from 'lucide-react'

const BENEFITS = [
  { icon: Ban,       title: 'No More No-Shows',           stat: '97%',    statLabel: 'Show Rate',       description: 'Every appointment is double-confirmed and pre-educated. Prospects know exactly what the call is about and have committed their time. You don\'t pay for ghosts.' },
  { icon: DollarSign,title: 'Zero Wasted Ad Spend',       stat: '$0',     statLabel: 'Pay if No-Show',  description: 'Unlike Facebook leads or direct mail, you only spend money when a real, qualified prospect actually sits down with you. No guessing. No burning budget on cold lists.' },
  { icon: Users,     title: 'Genuinely Qualified Prospects',stat: '$500K+',statLabel: 'Min. Assets',    description: '$500K–$2M+ in verified investable assets. Pre-screened for annuity and wealth planning fit. These aren\'t "interested in learning more" forms — these are real buyers.' },
  { icon: TrendingUp,title: 'Consistent, Scalable Pipeline',stat: '4.2×', statLabel: 'Avg. ROI',        description: 'Set your target volume and we fill your calendar. No feast-or-famine cycles. No slow months. A predictable appointment flow you can actually build a business around.' },
  { icon: Clock,     title: 'Reclaim Your Selling Time',  stat: '10+',    statLabel: 'Hours Saved/Week',description: 'Stop wasting hours on cold calls, seminars, and unqualified referrals. We handle targeting, pre-education, setting, and confirmation. You show up and run your process.' },
  { icon: Layers,    title: 'Fully Turnkey System',       stat: '100%',   statLabel: 'Done-For-You',    description: 'From prospect identification to pre-call education to appointment setting and confirmation — the entire system runs without you. Plug in your close rate and scale.' },
]

export default function BenefitsGrid() {
  return (
    <section id="benefits" className="py-24 lg:py-32 section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-600/10 border border-emerald-600/20 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">Why Caliber Calendar</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Built to Fix the Exact Problems{' '}
            <br className="hidden sm:block" />
            <span className="text-emerald-400">Elite Advisors Face</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Every feature exists because a serious producer was losing money without it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map(({ icon: Icon, title, description, stat, statLabel }) => (
            <div
              key={title}
              className="group bg-[#0E243A] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center group-hover:bg-emerald-600/15 transition-colors">
                  <Icon className="w-5 h-5 text-emerald-400" strokeWidth={2} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-emerald-400 tabular-nums">{stat}</div>
                  <div className="text-slate-500 text-xs font-medium">{statLabel}</div>
                </div>
              </div>
              <h3 className="text-white font-bold text-base mb-2.5">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
