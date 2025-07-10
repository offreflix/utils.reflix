'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PdfConverterClient } from './pdf-converter.client'
import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function PdfConverterPage() {
  return (
    <main className="prose w-full max-w-3xl my-8 space-y-8 px-8 sm:px-8 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold font-heading tracking-tight">
          Conversor de PDF para Texto
        </h1>
        <p className="text-muted-foreground">
          Faça upload de arquivos PDF ou texto, extraia o conteúdo e use IA para gerar resumos, markdown formatado e análises detalhadas
        </p>
      </div>

      <PdfConverterClient />

      <article className="prose max-w-3xl">
        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            Conversor de PDF com IA
          </h2>
          <p>
            Nossa ferramenta vai além da simples extração de texto. Com recursos de Inteligência Artificial,
            você pode transformar documentos PDF em conteúdo estruturado e insights valiosos:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">📝 Resumos Inteligentes</h3>
              <p className="text-sm text-neutral-600">
                Gere resumos concisos e bem estruturados que capturam os pontos principais do documento.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">📄 Markdown Formatado</h3>
              <p className="text-sm text-neutral-600">
                Converta automaticamente o conteúdo em markdown bem estruturado com títulos, listas e formatação.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">🧠 Análise Completa</h3>
              <p className="text-sm text-neutral-600">
                Obtenha insights detalhados, pontos-chave e tópicos identificados automaticamente.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
            O que é um conversor de PDF para texto?
          </h2>
          <p>
            Um conversor de PDF para texto é uma ferramenta que extrai o conteúdo textual de arquivos PDF,
            permitindo que você copie, edite e utilize o texto de documentos que originalmente estavam em
            formato PDF. Esta ferramenta é especialmente útil quando você precisa:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Copiar trechos de documentos PDF para outros aplicativos</li>
            <li>Fazer buscas em documentos PDF</li>
            <li>Converter documentos para formatos editáveis</li>
            <li>Extrair dados de relatórios e formulários</li>
            <li>Processar conteúdo de livros digitais</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Formatos suportados
          </h2>
          <p>
            Nossa ferramenta suporta diversos formatos de arquivo, não apenas PDFs. Confira a lista completa:
          </p>

          <div className="border rounded-md mt-6">
            <Table>
              <TableCaption className="mb-4">
                Formatos de arquivo suportados pelo conversor
              </TableCaption>

              <TableHeader className="bg-neutral-100 dark:bg-neutral-900">
                <TableRow>
                  <TableHead>Formato</TableHead>
                  <TableHead>Extensão</TableHead>
                  <TableHead>Descrição</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>PDF</TableCell>
                  <TableCell>.pdf</TableCell>
                  <TableCell>Documentos em formato PDF</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Texto Simples</TableCell>
                  <TableCell>.txt</TableCell>
                  <TableCell>Arquivos de texto simples</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Markdown</TableCell>
                  <TableCell>.md</TableCell>
                  <TableCell>Documentos em formato Markdown</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>CSV</TableCell>
                  <TableCell>.csv</TableCell>
                  <TableCell>Dados separados por vírgula</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>JSON</TableCell>
                  <TableCell>.json</TableCell>
                  <TableCell>Dados em formato JSON</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>JavaScript</TableCell>
                  <TableCell>.js</TableCell>
                  <TableCell>Código JavaScript</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>TypeScript</TableCell>
                  <TableCell>.ts, .tsx</TableCell>
                  <TableCell>Código TypeScript/React</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>HTML</TableCell>
                  <TableCell>.html</TableCell>
                  <TableCell>Páginas web em HTML</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>CSS</TableCell>
                  <TableCell>.css</TableCell>
                  <TableCell>Folhas de estilo CSS</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>XML</TableCell>
                  <TableCell>.xml</TableCell>
                  <TableCell>Dados em formato XML</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Como funciona a extração de texto?
          </h2>
          <p>
            O processo de extração de texto varia dependendo do tipo de arquivo:
          </p>

          <div className="space-y-4 mt-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">Para arquivos PDF:</h3>
              <p className="text-sm text-neutral-600">
                Utilizamos a biblioteca PDF.js para analisar a estrutura do documento e extrair
                o texto de cada página. O processo preserva a formatação básica e a ordem do texto.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg">Para arquivos de texto:</h3>
              <p className="text-sm text-neutral-600">
                Utilizamos o FileReader API do navegador para ler o conteúdo diretamente,
                mantendo toda a formatação original do arquivo.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Limitações e considerações
          </h2>
          <p>
            É importante estar ciente das limitações da extração de texto:
          </p>

          <ul className="list-disc pl-6 my-4">
            <li>
              <strong>PDFs com imagens:</strong> Texto em imagens não pode ser extraído automaticamente
            </li>
            <li>
              <strong>PDFs protegidos:</strong> Arquivos com senha não podem ser processados
            </li>
            <li>
              <strong>Formatação complexa:</strong> Tabelas e layouts complexos podem perder a estrutura original
            </li>
            <li>
              <strong>Tamanho do arquivo:</strong> Arquivos muito grandes podem demorar mais para processar
            </li>
            <li>
              <strong>Caracteres especiais:</strong> Alguns caracteres podem não ser exibidos corretamente
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Dicas para melhor extração
          </h2>
          <p>
            Para obter melhores resultados na extração de texto:
          </p>

          <ul className="list-disc pl-6 my-4">
            <li>
              <strong>Use PDFs de texto:</strong> Prefira PDFs que foram criados a partir de texto
              (não digitalizados)
            </li>
            <li>
              <strong>Verifique a qualidade:</strong> PDFs de baixa qualidade podem ter problemas na extração
            </li>
            <li>
              <strong>Arquivos menores:</strong> Arquivos menores processam mais rapidamente
            </li>
            <li>
              <strong>Revisão manual:</strong> Sempre revise o texto extraído para garantir precisão
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading tracking-tight">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Meus arquivos são seguros?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Todo o processamento é feito diretamente no seu navegador. Os arquivos não são
                enviados para nossos servidores, garantindo total privacidade e segurança.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Qual é o tamanho máximo de arquivo?
              </AccordionTrigger>
              <AccordionContent>
                O limite atual é de 10MB por arquivo. Para arquivos maiores, recomendamos dividir
                o documento em partes menores.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Posso extrair texto de PDFs com imagens?
              </AccordionTrigger>
              <AccordionContent>
                Apenas texto que foi inserido como texto no PDF pode ser extraído. Texto que faz
                parte de imagens não pode ser reconhecido automaticamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                A ferramenta funciona offline?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Uma vez carregada a página, a ferramenta funciona completamente offline,
                pois todo o processamento é feito localmente no seu navegador.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Posso salvar o texto extraído?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Use o botão "Copiar" para copiar o texto para a área de transferência,
                ou selecione o texto manualmente e use Ctrl+C (ou Cmd+C no Mac).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </article>
    </main>
  )
}