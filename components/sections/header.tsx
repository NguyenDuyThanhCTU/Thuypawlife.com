import { navigation } from "@/data/home";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContactProps } from "@/assets/props/PropsConfig";
import { LocalFindById } from "../items/Handle";
import Link from "next/link";
import Image from "next/image";

export function Header({ Config }: { Config: Array<any> }) {
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3 lg:min-h-20">
        <div>
          <Link href={`/`}>
            <Image
              src={ContactData?.LogoWebsite}
              alt="logo"
              width={200}
              height={200}
              className="w-20 p-2"
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
              className="whitespace-nowrap text-xs font-medium text-muted hover:text-primary xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href="#lien-he"
          size="sm"
          className="shrink-0 px-3 sm:px-4"
          aria-label="Đặt lịch khám"
        >
          <span className="sm:hidden">Đặt lịch</span>
          <span className="hidden sm:inline">Đặt lịch khám</span>
        </ButtonLink>
      </Container>
    </header>
  );
}
