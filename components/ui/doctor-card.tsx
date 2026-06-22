import Image from 'next/image'
import type { HTMLAttributes } from 'react'

type DoctorCardProps = HTMLAttributes<HTMLElement> & {
  name: string
  role: string
  description: string
  image?: string
}

function getInitials(name: string) {
  return name
    .replace('BS.', '')
    .trim()
    .split(' ')
    .slice(-2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase()
}

export function DoctorCard({
  name,
  role,
  description,
  image,
  className = '',
  ...props
}: DoctorCardProps) {
  return (
    <article
      className={`h-full rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-6 lg:p-8 ${className}`}
      {...props}
    >
      <div className="relative mb-6 grid aspect-[4/3] place-items-center overflow-hidden rounded-ui bg-surface-subtle">
        {image ? (
          <Image
            src={image}
            alt={`Bác sĩ ${name}`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <span className="grid size-20 place-items-center rounded-full bg-cyan-soft text-xl font-bold text-primary-hover">
            {getInitials(name)}
          </span>
        )}
      </div>
      <p className="text-sm font-semibold text-primary">{role}</p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </article>
  )
}
