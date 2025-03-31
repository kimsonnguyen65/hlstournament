import localFont from 'next/font/local'
import '@/styles/all.scss'
import ResizeListener from '@/lib/ResizeListener'
// import './globals.scss'
import Header from './components/Header'

// Font files can be colocated inside of `app`
const frizQuadrata = localFont({
  src: [
    {
      path: '../styles/fonts/FrizQuadrataRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/FrizQuadrataBold.woff2',
      weight: '700',
      style: 'bold',
    }
  ],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

// Tách riêng viewport config
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
}

export const metadata = {
  title: 'HLS Tournament',
  description: 'HLS Tournament - A gaming tournament platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={frizQuadrata.className}>
      <body>
        <Header />
        <ResizeListener />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
