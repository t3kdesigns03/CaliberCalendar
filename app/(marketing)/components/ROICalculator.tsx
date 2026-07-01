'use client'

import { useState } from 'react'
import { CheckCheck, Send } from 'lucide-react'

const TIMELINE_OPTIONS = [
  'Already retired',
  'Within 1 year',
  '1-3 years away',
  '3-5 years away',
  '5+ years away',
]

const CONCERN_OPTIONS = [
  'Running out of money',
  'Creating reliable retirement income',
  'Social Security timing',
  'Tax strategy in retirement',
  'Healthcare & Medicare costs',
  'Protecting my assets',
  'Leaving a legacy',
  'Not sure — need general guidance',
]

const ASSETS_OPTIONS = [
  'Prefer not to say',
  'Under $250,000',
  '$250,000 - $500,000',
  '$500,000 - $1M',
  '$1M - $2M',
  'Over $2M',
]

type FormState = {
  'form-name': string
  'bot-field': string
  'full-name': string
  email: string
  phone: string
  timeline: string
  concern: string
  assets: string
  message: string
}

const INIT: FormState = {
  'form-name': 'retirement-review',
  'bot-field': '',
  'full-name': '',
  email: '',
  phone: '',
  timeline: '',
  concern: '',
  assets: '',
  message: '',
}

export default function ReviewRequestForm() {
  const [form, setForm] = useState<FormState>(INIT)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (key: keyof FormState, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form as unknown as Record<string, string>).toString(),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-[#091E3A] border border-white/[0.10] focus:border-[#C5A46E]/60 text-white placeholder-slate-600 text-sm rounded-xl px-4 py-3 outline-none transition-colors'

  const selectStyle = (val: string) => ({ color: val ? '#f8fafc' : '#475569' })

  return (
    <section id="roi" className="py-24 lg:py-32 bg-[#0F2C5A]">

      {/* Gold accent line at top */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A46E]/20 to-transparent -mt-24" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="gold-badge justify-center mb-6 text-sm font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46E]" />
            It Takes Under 2 Minutes
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Request Your Free Retirement Review
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Tell us a little about your situation and we will reach out to schedule your
            complimentary, no-obligation review.
          </p>
        </div>

        <div id="review-form" className="bg-[#091E3A] border border-[#C5A46E]/[0.15] rounded-2xl p-8 lg:p-10 max-w-2xl mx-auto shadow-gold-sm">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-[#C5A46E]/[0.12] border border-[#C5A46E]/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCheck className="w-8 h-8 text-[#C5A46E]" />
              </div>
              <h3 className="font-heading text-white font-bold text-xl mb-2">We Received Your Request!</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                Thank you for reaching out. Someone from our team will be in touch within
                1 business day to schedule your free retirement review.
              </p>
              <div className="mt-6 text-[#C5A46E] text-xs font-medium">
                Check your inbox — including spam just in case.
              </div>
            </div>
          ) : (
            <>
              <div className="mb-7">
                <h3 className="font-heading text-white font-bold text-lg mb-1">
                  Let us know a little about your situation
                </h3>
                <p className="text-slate-500 text-xs">
                  No financial documents needed. No commitment. 100% free.
                </p>
              </div>

              <form name="retirement-review" onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="form-name" value="retirement-review" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Do not fill this out:{' '}
                    <input name="bot-field" onChange={(e) => set('bot-field', e.target.value)} />
                  </label>
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text" name="full-name" required placeholder="Jane Smith"
                      value={form['full-name']} onChange={(e) => set('full-name', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel" name="phone" required placeholder="(555) 000-0000"
                      value={form.phone} onChange={(e) => set('phone', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email" name="email" required placeholder="jane@email.com"
                    value={form.email} onChange={(e) => set('email', e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    When are you planning to retire?
                  </label>
                  <select
                    name="timeline" value={form.timeline}
                    onChange={(e) => set('timeline', e.target.value)}
                    className="w-full bg-[#091E3A] border border-white/[0.10] focus:border-[#C5A46E]/60 text-sm rounded-xl px-4 py-3 outline-none transition-colors appearance-none"
                    style={selectStyle(form.timeline)}
                  >
                    <option value="" disabled>Select your timeline</option>
                    {TIMELINE_OPTIONS.map((o) => (
                      <option key={o} value={o} className="text-white bg-[#091E3A]">{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    What is your biggest retirement concern?
                  </label>
                  <select
                    name="concern" value={form.concern}
                    onChange={(e) => set('concern', e.target.value)}
                    className="w-full bg-[#091E3A] border border-white/[0.10] focus:border-[#C5A46E]/60 text-sm rounded-xl px-4 py-3 outline-none transition-colors appearance-none"
                    style={selectStyle(form.concern)}
                  >
                    <option value="" disabled>Select your primary concern</option>
                    {CONCERN_OPTIONS.map((o) => (
                      <option key={o} value={o} className="text-white bg-[#091E3A]">{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Approximate investable assets{' '}
                    <span className="text-slate-600">(optional)</span>
                  </label>
                  <select
                    name="assets" value={form.assets}
                    onChange={(e) => set('assets', e.target.value)}
                    className="w-full bg-[#091E3A] border border-white/[0.10] focus:border-[#C5A46E]/60 text-sm rounded-xl px-4 py-3 outline-none transition-colors appearance-none"
                    style={selectStyle(form.assets)}
                  >
                    <option value="" disabled>Select a range</option>
                    {ASSETS_OPTIONS.map((o) => (
                      <option key={o} value={o} className="text-white bg-[#091E3A]">{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Anything else you want us to know?{' '}
                    <span className="text-slate-600">(optional)</span>
                  </label>
                  <textarea
                    name="message" rows={3}
                    placeholder="Your current situation, specific questions, what you are hoping to get out of the review"
                    value={form.message} onChange={(e) => set('message', e.target.value)}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">
                    Something went wrong — email us directly at{' '}
                    <a href="mailto:hello@jbadvantage.com" className="underline">
                      hello@jbadvantage.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 w-full bg-[#C5A46E] hover:bg-[#D4B882] disabled:opacity-70 disabled:cursor-not-allowed text-[#0F2C5A] font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-gold-glow active:scale-[0.98] group text-base"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request My Free Retirement Review
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-slate-600 text-xs">
                  No spam, ever. We will respond within 1 business day. You can unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>

        <div className="mt-6 text-center text-slate-500 text-sm">
          Prefer email?{' '}
          <a
            href="mailto:hello@jbadvantage.com"
            className="text-[#C5A46E] hover:text-[#D4B882] transition-colors font-medium"
          >
            hello@jbadvantage.com
          </a>
        </div>
      </div>
    </section>
  )
}
