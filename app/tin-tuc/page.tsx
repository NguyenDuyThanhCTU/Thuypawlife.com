import type { Metadata } from "next";
import { CTASection } from "@/components/page/cta-section";
import { PageHero } from "@/components/page/page-hero";
import { PageSection } from "@/components/page/page-section";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { find } from "@/config/lib/api";
import { ContactProps } from "@/assets/props/PropsConfig";
import { LocalFindById } from "@/components/items/Handle";
import { PostProps } from "@/assets/props/PropsPost";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tin tức chăm sóc thú cưng | Phòng khám thú y Sài Gòn",
  description:
    "Kiến thức chăm sóc chó mèo, tiêm phòng, dinh dưỡng, dấu hiệu bệnh thường gặp và kinh nghiệm đưa thú cưng đi khám thú y.",
};

const categories = [
  "Tất cả",
  "Chăm sóc chó mèo",
  "Tiêm phòng",
  "Dấu hiệu bệnh thường gặp",
  "Dinh dưỡng thú cưng",
  "Kinh nghiệm đi khám",
];

const articles = [
  {
    category: "Chăm sóc chó mèo",
    title: "Khi nào nên đưa chó mèo đi khám thú y?",
    excerpt:
      "Những dấu hiệu như bỏ ăn, mệt mỏi, nôn ói hoặc thay đổi hành vi là lý do chủ nuôi nên theo dõi kỹ và cân nhắc đưa thú cưng đi khám.",
    readTime: "5 phút đọc",
  },
  {
    category: "Tiêm phòng",
    title: "Lịch tiêm phòng cơ bản cho chó mèo",
    excerpt:
      "Tiêm phòng đúng lịch giúp giảm nguy cơ mắc một số bệnh truyền nhiễm phổ biến và hỗ trợ theo dõi sức khỏe định kỳ.",
    readTime: "4 phút đọc",
  },
  {
    category: "Dấu hiệu bệnh thường gặp",
    title: "Dấu hiệu mèo bị bệnh chủ nuôi không nên bỏ qua",
    excerpt:
      "Mèo thường che giấu biểu hiện khó chịu, vì vậy các thay đổi nhỏ trong ăn uống, vệ sinh hoặc hành vi cũng cần được chú ý.",
    readTime: "5 phút đọc",
  },
  {
    category: "Kinh nghiệm đi khám",
    title: "Cần chuẩn bị gì trước khi đưa thú cưng đi khám?",
    excerpt:
      "Sổ tiêm phòng, thông tin triệu chứng, hình ảnh hoặc video biểu hiện bất thường có thể giúp buổi thăm khám diễn ra rõ ràng hơn.",
    readTime: "4 phút đọc",
  },
  {
    category: "Dinh dưỡng thú cưng",
    title: "Dinh dưỡng cơ bản giúp thú cưng khỏe mạnh hơn",
    excerpt:
      "Chế độ ăn phù hợp cần dựa trên độ tuổi, cân nặng, giống loài và tình trạng sức khỏe thực tế của thú cưng.",
    readTime: "6 phút đọc",
  },
  {
    category: "Chăm sóc chó mèo",
    title: "Sau khi khám thú y, chủ nuôi nên theo dõi gì?",
    excerpt:
      "Theo dõi ăn uống, vận động, vệ sinh và phản ứng sau dùng thuốc giúp chủ nuôi nhận biết khi nào cần liên hệ lại phòng khám.",
    readTime: "4 phút đọc",
  },
];

export default async function NewsPage() {
  const Config = await find("Config");
  const ContactData: ContactProps = LocalFindById(Config, "contact");
  const Posts: PostProps[] = await find("Posts");

  return (
    <main>
      <PageHero
        eyebrow="Tin tức thú cưng"
        title="Kiến thức chăm sóc chó mèo dành cho chủ nuôi"
        description="Cập nhật kiến thức cơ bản về chăm sóc sức khỏe, tiêm phòng, dinh dưỡng và các dấu hiệu bất thường thường gặp ở chó mèo."
        breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "Tin tức" }]}
        actions={
          <>
            {/* <ButtonLink href="/lien-he" size="lg">
              Đặt lịch khám
            </ButtonLink> */}
            <ButtonLink href="/san-pham" variant="outline" size="lg">
              Xem dịch vụ thú y
            </ButtonLink>
          </>
        }
      />

      <PageSection
        eyebrow="Bài viết nổi bật"
        title="Thông tin cần biết khi thú cưng có dấu hiệu lạ"
        description="Những thay đổi nhỏ đôi khi là cách thú cưng cho bạn biết chúng đang không thoải mái."
      >
        <article className="grid overflow-hidden rounded-card border border-primary/15 bg-surface shadow-card lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid min-h-64 place-items-center bg-primary-subtle p-8 text-center lg:min-h-80">
            <Image
              src={Posts[0]?.image}
              alt="logo"
              width={700}
              height={700}
              className="w-full aspect-square object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
            <Badge className="self-start">Tin tức</Badge>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {Posts[0].title}
            </h2>
            <p className="mt-4 leading-7 text-muted">{Posts[0].description}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-5">
              <span className="text-sm font-medium text-muted">
                {Posts[0].date} · Cập nhật gần đây
              </span>
              <a
                href={Posts[0].url}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary-hover hover:text-primary"
              >
                Đọc thêm <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </article>
      </PageSection>

      <PageSection
        eyebrow="Thư viện kiến thức"
        title="Bài viết chăm sóc thú cưng"
        description="Nội dung tham khảo giúp chủ nuôi chủ động hơn trong chăm sóc chó mèo và chuẩn bị trước khi đến phòng khám thú y."
        className="border-y border-primary/10 bg-surface-subtle"
      >
        {/* <div aria-label="Danh mục bài viết" className="flex flex-wrap gap-2">
          {Posts.map((category, index) => (
            <button
              key={category}
              type="button"
              aria-pressed={index === 0}
              className={`min-h-10 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                index === 0
                  ? 'border-primary bg-primary text-white'
                  : 'border-border bg-surface text-muted hover:border-primary/30 hover:text-primary-hover'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {Posts.map((article, index) => (
            <article
              key={article.title}
              className="flex h-full flex-col overflow-hidden rounded-card border border-border/80 bg-surface shadow-card"
            >
              <div className="flex min-h-36 items-end bg-primary-subtle/70 p-5">
                <Image
                  src={article?.image}
                  alt="logo"
                  width={700}
                  height={700}
                  className="w-full aspect-square object-cover object-center"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <Badge className="self-start">Tin tức</Badge>
                <h3 className="mt-4 text-xl font-semibold leading-8 text-foreground">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  {article.description}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/80 pt-4">
                  <span className="text-sm text-muted">{article.date}</span>
                  <a
                    href={article.url}
                    className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary-hover hover:text-primary"
                  >
                    Đọc thêm <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <CTASection
        className="pt-12 sm:pt-16 lg:pt-20"
        title="Thú cưng có dấu hiệu bất thường?"
        description="Thông tin trong bài viết chỉ mang tính tham khảo. Nếu thú cưng có biểu hiện lạ, hãy liên hệ phòng khám để được tư vấn phù hợp."
        // primaryAction={
        //   <ButtonLink href="/lien-he" size="lg">
        //     Đặt lịch khám
        //   </ButtonLink>
        // }
        secondaryAction={
          <ButtonLink href="/san-pham" variant="outline" size="lg">
            Xem dịch vụ
          </ButtonLink>
        }
      />
    </main>
  );
}
