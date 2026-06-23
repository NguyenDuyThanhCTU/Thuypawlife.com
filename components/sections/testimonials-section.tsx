import { testimonials } from "@/data/home";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export function TestimonialsSection() {
  return (
    <section id="danh-gia" className="section">
      <Container>
        <SectionHeading
          eyebrow="Phản hồi"
          title="Phản hồi của khách hàng"
          description="Những chia sẻ và đánh giá từ khách hàng đã đến PawLife."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              name={testimonial.author}
              Avt={testimonial.img}
              rating={5}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
