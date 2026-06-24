import type { Metadata } from "next";
import { CTASection } from "@/components/page/cta-section";
import { FeatureGrid } from "@/components/page/feature-grid";
import { InfoCard } from "@/components/page/info-card";
import { PageHero } from "@/components/page/page-hero";
import { PageSection } from "@/components/page/page-section";
import { ButtonLink } from "@/components/ui/button";
import { FAQItem } from "@/components/ui/faq-item";
import { ServiceCard } from "@/components/ui/service-card";
import { find } from "@/config/lib/api";
import { ContactProps } from "@/assets/props/PropsConfig";
import { LocalFindById } from "@/components/items/Handle";

export const metadata: Metadata = {
  title: "Dịch vụ chăm sóc thú cưng tại Sài Gòn",
  description:
    "Khám tổng quát, tiêm phòng, xét nghiệm, phẫu thuật, spa và tư vấn chăm sóc thú cưng tại Sài Gòn.",
};

const services = [
  {
    title: "Khám tổng quát",
    description:
      "Kiểm tra sức khỏe cơ bản và nhận tư vấn chăm sóc phù hợp theo độ tuổi, thể trạng.",
  },
  {
    title: "Tiêm phòng",
    description:
      "Tư vấn lịch tiêm và các mũi phòng bệnh phù hợp với tình trạng của thú cưng.",
  },
  {
    title: "Xét nghiệm",
    description:
      "Hỗ trợ đánh giá các chỉ số cần thiết theo chỉ định trong quá trình thăm khám.",
  },
  {
    title: "Điều trị bệnh thường gặp",
    description:
      "Thăm khám và tư vấn hướng theo dõi với các dấu hiệu bất thường thường gặp.",
  },
  {
    title: "Phẫu thuật",
    description:
      "Tư vấn trước can thiệp, chăm sóc trong quá trình thực hiện và hướng dẫn hậu phẫu.",
  },
  {
    title: "Triệt sản",
    description:
      "Đánh giá sức khỏe và hướng dẫn chuẩn bị, chăm sóc thú cưng trước và sau triệt sản.",
  },
  {
    title: "Spa & grooming",
    description:
      "Tắm, vệ sinh và chăm sóc lông giúp thú cưng sạch sẽ, thoải mái hơn mỗi ngày.",
  },
  {
    title: "Lưu chuồng",
    description:
      "Không gian lưu trú ngắn hạn sạch sẽ, có theo dõi và chăm sóc nhu cầu cơ bản.",
  },
  {
    title: "Tư vấn dinh dưỡng",
    description:
      "Gợi ý chế độ ăn phù hợp với độ tuổi, thể trạng và thói quen của từng thú cưng.",
  },
];

const serviceGroups = [
  {
    icon: "01",
    title: "Chăm sóc sức khỏe",
    description:
      "Phù hợp với thú cưng cần kiểm tra sức khỏe định kỳ, phòng bệnh và theo dõi các chỉ số cơ bản.",
    services: ["Khám tổng quát", "Tiêm phòng", "Xét nghiệm"],
  },
  {
    icon: "02",
    title: "Điều trị",
    description:
      "Hỗ trợ tư vấn và điều trị khi thú cưng có dấu hiệu bất thường, cần can thiệp y tế hoặc theo dõi sau điều trị.",
    services: ["Điều trị bệnh thường gặp", "Phẫu thuật", "Triệt sản"],
  },
  {
    icon: "03",
    title: "Chăm sóc định kỳ",
    description:
      "Phù hợp với nhu cầu chăm sóc thường xuyên, vệ sinh, lưu trú ngắn hạn và xây dựng chế độ ăn hợp lý.",
    services: ["Spa & grooming", "Lưu chuồng", "Tư vấn dinh dưỡng"],
  },
];

const visitSteps = [
  {
    title: "Chọn dịch vụ cần tư vấn",
    description: "Xác định nhu cầu hoặc dấu hiệu bạn đang quan tâm.",
  },
  {
    title: "Liên hệ hoặc đặt lịch",
    description: "Trao đổi sơ bộ để được hướng dẫn thời gian phù hợp.",
  },
  {
    title: "Đưa thú cưng đến phòng khám",
    description: "Mang theo thông tin sức khỏe hoặc lịch tiêm nếu có.",
  },
  {
    title: "Nhận tư vấn sau khám",
    description: "Theo dõi tại nhà theo hướng dẫn dành cho thú cưng.",
  },
];

