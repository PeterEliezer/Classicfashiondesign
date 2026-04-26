"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sophia Anderson",
    role: "Fashion Blogger",
    content:
      "Classic Fashion Design has completely transformed my wardrobe. The quality and attention to detail in every piece is simply unmatched. I feel confident and elegant every time I wear their designs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    content:
      "As someone who values both style and professionalism, I can confidently say that their suits are the finest I've ever owned. The fit is impeccable, and the craftsmanship is exceptional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Isabella Martinez",
    role: "Art Director",
    content:
      "The evening gown I purchased for a gala was absolutely stunning. I received countless compliments throughout the night. Classic Fashion Design truly understands the art of elegance.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Client Love</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            What Our Clients Say
          </h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-secondary p-8 md:p-10 relative transition-all duration-500 hover:bg-foreground"
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-gold/30 mb-6 group-hover:text-gold/50 transition-colors duration-500" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/70 leading-relaxed mb-8 group-hover:text-background/70 transition-colors duration-500">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6 group-hover:border-background/20 transition-colors duration-500">
                <p className="font-serif text-lg text-foreground group-hover:text-background transition-colors duration-500">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
