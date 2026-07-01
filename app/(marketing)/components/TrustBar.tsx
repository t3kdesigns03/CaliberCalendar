import { Shield, Award, Users, TrendingUp, Lock, CheckCircle } from 'lucide-react'

const BADGES = [
  { icon: Shield,      text: 'Compliance-Reviewed Process'     },
  { icon: CheckCircle, text: 'Pay-Per-Show Guarantee'          },
  { icon: Users,       text: 'Elite Advisor Network'           },
  { icon: TrendingUp,  text: 'Avg. $500K–$2M+ Asset Prospects' },
  { icon: Award,       text: '6 & 7-Figure Case Experience'    },
  { icon: Lock,        text: 'No Contracts, No Retainers'      },
]

export default function TrustBar() {
  return (
    <section className="section-divider py-6 bg-[#0D2136]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-x-4 gap-y-4">
          {BADGES.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-slate-400 text-sm font-medium flex-1 min-w-fit">
              <Icon className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2} />
              <span className="whitespace-nowrap">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
