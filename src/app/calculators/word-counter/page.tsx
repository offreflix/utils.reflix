import { WordCounterClient } from './word-counter.client'
import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'
import { FAQSection } from '@/components/faq-section'
import { ImportantNote } from '@/components/important-note'

const faqItems = [
  {
    question: 'O contador diferencia maiúsculas de minúsculas?',
    answer:
      'Não, a contagem de palavras e caracteres é feita independentemente de letras maiúsculas ou minúsculas.',
    value: 'item-1',
  },
  {
    question: 'Espaços contam como caracteres?',
    answer:
      'Sim, a contagem de caracteres inclui espaços. Também mostramos a contagem sem espaços.',
    value: 'item-2',
  },
  {
    question: 'Que tipos de texto posso colar?',
    answer:
      'Você pode colar qualquer texto simples, como redações, artigos, mensagens, códigos, etc.',
    value: 'item-3',
  },
  {
    question: 'Existe limite de tamanho?',
    answer:
      'Não há limite rígido, mas textos muito grandes podem ser truncados pelo navegador.',
    value: 'item-4',
  },
  {
    question: 'A ferramenta funciona offline?',
    answer:
      'Sim, após o primeiro acesso, a contagem é feita totalmente no seu navegador.',
    value: 'item-5',
  },
]

export default function WordCounterPage() {
  return (
    <PageLayout
      title="Contador de Palavras e Caracteres"
      description="Conte palavras e caracteres de um texto de forma rápida e fácil."
    >
      <ArticleContent>
        <WordCounterClient />

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            O que faz este contador?
          </h2>
          <p>
            O Contador de Palavras e Caracteres permite que você descubra
            rapidamente quantas palavras e caracteres existem em qualquer texto.
            É útil para estudantes, redatores, programadores e qualquer pessoa
            que precise respeitar limites de texto em provas, redes sociais ou
            formulários.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Como funciona a contagem?
          </h2>
          <p>
            A ferramenta conta palavras separadas por espaços, quebras de linha
            ou pontuação. Caracteres são todos os símbolos digitados, incluindo
            letras, números, sinais e espaços. Também mostramos a contagem sem
            espaços para facilitar seu controle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Dicas para otimizar seu texto
          </h2>
          <ul className="list-disc pl-6 my-4">
            <li>Revise frases longas e que podem ser simplificadas</li>
            <li>Evite repetições desnecessárias de palavras</li>
            <li>Use parágrafos curtos para facilitar a leitura</li>
            <li>
              Se atente a limites de caracteres em redes sociais e formulários
            </li>
            <li>Faça uso de sinônimos para enriquecer o texto</li>
          </ul>
        </section>

        <FAQSection
          title="Perguntas frequentes sobre o contador (FAQ)"
          items={faqItems}
        />

        <ImportantNote
          note="Esta ferramenta é apenas para fins informativos e não substitui revisões profissionais de texto. Sempre revise seu conteúdo antes de enviar para contextos importantes."
          lastUpdate="Maio de 2024"
        />
      </ArticleContent>
    </PageLayout>
  )
}
