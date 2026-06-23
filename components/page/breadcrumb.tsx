import type { HTMLAttributes } from 'react'

export type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = HTMLAttributes<HTMLElement> & {
  items: BreadcrumbItem[]
}

export function Breadcrumb({
  items,
  className = '',
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`overflow-x-auto text-sm text-muted ${className}`}
      {...props}
    >
      <ol className="flex min-w-max items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="font-medium hover:text-primary"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={isLast ? 'font-semibold text-foreground' : ''}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <span className="text-border" aria-hidden="true">
                  /
                </span>
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
