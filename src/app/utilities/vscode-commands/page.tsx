import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { VscodeCommandsClient } from './vscode-commands.client'
import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'
import { FAQSection } from '@/components/faq-section'
import { ImportantNote } from '@/components/important-note'

const faqItems = [
  {
    question: 'Como usar os atalhos de teclado no VS Code?',
    answer:
      'Os atalhos de teclado no VS Code podem ser usados pressionando as teclas indicadas. Por exemplo, Ctrl+B para mostrar/ocultar a barra lateral, Ctrl+Shift+P para abrir a paleta de comandos, etc. A maioria dos atalhos funciona em Windows/Linux usando Ctrl e no Mac usando Cmd.',
    value: 'item-1',
  },
  {
    question: 'Posso personalizar os atalhos de teclado no VS Code?',
    answer:
      'Sim, você pode personalizar os atalhos de teclado no VS Code. Vá em File > Preferences > Keyboard Shortcuts (ou Ctrl+K Ctrl+S) para abrir as configurações de atalhos. Lá você pode modificar, adicionar ou remover atalhos conforme sua preferência.',
    value: 'item-2',
  },
  {
    question: 'Quais são os atalhos mais importantes do VS Code?',
    answer:
      'Os atalhos mais importantes incluem: Ctrl+P (abrir arquivo), Ctrl+Shift+P (paleta de comandos), Ctrl+B (barra lateral), Ctrl+F (buscar), Ctrl+H (substituir), F5 (debug), Ctrl+/ (comentar), Alt+↑/↓ (mover linha), e Ctrl+D (selecionar próxima ocorrência).',
    value: 'item-3',
  },
  {
    question: 'Os atalhos são diferentes no Mac?',
    answer:
      'Sim, no Mac você usa Cmd (⌘) em vez de Ctrl para a maioria dos atalhos. Por exemplo, Cmd+P para abrir arquivo, Cmd+Shift+P para paleta de comandos, Cmd+B para barra lateral, etc. O VS Code detecta automaticamente seu sistema operacional e mostra os atalhos corretos.',
    value: 'item-4',
  },
  {
    question: 'Como posso ver todos os atalhos disponíveis?',
    answer:
      'Para ver todos os atalhos disponíveis, pressione Ctrl+K Ctrl+S (ou Cmd+K Cmd+S no Mac) para abrir as configurações de atalhos. Você também pode usar Ctrl+Shift+P e digitar "Preferences: Open Keyboard Shortcuts" para acessar a mesma tela.',
    value: 'item-5',
  },
  {
    question: 'Posso exportar meus atalhos personalizados?',
    answer:
      'Sim, você pode exportar suas configurações de atalhos. Vá em File > Preferences > Keyboard Shortcuts, clique no ícone de engrenagem no canto superior direito e selecione "Export Keybindings". Isso criará um arquivo JSON com suas configurações que pode ser importado em outras instalações do VS Code.',
    value: 'item-6',
  },
]

