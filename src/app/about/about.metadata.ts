import type { Metadata } from 'next'

const baseData = {
  title: 'Sobre o Utils Reflix | Plataforma de Utilidades Online',
  description:
    'Conheça a missão, valores e tecnologia do Utils Reflix. Plataforma moderna de utilidades online, gratuita, confiável e acessível para facilitar o seu dia a dia.',
  url: 'https://utils.reflix.com.br/about',
  imageUrl: 'https://utils.reflix.com.br/images/about-og.jpg',
}

export const metadata: Metadata = {
  title: baseData.title,
  description: baseData.description,
  keywords: [
    'sobre utils reflix',
    'quem somos',
    'missão',
    'valores',
    'tecnologia',
    'stack',
    'plataforma digital',
    'ferramentas online',
    'calculadoras gratuitas',
    'utilitários web',
    'sobre nós',
    'company about',
    'nossa história',
  ],
  openGraph: {
    title: baseData.title,
    description: baseData.description,
    type: 'website',
    locale: 'pt_BR',
    url: baseData.url,
    siteName: 'Utils Reflix',
    images: [
      {
        url: baseData.imageUrl,
        width: 1200,
        height: 630,
        alt: 'Sobre o Utils Reflix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: baseData.title,
    description: baseData.description,
    images: [baseData.imageUrl],
  },
  alternates: {
    canonical: baseData.url,
  },
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: baseData.title,
  description: baseData.description,
  url: baseData.url,
  mainEntity: {
    '@type': 'Organization',
    name: 'Utils Reflix',
    description:
      'Plataforma moderna de utilidades online, gratuita, confiável e acessível para facilitar o seu dia a dia.',
    url: 'https://utils.reflix.com.br',
    logo: 'https://utils.reflix.com.br/images/logo.png',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Reflix',
    },
    sameAs: [
      'https://github.com/utils-reflix',
      'https://twitter.com/utils_reflix',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contato@utils.reflix.com.br',
      availableLanguage: 'Portuguese',
    },
  },
  author: {
    '@type': 'Person',
    name: 'Reflix',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Utils Reflix',
  },
  datePublished: '2024-05-01',
  dateModified: '2024-06-01',
}
