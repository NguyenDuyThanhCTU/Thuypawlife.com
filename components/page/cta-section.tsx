import type { HTMLAttributes, ReactNode } from 'react'
import { Container } from '@/components/ui/container'

type CTASectionProps = HTMLAttributes<HTMLElement> & {
  title: string
  description?: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  className = '',
  ...props
}: CTASectionProps) {
  return (
    <section className={`pb-12 sm:pb-16 lg:pb-20 ${className}`} {...props}>
      <Container>
        <div className="rounded-card border border-primary/15 bg-primary-subtle px-5 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-3 leading-7 text-muted">{description}</p>
            ) : null}
          </div>
          {primaryAction || secondaryAction ? (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              {primaryAction}
              {secondaryAction}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
