'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'
import MissionCard from '@/components/MissionCard'
import TeamCard from '@/components/TeamCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { teamMembers, coreValues, missionStatement, visionStatement } from '@/lib/mockData'
import { Heart, Target, Users, Lightbulb, Award, Eye } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<any>> = {
  Heart,
  Eye,
  Target,
  Users,
  Lightbulb,
  Award,
}

export default function About() {
  const timeline = [
    { year: '2003', event: 'Foundation established with a vision to serve vulnerable communities' },
    { year: '2007', event: 'Launched first education program reaching 100 children' },
    { year: '2012', event: 'Expanded to women empowerment initiatives' },
    { year: '2017', event: 'Opened elderly care program benefiting 200+ individuals' },
    { year: '2020', event: 'Launched emergency response during COVID-19 pandemic' },
    { year: '2024', event: 'Serving 5000+ children, 2000+ women, and 500+ elderly individuals' },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Banner */}
      <PageBanner
        title="About The Direct Help Foundation"
        subtitle="Our Story"
        description="Over 20 years of dedicated service to vulnerable communities in Nepal"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=600&fit=crop"
      />

      {/* Story Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                The Direct Help Foundation was founded in 2003 with a simple yet powerful mission: to provide direct,
                transparent humanitarian aid to the most vulnerable communities in Nepal. What began as a small initiative
                has grown into a comprehensive organization serving thousands of lives.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe in the power of direct aid and community partnership. Every program we run is designed to create
                sustainable, lasting change. We work alongside communities, listening to their needs and implementing
                solutions that genuinely improve lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we proudly serve over 7,500 individuals through education, healthcare, women empowerment, and elderly
                care programs across Nepal.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Our Foundation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-8 rounded-xl bg-white border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{missionStatement}</p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-xl bg-white border border-border">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <Eye size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{visionStatement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Timeline</h2>
            <p className="text-lg text-muted-foreground">A journey of growth and impact</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`lg:flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}>
                  {/* Timeline item */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="p-6 bg-primary/5 rounded-lg border border-border hover:border-primary transition-colors">
                      <h4 className="text-2xl font-bold text-primary mb-2">{item.year}</h4>
                      <p className="text-foreground text-lg">{item.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden lg:flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-primary" />
                  </div>

                  {/* Empty space */}
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every action we take.
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

      {/* Team Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to making a difference in vulnerable communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            There are many ways you can contribute to creating positive change in vulnerable communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button className="bg-white hover:bg-gray-100 text-primary h-12 px-8 text-base font-semibold">
                Make a Donation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8 text-base font-semibold">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
