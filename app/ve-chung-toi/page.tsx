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
  title: "Về chúng tôi | Phòng khám thú y Sài Gòn",
  description:
    "Tìm hiểu lý do nên chọn phòng khám thú y tại Sài Gòn với quy trình khám rõ ràng, tư vấn dễ hiểu, không gian sạch sẽ và hướng dẫn chăm sóc sau khám.",
};

const careCommitments = [
  "Lắng nghe tình trạng của thú cưng",
  "Giải thích rõ hướng kiểm tra",
  "Tư vấn phương án phù hợp",
  "Hướng dẫn chăm sóc sau khám",
];

const differences = [
  {
    title: "Quy trình khám rõ ràng",
    description:
      "Các bước thăm khám và tư vấn được trình bày dễ hiểu để chủ nuôi nắm được tình trạng của thú cưng.",
  },
  {
    title: "Tư vấn dễ hiểu",
    description:
      "Hạn chế dùng thuật ngữ khó hiểu, tập trung giải thích bằng ngôn ngữ gần gũi với chủ nuôi.",
  },
  {
    title: "Không gian sạch sẽ",
    description:
      "Khu vực tiếp nhận và thăm khám được sắp xếp gọn gàng, tạo cảm giác an tâm cho thú cưng và chủ nuôi.",
  },
  {
    title: "Theo dõi sau điều trị",
    description:
      "Chủ nuôi được hướng dẫn cách quan sát tại nhà và nhận biết dấu hiệu cần liên hệ lại.",
  },
  {
    title: "Chi phí được trao đổi trước",
    description:
      "Các bước cần thực hiện và chi phí dự kiến được trao đổi trước để khách hàng dễ cân nhắc.",
  },
  {
    title: "Dịch vụ phù hợp từng nhu cầu",
    description:
      "Từ khám tổng quát, tiêm phòng, xét nghiệm đến spa và tư vấn dinh dưỡng, dịch vụ được gợi ý theo tình trạng thực tế.",
  },
];

const facilityItems = [
  "Khu vực tiếp nhận được sắp xếp gọn gàng",
  "Không gian khám sạch sẽ, phù hợp cho chó mèo",
  "Thiết bị hỗ trợ các bước thăm khám cơ bản",
  "Quy trình vệ sinh được chú trọng thường xuyên",
];

const processSteps = [
  {
    title: "Tiếp nhận thông tin",
    description:
      "Lắng nghe nhu cầu và ghi nhận tình trạng ban đầu của thú cưng.",
  },
  {
    title: "Thăm khám và tư vấn",
    description:
      "Kiểm tra tình trạng và giải thích các bước cần thiết bằng cách dễ hiểu.",
  },
  {
    title: "Trao đổi phương án",
    description:
      "Phương án và chi phí dự kiến được trao đổi trước khi thực hiện.",
  },
  {
    title: "Hướng dẫn theo dõi",
    description:
      "Chủ nuôi nhận hướng dẫn chăm sóc và các dấu hiệu cần lưu ý tại nhà.",
  },
];

const aftercareItems = [
  "Theo dõi triệu chứng và thay đổi của thú cưng tại nhà.",
  "Lưu ý về ăn uống, vận động và vệ sinh theo hướng dẫn phù hợp.",
  "Ghi nhớ thời điểm cần tái khám hoặc liên hệ lại phòng khám.",
  "Chủ động hỏi lại khi có điều chưa rõ trong quá trình chăm sóc.",
];

const faqs = [
  {
    question: "Vì sao nên đặt lịch trước khi đến phòng khám?",
    answer:
      "Đặt lịch giúp phòng khám chủ động sắp xếp thời gian và hướng dẫn bạn chuẩn bị phù hợp trước khi đến.",
  },
  {
    question: "Phòng khám có báo chi phí trước không?",
    answer:
      "Chi phí dự kiến sẽ được trao đổi trước khi thực hiện các bước kiểm tra hoặc chăm sóc cần thiết.",
  },
  {
    question: "Sau khi khám có được hướng dẫn chăm sóc tại nhà không?",
    answer:
      "Có. Chủ nuôi được hướng dẫn những điểm cần theo dõi và thời điểm nên liên hệ lại hoặc tái khám.",
  },
  {
    question: "Nếu chưa biết chọn dịch vụ nào thì phải làm sao?",
    answer:
      "Bạn có thể mô tả nhu cầu hoặc dấu hiệu của thú cưng để được gợi ý bước thăm khám phù hợp.",
  },
  {
    question: "Có cần mang theo sổ tiêm phòng không?",
    answer:
      "Bạn nên mang theo nếu có để bác sĩ tham khảo lịch tiêm và thông tin sức khỏe trước đây của thú cưng.",
  },
];

