'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'
import GalleryGrid from '@/components/GalleryGrid'
import { galleryImages } from '@/lib/mockData'

const categories = ['All', 'Education', 'Community', 'Women', 'Elderly', 'Events', 'Volunteers']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') return galleryImages
    return galleryImages.filter((image) => image.category === selectedCategory)
  }, [selectedCategory])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Banner */}
      <PageBanner
        title="Our Photo Gallery"
        subtitle="Visual Stories"
        description="Explore the impact of our programs through the lens of our community photographers"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=600&fit=crop"
      />

      {/* Filter Section */}
      <section className="py-12 bg-muted/30 border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white border border-border text-foreground hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={filteredImages} columns={3} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
