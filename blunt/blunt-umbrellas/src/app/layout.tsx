import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BLUNT Umbrellas - Engineered to Endure',
  description:
    'Discover BLUNT Umbrellas - engineered with patented technology to withstand the elements. Shop our collection of premium, wind-resistant umbrellas.',
  keywords: 'umbrellas, BLUNT, weather protection, wind resistant, premium umbrellas',
  openGraph: {
    title: 'BLUNT Umbrellas - Engineered to Endure',
    description:
      'Discover BLUNT Umbrellas - engineered with patented technology to withstand the elements.',
    url: 'https://bluntumbrellas.com',
    siteName: 'BLUNT Umbrellas',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BLUNT Umbrellas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLUNT Umbrellas - Engineered to Endure',
    description:
      'Discover BLUNT Umbrellas - engineered with patented technology to withstand the elements.',
    images: ['/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
