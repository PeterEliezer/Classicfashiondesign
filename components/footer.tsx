"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "#shop" },
    { name: "Women", href: "#shop" },
    { name: "Men", href: "#shop" },
    { name: "Accessories", href: "#shop" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Size Guide", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "FAQ", href: "#" },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-foreground pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="text-center mb-16 pb-16 border-b border-background/10">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Stay Updated</p>
          <h3 className="font-serif text-3xl md:text-4xl text-background mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-background/60 mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive offers, and fashion insights.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/40 py-6 px-4"
            />
            <Button
              type="submit"
              className="bg-gold hover:bg-gold-light text-foreground tracking-widest uppercase text-xs px-8 py-6"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="#home">
              <h2 className="font-serif text-2xl text-background mb-4">
                <span className="text-gold">Classic</span> Fashion
              </h2>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Where timeless elegance meets modern sophistication.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/classic_fashion_design02?igsh=Mmtqa3R6ejh3d2k="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 flex items-center justify-center text-background hover:bg-gold hover:text-foreground transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@classicfashiondesign7164?si=TpIyprMe5eyEnJzq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 flex items-center justify-center text-background hover:bg-gold hover:text-foreground transition-all duration-300"
              >
                {/* YouTube SVG icon */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.197 3.5 12 3.5 12 3.5s-7.197 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.38 0 12 0 12s0 3.62.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.803 20.5 12 20.5 12 20.5s7.197 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.62 24 12 24 12s0-3.62-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://x.com/design98436"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 flex items-center justify-center text-background hover:bg-gold hover:text-foreground transition-all duration-300"
              >
                {/* X (Twitter) SVG icon */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2H21.5l-7.19 8.21L22.09 22h-6.81l-5.36-6.61L2.47 22H.5l7.64-8.72L1.13 2h6.81l5.01 6.18L17.53 2zm-1.13 17.3h1.89l-5.39-6.66-1.89-2.34-5.13-6.34H4.06l5.39 6.66 1.89 2.34 5.13 6.34z"/></svg>
              </a>
            </div>

            {/* CEO Section */}
            <div className="flex items-center gap-3 mt-2">
              <img
                src="/images/ceo-emile-mashyengo.png"
                alt="CEO Emile Mashyengo"
                className="w-12 h-12 rounded-full object-cover border-2 border-gold"
              />
              <div>
                <p className="text-background font-semibold leading-tight">Emile Mashyengo</p>
                <p className="text-background/60 text-xs">CEO</p>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-background font-medium tracking-wider uppercase text-sm mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-background font-medium tracking-wider uppercase text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-background font-medium tracking-wider uppercase text-sm mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Classic Fashion Design. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-background/40 hover:text-gold text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/40 hover:text-gold text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
