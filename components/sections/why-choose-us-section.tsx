import { FeatureGrid } from "@/components/page/feature-grid";
import { InfoCard } from "@/components/page/info-card";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    title: "Cam kết chăm sóc",
    description:
      "Lắng nghe tình trạng của thú cưng, tư vấn hướng xử lý phù hợp và giải thích rõ từng bước.",
  },
  {
    title: "Điểm khác biệt",
    description:
      "Tập trung vào sự rõ ràng, dễ hiểu và hạn chế làm khách hàng bị rối bởi quá nhiều thuật ngữ chuyên môn.",
  },
  {
    title: "Không gian sạch sẽ",
    description:
      "Khu vực khám được sắp xếp gọn gàng, tạo cảm giác an tâm cho chủ nuôi và thú cưng.",
  },
  {
    title: "Đội ngũ bác sĩ",
    description:
      "Bác sĩ tư vấn theo tình trạng thực tế của thú cưng, ưu tiên giải pháp phù hợp và dễ theo dõi.",
  },
  {
    title: "Quy trình minh bạch",
    description:
      "Các bước khám, tư vấn và chi phí dự kiến được trao đổi rõ trước khi thực hiện.",
  },
  {
    title: "Tư vấn sau khám",
    description:
      "Chủ nuôi được hướng dẫn theo dõi tại nhà và nhận biết các dấu hiệu cần tái khám.",
  },
];

const trustHighlights = [
  "Quy trình khám rõ ràng",
  "Tư vấn dễ hiểu",
  "Theo dõi sau điều trị",
];

export function WhyChooseUsSection() {
  return (
    <section
      id="vi-sao-chon"
      className="section border-y border-primary/10 bg-surface-subtle"
    >
      <Container>
        <SectionHeading
          eyebrow="Vì sao chọn chúng tôi"
          title="Chăm sóc thú cưng rõ ràng, tận tâm và dễ hiểu"
          description="Chúng tôi tập trung vào trải nghiệm khám minh bạch, không gian sạch sẽ và hướng dẫn chăm sóc sau khám để chủ nuôi yên tâm hơn."
          align="center"
        />

        <FeatureGrid columns={3} className="mt-10 lg:mt-14">
          {reasons.map((reason, index) => (
            <InfoCard
              key={reason.title}
              icon={String(index + 1).padStart(2, "0")}
              title={reason.title}
              description={reason.description}
              className="border-primary/10"
            />
          ))}
        </FeatureGrid>

        <div className="mt-8 rounded-card border border-primary/15 bg-primary-subtle p-5 sm:p-6 lg:mt-10 lg:p-8">
          <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {trustHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex min-h-14 items-center gap-3 rounded-ui border border-primary/10 bg-surface px-4 py-3 text-sm font-semibold text-foreground"
              >
                <span
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-sm text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-4 border-t border-primary/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-foreground">
              Bạn muốn được tư vấn trước khi đưa thú cưng đến khám?
            </p>
            {/* <ButtonLink href="/#lien-he" className="shrink-0">
              Đặt lịch khám
            </ButtonLink> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
