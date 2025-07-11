import { Metadata } from 'next'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Terminal, Code, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Playground - Utils Reflix',
  description: 'Experimente ferramentas interativas e projetos experimentais',
  keywords: [
    'playground',
    'experimentos',
    'ferramentas interativas',
    'cli',
    'terminal',
  ],
  openGraph: {
    title: 'Playground - Utils Reflix',
    description: 'Experimente ferramentas interativas e projetos experimentais',
    type: 'website',
  },
}

const tools = [
  {
    title: 'CLI Interativo',
    description:
      'Terminal virtual com comandos interativos, temas configuráveis e simulação de diferentes sistemas operacionais',
    href: '/playground/cli',
    icon: Terminal,
    features: [
      'Comandos interativos',
      'Temas configuráveis',
      'Simulação de OS',
      'Persistência de configurações',
    ],
  },
  // Futuras ferramentas podem ser adicionadas aqui
]

export default function PlaygroundPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Playground</h1>
        <p className="text-lg text-muted-foreground">
          Experimente ferramentas interativas e projetos experimentais. Aqui
          você encontra demonstrações criativas e ferramentas que exploram novas
          possibilidades.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.href} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <tool.icon className="h-6 w-6 text-primary" />
                <CardTitle>{tool.title}</CardTitle>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {tool.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={tool.href}>
                    <Zap className="h-4 w-4 mr-2" />
                    Experimentar
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Sobre o Playground</h2>
        <p className="text-muted-foreground mb-4">
          O playground é um espaço para experimentos e demonstrações criativas.
          Aqui você encontra ferramentas que exploram conceitos interessantes e
          oferecem experiências interativas únicas.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Code className="h-4 w-4" />
          <span>
            Novas ferramentas serão adicionadas conforme desenvolvidas
          </span>
        </div>
      </div>
    </div>
  )
}
