import { faqs } from '@/data/home'
import { Container } from '@/components/ui/container'
import { FAQItem } from '@/components/ui/faq-item'
import { SectionHeading } from '@/components/ui/section-heading'

export function FAQSection() {
  return (
    <section id="hoi-dap" className="section bg-surface-subtle">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <SectionHeading
          eyebrow="Hỏi đáp"
          title="Giải đáp trước khi đặt lịch"
          description="Những thông tin giúp bạn chuẩn bị tốt hơn và chủ động lựa chọn thời gian thăm khám."
        />
        <div className="divide-y divide-border overflow-hidden rounded-card border border-border bg-surface">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
