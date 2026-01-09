import TypeWriter from "./Typewriter"
import { ArrowRight } from "lucide-react"

export default function Hero() {

    const myWorks: string[] = [
        "develop impactful software.",
        "create web experiences.",
        "ship real products.",
        "develop mobile apps."
    ]

    return (
        <section className="h-screen bg-primary flex flex-col justify-between">
            
            <div className="py-30 px-10 md:px-30">
                <h2 className="text-accent font-extralight leading-relaxed text-xl">Hi, my name is</h2>

                <h1 className="text-primary text-4xl md:text-6xl pt-5 font-extrabold">Rudra Patel.</h1>

                <div>
                    <h1 className="text-secondary text-4xl md:text-6xl pt-5 font-semibold">
                        <span>I </span>
                        <TypeWriter 
                            phrases={myWorks}
                        />
                    </h1>
                </div>

                <div className="pt-5 w-full md:w-[60%]">
                    <p className="text-secondary leading-relaxed">
                        I'm a Computer Science major at{' '}
                        <span className="text-accent font-medium"> 
                            <a href="https://www.lewisu.edu/" 
                            target="_blank"
                            className="hover:underline"
                            >Lewis University</a>
                        </span>
                        {' '}
                        specializing in
                        {' '}
                        <span className="text-accent font-medium"> 
                            artificial intelligence
                        </span>
                        {' '}
                        and 
                        {' '}
                        <span className="text-accent font-medium"> 
                            large scale software systems
                        </span>
                        . I build production grade applications, most recently, I increased real business revenue by 45% by delivering a full stack e-commerce platform used by hundreds of customers and have led refactoring in large codebase, cutting latency, reducing cloud costs, and improving system reliability. Currently, I'm building data intensive and AI driven systems that combine machine learning, backend architecture, and performance focused frontend engineering.
                    </p>

                </div>

                <div className="pt-15 flex flex-col md:flex-row gap-4">
                    <button className="btn-primary flex">
                        <span>
                            View My Work 
                        </span>
                        <ArrowRight size={18} />
                    </button>

                    <button className="btn-outline flex">
                        <span>
                            Contact Me
                        </span>
                        <ArrowRight size={18} />
                    </button>
                </div>

            </div>
            
        </section>
    )
}