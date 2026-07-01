import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Social Security Timing | JBAdvantage',
  description: 'Learn how to evaluate the right time to claim Social Security benefits — including break-even analysis, spousal benefits, and the cost of claiming too early.',
}

export default function SocialSecurityTimingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      {/* Header */}
      <div className="bg-[#0F2C5A] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-[#C5A46E]/70 hover:text-[#C5A46E] text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
          </Link>
          <div className="gold-badge mb-6 text-xs font-semibold">Income Strategy</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Social Security Timing: <span className="gradient-text">When Should You Claim?</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            One of the most consequential — and irreversible — decisions in retirement. Here is what you need to understand before you decide.
          </p>
          <div className="mt-6 flex items-center gap-3 text-slate-500 text-sm">
            <span>8 min read</span>
            <span>·</span>
            <span>JBAdvantage Educational Team</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-retirement">

          <p>
            Social Security timing is one of the few retirement decisions that is both enormously consequential and completely permanent. Once you claim, you cannot un-claim. And yet most people make this decision with limited information, often defaulting to &ldquo;as soon as possible&rdquo; without fully understanding the trade-offs.
          </p>

          <p>
            This guide will walk you through the core concepts you need to evaluate your options — including break-even analysis, spousal and survivor considerations, and the impact of continuing to work while receiving benefits.
          </p>

          <h2>The Basics: Claiming Windows and Benefit Amounts</h2>
          <p>
            You can begin claiming Social Security retirement benefits as early as age 62 or as late as age 70. Your <strong style={{color:'#0F2C5A'}}>Full Retirement Age (FRA)</strong> — the age at which you receive your full calculated benefit — depends on your birth year. For most people reading this today, FRA falls between 66 and 67.
          </p>
          <ul>
            <li>Claiming at 62 permanently reduces your monthly benefit by up to 30% compared to waiting until FRA.</li>
            <li>Delaying past FRA earns you <strong style={{color:'#0F2C5A'}}>delayed retirement credits</strong> — 8% per year — up to age 70.</li>
            <li>Claiming at 70 vs. 62 can result in a monthly benefit that is 70–80% higher, depending on your birth year.</li>
          </ul>

          <h2>Understanding Break-Even Analysis</h2>
          <p>
            The core question people ask is: &ldquo;Will I live long enough to come out ahead by waiting?&rdquo; That is what break-even analysis answers.
          </p>
          <p>
            If you delay claiming from 62 to 70, you give up eight years of payments. Your monthly check will be significantly higher — but you have to live long enough to recover the forgone checks. Typically, the break-even point falls somewhere between ages 78 and 82, depending on your specific benefit amounts.
          </p>
          <p>
            What this means in practice:
          </p>
          <ul>
            <li>If you expect to live into your mid-80s or beyond, waiting typically produces more total income.</li>
            <li>If you have serious health concerns that suggest a shorter lifespan, claiming earlier may be the right call.</li>
            <li>If your finances require income immediately, claiming early may be necessary regardless of the math.</li>
          </ul>
          <p>
            Break-even is a useful starting point — but it is not the only consideration. Most people also need to factor in spousal benefits, survivor benefits, taxes, and portfolio withdrawal impacts.
          </p>

          <div className="key-takeaways">
            <h4>Key Takeaways — Timing Basics</h4>
            <ul>
              <li>You can claim between 62 and 70; each year of delay increases your monthly benefit</li>
              <li>Delayed retirement credits add 8% per year between FRA and 70</li>
              <li>Break-even for waiting is typically around age 78–82</li>
              <li>Health, finances, and marital status all influence the right choice</li>
            </ul>
          </div>

          <h2>Spousal Benefits: A Critical Variable for Married Couples</h2>
          <p>
            If you are married, Social Security timing becomes a two-person problem. Your claiming decision directly affects the benefit available to your spouse — both while you are alive and after.
          </p>
          <ul>
            <li>A spouse is generally entitled to up to 50% of the higher-earning spouse&apos;s FRA benefit.</li>
            <li>The <strong style={{color:'#0F2C5A'}}>survivor benefit</strong> is equal to 100% of what the higher earner was receiving at death. This makes the higher earner&apos;s claiming decision especially important.</li>
            <li>If the higher earner delays to 70, the surviving spouse inherits a permanently larger monthly benefit — for the rest of their life.</li>
          </ul>
          <p>
            For many married couples, the optimal strategy is for the higher earner to delay as long as financially possible, while the lower earner may claim earlier to provide near-term income. But this depends heavily on your specific situation.
          </p>

          <h2>The Earnings Test: Working While You Claim</h2>
          <p>
            If you claim Social Security before your Full Retirement Age and continue working, your benefits may be temporarily reduced. In 2024, the earnings limit was approximately $22,320 per year. Benefits above that threshold are withheld — temporarily — at a rate of $1 for every $2 earned over the limit.
          </p>
          <p>
            Importantly, these withheld benefits are not lost permanently. Once you reach FRA, your monthly payment is recalculated upward to account for the months of withheld benefits. But the timing implications can be complex, and for most people who are still earning a good income, claiming before FRA while working creates unnecessary complications.
          </p>

          <h2>How Social Security Benefits Are Taxed</h2>
          <p>
            Up to 85% of Social Security benefits may be subject to federal income tax, depending on your &ldquo;combined income&rdquo; (adjusted gross income + nontaxable interest + half of Social Security). Most retirees with moderate income and savings are surprised to find how much of their benefit gets taxed.
          </p>
          <ul>
            <li>If your combined income is between $25,000–$34,000 (single filers), up to 50% of your benefit may be taxable.</li>
            <li>Above $34,000, up to 85% of your benefit may be taxable.</li>
            <li>For married filers, these thresholds are $32,000–$44,000 and above $44,000, respectively.</li>
          </ul>
          <p>
            This is another reason that retirement withdrawal order matters — drawing more from Roth accounts can reduce your combined income and lower the taxable portion of Social Security.
          </p>

          <h2>Common Mistakes in Social Security Timing</h2>
          <ul>
            <li><strong style={{color:'#0F2C5A'}}>Claiming early by default:</strong> Many people claim at 62 simply because they can, without running the break-even math or considering the impact on a spouse.</li>
            <li><strong style={{color:'#0F2C5A'}}>Ignoring spousal strategy:</strong> The higher earner&apos;s claiming age is the single biggest lever for optimizing household lifetime Social Security income — often overlooked.</li>
            <li><strong style={{color:'#0F2C5A'}}>Not accounting for taxes:</strong> Failing to plan around the taxation of benefits can lead to unexpectedly high tax bills early in retirement.</li>
            <li><strong style={{color:'#0F2C5A'}}>Making the decision in isolation:</strong> Social Security timing interacts with portfolio withdrawals, Roth conversions, RMDs, and Medicare premiums (IRMAA). A holistic view matters.</li>
          </ul>

          <div className="key-takeaways">
            <h4>Key Takeaways — Married Couples & Strategy</h4>
            <ul>
              <li>The higher earner&apos;s delay typically produces the largest lifetime household benefit</li>
              <li>Survivor benefits equal 100% of what the higher earner received — a powerful reason to wait</li>
              <li>Working before FRA while claiming triggers the earnings test</li>
              <li>Social Security strategy connects directly to tax planning and withdrawal sequencing</li>
            </ul>
          </div>

          <h2>This Decision Deserves a Second Opinion</h2>
          <p>
            Social Security timing is permanent. The decision you make at 62, 65, or 70 will follow you — and your spouse — for the rest of your lives. Getting it right matters enormously.
          </p>
          <p>
            At JBAdvantage, we walk through Social Security timing as part of every free retirement review. We do not sell products or push a particular choice — we help you understand your specific options clearly, so you can make the decision that is right for you.
          </p>
        </div>

        {/* Article CTA */}
        <div className="mt-14 bg-[#0F2C5A] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Get Your Social Security Timing Analysis — Free
          </h3>
          <p className="text-slate-300 text-base mb-7 max-w-lg mx-auto">
            We will walk through your specific claiming options in your free, no-obligation retirement review.
          </p>
          <Link
            href="/#review-form"
            className="btn-gold inline-flex text-sm px-7 py-3.5 group"
          >
            Request My Free Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 text-sm">
          <Link href="/resources" className="flex items-center gap-1.5 text-slate-500 hover:text-[#C5A46E] transition-colors font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> All Resources
          </Link>
          <Link href="/resources/tax-efficient-retirement-paycheck" className="flex items-center gap-1.5 text-[#C5A46E] hover:text-[#D4B882] transition-colors font-semibold">
            Next: Tax-Efficient Paycheck <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="mt-10 text-slate-400 text-xs text-center leading-relaxed max-w-xl mx-auto">
          This guide is for educational purposes only and does not constitute financial, tax, or legal advice. Social Security rules are subject to change. Consult a licensed professional before making claiming decisions.
        </p>
      </div>
    </div>
  )
}
