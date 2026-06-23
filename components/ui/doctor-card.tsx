import Image from "next/image";
import type { HTMLAttributes } from "react";

type DoctorCardProps = HTMLAttributes<HTMLElement> & {
  name: string;
  role: string;
  description: string;
  image?: string;
};

function getInitials(name: string) {
  return name
    .replace("BS.", "")
    .trim()
    .split(" ")
    .slice(-2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export function DoctorCard({
  name,
  role,
  description,
  image,
  className = "",
  ...props
}: DoctorCardProps) {
  return (
    <article
      className={`h-full rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-6 lg:p-8 ${className}`}
      {...props}
    >
      <div className="relative mb-6 grid aspect-[4/3] place-items-center overflow-hidden rounded-ui bg-surface-subtle">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/thuypawlife.firebasestorage.app/o/1781838197685_5163939902878248083_g6743653733223745964_295ce3423bd55e42a042f0029e135546.jpg?alt=media&token=5e3e1617-9601-4d0f-a5be-61870fd19c64"
          alt={`Bác sĩ ${name}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain"
        />
      </div>
      <p className="text-sm font-semibold text-primary">{role}</p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}
