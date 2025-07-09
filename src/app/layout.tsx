import { Space_Grotesk, IBM_Plex_Sans, DM_Mono } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { getAppVersion } from '@/action/version'
import { TooltipProvider } from '@/components/ui/tooltip'
import { InvisibleRoosterView } from '@/components/invisible-rooster/invisible-rooster.view'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'
import { toasterIcons } from '@/components/ui/toaster-icons'
import { metadata } from '@/lib/metadata'
import { FavoritesProvider } from '@/contexts/favorites-context'

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

export { metadata }

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
          <FavoritesProvider>
            <TooltipProvider>
              <SidebarProvider>
                <InvisibleRoosterView />

                <Sidebar version={version} />
                <SidebarInset>
                  <Header />
                  <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col items-center gap-2">
                      {children}
                      <Toaster
                        position="top-center"
                        closeButton
                        icons={toasterIcons}
                      />
                    </div>
                  </div>
                  <Footer />
                </SidebarInset>
              </SidebarProvider>
            </TooltipProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
