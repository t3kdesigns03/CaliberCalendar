'use client'

import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react'

// ── Pipeline dataset ─────────────────────────────────────────
const APPTS = [
  { name: 'R. Henderson', age: 64, assets: '$1.4M', comm: 12400, t: 0.05, show: true  },
  { name: 'M. Calloway',  age: 58, assets: '$890K', comm:  8200, t: 0.16, show: true  },
  { name: 'J. Hartmann',  age: 61, assets: '$2.1M', comm: 18600, t: 0.27, show: true  },
  { name: 'P. Nguyen',    age: 67, assets: '$650K', comm:     0, t: 0.35, show: false },
  { name: 'D. Warren',    age: 55, assets: '$1.1M', comm:  9400, t: 0.45, show: true  },
  { name: 'C. Okafor',    age: 63, assets: '$750K', comm:  6600, t: 0.55, show: true  },
  { name: 'S. Bergman',   age: 59, assets: '$1.8M', comm: 15200, t: 0.64, show: true  },
  { name: 'L. Fischer',   age: 70, assets: '$980K', comm:  8800, t: 0.73, show: true  },
  { name: 'A. Morales',   age: 62, assets: '$1.3M', comm: 11200, t: 0.83, show: true  },
  { name: 'T. Williams',  age: 66, assets: '$2.4M', comm: 21600, t: 0.93, show: true  },
]

let _c = 0
const CUM    = APPTS.map(a => { _c += a.comm; return _c })
const MAX_REV = _c // 112,000

interface Particle {
  x: number; y: number; vx: number; vy: number
  life: number; maxLife: number; r: number
}

function rrect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

