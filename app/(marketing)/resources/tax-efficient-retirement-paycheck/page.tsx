import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Tax-Efficient Retirement Paycheck | JBAdvantage',
  description: 'Learn how the order you withdraw from retirement accounts — taxable, tax-deferred, and Roth — can dramatically reduce your lifetime tax burden.',
}

export default function TaxEfficientPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      <div className="bg-[#0F2C5A] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-[#C5A46E]/70 hover:text-[#C5A46E] text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
          </Link>
          <div className="gold-badge mb-6 text-xs font-semibold">Tax Strategy</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Building a <span className="gradient-text">Tax-Efficient Retirement Paycheck</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            The order you draw from your accounts matters as much as how much you have saved. Here is how to think about withdrawal sequencing.
          </p>
          <div className="mt-6 flex items-center gap-3 text-slate-500 text-sm">
            <span>9 min read</span><span>·</span><span>JBAdvantage Educational Team</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-retirement">

          <p>
            Most people spend decades focused on how much to save. Far fewer spend time thinking about how to withdraw. Yet in retirement, withdrawal strategy can add or cost tens of thousands of dollars in taxes over a 20-to-30-year period.
          </p>

          <p>
            The core insight: different types of accounts are taxed differently, and drawing from them in the right order — at the right times — meaningfully changes how much of your own money you actually keep.
          </p>

          <h2>The Three Buckets: How Accounts Are Taxed</h2>
          <p>
            To understand withdrawal strategy, you first need to understand how your accounts are taxed:
          </p>
          <ul>
            <li><strong style={{color:'#0F2C5A'}}>Taxable accounts</strong> (brokerage accounts, savings): You pay taxes on dividends and capital gains each year. Withdrawals of principal are not taxed (you already paid). Long-term gains are taxed at favorable capital gains rates.</li>
            <li><strong style={{color:'#0F2C5A'}}>Tax-deferred accounts</strong> (Traditional IRA, 401(k), 403(b)): Contributions were pre-tax. Every dollar you withdraw in retirement is taxed as ordinary income.</li>
            <li><strong style={{color:'#0F2C5A'}}>Tax-free accounts</strong> (Roth IRA, Roth 401(k)): Contributions were after-tax. Qualified withdrawals — including growth — are completely tax-free.</li>
          </ul>

          <h2>The Traditional Withdrawal Order</h2>
          <p>
            The conventional rule of thumb is to draw from accounts in this sequence:
          </p>
          <ol>
            <li>Taxable accounts first</li>
            <li>Tax-deferred accounts second</li>
            <li>Roth accounts last</li>
          </ol>
          <p>
            The logic: let tax-advantaged accounts (especially Roth) continue compounding tax-free for as long as possible. Taxable accounts are drawn first because the tax cost there tends to be lower (capital gains rates vs. ordinary income).
          </p>
          <p>
            But this is a simplified default — and for many retirees, a more nuanced approach produces better results.
          </p>

          <div className="key-takeaways">
            <h4>Key Takeaways — Account Types</h4>
            <ul>
              <li>Taxable accounts: principal is tax-free; gains taxed at capital gains rates</li>
              <li>Tax-deferred accounts: every withdrawal is ordinary income</li>
              <li>Roth accounts: qualified withdrawals are 100% tax-free</li>
              <li>The sequence you draw from each bucket affects your annual tax bill for decades</li>
            </ul>
          </div>

          <h2>Strategic Roth Conversions: Filling the Bracket</h2>
          <p>
            One of the most powerful tools for tax-efficient retirement income is the <strong style={{color:'#0F2C5A'}}>Roth conversion</strong>: deliberately moving money from a Traditional IRA or 401(k) into a Roth IRA, paying taxes now to make future withdrawals tax-free.
          </p>
          <p>
            Why does this matter? For many retirees, income is temporarily lower in the years between retirement and age 73 (when Required Minimum Distributions kick in). If your income drops into a lower tax bracket during this window, converting IRA funds to Roth at those lower rates can produce significant long-term savings.
          </p>
          <p>
            The goal is often called &ldquo;bracket filling&rdquo; — converting just enough each year to fully use a lower bracket without pushing into a higher one. Over several years, this can dramatically reduce the eventual size of your tax-deferred accounts and the taxes owed on RMDs.
          </p>

          <h2>Required Minimum Distributions (RMDs)</h2>
          <p>
            Starting at age 73 (as of current law), the IRS requires you to withdraw a minimum amount from tax-deferred accounts each year — whether you need the income or not. These are Required Minimum Distributions.
          </p>
          <ul>
            <li>RMDs are calculated based on your account balance and IRS life expectancy tables.</li>
            <li>Failing to take your RMD results in a penalty of 25% of the amount not withdrawn.</li>
            <li>Large tax-deferred accounts can produce very large RMDs, pushing retirees into unexpectedly high tax brackets.</li>
            <li>Roth IRAs (but not Roth 401(k)s) do not have RMDs during the owner&apos;s lifetime.</li>
          </ul>
          <p>
            The larger your traditional IRA or 401(k) grows before RMDs begin, the more significant this problem becomes. This is a primary reason to consider partial Roth conversions in the years before 73.
          </p>

          <h2>Qualified Charitable Distributions (QCDs)</h2>
          <p>
            If you are 70½ or older and charitably inclined, a Qualified Charitable Distribution allows you to donate directly from your IRA to an eligible nonprofit — up to $105,000 per year (in 2024) — and have it count toward your RMD without being added to your taxable income.
          </p>
          <p>
            This can be one of the most tax-efficient ways to give, especially if you do not itemize deductions. It effectively lets you make a charitable gift at zero income tax cost.
          </p>

          <h2>Capital Gains Harvesting</h2>
          <p>
            For retirees with taxable investment accounts, careful management of capital gains can also reduce taxes. If your income is low enough in a given year, long-term capital gains may be taxed at 0% — meaning you could sell appreciated assets with no tax liability at all.
          </p>
          <p>
            This strategy works best when coordinated with other income sources to keep total income below the threshold for the 0% capital gains rate ($94,050 for married filers in 2024). It is one more reason why a holistic view of retirement income — not account-by-account decisions — matters so much.
          </p>

          <div className="key-takeaways">
            <h4>Key Takeaways — Tax Strategy Tools</h4>
            <ul>
              <li>Roth conversions before RMDs can reduce lifetime taxes significantly</li>
              <li>RMDs begin at 73 and can push you into higher brackets if your IRA is large</li>
              <li>QCDs let charitable retirees 70½+ satisfy RMDs tax-free</li>
              <li>Low-income years may allow 0% capital gains harvesting from taxable accounts</li>
              <li>These tools work best when coordinated — not used in isolation</li>
            </ul>
          </div>

          <h2>The Bottom Line: It Is About Coordination</h2>
          <p>
            Tax-efficient retirement income is not about any single account or any single decision. It is about coordinating Social Security timing, Roth conversions, account withdrawals, RMDs, charitable giving, and investment management to minimize your lifetime tax burden.
          </p>
          <p>
            This kind of coordination is exactly what we walk through in our free retirement review — in plain language, with no products to sell.
          </p>
        </div>

        <div className="mt-14 bg-[#0F2C5A] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Get a Tax Strategy Overview — Free</h3>
          <p className="text-slate-300 text-base mb-7 max-w-lg mx-auto">
            We will walk through your withdrawal strategy options in your free, no-obligation retirement review.
          </p>
          <Link href="/#review-form" className="btn-gold inline-flex text-sm px-7 py-3.5 group">
            Request My Free Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 text-sm">
          <Link href="/resources/social-security-timing" className="flex items-center gap-1.5 text-slate-500 hover:text-[#C5A46E] transition-colors font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Social Security Timing
          </Link>
          <Link href="/resources/sequence-of-returns-protection" className="flex items-center gap-1.5 text-[#C5A46E] hover:text-[#D4B882] transition-colors font-semibold">
            Next: Sequence of Returns <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="mt-10 text-slate-400 text-xs text-center leading-relaxed max-w-xl mx-auto">
          This guide is for educational purposes only and does not constitute financial, tax, or legal advice. Tax rules are subject to change. Consult a licensed professional before making withdrawal or conversion decisions.
        </p>
      </div>
    </div>
  )
}
