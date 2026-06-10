import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = createPageMetadata(
  'Activities',
  'Discover programs and initiatives by The Direct Help Foundation — education, emergency relief, women empowerment, and elderly care.',
)

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
