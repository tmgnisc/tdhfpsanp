import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = createPageMetadata(
  'Contact',
  'Get in touch with The Direct Help Foundation. Visit us in Kathmandu or reach us by phone, mobile, or email.',
)

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
