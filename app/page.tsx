import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedCollection from "@/components/featured-collection"
import About from "@/components/about"
import Shop from "@/components/shop"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <About />
      <Shop />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
