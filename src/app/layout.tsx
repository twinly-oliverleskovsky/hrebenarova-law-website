import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider, AccessibilityProvider } from '@/components'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hrebenarova-advokatka.sk'),
  title: 'JUDr. Iveta Hrebenárová | Advokátka Prešov | Právne služby',
  description: 'Profesionálne právne služby v Prešove. Občianske, obchodné, rodinné a pracovné právo. Individuálny prístup ku každému klientovi. JUDr. Iveta Hrebenárová - advokátka s dlhoročnou praxou.',
  keywords: [
    'advokát Prešov',
    'advokátka Prešov',
    'právnik Prešov',
    'právne služby Prešov',
    'občianske právo',
    'obchodné právo',
    'rodinné právo',
    'pracovné právo',
    'JUDr. Iveta Hrebenárová',
    'advokátska kancelária Prešov',
    'právne poradenstvo',
    'zmluvy',
    'rozvod',
    'dedičstvo',
  ],
  authors: [{ name: 'JUDr. Iveta Hrebenárová' }],
  creator: 'JUDr. Iveta Hrebenárová',
  publisher: 'JUDr. Iveta Hrebenárová',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'JUDr. Iveta Hrebenárová | Advokátka Prešov',
    description: 'Profesionálne právne služby v Prešove s individuálnym prístupom ku každému klientovi.',
    url: 'https://hrebenarova-advokatka.sk',
    siteName: 'JUDr. Iveta Hrebenárová - Advokátska kancelária',
    locale: 'sk_SK',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JUDr. Iveta Hrebenárová - Advokátska kancelária Prešov',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JUDr. Iveta Hrebenárová | Advokátka Prešov',
    description: 'Profesionálne právne služby v Prešove s individuálnym prístupom ku každému klientovi.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hrebenarova-advokatka.sk',
  },
  category: 'Legal Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1B4332" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Attorney',
              name: 'JUDr. Iveta Hrebenárová',
              description: 'Profesionálne právne služby v Prešove s individuálnym prístupom ku každému klientovi.',
              url: 'https://hrebenarova-advokatka.sk',
              telephone: '+421517710289',
              email: 'iveta.hrebenarova@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Grešova 7',
                addressLocality: 'Prešov',
                postalCode: '080 01',
                addressCountry: 'SK',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.9977,
                longitude: 21.2393,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
              priceRange: '$$',
              areaServed: {
                '@type': 'Place',
                name: 'Prešovský kraj',
              },
              memberOf: {
                '@type': 'Organization',
                name: 'Slovenská advokátska komora',
              },
              knowsAbout: [
                'Občianske právo',
                'Obchodné právo',
                'Rodinné právo',
                'Pracovné právo',
                'Trestné právo',
                'Právo nehnuteľností',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-cream-100 dark:bg-dark-900 transition-colors duration-300">
        <ThemeProvider>
          <AccessibilityProvider>
            {children}
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
