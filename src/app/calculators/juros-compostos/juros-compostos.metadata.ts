import type { Metadata } from 'next'

const baseData = {
  title: 'Calculadora de Juros Compostos - Simulador Online Grátis',
  description:
    'Calcule juros compostos com aportes mensais de forma simples e precisa. Veja o montante final, total investido e total em juros com gráfico e tabela.',
  url: 'https://utils.reflix.com.br/calculators/juros-compostos',
  imageUrl:
    'https://utils.reflix.com.br/images/calculators/juros-compostos-og.jpg',
}

export const metadata: Metadata = {
  title: baseData.title,
  description: baseData.description,
  keywords: [
    'calculadora de juros compostos',
    'juros compostos',
    'simulador de investimento',
    'calcular juros compostos',
    'juros sobre juros',
    'aporte mensal',
    'rendimento de investimento',
    'montante final',
    'juros compostos online',
    'calculadora financeira',
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
        alt: 'Calculadora de Juros Compostos',
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
  applicationCategory: 'FinanceApplication',
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
    'Cálculo de juros compostos com aportes mensais',
    'Taxa de juros mensal ou anual',
    'Período em meses ou anos',
    'Gráfico de evolução do investimento',
    'Tabela detalhada período a período',
  ],
  softwareVersion: '1.0.0',
  datePublished: '2026-02-18',
  dateModified: '2026-02-18',
}
