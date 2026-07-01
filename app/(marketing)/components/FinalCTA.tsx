import { ArrowRight, CheckCircle, TrendingUp, Calendar } from 'lucide-react'

const QUALIFIERS = [
  'Actively writing annuity or wealth management cases',
  'Have a proven discovery call and close process',
  'Can run 10–40+ qualified appointments per month',
  'Looking to grow to 6- or 7-figure monthly production',
]

export default function FinalCTA() {
  return (
    <section id="book-call" className="py-24 lg:py-32 section-divider relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-700/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-600/10 border border-emerald-600/20 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-sm font-semibold">Now Accepting New Advisors</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Ready to Stop Chasing<br />
              <span className="text-emerald-400">and Start Closing?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Caliber Calendar is built for elite producers who are serious about scaling. If you have a proven close process and want a consistent flow of pre-educated, high-net-worth prospects who actually show — this call is your next step.
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-[0.15em]">This is the right fit if you:</p>
              {QUALIFIERS.map((q) => (
                <div key={q} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-slate-300 text-sm">{q}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-600/[0.08] border border-emerald-600/20 rounded-xl p-4 flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-emerald-300 font-semibold text-sm mb-0.5">Pay-Per-Show. Always.</div>
                <div className="text-slate-400 text-xs">If a prospect doesn't show, you don't pay. That's the model. No exceptions.</div>
              </div>
            </div>
          </div>

          {/* Right: booking */}
          <div id="qualify">
            <div className="bg-[#0E243A] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-600/15 border border-emerald-600/25 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-bold">Book Your Discovery Call</div>
                  <div className="text-slate-500 text-xs">30 minutes · Free · No commitment</div>
                </div>
              </div>

              {/* Calendly placeholder */}
              <div className="bg-[#0A192F] border border-white/[0.06] rounded-xl min-h-[340px] flex flex-col items-center justify-center gap-4 p-8 text-center mb-6">
                <div className="w-14 h-14 bg-emerald-600/10 border border-emerald-600/20 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Calendly Embed</div>
                  <div className="text-slate-500 text-sm max-w-xs">
                    Drop your Calendly inline embed script here.<br />
                    Set <code className="text-emerald-400 text-xs bg-emerald-600/10 px-1.5 py-0.5 rounded">NEXT_PUBLIC_CALENDLY_URL</code> in your .env.
                  </div>
                </div>
              </div>

              <div className="relative flex items-center gap-4 mb-5">
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-slate-600 text-xs font-medium">or</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <a
                href="mailto:hello@calibercalendar.com?subject=Discovery%20Call%20Request"
                className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-emerald-glow active:scale-[0.98] group"
              >
                Request a Call Directly
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-center text-slate-600 text-xs mt-4">We respond to all qualified inquiries within 1 business day.</p>
            </div>

            <div className="mt-5 text-center text-slate-500 text-sm">
              Not ready to book?{' '}
              <a href="#roi" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Run the ROI Calculator first →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
