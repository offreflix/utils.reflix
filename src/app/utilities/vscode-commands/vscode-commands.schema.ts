import { z } from 'zod'
import { COMMAND_CATEGORIES } from './vscode-commands.types'

export const formSchema = z.object({
  category: z.enum([...COMMAND_CATEGORIES, 'todos'] as const, {
    required_error: 'Por favor selecione uma categoria',
  }),
  searchTerm: z.string().optional(),
})

export type FormSchema = z.infer<typeof formSchema>
