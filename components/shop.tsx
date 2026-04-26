"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart } from "lucide-react"

const categories = ["All", "Men", "Women", "Accessories"]

const products = [
  {
    id: 1,
    name: "Signature Blazer",
    category: "Women",
    price: 890,
    image: "/images/women-outfit-1.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Noir Evening Dress",
    category: "Women",
    price: 1250,
    image: "/images/women-outfit-2.jpg",
    isNew: false,
  },
  {
    id: 3,
    name: "Classic Black Suit",
    category: "Men",
    price: 1450,
    image: "/images/men-outfit-1.jpg",
    isNew: true,
  },
  {
    id: 4,
    name: "Luxury Designer Jacket",
    category: "Men",
    price: 980,
    image: "/images/men-outfit-2.jpg",
    isNew: false,
  },
  {
    id: 5,
    name: "Designer Handbag",
    category: "Accessories",
    price: 650,
    image: "/images/product-1.jpg",
    isNew: true,
  },
  {
    id: 6,
    name: "Gold Accent Sunglasses",
    category: "Accessories",
    price: 320,
    image: "/images/product-2.jpg",
    isNew: false,
  },
  {
    id: 7,
    name: "Gold Jewelry Set",
    category: "Accessories",
    price: 480,
    image: "/images/product-3.jpg",
    isNew: true,
  },
  {
    id: 8,
    name: "Leather Designer Belt",
    category: "Accessories",
    price: 220,
    image: "/images/product-4.jpg",
    isNew: false,
  },
]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [likedProducts, setLikedProducts] = useState<number[]>([])

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

  const toggleLike = (id: number) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  return (
    <section id="shop" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Premium Selection</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Shop Collection
          </h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`tracking-widest uppercase text-xs px-6 py-5 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "border-foreground/20 hover:border-gold hover:text-gold"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-background">
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-gold px-3 py-1">
                    <span className="text-[10px] text-foreground tracking-widest uppercase font-semibold">
                      New
                    </span>
                  </div>
                )}
                {/* Like Button */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      likedProducts.includes(product.id)
                        ? "fill-gold text-gold"
                        : "text-foreground"
                    }`}
                  />
                </button>
                {/* Add to Cart */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <Button className="w-full bg-foreground hover:bg-foreground/90 text-background tracking-widest uppercase text-xs py-6 gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  {product.category}
                </p>
                <h3 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-base font-semibold text-gold">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
