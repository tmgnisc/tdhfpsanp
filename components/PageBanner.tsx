import { ReactNode } from 'react'

interface PageBannerProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  backgroundImage?: string
}

export default function PageBanner({
  title,
  subtitle,
  description,
  children,
  backgroundImage,
}: PageBannerProps) {
  return (
    <div
      className="relative py-16 sm:py-24 lg:py-32 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && <p className="text-primary-foreground/90 mb-2 text-sm font-semibold uppercase tracking-wide">{subtitle}</p>}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">{title}</h1>
        {description && <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 text-balance">{description}</p>}
        {children}
      </div>
    </div>
  )
}
