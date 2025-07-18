import { AboutClient } from './about.client'
import { PageLayout } from '@/components/page-layout'
import { ArticleContent } from '@/components/article-content'

export default async function AboutPage() {
  return (
    <PageLayout>
      <ArticleContent>
        <AboutClient />
      </ArticleContent>
    </PageLayout>
  )
}