const faqs = [
  {
    question: "Nên đặt lịch trước hay có thể đến trực tiếp?",
    answer:
      "Bạn có thể đến trực tiếp, tuy nhiên đặt lịch trước sẽ giúp phòng khám sắp xếp thời gian và hướng dẫn chuẩn bị thuận tiện hơn.",
  },
  {
    question: "Khi nào nên đưa chó mèo đi khám tổng quát?",
    answer:
      "Nên đưa thú cưng đi khám định kỳ hoặc khi có thay đổi về ăn uống, vận động, hành vi hay xuất hiện dấu hiệu bất thường.",
  },
  {
    question: "Tiêm phòng cho thú cưng cần chuẩn bị gì?",
    answer:
      "Hãy mang theo sổ tiêm nếu có và thông báo tình trạng sức khỏe gần đây để được tư vấn trước khi tiêm.",
  },
  {
    question: "Phòng khám có tư vấn sau điều trị không?",
    answer:
      "Phòng khám sẽ hướng dẫn cách chăm sóc, theo dõi tại nhà và thời điểm cần tái khám tùy từng trường hợp.",
  },
  {
    question: "Chi phí dịch vụ có được báo trước không?",
    answer:
      "Chi phí dự kiến sẽ được trao đổi sau khi nắm nhu cầu và tình trạng của thú cưng, trước khi thực hiện dịch vụ.",
  },
  {
    question: "Nếu chưa biết chọn dịch vụ nào thì phải làm sao?",
    answer:
      "Bạn chỉ cần mô tả nhu cầu hoặc dấu hiệu của thú cưng qua điện thoại để được hướng dẫn bước phù hợp.",
  },
];

export default async function ServicesPage() {
  const Config = await find("Config");
  const ContactData: ContactProps = LocalFindById(Config, "contact");
  const Products = await find("Products");

  return (
    <main>
      <PageHero
        eyebrow="Dịch vụ thú y"
        title="Dịch vụ chăm sóc thú cưng tại Sài Gòn"
        description="Từ khám tổng quát, tiêm phòng, xét nghiệm đến phẫu thuật, spa và tư vấn dinh dưỡng, phòng khám hỗ trợ chăm sóc thú cưng theo từng nhu cầu cụ thể."
        breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "Dịch vụ" }]}
        actions={
          <>
            {/* <ButtonLink href="/#lien-he" size="lg">
              Đặt lịch khám
            </ButtonLink> */}
            <ButtonLink
              href={`tel:${ContactData?.Hotline}`}
              variant="outline"
              size="lg"
            >
              Gọi tư vấn
            </ButtonLink>
          </>
        }
      />

      <PageSection
        eyebrow="Dịch vụ chính"
        title="Chăm sóc đầy đủ cho từng nhu cầu"
        description="Lựa chọn dịch vụ phù hợp với tình trạng sức khỏe và nhu cầu chăm sóc hằng ngày của thú cưng."
      >
        <FeatureGrid columns={3}>
          {Products.map((service, index) => (
            <div key={index}>
              {" "}
              <ServiceCard Data={service} Index={index} />
            </div>
          ))}
        </FeatureGrid>
      </PageSection>

      <PageSection
        eyebrow="Theo nhu cầu"
        title="Dễ dàng chọn nhóm chăm sóc phù hợp"
        description="Ba nhóm dịch vụ giúp bạn nhanh chóng xác định hướng chăm sóc ban đầu cho thú cưng."
        className="border-y border-primary/10 bg-primary-subtle/35"
      >
        <FeatureGrid columns={3}>
          {serviceGroups.map((group) => (
            <InfoCard
              key={group.title}
              icon={group.icon}
              title={group.title}
              description={group.description}
              className="border-primary/15"
            >
              <ul className="space-y-3 text-sm font-medium text-foreground">
                {group.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 size-2 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </InfoCard>
          ))}
        </FeatureGrid>
      </PageSection>

      <PageSection
        eyebrow="Quy trình thăm khám"
        title="Bốn bước đơn giản trước và sau khi khám"
        description="Chuẩn bị một chút thông tin sẽ giúp buổi tư vấn diễn ra thuận tiện hơn."
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {visitSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-6"
            >
              <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 rounded-ui border border-primary/15 bg-primary-subtle px-4 py-3 text-sm leading-6 text-primary-hover sm:px-5">
          <strong>Lưu ý:</strong> Nếu thú cưng có dấu hiệu bất thường, nên gọi
          trước để được hướng dẫn chuẩn bị.
        </p>
      </PageSection>

      <CTASection
        title="Chưa biết thú cưng cần dịch vụ nào?"
        description="Liên hệ phòng khám để được tư vấn dịch vụ phù hợp trước khi đưa thú cưng đến khám."
        // primaryAction={
        //   <ButtonLink href="/#lien-he" size="lg">
        //     Đặt lịch khám
        //   </ButtonLink>
        // }
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
        title="Thông tin trước khi sử dụng dịch vụ"
        description="Một số giải đáp ngắn giúp bạn chủ động hơn khi đưa thú cưng đến phòng khám."
        className="border-t border-primary/10 bg-surface-subtle"
      >
        <div className="grid overflow-hidden rounded-card border border-border/80 bg-surface shadow-card md:grid-cols-2">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              className="border-b border-border/80 last:border-b-0 md:odd:border-r"
            />
          ))}
        </div>
      </PageSection>
    </main>
  );
}
