import type { HTMLAttributes, ReactNode } from 'react'

type ContactCardProps = HTMLAttributes<HTMLElement> & {
  title: string
  value: string
  description?: string
  icon?: ReactNode
  href?: string
}

const cardStyles =
  'flex min-h-28 items-start gap-4 rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-6'

export function ContactCard({
  title,
  value,
  description,
  icon,
  href,
  className = '',
  ...props
}: ContactCardProps) {
  const content = (
    <>
      {icon ? (
        <span className="grid size-10 shrink-0 place-items-center rounded-ui bg-primary-subtle font-bold text-primary">
          {icon}
        </span>
      ) : null}
      <span>
        <span className="block text-sm font-semibold text-muted">{title}</span>
        <span className="mt-1 block text-base font-semibold text-foreground">
          {value}
        </span>
        {description ? (
          <span className="mt-1 block text-sm leading-6 text-muted">
            {description}
          </span>
        ) : null}
      </span>
    </>
  )

  return href ? (
    <a
      href={href}
      className={`${cardStyles} transition-colors hover:border-primary/30 hover:bg-primary-subtle/40 ${className}`}
      {...props}
    >
      {content}
    </a>
  ) : (
    <article className={`${cardStyles} ${className}`} {...props}>
      {content}
    </article>
  )
}
