import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  { initials: 'MR', name: 'M.R.', title: 'Independent Annuity Producer', location: 'Texas',   stars: 5, highlight: 'Significantly higher close rate',        quote: 'I\'ve tried every lead source — direct mail, Facebook, seminar dinners. Nothing compares to getting pre-educated prospects who already understand what they\'re walking into. My close rate on these appointments is significantly higher than anything I ran before.' },
  { initials: 'DK', name: 'D.K.', title: 'Senior Wealth Advisor',        location: 'Florida', stars: 5, highlight: 'Pay-per-show model is a game changer',    quote: 'The pay-per-show model changed my entire mindset around lead costs. I know exactly what each revenue-generating conversation costs me. There\'s no guessing, no wasted budget, and no surprises at month-end. This is how appointment services should work.' },
  { initials: 'SB', name: 'S.B.', title: 'Registered Investment Advisor',location: 'Arizona', stars: 5, highlight: 'Pre-education sequence delivers results',  quote: 'The prospects come in understanding the value of annuities in a diversified plan. I\'m not educating from scratch on every call. The pre-call sequence does real work. My discovery calls are more productive and my proposals land better.' },
  { initials: 'TW', name: 'T.W.', title: 'Top Producer, FMO Network',    location: 'Georgia', stars: 5, highlight: 'Higher asset levels, cleaner process',     quote: 'I was skeptical. I\'d been burned by lead services before. But these appointments are genuinely different — higher asset levels, more engagement, and a much cleaner process overall. I\'ve referred three colleagues already.' },
]

const STATS = [
  { value: '97%',   label: 'Average Show Rate'                        },
  { value: '$1.2M', label: 'Largest Case Closed via Caliber Calendar' },
  { value: '4.2×',  label: 'Average Advisor ROI'                      },
  { value: '500+',  label: 'Appointments Set for Elite Producers'      },
]

export default function SocialProof() {
  return (
    <section className="py-24 lg:py-32 section-divider section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-600/10 border border-emerald-600/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-emerald-400 fill-current" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">Advisor Results</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">What Top Producers Are Saying</h2>
          <p className="text-slate-400 text-xl max-w-xl mx-auto">Paraphrased from real advisor feedback. Results vary based on closing ability and market.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-emerald-600/[0.08] border border-emerald-600/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-extrabold text-emerald-400 mb-1 tabular-nums">{value}</div>
              <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map(({ initials, name, title, location, stars, quote, highlight }) => (
            <div key={name} className="card-gradient-border rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5">
              <Quote className="w-7 h-7 text-emerald-600/40 mb-4" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(stars)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />)}
              </div>
              <blockquote className="text-slate-300 text-[15px] leading-relaxed my-4">"{quote}"</blockquote>
              <div className="inline-flex items-center bg-emerald-600/10 border border-emerald-600/20 rounded-full px-3 py-1 text-xs text-emerald-400 font-medium mb-5">{highlight}</div>
              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-xs font-bold text-white shrink-0">{initials}</div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-slate-500 text-xs">{title} · {location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-600 text-xs mt-8 max-w-2xl mx-auto">
          Testimonials are paraphrased from real advisor feedback and anonymized for privacy. Individual results vary and are not guaranteed. Caliber Calendar does not make income claims.
        </p>
      </div>
    </section>
  )
}
