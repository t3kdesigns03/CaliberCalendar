import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Sequence of Returns Risk | JBAdvantage',
  description: 'Understand why early retirement market downturns can permanently damage your portfolio — and what strategies can protect you.',
}

export default function SequenceOfReturnsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      <div className="bg-[#0F2C5A] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-[#C5A46E]/70 hover:text-[#C5A46E] text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
          </Link>
          <div className="gold-badge mb-6 text-xs font-semibold">Portfolio Risk</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Sequence of Returns Risk: <span className="gradient-text">When Timing Is Everything</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A market downturn early in retirement can do far more damage than the same downturn later — even if the market fully recovers. Here is why.
          </p>
          <div className="mt-6 flex items-center gap-3 text-slate-500 text-sm">
            <span>7 min read</span><span>·</span><span>JBAdvantage Educational Team</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-retirement">

          <p>
            During your working years, market volatility was uncomfortable but manageable. A bad year meant your balance dropped — but you kept contributing and had time to recover. In retirement, the dynamic is fundamentally different. You are no longer adding money; you are taking it out. And that changes everything.
          </p>

          <h2>What Is Sequence of Returns Risk?</h2>
          <p>
            Sequence of returns risk is the danger that a market decline in the early years of retirement permanently depletes your portfolio — even if markets eventually recover.
          </p>
          <p>
            Here is why: When you are withdrawing from a portfolio, a downturn early on forces you to sell more shares to meet your income needs. Those shares are gone — they cannot benefit from any future recovery. The portfolio is now structurally smaller, and every future withdrawal comes from a reduced base.
          </p>
          <p>
            Two retirees with identical average annual returns over 30 years can end up with dramatically different outcomes — simply because of when the bad years occurred.
          </p>

          <h2>An Illustration</h2>
          <p>
            Imagine two retirees who both earn the same average return of 6% per year over 20 years, and both withdraw $50,000 annually. The only difference: Retiree A experiences poor returns in years 1-5 followed by strong returns; Retiree B experiences strong returns in years 1-5 followed by poor ones.
          </p>
          <ul>
            <li>Retiree A — bad returns early — may run out of money before year 20.</li>
            <li>Retiree B — good returns early — may still have a comfortable cushion.</li>
          </ul>
          <p>
            Same average return. Same withdrawal rate. Vastly different outcomes. This is the sequence of returns problem.
          </p>

          <div className="key-takeaways">
            <h4>Key Takeaways — The Core Risk</h4>
            <ul>
              <li>Early retirement is the most vulnerable period for your portfolio</li>
              <li>Withdrawing during a downturn locks in losses permanently</li>
              <li>Average return does not predict outcome — the sequence matters</li>
              <li>The damage compounds: smaller portfolio means every future withdrawal takes a larger percentage</li>
            </ul>
          </div>

          <h2>The First Five Years: Your Critical Window</h2>
          <p>
            Research consistently shows that the first five to seven years of retirement are the highest-risk period for sequence of returns damage. Protect this window and the rest of retirement becomes far more resilient.
          </p>
          <p>
            During this period, a significant downturn combined with ongoing withdrawals can set a portfolio on a trajectory from which recovery is mathematically very difficult — regardless of what markets do afterward.
          </p>

          <h2>Strategies for Managing Sequence Risk</h2>

          <h3>1. The Cash/Bond Bucket</h3>
          <p>
            One of the most widely used approaches is maintaining a separate &ldquo;spending bucket&rdquo; — 2-3 years of living expenses in cash or short-term bonds — so that in a market downturn, you can draw from this bucket without selling equities at a loss. This gives the growth portion of the portfolio time to recover.
          </p>

          <h3>2. A Flexible Withdrawal Rate</h3>
          <p>
            Rather than taking a fixed dollar amount each year, some retirees use a guardrails approach — pulling back spending modestly when markets are down and allowing more in strong years. Small adjustments early in a downturn can dramatically extend portfolio longevity.
          </p>

          <h3>3. Delaying Social Security</h3>
          <p>
            Delaying Social Security to 70 creates a higher guaranteed income floor — reducing how much you need to withdraw from the portfolio each year. This indirectly reduces sequence of returns exposure, since your dependence on the portfolio for living expenses is lower.
          </p>

          <h3>4. Asset Allocation Adjustment</h3>
          <p>
            Some retirees reduce equity exposure in the years immediately before and after retirement to reduce the magnitude of a potential early downturn. The trade-off is lower expected long-term growth, so this requires careful calibration to your specific longevity and income needs.
          </p>

          <h3>5. Annuity Income Floor</h3>
          <p>
            A portion of assets can be used to purchase an annuity that provides guaranteed monthly income — reducing dependence on portfolio withdrawals and providing downside protection. Annuities vary enormously in quality and cost, so this deserves careful, independent evaluation.
          </p>

          <div className="key-takeaways">
            <h4>Key Takeaways — Protection Strategies</h4>
            <ul>
              <li>A cash/bond buffer bucket lets you avoid selling equities during downturns</li>
              <li>Flexible spending guardrails allow small reductions during bad years to prevent lasting damage</li>
              <li>Higher Social Security income reduces portfolio dependency and sequence risk</li>
              <li>Asset allocation and annuities can both play a role — depending on your situation</li>
            </ul>
          </div>

          <h2>This Is Not About Fear — It Is About Planning</h2>
          <p>
            Sequence of returns risk is not a reason to avoid equities or to move entirely to cash. Inflation is a long-term risk too, and a portfolio that grows too slowly may also fail to sustain 30 years of retirement.
          </p>
          <p>
            The goal is balance — and the right balance depends on your income sources, expenses, timeline, and tolerance for volatility. This is exactly the kind of picture your free JBAdvantage retirement review helps you understand.
          </p>
        </div>

        <div className="mt-14 bg-[#0F2C5A] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Understand Your Portfolio Risk — Free</h3>
          <p className="text-slate-300 text-base mb-7 max-w-lg mx-auto">
            We will walk through your specific risk exposure and protection options in your free, no-obligation retirement review.
          </p>
          <Link href="/#review-form" className="btn-gold inline-flex text-sm px-7 py-3.5 group">
            Request My Free Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 text-sm">
          <Link href="/resources/tax-efficient-retirement-paycheck" className="flex items-center gap-1.5 text-slate-500 hover:text-[#C5A46E] transition-colors font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Tax-Efficient Paycheck
          </Link>
          <Link href="/resources/healthcare-long-term-care-planning" className="flex items-center gap-1.5 text-[#C5A46E] hover:text-[#D4B882] transition-colors font-semibold">
            Next: Healthcare Planning <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="mt-10 text-slate-400 text-xs text-center leading-relaxed max-w-xl mx-auto">
          This guide is for educational purposes only and does not constitute financial advice. All investing involves risk. Past performance does not guarantee future results. Consult a licensed professional before making investment decisions.
        </p>
      </div>
    </div>
  )
}
