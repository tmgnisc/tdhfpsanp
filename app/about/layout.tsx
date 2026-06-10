import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = createPageMetadata(
  'About Us',
  'Learn about The Direct Help Foundation — our mission, values, and two decades of direct humanitarian aid in Nepal.',
)

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
