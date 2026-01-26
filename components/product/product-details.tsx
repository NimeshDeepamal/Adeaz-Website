'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Minus, Plus, ShoppingBag, Heart, Star, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageGallery } from './image-gallery'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Price } from '@/components/ui/price'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import type { Product } from '@/data/products'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors.find(c => c.available)?.name || ''
  )
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  const isOnSale = product.originalPrice && product.originalPrice > product.price
  const discountPercentage = isOnSale
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Please select a size',
        description: 'Choose a size before adding to cart.',
        variant: 'destructive',
      })
      return
    }

    addItem(product, selectedSize, selectedColor, quantity)
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
      variant: 'success',
    })
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Gallery */}
      <ImageGallery images={product.images} alt={product.name} />

      {/* Product Info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        {/* Badges */}
        <div className="flex gap-2 mb-4">
          {product.newArrival && <Badge variant="new">New Arrival</Badge>}
          {isOnSale && <Badge variant="sale">{discountPercentage}% Off</Badge>}
          {product.bestSeller && <Badge variant="secondary">Best Seller</Badge>}
        </div>

        {/* Title and Price */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {product.name}
        </h1>

        <div className="flex items-center gap-4 mb-4">
          <Price
            price={product.price}
            originalPrice={product.originalPrice}
            size="lg"
          />
          {product.reviews > 0 && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{product.rating}</span>
              <span>({product.reviews} reviews)</span>
            </div>
          )}
        </div>

        <p className="text-muted-foreground mb-6">{product.description}</p>

        <Separator className="my-6" />

        {/* Color Selector */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium">Color: {selectedColor}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => color.available && setSelectedColor(color.name)}
                disabled={!color.available}
                className={cn(
                  'w-10 h-10 rounded-full border-2 transition-all relative',
                  selectedColor === color.name
                    ? 'ring-2 ring-offset-2 ring-foreground'
                    : 'hover:scale-110',
                  !color.available && 'opacity-40 cursor-not-allowed'
                )}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={`Select ${color.name}${!color.available ? ' (Out of stock)' : ''}`}
              >
                {!color.available && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-full h-0.5 bg-red-500 rotate-45 absolute" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium">Size</span>
            <button className="text-sm text-muted-foreground hover:text-foreground underline">
              Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.name}
                onClick={() => size.available && setSelectedSize(size.name)}
                disabled={!size.available}
                className={cn(
                  'min-w-[48px] h-12 px-4 rounded-lg border-2 font-medium transition-all',
                  selectedSize === size.name
                    ? 'bg-foreground text-background border-foreground'
                    : 'border-input hover:border-foreground',
                  !size.available &&
                    'opacity-40 cursor-not-allowed line-through'
                )}
                aria-label={`Select size ${size.name}${!size.available ? ' (Out of stock)' : ''}`}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <span className="font-medium block mb-3">Quantity</span>
          <div className="flex items-center border rounded-lg w-fit">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-3 hover:bg-muted transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-3 hover:bg-muted transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Button
            size="xl"
            className="flex-1"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
          <Button size="xl" variant="outline">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-b mb-6">
          <div className="flex flex-col items-center text-center">
            <Truck className="h-5 w-5 mb-2 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Free Shipping</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <RotateCcw className="h-5 w-5 mb-2 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">7-Day Returns</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-5 w-5 mb-2 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Secure Payment</span>
          </div>
        </div>

        {/* Accordion Details */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="materials">
            <AccordionTrigger>Materials & Care</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{product.details.materials}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="size-guide">
            <AccordionTrigger>Size Guide</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{product.details.sizeGuide}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping & Returns</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{product.details.shippingReturns}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Mobile Sticky Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t lg:hidden z-40">
        <Button
          size="lg"
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          {product.inStock ? `Add to Cart - ${new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR', minimumFractionDigits: 0 }).format(product.price * quantity)}` : 'Out of Stock'}
        </Button>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </div>
  )
}
