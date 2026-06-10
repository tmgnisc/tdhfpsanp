import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = createPageMetadata(
  'Gallery',
  'Explore photos from The Direct Help Foundation programs — education, community events, and humanitarian work across Nepal.',
)

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
