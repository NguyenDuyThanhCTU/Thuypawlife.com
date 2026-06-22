import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant = 'primary' | 'subtle' | 'outline'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'border-primary bg-primary text-white',
  subtle: 'border-primary/15 bg-primary-subtle text-primary-hover',
  outline: 'border-primary/25 bg-surface text-primary-hover',
}

export function Badge({
  children,
  className = '',
  variant = 'subtle',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
