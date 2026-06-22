import { processSteps } from '@/data/home'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'

export function ProcessSection() {
  return (
    <section id="quy-trinh" className="section">
      <Container>
        <SectionHeading
          eyebrow="Quy trình"
          title="Bốn bước rõ ràng, dễ theo dõi"
          description="Từ lúc đặt lịch đến hướng dẫn chăm sóc tại nhà, mỗi bước đều được trao đổi ngắn gọn và minh bạch."
          align="center"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {processSteps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-card border border-border bg-surface p-6"
            >
              <span className="mb-8 block text-3xl font-bold text-primary/35">
                {item.step}
              </span>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
