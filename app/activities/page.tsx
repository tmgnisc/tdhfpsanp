'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'
import ArticleCard from '@/components/ArticleCard'
import { Button } from '@/components/ui/button'
import { articles } from '@/lib/mockData'
import { Search, X } from 'lucide-react'

const categories = ['All', 'Education', 'Emergency Response', 'Women Empowerment', 'Elderly Care', 'Community Programs']

export default function Activities() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Banner */}
      <PageBanner
        title="Our Activities & Programs"
        subtitle="What We Do"
        description="Explore our ongoing initiatives and success stories from the communities we serve"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=600&fit=crop"
      />

      {/* Search & Filter Section */}
      <section className="py-12 bg-muted/30 border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
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

          {/* Results count */}
          {searchQuery || selectedCategory !== 'All' ? (
            <p className="text-sm text-muted-foreground mt-4">
              Showing {filteredArticles.length} result{filteredArticles.length !== 1 ? 's' : ''}
            </p>
          ) : null}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your search or filter criteria to find what you&apos;re looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
