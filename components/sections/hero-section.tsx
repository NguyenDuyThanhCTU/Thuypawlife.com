import { ContactProps } from "@/assets/props/PropsConfig";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LocalFindById } from "../items/Handle";
import Image from "next/image";

const trustItems = [
  "Bác sĩ tận tâm",
  "Quy trình minh bạch",
  "Theo dõi sau khám",
];

export function HeroSection({ Config }: { Config: Array<any> }) {
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  return (
    <section
      id="trang-chu"
      className="relative overflow-hidden border-b border-primary/10 bg-primary-subtle/60 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-soft/60 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
        <div className="max-w-2xl">
          <Badge variant="outline" className="mb-5 normal-case tracking-normal">
            Phòng khám thú y tại Sài Gòn
          </Badge>
          <h1 className="type-heading-1 text-foreground">
            Chăm sóc thú cưng tận tâm tại Sài Gòn
          </h1>
          <p className="type-lead mt-6 max-w-xl">
            Phòng khám thú y hiện đại, hỗ trợ khám bệnh, tiêm phòng, xét nghiệm,
            phẫu thuật và tư vấn chăm sóc sau điều trị.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#lien-he" size="lg" className="w-full sm:w-auto">
              Đặt lịch khám
              <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink
              href={`tel:${ContactData?.Hotline}`}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Gọi ngay: {ContactData?.Hotline} - {ContactData?.PhoneNumber}
            </ButtonLink>
          </div>

          <ul className="mt-8 grid gap-3 text-sm font-semibold text-foreground sm:grid-cols-3">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  className="grid size-6 shrink-0 place-items-center rounded-full bg-cyan-soft text-xs text-primary-hover"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="rounded-[1.75rem] border border-primary/15 bg-surface p-4 shadow-card sm:p-6">
            <div className="relative min-h-[350px] overflow-hidden rounded-card bg-primary-subtle p-5 sm:min-h-[410px] sm:p-7">
              <div className="flex items-center justify-between">
                <Badge className="normal-case tracking-normal">
                  Lịch khám hôm nay
                </Badge>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary-hover shadow-sm">
                  08:00 - 20:00
                </span>
              </div>

              <div className="mx-auto overflow-hidden mt-10 grid size-36 place-items-center rounded-full border-[12px] border-surface bg-cyan-soft shadow-card sm:size-44">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/thuypawlife.firebasestorage.app/o/avatar%2F08pdzOfERiVTkIUOFXr3arfQjJNVtUphrJhDNohw2oy7xtlj8b.jpg?alt=media&token=e66aad77-9501-4a98-999a-b2df67047a9a"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-full h-full bg-cover "
                />
              </div>

              <div className="mt-9 rounded-card border border-primary/10 bg-surface p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary text-sm font-bold text-white">
                    <Image
                      src={ContactData?.LogoWebsite}
                      alt="logo"
                      width={200}
                      height={200}
                      className="w-20 p-2"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-foreground">
                      Đội ngũ bác sĩ PawLife
                    </span>
                    <span className="block text-sm text-muted">
                      Sẵn sàng lắng nghe và tư vấn
                    </span>
                  </span>
                  <span className="ml-auto hidden rounded-full bg-primary-subtle px-3 py-1 text-xs font-semibold text-primary sm:block">
                    Đang làm việc
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-2 rounded-card border border-border/80 bg-surface px-4 py-3 shadow-card sm:-left-6 sm:px-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Dịch vụ
            </p>
            <p className="mt-1 font-bold text-foreground">6+ nhóm chăm sóc</p>
          </div>
          <div className="absolute -right-2 top-20 rounded-card border border-border/80 bg-surface px-4 py-3 shadow-card sm:-right-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Sau thăm khám
            </p>
            <p className="mt-1 font-bold text-primary-hover">
              Có hướng dẫn theo dõi
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