// ── Canvas chart ─────────────────────────────────────────────
function PipelineCanvas() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const css        = useRef({ w: 600, h: 480 })
  const mouse      = useRef({ x: 0.5, y: 0.5, inside: false })
  const activeIdx  = useRef(-1)
  const isTouchDev = useRef(false)
  const prog       = useRef(0)
  const raf        = useRef(0)
  const tick       = useRef(0)
  const ptcl       = useRef<Particle[]>([])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W   = css.current.w
    const H   = css.current.h
    const dpr = window.devicePixelRatio || 1
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, W, H)

    tick.current += 0.016
    prog.current  = Math.min(1, prog.current + 0.005)
    const p  = prog.current
    const TK = tick.current
    const MX = mouse.current.x
    const MI = mouse.current.inside

    const isMobile = W < 500
    const PL = W * (isMobile ? 0.14 : 0.11)
    const PR = W * 0.05
    const PT = H * (isMobile ? 0.22 : 0.18)
    const PB = H * (isMobile ? 0.12 : 0.18)
    const CW = W - PL - PR
    const CH = H - PT - PB

    // Grid lines
    ctx.save()
    ctx.strokeStyle = 'rgba(255,255,255,0.045)'
    ctx.lineWidth = 1
    for (let i = 0; i <= 4; i++) {
      const gy = PT + (CH / 4) * i
      ctx.beginPath()
      ctx.moveTo(PL, gy)
      ctx.lineTo(PL + CW, gy)
      ctx.stroke()
    }
    ctx.restore()

    // Y-axis labels (fewer on mobile)
    const yTicks = isMobile ? [0, 50000, 100000] : [0, 25000, 50000, 75000, 100000]
    ctx.textAlign = 'right'
    ctx.font = '500 ' + Math.max(8, W * 0.022) + 'px Inter, system-ui, sans-serif'
    yTicks.forEach(function(v) {
      const gy = PT + CH - (v / MAX_REV) * CH
      ctx.fillStyle = 'rgba(52,211,153,0.38)'
      ctx.fillText(v === 0 ? '$0' : '$' + (v / 1000) + 'K', PL - 6, gy + 4)
    })

    // Curve points
    const cpts = [{ x: PL, y: PT + CH }]
    APPTS.forEach(function(a, i) {
      if (a.t > p) return
      cpts.push({ x: PL + a.t * CW, y: PT + CH - (CUM[i] / MAX_REV) * CH })
    })

    // Appointment dots
    APPTS.forEach(function(a, i) {
      if (a.t > p + 0.05) return

      const ax    = PL + a.t * CW
      const baseY = PT + CH
      const revY  = PT + CH - (CUM[i] / MAX_REV) * CH
      const rev   = a.t <= p
      const isActive = activeIdx.current === i
      const byMouse  = MI && Math.abs(MX - ax / W) < 0.055
      const hover    = rev && (isActive || byMouse)

      if (a.show) {
        if (rev) {
          ctx.save()
          ctx.setLineDash([2, 5])
          ctx.strokeStyle = hover ? 'rgba(52,211,153,0.60)' : 'rgba(52,211,153,0.16)'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(ax, baseY)
          ctx.lineTo(ax, revY)
          ctx.stroke()
          ctx.restore()
        }

        const dr = hover ? 7 : 4.5
        const da = rev ? (hover ? 1 : 0.55 + Math.sin(TK * 2 + a.t * 18) * 0.15) : 0.15
        ctx.beginPath()
        ctx.arc(ax, baseY, dr, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(52,211,153,' + da + ')'
        if (hover) { ctx.shadowColor = '#34d399'; ctx.shadowBlur = 14 }
        ctx.fill()
        ctx.shadowBlur = 0

        if (hover) {
          ctx.beginPath()
          ctx.arc(ax, baseY, dr + 5, 0, Math.PI * 2)
          ctx.strokeStyle = 'rgba(52,211,153,0.22)'
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        // Commission badge (desktop only)
        if (rev && !isMobile && (hover || p > a.t + 0.14)) {
          const fa = hover ? 0.9 : Math.min(0.45, (p - a.t - 0.1) / 0.08 * 0.45)
          ctx.textAlign = 'left'
          ctx.font = 'bold ' + Math.max(9, W * 0.022) + 'px Inter, sans-serif'
          ctx.fillStyle = 'rgba(52,211,153,' + fa + ')'
          ctx.fillText('+$' + (a.comm / 1000).toFixed(0) + 'K', ax + 7, revY - 7)
        }

        // Detail card
        if (hover) {
          const cw = isMobile ? 144 : 162
          const ch = 76

          let cx = ax + 14
          if (cx + cw > PL + CW - 4) cx = ax - cw - 10
          if (cx < PL + 4) cx = PL + 4

          let cy = Math.max(PT + 8, revY - ch - 8)
          if (isMobile) cy = Math.max(PT + 6, Math.min(PT + CH * 0.44, revY - ch - 4))

          rrect(ctx, cx, cy, cw, ch, 7)
          ctx.fillStyle = 'rgba(7,20,38,0.97)'
          ctx.fill()
          ctx.strokeStyle = 'rgba(52,211,153,0.38)'
          ctx.lineWidth = 1
          ctx.stroke()

          const nameSize = Math.max(10, W * (isMobile ? 0.030 : 0.023))
          const subSize  = Math.max(9,  W * (isMobile ? 0.026 : 0.019))

          ctx.textAlign = 'left'
          ctx.fillStyle = 'rgba(255,255,255,0.93)'
          ctx.font = 'bold ' + nameSize + 'px Inter, sans-serif'
          ctx.fillText(a.name + ', ' + a.age, cx + 10, cy + 22)

          ctx.fillStyle = 'rgba(148,163,184,0.72)'
          ctx.font = subSize + 'px Inter, sans-serif'
          ctx.fillText(a.assets + ' investable', cx + 10, cy + 40)

          ctx.fillStyle = '#34d399'
          ctx.font = 'bold ' + subSize + 'px Inter, sans-serif'
          ctx.fillText('Showed  +$' + (a.comm / 1000).toFixed(1) + 'K', cx + 10, cy + 60)
        }

      } else {
        ctx.beginPath()
        ctx.arc(ax, baseY, rev ? 3.5 : 2, 0, Math.PI * 2)
        ctx.fillStyle = rev ? 'rgba(100,116,139,0.32)' : 'rgba(100,116,139,0.1)'
        ctx.fill()

        const noShowHover = rev && (isActive || (MI && Math.abs(MX - ax / W) < 0.04))
        if (noShowHover) {
          const cx2 = Math.min(ax + 10, PL + CW - 156)
          const cy2 = Math.max(PT + 8, PT + CH * 0.5)
          rrect(ctx, cx2, cy2, 150, 50, 6)
          ctx.fillStyle = 'rgba(7,20,38,0.95)'
          ctx.fill()
          ctx.strokeStyle = 'rgba(100,116,139,0.28)'
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.textAlign = 'left'
          ctx.fillStyle = 'rgba(255,255,255,0.8)'
          ctx.font = 'bold ' + Math.max(10, W * 0.021) + 'px Inter, sans-serif'
          ctx.fillText(a.name + ', ' + a.age, cx2 + 9, cy2 + 19)
          ctx.fillStyle = 'rgba(148,163,184,0.6)'
          ctx.font = Math.max(9, W * 0.018) + 'px Inter, sans-serif'
          ctx.fillText('No-show - $0 charged', cx2 + 9, cy2 + 37)
        }
      }
    })

    // Area + curve
    if (cpts.length >= 2) {
      const fill = ctx.createLinearGradient(0, PT, 0, PT + CH)
      fill.addColorStop(0,   'rgba(5,150,105,0.18)')
      fill.addColorStop(0.6, 'rgba(5,150,105,0.07)')
      fill.addColorStop(1,   'rgba(5,150,105,0.01)')
      ctx.beginPath()
      ctx.moveTo(cpts[0].x, PT + CH)
      cpts.forEach(function(pt) { ctx.lineTo(pt.x, pt.y) })
      ctx.lineTo(cpts[cpts.length - 1].x, PT + CH)
      ctx.closePath()
      ctx.fillStyle = fill
      ctx.fill()

      const stroke = ctx.createLinearGradient(PL, 0, PL + CW, 0)
      stroke.addColorStop(0,    'rgba(16,185,129,0.5)')
      stroke.addColorStop(0.55, '#10b981')
      stroke.addColorStop(1,    '#34d399')
      ctx.beginPath()
      ctx.moveTo(cpts[0].x, cpts[0].y)
      for (let i = 1; i < cpts.length; i++) {
        const pv = cpts[i - 1], cv = cpts[i]
        const mx = (pv.x + cv.x) / 2
        ctx.bezierCurveTo(mx, pv.y, mx, cv.y, cv.x, cv.y)
      }
      ctx.strokeStyle = stroke
      ctx.lineWidth = 2.5
      ctx.shadowColor = '#059669'
      ctx.shadowBlur = 16
      ctx.stroke()
      ctx.shadowBlur = 0

      if (p < 0.98) {
        const edge  = cpts[cpts.length - 1]
        const pulse = 0.6 + Math.sin(TK * 5) * 0.4
        ctx.beginPath()
        ctx.arc(edge.x, edge.y, 5.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(52,211,153,' + pulse + ')'
        ctx.shadowColor = '#34d399'
        ctx.shadowBlur = 22
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Ambient particles
    if (ptcl.current.length < 22 && Math.random() < 0.22) {
      ptcl.current.push({
        x: PL + (0.15 + Math.random() * 0.7) * CW,
        y: PT + (0.25 + Math.random() * 0.55) * CH,
        vx: (Math.random() - 0.5) * 0.38,
        vy: -0.45 - Math.random() * 0.65,
        life: 0, maxLife: 65 + Math.random() * 45,
        r: 1 + Math.random() * 1.5,
      })
    }
    ptcl.current = ptcl.current.filter(function(pt) { return pt.life < pt.maxLife })
    ptcl.current.forEach(function(pt) {
      pt.x += pt.vx
      pt.y += pt.vy
      pt.life++
      const alpha = Math.sin((pt.life / pt.maxLife) * Math.PI) * 0.28
      ctx.beginPath()
      ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(52,211,153,' + alpha + ')'
      ctx.fill()
    })

    // Revenue counter
    let revNow = 0
    APPTS.forEach(function(a, i) { if (a.show && a.t <= p) revNow = CUM[i] })

    const labelFont   = Math.max(isMobile ? 7 : 9, W * 0.019)
    const counterFont = Math.max(isMobile ? 15 : 14, W * 0.052)
    const offY        = isMobile ? 20 : 24

    ctx.textAlign = 'right'
    ctx.fillStyle = 'rgba(52,211,153,0.50)'
    ctx.font = '500 ' + labelFont + 'px Inter, sans-serif'
    ctx.fillText('cumulative this month', PL + CW, PT - offY)

    ctx.fillStyle = 'rgba(255,255,255,0.94)'
    ctx.font = 'bold ' + counterFont + 'px Inter, sans-serif'
    ctx.fillText('$' + revNow.toLocaleString(), PL + CW, PT - (isMobile ? 4 : 6))

    // X-axis label
    ctx.textAlign = 'center'
    ctx.fillStyle = 'rgba(148,163,184,0.28)'
    ctx.font = '500 ' + Math.max(7, W * 0.016) + 'px Inter, sans-serif'
    ctx.fillText('QUALIFIED APPOINTMENTS', PL + CW / 2, H - H * 0.04)

    // Hint text (device-aware)
    const hasActive = activeIdx.current >= 0
    if (!MI && !hasActive && p > 0.6) {
      const hint = isTouchDev.current
        ? 'tap a dot to inspect each appointment'
        : 'hover to explore each appointment'
      ctx.fillStyle = 'rgba(148,163,184,0.22)'
      ctx.font = Math.max(8, W * 0.017) + 'px Inter, sans-serif'
      ctx.fillText(hint, PL + CW / 2, PT + CH / 2 + 4)
    }

    raf.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const sync = () => {
      const dpr  = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      canvas.width  = Math.round(rect.width  * dpr)
      canvas.height = Math.round(rect.height * dpr)
      css.current   = { w: rect.width, h: rect.height }
    }
    const ro = new ResizeObserver(sync)
    ro.observe(canvas)
    sync()

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.current = {
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top)  / r.height,
        inside: true,
      }
    }
    const onLeave = () => { mouse.current.inside = false }
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    const onTouch = (e: TouchEvent) => {
      isTouchDev.current = true
      e.preventDefault()
      const touch = e.changedTouches[0]
      if (!touch) return
      const r  = canvas.getBoundingClientRect()
      const tx = (touch.clientX - r.left) / r.width

      let bestIdx  = -1
      let bestDist = Infinity
      APPTS.forEach(function(a, i) {
        if (a.t > prog.current) return
        const dist = Math.abs(tx - a.t)
        const threshold = a.show ? 0.12 : 0.08
        if (dist < bestDist && dist < threshold) {
          bestDist = dist
          bestIdx  = i
        }
      })

      activeIdx.current = activeIdx.current === bestIdx ? -1 : bestIdx
    }
    canvas.addEventListener('touchstart', onTouch, { passive: false })

    raf.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf.current)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
      canvas.removeEventListener('touchstart', onTouch)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      aria-label="Interactive pipeline revenue model"
      className="w-full h-full cursor-crosshair block touch-none"
    />
  )
}

