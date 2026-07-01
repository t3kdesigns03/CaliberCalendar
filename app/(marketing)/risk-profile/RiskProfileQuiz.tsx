'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle, Send, BarChart2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Questions ──────────────────────────────────────────────── */
const QUESTIONS = [
  {
    id: 1,
    question:
      'When it comes to your retirement savings, how comfortable are you with the idea that your balance might go up and down from year to year — if it means potentially more growth over the long run?',
    options: [
      'I really dislike the idea — steady and predictable is best for me',
      "I can tolerate a little, but it stresses me out",
      "I'm okay with moderate swings as long as the big picture looks good",
      "I'm generally comfortable — I know it's part of the process",
      "Completely fine — short-term swings don't bother me at all",
    ],
  },
  {
    id: 2,
    question:
      "Imagine you check your retirement account and it's dropped 20% over the past few months. What would you most likely do?",
    options: [
      'Seriously consider moving everything to something safer',
      'Move some of it to lower my risk',
      "Stay put — I'd be anxious, but I'd wait it out",
      "Hold firm — I know this is long-term money",
      'See it as an opportunity and consider investing more',
    ],
  },
  {
    id: 3,
    question:
      'How important is it to you that your retirement balance stays relatively steady — even if that means slower growth?',
    options: [
      "Very important — peace of mind comes first",
      "Fairly important — I want stability with modest growth",
      "Somewhat important — I want a balance of both",
      "Not that important — growth matters more to me",
      "Not important at all — I'm focused on growth over stability",
    ],
  },
  {
    id: 4,
    question: 'How would you describe your experience with investing so far in your life?',
    options: [
      "Very little — this is mostly new territory for me",
      "Some basics — I have accounts but don't follow them closely",
      "Moderate — I understand the general concepts and check in regularly",
      "Pretty experienced — I actively monitor or manage my investments",
      "Very experienced — investing is something I know and follow well",
    ],
  },
  {
    id: 5,
    question: 'When it comes to your retirement savings, what feels more important to you right now?',
    options: [
      "Knowing my money is protected, even if it grows slowly",
      "Mostly protection, with a little growth on top",
      "A real balance — protect what I have while still growing it",
      "Mostly growth — I want to keep building my wealth",
      "Maximum growth — I'm focused on building as much as I can",
    ],
  },
  {
    id: 6,
    question: 'About how long until you expect to start drawing on your retirement savings?',
    options: [
      "Within the next year or two — or I'm already retired",
      "Roughly 2 to 5 years",
      "Somewhere between 5 and 10 years",
      "Probably 10 to 15 years",
      "15 or more years away",
    ],
  },
  {
    id: 7,
    question:
      'How comfortable do you feel making decisions about your money during uncertain times — when markets are volatile or financial news is unsettling?',
    options: [
      "Very uncomfortable — I tend to worry a lot and want to pull back",
      "A bit uneasy — I usually get more cautious",
      "Somewhat comfortable — I try to stay calm, but it takes effort",
      "Generally comfortable — I can tune out the noise",
      "Very comfortable — uncertainty doesn't shake my confidence",
    ],
  },
  {
    id: 8,
    question:
      "If you received an unexpected $50,000 today specifically earmarked for retirement, how would you most likely invest it?",
    options: [
      "Something very safe — CDs, savings accounts, or Treasury bonds",
      "Mostly safe investments with a small portion in stocks",
      "A balanced mix of stocks and bonds",
      "Mostly stocks with some safer investments for cushion",
      "All or mostly in stocks or other growth-oriented investments",
    ],
  },
  {
    id: 9,
    question: 'When you hear news about a big stock market drop, what is your typical gut reaction?',
    options: [
      "I feel anxious and want to protect my money right away",
      "I worry, but I try not to act on it",
      "I notice it, but I remind myself these things happen",
      "I stay pretty calm — I know markets go through cycles",
      "I tune it out — or even see it as a potential opportunity",
    ],
  },
  {
    id: 10,
    question:
      'Overall, which phrase best describes your philosophy when it comes to growing your retirement savings?',
    options: [
      "Preserve what I have — safety first, always",
      "Grow slowly and carefully — slow and steady wins",
      "Balanced — I want solid growth with reasonable protection",
      "Grow confidently — I can handle the bumps along the way",
      "Maximize growth — time is on my side and I want to use it",
    ],
  },
]

