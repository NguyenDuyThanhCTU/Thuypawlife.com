import type { HTMLAttributes, ReactNode } from 'react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'

type PageSectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
  align?: 'left' | 'center'
  contentClassName?: string
}

export function PageSection({
  eyebrow,
  title,
  description,
  children,
  align = 'left',
  className = '',
  contentClassName = '',
  ...props
}: PageSectionProps) {
  const hasHeading = eyebrow || title || description

  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 ${className}`}
      {...props}
    >
      <Container>
        {hasHeading && title ? (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align={align}
          />
        ) : null}
        <div className={`${hasHeading ? 'mt-9 lg:mt-12' : ''} ${contentClassName}`}>
          {children}
        </div>
      </Container>
    </section>
  )
}
