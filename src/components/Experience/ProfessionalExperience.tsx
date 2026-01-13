import { useEffect, useRef, useState } from "react";
import { experiences } from "../../data/resumeData";

export default function ProfessionalExperience() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.05 }
        );
    
        if (ref.current) {
            observer.observe(ref.current);
        }
    
        return () => observer.disconnect();
    }, []);

    
    return (
        <section 
            ref={ref}
            id="experience"
            className="px-3 lg:px-6 py-14 lg:py-24 bg-sections overflow-hidden"
        >

            <div className="max-w-7xl mx-auto">
                <h2 
                    className="text-4xl text-gradient-sections font-bold text-center mb-20"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                    }}
                >
                    Professional Experience
                </h2>
            </div>

            {/* Desktop Experience Section */}
            <div className="hidden lg:flex lg:flex-col gap-32 max-w-7xl mx-auto px-14">

                {experiences.map((experience) => (
                    <div 
                        className="grid grid-cols-2 gap-6"
                        key={experience.id}
                    >
                        {/* Left column - slides in from left */}
                        <div 
                            className="flex flex-col gap-2"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                            }}
                        >
                            <h2 
                                className="text-primary font-semibold text-xl"
                            >
                                {experience.title}
                            </h2>

                            <p className="text-accent font-light text-md">
                                {experience.company}
                            </p>

                            <p className="text-secondary font-light text-md">
                                {experience.location}
                            </p>

                            <p className="text-secondary font-mono text-md">
                                {experience.dates}
                            </p>

                            <div className="flex gap-2">
                                {experience.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500 rounded-full border border-cyan-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col gap-2 mt-4">
                                {experience.metrics.map((metric) => (
                                    <div 
                                        key={metric}
                                        className="flex gap-2 items-center"
                                    >
                                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-500"></span>
                                        <span className="text-secondary text-sm">{metric}</span>
                                    </div>
                                ))}
                            </div>
                            

                        </div>

                        {/* Right column - slides in from right */}
                        <div 
                            className="flex flex-col gap-2"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                            }}
                        >

                            {experience.achievements.map((achievement, index) => (
                                <div
                                    key={`${experience.id}-achievement-${index}`}
                                    className="flex gap-2"
                                >
                                    <span className="text-accent">▷</span>
                                    <span className="text-secondary text-md">{achievement}</span>
                                </div>
                            ))}

                            <div className="flex flex-wrap gap-2 pt-2">
                                {experience.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500 rounded-full border border-cyan-500/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Mobile Experience Section */}
            <div 
                className="lg:hidden flex flex-col gap-32 mt-10 px-1 md:ml-16"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
            >
                {experiences.map((experience) => (
                    <div 
                        className="flex flex-col gap-6"
                        key={experience.id}
                    >
                        <div className="flex flex-col gap-2">
                            <h2 
                                className="text-primary font-semibold text-xl"
                            >
                                {experience.title}
                            </h2>

                            <p className="text-accent font-light text-md">
                                {experience.company}
                            </p>

                            <p className="text-secondary font-light text-md">
                                {experience.location}
                            </p>

                            <p className="text-secondary font-mono text-md">
                                {experience.dates}
                            </p>

                            <div className="flex flex-wrap gap-1">
                                {experience.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500 rounded-full border border-cyan-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col gap-2 mt-4">
                                {experience.metrics.map((metric) => (
                                    <div 
                                        key={metric}
                                        className="flex gap-2 items-center"
                                    >
                                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-500"></span>
                                        <span className="text-secondary text-sm">{metric}</span>
                                    </div>
                                ))}
                            </div>
                            

                        </div>

                        <div className="flex flex-col gap-2">

                            {experience.achievements.map((achievement, index) => (
                                <div
                                    key={`${experience.id}-achievement-${index}`}
                                    className="flex gap-2"
                                >
                                    <span className="text-accent">▷</span>
                                    <span className="text-secondary text-md">{achievement}</span>
                                </div>
                            ))}

                            <div className="flex flex-wrap gap-2 pt-2">
                                {experience.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500 rounded-full border border-cyan-500/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        
        </section>
    )
}