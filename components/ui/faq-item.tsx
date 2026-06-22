import type { HTMLAttributes } from 'react'

type FAQItemProps = HTMLAttributes<HTMLElement> & {
  question: string
  answer: string
}

export function FAQItem({
  question,
  answer,
  className = '',
  ...props
}: FAQItemProps) {
  return (
    <article className={`p-5 sm:p-6 ${className}`} {...props}>
      <h3 className="font-semibold text-foreground">{question}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{answer}</p>
    </article>
  )
}
