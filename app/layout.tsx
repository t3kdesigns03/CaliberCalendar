import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JBAdvantage | Free Retirement Asset Review & Retirement Goal Support',
  description:
    'Get a complimentary, no-obligation review of your retirement assets and income plan. Independent educational support for pre-retirees and retirees — no pressure, no cost.',
  keywords: [
    'free retirement review', 'retirement asset review', 'retirement planning help',
    'Social Security timing', 'retirement income planning', 'no-cost retirement review',
    'pre-retiree support', 'retirement education', 'JBAdvantage',
  ],
  openGraph: {
    title: 'JBAdvantage | Free Retirement Asset Review & Goal Support',
    description: 'Complimentary, no-pressure retirement asset review and ongoing educational support for pre-retirees and retirees.',
    type: 'website',
    url: 'https://caliber.t3kdesigns.app',
    siteName: 'JBAdvantage',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JBAdvantage | Free Retirement Asset Review',
    description: 'Independent educational support for your retirement goals — no cost, no pressure.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F2C5A',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'JBAdvantage',
  description:
    'Independent educational retirement support service. Complimentary asset reviews and goal guidance for pre-retirees and retirees, with optional introductions to vetted advisors.',
  url: 'https://caliber.t3kdesigns.app',
  serviceType: 'Retirement Education & Support',
  areaServed: 'United States',
  audience: {
    '@type': 'Audience',
    audienceType: 'Pre-retirees, Retirees, Adults ages 55-75+',
  },
  offers: {
    '@type': 'Offer',
    description: 'Complimentary retirement asset review and educational support',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
