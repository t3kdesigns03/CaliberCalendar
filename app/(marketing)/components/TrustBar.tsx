import { AlertCircle, TrendingDown, HelpCircle, GitMerge } from 'lucide-react'

const CHALLENGES = [
  {
    icon: AlertCircle,
    title: 'Conflicting Advice',
    desc: 'Financial media, friends, and well-meaning family all say different things. It is hard to know what to actually trust.',
  },
  {
    icon: TrendingDown,
    title: 'Fear of Outliving Money',
    desc: 'With retirements lasting 25–30 years, the fear of running out before running out of time weighs on nearly everyone.',
  },
  {
    icon: HelpCircle,
    title: 'Not Sure If You Have Enough',
    desc: 'You have been saving for years, but without a clear picture of what you have and what it can do, uncertainty lingers.',
  },
  {
    icon: GitMerge,
    title: 'Big Decisions, No Second Opinion',
    desc: 'Social Security timing, withdrawal strategy, Medicare — these are permanent decisions most people make just once.',
  },
]

export default function RetirementChallenge() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="navy-badge justify-center mb-6 text-xs font-semibold tracking-widest uppercase">
            Why People Come to Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F2C5A] mb-4 tracking-tight">
            Retirement Is Full of Hard Questions
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Most people approaching retirement feel uncertain — and that is completely normal.
            The good news: clarity is possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CHALLENGES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-premium p-7">
              <div className="w-11 h-11 rounded-xl bg-[#C5A46E]/10 border border-[#C5A46E]/20 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-[#C5A46E]" />
              </div>
              <h3 className="text-[#0F2C5A] font-bold text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
