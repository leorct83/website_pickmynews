import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "PickMyNews — L'actualité qui compte, quand vous le décidez",
  description: "Fini le bruit. Recevez uniquement les news qui comptent pour vous, au moment parfait. Newsletter personnalisée par thème, fréquence et horaire.",
  keywords: "newsletter personnalisée, actualité sur mesure, veille automatique, news curated",
  openGraph: {
    title: "PickMyNews — L'actualité qui compte, quand vous le décidez",
    description: "Fini le bruit. Recevez uniquement les news qui comptent pour vous.",
    type: 'website',
    locale: 'fr_FR',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`scroll-smooth ${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
