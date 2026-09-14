
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projets";
import Workflow from "./components/Workflow";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <Projects />
        <Workflow />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
 
  )
}

export default App
