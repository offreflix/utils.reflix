import { PasswordGeneratorClient } from './password-generator.client'
import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'
import { FAQSection } from '@/components/faq-section'
import { ImportantNote } from '@/components/important-note'

const faqItems = [
  {
    question: 'Quantos caracteres devo usar?',
    answer:
      'Para segurança ideal, use senhas com pelo menos 12 a 16 caracteres. Quanto mais longa, melhor.',
    value: 'item-1',
  },
  {
    question: 'Posso reutilizar a mesma senha?',
    answer:
      'Não. Reutilizar senhas facilita que hackers acessem várias contas caso uma delas vaze.',
    value: 'item-2',
  },
  {
    question: 'É seguro armazenar minhas senhas no navegador?',
    answer:
      'Embora prático, o ideal é usar um gerenciador de senhas dedicado, como Bitwarden, 1Password ou KeePass.',
    value: 'item-3',
  },
]

export default function PasswordGeneratorPage() {
  return (
    <PageLayout
      title="Gerador de Senhas Seguras"
      description="Crie senhas fortes e personalizadas com facilidade"
    >
      <ArticleContent>
        <PasswordGeneratorClient />

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

        <FAQSection
          title="Perguntas frequentes sobre senhas (FAQ)"
          items={faqItems}
        />

        <ImportantNote
          note="Esta ferramenta foi desenvolvida para fins educativos e uso pessoal. Para proteger dados sensíveis, adote boas práticas de cibersegurança e mantenha suas senhas protegidas."
          lastUpdate="Maio de 2024"
        />
      </ArticleContent>
    </PageLayout>
  )
}
