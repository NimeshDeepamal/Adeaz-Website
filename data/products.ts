export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  images: string[]
  category: 'womens' | 'mens' | 'accessories'
  subcategory: string
  sizes: Size[]
  colors: Color[]
  tags: string[]
  description: string
  details: {
    materials: string
    sizeGuide: string
    shippingReturns: string
  }
  featured: boolean
  bestSeller: boolean
  newArrival: boolean
  inStock: boolean
  createdAt: string
  reviews: number
  rating: number
}

export interface Size {
  name: string
  available: boolean
}

export interface Color {
  name: string
  hex: string
  available: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Women',
    slug: 'womens',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
    description: 'Elegant sarees, dresses, and more',
  },
  {
    id: '2',
    name: 'Men',
    slug: 'mens',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
    description: 'Premium shirts, kurtas, and essentials',
  },
  {
    id: '3',
    name: 'New Arrivals',
    slug: 'new-arrivals',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    description: 'Fresh styles just dropped',
  },
  {
    id: '4',
    name: 'Best Sellers',
    slug: 'best-sellers',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80',
    description: 'Customer favorites',
  },
  {
    id: '5',
    name: 'Sale',
    slug: 'sale',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    description: 'Limited time offers',
  },
  {
    id: '6',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    description: 'Complete your look',
  },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Handloom Cotton Saree with Lotus Motifs',
    slug: 'handloom-cotton-saree-lotus-motifs',
    price: 7250,
    originalPrice: 8900,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80',
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
    ],
    category: 'womens',
    subcategory: 'Sarees',
    sizes: [
      { name: 'Free Size', available: true },
    ],
    colors: [
      { name: 'Ivory', hex: '#FFFFF0', available: true },
      { name: 'Dusty Rose', hex: '#DCAE96', available: true },
      { name: 'Ocean Blue', hex: '#4F84C4', available: false },
    ],
    tags: ['handloom', 'cotton', 'traditional', 'wedding'],
    description: 'Exquisite handloom cotton saree featuring delicate lotus motifs and an intricate border design. Perfect for special occasions and festivities.',
    details: {
      materials: '100% Pure Handloom Cotton. Soft, breathable fabric with natural texture. Zari work on border and pallu.',
      sizeGuide: 'Standard saree length: 5.5 meters with 0.8 meter blouse piece included. Free size - suitable for all body types.',
      shippingReturns: 'Free shipping on orders above Rs. 5,000. Easy 7-day returns for unworn items with tags intact. Exchange available for different colors.',
    },
    featured: true,
    bestSeller: true,
    newArrival: false,
    inStock: true,
    createdAt: '2024-01-15',
    reviews: 120,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Silk Blend Saree with Golden Zari Work',
    slug: 'silk-blend-saree-golden-zari',
    price: 10950,
    originalPrice: 12900,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80',
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80',
    ],
    category: 'womens',
    subcategory: 'Sarees',
    sizes: [
      { name: 'Free Size', available: true },
    ],
    colors: [
      { name: 'Royal Purple', hex: '#7851A9', available: true },
      { name: 'Emerald', hex: '#50C878', available: true },
      { name: 'Maroon', hex: '#800000', available: true },
    ],
    tags: ['silk', 'zari', 'wedding', 'festive'],
    description: 'Luxurious silk blend saree adorned with golden zari work and modern floral patterns. A statement piece for grand celebrations.',
    details: {
      materials: 'Silk blend with pure gold zari weaving. Dry clean recommended.',
      sizeGuide: 'Standard saree length: 5.5 meters with 0.8 meter blouse piece included.',
      shippingReturns: 'Free shipping. 7-day returns policy applies.',
    },
    featured: true,
    bestSeller: false,
    newArrival: true,
    inStock: true,
    createdAt: '2024-02-01',
    reviews: 85,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Tailored Linen Shirt with Embroidered Accents',
    slug: 'tailored-linen-shirt-embroidered',
    price: 3650,
    originalPrice: 4500,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
    ],
    category: 'mens',
    subcategory: 'Shirts',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: false },
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF', available: true },
      { name: 'Sky Blue', hex: '#87CEEB', available: true },
      { name: 'Beige', hex: '#F5F5DC', available: true },
    ],
    tags: ['linen', 'casual', 'embroidered', 'summer'],
    description: 'Premium tailored linen shirt featuring subtle hand-embroidered accents. Perfect for both casual and formal occasions.',
    details: {
      materials: '100% Pure Linen. Lightweight and breathable. Hand embroidery on collar and cuffs.',
      sizeGuide: 'S: Chest 38", M: Chest 40", L: Chest 42", XL: Chest 44", XXL: Chest 46"',
      shippingReturns: 'Free shipping on orders above Rs. 5,000. Easy 7-day returns.',
    },
    featured: false,
    bestSeller: true,
    newArrival: true,
    inStock: true,
    createdAt: '2024-02-10',
    reviews: 70,
    rating: 4.6,
  },
  {
    id: '4',
    name: 'Chiffon Long Dress with Floral Prints',
    slug: 'chiffon-long-dress-floral',
    price: 5800,
    originalPrice: 7200,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80',
    ],
    category: 'womens',
    subcategory: 'Dresses',
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: false },
    ],
    colors: [
      { name: 'Blush Pink', hex: '#FFB6C1', available: true },
      { name: 'Navy', hex: '#000080', available: true },
    ],
    tags: ['chiffon', 'floral', 'elegant', 'party'],
    description: 'Flowing chiffon long dress with a flattering silhouette and vibrant floral prints. Effortlessly elegant for any occasion.',
    details: {
      materials: '100% Chiffon. Lined. Hidden back zipper.',
      sizeGuide: 'XS: Bust 32", S: Bust 34", M: Bust 36", L: Bust 38", XL: Bust 40"',
      shippingReturns: 'Free shipping. 7-day returns on unworn items.',
    },
    featured: true,
    bestSeller: false,
    newArrival: false,
    inStock: true,
    createdAt: '2024-01-20',
    reviews: 45,
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Premium Cotton Kurta Set',
    slug: 'premium-cotton-kurta-set',
    price: 4500,
    originalPrice: 5500,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ],
    category: 'mens',
    subcategory: 'Kurtas',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF', available: true },
      { name: 'Cream', hex: '#FFFDD0', available: true },
      { name: 'Olive', hex: '#808000', available: true },
    ],
    tags: ['cotton', 'kurta', 'traditional', 'festive'],
    description: 'Classic cotton kurta set with matching pajama. Comfortable yet elegant for festivals and special occasions.',
    details: {
      materials: '100% Premium Cotton. Pre-shrunk. Machine washable.',
      sizeGuide: 'Includes kurta and pajama. Standard fit with adjustable drawstring.',
      shippingReturns: 'Free shipping. 7-day easy returns.',
    },
    featured: false,
    bestSeller: true,
    newArrival: false,
    inStock: true,
    createdAt: '2024-01-05',
    reviews: 95,
    rating: 4.5,
  },
  {
    id: '6',
    name: 'Handloom Cotton Saree with Floral Borders',
    slug: 'handloom-cotton-saree-floral-borders',
    price: 7800,
    originalPrice: 9100,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
    ],
    category: 'womens',
    subcategory: 'Sarees',
    sizes: [
      { name: 'Free Size', available: true },
    ],
    colors: [
      { name: 'Mint Green', hex: '#98FF98', available: true },
      { name: 'Coral', hex: '#FF7F50', available: true },
    ],
    tags: ['handloom', 'cotton', 'floral', 'elegant'],
    description: 'Beautiful handloom cotton saree with intricate floral borders and elegant pallu design.',
    details: {
      materials: '100% Handloom Cotton. Soft drape with natural texture.',
      sizeGuide: 'Standard 5.5 meters with blouse piece.',
      shippingReturns: 'Free shipping above Rs. 5,000. 7-day returns.',
    },
    featured: true,
    bestSeller: false,
    newArrival: true,
    inStock: true,
    createdAt: '2024-02-15',
    reviews: 80,
    rating: 4.8,
  },
  {
    id: '7',
    name: 'Premium Cotton Shirt Classic Collar',
    slug: 'premium-cotton-shirt-classic-collar',
    price: 4200,
    originalPrice: 5000,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    ],
    category: 'mens',
    subcategory: 'Shirts',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF', available: true },
      { name: 'Light Blue', hex: '#ADD8E6', available: true },
      { name: 'Charcoal', hex: '#36454F', available: true },
    ],
    tags: ['cotton', 'formal', 'classic', 'office'],
    description: 'Premium cotton shirt with classic collar and slim fit. Essential wardrobe staple for the modern gentleman.',
    details: {
      materials: '100% Premium Cotton. Easy iron. Breathable.',
      sizeGuide: 'Slim fit design. See size chart for measurements.',
      shippingReturns: 'Free shipping. 7-day returns.',
    },
    featured: false,
    bestSeller: true,
    newArrival: true,
    inStock: true,
    createdAt: '2024-02-20',
    reviews: 60,
    rating: 4.6,
  },
  {
    id: '8',
    name: 'Embroidered Anarkali Suit',
    slug: 'embroidered-anarkali-suit',
    price: 8500,
    originalPrice: 10000,
    images: [
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80',
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
    ],
    category: 'womens',
    subcategory: 'Suits',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: false },
    ],
    colors: [
      { name: 'Teal', hex: '#008080', available: true },
      { name: 'Wine', hex: '#722F37', available: true },
    ],
    tags: ['anarkali', 'embroidered', 'wedding', 'festive'],
    description: 'Stunning embroidered Anarkali suit with intricate thread work. Perfect for weddings and festive celebrations.',
    details: {
      materials: 'Georgette with heavy embroidery. Includes dupatta and churidar.',
      sizeGuide: 'Semi-stitched. Can be customized to size.',
      shippingReturns: 'Free shipping. 7-day returns on unstitched items.',
    },
    featured: true,
    bestSeller: false,
    newArrival: false,
    inStock: true,
    createdAt: '2024-01-25',
    reviews: 55,
    rating: 4.9,
  },
  {
    id: '9',
    name: 'Georgette Saree with Embroidered Motifs',
    slug: 'georgette-saree-embroidered-motifs',
    price: 9500,
    originalPrice: 11200,
    images: [
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80',
    ],
    category: 'womens',
    subcategory: 'Sarees',
    sizes: [
      { name: 'Free Size', available: true },
    ],
    colors: [
      { name: 'Peach', hex: '#FFDAB9', available: true },
      { name: 'Lavender', hex: '#E6E6FA', available: true },
      { name: 'Gold', hex: '#FFD700', available: true },
    ],
    tags: ['georgette', 'embroidered', 'elegant', 'party'],
    description: 'Elegant georgette saree with delicate embroidered motifs and sheer pallu. Graceful and sophisticated.',
    details: {
      materials: 'Pure Georgette with machine embroidery. Lightweight and flowing.',
      sizeGuide: 'Standard 5.5 meters with blouse piece.',
      shippingReturns: 'Free shipping. 7-day returns.',
    },
    featured: false,
    bestSeller: true,
    newArrival: false,
    inStock: true,
    createdAt: '2024-01-10',
    reviews: 70,
    rating: 4.7,
  },
  {
    id: '10',
    name: 'Casual Linen Trousers',
    slug: 'casual-linen-trousers',
    price: 3200,
    originalPrice: 3800,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
    ],
    category: 'mens',
    subcategory: 'Trousers',
    sizes: [
      { name: '30', available: true },
      { name: '32', available: true },
      { name: '34', available: true },
      { name: '36', available: true },
      { name: '38', available: false },
    ],
    colors: [
      { name: 'Khaki', hex: '#C3B091', available: true },
      { name: 'Navy', hex: '#000080', available: true },
      { name: 'Black', hex: '#000000', available: true },
    ],
    tags: ['linen', 'casual', 'comfortable', 'summer'],
    description: 'Relaxed fit linen trousers perfect for summer. Breathable and stylish.',
    details: {
      materials: '100% Linen. Lightweight and breathable.',
      sizeGuide: 'Relaxed fit with adjustable waist.',
      shippingReturns: 'Free shipping above Rs. 5,000. 7-day returns.',
    },
    featured: false,
    bestSeller: false,
    newArrival: true,
    inStock: true,
    createdAt: '2024-02-25',
    reviews: 40,
    rating: 4.4,
  },
  {
    id: '11',
    name: 'Designer Silk Dupatta',
    slug: 'designer-silk-dupatta',
    price: 2500,
    originalPrice: 3000,
    images: [
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80',
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
    ],
    category: 'accessories',
    subcategory: 'Dupattas',
    sizes: [
      { name: 'Free Size', available: true },
    ],
    colors: [
      { name: 'Red', hex: '#FF0000', available: true },
      { name: 'Blue', hex: '#0000FF', available: true },
      { name: 'Green', hex: '#00FF00', available: true },
    ],
    tags: ['silk', 'dupatta', 'designer', 'accessory'],
    description: 'Luxurious silk dupatta with designer prints. Perfect accessory to elevate any outfit.',
    details: {
      materials: 'Pure Silk. Hand printed.',
      sizeGuide: '2.5 meters length.',
      shippingReturns: 'Free shipping. 7-day returns.',
    },
    featured: false,
    bestSeller: false,
    newArrival: true,
    inStock: true,
    createdAt: '2024-03-01',
    reviews: 25,
    rating: 4.5,
  },
  {
    id: '12',
    name: 'Printed Kaftan Dress',
    slug: 'printed-kaftan-dress',
    price: 4800,
    originalPrice: 5800,
    images: [
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    ],
    category: 'womens',
    subcategory: 'Dresses',
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
    ],
    colors: [
      { name: 'Tropical Print', hex: '#228B22', available: true },
      { name: 'Abstract Blue', hex: '#4169E1', available: true },
    ],
    tags: ['kaftan', 'printed', 'resort', 'beach'],
    description: 'Relaxed printed kaftan dress perfect for resort wear and casual outings.',
    details: {
      materials: 'Rayon blend. Lightweight and flowy.',
      sizeGuide: 'Relaxed fit. One size fits most.',
      shippingReturns: 'Free shipping. 7-day returns.',
    },
    featured: false,
    bestSeller: false,
    newArrival: true,
    inStock: true,
    createdAt: '2024-03-05',
    reviews: 35,
    rating: 4.3,
  },
]

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.bestSeller)
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.newArrival)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, limit)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    p =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export function filterProducts(filters: {
  category?: string
  minPrice?: number
  maxPrice?: number
  sizes?: string[]
  colors?: string[]
  sortBy?: 'newest' | 'price-low' | 'price-high' | 'popular'
}): Product[] {
  let filtered = [...products]

  if (filters.category) {
    filtered = filtered.filter(p => p.category === filters.category)
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.minPrice!)
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice!)
  }

  if (filters.sizes && filters.sizes.length > 0) {
    filtered = filtered.filter(p =>
      p.sizes.some(s => filters.sizes!.includes(s.name) && s.available)
    )
  }

  if (filters.colors && filters.colors.length > 0) {
    filtered = filtered.filter(p =>
      p.colors.some(c => filters.colors!.includes(c.name) && c.available)
    )
  }

  switch (filters.sortBy) {
    case 'newest':
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'popular':
      filtered.sort((a, b) => b.reviews - a.reviews)
      break
  }

  return filtered
}
