import Link from 'next/link'
import { ArrowRight, BarChart2 } from 'lucide-react'

export default function RiskProfileBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0F2C5A] rounded-2xl p-8 sm:p-10 overflow-hidden">

          {/* Decorative gold glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 50% 80% at 90% 50%, rgba(197,164,110,0.12) 0%, transparent 65%)',
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            {/* Icon */}
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#C5A46E]/15 border border-[#C5A46E]/30 flex items-center justify-center">
              <BarChart2 className="w-7 h-7 text-[#C5A46E]" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="gold-badge mb-3 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46E]" />
                Free · 2 Minutes
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                What Is Your Retirement Risk Comfort Zone?
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-lg">
                Take our free 2-minute risk profile and discover how comfortable you are with
                market ups and downs — and what it means for your retirement plan.
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0 flex flex-col items-start sm:items-center gap-2">
              <Link
                href="/risk-profile"
                className="btn-gold whitespace-nowrap px-7 py-3.5 text-sm group"
              >
                Take the Free Profile
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <span className="text-slate-500 text-xs text-center">No signup required to start</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
