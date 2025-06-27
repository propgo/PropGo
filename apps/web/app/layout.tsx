import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/lib/auth-context'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PropGo.my - AI-Enhanced B2B Real Estate SaaS Platform',
  description: 'Malaysia\'s premier B2B real estate platform connecting agents, lawyers, bankers, and property professionals with AI-powered tools and seamless transaction management.',
  keywords: [
    'Malaysia real estate',
    'property management',
    'real estate agents',
    'property lawyers',
    'banking',
    'AI real estate',
    'B2B platform',
    'property transactions'
  ],
  authors: [{ name: 'PropGo.my Team' }],
  creator: 'PropGo.my',
  publisher: 'PropGo.my',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://propgo.my'),
  openGraph: {
    title: 'PropGo.my - AI-Enhanced B2B Real Estate SaaS Platform',
    description: 'Malaysia\'s premier B2B real estate platform connecting agents, lawyers, bankers, and property professionals.',
    url: 'https://propgo.my',
    siteName: 'PropGo.my',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PropGo.my - B2B Real Estate Platform',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PropGo.my - AI-Enhanced B2B Real Estate SaaS Platform',
    description: 'Malaysia\'s premier B2B real estate platform for property professionals.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-MY" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4A6CF7" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-background font-sans antialiased">
            <main className="relative flex min-h-screen flex-col">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
} 