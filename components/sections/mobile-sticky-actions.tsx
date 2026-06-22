import { ButtonLink } from '@/components/ui/button'

export function MobileStickyActions() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border/80 bg-surface/95 px-2 pt-2 shadow-[0_-8px_24px_-18px_rgb(15_23_42/0.35)] backdrop-blur md:hidden"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
      aria-label="Liên hệ nhanh"
    >
      <div className="mx-auto flex max-w-md gap-2">
        <ButtonLink
          href="tel:0900000000"
          size="sm"
          className="min-w-0 flex-1 px-2 text-xs"
          aria-label="Gọi ngay 0900 000 000"
        >
          Gọi ngay
        </ButtonLink>
        <ButtonLink
          href="#"
          variant="secondary"
          size="sm"
          className="min-w-0 flex-1 px-2 text-xs"
          aria-label="Mở Zalo, liên kết đang cập nhật"
        >
          Zalo
        </ButtonLink>
        <ButtonLink
          href="#"
          variant="outline"
          size="sm"
          className="min-w-0 flex-1 px-2 text-xs"
          aria-label="Xem chỉ đường, liên kết đang cập nhật"
        >
          Chỉ đường
        </ButtonLink>
      </div>
    </nav>
  )
}
