'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Heart, ShoppingBag, Loader2 } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Button } from '@/components/ui/button'
import { ProductGrid } from '@/components/product/product-grid'
import { useAuth } from '@/lib/auth-context'
import { getProductById, Product } from '@/data/products'

export default function FavoritesPage() {
  const { isLoggedIn, favorites, isLoading, clearAllFavorites } = useAuth()
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])

  useEffect(() => {
    if (favorites.length > 0) {
      const products = favorites
        .map((id) => getProductById(id))
        .filter((p): p is Product => p !== undefined)
      setFavoriteProducts(products)
    } else {
      setFavoriteProducts([])
    }
  }, [favorites])

  if (isLoading) {
    return (
      <div className="py-8">
        <Container>
          <div className="min-h-[50vh] flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        </Container>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="py-8">
        <Container>
          <Breadcrumbs items={[{ label: 'Favorites' }]} className="mb-6" />
          
          <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Please Log In
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md">
              Log in to view and manage your favorite items.
            </p>
            <Button size="lg" asChild>
              <Link href="/login">Log In</Link>
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  if (favoriteProducts.length === 0) {
    return (
      <div className="py-8">
        <Container>
          <Breadcrumbs items={[{ label: 'Favorites' }]} className="mb-6" />
          
          <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-3">
              No Favorites Yet
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md">
              Start adding items to your favorites by clicking the heart icon on products you love.
            </p>
            <Button size="lg" asChild>
              <Link href="/shop">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Start Shopping
              </Link>
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="py-8">
      <Container>
        <Breadcrumbs items={[{ label: 'Favorites' }]} className="mb-6" />
        
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              My Favorites
            </h1>
            <p className="text-muted-foreground">
              {favoriteProducts.length} {favoriteProducts.length === 1 ? 'item' : 'items'} in your favorites
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={clearAllFavorites}
            className="text-red-500 border-red-500 hover:bg-red-50"
          >
            Clear All Favorites
          </Button>
        </div>

        <ProductGrid products={favoriteProducts} />
      </Container>
    </div>
  )
}
