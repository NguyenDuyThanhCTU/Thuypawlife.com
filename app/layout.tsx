import './globals.css'
import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-be-vietnam-pro',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Phòng khám thú y Sài Gòn | Chăm sóc thú cưng tận tâm',
    template: '%s | Thú Y PawLife',
  },
  description:
    'Phòng khám thú y tại Sài Gòn hỗ trợ khám tổng quát, tiêm phòng, xét nghiệm, phẫu thuật, spa thú cưng và tư vấn chăm sóc sau điều trị.',
  keywords: [
    'phòng khám thú y Sài Gòn',
    'khám thú cưng',
    'tiêm phòng chó mèo',
    'spa thú cưng',
    'chăm sóc thú cưng',
  ],
  applicationName: 'PawLife',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Phòng khám thú y Sài Gòn | Chăm sóc thú cưng tận tâm',
    description:
      'Khám tổng quát, tiêm phòng, xét nghiệm, phẫu thuật, spa thú cưng và tư vấn chăm sóc sau điều trị.',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'PawLife',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phòng khám thú y Sài Gòn | PawLife',
    description:
      'Chăm sóc thú cưng tận tâm với quy trình rõ ràng tại Sài Gòn.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} mobile-sticky-safe`}>
        {children}
      </body>
    </html>
  )
}
