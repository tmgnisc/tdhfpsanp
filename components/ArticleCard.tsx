import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'

interface ArticleCardProps {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  featured?: boolean
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  image,
  featured = false,
}: ArticleCardProps) {
  return (
    <Link href={`/activities/${slug}`}>
      <article className={`group overflow-hidden rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col h-full ${featured ? 'md:col-span-2' : ''}`}>
        {/* Image */}
        <div className="relative overflow-hidden bg-muted h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              <Tag size={12} />
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2">{excerpt}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
            <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
            Read Article
            <ArrowRight size={16} />
          </div>
        </div>
      </article>
    </Link>
  )
}
