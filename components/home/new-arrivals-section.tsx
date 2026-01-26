'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { ProductGrid } from '@/components/product/product-grid'
import { getNewArrivals, products } from '@/data/products'

export function NewArrivalsSection() {
  // Get new arrivals or fall back to latest products
  const newArrivals = getNewArrivals()
  const displayProducts = newArrivals.length >= 8 
    ? newArrivals.slice(0, 8) 
    : products.slice(0, 8)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <SectionHeading
            title="New Arrivals"
            subtitle="Fresh styles just dropped. Be the first to shop the latest."
            align="left"
            className="mb-0"
          />
          <Button variant="outline" asChild className="self-start md:self-auto">
            <Link href="/shop?filter=new">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <ProductGrid products={displayProducts} />
      </Container>
    </section>
  )
}
