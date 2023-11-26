import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alexandre Bastos',
  description: 'Meu portfólio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-bluebg text-primarytext }`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}