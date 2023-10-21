import { Footer, MiniBanner, Navbar, Section_7, Section_Form } from './components'
import './globals.css'


export const metadata = {
  title: 'Devot-AI',
  description: 'Revolutionizing Industries with AI solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Section_7 />
        <MiniBanner />
        <Section_Form />
        <Footer />
      </body>
    </html>
  )
}
