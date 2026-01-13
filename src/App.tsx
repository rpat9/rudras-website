import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/About/AboutMe";
import ProfessionalExperience from "./components/Experience/ProfessionalExperience";
import Projects from "./components/FeaturedProjects/Projects";
import Contact from "./components/Contact/Contact";

function App() {

    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <ProfessionalExperience />
            <Projects />
            <Contact />
        </>
    )
}

export default App