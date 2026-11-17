import Nav from './components/Nav'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import Approach from './components/Approach'
import Gallery from './components/Gallery'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#services">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Approach />
        <Gallery />
        <Work />
        <Testimonials />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
