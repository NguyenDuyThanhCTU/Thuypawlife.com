import { ImageResponse } from 'next/server'

export const runtime = 'edge'
export const alt = 'Phòng khám thú y PawLife tại Sài Gòn'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#f0f9ff',
          color: '#0f172a',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '760px',
          }}
        >
          <div
            style={{
              display: 'flex',
              color: '#0369a1',
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '28px',
            }}
          >
            PHÒNG KHÁM THÚ Y TẠI SÀI GÒN
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '64px',
              lineHeight: 1.12,
              fontWeight: 700,
              letterSpacing: '-2px',
            }}
          >
            Chăm sóc thú cưng tận tâm
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '28px',
              color: '#475569',
              fontSize: '28px',
            }}
          >
            Khám bệnh · Tiêm phòng · Xét nghiệm · Tư vấn sau khám
          </div>
        </div>

        <div
          style={{
            width: '250px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '64px',
            background: '#0284c7',
            color: '#ffffff',
            fontSize: '68px',
            fontWeight: 700,
            boxShadow: '0 28px 70px rgba(2, 132, 199, 0.22)',
          }}
        >
          PL
        </div>
      </div>
    ),
    size,
  )
}
