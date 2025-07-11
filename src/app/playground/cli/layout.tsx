import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'CLI Interativo Online | Terminal Simulator',
  description:
    'Experimente um terminal interativo com comandos úteis e simulação de sistema operacional. Aprenda comandos básicos de forma educativa.',
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
    title: 'CLI Interativo Online | Terminal Simulator',
    description:
      'Experimente um terminal interativo com comandos úteis e simulação de sistema operacional. Aprenda comandos básicos de forma educativa.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://utils.reflix.com.br/playground/cli',
    siteName: 'Utils Reflix',
    images: [
      {
        url: 'https://utils.reflix.com.br/images/playground/cli-og.jpg',
        width: 1200,
        height: 630,
        alt: 'CLI Interativo Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLI Interativo Online | Terminal Simulator',
    description:
      'Experimente um terminal interativo com comandos úteis e simulação de sistema operacional. Aprenda comandos básicos de forma educativa.',
    images: ['https://utils.reflix.com.br/images/playground/cli-og.jpg'],
  },
  alternates: {
    canonical: 'https://utils.reflix.com.br/playground/cli',
  },
}

export default function CliLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'CLI Interativo Online | Terminal Simulator',
            description:
              'Experimente um terminal interativo com comandos úteis e simulação de sistema operacional. Aprenda comandos básicos de forma educativa.',
            mainEntity: {
              '@type': 'SoftwareApplication',
              name: 'CLI Interativo',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'BRL',
              },
            },
            mainContentOfPage: {
              '@type': 'WebPageElement',
              isPartOf: {
                '@id': 'https://utils.reflix.com.br/playground/cli',
              },
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', 'h3'],
            },
            hasPart: [
              {
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
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
