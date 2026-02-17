import Navbar from "./components/Navbar"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
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
    </>
  )
}

export default App