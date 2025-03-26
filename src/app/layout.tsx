import type { Metadata } from 'next'
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
  title: 'Daniel T. Silva',
  description: '',
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
      </body>
    </html>
  )
}