/* ─── Scoring ────────────────────────────────────────────────── */
const PROFILES = [
  {
    name: 'Conservative',
    range: '10–18',
    min: 10,
    max: 18,
    colorAccent: '#64748B',
    bgClass: 'bg-slate-50 border-slate-300',
    textClass: 'text-slate-700',
    badgeClass: 'bg-slate-100 text-slate-600 border-slate-200',
    description:
      "Your responses suggest you value security and peace of mind above all else. You prefer steady, predictable growth over chasing higher returns — and protecting what you've built feels more important than taking on extra risk.",
    insights: [
      "You may be most comfortable with stable income options like high-grade bonds, CDs, or fixed annuities.",
      "It's worth making sure your portfolio still grows enough to keep pace with inflation over a 20–30 year retirement.",
      "A conservative approach can work beautifully — the key is ensuring your income plan is built for the long haul.",
    ],
  },
  {
    name: 'Moderately Conservative',
    range: '19–26',
    min: 19,
    max: 26,
    colorAccent: '#3B82F6',
    bgClass: 'bg-blue-50 border-blue-200',
    textClass: 'text-blue-800',
    badgeClass: 'bg-blue-100 text-blue-700 border-blue-200',
    description:
      "You lean toward security but still want some meaningful growth. You're comfortable with modest fluctuations, as long as the overall trajectory feels stable and your income is protected.",
    insights: [
      "A heavier bond allocation with a meaningful equity component is often a natural fit for this profile.",
      "Dividend-focused strategies can offer both income and some inflation protection.",
      "Social Security timing and a reliable income floor will likely matter a great deal to you.",
    ],
  },
  {
    name: 'Moderate',
    range: '27–34',
    min: 27,
    max: 34,
    colorAccent: '#0F2C5A',
    bgClass: 'bg-[#0F2C5A]/5 border-[#0F2C5A]/20',
    textClass: 'text-[#0F2C5A]',
    badgeClass: 'bg-[#0F2C5A]/08 text-[#0F2C5A] border-[#0F2C5A]/15',
    description:
      "You want a genuine balance — growing your money meaningfully while keeping the ride manageable. You understand that markets move up and down, and you're comfortable with that as long as the long-term picture is clear.",
    insights: [
      "A classic balanced portfolio (60% stocks / 40% bonds, approximately) is often associated with this risk profile.",
      "The sequence of returns risk is worth understanding — how you draw down your portfolio in early retirement matters a lot.",
      "You'll likely benefit from a clear income strategy that combines Social Security, distributions, and stable assets.",
    ],
  },
  {
    name: 'Moderately Aggressive',
    range: '35–42',
    min: 35,
    max: 42,
    colorAccent: '#B45309',
    bgClass: 'bg-amber-50 border-amber-200',
    textClass: 'text-amber-900',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
    description:
      "You're comfortable with meaningful risk in exchange for higher growth potential. Short-term volatility doesn't unsettle you much — you keep your focus on the long horizon and trust the process.",
    insights: [
      "A growth-tilted equity allocation with some fixed income is common for this profile.",
      "You'll want to make sure you have a clear spending plan for early retirement so you don't have to sell during a downturn.",
      "Building a cash buffer for 2–3 years of expenses can give you the confidence to stay invested through volatility.",
    ],
  },
  {
    name: 'Aggressive',
    range: '43–50',
    min: 43,
    max: 50,
    colorAccent: '#C5A46E',
    bgClass: 'bg-[#C5A46E]/8 border-[#C5A46E]/30',
    textClass: 'text-[#0F2C5A]',
    badgeClass: 'bg-[#C5A46E]/15 text-[#0F2C5A] border-[#C5A46E]/30',
    description:
      "You're focused on maximum long-term growth and very comfortable with significant market swings. You see downturns as a normal part of the process — and even as potential opportunities.",
    insights: [
      "A heavy equity allocation is a natural fit — the key is making sure it aligns with your actual income needs in retirement.",
      "Even aggressive investors benefit from a thoughtful drawdown plan so market timing doesn't force uncomfortable decisions.",
      "Consider how your risk tolerance may naturally shift as you move from accumulation into living on your savings.",
    ],
  },
]

function getProfile(score: number) {
  return PROFILES.find((p) => score >= p.min && score <= p.max) ?? PROFILES[2]
}

/* ─── Component ──────────────────────────────────────────────── */
type Screen = 'intro' | 'quiz' | 'results' | 'submitted'

