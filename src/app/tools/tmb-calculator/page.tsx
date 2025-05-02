import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { TmbCalculatorClient } from './tmb-calculator.client'

export default async function TmbCalculatorPage() {
  return (
    <main className="prose w-full max-w-3xl my-8 space-y-8 px-8 sm:px-8 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold font-heading tracking-tight">
          Calculadora de TMB
        </h1>
        <p className="text-muted-foreground">
          Calcule sua Taxa Metabólica Basal (TMB) de forma prática e precisa
        </p>
      </div>

      <TmbCalculatorClient />

      <article className="prose max-w-3xl">
        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            O que é TMB?
          </h2>
          <p>
            A <strong>Taxa Metabólica Basal (TMB)</strong> representa a
            quantidade de calorias que seu corpo precisa para manter suas
            funções vitais em repouso completo, como respiração, batimentos
            cardíacos e temperatura corporal.
          </p>
          <p>
            Ela é influenciada por fatores como sexo, idade, peso e altura.
            Saber sua TMB é essencial para entender quantas calorias seu corpo
            precisa diariamente, especialmente em planos de dieta ou treinos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Fórmulas para calcular a TMB
          </h2>
          <p>As duas fórmulas mais utilizadas para calcular a TMB são:</p>
          <ul className="list-disc pl-6 my-4">
            <li>
              <strong>Harris-Benedict:</strong> clássica, leva em conta peso,
              altura, idade e sexo.
            </li>
            <li>
              <strong>Mifflin-St Jeor:</strong> mais atual e precisa, usada por
              nutricionistas.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Como interpretar sua TMB?
          </h2>
          <p>
            A TMB indica o número de calorias que seu corpo consome em repouso.
            Para saber seu gasto total de energia, é preciso multiplicar esse
            valor pelo seu nível de atividade física (fator de atividade). Veja
            a tabela:
          </p>

          <div className="border rounded-md mt-6">
            <Table>
              <TableCaption className="mb-4">
                Fonte:{' '}
                <a
                  href="https://www.ncbi.nlm.nih.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  National Center for Biotechnology Information (NCBI)
                </a>
              </TableCaption>

              <TableHeader className="bg-neutral-100 dark:bg-neutral-900">
                <TableRow>
                  <TableHead>Nível de Atividade</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Fator</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>Sedentário</TableCell>
                  <TableCell>Sem exercícios ou atividade mínima</TableCell>
                  <TableCell>1.2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Levemente ativo</TableCell>
                  <TableCell>Exercício leve 1–3 dias/semana</TableCell>
                  <TableCell>1.375</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Moderadamente ativo</TableCell>
                  <TableCell>Exercício moderado 3–5 dias/semana</TableCell>
                  <TableCell>1.55</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Altamente ativo</TableCell>
                  <TableCell>Exercício pesado 6–7 dias/semana</TableCell>
                  <TableCell>1.725</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Extremamente ativo</TableCell>
                  <TableCell>Treinamento intenso + trabalho físico</TableCell>
                  <TableCell>1.9</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6 mt-8">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold font-heading tracking-tight">
              Perguntas frequentes sobre TMB (FAQ)
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-medium">
                A TMB muda com o tempo?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Sim. A TMB diminui com a idade e pode variar conforme mudanças
                de peso, massa muscular ou condição de saúde.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-medium">
                A TMB sozinha determina quantas calorias devo comer?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Não. É necessário multiplicar a TMB pelo seu nível de atividade
                para encontrar seu gasto calórico total (GET).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-medium">
                TMB serve para emagrecer?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Sim. Saber sua TMB ajuda a definir déficits calóricos de forma
                segura para perda de peso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="border-t pt-8">
          <p className="text-sm text-neutral-600">
            <strong>Nota importante:</strong> Esta calculadora de TMB e as
            informações fornecidas são apenas para fins educativos. Consulte um
            profissional para orientações personalizadas.
          </p>
          <p className="text-sm text-neutral-600 mt-2">
            Última atualização: Maio de 2024
          </p>
        </section>
      </article>
    </main>
  )
}
