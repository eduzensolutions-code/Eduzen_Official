import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
    </main>
  )
}

export default App
