import { testimonials } from '@/data/home'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { TestimonialCard } from '@/components/ui/testimonial-card'

export function TestimonialsSection() {
  return (
    <section id="danh-gia" className="section">
      <Container>
        <SectionHeading
          eyebrow="Phản hồi"
          title="Sự an tâm bắt đầu từ trải nghiệm rõ ràng"
          description="Những chia sẻ gần gũi từ khách hàng đã đưa thú cưng đến PawLife."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              name={testimonial.author}
              petName={testimonial.pet}
              rating={5}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
