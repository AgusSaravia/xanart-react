import './globals.css'
import './components.css'
import { New_Rocker } from 'next/font/google'
import { link } from 'fs'



 
const new_rocker = New_Rocker({
  weight: '400',
  subsets: ['latin'],
})
export const metadata = {
  title: 'Xanart Studios',
  description: 'Xanart, vos pones la idea nosotros el arte.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={new_rocker.className}>{children}</body>
    </html>
  )
}
