import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: 'white' | 'subtle'
  interactive?: boolean
}

export function Card({
  className = '',
  tone = 'white',
  interactive = false,
  ...props
}: CardProps) {
  const toneStyle = tone === 'subtle' ? 'bg-primary-subtle/60' : 'bg-surface'
  const interactiveStyle = interactive
    ? 'transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover'
    : ''

  return (
    <div
      className={`rounded-card border border-border/80 p-5 shadow-card sm:p-6 lg:p-8 ${toneStyle} ${interactiveStyle} ${className}`}
      {...props}
    />
  )
}
