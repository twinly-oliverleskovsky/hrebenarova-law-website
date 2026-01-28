import {
  Navigation,
  Hero,
  About,
  Services,
  WhyMe,
  Process,
  Testimonials,
  FAQ,
  Contact,
  Footer,
  CookieConsent,
  FloatingUI,
} from '@/components'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyMe />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <FloatingUI />
    </>
  )
}
