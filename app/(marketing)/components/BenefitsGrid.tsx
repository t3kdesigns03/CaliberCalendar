import { Clock, BookOpen, Users, ShieldCheck, TrendingUp, Heart } from 'lucide-react'

const BENEFITS = [
  {
    icon: Clock,
    title: 'Asset & Income Snapshot',
    desc: 'A plain-language picture of what you have, what it could realistically generate in retirement, and where the gaps might be.',
  },
  {
    icon: BookOpen,
    title: 'Social Security Timing Guidance',
    desc: 'An educational look at your claiming options, break-even points, and the impact of timing — one of the most important retirement decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Tax & Withdrawal Strategy Overview',
    desc: 'Learn how withdrawal order, Roth conversions, and tax-efficient sequencing can meaningfully improve how long your money lasts.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk & Protection Assessment',
    desc: 'Understand where your portfolio sits on the risk spectrum and how to think about protecting assets as you approach — or are in — retirement.',
  },
  {
    icon: Heart,
    title: 'Healthcare & Medicare Clarity',
    desc: 'Navigate Medicare timing, supplement vs. Advantage decisions, and long-term care planning with clear, educational guidance.',
  },
  {
    icon: Users,
    title: 'Personal Q&A Time',
    desc: 'Ask the questions you have been holding. Our team listens without judgment and responds with clarity — not sales language.',
  },
]

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="navy-badge justify-center mb-6 text-xs font-semibold tracking-widest uppercase">
            What You Will Receive
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F2C5A] mb-4 tracking-tight">
            Your Review Covers What Matters Most
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Every free review is personalized to your situation and focused on the topics that
            actually move the needle in retirement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-premium p-7 group">
              <div className="w-11 h-11 rounded-xl bg-[#0F2C5A]/[0.07] border border-[#0F2C5A]/[0.12] flex items-center justify-center mb-5 group-hover:bg-[#C5A46E]/10 group-hover:border-[#C5A46E]/25 transition-colors">
                <Icon className="w-5 h-5 text-[#0F2C5A] group-hover:text-[#C5A46E] transition-colors" />
              </div>
              <h3 className="text-[#0F2C5A] font-bold text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            All of this is included in your free, no-obligation retirement review.{' '}
            <a href="#review-form" className="text-[#C5A46E] font-semibold hover:underline">
              Request yours today →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
