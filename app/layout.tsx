import './globals.css'
import { Poppins } from 'next/font/google'
import { Navbar } from '@/components';
import AuthProvider from './AuthProvider';

const defaultFont = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${defaultFont.className}`}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </body>
    </html>
  )
}
