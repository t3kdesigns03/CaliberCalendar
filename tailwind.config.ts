import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep:    '#091E3A',
          DEFAULT: '#0F2C5A',
          mid:     '#163462',
          light:   '#1E4580',
          border:  'rgba(197,164,110,0.22)',
        },
        gold: {
          DEFAULT: '#C5A46E',
          light:   '#D4B882',
          muted:   '#B8976A',
          badge:   'rgba(197,164,110,0.12)',
        },
        cream: {
          DEFAULT: '#FAF8F5',
          dark:    '#F2EEE8',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      boxShadow: {
        'gold-glow':  '0 0 40px rgba(197,164,110,0.30)',
        'gold-sm':    '0 0 20px rgba(197,164,110,0.20)',
        'card':       '0 2px 16px rgba(15,44,90,0.06), 0 1px 3px rgba(15,44,90,0.04)',
        'card-hover': '0 8px 32px rgba(15,44,90,0.10), 0 2px 6px rgba(197,164,110,0.15)',
        'card-xl':    '0 16px 48px rgba(15,44,90,0.12), 0 4px 12px rgba(15,44,90,0.06)',
        // legacy aliases
        'emerald-glow': '0 0 40px rgba(197,164,110,0.30)',
        'emerald-sm':   '0 0 20px rgba(197,164,110,0.20)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C5A46E 0%, #D4B882 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0F2C5A 0%, #091E3A 100%)',
      },
    },
  },
  plugins: [],
}

export default config
