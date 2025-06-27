import { getGroupsByType } from '@/lib/utility-groups'
import { UtilityCards } from '@/components/utility-cards'
import { PageLayout } from '@/components/page-layout'

export default function Utilities() {
  const utilityGroups = getGroupsByType('utilities')

  return (
    <PageLayout
      title="Utilitários"
      description="Ferramentas úteis para facilitar seu dia a dia"
    >
      <UtilityCards groups={utilityGroups} />
    </PageLayout>
  )
}
