'use client'

import { cn, formatPrice } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { products } from '@/data/products'

interface ShopFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedSizes: string[]
  onSizesChange: (sizes: string[]) => void
  selectedColors: string[]
  onColorsChange: (colors: string[]) => void
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
}

// Extract unique values from products
const categories = [
  { value: '', label: 'All' },
  { value: 'womens', label: 'Women' },
  { value: 'mens', label: 'Men' },
  { value: 'accessories', label: 'Accessories' },
]

const allSizes = Array.from(
  new Set(products.flatMap(p => p.sizes.map(s => s.name)))
)

const allColors = Array.from(
  new Set(products.flatMap(p => p.colors.map(c => c.name)))
)

const colorMap: Record<string, string> = {
  'Ivory': '#FFFFF0',
  'Dusty Rose': '#DCAE96',
  'Ocean Blue': '#4F84C4',
  'Royal Purple': '#7851A9',
  'Emerald': '#50C878',
  'Maroon': '#800000',
  'White': '#FFFFFF',
  'Sky Blue': '#87CEEB',
  'Beige': '#F5F5DC',
  'Blush Pink': '#FFB6C1',
  'Navy': '#000080',
  'Cream': '#FFFDD0',
  'Olive': '#808000',
  'Mint Green': '#98FF98',
  'Coral': '#FF7F50',
  'Light Blue': '#ADD8E6',
  'Charcoal': '#36454F',
  'Teal': '#008080',
  'Wine': '#722F37',
  'Peach': '#FFDAB9',
  'Lavender': '#E6E6FA',
  'Gold': '#FFD700',
  'Khaki': '#C3B091',
  'Black': '#000000',
  'Red': '#FF0000',
  'Blue': '#0000FF',
  'Green': '#00FF00',
  'Tropical Print': '#228B22',
  'Abstract Blue': '#4169E1',
}

export function ShopFilters({
  selectedCategory,
  onCategoryChange,
  selectedSizes,
  onSizesChange,
  selectedColors,
  onColorsChange,
  priceRange,
  onPriceRangeChange,
}: ShopFiltersProps) {
  const toggleSize = (size: string) => {
    if (selectedSizes.includes(size)) {
      onSizesChange(selectedSizes.filter(s => s !== size))
    } else {
      onSizesChange([...selectedSizes, size])
    }
  }

  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      onColorsChange(selectedColors.filter(c => c !== color))
    } else {
      onColorsChange([...selectedColors, color])
    }
  }

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-medium mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={cn(
                'block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                selectedCategory === category.value
                  ? 'bg-foreground text-background'
                  : 'hover:bg-muted'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={(value) => onPriceRangeChange(value as [number, number])}
          max={15000}
          min={0}
          step={500}
          className="mb-4"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      <Separator />

      {/* Sizes */}
      <div>
        <h3 className="font-medium mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-sm border transition-colors',
                selectedSizes.includes(size)
                  ? 'bg-foreground text-background border-foreground'
                  : 'border-input hover:border-foreground'
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Colors */}
      <div>
        <h3 className="font-medium mb-3">Color</h3>
        <div className="flex flex-wrap gap-2">
          {allColors.slice(0, 12).map((color) => (
            <button
              key={color}
              onClick={() => toggleColor(color)}
              className={cn(
                'w-8 h-8 rounded-full border-2 transition-all relative',
                selectedColors.includes(color)
                  ? 'ring-2 ring-offset-2 ring-foreground'
                  : 'hover:scale-110'
              )}
              style={{ backgroundColor: colorMap[color] || '#ccc' }}
              title={color}
              aria-label={`Filter by ${color}`}
            >
              {selectedColors.includes(color) && (
                <svg
                  className="absolute inset-0 m-auto w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={colorMap[color] === '#FFFFFF' || colorMap[color] === '#FFFFF0' ? '#000' : '#fff'}
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
