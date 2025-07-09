import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TmbCalculatorClient } from './tmb-calculator.client'
import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'
import { FAQSection } from '@/components/faq-section'
import { ImportantNote } from '@/components/important-note'

const faqItems = [
  {
    question: 'A TMB muda com o tempo?',
    answer:
      'Sim. A TMB diminui com a idade e pode variar conforme mudanças de peso, massa muscular ou condição de saúde.',
    value: 'item-1',
  },
  {
    question: 'A TMB sozinha determina quantas calorias devo comer?',
    answer:
      'Não. É necessário multiplicar a TMB pelo seu nível de atividade para encontrar seu gasto calórico total (GET).',
    value: 'item-2',
  },
  {
    question: 'TMB serve para emagrecer?',
    answer:
      'Sim. Saber sua TMB ajuda a definir déficits calóricos de forma segura para perda de peso.',
    value: 'item-3',
  },
]

export default async function TmbCalculatorPage() {
  return (
    <PageLayout
      title="Calculadora de TMB"
      description="Calcule sua Taxa Metabólica Basal (TMB) de forma prática e precisa"
    >
      <ArticleContent>
        <TmbCalculatorClient />

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

        <FAQSection
          title="Perguntas frequentes sobre TMB (FAQ)"
          items={faqItems}
        />

        <ImportantNote
          note="Esta calculadora de TMB e as informações fornecidas são apenas para fins educativos. Consulte um profissional para orientações personalizadas."
          lastUpdate="Maio de 2024"
        />
      </ArticleContent>
    </PageLayout>
  )
}
