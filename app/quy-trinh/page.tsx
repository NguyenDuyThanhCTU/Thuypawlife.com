import type { Metadata } from "next";
import { CTASection } from "@/components/page/cta-section";
import { FeatureGrid } from "@/components/page/feature-grid";
import { InfoCard } from "@/components/page/info-card";
import { PageHero } from "@/components/page/page-hero";
import { PageSection } from "@/components/page/page-section";
import { ButtonLink } from "@/components/ui/button";
import { FAQItem } from "@/components/ui/faq-item";
import { find } from "@/config/lib/api";
import { ContactProps } from "@/assets/props/PropsConfig";
import { LocalFindById } from "@/components/items/Handle";

export const metadata: Metadata = {
  title: "Quy trình khám thú y tại Sài Gòn | Chuẩn bị trước khi đi khám",
  description:
    "Tìm hiểu quy trình đặt lịch, thăm khám, tư vấn điều trị và theo dõi sau khám để chuẩn bị tốt hơn trước khi đưa thú cưng đến phòng khám thú y.",
};

const mainSteps = [
  {
    title: "Liên hệ hoặc đặt lịch",
    description:
      "Chủ nuôi chọn dịch vụ cần tư vấn, mô tả tình trạng cơ bản của thú cưng và thời gian mong muốn.",
  },
  {
    title: "Đưa thú cưng đến phòng khám",
    description:
      "Bác sĩ tiếp nhận thông tin, quan sát tình trạng ban đầu và trao đổi các bước kiểm tra cần thiết.",
  },
  {
    title: "Tư vấn hướng xử lý",
    description:
      "Kết quả thăm khám, phương án điều trị và chi phí dự kiến được giải thích rõ trước khi thực hiện.",
  },
  {
    title: "Theo dõi sau khám",
    description:
      "Chủ nuôi được hướng dẫn chăm sóc tại nhà và nhận biết các dấu hiệu cần tái khám.",
  },
];

const processDetails = [
  {
    title: "Quy trình đặt lịch",
    description:
      "Khách có thể gọi, nhắn Zalo hoặc gửi yêu cầu đặt lịch. Nếu chưa biết chọn dịch vụ nào, có thể mô tả tình trạng thú cưng để được gợi ý.",
  },
  {
    title: "Quy trình khám tại phòng khám",
    description:
      "Bác sĩ tiếp nhận thông tin, kiểm tra tình trạng ban đầu và tư vấn các bước cần thực hiện.",
  },
  {
    title: "Quy trình tư vấn điều trị",
    description:
      "Hướng xử lý, chi phí dự kiến và lưu ý chăm sóc được trao đổi rõ ràng trước khi thực hiện.",
  },
  {
    title: "Quy trình theo dõi sau khám",
    description:
      "Chủ nuôi được hướng dẫn cách theo dõi tại nhà và khi nào cần liên hệ lại phòng khám.",
  },
];

const preparationItems = [
  "Sổ tiêm phòng hoặc giấy tờ sức khỏe nếu có.",
  "Thông tin triệu chứng, thời điểm bắt đầu và thay đổi gần đây.",
  "Hình ảnh hoặc video nếu thú cưng chỉ biểu hiện triệu chứng tại nhà.",
  "Dây dắt, lồng vận chuyển hoặc vật dụng giúp thú cưng bình tĩnh.",
  "Danh sách thuốc, thức ăn hoặc sản phẩm chăm sóc đang sử dụng nếu có.",
];

const faqs = [
  {
    question: "Có cần đặt lịch trước không?",
    answer:
      "Không bắt buộc, nhưng đặt lịch trước giúp phòng khám chủ động sắp xếp thời gian và hướng dẫn bạn chuẩn bị thuận tiện hơn.",
  },
  {
    question: "Có cần mang theo sổ tiêm phòng không?",
    answer:
      "Bạn nên mang theo nếu có để bác sĩ tham khảo lịch tiêm và thông tin sức khỏe trước đây của thú cưng.",
  },
  {
    question: "Chi phí khám có được báo trước không?",
    answer:
      "Chi phí dự kiến sẽ được trao đổi trước khi thực hiện các bước kiểm tra hoặc chăm sóc cần thiết.",
  },
  {
    question: "Nếu thú cưng đang mệt nhiều thì nên làm gì?",
    answer:
      "Bạn nên gọi phòng khám trước, mô tả các dấu hiệu đang có và làm theo hướng dẫn phù hợp trước khi di chuyển.",
  },
  {
    question: "Sau khi khám có được hướng dẫn chăm sóc tại nhà không?",
    answer:
      "Có. Chủ nuôi sẽ được hướng dẫn những điểm cần theo dõi tại nhà và thời điểm nên liên hệ hoặc tái khám.",
  },
];

