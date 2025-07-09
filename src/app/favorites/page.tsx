import { PageLayout } from '@/components/page-layout'
import { FavoritesList } from '@/components/favorites-list'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Favoritos - utils.reflix',
  description: 'Suas ferramentas favoritas salvas para acesso rápido',
}

export default function FavoritesPage() {
  return (
    <PageLayout
      title="Favoritos"
      description="Suas ferramentas favoritas salvas para acesso rápido"
    >
      <FavoritesList />
    </PageLayout>
  )
}
