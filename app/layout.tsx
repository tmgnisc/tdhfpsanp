import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { organizationInfo } from '@/lib/mockData'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'The Direct Help Foundation',
  description: 'Supporting vulnerable children, widowed women, and elderly individuals in Nepal through direct humanitarian aid, education, and community development programs.',
  icons: {
    icon: organizationInfo.logo,
    apple: organizationInfo.logo,
  },
  openGraph: {
    title: 'The Direct Help Foundation',
    description: 'Direct humanitarian aid for vulnerable communities in Nepal',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
