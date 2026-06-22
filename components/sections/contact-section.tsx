import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { ContactCard } from '@/components/ui/contact-card'
import { SectionHeading } from '@/components/ui/section-heading'

const inputStyles =
  'mt-2 min-h-12 w-full rounded-ui border border-border bg-surface px-4 text-base text-foreground outline-none placeholder:text-muted/65 focus:border-primary focus:ring-4 focus:ring-primary/10'

export function ContactSection() {
  return (
    <section id="lien-he" className="section bg-primary-subtle/45">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Liên hệ"
              title="Đặt lịch thăm khám cho thú cưng"
              description="Chọn cách liên hệ thuận tiện hoặc để lại thông tin để đội ngũ chuẩn bị nội dung tư vấn phù hợp."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ContactCard
                title="Hotline"
                value="0900 000 000"
                description="Chạm để gọi cho phòng khám"
                icon="☎"
                href="tel:0900000000"
              />
              <ContactCard
                title="Địa chỉ"
                value="Sài Gòn, Việt Nam"
                description="Địa chỉ chi tiết đang cập nhật"
                icon="⌖"
              />
              <ContactCard
                title="Giờ làm việc"
                value="08:00 - 20:00"
                description="Phục vụ mỗi ngày"
                icon="◷"
              />
              <ContactCard
                title="Zalo / Google Maps"
                value="Đang cập nhật"
                description="Liên kết chính thức sẽ bổ sung sau"
                icon="↗"
              />
            </div>
            <p className="mt-5 rounded-ui border border-primary/15 bg-surface px-4 py-3 text-sm leading-6 text-muted">
              Trường hợp cần hỗ trợ sớm, vui lòng gọi hotline trước khi di chuyển
              để phòng khám có thể hướng dẫn phù hợp.
            </p>
          </div>

          <Card tone="white" className="border-primary/15">
            <div className="mb-6 border-b border-border/70 pb-5">
              <p className="text-xl font-semibold text-foreground">
                Yêu cầu đặt lịch
              </p>
              <p className="mt-2 text-sm text-muted">
                Form minh họa giao diện, chưa gửi hoặc lưu dữ liệu.
              </p>
            </div>
            <form className="grid gap-5" aria-label="Form đặt lịch minh họa">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-foreground">
                  Họ và tên
                  <input
                    className={inputStyles}
                    type="text"
                    placeholder="Nguyễn Văn A"
                    autoComplete="name"
                  />
                </label>
                <label className="text-sm font-semibold text-foreground">
                  Số điện thoại
                  <input
                    className={inputStyles}
                    type="tel"
                    inputMode="tel"
                    placeholder="0900 000 000"
                    autoComplete="tel"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="hidden text-sm font-semibold text-foreground sm:block">
                  Loại thú cưng
                  <select className={inputStyles} defaultValue="">
                    <option value="" disabled>
                      Chọn loại thú cưng
                    </option>
                    <option>Chó</option>
                    <option>Mèo</option>
                    <option>Khác</option>
                  </select>
                </label>
                <label className="text-sm font-semibold text-foreground">
                  Dịch vụ cần tư vấn
                  <select className={inputStyles} defaultValue="">
                    <option value="" disabled>
                      Chọn dịch vụ
                    </option>
                    <option>Khám tổng quát</option>
                    <option>Tiêm phòng</option>
                    <option>Xét nghiệm</option>
                    <option>Phẫu thuật</option>
                    <option>Spa & grooming</option>
                    <option>Lưu chuồng</option>
                  </select>
                </label>
              </div>

              <label className="hidden text-sm font-semibold text-foreground sm:block">
                Thời gian mong muốn
                <input className={inputStyles} type="datetime-local" />
              </label>

              <label className="text-sm font-semibold text-foreground">
                Ghi chú
                <textarea
                  className={`${inputStyles} min-h-28 resize-y py-3`}
                  placeholder="Mô tả ngắn tình trạng hoặc nhu cầu của thú cưng"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="button" size="lg" className="w-full sm:w-auto">
                  Gửi yêu cầu đặt lịch
                </Button>
                <p className="text-xs leading-5 text-muted">
                  Nút hiện chỉ dùng để trình bày giao diện.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}
