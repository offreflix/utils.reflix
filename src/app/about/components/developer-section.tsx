import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function DeveloperSection() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold font-heading tracking-tight mb-8">
        Quem desenvolve?
      </h2>
      <div className="flex flex-col items-center gap-4">
        <Avatar className="w-24 h-24">
          <AvatarFallback className="text-4xl bg-primary/10 text-primary font-bold">
            R
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <div className="font-bold text-xl">Reflix</div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Responsável por todo o desenvolvimento, design e evolução da
            plataforma.
          </p>
        </div>
      </div>
    </section>
  )
}
