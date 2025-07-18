import { Card, CardContent } from '@/components/ui/card'
import { StatCard } from '../about.types'

export function StatsSection({ STATS_DATA }: { STATS_DATA: StatCard[] }) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold font-heading tracking-tight mb-8 text-center">
        Estatísticas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STATS_DATA.map((stat) => (
          <Card
            key={stat.label}
            className="text-center hover:shadow-lg transition-all hover:border-primary/50"
          >
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <p className="text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
