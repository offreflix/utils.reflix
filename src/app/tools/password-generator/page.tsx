import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PasswordGeneratorClient } from './password-generator.client'

export default function PasswordGeneratorPage() {
  return (
    <main className="prose w-full max-w-3xl my-8 space-y-8 px-8 sm:px-8 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold font-heading tracking-tight">
          Gerador de Senhas Seguras
        </h1>
        <p className="text-muted-foreground">
          Crie senhas fortes e personalizadas com facilidade
        </p>
      </div>

      <PasswordGeneratorClient />

      <article className="prose max-w-3xl">
        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            Por que usar um gerador de senhas?
          </h2>
          <p>
            Utilizar senhas seguras é essencial para proteger suas contas contra
            ataques, como força bruta e vazamentos de dados. Senhas previsíveis,
            curtas ou reutilizadas são um risco constante à sua segurança
            digital.
          </p>
          <p>
            Um gerador de senhas cria combinações aleatórias com letras, números
            e símbolos, difíceis de adivinhar ou quebrar.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Características da nossa ferramenta
          </h2>

          <ul className="list-disc pl-6 my-4">
            <li>
              Geração instantânea e automática enquanto você ajusta as opções
            </li>
            <li>
              Escolha entre letras maiúsculas, minúsculas, números e símbolos
            </li>
            <li>Defina o tamanho da senha (1 a 50 caracteres)</li>
            <li>
              Botão para copiar a senha direto para sua área de transferência
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Dicas para criar senhas fortes
          </h2>
          <ul className="list-disc pl-6 my-4">
            <li>Use pelo menos 12 caracteres</li>
            <li>Inclua letras maiúsculas, minúsculas, números e símbolos</li>
            <li>Evite palavras comuns ou nomes pessoais</li>
            <li>Não reutilize senhas entre diferentes sites</li>
            <li>Considere usar um gerenciador de senhas confiável</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6 mt-8">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold font-heading tracking-tight">
              Perguntas frequentes sobre senhas (FAQ)
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-medium">
                Quantos caracteres devo usar?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Para segurança ideal, use senhas com pelo menos 12 a 16
                caracteres. Quanto mais longa, melhor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-medium">
                Posso reutilizar a mesma senha?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Não. Reutilizar senhas facilita que hackers acessem várias
                contas caso uma delas vaze.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-medium">
                É seguro armazenar minhas senhas no navegador?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Embora prático, o ideal é usar um gerenciador de senhas
                dedicado, como Bitwarden, 1Password ou KeePass.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="border-t pt-8">
          <p className="text-sm text-neutral-600">
            <strong>Nota importante:</strong> Esta ferramenta foi desenvolvida
            para fins educativos e uso pessoal. Para proteger dados sensíveis,
            adote boas práticas de cibersegurança e mantenha suas senhas
            protegidas.
          </p>
          <p className="text-sm text-neutral-600 mt-2">
            Última atualização: Maio de 2024
          </p>
        </section>
      </article>
    </main>
  )
}
