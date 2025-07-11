import type { Metadata } from 'next'

const baseData = {
  title: 'Gerador de Senhas Seguras',
  description:
    'Crie senhas fortes e personalizadas com facilidade. Gere senhas seguras com letras, números e símbolos para proteger suas contas.',
  url: 'https://utils.reflix.com.br/utilities/password-generator',
  imageUrl:
    'https://utils.reflix.com.br/images/utilities/password-generator-og.jpg',
}

export const metadata: Metadata = {
  title: baseData.title,
  description: baseData.description,
  keywords: [
    'gerador de senhas',
    'senha segura',
    'criar senha',
    'senha forte',
    'segurança',
    'cybersecurity',
    'senha aleatória',
    'gerador de senha online',
    'dicas de senha',
    'proteção de conta',
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
        alt: 'Gerador de Senhas Seguras',
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
  applicationCategory: 'SecurityApplication',
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
    'Geração instantânea de senhas',
    'Configuração de tamanho (1-50 caracteres)',
    'Opções personalizáveis (maiúsculas, minúsculas, números, símbolos)',
    'Indicador de força da senha',
    'Cópia automática para área de transferência',
    'Interface responsiva e acessível',
    'FAQ integrado com dicas de segurança',
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
        name: 'Quantos caracteres devo usar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para segurança ideal, use senhas com pelo menos 12 a 16 caracteres. Quanto mais longa, melhor.',
        },
      },
      {
        '@type': 'Question',
        name: 'Posso reutilizar a mesma senha?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não. Reutilizar senhas facilita que hackers acessem várias contas caso uma delas vaze.',
        },
      },
      {
        '@type': 'Question',
        name: 'É seguro armazenar minhas senhas no navegador?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Embora prático, o ideal é usar um gerenciador de senhas dedicado, como Bitwarden, 1Password ou KeePass.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como criar uma senha forte?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use pelo menos 12 caracteres, inclua letras maiúsculas, minúsculas, números e símbolos. Evite palavras comuns ou nomes pessoais.',
        },
      },
      {
        '@type': 'Question',
        name: 'Por que usar um gerador de senhas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Geradores de senhas criam combinações aleatórias difíceis de adivinhar ou quebrar, protegendo suas contas contra ataques.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual a diferença entre senhas fracas e fortes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Senhas fracas são previsíveis, curtas ou reutilizadas. Senhas fortes são longas, aleatórias e únicas para cada conta.',
        },
      },
    ],
  },
}
