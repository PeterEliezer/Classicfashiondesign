import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Classic Fashion Design is a creative fashion business based in Musanze, conveniently located along the road leading out of Musanze Gare (depot). The business specializes in designing and producing high-quality, stylish, and custom-made clothing that blends modern trends with timeless elegance.

We cater to a diverse clientele, offering tailored outfits for both men and women, including casual wear, formal attire, and special occasion garments. At Classic Fashion Design, attention to detail, quality craftsmanship, and customer satisfaction are at the heart of everything we do.

Our mission is to help individuals express their identity and confidence through fashion by delivering unique designs that reflect personal style.: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
