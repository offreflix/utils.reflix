import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Utils Reflix - Ferramentas Úteis para o Dia a Dia',
    template: '%s | Utils Reflix',
  },
  description:
    'Coleção de ferramentas úteis para o dia a dia, incluindo calculadora de IMC, conversores e muito mais.',
  keywords: [
    'ferramentas',
    'utilitários',
    'calculadora IMC',
    'conversores',
    'calculadoras online',
  ],
  authors: [{ name: 'Utils Reflix' }],
  creator: 'Utils Reflix',
  publisher: 'Utils Reflix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://utils.reflix.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://utils.reflix.com.br',
    title: 'Utils Reflix - Ferramentas Úteis para o Dia a Dia',
    description:
      'Coleção de ferramentas úteis para o dia a dia, incluindo calculadora de IMC, conversores e muito mais.',
    siteName: 'Utils Reflix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utils Reflix - Ferramentas Úteis para o Dia a Dia',
    description:
      'Coleção de ferramentas úteis para o dia a dia, incluindo calculadora de IMC, conversores e muito mais.',
    creator: '@utilsreflix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  manifest: '/manifest.json',
}
