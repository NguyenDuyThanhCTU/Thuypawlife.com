import { navigation } from '@/data/home'
import { Container } from '@/components/ui/container'

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-3 lg:py-16">
        <div>
          <div className="flex items-center gap-2.5 font-bold">
            <span className="grid size-10 place-items-center rounded-ui bg-primary text-sm">
              PL
            </span>
            <span className="text-lg">PawLife</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Phòng khám thú y hiện đại tại Sài Gòn, đồng hành cùng gia đình trong
            hành trình chăm sóc sức khỏe thú cưng.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Liên kết nhanh</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/65">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Thông tin liên hệ</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>
              Hotline:{' '}
              <a href="tel:0900000000" className="font-semibold text-white hover:text-cyan-soft">
                0900 000 000
              </a>
            </li>
            <li>Sài Gòn, Việt Nam</li>
            <li>08:00 - 20:00 mỗi ngày</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-sm text-white/55">
          © 2026 PawLife. Giao diện demo phòng khám thú y.
        </Container>
      </div>
    </footer>
  )
}
