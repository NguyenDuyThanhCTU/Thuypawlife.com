import type { HTMLAttributes, ReactNode } from 'react'
import {
  Breadcrumb,
  type BreadcrumbItem,
} from '@/components/page/breadcrumb'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'

type PageHeroProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  actions?: ReactNode
  children?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  children,
  className = '',
  ...props
}: PageHeroProps) {
  return (
    <section
      className={`border-b border-primary/10 bg-primary-subtle/55 py-12 sm:py-16 lg:py-20 ${className}`}
      {...props}
    >
      <Container>
        {breadcrumbs?.length ? (
          <Breadcrumb items={breadcrumbs} className="mb-7" />
        ) : null}
        <div
          className={
            children
              ? 'grid items-center gap-10 lg:grid-cols-[1fr_0.65fr]'
              : ''
          }
        >
          <div className="max-w-3xl">
            {eyebrow ? <Badge className="mb-5">{eyebrow}</Badge> : null}
            <h1 className="type-heading-1 text-foreground">{title}</h1>
            {description ? (
              <p className="type-lead mt-5 max-w-2xl">{description}</p>
            ) : null}
            {actions ? (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {actions}
              </div>
            ) : null}
          </div>
          {children ? <div>{children}</div> : null}
        </div>
      </Container>
    </section>
  )
}
