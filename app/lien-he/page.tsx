import type { Metadata } from 'next'
import { CTASection } from '@/components/page/cta-section'
import { PageHero } from '@/components/page/page-hero'
import { PageSection } from '@/components/page/page-section'
import { Button, ButtonLink } from '@/components/ui/button'
import { ContactCard } from '@/components/ui/contact-card'
import { FAQItem } from '@/components/ui/faq-item'

export const metadata: Metadata = {
  title: 'Liên hệ phòng khám thú y Sài Gòn | Đặt lịch khám thú cưng',
  description:
    'Liên hệ phòng khám thú y tại Sài Gòn để đặt lịch khám, gọi tư vấn, nhắn Zalo hoặc xem hướng dẫn chỉ đường trước khi đưa thú cưng đến khám.',
}

const quickActions = [
  {
    icon: '01',
    title: 'Gọi ngay',
    value: '0900 000 000',
    description: 'Trao đổi nhanh về tình trạng của thú cưng.',
    href: 'tel:0900000000',
  },
  {
    icon: '02',
    title: 'Nhắn Zalo',
    value: 'Mở cuộc trò chuyện',
    description: 'Gửi thông tin để được hướng dẫn trước khi đến.',
    href: '#',
  },
  {
    icon: '03',
    title: 'Chỉ đường',
    value: 'Xem Google Maps',
    description: 'Kiểm tra hướng di chuyển đến phòng khám.',
    href: '#',
  },
]

const contactInformation = [
  {
    icon: 'ĐT',
    title: 'Hotline',
    value: '0900 000 000',
    href: 'tel:0900000000',
  },
  {
    icon: 'ZA',
    title: 'Zalo',
    value: '0900 000 000',
    href: '#',
  },
  {
    icon: 'ĐC',
    title: 'Địa chỉ',
    value: 'Sài Gòn, Việt Nam',
  },
  {
    icon: 'EM',
    title: 'Email',
    value: 'contact@example.com',
    href: 'mailto:contact@example.com',
  },
]

const serviceAreas = [
  'Sài Gòn',
  'TP. Hồ Chí Minh',
  'Quận trung tâm',
  'Khu vực lân cận',
]

const faqs = [
  {
    question: 'Tôi có cần đặt lịch trước không?',
    answer:
      'Không bắt buộc, nhưng đặt lịch trước giúp phòng khám chủ động sắp xếp thời gian và hướng dẫn bạn chuẩn bị thuận tiện hơn.',
  },
  {
    question:
      'Nếu thú cưng có dấu hiệu bất thường thì nên gọi hay đến trực tiếp?',
    answer:
      'Bạn nên gọi trước và mô tả các dấu hiệu đang có để được hướng dẫn bước chuẩn bị phù hợp trước khi di chuyển.',
  },
  {
    question: 'Phòng khám có tư vấn dịch vụ phù hợp trước khi đến không?',
    answer:
      'Có. Bạn có thể mô tả nhu cầu hoặc tình trạng cơ bản của thú cưng để được gợi ý dịch vụ phù hợp.',
  },
  {
    question: 'Giờ làm việc có thay đổi vào ngày lễ không?',
    answer:
      'Giờ làm việc có thể thay đổi vào ngày lễ. Vui lòng liên hệ trước khi đến để xác nhận thời gian phù hợp.',
  },
  {
    question: 'Form đặt lịch trên website có gửi thông tin thật chưa?',
    answer:
      'Hiện form đặt lịch là giao diện mẫu. Vui lòng gọi hoặc nhắn Zalo nếu cần được hỗ trợ ngay.',
  },
]

