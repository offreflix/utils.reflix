import { JurosCompostosClient } from './juros-compostos.client'
import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'
import { FAQSection } from '@/components/faq-section'
import { ImportantNote } from '@/components/important-note'

const faqItems = [
  {
    question: 'O que são juros compostos?',
    answer:
      'Juros compostos são os chamados "juros sobre juros". A cada período, os juros são calculados não só sobre o capital inicial, mas também sobre os juros já acumulados. Isso cria um crescimento exponencial ao longo do tempo.',
    value: 'item-1',
  },
  {
    question: 'Qual a diferença entre taxa mensal e anual?',
    answer:
      'A taxa anual representa o rendimento em 12 meses. Para converter para mensal, usamos a fórmula: i_mensal = (1 + i_anual)^(1/12) - 1. Por exemplo, 12% ao ano equivale a aproximadamente 0,949% ao mês (e não simplesmente 1%).',
    value: 'item-2',
  },
  {
    question: 'O que é aporte mensal?',
    answer:
      'Aporte mensal é o valor que você investe regularmente a cada mês, além do capital inicial. Quanto maior o aporte mensal, maior será o montante acumulado no final do período.',
    value: 'item-3',
  },
  {
    question: 'Qual é a fórmula dos juros compostos?',
    answer:
      'A fórmula base é M = C × (1 + i)^t, onde M é o montante final, C é o capital inicial, i é a taxa de juros e t é o tempo. Com aportes mensais, o cálculo é feito mês a mês: a cada período o saldo cresce pela taxa e recebe o novo aporte.',
    value: 'item-4',
  },
  {
    question: 'Onde os juros compostos são usados?',
    answer:
      'Os juros compostos estão presentes em investimentos de renda fixa (CDB, Tesouro Direto, CRI, CRA), poupança, e também em dívidas como empréstimos e financiamentos. Por isso é importante entender como funcionam tanto para investir melhor quanto para evitar dívidas crescentes.',
    value: 'item-5',
  },
]

export default function JurosCompostosPage() {
  return (
    <PageLayout
      title="Calculadora de Juros Compostos"
      description="Simule o crescimento do seu investimento com juros compostos e aportes mensais"
    >
      <ArticleContent>
        <JurosCompostosClient />

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            O que são juros compostos?
          </h2>
          <p>
            Os <strong>juros compostos</strong> são conhecidos como{' '}
            <strong>juros sobre juros</strong>: a cada período, os juros são
            calculados sobre o montante total acumulado — capital inicial mais
            os juros já gerados. Isso produz um crescimento exponencial que se
            torna cada vez mais poderoso ao longo do tempo.
          </p>
          <p className="mt-3">
            Como Albert Einstein dizia:{' '}
            <em>"juros compostos são a oitava maravilha do mundo"</em>. Quem
            entende os juros compostos, ganha com eles. Quem não entende, paga
            por eles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            A fórmula dos juros compostos
          </h2>
          <p>A fórmula básica dos juros compostos é:</p>
          <div className="border-l-2 border-primary bg-primary/10 p-4 rounded-md mt-4">
            <p className="font-mono text-sm font-semibold">M = C × (1 + i)^t</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <strong>M</strong> — montante final acumulado
              </li>
              <li>
                <strong>C</strong> — capital inicial investido
              </li>
              <li>
                <strong>i</strong> — taxa de juros (no mesmo período que t)
              </li>
              <li>
                <strong>t</strong> — tempo de aplicação
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Com aportes mensais, o cálculo é feito iterativamente: a cada mês,
            o saldo é multiplicado pela taxa e somado ao novo aporte. A taxa e
            o período devem estar na mesma unidade — se a taxa for anual,
            converta para mensal antes de calcular.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            Juros simples vs. juros compostos
          </h2>
          <p>
            A principal diferença é que os{' '}
            <strong>juros simples</strong> incidem apenas sobre o capital
            inicial — crescem em linha reta. Já os{' '}
            <strong>juros compostos</strong> incidem sobre o montante total
            acumulado — crescem de forma exponencial.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Juros Simples</h3>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                <li>Incidem só sobre o capital inicial</li>
                <li>Crescimento linear (reta)</li>
                <li>Juros iguais a cada período</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 border-primary/30 bg-primary/5">
              <h3 className="font-semibold mb-2">Juros Compostos</h3>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                <li>Incidem sobre o montante total</li>
                <li>Crescimento exponencial (curva)</li>
                <li>Juros crescentes a cada período</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm">
            <strong>Exemplo:</strong> R$&nbsp;5.000 investidos a 1% ao mês por
            12 meses: com juros simples você teria R$&nbsp;5.600; com juros
            compostos, R$&nbsp;5.634,13. No longo prazo a diferença é enorme —
            em 30 anos seriam R$&nbsp;23.000 vs R$&nbsp;179.748.
          </p>
        </section>

        <FAQSection
          title="Perguntas frequentes sobre juros compostos (FAQ)"
          items={faqItems}
        />

        <ImportantNote
          note="Esta calculadora é para fins educativos e de simulação. Os resultados não constituem recomendação de investimento. Consulte um profissional financeiro antes de tomar decisões de investimento."
          lastUpdate="Fevereiro de 2026"
        />
      </ArticleContent>
    </PageLayout>
  )
}
