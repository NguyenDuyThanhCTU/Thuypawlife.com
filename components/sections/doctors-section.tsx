import { doctors } from '@/data/home'
import { Container } from '@/components/ui/container'
import { DoctorCard } from '@/components/ui/doctor-card'
import { SectionHeading } from '@/components/ui/section-heading'

export function DoctorsSection() {
  return (
    <section id="bac-si" className="section bg-primary-subtle/50">
      <Container>
        <SectionHeading
          eyebrow="Đội ngũ"
          title="Bác sĩ đồng hành cùng thú cưng"
          description="Đội ngũ phụ trách từng nhóm chuyên môn, cùng hướng đến trải nghiệm thăm khám nhẹ nhàng và dễ hiểu."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.name}
              name={doctor.name}
              role={doctor.specialty}
              description={doctor.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
