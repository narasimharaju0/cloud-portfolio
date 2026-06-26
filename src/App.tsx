import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { GridBackground } from './components/layout/GridBackground'
import { Hero } from './components/sections/Hero'
import { Metrics } from './components/sections/Metrics'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { ResumeTerminal } from './components/sections/ResumeTerminal'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Skills />
        <Projects />
        <ResumeTerminal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
