import Navigation from './components/Navigation'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <footer className="section-divider py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-bold text-white text-lg mb-1">
                Caliber <span className="text-emerald-400">Calendar</span>
              </div>
              <p className="text-slate-600 text-sm">
                Pay-Per-Show Qualified Appointments for Elite Advisors.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
              <a href="#how-it-works" className="hover:text-slate-300 transition-colors">How It Works</a>
              <a href="#benefits"     className="hover:text-slate-300 transition-colors">Benefits</a>
              <a href="#roi"          className="hover:text-slate-300 transition-colors">ROI Calculator</a>
              <a href="#faq"          className="hover:text-slate-300 transition-colors">FAQ</a>
              <a href="#book-call"    className="hover:text-slate-300 transition-colors">Book a Call</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <p>© {new Date().getFullYear()} Caliber Calendar. All rights reserved.</p>
            <p className="text-center max-w-lg">
              Caliber Calendar is an appointment-setting service and does not provide investment, legal, or financial advice. Results vary. Not affiliated with any insurance carrier or broker-dealer. All testimonials are paraphrased for privacy.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
