import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'
import FoundersNoteSection from './components/FoundersNoteSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <FoundersNoteSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

export default App
