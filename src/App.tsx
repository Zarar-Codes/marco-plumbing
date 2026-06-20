import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { EmergencyBanner } from './components/EmergencyBanner'
import Home from './pages/Home'
import Residential from './pages/Residential'
import Commercial from './pages/Commercial'
import NewConstruction from './pages/NewConstruction'
import AboutMarco from './pages/AboutMarco'
import AboutMentorship from './pages/AboutMentorship'
import ServiceAreas from './pages/ServiceAreas'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import RealEstate from './pages/RealEstate'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#e0e5ec] relative">
      <div className="noise-overlay" />
      <EmergencyBanner />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/new-construction" element={<NewConstruction />} />
            <Route path="/about/marco" element={<AboutMarco />} />
            <Route path="/about/mentorship" element={<AboutMentorship />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/real-estate" element={<RealEstate />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
