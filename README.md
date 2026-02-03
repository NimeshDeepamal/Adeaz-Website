# ADEaZ - Premium Streetwear & Fashion

A modern, responsive e-commerce website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![ADEaZ Preview](https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80)

## Features

- **Modern UI/UX**: Clean, minimal design with premium aesthetics
- **Fully Responsive**: Mobile-first approach, works beautifully on all devices
- **Performance Optimized**: Next.js Image optimization, dynamic imports
- **Accessible**: Proper ARIA labels, keyboard navigation, focus states
- **SEO Ready**: Metadata, OpenGraph, semantic HTML

### Pages

- **Home**: Hero section, featured categories, new arrivals, promo banner, best sellers, newsletter
- **Shop**: Product grid with search, filters (category, size, color, price), sorting
- **Product Details**: Image gallery, size/color selectors, quantity, add to cart, details accordion
- **Cart**: Item management, promo codes, order summary
- **About**: Brand story, values, mission
- **Contact**: Contact form with validation

### Tech Stack

- [Next.js 14](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) primitives (shadcn/ui style)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) icons
- [Zustand](https://zustand-demo.pmnd.rs/) ready (using React Context for cart)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/adeaz-website.git
   cd adeaz-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── cart/
│   ├── checkout/
│   ├── contact/
│   ├── login/
│   ├── product/[slug]/
│   ├── shop/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── cart/               # Cart drawer component
│   ├── home/               # Home page sections
│   ├── layout/             # Header, Footer
│   ├── product/            # Product card, grid, gallery, details
│   ├── shop/               # Shop filters, content
│   └── ui/                 # Reusable UI components
├── data/
│   └── products.ts         # Mock product data
├── lib/
│   ├── cart-context.tsx    # Cart state management
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Design System

### Colors

- Background: White (#FFFFFF)
- Foreground: Near-black (#0A0A0A)
- Muted: Light gray (#F5F5F5)
- Border: Light border (#E5E5E5)

### Typography

- Display font: Playfair Display (for headings)
- Body font: Inter (for text)

### Spacing

- Consistent 8px spacing system
- Large paddings for breathing room
- rounded-2xl for cards

### Components

All UI components follow shadcn/ui patterns:
- Button (multiple variants)
- Input
- Badge
- Select
- Sheet/Drawer
- Accordion
- Toast
- Skeleton
- Slider

## Customization

### Adding Products

Edit `/data/products.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  slug: 'product-slug',
  price: 5000,
  originalPrice: 6000, // optional
  images: ['url1', 'url2'],
  category: 'womens' | 'mens' | 'accessories',
  sizes: [{ name: 'S', available: true }],
  colors: [{ name: 'White', hex: '#FFFFFF', available: true }],
  // ... other fields
}
```

### Styling

Customize the theme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: 'your-color',
      // ...
    }
  }
}
```

## API Integration

The app is designed for easy API integration:

1. Replace mock data imports with API calls
2. Use React Query or SWR for data fetching
3. Connect cart context to backend
4. Add authentication with NextAuth.js

## License

MIT License

## Credits

- Images: [Unsplash](https://unsplash.com/)
- Icons: [Lucide](https://lucide.dev/)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
