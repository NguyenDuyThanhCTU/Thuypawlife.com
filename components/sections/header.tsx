"use client";

import { useState } from "react";
import { navigation } from "@/data/home";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContactProps } from "@/assets/props/PropsConfig";
import { LocalFindById } from "../items/Handle";
import Link from "next/link";
import Image from "next/image";

export function Header({ Config }: { Config: Array<any> }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3 lg:min-h-20">
        <div className="shrink-0">
          <Link href="/" aria-label="Về trang chủ">
            <Image
              src={ContactData?.LogoWebsite}
              alt="PawLife"
              width={200}
              height={200}
              className="w-20 p-2"
              priority
            />
          </Link>
        </div>

        <nav
          className="hidden items-center gap-4 lg:flex xl:gap-7"
          aria-label="Điều hướng chính"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-xs font-medium text-muted transition hover:text-primary xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={`tel:${ContactData?.Hotline}`}
            size="sm"
            className="shrink-0 px-3 sm:px-4"
            aria-label="Liên hệ ngay"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="sm:hidden">Liên hệ ngay</span>
            <span className="hidden sm:inline">Liên hệ ngay</span>
          </ButtonLink>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-ui border border-border bg-surface text-foreground transition hover:border-primary/40 hover:bg-primary-subtle focus:outline-none focus:ring-4 focus:ring-primary/10 lg:hidden"
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`border-t border-border/70 bg-surface shadow-sm transition lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-2" aria-label="Menu mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-ui px-4 py-3 text-sm font-medium text-muted transition hover:bg-primary-subtle hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 border-t border-border/70 pt-4">
            {ContactData?.Hotline ? (
              <a
                href={`tel:${ContactData.Hotline}`}
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 flex min-h-12 items-center justify-center rounded-ui border border-primary/20 bg-white px-4 text-sm font-semibold text-primary transition hover:bg-primary-subtle"
              >
                Gọi ngay: {ContactData.Hotline}
              </a>
            ) : null}
            {ContactData?.PhoneNumber ? (
              <a
                href={`tel:${ContactData.PhoneNumber}`}
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 flex min-h-12 items-center justify-center rounded-ui border border-primary/20 bg-white px-4 text-sm font-semibold text-primary transition hover:bg-primary-subtle"
              >
                Gọi ngay: {ContactData.PhoneNumber}
              </a>
            ) : null}
          </div>
        </Container>
      </div>
    </header>
  );
}
