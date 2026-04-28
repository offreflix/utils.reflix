import type { Metadata } from 'next'

const baseData = {
  title: 'Calculadora de Juros Compostos | Simule seus Investimentos',
  description:
    'Calcule juros compostos de forma rápida e precisa. Simule o crescimento dos seus investimentos com aportes mensais e veja a evolução ano a ano.',
  url: 'https://utils.reflix.com.br/calculators/compound-interest-calculator',
}

export const metadata: Metadata = {
  title: baseData.title,
  description: baseData.description,
  keywords: [
    'calculadora de juros compostos',
    'juros compostos',
    'calcular juros compostos',
    'simulador de investimentos',
    'montante final',
    'aporte mensal',
    'taxa de juros',
    'rendimento',
    'investimento',
    'capitalização',
  ],
  openGraph: {
    title: baseData.title,
    description: baseData.description,
    type: 'website',
    locale: 'pt_BR',
    url: baseData.url,
    siteName: 'Utils Reflix',
  },
  twitter: {
    card: 'summary_large_image',
    title: baseData.title,
    description: baseData.description,
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
    'Cálculo de juros compostos com aporte mensal',
    'Suporte a taxa mensal e anual',
    'Tabela de evolução anual',
    'Resumo de montante, total investido e juros acumulados',
    'Interface responsiva e acessível',
  ],
  softwareVersion: '1.0.0',
  datePublished: '2025-04-28',
  dateModified: '2025-04-28',
}
