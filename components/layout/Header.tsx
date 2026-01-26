'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { useCart } from '@/lib/cart-context'
import { CartDrawer } from '@/components/cart/cart-drawer'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const shopDropdownItems = [
  { name: 'All Products', href: '/shop' },
  { name: 'Women', href: '/shop?category=womens' },
  { name: 'Men', href: '/shop?category=mens' },
  { name: 'New Arrivals', href: '/shop?filter=new' },
  { name: 'Best Sellers', href: '/shop?filter=bestseller' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)
  const pathname = usePathname()
  const { itemCount, isOpen, setIsOpen } = useCart()
  
  const isShopActive = pathname?.startsWith('/shop')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-white'
        )}
      >
        <Container>
          <div className="flex h-20 md:h-24 items-center justify-between">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                ADEAZ
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  'text-sm font-medium transition-colors hover:text-foreground relative py-2',
                  pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                Home
                {pathname === '/' && (
                  <motion.div
                    layoutId="header-active"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>

              {/* Shop Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <Link
                  href="/shop"
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-foreground relative py-2 flex items-center gap-1',
                    isShopActive ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  Shop
                  <ChevronDown className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    isShopDropdownOpen && 'rotate-180'
                  )} />
                  {isShopActive && (
                    <motion.div
                      layoutId="header-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {isShopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50"
                    >
                      {shopDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Items */}
              {navigation.map((item) => {
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-foreground relative py-2',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="header-active"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>

              <Link href="/login">
                <Button variant="ghost" size="icon" aria-label="Account">
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsOpen(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-foreground text-[10px] font-medium text-background flex items-center justify-center"
                  >
                    {itemCount > 99 ? '99+' : itemCount}
                  </motion.span>
                )}
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20 md:h-24" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-full max-w-xs bg-white lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-display text-xl font-bold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="p-4">
                <ul className="space-y-1">
                  {/* Home */}
                  <li>
                    <Link
                      href="/"
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                        pathname === '/'
                          ? 'bg-muted text-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                    >
                      Home
                    </Link>
                  </li>

                  {/* Shop Section */}
                  <li>
                    <Link
                      href="/shop"
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                        pathname === '/shop' && !pathname?.includes('?')
                          ? 'bg-muted text-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                    >
                      Shop
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 border-l-2 border-muted pl-4">
                      {shopDropdownItems.slice(1).map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Other Nav Items */}
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                            isActive
                              ? 'bg-muted text-foreground'
                              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                          )}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}
