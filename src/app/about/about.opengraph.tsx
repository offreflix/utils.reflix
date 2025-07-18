import { ImageResponse } from 'next/og'

export const alt = 'Sobre o Utils Reflix'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to bottom, #ffffff, #f0f4f8)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #0070f3, #00a2ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              style={{ color: 'white' }}
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #0070f3, #00a2ff)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Utils Reflix
          </div>
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Sobre o Utils Reflix
        </div>
        <div
          style={{
            fontSize: 28,
            textAlign: 'center',
            color: '#666',
            maxWidth: '80%',
            lineHeight: 1.3,
            marginBottom: 30,
          }}
        >
          Missão, valores e tecnologia para facilitar seu dia a dia
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            display: 'flex',
            alignItems: 'center',
            gap: 30,
          }}
        >
          <div style={{ fontSize: 20, color: '#0070f3' }}>
            🟦 Acessibilidade
          </div>
          <div style={{ fontSize: 20, color: '#0070f3' }}>⚡ Praticidade</div>
          <div style={{ fontSize: 20, color: '#0070f3' }}>🔒 Confiança</div>
          <div style={{ fontSize: 20, color: '#0070f3' }}>🚀 Inovação</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
