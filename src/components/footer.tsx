import type React from 'react'
import Link from 'next/link'
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm w-full overflow-x-hidden py-8 md:py-12 relative z-50 mt-auto">
      <div className="container px-4 md:px-6 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  UR
                </span>
              </div>
              <h3 className="font-bold text-lg">utils.reflix</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Soluções e utilidades inovadoras para o seu dia a dia.
            </p>
            <div className="flex items-center space-x-3">
              <SocialLink
                href="https://github.com"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://twitter.com"
                icon={Twitter}
                label="Twitter"
              />
              <SocialLink
                href="https://instagram.com"
                icon={Instagram}
                label="Instagram"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={Linkedin}
                label="LinkedIn"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-sm tracking-wider uppercase text-muted-foreground">
              Recursos
            </h4>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              <FooterLink href="/about">Sobre</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/careers">Carreiras</FooterLink>
              <FooterLink href="/support">Suporte</FooterLink>
              <FooterLink href="/privacy">Privacidade</FooterLink>
              <FooterLink href="/terms">Termos</FooterLink>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-sm tracking-wider uppercase text-muted-foreground">
              Fique Atualizado
            </h4>
            <p className="text-sm text-muted-foreground">
              Inscreva-se na nossa newsletter para receber novidades e
              atualizações.
            </p>
            <form className="flex flex-col gap-2 md:group-has-data-[collapsible=offcanvas]/sidebar-wrapper:!flex-row lg:group-has-data-[collapsible=offcanvas]/sidebar-wrapper:!flex-row">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 flex-1 min-w-0 w-full md:w-auto"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full md:w-auto"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} utils.reflix. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <Link
              href="/accessibility"
              className="hover:text-foreground transition-colors"
            >
              Acessibilidade
            </Link>
            <Link
              href="/cookies"
              className="hover:text-foreground transition-colors"
            >
              Política de Cookies
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-foreground transition-colors"
            >
              Mapa do site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: typeof Github
  label: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-1"
    >
      {children}
    </Link>
  )
}
