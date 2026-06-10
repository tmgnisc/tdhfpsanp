import type { Metadata } from 'next'
import { organizationInfo } from './mockData'

const siteDescription = organizationInfo.description

export function createPageMetadata(
  title: string,
  description: string = siteDescription,
  image: string = organizationInfo.logo,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${organizationInfo.name}`,
      description,
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: organizationInfo.name,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${title} | ${organizationInfo.name}`,
      description,
      images: [image],
    },
  }
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: organizationInfo.name,
    template: `%s | ${organizationInfo.name}`,
  },
  description: siteDescription,
  applicationName: organizationInfo.name,
  keywords: [
    'The Direct Help Foundation',
    'Direct Help Foundation',
    'Nepal NGO',
    'humanitarian aid Nepal',
    'charity Kathmandu',
    'children support Nepal',
    'women empowerment',
    'elderly care',
    'Pratyakshya Sahayog Adharshila',
  ],
  authors: [{ name: organizationInfo.name }],
  creator: organizationInfo.name,
  publisher: organizationInfo.name,
  icons: {
    icon: organizationInfo.logo,
    apple: organizationInfo.logo,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: organizationInfo.name,
    title: organizationInfo.name,
    description: organizationInfo.tagline,
    images: [
      {
        url: organizationInfo.logo,
        width: 512,
        height: 512,
        alt: `${organizationInfo.name} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: organizationInfo.name,
    description: organizationInfo.tagline,
    images: [organizationInfo.logo],
  },
  robots: {
    index: true,
    follow: true,
  },
}
