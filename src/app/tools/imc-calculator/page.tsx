import { ImcCalculatorClient } from './imc-calculator.client'

export default async function ImcCalculatorPage() {
  return (
    <main className="prose max-w-3xl mx-auto my-8">
      <h1 className="text-4xl font-bold font-heading tracking-tight">
        Calculadora de IMC
      </h1>
      <p className="text-muted-foreground">
        Calcule seu Índice de Massa Corporal (IMC) de forma rápida e precisa
      </p>

      <ImcCalculatorClient />

      <article className="prose max-w-3xl mx-auto my-8">
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">O que é IMC?</h2>
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
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Como interpretar o resultado do IMC?
          </h2>
          <p>
            O resultado do IMC se encaixa em faixas que indicam se você está
            abaixo, dentro ou acima do peso considerado saudável para sua
            altura. Confira a tabela de classificação:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse">
              <caption className="sr-only">
                Classificação do IMC segundo a OMS
              </caption>
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">IMC (kg/m²)</th>
                  <th className="border px-4 py-2 text-left">Classificação</th>
                  <th className="border px-4 py-2 text-left">
                    Risco de comorbidades
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Menor que 18,5</td>
                  <td className="border px-4 py-2">Abaixo do peso</td>
                  <td className="border px-4 py-2">
                    Baixo (mas com riscos de outros problemas)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">18,5 – 24,9</td>
                  <td className="border px-4 py-2">Peso ideal</td>
                  <td className="border px-4 py-2">Normal</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">25 – 29,9</td>
                  <td className="border px-4 py-2">Sobrepeso</td>
                  <td className="border px-4 py-2">Aumentado</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">30 – 34,9</td>
                  <td className="border px-4 py-2">Obesidade grau I</td>
                  <td className="border px-4 py-2">Moderado</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">35 – 39,9</td>
                  <td className="border px-4 py-2">Obesidade grau II</td>
                  <td className="border px-4 py-2">Grave</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Maior ou igual a 40</td>
                  <td className="border px-4 py-2">Obesidade grau III</td>
                  <td className="border px-4 py-2">Muito grave</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <em>Fonte: Organização Mundial da Saúde (OMS)</em>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
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
          <h2 className="text-2xl font-semibold mt-8 mb-4">
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
          <h2 className="text-2xl font-semibold mt-8 mb-4">
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

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Perguntas frequentes sobre IMC (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mt-6 mb-2">
                O que é um IMC ideal?
              </h3>
              <p>
                Um IMC entre 18,5 e 24,9 kg/m² é considerado ideal para a
                maioria das pessoas adultas, independentemente do sexo. Esta
                faixa está associada ao menor risco de problemas de saúde
                relacionados ao peso.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mt-6 mb-2">
                IMC alto significa que estou doente?
              </h3>
              <p>
                Não necessariamente. O IMC é apenas um indicador e não um
                diagnóstico. Pessoas com IMC elevado podem ser saudáveis, assim
                como pessoas com IMC normal podem ter problemas de saúde. É
                importante consultar um médico ou nutricionista para uma
                avaliação completa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mt-6 mb-2">
                Como calcular meu IMC manualmente?
              </h3>
              <p>
                Divida seu peso em quilos pela altura em metros ao quadrado.
                Exemplo: Para uma pessoa com 70kg e 1,70m de altura: 70 ÷ (1,70
                × 1,70) = 70 ÷ 2,89 = 24,22 kg/m².
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mt-6 mb-2">
                O IMC é o mesmo para homens e mulheres?
              </h3>
              <p>
                A fórmula do IMC é a mesma, mas a interpretação pode variar.
                Mulheres tendem a ter naturalmente mais gordura corporal que
                homens. Alguns especialistas sugerem faixas ligeiramente
                diferentes, mas a OMS utiliza as mesmas classificações para
                ambos os sexos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mt-6 mb-2">
                Qual é o IMC ideal para crianças e adolescentes?
              </h3>
              <p>
                Para crianças e adolescentes (2-19 anos), o IMC é calculado da
                mesma forma, mas interpretado diferentemente usando curvas de
                crescimento específicas por idade e sexo. Consulte um pediatra
                para a avaliação correta.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mt-6 mb-2">
                Posso confiar apenas no IMC para avaliar minha saúde?
              </h3>
              <p>
                Não. O IMC deve ser usado como uma ferramenta inicial de
                avaliação, mas não como único parâmetro. Outros fatores como
                circunferência abdominal, histórico familiar, hábitos de vida e
                exames laboratoriais são essenciais para uma avaliação completa
                da saúde.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 border-t pt-8">
          <p className="text-sm text-gray-600">
            <strong>Nota importante:</strong> Esta calculadora de IMC e as
            informações fornecidas são apenas para fins educativos e
            informativos. Não substituem a consulta com profissionais de saúde
            qualificados. Consulte sempre seu médico ou nutricionista para
            avaliações personalizadas e orientações específicas para sua saúde.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Última atualização: Maio de 2024
          </p>
        </section>
      </article>
    </main>
  )
}
