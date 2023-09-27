import "./Sass/main.scss"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Poc from "./components/Poc"
import Features from "./components/Features"
import Testimonial from "./components/Testimonial"
import FAQ from "./components/FAQ"
import Cta from "./components/Cta"
import Footer from "./components/Footer"

function App() {

  return(
    <>
    <Nav />
    <main>
      <Hero />
      <Poc />
      <Features />
      <Testimonial />
      <FAQ />
      <Cta />
    </main>
    <Footer />
    </>
  )
}

export default App
