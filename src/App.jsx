import { DemoModalProvider } from './context/DemoModalContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Benefits } from './components/sections/Benefits'
import { Problems } from './components/sections/Problems'
import { Solutions } from './components/sections/Solutions'
import { Technology } from './components/sections/Technology'
import { DashboardPreview } from './components/sections/DashboardPreview'
import { CTA } from './components/sections/CTA'

function App() {
  return (
    <DemoModalProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Benefits />
          <Problems />
          <Solutions />
          <Technology />
          <DashboardPreview />
          <CTA />
        </main>
        <Footer />
      </div>
    </DemoModalProvider>
  )
}

export default App
