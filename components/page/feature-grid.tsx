import type { HTMLAttributes, ReactNode } from 'react'

type FeatureGridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  columns?: 2 | 3 | 4
}

const columnStyles: Record<NonNullable<FeatureGridProps['columns']>, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

export function FeatureGrid({
  children,
  columns = 3,
  className = '',
  ...props
}: FeatureGridProps) {
  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 ${columnStyles[columns]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
