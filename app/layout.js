import localFont from 'next/font/local'
import '@/styles/all.scss'

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
})

export const metadata = {
  title: 'HLS Tournament',
  description: 'Group Stage | HLS Tournament',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={frizQuadrata.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
