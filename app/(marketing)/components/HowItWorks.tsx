const STEPS = [
  {
    num: '01',
    title: 'Share Your Situation',
    desc: 'Fill out a short form in under 2 minutes. No financial documents required — just a general picture of where you are and what you are hoping to understand.',
    highlight: false,
    note: null,
  },
  {
    num: '02',
    title: 'We Review Your Assets',
    desc: 'Our team takes time to understand your retirement timeline, income goals, and concerns before your personal review session.',
    highlight: false,
    note: null,
  },
  {
    num: '03',
    title: 'Receive Clear Insights',
    desc: 'You get a plain-language breakdown of your retirement picture — what you have, what gaps may exist, and what questions you should be asking.',
    highlight: true,
    note: 'Heart of the process',
  },
  {
    num: '04',
    title: 'Move Forward on Your Terms',
    desc: 'Take the insights home and decide what to do with them. No pressure to act. If connecting with a professional makes sense, we can help — but only if you want it.',
    highlight: false,
    note: null,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 lg:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="navy-badge justify-center mb-7">
            The Process
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2C5A] mb-5 tracking-tight leading-[1.1]">
            How Your Free Review Works
          </h2>
          <p className="text-slate-500 text-xl max-w-xl mx-auto leading-relaxed font-light">
            Simple, private, and completely on your schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(({ num, title, desc, highlight, note }) => (
            <div
              key={num}
              className={
                highlight
                  ? 'relative bg-[#0F2C5A] border border-[#C5A46E]/25 rounded-2xl p-8 shadow-gold-sm'
                  : 'relative card-premium p-8'
              }
            >
              {highlight && note && (
                <div className="absolute -top-3.5 left-8">
                  <span className="bg-[#C5A46E] text-[#0F2C5A] text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">
                    {note}
                  </span>
                </div>
              )}
              <div className={`font-heading text-5xl font-bold mb-6 tabular-nums ${highlight ? 'text-[#C5A46E]/35' : 'text-[#C5A46E]/25'}`}>
                {num}
              </div>
              <h3 className={`font-heading font-bold text-xl mb-3 ${highlight ? 'text-white' : 'text-[#0F2C5A]'}`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed ${highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center justify-center mt-10 gap-3 text-slate-400 text-xs">
          <div className="h-px bg-[#C5A46E]/15 flex-1 max-w-xs" />
          <span className="text-[#C5A46E]/50 font-medium tracking-wide uppercase text-[10px]">each step is pressure-free</span>
          <div className="h-px bg-[#C5A46E]/15 flex-1 max-w-xs" />
        </div>
      </div>
    </section>
  )
}
