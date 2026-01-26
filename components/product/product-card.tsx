'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Price } from '@/components/ui/price'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
  className?: string
  priority?: boolean
}

export function ProductCard({ product, className, priority = false }: ProductCardProps) {
  const isOnSale = product.originalPrice && product.originalPrice > product.price
  const isNew = product.newArrival

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn('group', className)}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && <Badge variant="new">New</Badge>}
            {isOnSale && <Badge variant="sale">Sale</Badge>}
          </div>

          {/* Wishlist button */}
          <button
            className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
            onClick={(e) => {
              e.preventDefault()
              // TODO: Add to wishlist functionality
            }}
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </button>

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="text-white text-sm font-medium">Quick View</span>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:underline">
            {product.name}
          </h3>
          <Price
            price={product.price}
            originalPrice={product.originalPrice}
            size="sm"
          />
          {product.reviews > 0 && (
            <p className="text-xs text-muted-foreground">
              ({product.reviews} reviews)
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
