import type { HTMLAttributes } from 'react'
import { Badge } from '@/components/ui/badge'

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  ...props
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'mx-auto items-center text-center' : 'items-start'

  return (
    <div
      className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}
      {...props}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="type-heading-2 text-foreground">{title}</h2>
      {description ? (
        <p className="type-lead max-w-2xl">{description}</p>
      ) : null}
    </div>
  )
}
