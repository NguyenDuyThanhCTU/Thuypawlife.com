import { benefits } from '@/data/home'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'

const trustMetrics = [
  { value: '08:00 - 20:00', label: 'Khung giờ phục vụ mỗi ngày' },
  { value: '6+ nhóm dịch vụ', label: 'Nhu cầu chăm sóc thiết yếu' },
  { value: 'Sau thăm khám', label: 'Có hướng dẫn theo dõi tại nhà' },
]

export function WhyChooseUsSection() {
  return (
    <section id="vi-sao-chon" className="section bg-surface-subtle">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Vì sao chọn PawLife"
              title="An tâm trong từng bước chăm sóc"
              description="PawLife ưu tiên giao tiếp rõ ràng, sự thoải mái của thú cưng và khả năng theo dõi thuận tiện cho chủ nuôi."
            />
            <div className="mt-8 grid gap-3">
              {trustMetrics.map((metric) => (
                <div
                  key={metric.value}
                  className="flex items-center gap-4 rounded-ui border border-border/70 bg-surface px-4 py-3"
                >
                  <strong className="min-w-32 text-sm text-primary-hover">
                    {metric.value}
                  </strong>
                  <span className="text-sm text-muted">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                tone={index === 0 ? 'subtle' : 'white'}
                className={index === benefits.length - 1 ? 'sm:col-span-2' : ''}
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-ui bg-primary-subtle text-sm font-bold text-primary">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
