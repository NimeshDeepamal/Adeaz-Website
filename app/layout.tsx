import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CartProvider } from '@/lib/cart-context'
import { AuthProvider } from '@/lib/auth-context'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'ADEAZ | Premium Streetwear & Fashion',
  description: 'Discover the style that moves with you. Premium streetwear and fashion for the modern individual.',
  keywords: ['streetwear', 'fashion', 'clothing', 'premium', 'minimal', 'style'],
  openGraph: {
    title: 'ADEAZ | Premium Streetwear & Fashion',
    description: 'Discover the style that moves with you. Premium streetwear and fashion for the modern individual.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ADEAZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADEAZ | Premium Streetwear & Fashion',
    description: 'Discover the style that moves with you.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
