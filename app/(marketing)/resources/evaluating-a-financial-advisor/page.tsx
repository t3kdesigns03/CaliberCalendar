import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'How to Evaluate a Financial Advisor | JBAdvantage',
  description: 'Know what to look for, what to ask, and what red flags to watch for before working with a financial advisor.',
}

export default function EvaluatingAdvisorPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      <div className="bg-[#0F2C5A] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-[#C5A46E]/70 hover:text-[#C5A46E] text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
          </Link>
          <div className="gold-badge mb-6 text-xs font-semibold">Advisor Guidance</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            How to Evaluate a Financial Advisor: <span className="gradient-text">Questions to Ask Before You Commit</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Not all advisors operate the same way — and the differences matter enormously. Know what to look for before you sign anything.
          </p>
          <div className="mt-6 flex items-center gap-3 text-slate-500 text-sm">
            <span>8 min read</span><span>·</span><span>JBAdvantage Educational Team</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-retirement">

          <p>
            There are over 300,000 financial professionals in the United States who use some variation of the title &ldquo;financial advisor.&rdquo; They operate under different legal standards, are compensated in very different ways, and have dramatically different levels of training, expertise, and client focus. Finding the right one — or knowing whether the one you have is right for you — requires asking the right questions.
          </p>

          <p>
            This guide is not about finding fault with any individual advisor. It is about equipping you to be an informed consumer of financial services — which is ultimately in your best interest and in the interest of any advisor who truly serves clients well.
          </p>

          <h2>The Most Important Distinction: Fiduciary vs. Suitability Standard</h2>
          <p>
            This is the single most important concept when evaluating a financial advisor:
          </p>
          <ul>
            <li><strong style={{color:'#0F2C5A'}}>Fiduciary standard:</strong> The advisor is legally required to act in your best interest at all times. This is the higher standard, required of Registered Investment Advisors (RIAs) and their representatives.</li>
            <li><strong style={{color:'#0F2C5A'}}>Suitability standard:</strong> The advisor must recommend products that are &ldquo;suitable&rdquo; for you — but not necessarily in your best interest. This is the standard that applies to many broker-dealer representatives.</li>
          </ul>
          <p>
            Ask directly: &ldquo;Are you a fiduciary? Are you always a fiduciary, or only some of the time?&rdquo; Some advisors operate under the fiduciary standard only when acting in an advisory capacity but revert to suitability when selling products. The clearest answer you want is: &ldquo;Yes, I am a fiduciary 100% of the time, in writing.&rdquo;
          </p>

          <div className="key-takeaways">
            <h4>Key Takeaways — Fiduciary vs. Suitability</h4>
            <ul>
              <li>Fiduciary advisors are legally required to act in your best interest</li>
              <li>Suitability standard allows recommendations that benefit the advisor if they also benefit you</li>
              <li>Ask whether they are a fiduciary in writing, 100% of the time</li>
              <li>Registered Investment Advisors (RIAs) are held to the fiduciary standard</li>
            </ul>
          </div>

          <h2>Understanding Compensation: How Advisors Get Paid</h2>
          <p>
            How an advisor is compensated shapes what they recommend. There are several common compensation models:
          </p>
          <ul>
            <li><strong style={{color:'#0F2C5A'}}>Fee-only:</strong> Paid directly by you — by the hour, a flat annual retainer, or a percentage of assets managed (AUM). No commissions. Clearest alignment of interests.</li>
            <li><strong style={{color:'#0F2C5A'}}>Fee-based:</strong> Charges advisory fees but also earns commissions on products sold. The potential for conflict exists when recommending commission-generating products.</li>
            <li><strong style={{color:'#0F2C5A'}}>Commission-only:</strong> Paid entirely through commissions on the products they sell. Common among insurance agents and some broker-dealer reps. Their income depends on what they sell to you.</li>
            <li><strong style={{color:'#0F2C5A'}}>AUM (Assets Under Management):</strong> A percentage fee — typically 0.5% to 1.5% per year — based on the assets they manage for you. Aligns incentives to grow your portfolio, though it can also discourage advice to pay down debt or hold cash.</li>
          </ul>
          <p>
            There is no inherently bad compensation model — but understanding it helps you evaluate any recommendation with appropriate context.
          </p>

          <h2>Credentials: What They Mean</h2>
          <p>
            The financial services industry is full of designations, and not all are equally meaningful. Here are the ones worth knowing:
          </p>
          <ul>
            <li><strong style={{color:'#0F2C5A'}}>CFP® (Certified Financial Planner):</strong> Widely considered the gold standard for comprehensive financial planning. Requires education, a rigorous exam, experience, and ongoing continuing education. Held to fiduciary standard when providing financial planning advice.</li>
            <li><strong style={{color:'#0F2C5A'}}>CFA® (Chartered Financial Analyst):</strong> Highly rigorous designation focused on investment analysis and portfolio management. Common among investment managers and analysts.</li>
            <li><strong style={{color:'#0F2C5A'}}>ChFC (Chartered Financial Consultant):</strong> A comprehensive planning designation similar in scope to the CFP, offered by The American College of Financial Services.</li>
            <li><strong style={{color:'#0F2C5A'}}>RICP® (Retirement Income Certified Professional):</strong> Focused specifically on retirement income planning — particularly relevant for clients near or in retirement.</li>
          </ul>
          <p>
            Be cautious of designations you do not recognize. Many offer little more than a weekend course and a fee. The FINRA BrokerCheck website and the SEC&apos;s Investment Adviser Public Disclosure (IAPD) database allow you to verify credentials and check for disciplinary history.
          </p>

          <h2>Questions to Ask Before Engaging an Advisor</h2>
          <ol>
            <li>&ldquo;Are you a fiduciary? Always, and in writing?&rdquo;</li>
            <li>&ldquo;How do you get paid — fees, commissions, or both?&rdquo;</li>
            <li>&ldquo;What credentials do you hold, and what do they require?&rdquo;</li>
            <li>&ldquo;What is your investment philosophy and typical approach?&rdquo;</li>
            <li>&ldquo;Who is your typical client, and how is my situation similar or different?&rdquo;</li>
            <li>&ldquo;How often will we meet, and how will you communicate with me?&rdquo;</li>
            <li>&ldquo;What happens if I need to reach you urgently?&rdquo;</li>
            <li>&ldquo;Have you ever had a disciplinary action from a regulator?&rdquo;</li>
            <li>&ldquo;Can I see your ADV Part 2?&rdquo; (This is the plain-English disclosure document all RIAs are required to provide.)</li>
          </ol>

          <h2>Red Flags to Watch For</h2>
          <ul>
            <li>Reluctance or refusal to answer questions about compensation or fiduciary status</li>
            <li>Pressure to move quickly or make a decision before you are ready</li>
            <li>Guaranteed returns or promises of above-market performance</li>
            <li>Overly complex products that are difficult to understand</li>
            <li>An unwillingness to put anything in writing</li>
            <li>A business model that seems focused on getting you to roll over your 401(k) or surrender an annuity</li>
            <li>Excessive contact in the early stages, followed by little to no contact once you are a client</li>
          </ul>

          <div className="key-takeaways">
            <h4>Key Takeaways — Due Diligence</h4>
            <ul>
              <li>Ask every advisor about fiduciary status, compensation, and credentials — in writing</li>
              <li>Look up advisors on FINRA BrokerCheck and the SEC IAPD database</li>
              <li>Request and read the ADV Part 2 disclosure document</li>
              <li>Trust your instincts — pressure and complexity are warning signs</li>
            </ul>
          </div>

          <h2>The Value of an Independent Second Opinion</h2>
          <p>
            Even if you already work with a financial advisor you trust, getting an independent second opinion on your retirement plan is simply good practice. You would not accept a major medical diagnosis without at least considering a second opinion — the same logic applies to your retirement.
          </p>
          <p>
            At JBAdvantage, our role is educational. We do not manage money or sell products. Our free retirement review exists to help you understand your own situation clearly — whether you ultimately work with an advisor, already have one, or prefer to manage things independently. An informed client is always in a stronger position.
          </p>
        </div>

        <div className="mt-14 bg-[#0F2C5A] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Get an Independent Perspective — Free</h3>
          <p className="text-slate-300 text-base mb-7 max-w-lg mx-auto">
            Our free retirement review provides an educational second opinion — no products, no pressure, no cost.
          </p>
          <Link href="/#review-form" className="btn-gold inline-flex text-sm px-7 py-3.5 group">
            Request My Free Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 text-sm">
          <Link href="/resources/legacy-estate-simplification" className="flex items-center gap-1.5 text-slate-500 hover:text-[#C5A46E] transition-colors font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Legacy Planning
          </Link>
          <Link href="/resources" className="flex items-center gap-1.5 text-[#C5A46E] hover:text-[#D4B882] transition-colors font-semibold">
            All Resources <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="mt-10 text-slate-400 text-xs text-center leading-relaxed max-w-xl mx-auto">
          This guide is for educational purposes only and does not constitute financial, legal, or regulatory advice. Verify any advisor&apos;s credentials and disciplinary history through FINRA BrokerCheck and the SEC IAPD database.
        </p>
      </div>
    </div>
  )
}
