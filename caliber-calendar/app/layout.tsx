import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Caliber Calendar | Pay-Per-Show Qualified Appointments for Elite Advisors',
  description:
    'Only pay for qualified wealth and annuity appointments that actually show up. Pre-educated $500K–$2M+ asset prospects. Professionally set. You close.',
  keywords: [
    'financial advisor appointments',
    'annuity leads',
    'qualified appointments',
    'pay per show',
    'wealth management leads',
    'annuity appointment setting',
    'high net worth prospects',
  ],
  authors: [{ name: 'Caliber Calendar' }],
  openGraph: {
    title: 'Caliber Calendar | Pay-Per-Show Qualified Appointments',
    description:
      'Pre-educated $500K–$2M+ asset prospects. You close. Pay only on show.',
    type: 'website',
    url: 'https://calibercalendar.com',
    siteName: 'Caliber Calendar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caliber Calendar | Pay-Per-Show Qualified Appointments',
    description: 'Pre-educated $500K–$2M+ asset prospects. Zero upfront risk.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A192F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0A192F] text-white">
        {children}
      </body>
    </html>
  )
}
