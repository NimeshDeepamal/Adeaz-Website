import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'About Us | ADEAZ',
  description: 'Learn about ADEAZ - our story, mission, and commitment to premium fashion.',
}

const values = [
  {
    title: 'Quality First',
    description: 'We source only the finest materials and work with skilled artisans to create pieces that last.',
  },
  {
    title: 'Sustainable Fashion',
    description: 'Committed to reducing our environmental impact through ethical sourcing and responsible production.',
  },
  {
    title: 'Inclusive Style',
    description: 'Fashion for everyone. We celebrate diversity and create styles that empower all individuals.',
  },
  {
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We are dedicated to providing exceptional service at every touchpoint.',
  },
]

const stats = [
  { label: 'Years of Excellence', value: '10+' },
  { label: 'Happy Customers', value: '50k+' },
  { label: 'Products Sold', value: '100k+' },
  { label: 'Team Members', value: '200+' },
]

export default function AboutPage() {
  return (
    <div className="py-8">
      <Container>
        <Breadcrumbs items={[{ label: 'About Us' }]} className="mb-6" />

        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              ADEAZ was born from a simple idea: everyone deserves access to premium, 
              stylish fashion that doesn&apos;t compromise on quality or ethics.
            </p>
            <p className="text-muted-foreground mb-8">
              Founded in 2014, we started as a small boutique with a passion for 
              traditional craftsmanship and modern aesthetics. Today, we&apos;ve grown 
              into a beloved brand serving customers across the globe, but our 
              commitment to quality and customer satisfaction remains unchanged.
            </p>
            <Button size="lg" asChild>
              <Link href="/shop">
                Explore Our Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80"
              alt="ADEAZ store interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-muted/30 rounded-3xl mb-16 md:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from design to delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80"
              alt="Fashion workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-4">
              We believe that fashion should be accessible, sustainable, and empowering. 
              Our mission is to create clothing that makes you feel confident and 
              comfortable while respecting our planet and the people who make our products.
            </p>
            <p className="text-muted-foreground mb-4">
              Every piece in our collection is thoughtfully designed, ethically produced, 
              and made to last. We work directly with artisans and manufacturers who 
              share our commitment to fair wages and safe working conditions.
            </p>
            <p className="text-muted-foreground">
              When you choose ADEAZ, you&apos;re not just buying clothes – you&apos;re 
              supporting a movement towards more conscious fashion.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 md:py-16 bg-foreground text-background rounded-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join the ADEAZ Family
          </h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Discover our latest collection and experience the ADEAZ difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background/10"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  )
}
