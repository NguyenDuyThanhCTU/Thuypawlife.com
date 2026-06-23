"use client";
import { navigation } from "@/data/home";
import { Container } from "@/components/ui/container";
import { ContactProps } from "@/assets/props/PropsConfig";
import { LocalFindById } from "../items/Handle";
import Image from "next/image";
import { RevalidateTags } from "@/app/action";
import Link from "next/link";

export function Footer({ Config }: { Config: Array<any> }) {
  const ContactData: ContactProps = LocalFindById(Config, "contact");
  return (
    <footer className="bg-foreground text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-3 lg:py-16">
        <div>
          <div className="flex items-center gap-2.5 font-bold">
            <Image
              src={ContactData?.LogoWebsite}
              alt="logo"
              width={200}
              height={200}
              className="w-20 p-2"
            />
            <span className="text-lg">PawLife</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Phòng khám thú y hiện đại tại Sài Gòn, đồng hành cùng gia đình trong
            hành trình chăm sóc sức khỏe thú cưng.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Liên kết nhanh</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/65">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Thông tin liên hệ</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>
              Hotline:{" "}
              <a
                href={`tel:${ContactData?.Hotline}`}
                className="font-semibold text-white hover:text-cyan-soft"
              >
                {ContactData?.Hotline}
              </a>{" "}
              -{" "}
              <a
                href={`tel:${ContactData?.PhoneNumber}`}
                className="font-semibold text-white hover:text-cyan-soft"
              >
                {ContactData?.PhoneNumber}
              </a>{" "}
            </li>
            <li>Địa chỉ: {ContactData?.CompanyAddress}</li>
            <li>Thời gian hoạt động: {ContactData?.CompanyTime}</li>
          </ul>
        </div>
      </Container>
      <div
        className="border-t border-white/10 cursor-pointer"
        onClick={() => RevalidateTags()}
      >
        <Container className="py-5 text-sm text-white text-center">
          <p className="mb-2">
            {" "}
            © Copyright <strong>Thuypawlife.com</strong>. All Rights
            Reserved{" "}
          </p>
          Website được thiết kế bởi{" "}
          <Link
            href="https://www.facebook.com/DuyThanhCTU/"
            className=""
            target="_blank"
          >
            Duy Thanh
          </Link>
        </Container>
      </div>
    </footer>
  );
}
