'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, CheckCircle, TrendingUp, Send, CheckCheck } from 'lucide-react'

const QUALIFIERS = [
  'Actively writing annuity or wealth management cases',
  'Have a proven discovery call and close process',
  'Can run 10–40+ qualified appointments per month',
  'Looking to scale to 6- or 7-figure monthly production',
]

const PRODUCTION_OPTIONS = [
  'Under $250K/month',
  '$250K – $500K/month',
  '$500K – $1M/month',
  'Over $1M/month',
  'Prefer not to say',
]

const APPT_OPTIONS = [
  '10 – 20 per month',
  '20 – 30 per month',
  '30 – 50 per month',
  '50+ per month',
]

type FormState = {
  'form-name': string
  'bot-field': string
  'full-name': string
  email: string
  phone: string
  production: string
  appointments: string
  message: string
}

const INIT: FormState = {
  'form-name': 'advisor-application',
  'bot-field': '',
  'full-name': '',
  email: '',
  phone: '',
  production: '',
  appointments: '',
  message: '',
}

export default function FinalCTA() {
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

  return (
    <section
      id="book-call"
      className="py-24 lg:py-32 section-divider section-alt relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-700/20 rounded-full blur-[140px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
        <Image
          src="/logo-light.svg"
          alt=""
          width={600}
          height={175}
          className="absolute -bottom-8 -right-16 w-[500px] opacity-[0.03] select-none pointer-events-none"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: qualifier copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-600/10 border border-emerald-600/20 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-sm font-semibold">Now Accepting New Advisors</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Ready to Stop Chasing<br />
              <span className="gradient-text">and Start Closing?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Caliber Calendar is built for elite producers who are serious about scaling.
              If you have a proven close process and want a consistent flow of pre-educated,
              high-net-worth prospects who actually show — this call is your next step.
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-[0.15em]">
                This is the right fit if you:
              </p>
              {QUALIFIERS.map((q) => (
                <div key={q} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-slate-300 text-sm">{q}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-600/[0.08] border border-emerald-600/20 rounded-xl p-4 flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-emerald-300 font-semibold text-sm mb-0.5">
                  Pay-Per-Show. Always.
                </div>
                <div className="text-slate-400 text-xs">
                  If a prospect doesn't show, you don't pay. That's the model. No exceptions.
                </div>
              </div>
            </div>
          </div>

          {/* Right: lead capture form */}
          <div id="qualify">
            <div className="bg-[#0E243A] border border-white/10 rounded-2xl p-7 lg:p-8">

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-600/15 border border-emerald-600/30 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCheck className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Application Received</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                    We'll review your application and reach out within 1 business day to
                    schedule your discovery call.
                  </p>
                  <div className="mt-6 text-emerald-400 text-xs font-medium">
                    Check your inbox — including spam just in case.
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-lg mb-1">
                      Apply for a Discovery Call
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Takes 60 seconds · We'll reach out within 1 business day
                    </p>
                  </div>

                  <form
                    name="advisor-application"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="advisor-application" />
                    <p className="hidden" aria-hidden="true">
                      <label>
                        Don't fill this out:{' '}
                        <input
                          name="bot-field"
                          onChange={(e) => set('bot-field', e.target.value)}
                        />
                      </label>
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="full-name"
                          required
                          placeholder="John Smith"
                          value={form['full-name']}
                          onChange={(e) => set('full-name', e.target.value)}
                          className="w-full bg-[#0A192F] border border-white/[0.10] focus:border-emerald-500 text-white placeholder-slate-600 text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="(555) 000-0000"
                          value={form.phone}
                          onChange={(e) => set('phone', e.target.value)}
                          className="w-full bg-[#0A192F] border border-white/[0.10] focus:border-emerald-500 text-white placeholder-slate-600 text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@yourfirm.com"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        className="w-full bg-[#0A192F] border border-white/[0.10] focus:border-emerald-500 text-white placeholder-slate-600 text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">
                        Current Monthly Production
                      </label>
                      <select
                        name="production"
                        value={form.production}
                        onChange={(e) => set('production', e.target.value)}
                        className="w-full bg-[#0A192F] border border-white/[0.10] focus:border-emerald-500 text-sm rounded-xl px-4 py-3 outline-none transition-colors appearance-none"
                        style={{ color: form.production ? '#f8fafc' : '#475569' }}
                      >
                        <option value="" disabled>Select range…</option>
                        {PRODUCTION_OPTIONS.map((o) => (
                          <option key={o} value={o} className="text-white bg-[#0A192F]">{o}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">
                        Target Appointments per Month
                      </label>
                      <select
                        name="appointments"
                        value={form.appointments}
                        onChange={(e) => set('appointments', e.target.value)}
                        className="w-full bg-[#0A192F] border border-white/[0.10] focus:border-emerald-500 text-sm rounded-xl px-4 py-3 outline-none transition-colors appearance-none"
                        style={{ color: form.appointments ? '#f8fafc' : '#475569' }}
                      >
                        <option value="" disabled>Select range…</option>
                        {APPT_OPTIONS.map((o) => (
                          <option key={o} value={o} className="text-white bg-[#0A192F]">{o}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5">
                        Anything else?{' '}
                        <span className="text-slate-600">(optional)</span>
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="Your current lead sources, what's not working, specific goals…"
                        value={form.message}
                        onChange={(e) => set('message', e.target.value)}
                        className="w-full bg-[#0A192F] border border-white/[0.10] focus:border-emerald-500 text-white placeholder-slate-600 text-sm rounded-xl px-4 py-3 outline-none transition-colors resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-xs text-center">
                        Something went wrong — email us directly at{' '}
                        <a
                          href="mailto:hello@calibercalendar.com"
                          className="underline"
                        >
                          hello@calibercalendar.com
                        </a>
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-emerald-glow active:scale-[0.98] group text-base"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle
                              className="opacity-25"
                              cx="12" cy="12" r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-slate-600 text-xs">
                      We respond to qualified applications within 1 business day. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>

            <div className="mt-5 text-center text-slate-500 text-sm">
              Prefer email?{' '}
              <a
                href="mailto:hello@calibercalendar.com"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                hello@calibercalendar.com →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
