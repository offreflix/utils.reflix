import { Card, CardContent } from '@/components/ui/card'
import { TechSectionProps } from '../about.types'

export function TechSection({ TECH_CATEGORIES, TECH_ICONS }: TechSectionProps) {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-heading tracking-tight mb-4">
          Tecnologia & Arquitetura
        </h2>
        <p className="text-muted-foreground text-lg">
          Stack moderna e confiável para máxima performance
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {TECH_ICONS.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
          >
            <div className={`w-3 h-3 rounded-full bg-current ${tech.color}`} />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_CATEGORIES.map((category) => (
          <Card
            key={category.title}
            className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-start flex-col gap-4">
                <div className="flex gap-2">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
