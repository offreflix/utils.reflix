import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ImcCalculatorClient } from './imc-calculator.client'
import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'
import { FAQSection } from '@/components/faq-section'
import { ImportantNote } from '@/components/important-note'

const faqItems = [
  {
    question: 'O que é um IMC ideal?',
    answer:
      'Um IMC entre 18,5 e 24,9 kg/m² é considerado ideal para a maioria das pessoas adultas, independentemente do sexo. Esta faixa está associada ao menor risco de problemas de saúde relacionados ao peso.',
    value: 'item-1',
  },
  {
    question: 'IMC alto significa que estou doente?',
    answer:
      'Não necessariamente. O IMC é apenas um indicador e não um diagnóstico. Pessoas com IMC elevado podem ser saudáveis, assim como pessoas com IMC normal podem ter problemas de saúde. É importante consultar um médico ou nutricionista para uma avaliação completa.',
    value: 'item-2',
  },
  {
    question: 'Como calcular meu IMC manualmente?',
    answer:
      'Divida seu peso em quilos pela altura em metros ao quadrado. Exemplo: Para uma pessoa com 70kg e 1,70m de altura: 70 ÷ (1,70 × 1,70) = 70 ÷ 2,89 = 24,22 kg/m².',
    value: 'item-3',
  },
  {
    question: 'O IMC é o mesmo para homens e mulheres?',
    answer:
      'A fórmula do IMC é a mesma, mas a interpretação pode variar. Mulheres tendem a ter naturalmente mais gordura corporal que homens. Alguns especialistas sugerem faixas ligeiramente diferentes, mas a OMS utiliza as mesmas classificações para ambos os sexos.',
    value: 'item-4',
  },
  {
    question: 'Qual é o IMC ideal para crianças e adolescentes?',
    answer:
      'Para crianças e adolescentes (2-19 anos), o IMC é calculado da mesma forma, mas interpretado diferentemente usando curvas de crescimento específicas por idade e sexo. Consulte um pediatra para a avaliação correta.',
    value: 'item-5',
  },
  {
    question: 'Posso confiar apenas no IMC para avaliar minha saúde?',
    answer:
      'Não. O IMC deve ser usado como uma ferramenta inicial de avaliação, mas não como único parâmetro. Outros fatores como circunferência abdominal, histórico familiar, hábitos de vida e exames laboratoriais são essenciais para uma avaliação completa da saúde.',
    value: 'item-6',
  },
]

