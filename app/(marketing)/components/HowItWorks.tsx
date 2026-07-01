const STEPS = [
  {
    num: '01',
    title: 'Share Your Situation',
    desc: 'Fill out a short form — takes under 2 minutes. No financial documents required. Just a general picture of where you are and what you are hoping to understand.',
    note: null,
  },
  {
    num: '02',
    title: 'We Review Your Assets',
    desc: 'Our team takes time to understand your retirement timeline, income goals, and concerns before your personal review session.',
    note: null,
  },
  {
    num: '03',
    title: 'Receive Clear Insights',
    desc: 'You get a plain-language breakdown of your retirement picture — what you have, what gaps may exist, and what questions you should be asking.',
    note: 'This is the heart of the process',
  },
  {
    num: '04',
    title: 'Move Forward on Your Terms',
    desc: 'Take the insights home and decide what to do with them. No pressure to act. If working with a professional makes sense, we can help connect you — but only if you want it.',
    note: null,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="navy-badge justify-center mb-6 text-xs font-semibold tracking-widest uppercase">
            The Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F2C5A] mb-4 tracking-tight">
            How Your Free Review Works
          </h2>
          <p className="text-slate-500 text-xl max-w-xl mx-auto">
            Simple, private, and completely on your schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {STEPS.map(({ num, title, desc, note }, i) => {
            const isHighlight = i === 2
            return (
              <div
                key={num}
                className={
                  isHighlight
                    ? 'relative bg-[#0F2C5A] border border-[#C5A46E]/25 rounded-2xl p-7 shadow-gold-sm'
                    : 'relative card-premium p-7'
                }
              >
                {isHighlight && (
                  <div className="absolute -top-3 left-7">
                    <span className="bg-[#C5A46E] text-[#0F2C5A] text-xs font-bold px-3 py-1 rounded-full">
                      {note}
                    </span>
                  </div>
                )}
                <div
                  className={`text-4xl font-extrabold mb-5 tabular-nums ${isHighlight ? 'text-[#C5A46E]/40' : 'text-[#C5A46E]/30'}`}
                >
                  {num}
                </div>
                <h3 className={`font-bold text-lg mb-2 ${isHighlight ? 'text-white' : 'text-[#0F2C5A]'}`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed ${isHighlight ? 'text-slate-300' : 'text-slate-500'}`}>
                  {desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Connector line on large screens (decorative) */}
        <div className="hidden lg:flex items-center justify-center mt-8 gap-2 text-slate-400 text-sm">
          <div className="h-px bg-[#C5A46E]/20 flex-1 max-w-xs" />
          <span className="px-3 text-[#C5A46E]/60 text-xs font-medium">each step is pressure-free</span>
          <div className="h-px bg-[#C5A46E]/20 flex-1 max-w-xs" />
        </div>
      </div>
    </section>
  )
}
