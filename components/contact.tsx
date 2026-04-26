"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-background mb-8 text-balance">
              Contact Us
            </h2>
            <p className="text-background/70 leading-relaxed mb-12 max-w-md">
              We&apos;d love to hear from you. Whether you have a question about our collection, 
              need styling advice, or want to place a custom order, our team is here to help.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-background/60 mb-1 tracking-wider uppercase">Phone</p>
                  <a
                    href="tel:+250 784 894 913"
                    className="text-background hover:text-gold transition-colors duration-300"
                  >
                    +250 784 894 913
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-background/60 mb-1 tracking-wider uppercase">Email</p>
                  <a
                    href="mailto:emilemashyengo65@gmail.com"
                    className="text-background hover:text-gold transition-colors duration-300"
                  >
                    emilemashyengo65@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-background/60 mb-1 tracking-wider uppercase">Location</p>
                  <p className="text-background">
                    123 Fashion Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-12">
              <a
                href="https://wa.me/+250 784 894 913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-4 transition-all duration-300 hover:translate-y-[-2px]"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 md:p-12">
            <h3 className="font-serif text-2xl text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary border-0 py-6 px-4 focus:ring-gold"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary border-0 py-6 px-4 focus:ring-gold"
                  placeholder="emilemashyengo65@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary border-0 px-4 py-3 focus:ring-gold resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-foreground hover:bg-foreground/90 text-background tracking-widest uppercase text-sm py-6 gap-2 transition-all duration-300 hover:translate-y-[-2px]"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
