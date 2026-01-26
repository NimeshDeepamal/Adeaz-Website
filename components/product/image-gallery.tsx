'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails - Desktop */}
      <div className="hidden lg:flex flex-col gap-3 w-24">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              'relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all bg-neutral-100',
              selectedIndex === index
                ? 'border-foreground'
                : 'border-transparent hover:border-muted-foreground/50'
            )}
          >
            <Image
              src={image}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <Image
                src={images[selectedIndex]}
                alt={`${alt} - Image ${selectedIndex + 1}`}
                fill
                priority={selectedIndex === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows - Mobile/Tablet */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white lg:hidden"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white lg:hidden"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>

        {/* Dots indicator - Mobile */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  selectedIndex === index
                    ? 'bg-foreground w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
