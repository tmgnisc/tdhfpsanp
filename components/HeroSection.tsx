import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA = { text: 'Donate Now', href: '/donate' },
  secondaryCTA = { text: 'Learn More', href: '/about' },
  backgroundImage,
}: HeroSectionProps) {
  return (
    <div
      className="relative py-24 sm:py-32 lg:py-40 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Subtitle */}
          {subtitle && (
            <p className="text-primary-foreground/90 mb-4 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {subtitle}
            </p>
          )}

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && <p className="text-xl text-white/80 mb-8 text-balance max-w-2xl leading-relaxed">{description}</p>}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={primaryCTA.href}>
              <Button className="bg-accent hover:bg-accent/90 text-white h-12 px-8 text-base font-semibold flex items-center gap-2 group">
                {primaryCTA.text}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={secondaryCTA.href}>
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 h-12 px-8 text-base font-semibold"
              >
                {secondaryCTA.text}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
