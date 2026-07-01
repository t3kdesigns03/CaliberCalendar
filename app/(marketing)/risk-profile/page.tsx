import type { Metadata } from 'next'
import RiskProfileQuiz from './RiskProfileQuiz'

export const metadata: Metadata = {
  title: 'Free Retirement Risk Profile | JBAdvantage',
  description: 'Take our free 2-minute retirement risk profile. Discover your comfort level with market ups and downs — no jargon, no pressure.',
}

export default function RiskProfilePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Dark hero strip */}
      <div className="bg-[#0F2C5A] pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-badge justify-center mb-6 text-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46E]" />
            Free · 2 Minutes · No Right or Wrong Answers
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
            Your Free Retirement{' '}
            <span className="gradient-text">Risk Profile</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            A few quick questions to help you understand how comfortable you are with
            market ups and downs — and what that means for your retirement picture.
          </p>
        </div>
      </div>

      {/* Quiz card */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-24">
        <RiskProfileQuiz />
      </div>
    </div>
  )
}
