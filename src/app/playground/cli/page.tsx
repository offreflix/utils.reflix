import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'
import { FAQSection } from '@/components/faq-section'
import { ImportantNote } from '@/components/important-note'
import { CliClient } from './cli.client'

const faqItems = [
  {
    question: 'O que é um CLI?',
    answer:
      'CLI significa "Command Line Interface" (Interface de Linha de Comando). É uma ferramenta que permite executar comandos através de texto, oferecendo controle preciso e automação.',
    value: 'item-1',
  },
  {
    question: 'Por que usar um CLI?',
    answer:
      'CLIs são mais rápidos que interfaces gráficas, permitem automação, consomem menos recursos e oferecem mais controle sobre as operações.',
    value: 'item-2',
  },
  {
    question: 'Como funciona este CLI?',
    answer:
      'Este CLI simula um terminal interativo onde você pode digitar comandos e receber respostas. Use comandos como "help", "clear", "date" e outros para explorar.',
    value: 'item-3',
  },
]

export default function CliPage() {
  return (
    <PageLayout
      title="CLI Interativo"
      description="Experimente um terminal interativo com comandos úteis"
    >
      <ArticleContent>
        <CliClient />

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            O que é um CLI?
          </h2>
          <p>
            Um <strong>CLI (Command Line Interface)</strong> é uma interface de
            usuário baseada em texto que permite executar comandos diretamente
            no computador. Diferente das interfaces gráficas (GUI), os CLIs
            oferecem controle preciso e são essenciais para desenvolvedores e
            administradores de sistemas.
          </p>
          <p>
            Esta ferramenta simula um terminal interativo onde você pode
            experimentar comandos básicos e entender como funcionam as
            interfaces de linha de comando.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Comandos disponíveis
          </h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">
                Comandos básicos:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    help
                  </code>{' '}
                  - Mostra todos os comandos disponíveis
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    clear
                  </code>{' '}
                  - Limpa o terminal
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    date
                  </code>{' '}
                  - Mostra a data e hora atual
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    echo [texto]
                  </code>{' '}
                  - Repete o texto digitado
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    whoami
                  </code>{' '}
                  - Mostra informações do usuário
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">
                Comandos de sistema:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    ls
                  </code>{' '}
                  - Lista arquivos e diretórios
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    pwd
                  </code>{' '}
                  - Mostra o diretório atual
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    uptime
                  </code>{' '}
                  - Tempo de atividade do sistema
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    memory
                  </code>{' '}
                  - Informações de memória
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">
                Comandos especiais:
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    joke
                  </code>{' '}
                  - Conta uma piada
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    quote
                  </code>{' '}
                  - Mostra uma citação inspiradora
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    weather
                  </code>{' '}
                  - Simula informações do clima
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    calc [expressão]
                  </code>{' '}
                  - Calculadora simples
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    theme [light|dark|system]
                  </code>{' '}
                  - Altera o tema da aplicação
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    terminal [light|dark|system]
                  </code>{' '}
                  - Altera o tema do terminal
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    os [windows|mac|linux]
                  </code>{' '}
                  - Altera o estilo do sistema operacional
                </li>
                <li>
                  <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    reset
                  </code>{' '}
                  - Limpa as configurações salvas
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Vantagens dos CLIs
          </h2>
          <ul className="list-disc pl-6 my-4">
            <li>
              <strong>Velocidade:</strong> Comandos são executados
              instantaneamente
            </li>
            <li>
              <strong>Automação:</strong> Scripts podem automatizar tarefas
              repetitivas
            </li>
            <li>
              <strong>Eficiência:</strong> Menos uso de recursos do sistema
            </li>
            <li>
              <strong>Precisão:</strong> Controle total sobre as operações
            </li>
            <li>
              <strong>Remoto:</strong> Acesso via SSH a servidores distantes
            </li>
          </ul>
        </section>

        <FAQSection
          title="Perguntas frequentes sobre CLI (FAQ)"
          items={faqItems}
        />

        <ImportantNote
          note="Este CLI é uma simulação educativa. Em um terminal real, os comandos teriam acesso ao sistema operacional e poderiam executar operações reais."
          lastUpdate="Maio de 2024"
        />
      </ArticleContent>
    </PageLayout>
  )
}
