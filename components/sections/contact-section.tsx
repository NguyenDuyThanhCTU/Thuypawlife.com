import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ContactCard } from "@/components/ui/contact-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactProps, SocialMediaProps } from "@/assets/props/PropsConfig";
import { LocalFindById } from "../items/Handle";

const inputStyles =
  "mt-2 min-h-12 w-full rounded-ui border border-border bg-surface px-4 text-base text-foreground outline-none placeholder:text-muted/65 focus:border-primary focus:ring-4 focus:ring-primary/10";

// Thay bằng Gmail quản trị nhận thông tin đặt lịch

export function ContactSection({ Config }: { Config: Array<any> }) {
  const Contact: ContactProps = LocalFindById(Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");
  const FORM_SUBMIT_EMAIL = Contact?.Email;
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

            <div className="mt-8 flex flex-col gap-4">
              <ContactCard
                title="Hotline"
                value={`${Contact?.Hotline} - ${Contact?.PhoneNumber}`}
                description="Chạm để gọi cho phòng khám"
                icon="☎"
                href={`tel:${Contact?.Hotline}`}
              />

              <ContactCard
                title="Địa chỉ"
                value={`${Contact?.CompanyAddress}`}
                description=""
                icon="⌖"
              />

              <ContactCard
                title="Giờ làm việc"
                value={`${Contact?.CompanyTime}`}
                description="Phục vụ mỗi ngày"
                icon="◷"
              />

              <ContactCard
                title="Zalo / Google Maps"
                value={`Zalo: ${Contact?.Hotline}`}
                description="Liên kết chính thức sẽ bổ sung sau"
                icon="↗"
                href={SocialMedia?.zalo || undefined}
              />
            </div>

            <p className="mt-5 rounded-ui border border-primary/15 bg-surface px-4 py-3 text-sm leading-6 text-muted">
              Trường hợp cần hỗ trợ sớm, vui lòng gọi hotline trước khi di
              chuyển để phòng khám có thể hướng dẫn phù hợp.
            </p>
          </div>

          <Card tone="white" className="border-primary/15">
            <div className="mb-6 border-b border-border/70 pb-5">
              <p className="text-xl font-semibold text-foreground">
                Yêu cầu đặt lịch
              </p>

              <p className="mt-2 text-sm text-muted">
                Điền thông tin bên dưới, phòng khám sẽ nhận yêu cầu qua email
                quản trị và liên hệ lại để tư vấn.
              </p>
            </div>

            <form
              className="grid gap-5"
              action={`https://formsubmit.co/${FORM_SUBMIT_EMAIL}`}
              method="POST"
              aria-label="Form đặt lịch khám thú cưng"
            >
              {/* FormSubmit settings */}
              <input
                type="hidden"
                name="_subject"
                value="Yêu cầu đặt lịch khám thú cưng mới"
              />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Cảm ơn bạn đã gửi yêu cầu đặt lịch. Phòng khám sẽ liên hệ lại trong thời gian sớm nhất."
              />

              {/* Honeypot chống spam đơn giản */}
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-foreground">
                  Họ và tên
                  <input
                    className={inputStyles}
                    type="text"
                    name="Họ và tên"
                    placeholder="Nguyễn Văn A"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="text-sm font-semibold text-foreground">
                  Số điện thoại
                  <input
                    className={inputStyles}
                    type="tel"
                    name="Số điện thoại"
                    inputMode="tel"
                    placeholder="0900 000 000"
                    autoComplete="tel"
                    required
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="hidden text-sm font-semibold text-foreground sm:block">
                  Loại thú cưng
                  <select
                    className={inputStyles}
                    name="Loại thú cưng"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Chọn loại thú cưng
                    </option>
                    <option value="Chó">Chó</option>
                    <option value="Mèo">Mèo</option>
                    <option value="Khác">Khác</option>
                  </select>
                </label>

                <label className="text-sm font-semibold text-foreground">
                  Dịch vụ cần tư vấn
                  <select
                    className={inputStyles}
                    name="Dịch vụ cần tư vấn"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Chọn dịch vụ
                    </option>
                    <option value="Khám tổng quát">Khám tổng quát</option>
                    <option value="Tiêm phòng">Tiêm phòng</option>
                    <option value="Xét nghiệm">Xét nghiệm</option>
                    <option value="Phẫu thuật">Phẫu thuật</option>
                    <option value="Spa & grooming">Spa & grooming</option>
                    <option value="Lưu chuồng">Lưu chuồng</option>
                  </select>
                </label>
              </div>

              <label className="hidden text-sm font-semibold text-foreground sm:block">
                Thời gian mong muốn
                <input
                  className={inputStyles}
                  type="datetime-local"
                  name="Thời gian mong muốn"
                />
              </label>

              <label className="text-sm font-semibold text-foreground">
                Ghi chú
                <textarea
                  className={`${inputStyles} min-h-28 resize-y py-3`}
                  name="Ghi chú"
                  placeholder="Mô tả ngắn tình trạng hoặc nhu cầu của thú cưng"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Gửi yêu cầu đặt lịch
                </Button>

                <p className="text-xs leading-5 text-muted">
                  Thông tin sẽ được gửi về email quản trị của phòng khám.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
