'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  id: number
  src: string
  category: string
  title: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  columns?: number
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedImage = images.find((img) => img.id === selectedId)

  const currentIndex = selectedImage ? images.findIndex((img) => img.id === selectedImage.id) : 0

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedId(images[nextIndex].id)
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setSelectedId(images[prevIndex].id)
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-4`}>
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer bg-muted"
            onClick={() => setSelectedId(image.id)}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-start p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">{image.title}</p>
                <p className="text-white/70 text-sm">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedId(null)}>
          {/* Image Container */}
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain rounded-lg"
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-12 sm:left-0 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-12 sm:right-0 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute -top-12 sm:top-0 right-0 p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Info */}
            <div className="absolute -bottom-16 left-0 right-0 text-white text-center">
              <p className="font-semibold">{selectedImage.title}</p>
              <p className="text-white/70 text-sm">{selectedImage.category}</p>
              <p className="text-white/50 text-xs mt-1">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
