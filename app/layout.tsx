import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'
import Footer from './footer'
import GoogleAnalytics from './googleAnalytics'
import ClickCease from './clickcease'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <GoogleAnalytics GA_TRACKING_ID='G-R7BLYLEC7F' />
        <Header />
        {children}
        <Footer />
      </body>
      {/* <ClickCease/> */}
    </html>
  )
}