export default async function AboutPage() {
  const Config = await find("Config");
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  return (
    <main>
      <PageHero
        eyebrow="Vì sao chọn chúng tôi"
        title="Chăm sóc thú cưng rõ ràng, tận tâm và dễ hiểu"
        description="Chúng tôi tập trung vào quy trình khám minh bạch, không gian sạch sẽ và hướng dẫn chăm sóc sau khám để chủ nuôi yên tâm hơn khi đưa thú cưng đến phòng khám."
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Về chúng tôi" },
        ]}
        actions={
          <>
            <ButtonLink href="/#lien-he" size="lg">
              Đặt lịch khám
            </ButtonLink>
            <ButtonLink href="/quy-trinh" variant="outline" size="lg">
              Xem quy trình khám
            </ButtonLink>
          </>
        }
      />

      <PageSection
        eyebrow="Cam kết chăm sóc"
        title="Ưu tiên sự rõ ràng trong mỗi lần tư vấn"
        description="Chúng tôi ưu tiên trao đổi rõ ràng để chủ nuôi hiểu tình trạng của thú cưng trước khi quyết định các bước tiếp theo."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {careCommitments.map((commitment, index) => (
            <div
              key={commitment}
              className="flex items-center gap-4 rounded-card border border-border/80 bg-surface p-5 shadow-card"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-ui bg-primary-subtle text-sm font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-semibold text-foreground">{commitment}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Điểm khác biệt"
        title="Những điều giúp chủ nuôi an tâm hơn"
        description="Từ cách trao đổi đến trải nghiệm tại phòng khám, mỗi điểm chạm đều hướng đến sự thuận tiện và dễ hiểu."
        className="border-y border-primary/10 bg-primary-subtle/35"
      >
        <FeatureGrid columns={3}>
          {differences.map((difference, index) => (
            <InfoCard
              key={difference.title}
              icon={String(index + 1).padStart(2, "0")}
              title={difference.title}
              description={difference.description}
              className="border-primary/15"
            />
          ))}
        </FeatureGrid>
      </PageSection>

      <PageSection
        eyebrow="Cơ sở vật chất"
        title="Không gian gọn gàng cho trải nghiệm thăm khám nhẹ nhàng hơn"
        description="Phòng khám chú trọng sự sạch sẽ, cách bố trí dễ tiếp cận và các điều kiện hỗ trợ thăm khám cơ bản."
      >
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-7">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {facilityItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-foreground"
                >
                  <span
                    className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid min-h-64 place-items-center rounded-card border border-primary/15 bg-primary-subtle p-8 text-center shadow-card">
            <div>
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-surface text-2xl font-bold text-primary shadow-card">
                +
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                Không gian chăm sóc thân thiện
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-muted">
                Bố trí đơn giản, sạch sẽ và thuận tiện cho quá trình tiếp nhận,
                thăm khám thú cưng.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Đội ngũ bác sĩ"
        title="Tư vấn dựa trên tình trạng thực tế của thú cưng"
        description="Đội ngũ bác sĩ thú y tập trung lắng nghe, giải thích dễ hiểu và hướng dẫn chủ nuôi tiếp tục chăm sóc sau buổi khám."
        className="border-y border-primary/10 bg-surface-subtle"
      >
        <FeatureGrid columns={3}>
          <InfoCard
            icon="01"
            title="Lắng nghe tận tâm"
            description="Tiếp nhận đầy đủ biểu hiện và những thay đổi gần đây mà chủ nuôi quan sát được."
          />
          <InfoCard
            icon="02"
            title="Tư vấn dễ hiểu"
            description="Giải thích hướng kiểm tra và chăm sóc bằng ngôn ngữ gần gũi, rõ ràng."
          />
          <InfoCard
            icon="03"
            title="Hướng dẫn sau khám"
            description="Giúp chủ nuôi biết cách theo dõi tình trạng của thú cưng khi trở về nhà."
          />
        </FeatureGrid>
      </PageSection>

      <PageSection
        eyebrow="Quy trình minh bạch"
        title="Biết trước các bước trong buổi thăm khám"
        description="Thông tin được trao đổi theo từng giai đoạn để bạn chủ động cân nhắc và chuẩn bị."
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-6"
            >
              <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <ButtonLink href="/quy-trinh" variant="ghost" className="mt-6">
          Xem đầy đủ quy trình khám <span aria-hidden="true">→</span>
        </ButtonLink>
      </PageSection>

      <PageSection
        eyebrow="Tư vấn sau khám"
        title="Bớt lo lắng khi tiếp tục chăm sóc tại nhà"
        description="Những hướng dẫn ngắn gọn giúp chủ nuôi biết cần quan sát điều gì và khi nào nên liên hệ lại."
        className="border-y border-primary/10 bg-primary-subtle/35"
      >
        <div className="rounded-card border border-primary/15 bg-surface p-5 shadow-card sm:p-7">
          <ul className="grid gap-4 md:grid-cols-2">
            {aftercareItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-ui bg-primary-subtle/60 px-4 py-4 text-sm leading-7 text-foreground"
              >
                <span
                  className="mt-1 size-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <CTASection
        className="pt-12 sm:pt-16 lg:pt-20"
        title="Bạn muốn được tư vấn trước khi đưa thú cưng đến khám?"
        description="Liên hệ phòng khám để được gợi ý dịch vụ phù hợp và chuẩn bị tốt hơn cho buổi thăm khám."
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

      <PageSection
        eyebrow="Câu hỏi thường gặp"
        title="Thông tin giúp bạn chuẩn bị tốt hơn"
        description="Một số giải đáp ngắn trước khi bạn đưa thú cưng đến phòng khám."
        className="border-t border-primary/10 bg-surface-subtle"
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
    </main>
  );
}
