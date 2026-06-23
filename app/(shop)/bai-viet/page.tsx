import type { Metadata } from 'next'
import { CTASection } from '@/components/page/cta-section'
import { FeatureGrid } from '@/components/page/feature-grid'
import { InfoCard } from '@/components/page/info-card'
import { PageHero } from '@/components/page/page-hero'
import { PageSection } from '@/components/page/page-section'
import { ButtonLink } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Tin tức chăm sóc thú cưng',
  description:
    'Kiến thức tiêm phòng, dinh dưỡng và chăm sóc sức khỏe thường gặp ở chó mèo.',
}

const articleTopics = [
  {
    title: 'Tiêm phòng đúng lịch',
    description:
      'Thông tin cơ bản giúp chủ nuôi chủ động theo dõi lịch tiêm cho chó mèo.',
  },
  {
    title: 'Dinh dưỡng hằng ngày',
    description:
      'Gợi ý xây dựng thói quen ăn uống phù hợp theo độ tuổi và thể trạng.',
  },
  {
    title: 'Dấu hiệu cần lưu ý',
    description:
      'Những thay đổi phổ biến về ăn uống, vận động và hành vi nên được theo dõi.',
  },
]

export default function ArticlesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kiến thức"
        title="Tin tức chăm sóc thú cưng"
        description="Kiến thức tiêm phòng, chăm sóc sức khỏe, dinh dưỡng và dấu hiệu bệnh thường gặp ở chó mèo."
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tin tức chăm sóc thú cưng' },
        ]}
      />

      <PageSection
        eyebrow="Chủ đề nổi bật"
        title="Kiến thức dễ hiểu cho người nuôi thú cưng"
        description="Nền bố cục cho danh sách bài viết, được giữ gọn trước khi bổ sung nội dung chính thức."
      >
        <FeatureGrid columns={3}>
          {articleTopics.map((topic, index) => (
            <InfoCard
              key={topic.title}
              icon={`0${index + 1}`}
              title={topic.title}
              description={topic.description}
            />
          ))}
        </FeatureGrid>
      </PageSection>

      <CTASection
        title="Thú cưng có dấu hiệu bất thường?"
        description="Bạn nên liên hệ phòng khám để được hướng dẫn trước khi đưa thú cưng đến thăm khám."
        primaryAction={
          <ButtonLink href="tel:0900000000" size="lg">
            Gọi ngay
          </ButtonLink>
        }
        secondaryAction={
          <ButtonLink href="/#lien-he" variant="outline" size="lg">
            Đặt lịch khám
          </ButtonLink>
        }
      />
    </main>
  )
}
