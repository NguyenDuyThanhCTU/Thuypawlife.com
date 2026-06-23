import type { HTMLAttributes, ReactNode } from 'react'

type InfoCardProps = HTMLAttributes<HTMLElement> & {
  title: string
  description?: string
  icon?: ReactNode
  children?: ReactNode
  href?: string
}

const cardStyles =
  'block h-full rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-6'

export function InfoCard({
  title,
  description,
  icon,
  children,
  href,
  className = '',
  ...props
}: InfoCardProps) {
  const content = (
    <>
      {icon ? (
        <span className="mb-5 grid size-11 place-items-center rounded-ui bg-primary-subtle text-sm font-bold text-primary">
          {icon}
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
      ) : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </>
  )

  return href ? (
    <a
      href={href}
      className={`${cardStyles} transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/30 ${className}`}
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
