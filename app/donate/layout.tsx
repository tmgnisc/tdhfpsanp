import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = createPageMetadata(
  'Donate',
  'Support vulnerable communities in Nepal. Donate to The Direct Help Foundation via bank transfer.',
)

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children
}
