import { ImageResponse } from 'next/og'

export const alt = 'Calculadora de IMC Online'
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
              background: '#0070f3',
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
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #0070f3, #00a2ff)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            IMC
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Calculadora de IMC Online
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            color: '#666',
            maxWidth: '80%',
          }}
        >
          Calcule seu Índice de Massa Corporal e descubra seu peso ideal
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            fontSize: 24,
            color: '#0070f3',
            fontWeight: 'bold',
          }}
        >
          Utils Reflix
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
