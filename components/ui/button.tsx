import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

const baseStyles =
  'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-ui font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white shadow-sm hover:bg-primary-hover active:bg-primary-hover',
  secondary:
    'bg-primary-subtle text-primary-hover hover:bg-cyan-soft active:bg-cyan-soft',
  outline:
    'border border-primary/35 bg-surface text-primary-hover hover:border-primary hover:bg-primary-subtle',
  ghost: 'text-primary-hover hover:bg-primary-subtle',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'min-h-12 px-6 py-3.5 text-base',
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  )
}

export function ButtonLink({
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  )
}
