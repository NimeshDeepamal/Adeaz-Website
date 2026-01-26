'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ProductGrid } from '@/components/product/product-grid'
import { ShopFilters } from './shop-filters'
import { products, filterProducts } from '@/data/products'

type SortOption = 'newest' | 'price-low' | 'price-high' | 'popular'

export function ShopContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams?.get('category') || ''
  const initialFilter = searchParams?.get('filter') || ''

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Apply special filters from URL params
  const getFilteredProducts = useMemo(() => {
    let filtered = filterProducts({
      category: selectedCategory || undefined,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sizes: selectedSizes.length > 0 ? selectedSizes : undefined,
      colors: selectedColors.length > 0 ? selectedColors : undefined,
      sortBy,
    })

    // Apply special filters
    if (initialFilter === 'new') {
      filtered = filtered.filter(p => p.newArrival)
    } else if (initialFilter === 'bestseller') {
      filtered = filtered.filter(p => p.bestSeller)
    } else if (initialFilter === 'sale') {
      filtered = filtered.filter(p => p.originalPrice && p.originalPrice > p.price)
    }

    // Apply search
    if (search) {
      const lowercaseSearch = search.toLowerCase()
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(lowercaseSearch) ||
          p.description.toLowerCase().includes(lowercaseSearch) ||
          p.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch))
      )
    }

    return filtered
  }, [selectedCategory, priceRange, selectedSizes, selectedColors, sortBy, search, initialFilter])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedSizes([])
    setSelectedColors([])
    setPriceRange([0, 15000])
    setSearch('')
  }

  const hasActiveFilters =
    selectedCategory ||
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 15000

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Desktop Sidebar Filters */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-lg">Filters</h2>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground"
              >
                Clear all
              </Button>
            )}
          </div>
          <ShopFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedSizes={selectedSizes}
            onSizesChange={setSelectedSizes}
            selectedColors={selectedColors}
            onColorsChange={setSelectedColors}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Search and Sort Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-10"
            />
          </div>

          <div className="flex gap-2">
            {/* Mobile Filter Button */}
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <span className="ml-2 h-5 w-5 rounded-full bg-foreground text-background text-xs flex items-center justify-center">
                      !
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
                <SheetHeader className="mb-6">
                  <div className="flex items-center justify-between">
                    <SheetTitle>Filters</SheetTitle>
                    {hasActiveFilters && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                      >
                        Clear all
                      </Button>
                    )}
                  </div>
                </SheetHeader>
                <div className="overflow-y-auto h-[calc(100%-120px)] pb-4">
                  <ShopFilters
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    selectedSizes={selectedSizes}
                    onSizesChange={setSelectedSizes}
                    selectedColors={selectedColors}
                    onColorsChange={setSelectedColors}
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
                  <Button
                    className="w-full"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    Show {getFilteredProducts.length} Results
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filter Tags */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategory && (
              <FilterTag
                label={selectedCategory}
                onRemove={() => setSelectedCategory('')}
              />
            )}
            {selectedSizes.map(size => (
              <FilterTag
                key={size}
                label={`Size: ${size}`}
                onRemove={() => setSelectedSizes(prev => prev.filter(s => s !== size))}
              />
            ))}
            {selectedColors.map(color => (
              <FilterTag
                key={color}
                label={color}
                onRemove={() => setSelectedColors(prev => prev.filter(c => c !== color))}
              />
            ))}
          </div>
        )}

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {getFilteredProducts.length} products
        </p>

        {/* Product Grid */}
        <ProductGrid products={getFilteredProducts} />
      </div>
    </div>
  )
}

function FilterTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm">
      {label}
      <button
        onClick={onRemove}
        className="ml-1 hover:text-destructive"
        aria-label={`Remove ${label} filter`}
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  )
}
