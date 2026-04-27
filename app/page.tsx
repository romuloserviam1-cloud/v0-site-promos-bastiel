import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { DailyOffers } from "@/components/daily-offers"
import { Differentials } from "@/components/differentials"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { FloatingOffersButton } from "@/components/floating-offers-button"

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingOffersButton />
      <main>
        <Hero />
        <About />
        <Services />
        <DailyOffers />
        <Differentials />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
