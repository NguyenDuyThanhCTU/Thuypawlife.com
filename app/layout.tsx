import { Header } from "@/components/sections/header";
import "./globals.css";
import "./CKGlobal.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Footer } from "@/components/sections/footer";
import { find } from "@/config/lib/api";
import { SEOProps } from "@/assets/props/PropsConfig";
import { LocalFindById } from "@/components/items/Handle";
import FloatingButtons from "@/components/FloatingButtons";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

const siteUrl = "https://thuypawlife.com";

export async function generateMetadata(): Promise<Metadata> {
  const Config = await find("Config");
  const SEOmetaTag: SEOProps = LocalFindById(Config, "SEOconfig");
  return {
    description: SEOmetaTag?.Description,
    keywords: SEOmetaTag?.Keyword,
    title: SEOmetaTag?.Title,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Config = await find("Config");
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} mobile-sticky-safe`}>
        <Header Config={Config} />
        <main>{children}</main>
        <FloatingButtons Config={Config} />
        <Footer Config={Config} />
      </body>
    </html>
  );
}
