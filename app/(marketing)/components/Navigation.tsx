'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Resources',    href: '/resources'      },
  { label: 'Stories',      href: '/#stories'       },
  { label: 'FAQ',          href: '/#faq'           },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-400',
          scrolled ? 'glass-nav' : 'bg-[#0F2C5A]/80 backdrop-blur-md'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-22" style={{ height: scrolled ? '72px' : '80px', transition: 'height 0.3s ease' }}>

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 gap-3 group" onClick={close}>
              <div className="relative bg-white rounded-xl p-1.5 shadow-sm group-hover:shadow-md transition-shadow">
                <Image
                  src="/logo2.jpg"
                  alt="JBAdvantage"
                  width={52}
                  height={52}
                  className="object-contain rounded-lg block"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold tracking-tight text-white leading-none">
                  JB<span className="text-[#C5A46E] group-hover:text-[#D4B882] transition-colors">Advantage</span>
                </div>
                <div className="text-[10px] text-[#C5A46E]/60 font-medium tracking-wide mt-0.5 leading-none">
                  Free retirement reviews
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-slate-300 hover:text-white text-sm font-medium tracking-wide transition-colors relative group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C5A46E] group-hover:w-full transition-all duration-250" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/#review-form"
                className="inline-flex items-center gap-2 bg-[#C5A46E] hover:bg-[#D4B882] text-[#0F2C5A] text-sm font-bold px-5 py-2.5 rounded-lg transition-all hover:shadow-gold-sm group"
              >
                Get Your Free Review
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="bg-[#091E3A] border-t border-white/[0.07] px-5 py-6 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center text-slate-200 hover:text-white font-medium py-3 px-3 rounded-lg hover:bg-white/[0.05] transition-colors"
                onClick={close}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/[0.07] mt-3">
              <Link
                href="/#review-form"
                className="flex items-center justify-center gap-2 bg-[#C5A46E] hover:bg-[#D4B882] text-[#0F2C5A] font-bold py-3.5 px-6 rounded-xl transition-all"
                onClick={close}
              >
                Get Your Free Review <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Floating mobile CTA */}
      <div
        className="fixed bottom-5 inset-x-4 z-40 lg:hidden pointer-events-none animate-fade-in"
        style={{ animationDelay: '1.5s', animationFillMode: 'both', opacity: 0 }}
      >
        <Link
          href="/#review-form"
          className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-[#C5A46E] hover:bg-[#D4B882] text-[#0F2C5A] font-bold py-4 rounded-2xl shadow-gold-glow transition-all active:scale-[0.98]"
        >
          Request Your Free Review <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>
  )
}
