import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Caliber Calendar | Pay-Per-Show Qualified Appointments for Elite Advisors',
  description:
    'Only pay for qualified wealth and annuity appointments that actually show up. Pre-educated $500K–$2M+ asset prospects. Professionally set. You close.',
  keywords: [
    'financial advisor appointments', 'annuity leads', 'qualified appointments',
    'pay per show', 'wealth management leads', 'annuity appointment setting',
  ],
  openGraph: {
    title: 'Caliber Calendar | Pay-Per-Show Qualified Appointments',
    description: 'Pre-educated $500K–$2M+ asset prospects. You close. Pay only on show.',
    type: 'website',
    url: 'https://calibercalendar.com',
    siteName: 'Caliber Calendar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caliber Calendar | Pay-Per-Show Qualified Appointments',
    description: 'Pre-educated $500K–$2M+ asset prospects. Zero upfront risk.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A192F',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Caliber Calendar',
  description:
    'Pay-Per-Show qualified appointment service for elite financial advisors and annuity producers. Pre-educated $500K+ asset prospects, confirmed and showing.',
  url: 'https://calibercalendar.com',
  serviceType: 'Appointment Setting Service',
  areaServed: 'United States',
  audience: {
    '@type': 'Audience',
    audienceType: 'Financial Advisors, Annuity Producers, Wealth Managers',
  },
  offers: {
    '@type': 'Offer',
    description: 'Pay-per-show qualified appointments with $500K+ investable asset prospects',
    pricingType: 'PerUnit',
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
      <body className="antialiased bg-[#0A192F] text-white">{children}</body>
    </html>
  )
}