export default function RiskProfileQuiz() {
  const [screen, setScreen]       = useState<Screen>('intro')
  const [currentQ, setCurrentQ]   = useState(0)
  const [answers, setAnswers]     = useState<number[]>(Array(10).fill(0))
  const [selected, setSelected]   = useState<number>(0) // for current question
  const [contact, setContact]     = useState({ name: '', email: '', phone: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const score   = answers.reduce((sum, a) => sum + (a || 0), 0)
  const profile = getProfile(score)
  const progress = Math.round(((currentQ + 1) / QUESTIONS.length) * 100)

  /* helpers */
  const selectAnswer = (val: number) => setSelected(val)

  const goNext = () => {
    if (!selected) return
    const updated = [...answers]
    updated[currentQ] = selected
    setAnswers(updated)
    setSelected(0)
    if (currentQ < 9) {
      setCurrentQ(currentQ + 1)
    } else {
      setScreen('results')
    }
  }

  const goPrev = () => {
    if (currentQ === 0) { setScreen('intro'); return }
    setSelected(answers[currentQ - 1] ?? 0)
    setCurrentQ(currentQ - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/risk-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          score,
          answers,
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setScreen('submitted')
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  /* ── Intro ── */
  if (screen === 'intro') {
    return (
      <div className="card-premium p-8 sm:p-10">
        <div className="w-14 h-14 rounded-2xl bg-[#C5A46E]/10 border border-[#C5A46E]/25 flex items-center justify-center mb-6">
          <BarChart2 className="w-7 h-7 text-[#C5A46E]" />
        </div>
        <h2 className="text-2xl font-bold text-[#0F2C5A] mb-3">
          Let&apos;s find your retirement risk comfort zone
        </h2>
        <p className="text-slate-500 text-base leading-relaxed mb-6">
          This quick profile helps you understand how comfortable you are with market ups and downs.
          There are <strong className="text-[#0F2C5A]">no right or wrong answers</strong> — it&apos;s
          just about you, your feelings, and your situation.
        </p>
        <ul className="space-y-2 mb-8">
          {['10 quick questions', 'Takes about 2 minutes', 'Instant personalized result', 'Free — no commitment'].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-slate-600 text-sm">
              <CheckCircle className="w-4 h-4 text-[#C5A46E] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => { setScreen('quiz'); setCurrentQ(0); setSelected(answers[0] ?? 0) }}
          className="btn-gold w-full text-base group"
        >
          Start My Risk Profile
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <p className="mt-4 text-slate-400 text-xs text-center">
          Your results are private. We will only contact you if you ask us to.
        </p>
      </div>
    )
  }

  /* ── Quiz ── */
  if (screen === 'quiz') {
    const q = QUESTIONS[currentQ]
    return (
      <div className="card-premium overflow-hidden">
        {/* Progress bar */}
        <div className="bg-slate-100 h-1.5">
          <div
            className="bg-[#C5A46E] h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8 sm:p-10">
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-[#C5A46E] text-xs font-bold tracking-widest uppercase">
              Question {currentQ + 1} of {QUESTIONS.length}
            </span>
            <span className="text-slate-400 text-xs font-medium">
              {progress}% complete
            </span>
          </div>

          {/* Question */}
          <h2 className="text-lg sm:text-xl font-bold text-[#0F2C5A] mb-7 leading-snug">
            {q.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {q.options.map((opt, idx) => {
              const val = idx + 1
              const isSelected = selected === val
              return (
                <button
                  key={val}
                  onClick={() => selectAnswer(val)}
                  className={cn(
                    'w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 text-sm leading-snug font-medium group',
                    isSelected
                      ? 'border-[#C5A46E] bg-[#C5A46E]/08 text-[#0F2C5A]'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-[#C5A46E]/50 hover:bg-[#C5A46E]/04 hover:text-[#0F2C5A]'
                  )}
                >
                  <span className="flex items-start gap-3">
                    <span
                      className={cn(
                        'shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5 transition-colors',
                        isSelected
                          ? 'border-[#C5A46E] bg-[#C5A46E] text-white'
                          : 'border-slate-300 text-slate-400 group-hover:border-[#C5A46E]/60'
                      )}
                    >
                      {String.fromCharCode(64 + val)}
                    </span>
                    <span>{opt}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={goPrev}
              className="flex items-center gap-1.5 text-slate-500 hover:text-[#0F2C5A] text-sm font-medium transition-colors py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentQ === 0 ? 'Back to intro' : 'Previous'}
            </button>
            <button
              onClick={goNext}
              disabled={!selected}
              className={cn(
                'btn-gold px-8 py-3 text-sm group',
                !selected && 'opacity-40 cursor-not-allowed'
              )}
            >
              {currentQ === 9 ? 'See My Results' : 'Next Question'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* ── Results ── */
  if (screen === 'results') {
    return (
      <div className="space-y-5">
        {/* Profile card */}
        <div className={cn('card-premium p-8 sm:p-10 border-2', profile.bgClass)}>
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <div className={cn('text-xs font-bold tracking-widest uppercase mb-1', profile.textClass, 'opacity-60')}>
                Your Risk Profile
              </div>
              <h2 className={cn('text-3xl sm:text-4xl font-extrabold tracking-tight', profile.textClass)}>
                {profile.name}
              </h2>
            </div>
            <div className={cn('shrink-0 rounded-xl border px-4 py-3 text-center', profile.badgeClass)}>
              <div className="text-2xl font-extrabold tabular-nums">{score}</div>
              <div className="text-xs font-semibold opacity-70">out of 50</div>
            </div>
          </div>

          {/* Score bar */}
          <div className="mb-6">
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${((score - 10) / 40) * 100}%`,
                  backgroundColor: profile.colorAccent,
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>Conservative</span>
              <span>Aggressive</span>
            </div>
          </div>

          <p className={cn('text-base leading-relaxed mb-5', profile.textClass, 'opacity-80')}>
            {profile.description}
          </p>

          <div className="space-y-2.5">
            {profile.insights.map((insight, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${profile.colorAccent}20`, color: profile.colorAccent }}
                >
                  <span className="text-xs font-bold">{i + 1}</span>
                </div>
                <p className={cn('text-sm leading-relaxed', profile.textClass, 'opacity-75')}>{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lead capture */}
        <div className="card-premium p-8 sm:p-10">
          <h3 className="text-xl font-bold text-[#0F2C5A] mb-1">
            Get Your Results by Email
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Enter your info below and we&apos;ll email your profile results. If you&apos;d like to
            explore how this fits your actual retirement picture, someone from our team will follow up
            — no pressure, no obligation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#0F2C5A] text-xs font-semibold mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="w-full border border-slate-200 focus:border-[#C5A46E] bg-white text-[#0F2C5A] placeholder-slate-400 text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#0F2C5A] text-xs font-semibold mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@email.com"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full border border-slate-200 focus:border-[#C5A46E] bg-white text-[#0F2C5A] placeholder-slate-400 text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#0F2C5A] text-xs font-semibold mb-1.5">
                Phone <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="w-full border border-slate-200 focus:border-[#C5A46E] bg-white text-[#0F2C5A] placeholder-slate-400 text-sm rounded-xl px-4 py-3 outline-none transition-colors"
              />
            </div>

            {submitError && (
              <p className="text-red-500 text-xs text-center">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn-gold w-full text-base group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Email Me My Results
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
            <p className="text-center text-slate-400 text-xs">
              No spam, ever. Your information stays private.
            </p>
          </form>
        </div>

        <div className="text-center">
          <button
            onClick={() => { setScreen('intro'); setCurrentQ(0); setAnswers(Array(10).fill(0)); setSelected(0) }}
            className="text-slate-400 hover:text-[#0F2C5A] text-sm transition-colors"
          >
            Retake the quiz
          </button>
        </div>
      </div>
    )
  }

  /* ── Submitted / Thank you ── */
  return (
    <div className="card-premium p-10 text-center">
      <div className="w-16 h-16 rounded-full bg-[#C5A46E]/10 border border-[#C5A46E]/30 flex items-center justify-center mx-auto mb-5">
        <CheckCircle className="w-8 h-8 text-[#C5A46E]" />
      </div>
      <h2 className="text-2xl font-bold text-[#0F2C5A] mb-2">
        You&apos;re all set, {contact.name.split(' ')[0]}!
      </h2>
      <p className="text-slate-500 text-base leading-relaxed max-w-sm mx-auto mb-4">
        We&apos;ve emailed your <strong className="text-[#0F2C5A]">{profile.name}</strong> risk profile
        results. If you&apos;d like to explore how this fits your real retirement picture, someone from
        our team will follow up — completely free and no obligation.
      </p>
      <p className="text-slate-400 text-sm mb-8">
        Check your inbox — including spam, just in case.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/#review-form" className="btn-gold px-7 py-3.5 text-sm group">
          Request My Free Retirement Review
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link href="/resources" className="btn-outline-gold px-7 py-3.5 text-sm">
          Explore Resources
        </Link>
      </div>
    </div>
  )
}
