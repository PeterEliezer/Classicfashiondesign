"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye } from "lucide-react"

const collections = [
  {
    id: 1,
    name: "Tailored Elegance",
    category: "Women",
    price: "",
    image: "/images/WhatsApp Image 2026-04-26 at 15.49.40.jpeg",
  },
  {
    id: 2,
    name: "Evening Noir",
    category: "Women",
    price: ",250",
    image: "/images/women-outfit-2.jpg",
  },
  {
    id: 3,
    name: "Classic Suit",
    category: "Men",
    price: ",450",
    image: "/images/men-outfit-1.jpg",
  },
  {
    id: 4,
    name: "Urban Luxury",
    category: "Men",
    price: "",
    image: "/images/men-outfit-2.jpg",
  },
]

export default function FeaturedCollection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="collection" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">New Season</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Featured Collection
          </h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-foreground/60 flex items-center justify-center transition-opacity duration-500 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center text-background transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Eye className="h-8 w-8 mx-auto mb-3" />
                    <p className="text-sm tracking-widest uppercase">Quick View</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4 space-y-1">
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  {item.category}
                </p>
                <h3 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sm font-medium text-gold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
