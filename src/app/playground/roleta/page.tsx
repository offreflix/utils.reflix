import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'
import { FAQSection } from '@/components/faq-section'
import { ImportantNote } from '@/components/important-note'
import { RoletaClient } from './roleta.client'

const faqItems = [
  {
    question: 'O sorteio é realmente aleatório?',
    answer:
      'Sim. O resultado é escolhido com um gerador aleatório do navegador antes do giro começar, e todos os itens têm exatamente a mesma chance, independentemente do tamanho do texto.',
    value: 'item-1',
  },
  {
    question: 'Quantos itens posso adicionar?',
    answer:
      'De 2 a 50 itens, com até 40 caracteres cada. Itens repetidos não são permitidos, ignorando diferenças entre maiúsculas e minúsculas.',
    value: 'item-2',
  },
  {
    question: 'Meus itens ficam salvos?',
    answer:
      'Sim, os itens, o histórico e a preferência de som ficam salvos apenas no seu navegador. Nada é enviado para servidores.',
    value: 'item-3',
  },
  {
    question: 'Como remover quem já foi sorteado?',
    answer:
      'Ao final do giro, clique em "Remover da roleta" na janela do resultado. Assim o mesmo item não é sorteado novamente.',
    value: 'item-4',
  },
]

export default function RoletaPage() {
  return (
    <PageLayout
      title="Roleta de Sorteio"
      description="Crie sua roleta com os itens que quiser e deixe a sorte decidir."
    >
      <ArticleContent>
        <RoletaClient />

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Para que serve a roleta?
          </h2>
          <p>
            A roleta ajuda a decidir de forma justa e divertida: sortear quem
            paga o café, escolher onde almoçar, definir a ordem de apresentação
            ou escolher um ganhador em um sorteio entre amigos.
          </p>
        </section>

        <FAQSection
          title="Perguntas frequentes sobre a roleta (FAQ)"
          items={faqItems}
        />

        <ImportantNote
          note="Esta ferramenta é pensada para uso recreativo e informal. Não use para sorteios que exijam auditoria ou validade legal."
          lastUpdate="Novembro de 2026"
        />
      </ArticleContent>
    </PageLayout>
  )
}