// ── Stats ─────────────────────────────────────────────────────
const STATS = [
  { value: '$500K+', label: 'Min. Investable Assets', sub: 'Per qualified prospect'  },
  { value: '4.2x',   label: 'Average Advisor ROI',    sub: 'vs. traditional lead gen' },
  { value: '97%',    label: 'Show Rate',               sub: 'Pre-confirmed & reminded' },
  { value: '$0',     label: 'Upfront Cost',            sub: 'Pay only on show'          },
]

// ── Hero ──────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pb-28 lg:pb-16">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute -top-64 -left-32 w-[550px] h-[550px] bg-emerald-600/[0.08] rounded-full blur-[150px]" />
        <div className="absolute top-1/3 -right-48 w-[450px] h-[450px] bg-blue-700/[0.07] rounded-full blur-[130px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
        <div className="lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-10 xl:gap-16 lg:items-center">

          {/* Left: copy */}
          <div className="pb-8 lg:pb-0">

            {/* Logo hidden on mobile — nav already has it */}
            <div className="hidden sm:block mb-8 sm:mb-10">
              <div className="relative inline-flex">
                <div
                  className="absolute -inset-6 rounded-[40px] pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 40% 50%, rgba(5,150,105,0.20) 0%, transparent 75%)',
                    filter: 'blur(18px)',
                  }}
                />
                <Image
                  src="/logo-light.svg"
                  alt="Caliber Calendar"
                  width={520} height={136}
                  priority
                  className="relative h-[68px] sm:h-[84px] lg:h-[96px] w-auto max-w-[300px] sm:max-w-[420px] lg:max-w-[500px]"
                  style={{
                    filter: 'drop-shadow(0 0 28px rgba(5,150,105,0.38)) drop-shadow(0 5px 22px rgba(0,0,0,0.60))',
                  }}
                />
              </div>
              <div className="mt-5 w-12 h-px bg-gradient-to-r from-emerald-500/55 to-transparent" />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-emerald-600/[0.10] border border-emerald-500/28 rounded-full px-3 sm:px-3.5 py-1.5 sm:py-2">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide">
                  Pay-Per-Show · Zero Upfront Risk
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-amber-500/[0.08] border border-amber-500/20 rounded-full px-3 sm:px-3.5 py-1.5 sm:py-2">
                <span className="text-amber-300/85 text-xs sm:text-sm font-medium">⚡ Limited advisor capacity</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[1.95rem] sm:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight mb-4 sm:mb-5 lg:mb-6">
              <span className="text-white">Qualified $500K+ Appointments. </span>
              <span className="gradient-text">Pay Only When They Show.</span>
            </h1>

            {/* Sub */}
            <p className="text-[0.95rem] sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-7 lg:mb-8 max-w-lg">
              Pre-educated wealth and annuity prospects — professionally set,
              double-confirmed, and delivered directly to your calendar.{' '}
              <span className="text-white font-semibold">No-show? You pay nothing.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-y-3.5 gap-x-5 mb-5 sm:mb-7">
              <Link
                href="#book-call"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-emerald-glow hover:-translate-y-0.5 active:scale-[0.98] group w-full sm:w-auto"
              >
                Apply for a Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#roi"
                className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors underline underline-offset-[5px] decoration-slate-700 hover:decoration-emerald-500/50 text-center sm:text-left"
              >
                Calculate my ROI first →
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2">
              {[
                { Icon: CheckCircle, label: 'No retainers or contracts'  },
                { Icon: CheckCircle, label: '$500K–$2M+ verified assets' },
                { Icon: Shield,      label: 'Compliance-reviewed'        },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-slate-500 text-xs sm:text-sm">
                  <Icon className="w-3.5 h-3.5 text-emerald-500/75 shrink-0" strokeWidth={2.5} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: LIVE PIPELINE MODEL — now visible on all viewports */}
          <div className="relative mt-8 lg:mt-0 rounded-2xl overflow-hidden border border-white/[0.06] bg-[#060E1B]/60 h-[300px] sm:h-[380px] lg:h-[500px]">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 50% 80%, rgba(5,150,105,0.07) 0%, transparent 70%)',
              }}
            />

            <PipelineCanvas />

            {/* Corner label with pulse dot */}
            <div className="absolute top-3 left-4 flex items-center gap-1.5 pointer-events-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-[0.12em] uppercase">
                Live Pipeline Model
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-8 sm:mt-10 lg:mt-12">
          {STATS.map(({ value, label, sub }) => (
            <div
              key={label}
              className="bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.07] rounded-xl p-4 lg:p-5 transition-colors duration-200"
            >
              <div className="text-2xl lg:text-[2rem] font-extrabold text-emerald-400 mb-1 tabular-nums leading-none">
                {value}
              </div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-0.5">{label}</div>
              <div className="text-slate-600 text-[10px] sm:text-xs">{sub}</div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-slate-500 text-xs sm:text-sm">
          <div className="flex -space-x-2 shrink-0">
            {['A', 'B', 'C', 'D', 'E'].map(l => (
              <div
                key={l}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 border-2 border-[#0A192F] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white"
              >
                {l}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-0.5 text-yellow-400/80 shrink-0">
            {[0, 1, 2, 3, 4].map(i => (
              <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            ))}
          </div>
          <span>Trusted by top-producing advisors closing 6- and 7-figure cases</span>
        </div>
      </div>
    </section>
  )
}
