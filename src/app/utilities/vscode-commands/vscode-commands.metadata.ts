import type { Metadata } from 'next'

const baseData = {
  title: 'Comandos VS Code | Atalhos de Teclado e Referência Completa',
  description:
    'Referência completa de comandos e atalhos de teclado do Visual Studio Code. Organizados por categoria para facilitar a navegação e produtividade.',
  url: 'https://utils.reflix.com.br/calculators/vscode-commands',
  imageUrl: 'https://utils.reflix.com.br/images/tools/vscode-commands-og.jpg',
}

export const metadata: Metadata = {
  title: baseData.title,
  description: baseData.description,
  keywords: [
    'VS Code',
    'Visual Studio Code',
    'atalhos de teclado',
    'comandos VS Code',
    'produtividade',
    'desenvolvimento',
    'IDE',
    'programação',
    'referência VS Code',
    'shortcuts',
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
        alt: 'Comandos VS Code - Referência Completa',
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
    'Referência completa de comandos VS Code',
    'Organização por categorias',
    'Busca e filtros',
    'Interface responsiva',
    'Atalhos de teclado organizados',
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
        name: 'Como usar os atalhos de teclado no VS Code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Os atalhos de teclado no VS Code podem ser usados pressionando as teclas indicadas. Por exemplo, Ctrl+B para mostrar/ocultar a barra lateral, Ctrl+Shift+P para abrir a paleta de comandos, etc. A maioria dos atalhos funciona em Windows/Linux usando Ctrl e no Mac usando Cmd.',
        },
      },
      {
        '@type': 'Question',
        name: 'Posso personalizar os atalhos de teclado no VS Code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim, você pode personalizar os atalhos de teclado no VS Code. Vá em File > Preferences > Keyboard Shortcuts (ou Ctrl+K Ctrl+S) para abrir as configurações de atalhos. Lá você pode modificar, adicionar ou remover atalhos conforme sua preferência.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quais são os atalhos mais importantes do VS Code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Os atalhos mais importantes incluem: Ctrl+P (abrir arquivo), Ctrl+Shift+P (paleta de comandos), Ctrl+B (barra lateral), Ctrl+F (buscar), Ctrl+H (substituir), F5 (debug), Ctrl+/ (comentar), Alt+↑/↓ (mover linha), e Ctrl+D (selecionar próxima ocorrência).',
        },
      },
      {
        '@type': 'Question',
        name: 'Os atalhos são diferentes no Mac?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim, no Mac você usa Cmd (⌘) em vez de Ctrl para a maioria dos atalhos. Por exemplo, Cmd+P para abrir arquivo, Cmd+Shift+P para paleta de comandos, Cmd+B para barra lateral, etc. O VS Code detecta automaticamente seu sistema operacional e mostra os atalhos corretos.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como posso ver todos os atalhos disponíveis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para ver todos os atalhos disponíveis, pressione Ctrl+K Ctrl+S (ou Cmd+K Cmd+S no Mac) para abrir as configurações de atalhos. Você também pode usar Ctrl+Shift+P e digitar "Preferences: Open Keyboard Shortcuts" para acessar a mesma tela.',
        },
      },
      {
        '@type': 'Question',
        name: 'Posso exportar meus atalhos personalizados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim, você pode exportar suas configurações de atalhos. Vá em File > Preferences > Keyboard Shortcuts, clique no ícone de engrenagem no canto superior direito e selecione "Export Keybindings". Isso criará um arquivo JSON com suas configurações que pode ser importado em outras instalações do VS Code.',
        },
      },
    ],
  },
}
