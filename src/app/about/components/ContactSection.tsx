import { Button } from '@/components/ui/button'

export function ContactSection() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold font-heading tracking-tight mb-6">
        Contato
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        Tem sugestões, dúvidas ou quer contribuir? Fale conosco por e-mail ou
        pelas redes sociais. O Utils Reflix é aberto à comunidade!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" className="gap-2">
          <a href="mailto:contato@utils.reflix.com.br">📧 Enviar Email</a>
        </Button>
        <Button variant="outline" asChild size="lg">
          <a
            href="https://github.com/utils-reflix"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Button>
        <Button variant="outline" asChild size="lg">
          <a
            href="https://twitter.com/utils_reflix"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </Button>
      </div>
    </section>
  )
}
