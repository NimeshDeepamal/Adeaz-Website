'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product/product-card'
import { getBestSellers, products } from '@/data/products'

export function BestSellersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  // Get best sellers or fall back to products sorted by reviews
  const bestSellers = getBestSellers()
  const displayProducts = bestSellers.length >= 6 
    ? bestSellers 
    : [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 8)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <SectionHeading
            title="Best Sellers"
            subtitle="Our most loved pieces. Customer favorites that never go out of style."
            align="left"
            className="mb-0"
          />
          <div className="flex items-center gap-2">
            <div className="hidden md:flex gap-2 mr-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('left')}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('right')}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" asChild>
              <Link href="/shop?filter=bestseller">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[260px] md:w-[280px]"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
