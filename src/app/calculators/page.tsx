import { getGroupsByType } from '@/lib/utility-groups'
import { UtilityCards } from '@/components/utility-cards'
import { PageLayout } from '@/components/page-layout'

export default function Calculators() {
  const calculatorGroups = getGroupsByType('calculators')

  return (
    <PageLayout
      title="Calculadoras"
      description="Ferramentas para cálculos diversos e precisos"
    >
      <UtilityCards groups={calculatorGroups} />
    </PageLayout>
  )
}
