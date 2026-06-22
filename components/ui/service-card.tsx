import type { HTMLAttributes, ReactNode } from 'react'

type ServiceCardProps = HTMLAttributes<HTMLElement> & {
  title: string
  description: string
  icon?: ReactNode
  href?: string
  actionLabel?: string
}

const cardStyles =
  'block h-full touch-manipulation rounded-card border border-border/80 bg-surface p-5 shadow-card transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover sm:p-6 lg:p-8'

export function ServiceCard({
  title,
  description,
  icon,
  href,
  actionLabel = 'Tìm hiểu thêm',
  className = '',
  ...props
}: ServiceCardProps) {
  const content = (
    <>
      {icon ? (
        <span className="mb-5 grid size-11 place-items-center rounded-ui bg-primary-subtle text-sm font-bold text-primary">
          {icon}
        </span>
      ) : null}
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-hover">
        {actionLabel}
        <span aria-hidden="true">→</span>
      </span>
    </>
  )

  return href ? (
    <a href={href} className={`${cardStyles} ${className}`} {...props}>
      {content}
    </a>
  ) : (
    <article className={`${cardStyles} ${className}`} {...props}>
      {content}
    </article>
  )
}
