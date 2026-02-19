import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Opensea Marine Resources Limited | Maritime Services & Oil & Gas Solutions',
  description: 'Leading indigenous maritime service provider in Nigeria. Specializing in AHT vessels, PSV vessels, swamp rigs, land rigs, and comprehensive oil & gas logistics.',
  keywords: 'maritime services, oil and gas, AHT vessels, PSV vessels, swamp rigs, land rigs, marine logistics, Nigeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

