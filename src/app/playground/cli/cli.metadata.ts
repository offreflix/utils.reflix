import type { Metadata } from 'next'

const baseData = {
  title: 'CLI Interativo Online | Terminal Simulator',
  description:
    'Experimente um terminal interativo com comandos úteis e simulação de sistema operacional. Aprenda comandos básicos de forma educativa.',
  url: 'https://utils.reflix.com.br/playground/cli',
  imageUrl: 'https://utils.reflix.com.br/images/playground/cli-og.jpg',
}

export const metadata: Metadata = {
  title: baseData.title,
  description: baseData.description,
  keywords: [
    'CLI interativo',
    'terminal simulator',
    'comandos linux',
    'terminal online',
    'simulador terminal',
    'comandos básicos',
    'CLI educacional',
    'terminal web',
    'comandos shell',
    'sistema operacional',
    'desenvolvimento',
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
        alt: 'CLI Interativo Online',
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
  applicationCategory: 'DeveloperApplication',
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
    'Terminal interativo com comandos básicos',
    'Simulação de sistema operacional (Windows, Mac, Linux)',
    'Temas personalizáveis (claro/escuro/sistema)',
    'Comandos educacionais e utilitários',
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
        name: 'O que é um CLI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CLI significa "Command Line Interface" (Interface de Linha de Comando). É uma ferramenta que permite executar comandos através de texto, oferecendo controle preciso e automação.',
        },
      },
      {
        '@type': 'Question',
        name: 'Por que usar um CLI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CLIs são mais rápidos que interfaces gráficas, permitem automação, consomem menos recursos e oferecem mais controle sobre as operações.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como funciona este CLI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Este CLI simula um terminal interativo onde você pode digitar comandos e receber respostas. Use comandos como "help", "clear", "date" e outros para explorar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quais comandos estão disponíveis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Comandos básicos: help, clear, date, echo, whoami. Comandos de sistema: ls, pwd, uptime, memory. Comandos especiais: joke, quote, weather, calc, theme, terminal, os.',
        },
      },
      {
        '@type': 'Question',
        name: 'Posso alterar o tema do terminal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim! Use o comando "terminal light", "terminal dark" ou "terminal system" para alterar o tema do terminal. Use "theme light", "theme dark" ou "theme system" para alterar o tema da aplicação.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como alterar o estilo do sistema operacional?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use o comando "os windows", "os mac" ou "os linux" para alterar o estilo dos botões de controle do terminal. As configurações são salvas automaticamente.',
        },
      },
    ],
  },
}
