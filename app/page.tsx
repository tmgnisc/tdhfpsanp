'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import StatisticsCard from '@/components/StatisticsCard'
import MissionCard from '@/components/MissionCard'
import ArticleCard from '@/components/ArticleCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import GalleryGrid from '@/components/GalleryGrid'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { statistics, articles, coreValues, testimonials, galleryImages, missionStatement } from '@/lib/mockData'
import { Heart, Zap, Target, Users, Lightbulb, Award } from 'lucide-react'

// Map icon names to actual icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  Heart,
  Zap: Zap,
  Target,
  Users,
  Lightbulb,
  Award,
}

export default function Home() {
  const missionCards = [
    {
      icon: Heart,
      title: 'Education',
      description: 'Providing quality education and learning resources to underprivileged children in rural and urban communities.',
    },
    {
      icon: Target,
      title: 'Protection',
      description: 'Safeguarding vulnerable children and women through support programs and community awareness initiatives.',
    },
    {
      icon: Users,
      title: 'Development',
      description: 'Building sustainable economic opportunities and dignified living conditions for entire communities.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Direct Aid for Vulnerable Communities"
        subtitle="The Direct Help Foundation"
        description="Supporting children, women, and elderly individuals in Nepal with transparent, impactful humanitarian aid since 2003."
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=600&fit=crop"
      />

      {/* Statistics Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For over two decades, we&apos;ve been making a real difference in the lives of vulnerable communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Heart
              return <StatisticsCard key={index} number={stat.number} label={stat.label} icon={Icon} />
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Mission Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus on three core areas where we believe we can create the most meaningful impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionCards.map((card, index) => (
              <MissionCard key={index} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Latest Activities</h2>
              <p className="text-lg text-muted-foreground">Discover our recent programs and success stories from the field.</p>
            </div>
            <Link href="/activities" className="hidden sm:block">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          <div className="flex sm:hidden">
            <Link href="/activities" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90">View All Activities</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Photo Gallery</h2>
              <p className="text-lg text-muted-foreground">Visual stories from our communities and programs.</p>
            </div>
            <Link href="/gallery" className="hidden sm:block">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                See All Photos
              </Button>
            </Link>
          </div>
          <GalleryGrid images={galleryImages.slice(0, 6)} columns={3} />
          <div className="flex sm:hidden mt-8">
            <Link href="/gallery" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90">See All Photos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Stories of Change</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from those whose lives have been transformed by our programs.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and how we serve our communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = iconMap[value.icon] || Heart
              return (
                <MissionCard key={index} icon={Icon} title={value.title} description={value.description} />
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Make a Difference Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Your donation directly supports vulnerable communities. Every contribution, no matter the size, creates lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button className="bg-primary hover:bg-primary/90 h-12 px-8 text-base font-semibold">
                Donate Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 h-12 px-8 text-base font-semibold">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
