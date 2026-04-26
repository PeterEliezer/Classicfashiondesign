"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/WhatsApp Image 2026-04-26 at 15.49.40 (1).jpeg"
          alt="Classic Fashion Design logo"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
            Luxury Fashion House
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-background mb-6 leading-tight text-balance">
            Classic Fashion Design is a creative fashion business based in Musanze, conveniently located along the road leading out of Musanze Gare (depot). The business specializes in designing and producing high-quality, stylish, and custom-made clothing that blends modern trends with timeless elegance.

We cater to a diverse clientele, offering tailored outfits for both men and women, including casual wear, formal attire, and special occasion garments. At Classic Fashion Design, attention to detail, quality craftsmanship, and customer satisfaction are at the heart of everything we do.

Our mission is to help individuals express their identity and confidence through fashion by delivering unique designs that reflect personal style."text-background/80 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed">
            Where timeless elegance meets modern sophistication. Discover our curated collection of premium fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-foreground font-medium tracking-widest uppercase text-sm px-8 py-6 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <Link href="#collection">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/50 text-background hover:bg-background hover:text-foreground font-medium tracking-widest uppercase text-sm px-8 py-6 transition-all duration-300"
            >
              <Link href="#shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
