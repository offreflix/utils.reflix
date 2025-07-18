import { Sparkles } from 'lucide-react'
import { ValueCard } from './value-card'
import { ValueCardProps } from '../about.types'

export function MissionSection({
  VALUES_DATA,
}: {
  VALUES_DATA: ValueCardProps[]
}) {
  return (
    <section className="py-12">
      <div className="flex gap-3 mb-6">
        <div className="p-1.5 bg-primary/10 rounded-full">
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
        </div>
        <h2 className="text-3xl font-bold font-heading tracking-tight">
          Missão & Valores
        </h2>
      </div>

      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        Tornar ferramentas digitais avançadas acessíveis a qualquer pessoa,
        promovendo autonomia, praticidade e confiança em cada utilitário
        oferecido. Buscamos democratizar o acesso à tecnologia, eliminando
        barreiras e tornando o cotidiano mais simples.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {VALUES_DATA.map((value, index) => (
          <ValueCard key={value.title} {...value} index={index} />
        ))}
      </div>
    </section>
  )
}
