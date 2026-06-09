'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  author: string
  role: string
  quote: string
  image: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay, testimonials.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative group">
      {/* Carousel Container */}
      <div className="bg-primary/5 rounded-2xl p-8 sm:p-12 border border-border">
        <div className="max-w-3xl mx-auto">
          {/* Testimonial Content */}
          <div className="text-center mb-8">
            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl sm:text-3xl font-serif text-foreground mb-8">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-foreground">{testimonials[current].author}</p>
                <p className="text-secondary text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current ? 'bg-primary w-8' : 'bg-muted w-2 hover:bg-muted-foreground'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute -left-6 sm:left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute -right-6 sm:right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
