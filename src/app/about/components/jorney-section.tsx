import { Badge } from '@/components/ui/badge'

export function JourneySection() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold font-heading tracking-tight mb-6">
        Nossa Jornada
      </h2>
      <Badge
        variant="outline"
        className="text-base px-6 py-3 bg-primary/10 border-primary/30 text-primary font-semibold mb-4"
      >
        2025 — Lançamento da Plataforma
      </Badge>
      <p className="text-muted-foreground text-lg">
        Primeira versão do Utils Reflix, reunindo utilidades digitais para
        facilitar o dia a dia.
      </p>
    </section>
  )
}
