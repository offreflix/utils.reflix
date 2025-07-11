import type { Metadata } from 'next'

const baseData = {
  title: 'Calculadora de IMC Online | Calcule seu Índice de Massa Corporal',
  description:
    'Calcule seu Índice de Massa Corporal (IMC) de forma rápida e precisa. Descubra sua faixa de peso ideal e receba orientações personalizadas sobre saúde e bem-estar.',
  url: 'https://utils.reflix.com.br/calculators/imc-calculator',
  imageUrl: 'https://utils.reflix.com.br/images/tools/imc-calculator-og.jpg',
}

export const metadata: Metadata = {
  title: baseData.title,
  description: baseData.description,
  keywords: [
    'calculadora IMC',
    'índice de massa corporal',
    'calcular IMC',
    'peso ideal',
    'saúde',
    'nutrição',
    'IMC online',
    'tabela IMC',
    'classificação IMC',
    'obesidade',
    'peso saudável',
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
        alt: 'Calculadora de IMC Online',
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
    'Cálculo preciso de IMC',
    'Classificação automática do resultado',
    'Orientações personalizadas por faixa',
    'Interface responsiva e acessível',
    'FAQ integrado com perguntas frequentes',
  ],
  screenshot: baseData.url,
  softwareVersion: '1.0.0',
  datePublished: '2024-05-01',
  dateModified: '2024-05-01',
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que é um IMC ideal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Um IMC entre 18,5 e 24,9 kg/m² é considerado ideal para a maioria das pessoas adultas, independentemente do sexo. Esta faixa está associada ao menor risco de problemas de saúde relacionados ao peso.',
        },
      },
      {
        '@type': 'Question',
        name: 'IMC alto significa que estou doente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não necessariamente. O IMC é apenas um indicador e não um diagnóstico. Pessoas com IMC elevado podem ser saudáveis, assim como pessoas com IMC normal podem ter problemas de saúde. É importante consultar um médico ou nutricionista para uma avaliação completa.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como calcular meu IMC manualmente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Divida seu peso em quilos pela altura em metros ao quadrado. Exemplo: Para uma pessoa com 70kg e 1,70m de altura: 70 ÷ (1,70 × 1,70) = 70 ÷ 2,89 = 24,22 kg/m².',
        },
      },
      {
        '@type': 'Question',
        name: 'O IMC é o mesmo para homens e mulheres?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fórmula do IMC é a mesma, mas a interpretação pode variar. Mulheres tendem a ter naturalmente mais gordura corporal que homens. Alguns especialistas sugerem faixas ligeiramente diferentes, mas a OMS utiliza as mesmas classificações para ambos os sexos.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual é o IMC ideal para crianças e adolescentes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para crianças e adolescentes (2-19 anos), o IMC é calculado da mesma forma, mas interpretado diferentemente usando curvas de crescimento específicas por idade e sexo. Consulte um pediatra para a avaliação correta.',
        },
      },
      {
        '@type': 'Question',
        name: 'Posso confiar apenas no IMC para avaliar minha saúde?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não. O IMC deve ser usado como uma ferramenta inicial de avaliação, mas não como único parâmetro. Outros fatores como circunferência abdominal, histórico familiar, hábitos de vida e exames laboratoriais são essenciais para uma avaliação completa da saúde.',
        },
      },
    ],
  },
}