export default async function VscodeCommandsPage() {
  return (
    <PageLayout
      title="Comandos VS Code"
      description="Referência completa de comandos e atalhos de teclado do Visual Studio Code"
    >
      <ArticleContent>
        <VscodeCommandsClient />

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            O que é o Visual Studio Code?
          </h2>
          <p>
            O Visual Studio Code (VS Code) é um editor de código fonte gratuito
            e de código aberto desenvolvido pela Microsoft. Ele é conhecido por
            sua velocidade, extensibilidade e rica funcionalidade, sendo uma das
            ferramentas mais populares para desenvolvimento de software.
          </p>
          <p>
            O VS Code oferece suporte a uma ampla variedade de linguagens de
            programação, possui um sistema de extensões robusto e é altamente
            personalizável. Uma das características mais valorizadas pelos
            desenvolvedores é o sistema de atalhos de teclado que permite
            navegar e editar código de forma eficiente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Por que usar atalhos de teclado?
          </h2>
          <p>
            Os atalhos de teclado são essenciais para aumentar a produtividade
            no desenvolvimento. Eles permitem:
          </p>

          <ul className="list-disc pl-6 my-4">
            <li>
              <strong>Velocidade:</strong> Executar ações rapidamente sem
              precisar usar o mouse
            </li>
            <li>
              <strong>Eficiência:</strong> Manter o foco no código sem
              interrupções
            </li>
            <li>
              <strong>Precisão:</strong> Reduzir erros e aumentar a consistência
            </li>
            <li>
              <strong>Ergonomia:</strong> Reduzir o uso do mouse e prevenir
              problemas de saúde
            </li>
            <li>
              <strong>Profissionalismo:</strong> Demonstrar experiência e
              conhecimento da ferramenta
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Categorias de Comandos
          </h2>
          <p>
            Os comandos do VS Code estão organizados em categorias para
            facilitar a navegação e o aprendizado:
          </p>

          <div className="border rounded-md mt-6">
            <Table>
              <TableCaption className="mb-4">
                Categorias de comandos VS Code
              </TableCaption>

              <TableHeader className="bg-neutral-100 dark:bg-neutral-900">
                <TableRow>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Exemplos de Comandos</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Navegação</TableCell>
                  <TableCell>
                    Comandos para navegar entre arquivos, abas e seções do
                    editor
                  </TableCell>
                  <TableCell>Ctrl+B, Ctrl+Shift+P, Ctrl+T</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Edição</TableCell>
                  <TableCell>
                    Comandos para editar código, copiar, colar e manipular texto
                  </TableCell>
                  <TableCell>Ctrl+C, Ctrl+V, Alt+↑/↓</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Busca</TableCell>
                  <TableCell>
                    Comandos para pesquisar e substituir texto no editor
                  </TableCell>
                  <TableCell>Ctrl+F, Ctrl+H, Ctrl+Shift+F</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Debug</TableCell>
                  <TableCell>
                    Comandos para depuração e execução de código
                  </TableCell>
                  <TableCell>F5, F9, F10, F11</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Git</TableCell>
                  <TableCell>
                    Comandos para controle de versão e operações Git
                  </TableCell>
                  <TableCell>Ctrl+Shift+G, Ctrl+Enter</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Dicas para Aprender Atalhos
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">
            Comece pelos básicos
          </h3>
          <ul className="list-disc pl-6 my-4">
            <li>
              Foque primeiro nos atalhos de navegação (Ctrl+P, Ctrl+Shift+P)
            </li>
            <li>
              Pratique os comandos de edição básicos (Ctrl+C, Ctrl+V, Ctrl+Z)
            </li>
            <li>Aprenda os atalhos de busca (Ctrl+F, Ctrl+H)</li>
            <li>
              Use a paleta de comandos (Ctrl+Shift+P) para descobrir novos
              atalhos
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            Use a prática deliberada
          </h3>
          <ul className="list-disc pl-6 my-4">
            <li>
              Force-se a usar atalhos mesmo quando o mouse parece mais rápido
            </li>
            <li>Pratique um novo atalho por vez até dominá-lo</li>
            <li>Use a referência de atalhos (Ctrl+K Ctrl+S) regularmente</li>
            <li>
              Configure atalhos personalizados para ações que você repete muito
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            Personalize conforme necessário
          </h3>
          <ul className="list-disc pl-6 my-4">
            <li>Modifique atalhos que conflitam com seus hábitos</li>
            <li>Crie atalhos para extensões que você usa frequentemente</li>
            <li>Configure atalhos para tarefas específicas do seu workflow</li>
            <li>Exporte suas configurações para usar em outras máquinas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Diferenças entre Sistemas Operacionais
          </h2>
          <p>
            O VS Code adapta automaticamente os atalhos para diferentes sistemas
            operacionais:
          </p>

          <div className="border rounded-md mt-6">
            <Table>
              <TableCaption className="mb-4">
                Mapeamento de teclas por sistema operacional
              </TableCaption>

              <TableHeader className="bg-neutral-100 dark:bg-neutral-900">
                <TableRow>
                  <TableHead>Função</TableHead>
                  <TableHead>Windows/Linux</TableHead>
                  <TableHead>macOS</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>Modificador principal</TableCell>
                  <TableCell>Ctrl</TableCell>
                  <TableCell>Cmd (⌘)</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Modificador secundário</TableCell>
                  <TableCell>Alt</TableCell>
                  <TableCell>Option (⌥)</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Modificador de função</TableCell>
                  <TableCell>Shift</TableCell>
                  <TableCell>Shift</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Exemplo: Abrir arquivo</TableCell>
                  <TableCell>Ctrl+P</TableCell>
                  <TableCell>Cmd+P</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Exemplo: Paleta de comandos</TableCell>
                  <TableCell>Ctrl+Shift+P</TableCell>
                  <TableCell>Cmd+Shift+P</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <FAQSection
          title="Perguntas frequentes sobre comandos VS Code (FAQ)"
          items={faqItems}
        />

        <ImportantNote
          note="Esta referência de comandos VS Code é baseada na versão mais recente do editor. Alguns atalhos podem variar dependendo da versão, extensões instaladas ou configurações personalizadas. Para verificar os atalhos específicos da sua instalação, use Ctrl+K Ctrl+S (ou Cmd+K Cmd+S no Mac) para abrir as configurações de atalhos."
          lastUpdate="Maio de 2024"
        />
      </ArticleContent>
    </PageLayout>
  )
}
