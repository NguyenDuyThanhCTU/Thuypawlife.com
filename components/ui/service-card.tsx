import { ProductProps } from "@/assets/props/PropsProduct";
import Image from "next/image";
import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

const cardStyles = "";

export function ServiceCard({
  Data,
  Index,
}: {
  Data: ProductProps;
  Index: number;
}) {
  return (
    <div className="relative block h-full touch-manipulation rounded-card border bg-gradient-to-l from-[#ffffffde]  to-white border-border/80  p-5 shadow-card transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover sm:p-6 lg:p-8">
      <span className="absolute z-50 top-5 left-5 mb-5 grid size-11 place-items-center rounded-ui bg-blue-600 text-sm font-bold text-white">
        {Index}
      </span>
      <div className="relative w-full aspect-square overflow-hidden rounded-3xl">
        <Image
          src={Data?.image}
          alt="Hình ảnh thú cưng"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-5">
        {" "}
        <h3>
          <h3 className="text-xl font-semibold text-foreground">
            {Data?.title}
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: Data?.describe ? Data?.describe : "",
            }}
            className="mt-3 leading-7 text-muted"
          ></div>
          <Link
            href={`#lien-he`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-hover"
          >
            Liên hệ ngay
            <span aria-hidden="true">→</span>
          </Link>
        </h3>
      </div>
    </div>
  );
}
