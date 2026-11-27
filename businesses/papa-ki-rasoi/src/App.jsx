import PlanBuilder from './components/PlanBuilder.jsx'
import {
  FAQ,
  Footer,
  Hero,
  How,
  Marquee,
  Navbar,
  Pitch,
  PreviewBar,
  Reviews,
  StickyCTA,
  Visit,
  Why,
} from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <PreviewBar />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Why />
        <How />
        <PlanBuilder />
        <Reviews />
        <FAQ />
        <Visit />
        <Pitch />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
