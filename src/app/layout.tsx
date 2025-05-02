import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Sans, DM_Mono } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { getAppVersion } from '@/action/version'
import { TooltipProvider } from '@/components/ui/tooltip'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: {
    default: 'Utils Reflix - Ferramentas Úteis para o Dia a Dia',
    template: '%s | Utils Reflix',
  },
  description:
    'Coleção de ferramentas úteis para o dia a dia, incluindo calculadora de IMC, conversores e muito mais.',
  keywords: [
    'ferramentas',
    'utilitários',
    'calculadora IMC',
    'conversores',
    'calculadoras online',
  ],
  authors: [{ name: 'Utils Reflix' }],
  creator: 'Utils Reflix',
  publisher: 'Utils Reflix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://utils.reflix.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://utils.reflix.com.br',
    title: 'Utils Reflix - Ferramentas Úteis para o Dia a Dia',
    description:
      'Coleção de ferramentas úteis para o dia a dia, incluindo calculadora de IMC, conversores e muito mais.',
    siteName: 'Utils Reflix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utils Reflix - Ferramentas Úteis para o Dia a Dia',
    description:
      'Coleção de ferramentas úteis para o dia a dia, incluindo calculadora de IMC, conversores e muito mais.',
    creator: '@utilsreflix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  manifest: '/manifest.json',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const version = await getAppVersion()

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`
            ${spaceGrotesk.variable}
            ${ibmPlexSans.variable}
            ${dmMono.variable}
            antialiased
            font-sans
          `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SidebarProvider>
              <Sidebar version={version} />
              <SidebarInset>
                <Header />
                <div className="flex flex-1 flex-col">
                  <div className="@container/main flex flex-1 flex-col items-center gap-2">
                    {children}
                  </div>
                </div>
              </SidebarInset>
            </SidebarProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
