import { ImageResponse } from 'next/og'

export const alt = 'CLI Interativo Online'
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
          background: 'linear-gradient(to bottom, #0f0f0f, #1a1a1a)',
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
              background: '#00ff00',
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
              style={{ color: 'black' }}
            >
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #00ff00, #00cc00)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            CLI
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
            color: '#ffffff',
          }}
        >
          CLI Interativo Online
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            color: '#00ff00',
            maxWidth: '80%',
          }}
        >
          Terminal Simulator com Comandos Educativos
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            fontSize: 24,
            color: '#00ff00',
            fontWeight: 'bold',
          }}
        >
          Utils Reflix
        </div>
        <div
          style={{
            position: 'absolute',
            top: 30,
            right: 30,
            fontSize: 16,
            color: '#666',
            fontFamily: 'monospace',
          }}
        >
          $ help
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
