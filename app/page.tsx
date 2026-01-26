import { HeroSection } from '@/components/home/hero-section'
import { CategoriesSection } from '@/components/home/categories-section'
import { NewArrivalsSection } from '@/components/home/new-arrivals-section'
import { PromoSection } from '@/components/home/promo-section'
import { BestSellersSection } from '@/components/home/best-sellers-section'
import { NewsletterSection } from '@/components/home/newsletter-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <NewArrivalsSection />
      <PromoSection />
      <BestSellersSection />
      <NewsletterSection />
    </>
  )
}
