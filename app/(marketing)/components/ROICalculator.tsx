'use client'

import { useState, useCallback, useId } from 'react'
import { BarChart2, Calendar, TrendingUp, DollarSign, ArrowRight, Info } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

interface CalcState {
  appts: number; closeRate: number; commission: number; costPerShow: number
}

interface SliderInputProps {
  id: string; label: string; value: number; min: number; max: number; step: number
  prefix?: string; suffix?: string; onChange: (val: number) => void
  formatDisplay?: (val: number) => string
}

const DEFAULTS: CalcState = { appts: 20, closeRate: 30, commission: 5000, costPerShow: 650 }

function SliderInput({ id, label, value, min, max, step, prefix, suffix, onChange, formatDisplay }: SliderInputProps) {
  const pct = ((value - min) / (max - min)) * 100
  const clamp = (v: number) => Math.min(max, Math.max(min, v))

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-slate-300 font-medium text-sm">{label}</label>
        <div className="flex items-center gap-1 bg-white/[0.08] border border-white/[0.12] rounded-lg px-2.5 py-1.5 focus-within:border-emerald-500 transition-colors">
          {prefix && <span className="text-slate-400 text-sm select-none">{prefix}</span>}
          <input
            type="number" value={value} min={min} max={max} step={step}
            onChange={(e) => onChange(clamp(Number(e.target.value)))}
            className="w-16 bg-transparent text-white font-bold text-sm text-center outline-none tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          {suffix && <span className="text-slate-400 text-sm select-none">{suffix}</span>}
        </div>
      </div>
      <input
        id={id} type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ background: `linear-gradient(to right, #059669 0%, #059669 ${pct}%, rgba(255,255,255,0.10) ${pct}%, rgba(255,255,255,0.10) 100%)` }}
      />
      <div className="flex justify-between text-xs text-slate-600 -mt-1">
        <span>{prefix}{formatDisplay ? formatDisplay(min) : min}{suffix}</span>
        <span>{prefix}{formatDisplay ? formatDisplay(max) : max}{suffix}</span>
      </div>
    </div>
  )
}

function MetricCard({ icon: Icon, label, value, accent = false }: { icon: React.ElementType; label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl p-5 text-center ${accent ? 'bg-emerald-600/[0.12] border border-emerald-600/30' : 'bg-white/[0.05] border border-white/[0.08]'}`}>
      <Icon className={`w-5 h-5 mx-auto mb-2 ${accent ? 'text-emerald-400' : 'text-slate-400'}`} />
      <div className={`text-xl font-extrabold tabular-nums mb-0.5 ${accent ? 'text-emerald-400' : 'text-white'}`}>{value}</div>
      <div className="text-slate-400 text-xs font-medium">{label}</div>
    </div>
  )
}

export default function ROICalculator() {
  const [state, setState] = useState<CalcState>(DEFAULTS)
  const uid = useId()
  const update = useCallback(<K extends keyof CalcState>(key: K, val: number) => setState(prev => ({ ...prev, [key]: val })), [])
  const reset  = () => setState(DEFAULTS)

  const closedCases       = state.appts * (state.closeRate / 100)
  const monthlyRevenue    = closedCases * state.commission
  const monthlyInvestment = state.appts * state.costPerShow
  const netProfit         = monthlyRevenue - monthlyInvestment
  const roi               = monthlyInvestment > 0 ? (netProfit / monthlyInvestment) * 100 : 0
  const isPositive        = netProfit >= 0
  const fmtK              = (v: number) => v >= 1000 ? `${v / 1000}k` : `${v}`

  return (
    <section id="roi" className="py-24 lg:py-32 section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-600/10 border border-emerald-600/20 rounded-full px-4 py-2 mb-6">
            <BarChart2 className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">ROI Calculator</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">See Your Numbers in Real Time</h2>
          <p className="text-slate-400 text-xl max-w-xl mx-auto">Plug in your variables. See exactly what Caliber Calendar delivers.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Inputs */}
          <div className="bg-[#0E243A] border border-white/[0.08] rounded-2xl p-8 space-y-10">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-base">Your Inputs</h3>
              <button onClick={reset} className="text-slate-500 hover:text-slate-300 text-xs font-medium transition-colors">Reset defaults</button>
            </div>
            <SliderInput id={`${uid}-appts`}      label="Appointments per Month"           value={state.appts}       min={5}    max={50}    step={1}   onChange={(v) => update('appts', v)} />
            <SliderInput id={`${uid}-close`}      label="Close Rate"                       value={state.closeRate}   min={10}   max={70}    step={1}   suffix="%" onChange={(v) => update('closeRate', v)} />
            <SliderInput id={`${uid}-commission`} label="Avg. Commission per Closed Case"  value={state.commission}  min={1000} max={20000} step={500} prefix="$" formatDisplay={fmtK} onChange={(v) => update('commission', v)} />
            <SliderInput id={`${uid}-cost`}       label="Cost per Show Appointment"        value={state.costPerShow} min={300}  max={1500}  step={25}  prefix="$" onChange={(v) => update('costPerShow', v)} />
            <div className="flex items-start gap-2 text-slate-600 text-xs bg-white/[0.03] rounded-lg p-3 border border-white/[0.05]">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span><strong className="text-slate-500">Illustration only.</strong> Results depend on your closing ability, case mix, and market conditions. Past performance does not guarantee future results.</span>
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className={`rounded-2xl p-8 text-center border transition-all duration-300 ${isPositive ? 'bg-emerald-600/10 border-emerald-600/35' : 'bg-red-600/10 border-red-600/35'}`}>
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-[0.15em] mb-3">Est. Net Monthly Profit</div>
              <div className={`text-6xl sm:text-7xl font-extrabold tabular-nums leading-none mb-2 transition-colors duration-200 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                {formatCurrency(netProfit)}
              </div>
              <div className="text-slate-500 text-sm mt-1">After all appointment costs</div>
              <div className={`inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-full text-xs font-semibold border ${isPositive ? 'bg-emerald-600/15 border-emerald-600/30 text-emerald-300' : 'bg-red-600/15 border-red-600/30 text-red-300'}`}>
                <TrendingUp className="w-3 h-3" />
                {roi.toFixed(0)}% Return on Appointment Spend
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <MetricCard icon={Calendar}   label="Closed Cases"    value={closedCases.toFixed(1)} />
              <MetricCard icon={TrendingUp} label="Gross Revenue"   value={formatCurrency(monthlyRevenue)} />
              <MetricCard icon={DollarSign} label="Total Investment" value={formatCurrency(monthlyInvestment)} />
            </div>

            <a href="#book-call" className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-emerald-glow hover:-translate-y-0.5 active:scale-[0.98] group text-base">
              These Numbers Work for Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="text-center text-slate-600 text-xs">Free discovery call · No commitment · Qualified advisors only</p>
          </div>
        </div>
      </div>
    </section>
  )
}
