import { getGroupsByType } from '@/lib/utility-groups'
import { UtilityCards } from '@/components/utility-cards'
import { PageLayout } from '@/components/page-layout'

export default function Home() {
  const allGroups = getGroupsByType('all')

  return (
    <PageLayout
      title="Bem-vindo ao utils.reflix"
      description="Uma coleção de ferramentas úteis para facilitar seu dia a dia"
    >
      <UtilityCards groups={allGroups} />
    </PageLayout>
  )
}
