import type { Metadata } from 'next'

const baseData = {
  title: 'Calculadora de TMB - Taxa Metabólica Basal',
  description:
    'Calcule sua Taxa Metabólica Basal (TMB) de forma prática e precisa. Descubra quantas calorias seu corpo precisa diariamente.',
  url: 'https://utils.reflix.com.br/calculators/tmb-calculator',
  imageUrl:
    'https://utils.reflix.com.br/images/calculators/tmb-calculator-og.jpg',
}

export const metadata: Metadata = {
  title: baseData.title,
  description: baseData.description,
  keywords: [
    'calculadora TMB',
    'taxa metabólica basal',
    'calcular TMB',
    'calorias diárias',
    'metabolismo',
    'nutrição',
    'TMB online',
    'fórmula Mifflin-St Jeor',
    'necessidades calóricas',
    'atividade física',
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
        alt: 'Calculadora de TMB',
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
  '@type': 'WebApplication',
  name: baseData.title,
  description: baseData.description,
  url: baseData.url,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
  },
  author: {
    '@type': 'Organization',
    name: 'Utils Reflix',
  },
  provider: {
    '@type': 'Organization',
    name: 'Utils Reflix',
  },
  featureList: [
    'Cálculo de TMB usando fórmula de Mifflin-St Jeor',
    'Diferentes níveis de atividade física',
    'Cálculo de necessidades calóricas totais',
    'Interface intuitiva e responsiva',
  ],
  screenshot: baseData.url,
  softwareVersion: '1.0.0',
  datePublished: '2024-05-01',
  dateModified: '2024-05-01',
}
