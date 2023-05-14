import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XANDE DEV',
  description: 'Meu portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-bluebg text-primarytext overflow-hidden h-full }`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}