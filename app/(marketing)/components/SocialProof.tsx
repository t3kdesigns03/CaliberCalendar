import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    initials: 'PD',
    name: 'P.D.',
    descriptor: 'Retired Educator, Ohio',
    stars: 5,
    highlight: 'Finally felt like someone was on my side',
    quote: 'I had been putting off reviewing my retirement accounts for years because I did not know where to start and was nervous about being pushed into something. The review was completely different — no pressure, just clear explanations. I finally understand what I actually have.',
  },
  {
    initials: 'RL',
    name: 'R. & C.L.',
    descriptor: 'Pre-retirees, Texas',
    stars: 5,
    highlight: 'Gave us a real roadmap',
    quote: 'My husband and I had three different accounts and no real picture of how they fit together. After our review, we had a clear sense of what we needed to do before we retire. The Social Security timing guidance alone was worth it. We felt educated, not sold to.',
  },
  {
    initials: 'MK',
    name: 'M.K.',
    descriptor: 'Semi-Retired, Florida',
    stars: 5,
    highlight: 'No pressure whatsoever',
    quote: 'What I appreciated most was that there was zero pressure. I expected a sales pitch. Instead I got a genuine, thoughtful conversation about my situation. When they did suggest an advisor, it was because it actually made sense for me — not because they had to.',
  },
  {
    initials: 'BW',
    name: 'B.W.',
    descriptor: 'Retired Business Owner, Georgia',
    stars: 5,
    highlight: 'Clarity I did not have before',
    quote: 'I thought I was well prepared — I had been saving my whole career. But the review surfaced a tax issue in my withdrawal strategy I had never considered. That conversation probably saved me significantly over the next ten years. I am so glad I did not wait.',
  },
]

const STATS = [
  { value: '100%',   label: 'Free to Get Started'        },
  { value: 'No',     label: 'Pressure or Sales Pitch'    },
  { value: '1-on-1', label: 'Personal Review'            },
  { value: '55+',    label: 'Age Group We Specialize In' },
]

export default function ClientStories() {
  return (
    <section id="stories" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="navy-badge justify-center mb-6 text-xs font-semibold tracking-widest uppercase">
            <Star className="w-3.5 h-3.5 text-[#C5A46E]" />
            Real Client Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F2C5A] mb-4 tracking-tight">
            What People Say After Their Review
          </h2>
          <p className="text-slate-500 text-xl max-w-xl mx-auto">
            Paraphrased from real client feedback. Names and identifying details changed for privacy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {STATS.map(({ value, label }) => (
            <div key={label} className="card-premium p-6 text-center">
              <div className="text-3xl font-extrabold text-[#C5A46E] mb-1 tabular-nums">{value}</div>
              <div className="text-slate-500 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map(({ initials, name, descriptor, stars, quote, highlight }) => (
            <div key={name} className="card-premium p-7 group">
              <Quote className="w-7 h-7 text-[#C5A46E]/25 mb-4" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#C5A46E] fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-600 text-[15px] leading-relaxed my-4">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="inline-flex items-center bg-[#C5A46E]/8 border border-[#C5A46E]/20 rounded-full px-3 py-1 text-xs text-[#C5A46E] font-semibold mb-5">
                {highlight}
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0F2C5A] to-[#163462] flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {initials}
                </div>
                <div>
                  <div className="text-[#0F2C5A] font-semibold text-sm">{name}</div>
                  <div className="text-slate-400 text-xs">{descriptor}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-8 max-w-2xl mx-auto">
          Testimonials are paraphrased from real client feedback and anonymized for privacy. Individual experiences may vary.
        </p>
      </div>
    </section>
  )
}
