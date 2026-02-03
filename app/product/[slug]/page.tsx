import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { ProductDetails } from '@/components/product/product-details'
import { RelatedProducts } from '@/components/product/related-products'
import { getProductBySlug, getRelatedProducts, products } from '@/data/products'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found | ADEaZ',
    }
  }

  return {
    title: `${product.name} | ADEaZ`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product, 4)

  const categoryName =
    product.category === 'womens'
      ? 'Women'
      : product.category === 'mens'
      ? 'Men'
      : 'Accessories'

  return (
    <div className="py-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Shop', href: '/shop' },
            { label: categoryName, href: `/shop?category=${product.category}` },
            { label: product.name },
          ]}
          className="mb-6"
        />

        <ProductDetails product={product} />

        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </Container>
    </div>
  )
}
