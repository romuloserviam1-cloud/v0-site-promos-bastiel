import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: 'Promos do Bastiel | As Melhores Promoções da Internet',
  description: 'Encontre as melhores promoções da internet com descontos reais de lojas confiáveis. Entre no grupo gratuito e economize em suas compras!',
  keywords: 'promoções, descontos, ofertas, amazon, mercado livre, shopee, economia, compras online',
  authors: [{ name: 'Promos do Bastiel' }],
  openGraph: {
    title: 'Promos do Bastiel | As Melhores Promoções da Internet',
    description: 'Encontre as melhores promoções da internet com descontos reais de lojas confiáveis.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Promos do Bastiel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promos do Bastiel | As Melhores Promoções da Internet',
    description: 'Encontre as melhores promoções da internet com descontos reais de lojas confiáveis.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export const viewport = {
  themeColor: '#141413',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