export default async function ProcessPage() {
  const Config = await find("Config");
  const ContactData: ContactProps = LocalFindById(Config, "contact");
  return (
    <main>
      <PageHero
        eyebrow="Quy trình khám thú y"
        title="Biết trước từng bước để yên tâm đưa thú cưng đi khám"
        description="Từ đặt lịch, thăm khám, tư vấn điều trị đến theo dõi sau khám, quy trình được trình bày rõ ràng để chủ nuôi dễ chuẩn bị và an tâm hơn."
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Quy trình" },
        ]}
        actions={
          <>
            <ButtonLink href="/#lien-he" size="lg">
              Đặt lịch khám
            </ButtonLink>
            <ButtonLink href="tel:0900000000" variant="outline" size="lg">
              Gọi tư vấn
            </ButtonLink>
          </>
        }
      />

      <PageSection
        eyebrow="Quy trình chính"
        title="Bốn bước rõ ràng trong một lần thăm khám"
        description="Mỗi bước đều được trao đổi để bạn biết điều gì sẽ diễn ra và chủ động hơn khi chăm sóc thú cưng."
      >
        <ol className="grid gap-5 lg:grid-cols-4">
          {mainSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex gap-4 rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-6 lg:block"
            >
              <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white ring-4 ring-primary-subtle">
                {index + 1}
              </span>
              <div className="min-w-0 lg:mt-5">
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection
        eyebrow="Từng giai đoạn"
        title="Bạn sẽ được hỗ trợ như thế nào?"
        description="Thông tin ngắn gọn về cách phòng khám tiếp nhận, tư vấn và đồng hành sau buổi khám."
        className="border-y border-primary/10 bg-primary-subtle/35"
      >
        <FeatureGrid columns={2}>
          {processDetails.map((detail, index) => (
            <InfoCard
              key={detail.title}
              icon={String(index + 1).padStart(2, "0")}
              title={detail.title}
              description={detail.description}
              className="border-primary/15"
            />
          ))}
        </FeatureGrid>
      </PageSection>

      <PageSection
        eyebrow="Chuẩn bị trước khi khám"
        title="Cần chuẩn bị gì trước khi đưa thú cưng đi khám?"
        description="Một vài thông tin và vật dụng quen thuộc sẽ giúp quá trình tiếp nhận thuận tiện hơn."
      >
        <div className="rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-7 lg:p-8">
          <ul className="grid gap-4 md:grid-cols-2">
            {preparationItems.map((item, index) => (
              <li
                key={item}
                className={`flex items-start gap-3 rounded-ui bg-primary-subtle/55 px-4 py-4 text-sm leading-6 text-foreground ${
                  index === preparationItems.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <span
                  className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Câu hỏi thường gặp"
        title="Giải đáp trước khi đưa thú cưng đi khám"
        description="Những thông tin cơ bản giúp bạn bớt băn khoăn và chuẩn bị chủ động hơn."
        className="border-y border-primary/10 bg-surface-subtle"
      >
        <div className="overflow-hidden rounded-card border border-border/80 bg-surface shadow-card">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              className="border-b border-border/80 last:border-b-0"
            />
          ))}
        </div>
      </PageSection>

      <CTASection
        className="pt-12 sm:pt-16 lg:pt-20"
        title="Bạn muốn được hướng dẫn trước khi đưa thú cưng đi khám?"
        description="Liên hệ phòng khám để được tư vấn bước chuẩn bị phù hợp với tình trạng của thú cưng."
        primaryAction={
          <ButtonLink href="/#lien-he" size="lg">
            Đặt lịch khám
          </ButtonLink>
        }
        secondaryAction={
          <ButtonLink
            href={`tel:${ContactData?.Hotline}`}
            variant="outline"
            size="lg"
          >
            Gọi ngay
          </ButtonLink>
        }
      />
    </main>
  );
}
