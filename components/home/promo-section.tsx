'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function PromoSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-foreground text-background">
          <div className="grid lg:grid-cols-2 min-h-[400px] md:min-h-[500px]">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center p-8 md:p-12 lg:p-16"
            >
              <span className="text-sm font-medium tracking-wider uppercase text-background/70 mb-4">
                Special Offer
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Exclusive Deals
                <br />
                Just For You
              </h2>
              <p className="text-background/80 mb-8 max-w-md">
                Get up to 30% off on selected items. Limited time offer on our premium collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <Link href="/shop?filter=sale">
                    Shop Sale
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Countdown or Feature badges */}
              <div className="flex gap-6 mt-8 pt-8 border-t border-background/20">
                <div>
                  <p className="text-2xl font-bold">30%</p>
                  <p className="text-sm text-background/70">Max Discount</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">Free</p>
                  <p className="text-sm text-background/70">Shipping</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">7 Days</p>
                  <p className="text-sm text-background/70">Easy Returns</p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80"
                alt="Special offer collection"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground to-transparent" />
            </motion.div>
          </div>

          {/* Mobile Image overlay */}
          <div className="absolute inset-0 lg:hidden -z-10">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Special offer collection"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
