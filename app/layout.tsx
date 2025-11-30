import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next";


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
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}