import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/About/AboutMe";
import ProfessionalExperience from "./components/Experience/ProfessionalExperience";
import Projects from "./components/FeaturedProjects/Projects";

function App() {

    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <ProfessionalExperience />
            <Projects />
        </>
    )
}

export default App