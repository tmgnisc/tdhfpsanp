import type { Metadata } from 'next'
import { articles } from '@/lib/mockData'
import { createPageMetadata } from '@/lib/site-metadata'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return createPageMetadata('Activity')
  }

  return createPageMetadata(article.title, article.excerpt, article.image)
}

export default function ActivityLayout({ children }: { children: React.ReactNode }) {
  return children
}
