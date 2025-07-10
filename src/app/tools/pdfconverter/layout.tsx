import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Conversor de PDF para Texto Online | Extraia texto de PDFs',
  description:
    'Converta arquivos PDF e outros formatos de texto para texto simples de forma rápida e segura. Extraia texto de documentos PDF, TXT, MD, CSV e mais.',
  keywords: [
    'conversor PDF',
    'extrair texto PDF',
    'PDF para texto',
    'converter PDF',
    'extrair texto',
    'PDF online',
    'conversor de documentos',
    'extrair dados PDF',
    'PDF to text',
    'leitor PDF',
  ],
  openGraph: {
    title: 'Conversor de PDF para Texto Online | Extraia texto de PDFs',
    description:
      'Converta arquivos PDF e outros formatos de texto para texto simples de forma rápida e segura. Extraia texto de documentos PDF, TXT, MD, CSV e mais.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://utils.reflix.com.br/tools/pdfconverter',
    siteName: 'Utils Reflix',
    images: [
      {
        url: 'https://utils.reflix.com.br/images/tools/pdf-converter-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Conversor de PDF para Texto Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor de PDF para Texto Online | Extraia texto de PDFs',
    description:
      'Converta arquivos PDF e outros formatos de texto para texto simples de forma rápida e segura.',
    images: ['https://utils.reflix.com.br/images/tools/pdf-converter-og.jpg'],
  },
  alternates: {
    canonical: 'https://utils.reflix.com.br/tools/pdfconverter',
  },
}

export default function PdfConverterLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Conversor de PDF para Texto Online | Extraia texto de PDFs',
            description:
              'Converta arquivos PDF e outros formatos de texto para texto simples de forma rápida e segura. Extraia texto de documentos PDF, TXT, MD, CSV e mais.',
            mainEntity: {
              '@type': 'SoftwareApplication',
              name: 'Conversor de PDF para Texto',
              applicationCategory: 'ProductivityApplication',
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
                '@id': 'https://utils.reflix.com.br/tools/pdfconverter',
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
                    name: 'Meus arquivos são seguros?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Sim! Todo o processamento é feito diretamente no seu navegador. Os arquivos não são enviados para nossos servidores, garantindo total privacidade e segurança.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Qual é o tamanho máximo de arquivo?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'O limite atual é de 10MB por arquivo. Para arquivos maiores, recomendamos dividir o documento em partes menores.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Posso extrair texto de PDFs com imagens?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Apenas texto que foi inserido como texto no PDF pode ser extraído. Texto que faz parte de imagens não pode ser reconhecido automaticamente.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'A ferramenta funciona offline?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Sim! Uma vez carregada a página, a ferramenta funciona completamente offline, pois todo o processamento é feito localmente no seu navegador.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Quais formatos são suportados?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Suportamos PDF, TXT, MD, CSV, JSON, JS, TS, TSX, HTML, CSS e XML. A ferramenta é versátil e pode processar diversos tipos de arquivo de texto.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Posso copiar o texto extraído?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Sim! Use o botão "Copiar" para copiar o texto para a área de transferência, ou selecione o texto manualmente e use Ctrl+C (ou Cmd+C no Mac).',
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