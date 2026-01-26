'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { categories } from '@/data/products'

export function CategoriesSection() {
  // Only show first 6 categories
  const displayCategories = categories.slice(0, 6)

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Shop by Category"
          subtitle="Find your perfect style across our curated collections"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {displayCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/shop?category=${category.slug}`}
                className="group relative block aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm hidden md:block mb-3">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-white group-hover:underline">
                    Shop Now
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
