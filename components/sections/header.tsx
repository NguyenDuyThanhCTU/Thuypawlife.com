import { navigation } from '@/data/home'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3 lg:min-h-20">
        <a
          href="#trang-chu"
          className="flex shrink-0 items-center gap-2.5 font-bold text-foreground"
          aria-label="PawLife - Trang chủ"
        >
          <span className="grid size-10 place-items-center rounded-ui bg-primary text-sm text-white">
            PL
          </span>
          <span className="text-lg">PawLife</span>
        </a>

        <nav
          className="hidden items-center gap-4 lg:flex xl:gap-7"
          aria-label="Điều hướng chính"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-xs font-medium text-muted hover:text-primary xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href="#lien-he"
          size="sm"
          className="shrink-0 px-3 sm:px-4"
          aria-label="Đặt lịch khám"
        >
          <span className="sm:hidden">Đặt lịch</span>
          <span className="hidden sm:inline">Đặt lịch khám</span>
        </ButtonLink>
      </Container>
    </header>
  )
}
