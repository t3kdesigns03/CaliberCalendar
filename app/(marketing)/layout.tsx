import Navigation from './components/Navigation'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <footer className="bg-[#091E3A] gold-line pt-16 pb-32 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="max-w-xs">
              <div className="text-2xl font-extrabold tracking-tight text-white mb-1">
                JB<span className="text-[#C5A46E]">Advantage</span>
              </div>
              <p className="text-[#C5A46E] text-xs font-medium tracking-wide mb-3">
                Free retirement reviews. Clear guidance. No pressure.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Independent educational support for pre-retirees and retirees — so you can move
                forward with clarity and confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-slate-400 text-sm">
              <a href="/#how-it-works" className="hover:text-[#C5A46E] transition-colors">How It Works</a>
              <a href="/#what-you-get" className="hover:text-[#C5A46E] transition-colors">What You Will Receive</a>
              <a href="/resources"     className="hover:text-[#C5A46E] transition-colors">Resources</a>
              <a href="/#faq"          className="hover:text-[#C5A46E] transition-colors">FAQ</a>
              <a href="/#review-form"  className="hover:text-[#C5A46E] transition-colors">Free Review</a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} JBAdvantage. All rights reserved.</p>
            <p className="text-center sm:text-right max-w-lg leading-relaxed">
              JBAdvantage provides educational retirement support only and does not provide
              investment, legal, or tax advice. Information shared is for general educational
              purposes. Always consult a licensed professional before making financial decisions.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
