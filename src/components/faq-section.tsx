import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  question: string
  answer: string
  value: string
}

interface FAQSectionProps {
  title: string
  items: FAQItem[]
}

export function FAQSection({ title, items }: FAQSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6 mt-8">
        <HelpCircle className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold font-heading tracking-tight">
          {title}
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-xl font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
