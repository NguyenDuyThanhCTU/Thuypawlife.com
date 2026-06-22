import type { HTMLAttributes, ReactNode } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Container({ className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  )
}
