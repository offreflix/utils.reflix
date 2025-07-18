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
import { AlertDescription, AlertTitle } from '@/components/alert'
import { Alert } from '@/components/alert'

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
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            Fórmulas para calcular a TMB
          </h2>
          <p>As duas fórmulas mais utilizadas para calcular a TMB são:</p>
          <div className="space-y-6 mt-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Fórmula de Harris-Benedict (1919)
              </h3>
              <p className="mb-3">
                Desenvolvida pelos cientistas James Arthur Harris e Francis Gano
                Benedict, esta foi a primeira fórmula amplamente aceita para
                calcular a TMB. Baseada em estudos com indivíduos saudáveis,
                considera:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <strong>Peso corporal</strong> - massa total do corpo
                </li>
                <li>
                  <strong>Altura</strong> - estatura em centímetros
                </li>
                <li>
                  <strong>Idade</strong> - anos de vida
                </li>
                <li>
                  <strong>Sexo biológico</strong> - diferenças metabólicas entre
                  homens e mulheres
                </li>
              </ul>
              <div className="border-l-2 border-primary bg-primary/10 p-4 rounded-md">
                <p className="font-mono text-sm">
                  <strong>Homens:</strong> TMB = 66 + (13.7 × peso) + (5 ×
                  altura) - (6.8 × idade)
                </p>
                <p className="font-mono text-sm mt-2">
                  <strong>Mulheres:</strong> TMB = 655 + (9.6 × peso) + (1.8 ×
                  altura) - (4.7 × idade)
                </p>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                <strong>Limitações:</strong> Pode superestimar a TMB em pessoas
                obesas e subestimar em pessoas muito magras ou musculosas.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Fórmula de Mifflin-St Jeor (1990)
              </h3>
              <p className="mb-3">
                Desenvolvida por MD Mifflin e ST Jeor, esta fórmula é
                considerada mais precisa e atual. Foi criada com base em estudos
                mais recentes e é amplamente utilizada por nutricionistas e
                profissionais de saúde:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <strong>Mais precisa</strong> para diferentes faixas de peso
                </li>
                <li>
                  <strong>Melhor para pessoas obesas</strong> - não superestima
                  tanto
                </li>
                <li>
                  <strong>Mais adequada para atletas</strong> - considera melhor
                  a massa muscular
                </li>
                <li>
                  <strong>Padrão atual</strong> - recomendada pela ADA (American
                  Dietetic Association)
                </li>
              </ul>
              <div className="border-l-2 border-primary bg-primary/10 p-4 rounded-md">
                <p className="font-mono text-sm">
                  <strong>Homens:</strong> TMB = (10 × peso) + (6.25 × altura) -
                  (5 × idade) + 5
                </p>
                <p className="font-mono text-sm mt-2">
                  <strong>Mulheres:</strong> TMB = (10 × peso) + (6.25 × altura)
                  - (5 × idade) - 161
                </p>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                <strong>Vantagens:</strong> Mais precisa para a população atual,
                melhor para diferentes composições corporais e faixas etárias.
              </p>
            </div>
          </div>

          <Alert variant="info" className="mt-6">
            <AlertTitle>
              💡 Por que usamos a fórmula Mifflin-St Jeor?
            </AlertTitle>
            <AlertDescription>
              Nossa calculadora utiliza a fórmula de Mifflin-St Jeor por ser
              mais precisa e atual. Ela oferece resultados mais confiáveis para
              a maioria das pessoas, especialmente aquelas com diferentes
              composições corporais.
            </AlertDescription>
          </Alert>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
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
