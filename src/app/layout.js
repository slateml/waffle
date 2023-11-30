import { Inter } from 'next/font/google'
import './globals.css'

import { Hotkeys } from './components/Hotkeys.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Waffle',
  description: 'Your ML intern',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hotkeys />
        {children}
      </body>
    </html>
  )
}
