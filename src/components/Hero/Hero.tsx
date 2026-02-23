import TypeWriter from "./Typewriter";
import Sidebar from "./Sidebar";
import ScrollIndicator from "./ScrollIndicator";
import { HiArrowRight } from "react-icons/hi2";

export default function Hero() {

    const myWorks: string[] = [
        "develop impactful software.",
        "build AI systems.",
        "engineer cloud infrastructure.",
        "ship real products.",
        
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="min-h-screen bg-primary flex flex-col justify-center pt-40 pb-8 max-w-8xl mx-auto sm:px-16">
            
            <div className="px-10 md:px-20 lg:px-24 max-w-[1400px]">
                <div className="hero-initial-animation">
                    <h2 className="text-accent font-mono leading-relaxed text-xl">Hi, my name is</h2>

                    <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl pt-4 font-semibold">Rudra Patel.</h1>

                    <div>
                        <h1 className="text-secondary text-3xl md:text-5xl lg:text-6xl pt-3 font-semibold">
                            <span>I </span>
                            <TypeWriter 
                                phrases={myWorks}
                            />
                        </h1>
                    </div>

                    <div className="pt-6 w-full lg:w-[55%]">
                        <p className="text-secondary leading-relaxed text-base md:text-lg">
                            I'm a Computer Science major at{' '}
                            <span className="text-accent font-medium"> 
                                <a href="https://www.lewisu.edu/" 
                                target="_blank"
                                className="hover:underline"
                                >Lewis University</a>
                            </span>
                            {' '}
                            specializing in{' '}
                            <span className="text-accent font-medium"> 
                                artificial intelligence
                            </span>
                            {' '}
                            and{' '}
                            <span className="text-accent font-medium"> 
                                large scale software systems
                            </span>
                            . I build full-stack applications and scalable backend systems that solve real problems. I'm currently seeking software engineering opportunities for 2026.
                        </p>

                    </div>

                    <div className="pt-12 flex flex-col md:flex-row gap-5">
                        <button 
                            className="btn-primary flex"
                            onClick={() => scrollToSection('experience')}
                        >
                            <span>
                                View My Work 
                            </span>
                            <HiArrowRight size={18} />
                        </button>

                        <button 
                            className="btn-outline flex"
                            onClick={() => scrollToSection('contact')}
                        >
                            <span>
                                Contact Me
                            </span>
                            <HiArrowRight size={18} />
                        </button>
                    </div>
                </div>
                

                <Sidebar />

            </div>

            <div className="grow"></div>

            <ScrollIndicator />
            
        </section>
    )
}