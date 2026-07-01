import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'

const GUIDES = [
  {
    slug: 'social-security-timing',
    title: 'Social Security Timing',
    teaser: 'Claiming at 62 vs. 70 can mean a difference of hundreds of thousands of dollars. Learn how to think through your decision.',
    tag: 'Income Strategy',
  },
  {
    slug: 'tax-efficient-retirement-paycheck',
    title: 'Tax-Efficient Retirement Paycheck',
    teaser: 'The order in which you draw down accounts matters more than most people realize. Here is what you need to know.',
    tag: 'Tax Strategy',
  },
  {
    slug: 'sequence-of-returns-protection',
    title: 'Sequence of Returns',
    teaser: 'A market downturn in your first years of retirement can be far more damaging than one later on. Learn why — and what to do.',
    tag: 'Portfolio Risk',
  },
  {
    slug: 'healthcare-long-term-care-planning',
    title: 'Healthcare & Long-Term Care',
    teaser: 'Medicare does not cover everything. Understand your options for coverage gaps and long-term care before you need them.',
    tag: 'Healthcare',
  },
  {
    slug: 'legacy-estate-simplification',
    title: 'Legacy & Estate Simplification',
    teaser: 'Making things easy for the people you love is one of the most generous things you can do. Start here.',
    tag: 'Legacy',
  },
  {
    slug: 'evaluating-a-financial-advisor',
    title: 'Evaluating a Financial Advisor',
    teaser: 'Not all advisors are the same. Know what to look for, what to ask, and what red flags to watch for before you sign anything.',
    tag: 'Advisor Guidance',
  },
]

export default function ResourcesHub() {
  return (
    <section id="resources" className="py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="navy-badge justify-center mb-6 text-xs font-semibold tracking-widest uppercase">
            Free Educational Resources
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F2C5A] mb-4 tracking-tight">
            Learn at Your Own Pace
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Our retirement guides cover the topics that matter most — written in plain language,
            with no products to sell and no agenda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {GUIDES.map(({ slug, title, teaser, tag }) => (
            <Link
              key={slug}
              href={`/resources/${slug}`}
              className="card-premium p-7 group block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#C5A46E]/10 border border-[#C5A46E]/20 flex items-center justify-center shrink-0">
                  <FileText className="w-4.5 h-4.5 text-[#C5A46E]" />
                </div>
                <span className="text-[#C5A46E] text-xs font-semibold tracking-wide bg-[#C5A46E]/8 border border-[#C5A46E]/15 rounded-full px-2.5 py-1">
                  {tag}
                </span>
              </div>
              <h3 className="text-[#0F2C5A] font-bold text-base mb-2 group-hover:text-[#C5A46E] transition-colors">
                {title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{teaser}</p>
              <div className="flex items-center gap-1.5 text-[#C5A46E] text-sm font-semibold">
                Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/resources"
            className="btn-navy inline-flex px-8 py-4 text-sm group"
          >
            View All Resources
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <p className="mt-4 text-slate-400 text-sm">
            Or{' '}
            <a href="#review-form" className="text-[#C5A46E] font-semibold hover:underline">
              request your personalized free review
            </a>{' '}
            and get answers specific to your situation.
          </p>
        </div>
      </div>
    </section>
  )
}
