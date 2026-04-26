import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about.jpeg"
                alt="Our Atelier"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Border */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border border-gold -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-background mb-8 text-balance">
              Crafting Elegance Since 2010
            </h2>
            <div className="space-y-6 text-background/70 leading-relaxed">
              <p>
                At Classic Fashion Design, we believe that true elegance transcends trends. Founded with a passion for 
                timeless sophistication, our brand has been dedicated to creating pieces that make you feel confident, 
                powerful, and undeniably stylish.
              </p>
              <p>
                Every garment in our collection is crafted with meticulous attention to detail, using only the finest 
                fabrics sourced from around the world. Our designs blend classic silhouettes with contemporary elements, 
                creating a unique aesthetic that speaks to the modern individual.
              </p>
              <p>
                We don&apos;t just create clothes — we create statements. Each piece is designed to become a cherished 
                part of your wardrobe, standing the test of time both in quality and style.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-background/20">
              <div>
                <p className="font-serif text-4xl md:text-5xl text-gold">15+</p>
                <p className="text-sm text-background/60 mt-2 tracking-wider uppercase">Years</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-gold">50K+</p>
                <p className="text-sm text-background/60 mt-2 tracking-wider uppercase">Clients</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-gold">200+</p>
                <p className="text-sm text-background/60 mt-2 tracking-wider uppercase">Designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
