import Link from 'next/link'
import { ArrowRight, FileText, BookOpen } from 'lucide-react'

const GUIDES = [
  {
    slug: 'social-security-timing',
    title: 'Social Security Timing',
    description: 'Claiming at 62 vs. 70 can mean a difference of hundreds of thousands of dollars. Learn how to evaluate your options, understand the break-even analysis, and make the most informed decision for your situation.',
    tag: 'Income Strategy',
    readTime: '8 min read',
  },
  {
    slug: 'tax-efficient-retirement-paycheck',
    title: 'Building a Tax-Efficient Retirement Paycheck',
    description: 'The order in which you draw down accounts — taxable, tax-deferred, Roth — matters more than most people realize. Learn how withdrawal sequencing can meaningfully reduce your lifetime tax burden.',
    tag: 'Tax Strategy',
    readTime: '9 min read',
  },
  {
    slug: 'sequence-of-returns-protection',
    title: 'Sequence of Returns Risk',
    description: 'A market downturn in your first years of retirement can permanently damage your portfolio — even if the market fully recovers. Learn what sequence of returns risk is and how to protect against it.',
    tag: 'Portfolio Risk',
    readTime: '7 min read',
  },
  {
    slug: 'healthcare-long-term-care-planning',
    title: 'Healthcare & Long-Term Care Planning',
    description: 'Medicare does not cover everything — and long-term care is one of the largest unplanned expenses in retirement. Learn how to evaluate your coverage options and plan ahead with clarity.',
    tag: 'Healthcare',
    readTime: '10 min read',
  },
  {
    slug: 'legacy-estate-simplification',
    title: 'Legacy & Estate Simplification',
    description: 'You do not need a large estate to benefit from basic planning. Beneficiary designations, account titling, and simple documents can make an enormous difference for the people you leave behind.',
    tag: 'Legacy',
    readTime: '7 min read',
  },
  {
    slug: 'evaluating-a-financial-advisor',
    title: 'How to Evaluate a Financial Advisor',
    description: 'Not all advisors operate the same way — and the differences matter enormously. Learn the right questions to ask, how to compare fee structures, and what red flags to watch for.',
    tag: 'Advisor Guidance',
    readTime: '8 min read',
  },
]

export const metadata = {
  title: 'Retirement Resources | JBAdvantage',
  description: 'Free educational retirement guides on Social Security timing, tax strategy, portfolio risk, healthcare planning, and more — written in plain language.',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">

      {/* Hero */}
      <div className="bg-[#0F2C5A] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gold-badge mb-8 text-sm font-semibold">
            <BookOpen className="w-4 h-4 text-[#C5A46E]" />
            Free Educational Guides
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
            Retirement{' '}
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
            Plain-language guides on the topics that matter most — written by our team to help
            you make better decisions, at no cost and with no agenda.
          </p>
        </div>
      </div>

      {/* Guides grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDES.map(({ slug, title, description, tag, readTime }) => (
            <Link
              key={slug}
              href={`/resources/${slug}`}
              className="card-premium p-7 group block"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#C5A46E]/10 border border-[#C5A46E]/20 flex items-center justify-center shrink-0">
                  <FileText className="w-4.5 h-4.5 text-[#C5A46E]" />
                </div>
                <span className="text-[#C5A46E] text-xs font-semibold bg-[#C5A46E]/[0.08] border border-[#C5A46E]/15 rounded-full px-2.5 py-1">
                  {tag}
                </span>
              </div>
              <h2 className="text-[#0F2C5A] font-bold text-base mb-2 group-hover:text-[#C5A46E] transition-colors leading-snug">
                {title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#C5A46E] text-sm font-semibold">
                  Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-slate-400 text-xs">{readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#0F2C5A] rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Want Guidance Specific to <span className="text-[#C5A46E]">Your Situation?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Guides are a great start — but a personalized, free retirement review goes further.
            Get answers to your specific questions, at no cost.
          </p>
          <Link
            href="/#review-form"
            className="btn-gold inline-flex text-base px-8 py-4 group"
          >
            Request My Free Retirement Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <p className="mt-4 text-slate-500 text-sm">No commitment. No pressure. Completely free.</p>
        </div>
      </div>
    </div>
  )
}
