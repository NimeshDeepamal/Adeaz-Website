import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { ShopContent } from '@/components/shop/shop-content'
import { ShopSkeleton } from '@/components/shop/shop-skeleton'

export const metadata: Metadata = {
  title: 'Shop All Products | ADEAZ',
  description: 'Browse our complete collection of premium streetwear and fashion. Find your perfect style today.',
}

export default function ShopPage() {
  return (
    <div className="py-8">
      <Container>
        <Breadcrumbs
          items={[{ label: 'Shop' }]}
          className="mb-6"
        />

        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Shop All
          </h1>
          <p className="text-muted-foreground">
            Discover our complete collection of premium fashion.
          </p>
        </div>

        <Suspense fallback={<ShopSkeleton />}>
          <ShopContent />
        </Suspense>
      </Container>
    </div>
  )
}
