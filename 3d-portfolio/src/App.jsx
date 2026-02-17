import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Logos from "./sections/Logos"
import Showcase from "./sections/Showcase"
import TechStack from "./sections/TechStack"
import Testimonial from "./sections/Testimonial"

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Showcase />
        <Logos />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Testimonial />
        <Contact />
        <Footer />
    </>
  )
}

export default App