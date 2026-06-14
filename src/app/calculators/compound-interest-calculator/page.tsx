import { CompoundInterestClient } from './compound-interest-calculator.client'
import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'
import { FAQSection } from '@/components/faq-section'
import { ImportantNote } from '@/components/important-note'

const faqItems = [
  {
    question: 'O que são juros compostos?',
    answer:
      'Juros compostos são juros calculados sobre o capital inicial mais os juros acumulados de períodos anteriores. Ou seja, você ganha juros sobre juros, o que gera um crescimento exponencial ao longo do tempo.',
    value: 'item-1',
  },
  {
    question: 'Qual a diferença entre juros simples e juros compostos?',
    answer:
      'Nos juros simples, os juros são sempre calculados sobre o capital inicial. Nos juros compostos, os juros são incorporados ao capital e passam a render também. Por isso, os juros compostos crescem de forma exponencial, enquanto os simples crescem de forma linear.',
    value: 'item-2',
  },
  {
    question: 'O que é aporte mensal?',
    answer:
      'Aporte mensal é um valor fixo que você aplica todo mês além do capital inicial. Fazer aportes regulares aumenta significativamente o montante final, pois cada contribuição também passa a render juros compostos.',
    value: 'item-3',
  },
  {
    question: 'Como converter taxa mensal em anual?',
    answer:
      'Para converter taxa mensal em anual, use a fórmula: (1 + taxa mensal)^12 - 1. Por exemplo, uma taxa de 1% ao mês equivale a (1,01)^12 - 1 ≈ 12,68% ao ano. Nossa calculadora faz essa conversão automaticamente.',
    value: 'item-4',
  },
  {
    question: 'O que é montante final?',
    answer:
      'O montante final é o valor total que você terá ao final do período, somando o capital inicial, todos os aportes mensais e os juros acumulados. É o resultado do poder dos juros compostos ao longo do tempo.',
    value: 'item-5',
  },
  {
    question: 'Qual a fórmula dos juros compostos com aportes?',
    answer:
      'M = P × (1 + r)^n + PMT × ((1 + r)^n - 1) / r — onde M é o montante, P é o capital inicial, r é a taxa mensal, n é o número de meses e PMT é o aporte mensal.',
    value: 'item-6',
  },
]

export default function CompoundInterestPage() {
  return (
    <PageLayout
      title="Calculadora de Juros Compostos"
      description="Simule o crescimento dos seus investimentos com juros compostos e aportes mensais"
    >
      <ArticleContent>
        <CompoundInterestClient />

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            O que são juros compostos?
          </h2>
          <p>
            Juros compostos são chamados de{' '}
            <strong>&quot;a oitava maravilha do mundo&quot;</strong>, frase
            atribuída a Albert Einstein. A lógica é simples: os juros de cada
            período se somam ao capital e passam a render juros também no
            período seguinte. Esse efeito cria um crescimento exponencial ao
            longo do tempo.
          </p>
          <p>
            A fórmula básica é: <strong>M = P × (1 + r)^n</strong>, onde{' '}
            <strong>M</strong> é o montante final, <strong>P</strong> é o
            capital inicial, <strong>r</strong> é a taxa de juros por período e{' '}
            <strong>n</strong> é o número de períodos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Por que fazer aportes mensais?
          </h2>
          <p>
            A consistência nos aportes mensais é um dos maiores aliados do
            investidor. Cada valor aplicado mensalmente começa a render juros
            compostos imediatamente, acelerando muito o crescimento do
            patrimônio. Veja um exemplo:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>
              Capital inicial de R$ 1.000 com taxa de 1% a.m. por 10 anos
              resulta em aproximadamente{' '}
              <strong>R$ 3.300</strong>
            </li>
            <li>
              O mesmo cenário com aportes de R$ 500/mês resulta em
              aproximadamente <strong>R$ 116.000</strong>
            </li>
          </ul>
          <p>
            A diferença é enorme: o aporte mensal constante multiplica o
            resultado final por cerca de 35 vezes nesse exemplo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Taxa mensal vs. taxa anual
          </h2>
          <p>
            As taxas de juros podem ser expressas de formas diferentes dependendo
            do produto financeiro. Nossa calculadora aceita ambos os formatos e
            converte automaticamente:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>
              <strong>Taxa mensal (% a.m.):</strong> Comum em investimentos de
              renda fixa, CDBs, LCIs e LCAs. Use quando a instituição financeira
              informa a rentabilidade mensal.
            </li>
            <li>
              <strong>Taxa anual (% a.a.):</strong> Utilizada na Selic, IPCA e
              em muitos fundos de investimento. A calculadora converte
              corretamente para mensal usando juros compostos.
            </li>
          </ul>
        </section>

        <FAQSection
          title="Perguntas frequentes sobre juros compostos (FAQ)"
          items={faqItems}
        />

        <ImportantNote
          note="Esta calculadora é uma ferramenta educativa e de simulação. Os valores calculados são estimativas baseadas em taxas fixas e não consideram inflação, impostos (como IR sobre rendimentos), taxas administrativas ou variações de mercado. Consulte sempre um assessor financeiro antes de tomar decisões de investimento."
          lastUpdate="Abril de 2025"
        />
      </ArticleContent>
    </PageLayout>
  )
}
