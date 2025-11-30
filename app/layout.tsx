import type { Metadata } from 'next'
import './globals.css'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
        {/* FAVICONS */}
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Manifest (si tu en as un) */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

