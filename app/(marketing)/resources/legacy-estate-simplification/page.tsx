import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Legacy & Estate Simplification | JBAdvantage',
  description: 'Learn how to simplify your estate so the people you love are not left with confusion, conflict, or unnecessary costs.',
}

export default function LegacyEstatePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      <div className="bg-[#0F2C5A] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-[#C5A46E]/70 hover:text-[#C5A46E] text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
          </Link>
          <div className="gold-badge mb-6 text-xs font-semibold">Legacy</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Legacy &amp; Estate Simplification: <span className="gradient-text">Making It Easy for the People You Love</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            You do not need a large estate to benefit from basic planning. A few decisions made now can spare your family enormous stress and cost.
          </p>
          <div className="mt-6 flex items-center gap-3 text-slate-500 text-sm">
            <span>7 min read</span><span>·</span><span>JBAdvantage Educational Team</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-retirement">

          <p>
            Estate planning is one of those tasks most people put off indefinitely — because thinking about it requires confronting mortality, and because it feels complicated. But the basics are not complicated. And the cost of not doing them — to the people you love — can be very real.
          </p>

          <p>
            This guide focuses on simplification: the most accessible steps that can have the greatest impact for the majority of retirees, without requiring you to be wealthy or to navigate a complex legal process.
          </p>

          <h2>Beneficiary Designations: The Most Important Documents You May Be Overlooking</h2>
          <p>
            Beneficiary designations on retirement accounts, life insurance policies, and annuities override your will. Completely. If your IRA says your ex-spouse is the beneficiary, that person receives the account — regardless of what your current will says.
          </p>
          <p>
            Reviewing and updating beneficiary designations is one of the highest-impact, lowest-effort actions in estate planning. Things to check and update regularly:
          </p>
          <ul>
            <li>All IRA and 401(k) accounts — primary and contingent beneficiaries</li>
            <li>Life insurance policies</li>
            <li>Annuity contracts</li>
            <li>Bank accounts with Payable on Death (POD) designations</li>
            <li>Brokerage accounts with Transfer on Death (TOD) designations</li>
          </ul>
          <p>
            Major life events — marriage, divorce, death of a beneficiary, new grandchildren — are triggers to revisit these designations. Many people have not looked at them in decades.
          </p>

          <div className="key-takeaways">
            <h4>Key Takeaways — Beneficiary Designations</h4>
            <ul>
              <li>Beneficiary designations override your will on all designated accounts</li>
              <li>Outdated designations are one of the most common estate planning mistakes</li>
              <li>Review all accounts after any major life event</li>
              <li>Always name both primary and contingent beneficiaries</li>
            </ul>
          </div>

          <h2>Account Titling and Transfer on Death</h2>
          <p>
            How your accounts are titled determines what happens to them when you die. Assets titled solely in your name may require probate — a court-supervised process that can be slow, costly, and public.
          </p>
          <p>
            Several account titling strategies can help assets pass smoothly outside of probate:
          </p>
          <ul>
            <li><strong style={{color:'#0F2C5A'}}>Joint tenancy with right of survivorship:</strong> Property passes automatically to the surviving joint owner. Common for real estate and bank accounts between spouses.</li>
            <li><strong style={{color:'#0F2C5A'}}>Transfer on Death (TOD):</strong> For investment and brokerage accounts, a TOD designation allows assets to pass directly to named beneficiaries without probate.</li>
            <li><strong style={{color:'#0F2C5A'}}>Payable on Death (POD):</strong> The same concept applied to bank accounts. Simple to set up through your bank.</li>
            <li><strong style={{color:'#0F2C5A'}}>Revocable living trust:</strong> Assets held in a trust avoid probate and can provide more nuanced control over how and when assets are distributed. More complex to establish but very useful for those with real estate in multiple states or specific distribution wishes.</li>
          </ul>

          <h2>The Documents Everyone Should Have</h2>
          <p>
            Regardless of the size of your estate, there are four core legal documents that can prevent enormous hardship for your family if you become incapacitated or pass away:
          </p>
          <ol>
            <li><strong style={{color:'#0F2C5A'}}>Will:</strong> Specifies how your assets should be distributed and who should administer your estate. Without one, state law decides — which may not reflect your wishes.</li>
            <li><strong style={{color:'#0F2C5A'}}>Durable Power of Attorney:</strong> Names someone to manage your financial affairs if you become unable to do so. Without this, your family may need court approval to help you — even in a crisis.</li>
            <li><strong style={{color:'#0F2C5A'}}>Healthcare Proxy / Medical Power of Attorney:</strong> Names someone to make medical decisions on your behalf if you cannot.</li>
            <li><strong style={{color:'#0F2C5A'}}>Advance Directive / Living Will:</strong> Documents your wishes regarding end-of-life care, artificial life support, and related decisions. Spares your loved ones from having to guess.</li>
          </ol>

          <h2>Common Pitfalls in Blended Families</h2>
          <p>
            For those with blended families — children from previous marriages, stepchildren, or a second spouse — estate planning requires extra care. Default legal rules can produce unintended outcomes:
          </p>
          <ul>
            <li>A surviving spouse may inherit everything, leaving adult children from a prior marriage with nothing.</li>
            <li>Stepchildren have no automatic inheritance rights unless specifically named.</li>
            <li>Outdated beneficiary designations may direct assets to a prior family.</li>
          </ul>
          <p>
            Explicit, regularly reviewed documentation is especially important in these situations.
          </p>

          <h2>Charitable Giving Strategies</h2>
          <p>
            For retirees who want to leave something to charitable causes, there are several tax-efficient strategies beyond simple bequests:
          </p>
          <ul>
            <li><strong style={{color:'#0F2C5A'}}>Qualified Charitable Distributions (QCDs):</strong> Give directly from your IRA tax-free during your lifetime (for those 70½+).</li>
            <li><strong style={{color:'#0F2C5A'}}>Leaving IRA assets to charity:</strong> Charities do not pay income tax on inherited IRA funds. This can make IRA assets the most tax-efficient assets to leave to charity, while leaving Roth or taxable assets to heirs.</li>
            <li><strong style={{color:'#0F2C5A'}}>Donor-Advised Funds (DAFs):</strong> Contribute appreciated assets now, take the deduction, and distribute to charities over time at your discretion.</li>
          </ul>

          <div className="key-takeaways">
            <h4>Key Takeaways — Estate Simplification</h4>
            <ul>
              <li>A will, power of attorney, healthcare proxy, and advance directive are essential for everyone</li>
              <li>TOD and POD designations keep most assets out of probate without a trust</li>
              <li>Blended families require extra care and explicit documentation</li>
              <li>IRA assets are often the most tax-efficient assets to leave to charity</li>
            </ul>
          </div>

          <h2>The Gift of Organization</h2>
          <p>
            Beyond legal documents and account designations, one of the most generous things you can do for your family is to leave behind clear, organized information: where accounts are held, what documents exist and where they are stored, contact information for any advisors or attorneys, login credentials in a secure but accessible location.
          </p>
          <p>
            In the confusion and grief that follows a loss, the family members tasked with settling an estate will be enormously grateful for any clarity you leave behind.
          </p>
        </div>

        <div className="mt-14 bg-[#0F2C5A] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Review Your Legacy Picture — Free</h3>
          <p className="text-slate-300 text-base mb-7 max-w-lg mx-auto">
            We cover beneficiary designations and legacy basics in every free retirement review. No products, no pressure.
          </p>
          <Link href="/#review-form" className="btn-gold inline-flex text-sm px-7 py-3.5 group">
            Request My Free Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 text-sm">
          <Link href="/resources/healthcare-long-term-care-planning" className="flex items-center gap-1.5 text-slate-500 hover:text-[#C5A46E] transition-colors font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Healthcare Planning
          </Link>
          <Link href="/resources/evaluating-a-financial-advisor" className="flex items-center gap-1.5 text-[#C5A46E] hover:text-[#D4B882] transition-colors font-semibold">
            Next: Evaluating an Advisor <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="mt-10 text-slate-400 text-xs text-center leading-relaxed max-w-xl mx-auto">
          This guide is for educational purposes only and does not constitute legal, tax, or financial advice. Estate planning laws vary by state. Consult a licensed estate attorney for guidance specific to your situation.
        </p>
      </div>
    </div>
  )
}