const fieldStyles =
  'mt-2 min-h-12 w-full rounded-ui border border-border bg-surface px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10'

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Liên hệ phòng khám"
        title="Đặt lịch và nhận tư vấn cho thú cưng của bạn"
        description="Bạn có thể gọi ngay, nhắn Zalo hoặc gửi yêu cầu đặt lịch để được tư vấn dịch vụ phù hợp trước khi đưa thú cưng đến phòng khám."
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Liên hệ' },
        ]}
        actions={
          <>
            <ButtonLink href="tel:0900000000" size="lg">
              Gọi ngay
            </ButtonLink>
            <ButtonLink href="#dat-lich" variant="outline" size="lg">
              Đặt lịch khám
            </ButtonLink>
          </>
        }
      />

      <PageSection
        eyebrow="Hỗ trợ nhanh"
        title="Chọn cách liên hệ thuận tiện nhất"
        description="Gọi, nhắn tin hoặc xem chỉ đường chỉ với một thao tác."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {quickActions.map((action) => (
            <ContactCard
              key={action.title}
              icon={action.icon}
              title={action.title}
              value={action.value}
              description={action.description}
              href={action.href}
              className="min-h-36 border-primary/15"
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Thông tin liên hệ"
        title="Thông tin phòng khám"
        description="Vui lòng liên hệ trước để được hướng dẫn thời gian phù hợp."
        className="border-y border-primary/10 bg-primary-subtle/35"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {contactInformation.map((item) => (
            <ContactCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              value={item.value}
              href={item.href}
              className="border-primary/15"
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        id="dat-lich"
        eyebrow="Đặt lịch khám"
        title="Gửi yêu cầu tư vấn ngắn"
        description="Điền những thông tin cơ bản bên dưới hoặc gọi trực tiếp nếu bạn cần hỗ trợ sớm."
      >
        <div className="mx-auto max-w-3xl rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-7 lg:p-8">
          <form aria-label="Form yêu cầu đặt lịch mẫu">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-foreground">
                Họ tên
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Nguyễn Văn A"
                  className={fieldStyles}
                />
              </label>
              <label className="text-sm font-semibold text-foreground">
                Số điện thoại
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="0900 000 000"
                  className={fieldStyles}
                />
              </label>
              <label className="text-sm font-semibold text-foreground sm:col-span-2">
                Dịch vụ cần tư vấn
                <select name="service" defaultValue="" className={fieldStyles}>
                  <option value="" disabled>
                    Chọn dịch vụ
                  </option>
                  <option>Khám tổng quát</option>
                  <option>Tiêm phòng</option>
                  <option>Xét nghiệm</option>
                  <option>Phẫu thuật hoặc triệt sản</option>
                  <option>Spa & grooming</option>
                  <option>Chưa xác định</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-foreground sm:col-span-2">
                Ghi chú
                <textarea
                  name="note"
                  rows={4}
                  placeholder="Mô tả ngắn nhu cầu hoặc tình trạng của thú cưng"
                  className={`${fieldStyles} resize-y py-3`}
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-muted">
                Phòng khám sẽ liên hệ lại theo thông tin bạn cung cấp.
              </p>
              <Button type="button" size="lg" className="shrink-0">
                Gửi yêu cầu đặt lịch
              </Button>
            </div>
          </form>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Thời gian & khu vực"
        title="Chủ động sắp xếp trước khi đến"
        description="Thông tin giờ làm việc và phạm vi hỗ trợ hiện tại của phòng khám."
        className="border-y border-primary/10 bg-surface-subtle"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-7">
            <span className="grid size-11 place-items-center rounded-ui bg-primary-subtle text-sm font-bold text-primary">
              08
            </span>
            <h3 className="mt-5 text-xl font-semibold text-foreground">
              Giờ làm việc
            </h3>
            <div className="mt-5 flex items-center justify-between gap-4 border-b border-border/80 pb-4">
              <span className="text-sm text-muted">Thứ 2 - Chủ nhật</span>
              <strong className="text-primary-hover">08:00 - 20:00</strong>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">
              Giờ làm việc có thể thay đổi vào ngày lễ. Vui lòng liên hệ trước
              khi đến.
            </p>
          </article>

          <article className="rounded-card border border-border/80 bg-surface p-5 shadow-card sm:p-7">
            <span className="grid size-11 place-items-center rounded-ui bg-primary-subtle text-sm font-bold text-primary">
              SG
            </span>
            <h3 className="mt-5 text-xl font-semibold text-foreground">
              Khu vực phục vụ
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Phòng khám hỗ trợ khách hàng tại Sài Gòn và các khu vực lân cận.
              Nếu bạn ở xa, hãy liên hệ trước để được tư vấn thời gian phù hợp.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-primary/15 bg-primary-subtle px-3 py-2 text-sm font-medium text-primary-hover"
                >
                  {area}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Câu hỏi thường gặp"
        title="Giải đáp trước khi liên hệ"
        description="Một số thông tin giúp bạn chọn cách liên hệ và chuẩn bị thuận tiện hơn."
      >
        <div className="overflow-hidden rounded-card border border-border/80 bg-surface shadow-card">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              className="border-b border-border/80 last:border-b-0"
            />
          ))}
        </div>
      </PageSection>

      <CTASection
        title="Bạn cần tư vấn nhanh cho thú cưng?"
        description="Gọi hoặc nhắn Zalo để được hướng dẫn trước khi đưa thú cưng đến phòng khám."
        primaryAction={
          <ButtonLink href="tel:0900000000" size="lg">
            Gọi ngay
          </ButtonLink>
        }
        secondaryAction={
          <ButtonLink href="#" variant="outline" size="lg">
            Nhắn Zalo
          </ButtonLink>
        }
      />
    </main>
  )
}
