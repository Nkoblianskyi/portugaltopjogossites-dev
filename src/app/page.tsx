import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { OurChoiceSection } from "@/components/our-choice-section"
import { InfoSections } from "@/components/info-sections"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CasinoModal } from "@/components/casino-modal"

export default function HomePage() {
  return (
    <div className="space-y-2.5">
      <Header />
      <Hero />
      <RatingSection />
      <InfoSections />
      <OurChoiceSection />
      <Footer />
      <CookieBanner />
      <CasinoModal />
    </div>
  )
}
