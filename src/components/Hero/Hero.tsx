import TypeWriter from "./Typewriter"
import Sidebar from "./Sidebar"
import ScrollIndicator from "./ScrollIndicator"
import { HiArrowRight } from "react-icons/hi2"

export default function Hero() {

    const myWorks: string[] = [
        "develop impactful software.",
        "create web experiences.",
        "ship real products.",
        "develop mobile apps."
    ]

    return (
        <section className="min-h-screen bg-primary flex flex-col justify-center pt-40 pb-8 max-w-8xl mx-auto sm:px-16">
            
            <div className="px-10 md:px-20 lg:px-24 max-w-[1400px]">
                <h2 className="text-accent font-extralight leading-relaxed text-xl md:text-base">Hi, my name is</h2>

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
                        . I build full-stack applications that solve real problems. Recently, I increased business revenue by 45% with an e-commerce platform used by hundreds of customers. Currently, I'm building AI systems that combine machine learning with scalable backend architecture.
                    </p>

                </div>

                <div className="pt-12 flex flex-col md:flex-row gap-5">
                    <button className="btn-primary flex">
                        <span>
                            View My Work 
                        </span>
                        <HiArrowRight size={18} />
                    </button>

                    <button className="btn-outline flex">
                        <span>
                            Contact Me
                        </span>
                        <HiArrowRight size={18} />
                    </button>
                </div>

                <Sidebar />

            </div>

            <div className="grow"></div>

            <ScrollIndicator />
            
        </section>
    )
}