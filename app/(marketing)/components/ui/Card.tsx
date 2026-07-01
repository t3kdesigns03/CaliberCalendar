import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'highlight' | 'dark'
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-200',
        variant === 'default' &&
          'bg-white border border-[#C5A46E]/[0.18] shadow-card hover:shadow-card-hover hover:-translate-y-0.5',
        variant === 'highlight' &&
          'bg-[#C5A46E]/[0.08] border border-[#C5A46E]/25',
        variant === 'dark' &&
          'bg-white/[0.04] border border-[#C5A46E]/20',
        className,
      )}
      {...props}
    />
  )
}
