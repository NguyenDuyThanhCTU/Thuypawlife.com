import { services } from "@/data/home";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { ProductProps } from "@/assets/props/PropsProduct";

export function ServicesSection({ Products }: { Products: ProductProps[] }) {
  return (
    <section id="dich-vu" className="section">
      <Container>
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Chăm sóc toàn diện theo từng nhu cầu"
          description="Từ kiểm tra sức khỏe định kỳ đến theo dõi sau điều trị, mỗi dịch vụ đều được trao đổi rõ ràng trước khi thực hiện."
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {Products.map((service, idx) => (
            <div key={idx}>
              {" "}
              <ServiceCard Data={service} Index={idx} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
