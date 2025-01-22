import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import GoogleAnalytics from './GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Couch to Startup',
    template: '%s | Couch to Startup',
  },
  description: 'Welcome to Couch to Startup, an honest and unfiltered journal of my journey from living a life of comfort to creating something meaningful.',
  openGraph: {
    title: 'Couch to Startup',
    description: 'Welcome to Couch to Startup, an honest and unfiltered journal of my journey from a life of comfort to creating something meaningful. I’m sharing the lessons, challenges, and breakthroughs as I step into the world of entrepreneurship and personal growth.',
    url: baseUrl,
    siteName: 'Couch to Startup',
    locale: 'en_US',
    type: 'website',
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
}


const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <GoogleAnalytics />
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
