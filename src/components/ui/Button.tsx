import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'whatsapp'

const variantClass: Record<Variant, string> = {
  primary:
    'gradient-accent text-bg-primary font-semibold shadow-lg shadow-accent/20 hover:opacity-95',
  secondary: 'bg-bg-elevated text-text-main border border-border hover:border-accent',
  outline:
    'bg-transparent text-text-main border border-border hover:border-accent',
  whatsapp: 'bg-[#25D366] text-white font-semibold hover:opacity-95',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  to?: string
  href?: string
  children: ReactNode
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  to,
  href,
  children,
  fullWidth,
  className = '',
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none ${variantClass[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={base}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={base} {...props}>
      {children}
    </button>
  )
}