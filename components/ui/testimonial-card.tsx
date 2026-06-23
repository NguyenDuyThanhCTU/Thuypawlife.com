import Image from "next/image";
import type { HTMLAttributes } from "react";

type TestimonialCardProps = HTMLAttributes<HTMLElement> & {
  quote: string;
  name: string;
  Avt: string;
  rating?: number;
};

export function TestimonialCard({
  quote,
  name,
  Avt,
  rating,
  className = "",
  ...props
}: TestimonialCardProps) {
  const normalizedRating = Math.min(5, Math.max(0, rating ?? 0));

  return (
    <article
      className={`flex h-full flex-col rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-6 lg:p-8 ${className}`}
      {...props}
    >
      {rating ? (
        <p
          className="mb-4 text-sm tracking-[0.2em] text-primary"
          aria-label={`${normalizedRating} trên 5 sao`}
        >
          {"★".repeat(normalizedRating)}
          <span className="text-border">
            {"★".repeat(5 - normalizedRating)}
          </span>
        </p>
      ) : null}
      <div className="flex">
        <span
          className="text-4xl leading-none text-primary/30"
          aria-hidden="true"
        >
          “{" "}
        </span>
        <Image
          src={Avt}
          alt="logo"
          width={200}
          height={200}
          className="w-20 p-2 rounded-full"
        />
      </div>
      <blockquote className="mt-3 flex-1 leading-7 text-foreground">
        {quote}
      </blockquote>
      <div className="mt-6 border-t border-border/70 pt-5">
        <p className="font-semibold text-foreground">{name}</p>
      </div>
    </article>
  );
}
