import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Healthcare & Long-Term Care Planning | JBAdvantage',
  description: 'Understand Medicare coverage gaps, Medigap vs. Medicare Advantage, and how to plan for long-term care costs in retirement.',
}

export default function HealthcarePlanningPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      <div className="bg-[#0F2C5A] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-[#C5A46E]/70 hover:text-[#C5A46E] text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
          </Link>
          <div className="gold-badge mb-6 text-xs font-semibold">Healthcare</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Healthcare &amp; Long-Term Care: <span className="gradient-text">Planning for What Medicare Does Not Cover</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Healthcare is often the largest unplanned expense in retirement. Understanding your options before you need them is one of the most protective things you can do.
          </p>
          <div className="mt-6 flex items-center gap-3 text-slate-500 text-sm">
            <span>10 min read</span><span>·</span><span>JBAdvantage Educational Team</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-retirement">

          <p>
            Medicare is not free, and it does not cover everything. Most people approaching retirement have a general sense of this but are surprised — often after the fact — by how significant the gaps are. This guide walks through what Medicare covers, what it does not, and how to think about the decisions you will face.
          </p>

          <h2>Medicare Basics: The Four Parts</h2>
          <ul>
            <li><strong style={{color:'#0F2C5A'}}>Part A (Hospital):</strong> Covers inpatient hospital stays, skilled nursing facility care (up to a point), hospice, and some home health care. Most people pay no premium for Part A if they or their spouse worked at least 10 years.</li>
            <li><strong style={{color:'#0F2C5A'}}>Part B (Medical):</strong> Covers doctor visits, outpatient services, preventive care, and medical equipment. There is a monthly premium — in 2024, the standard is $174.70/month. Higher-income retirees pay more via IRMAA surcharges.</li>
            <li><strong style={{color:'#0F2C5A'}}>Part C (Medicare Advantage):</strong> Private plans that replace Parts A and B (and often Part D). Bundled, often with lower premiums — but with networks, prior authorizations, and varying quality.</li>
            <li><strong style={{color:'#0F2C5A'}}>Part D (Prescription Drugs):</strong> Standalone drug coverage, purchased alongside Original Medicare. Premiums, formularies, and costs vary significantly by plan.</li>
          </ul>

          <h2>What Medicare Does Not Cover</h2>
          <p>
            Understanding the gaps is critical for planning. Original Medicare (Parts A + B) does not cover:
          </p>
          <ul>
            <li>Routine dental care, dentures</li>
            <li>Routine vision care, glasses or contacts</li>
            <li>Hearing aids and exams</li>
            <li>Most care outside the United States</li>
            <li>Long-term care (nursing home or assisted living beyond a short skilled-nursing stay)</li>
            <li>Cosmetic procedures</li>
          </ul>
          <p>
            There are also significant cost-sharing responsibilities: deductibles, coinsurance (typically 20% of approved costs with no cap under Original Medicare), and copayments. Without supplemental coverage, a serious illness could expose you to tens of thousands of dollars in out-of-pocket costs.
          </p>

          <div className="key-takeaways">
            <h4>Key Takeaways — Medicare Coverage Gaps</h4>
            <ul>
              <li>Dental, vision, and hearing are largely excluded from Original Medicare</li>
              <li>20% coinsurance with no out-of-pocket maximum is a real financial risk</li>
              <li>Long-term care — one of the biggest expenses — is not covered</li>
              <li>Understanding gaps before retirement allows time to plan around them</li>
            </ul>
          </div>

          <h2>Medigap vs. Medicare Advantage: The Core Choice</h2>
          <p>
            When you enroll in Medicare, you face a fundamental choice about how to supplement your coverage:
          </p>

          <h3>Medigap (Medicare Supplement Insurance)</h3>
          <p>
            Medigap plans — sold by private insurers — fill in the cost-sharing gaps of Original Medicare. The most comprehensive plans (Plan G is now the most common) cover the Part B deductible, all coinsurance, and most out-of-pocket exposure. Premiums are higher, but your costs are very predictable. You can see any Medicare-accepting provider in the country — no network restrictions.
          </p>

          <h3>Medicare Advantage (Part C)</h3>
          <p>
            Medicare Advantage replaces Original Medicare with a private plan. Premiums are often lower or even $0 — and many plans include dental, vision, and drug coverage. The trade-offs: you are typically limited to a network of providers, may need prior authorizations for procedures, and coverage quality varies significantly by plan and geography.
          </p>

          <p>
            There is no universal right answer. Medigap offers predictability and maximum flexibility — better for those with complex health needs or who travel frequently. Medicare Advantage can work well for healthy retirees in markets with strong plan options. The decision deserves careful evaluation before your initial enrollment window closes.
          </p>

          <h2>IRMAA: When Higher Income Raises Your Premiums</h2>
          <p>
            If your income exceeds certain thresholds, you will pay higher Medicare Part B and Part D premiums through the Income-Related Monthly Adjustment Amount (IRMAA). In 2024, single filers with income above $103,000 and married filers above $206,000 pay surcharges that can add hundreds of dollars per month to Medicare costs.
          </p>
          <p>
            This is another reason why Roth conversions, capital gains harvesting, and withdrawal strategy matter — the income you report in a given year affects your Medicare premiums two years later. Careful tax planning can help you avoid or minimize IRMAA impacts.
          </p>

          <h2>Long-Term Care: The Largest Gap</h2>
          <p>
            The average cost of a private nursing home room in the United States exceeded $9,000 per month in 2023. Assisted living averages roughly $5,000 per month. Medicare covers none of this for custodial care — only short-term skilled nursing following a qualifying hospital stay, and only up to 100 days.
          </p>
          <p>
            Medicaid does cover long-term care — but requires spending down most of your assets first. This is a devastating financial outcome for many couples and families.
          </p>

          <h3>Options for Long-Term Care Funding</h3>
          <ul>
            <li><strong style={{color:'#0F2C5A'}}>Traditional long-term care insurance:</strong> Provides a daily or monthly benefit for covered care. Premiums have risen significantly over the years and insurers have exited the market. Buying younger (mid-50s) typically offers the best access and pricing.</li>
            <li><strong style={{color:'#0F2C5A'}}>Hybrid life/LTC policies:</strong> Life insurance policies with an LTC rider. If you need care, benefits pay for it; if you do not, the death benefit passes to heirs. More flexible than traditional LTC insurance.</li>
            <li><strong style={{color:'#0F2C5A'}}>Self-insurance:</strong> Setting aside a dedicated pool of assets specifically for potential care needs. Requires significant assets and discipline but avoids insurance costs and complexity.</li>
          </ul>

          <div className="key-takeaways">
            <h4>Key Takeaways — Long-Term Care</h4>
            <ul>
              <li>Medicare does not cover custodial long-term care — only short-term skilled nursing</li>
              <li>The average nursing home costs over $9,000/month; assisted living averages $5,000/month</li>
              <li>Options include traditional LTC insurance, hybrid policies, and self-insurance</li>
              <li>Planning earlier (mid-50s) provides the most options at the best cost</li>
            </ul>
          </div>

          <h2>HSA Strategy: Using Health Savings Accounts in Retirement</h2>
          <p>
            If you have a Health Savings Account (HSA) from your working years, it becomes an extremely versatile retirement asset. After age 65, HSA funds can be withdrawn for any purpose (taxed as income, like a traditional IRA) — or used tax-free for qualified medical expenses, including Medicare premiums (except Medigap), dental, vision, hearing, and long-term care premiums.
          </p>
          <p>
            For retirees who built significant HSA balances, this creates a powerful dedicated pool for healthcare costs that is never taxed when used correctly.
          </p>
        </div>

        <div className="mt-14 bg-[#0F2C5A] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Get Healthcare Planning Clarity — Free</h3>
          <p className="text-slate-300 text-base mb-7 max-w-lg mx-auto">
            We review Medicare timing and healthcare planning in every free retirement review. No pressure, no products.
          </p>
          <Link href="/#review-form" className="btn-gold inline-flex text-sm px-7 py-3.5 group">
            Request My Free Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 text-sm">
          <Link href="/resources/sequence-of-returns-protection" className="flex items-center gap-1.5 text-slate-500 hover:text-[#C5A46E] transition-colors font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Sequence of Returns
          </Link>
          <Link href="/resources/legacy-estate-simplification" className="flex items-center gap-1.5 text-[#C5A46E] hover:text-[#D4B882] transition-colors font-semibold">
            Next: Legacy Planning <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="mt-10 text-slate-400 text-xs text-center leading-relaxed max-w-xl mx-auto">
          This guide is for educational purposes only and does not constitute financial, legal, or medical advice. Medicare rules and costs change annually. Consult a licensed professional before making coverage decisions.
        </p>
      </div>
    </div>
  )
}
