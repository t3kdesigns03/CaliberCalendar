import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated' | 'highlight'
  padding?: 'sm' | 'md' | 'lg'
}

const variantClasses = {
  default:   'bg-[#102A43] border border-white/[0.08]',
  glass:     'card-glass',
  elevated:  'bg-[#102A43] border border-white/10 shadow-card',
  highlight: 'bg-emerald-600/10 border border-emerald-600/30',
}

const paddingClasses = { sm: 'p-4', md: 'p-6', lg: 'p-8' }

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'elevated', padding = 'md', children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-2xl', variantClasses[variant], paddingClasses[padding], className)}
      {...props}
    >
      {children}
    </div>
  )
)

Card.displayName = 'Card'
export { Card }
