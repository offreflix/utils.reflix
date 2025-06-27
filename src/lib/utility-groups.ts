import {
  Calculator,
  Flame,
  Home,
  KeyRound,
  Scale,
  Settings2,
} from 'lucide-react'

export const utilityGroups = [
  {
    title: 'Home',
    icon: Home,
    href: '/',
  },
  {
    title: 'Calculadoras',
    icon: Calculator,
    href: '/calculators',
    description: 'Ferramentas para cálculos diversos',
    items: [
      {
        title: 'Calculadora de IMC',
        shortTitle: 'IMC',
        description: 'Calculadora de Índice de Massa Corporal',
        href: '/calculators/imc-calculator',
        icon: Scale,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
      },
      {
        title: 'Calculadora de Taxa Metabólica Basal',
        shortTitle: 'Taxa Metabólica Basal',
        description: 'Calculadora de Calorias Diárias',
        href: '/calculators/tmb-calculator',
        icon: Flame,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
      },
    ],
  },
  {
    title: 'Utilitários',
    icon: Settings2,
    href: '/utilities',
    description: 'Ferramentas úteis para o dia a dia',
    items: [
      {
        title: 'Gerador de Senhas',
        shortTitle: 'Gerador de Senhas',
        description: 'Gerador de Senhas Seguras',
        href: '/utilities/password-generator',
        icon: KeyRound,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
      },
    ],
  },
]

export const getGroupsByType = (type: 'all' | 'calculators' | 'utilities') => {
  if (type === 'all') {
    return utilityGroups.filter(
      (group) => group.items && group.items.length > 0,
    )
  }

  if (type === 'calculators') {
    return utilityGroups.filter((group) => group.title === 'Calculadoras')
  }

  if (type === 'utilities') {
    return utilityGroups.filter((group) => group.title === 'Utilitários')
  }

  return []
}