export default async function ImcCalculatorPage() {
  return (
    <PageLayout
      title="Calculadora de IMC"
      description="Calcule seu Índice de Massa Corporal (IMC) de forma rápida e precisa"
    >
      <ArticleContent>
        <ImcCalculatorClient />

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            O que é IMC?
          </h2>
          <p>
            O IMC (Índice de Massa Corporal) é um cálculo que avalia se uma
            pessoa está dentro do peso ideal, comparando o peso e a altura. A
            fórmula é simples: <strong>IMC = peso / (altura x altura)</strong>,
            onde o peso é em quilos e a altura em metros.
          </p>
          <p>
            Desenvolvido pelo matemático Lambert Quételet no século XIX, o IMC é
            hoje uma das ferramentas mais utilizadas por profissionais de saúde
            para avaliação inicial do estado nutricional de um indivíduo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Como interpretar o resultado do IMC?
          </h2>
          <p>
            O resultado do IMC se encaixa em faixas que indicam se você está
            abaixo, dentro ou acima do peso considerado saudável para sua
            altura. Confira a tabela de classificação:
          </p>

          <div className="border rounded-md mt-6">
            <Table>
              <TableCaption className="mb-4">
                Fonte:{' '}
                <a
                  href="https://www.who.int/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  Organização Mundial da Saúde (OMS)
                </a>
              </TableCaption>

              <TableHeader className="bg-neutral-100 dark:bg-neutral-900">
                <TableRow>
                  <TableHead>IMC (kg/m²)</TableHead>
                  <TableHead>Classificação </TableHead>
                  <TableHead>Risco de comorbidades</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>Menor que 18,5</TableCell>
                  <TableCell className="text-blue-600 dark:text-blue-400">
                    Abaixo do peso
                  </TableCell>
                  <TableCell>
                    Baixo (mas com riscos de outros problemas)
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>18,5 – 24,9</TableCell>
                  <TableCell className="text-green-600 dark:text-green-400">
                    Peso ideal
                  </TableCell>
                  <TableCell>Normal</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>25 – 29,9</TableCell>
                  <TableCell className="text-yellow-600 dark:text-yellow-400">
                    Sobrepeso
                  </TableCell>
                  <TableCell>Aumentado</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>30 – 34,9</TableCell>
                  <TableCell className="text-orange-600 dark:text-orange-400">
                    Obesidade Grau I
                  </TableCell>
                  <TableCell>Moderado</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>35 – 39,9</TableCell>
                  <TableCell className="text-red-600 dark:text-red-400">
                    Obesidade Grau II
                  </TableCell>
                  <TableCell>Grave</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Maior ou igual a 40</TableCell>
                  <TableCell className="text-red-700 dark:text-red-300">
                    Obesidade Grau III
                  </TableCell>
                  <TableCell>Muito grave</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            O IMC é confiável?
          </h2>
          <p>
            O IMC é uma referência útil para avaliações populacionais, mas tem
            limitações importantes quando aplicado individualmente. Ele{' '}
            <strong>
              não considera idade, sexo, percentual de gordura ou massa muscular
            </strong>
            . Por exemplo:
          </p>

          <ul className="list-disc pl-6 my-4">
            <li>
              Atletas e pessoas com muita massa muscular podem ter IMC elevado
              sem excesso de gordura
            </li>
            <li>
              Idosos podem ter IMC normal mesmo com baixa massa muscular e
              excesso de gordura
            </li>
            <li>
              Gestantes têm necessidades específicas e o IMC não se aplica da
              mesma forma
            </li>
            <li>
              Crianças e adolescentes devem usar tabelas específicas para sua
              idade
            </li>
          </ul>

          <p>
            Por isso, o ideal é que o IMC seja usado como uma ferramenta
            inicial, complementada por outras avaliações como medida de
            circunferência abdominal, percentual de gordura corporal e avaliação
            clínica por um profissional de saúde.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Por que é importante manter o IMC saudável?
          </h2>
          <p>
            Manter o IMC na faixa considerada saudável (entre 18,5 e 24,9) está
            associado a diversos benefícios:
          </p>

          <ul className="list-disc pl-6 my-4">
            <li>
              <strong>Redução de riscos:</strong> Menor probabilidade de
              desenvolver doenças como diabetes tipo 2, hipertensão, doenças
              cardiovasculares e alguns tipos de câncer
            </li>
            <li>
              <strong>Melhor qualidade de vida:</strong> Mais disposição,
              energia e capacidade funcional no dia a dia
            </li>
            <li>
              <strong>Saúde articular:</strong> Menor sobrecarga nas
              articulações, reduzindo problemas como artrite e dores nas costas
            </li>
            <li>
              <strong>Benefícios psicológicos:</strong> Contribui para
              autoestima, bem-estar e saúde mental
            </li>
            <li>
              <strong>Melhor resposta imunológica:</strong> Sistema imunológico
              mais eficiente
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Dicas para manter um peso saudável
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">
            Alimentação equilibrada
          </h3>
          <ul className="list-disc pl-6 my-4">
            <li>Priorize alimentos in natura ou minimamente processados</li>
            <li>
              Consuma pelo menos 5 porções de frutas e vegetais diariamente
            </li>
            <li>Prefira grãos integrais e proteínas magras</li>
            <li>
              Reduza o consumo de alimentos ultraprocessados, açúcares e
              gorduras saturadas
            </li>
            <li>Mantenha-se bem hidratado, bebendo água regularmente</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            Atividade física regular
          </h3>
          <ul className="list-disc pl-6 my-4">
            <li>
              Pratique pelo menos 150 minutos de atividade física moderada por
              semana
            </li>
            <li>
              Combine exercícios aeróbicos (caminhada, corrida, natação) com
              treino de força
            </li>
            <li>
              Encontre atividades que você goste para manter a consistência
            </li>
            <li>
              Reduza o tempo sedentário, levantando-se e movimentando-se a cada
              hora
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Hábitos saudáveis</h3>
          <ul className="list-disc pl-6 my-4">
            <li>Durma de 7 a 9 horas por noite</li>
            <li>
              Gerencie o estresse com técnicas de relaxamento, meditação ou
              hobbies
            </li>
            <li>Evite o consumo excessivo de álcool</li>
            <li>Não fume</li>
            <li>Faça refeições regulares, evitando pular refeições</li>
          </ul>
        </section>

        <FAQSection
          title="Perguntas frequentes sobre IMC (FAQ)"
          items={faqItems}
        />

        <ImportantNote
          note="Esta calculadora de IMC e as informações fornecidas são apenas para fins educativos e informativos. Não substituem a consulta com profissionais de saúde qualificados. Consulte sempre seu médico ou nutricionista para avaliações personalizadas e orientações específicas para sua saúde."
          lastUpdate="Maio de 2024"
        />
      </ArticleContent>
    </PageLayout>
  )
}
