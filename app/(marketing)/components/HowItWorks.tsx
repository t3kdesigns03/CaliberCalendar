import { Target, BookOpen, PhoneCall, BadgeCheck } from 'lucide-react'

const STEPS = [
  {
    number: '01', icon: Target, title: 'Precision Targeting',
    description: 'We identify pre-retirees and retirees with $500K–$2M+ in investable assets using data-driven demographic and behavioral filters — not spray-and-pray lists. Only verified, qualified prospects make the cut.',
  },
  {
    number: '02', icon: BookOpen, title: 'Pre-Education Sequence',
    description: 'Prospects receive a structured pre-call education sequence — positioning annuities and wealth planning as a solution to their specific situation before they ever speak with you. They arrive informed and receptive.',
  },
  {
    number: '03', icon: PhoneCall, title: 'Expert Setter Books the Call',
    description: 'Our trained appointment specialists call, qualify, and book directly to your calendar. We confirm asset levels, intent, and availability. Every appointment is double-confirmed before it hits your schedule.',
  },
  {
    number: '04', icon: BadgeCheck, title: 'You Close. Pay Only on Show.',
    description: 'When the prospect shows up, you work your process. If they don\'t show, you don\'t pay — period. No hidden fees, no retainers, no BS. Pure performance-based alignment.',
    highlight: true,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 section-divider section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-600/10 border border-emerald-600/20 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">The Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            How Caliber Calendar Works
          </h2>
          <p className="text-slate-400 text-xl max-w-xl mx-auto">
            Four disciplined steps between a prospect's first touchpoint and your discovery call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {STEPS.map(({ number, icon: Icon, title, description, highlight }) => (
            <div
              key={number}
              className={`relative rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5 ${
                highlight
                  ? 'bg-emerald-600/[0.12] border border-emerald-500/40 hover:border-emerald-400/60 shadow-[0_0_40px_rgba(5,150,105,0.15)]'
                  : 'card-gradient-border hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              }`}
            >
              <div className="text-[10px] font-bold tracking-[0.2em] text-slate-600 mb-4 uppercase">Step {number}</div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                highlight ? 'bg-emerald-600/20 border border-emerald-600/30' : 'bg-white/[0.05] border border-white/[0.08]'
              }`}>
                <Icon className={`w-5 h-5 ${highlight ? 'text-emerald-400' : 'text-slate-300'}`} strokeWidth={2} />
              </div>
              <h3 className={`text-lg font-bold mb-3 ${highlight ? 'text-emerald-300' : 'text-white'}`}>{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              {highlight && (
                <div className="mt-5 inline-flex items-center gap-1.5 bg-emerald-600/15 border border-emerald-600/25 rounded-full px-3 py-1 text-xs font-semibold text-emerald-400">
                  <BadgeCheck className="w-3 h-3" /> Pay-Per-Show Guarantee
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
