import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Checkout | ADEAZ',
  description: 'Complete your purchase at ADEAZ.',
}

export default function CheckoutPage() {
  return (
    <div className="py-8">
      <Container>
        <Breadcrumbs
          items={[{ label: 'Cart', href: '/cart' }, { label: 'Checkout' }]}
          className="mb-6"
        />

        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Checkout
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            This is a demo checkout page. In a real application, this would 
            integrate with a payment processor like Stripe or Razorpay.
          </p>

          <div className="bg-muted/30 rounded-2xl p-8 mb-8">
            <h2 className="font-semibold mb-4">Demo Features</h2>
            <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-sm mx-auto">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                Payment gateway integration (Stripe/Razorpay)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                Address form with validation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                Order confirmation and receipt
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                Email notifications
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/cart">Back to Cart</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
