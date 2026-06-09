'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/lib/mockData'
import { ArrowLeft, Share2, Calendar, User, Clock } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function ArticleDetail() {
  const params = useParams()
  const slug = params.slug as string

  const article = articles.find((a) => a.slug === slug)
  const relatedArticles = articles
    .filter((a) => a.slug !== slug && a.category === article?.category)
    .slice(0, 3)

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/activities">
            <Button className="bg-primary hover:bg-primary/90">Back to Articles</Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Back Button */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/activities" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft size={20} />
            <span>Back to Activities</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="relative h-96 bg-muted overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">{article.category}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{article.title}</h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-12 pb-12 border-b border-border text-muted-foreground">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{article.readTime}</span>
          </div>
          <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
            <Share2 size={18} />
            <span>Share</span>
          </button>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-xl text-muted-foreground leading-relaxed space-y-6 whitespace-pre-wrap">{article.content}</div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Want to Help?</h3>
          <p className="text-muted-foreground mb-6">Your donation directly supports programs like the ones described in this article.</p>
          <Link href="/donate">
            <Button className="bg-primary hover:bg-primary/90">Make a Donation</Button>
          </Link>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-muted/30 border-t border-border py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} {...relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
