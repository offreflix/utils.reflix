export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de TMB - Taxa Metabólica Basal',
  description:
    'Calcule sua Taxa Metabólica Basal (TMB) de forma prática e precisa. Descubra quantas calorias seu corpo precisa diariamente.',
  url: 'https://utils.reflix.com.br/calculators/tmb-calculator',
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
  screenshot: 'https://utils.reflix.com.br/calculators/tmb-calculator',
  softwareVersion: '1.0.0',
  datePublished: '2024-05-01',
  dateModified: '2024-05-01',
}
