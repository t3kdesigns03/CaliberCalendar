import { AlertCircle, TrendingDown, HelpCircle, GitMerge } from 'lucide-react'

const CHALLENGES = [
  {
    icon: AlertCircle,
    title: 'Conflicting Advice',
    desc: 'Financial media, friends, and family all say different things. Knowing what to trust — and act on — feels impossible.',
  },
  {
    icon: TrendingDown,
    title: 'Fear of Outliving Money',
    desc: 'With retirements lasting 25–30 years, the fear of running out before running out of time weighs on nearly everyone.',
  },
  {
    icon: HelpCircle,
    title: 'Not Sure If You Have Enough',
    desc: "You've been saving for years — but without a clear picture of what you have and what it can do, uncertainty lingers.",
  },
  {
    icon: GitMerge,
    title: 'Big Decisions, No Second Opinion',
    desc: 'Social Security timing, withdrawal strategy, Medicare — these are permanent decisions most people make just once.',
  },
]

export default function RetirementChallenge() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="navy-badge justify-center mb-7">
            Why People Come to Us
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2C5A] mb-5 tracking-tight leading-[1.1]">
            Retirement Is Full of Hard Questions
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Most people approaching retirement feel uncertain — and that is completely normal.
            The good news: clarity is possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CHALLENGES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-premium p-8 group">
              <div className="w-12 h-12 rounded-xl bg-[#C5A46E]/08 border border-[#C5A46E]/18 flex items-center justify-center mb-6 group-hover:bg-[#C5A46E]/14 group-hover:border-[#C5A46E]/30 transition-colors">
                <Icon className="w-5 h-5 text-[#C5A46E]" />
              </div>
              <h3 className="font-heading text-[#0F2C5A] font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
