import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Urbanist, Nunito } from 'next/font/google'

import './globals.css'

const urbanist = Urbanist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const nunito = Nunito({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Daniel T. Silva | Portfolio',
  description:
    'Portfolio of Daniel T. Silva, a Full Stack developer with 5 years of experience in React, Next.js, Java, Golang, and DevOps. Explore my projects and skills in web development and scalable systems.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'Java',
    'Golang',
    'DevOps',
    'Portfolio',
    'Projects',
    'Technology',
  ],
  authors: [{ name: 'Daniel T. Silva' }],
  openGraph: {
    title: 'Daniel T. Silva | Portfolio',
    description:
      'Discover the work of Daniel T. Silva, a Full Stack development expert specializing in React, Java, and Golang.',
    url: 'https://7silva.vercel.app',
    siteName: 'Daniel T. Silva Portfolio',
    images: [
      {
        url: 'https://7silva.vercel.app/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Daniel T. Silva Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel T. Silva | Portfolio',
    description:
      'Portfolio of a Full Stack developer passionate about technology and innovation.',
    images: 'https://7silva.vercel.app/favicon.ico',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${urbanist.variable} ${nunito.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
