import './globals.css'
import './components.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import { link } from 'fs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Xanart Studios',
  description: 'Xanart, vos pones la idea nosotros el arte.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body className={inter.className}>{children}</body>
    </html>
  )
}
