import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const variants = {
  primary:
    'bg-[#C5A46E] hover:bg-[#D4B882] text-[#0F2C5A] font-bold shadow-gold-sm hover:shadow-gold-glow hover:-translate-y-0.5',
  secondary:
    'bg-white/[0.06] hover:bg-white/[0.10] text-white border border-white/[0.12]',
  ghost:
    'bg-transparent hover:bg-white/[0.06] text-slate-300 hover:text-white',
  outline:
    'bg-transparent border-2 border-[#C5A46E]/50 text-[#C5A46E] hover:bg-[#C5A46E]/08 hover:border-[#C5A46E]',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2C5A]',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
)
Button.displayName = 'Button'
