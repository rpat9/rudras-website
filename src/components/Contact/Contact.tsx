import { useEffect, useRef, useState } from "react";
import { PiPhone as Phone } from "react-icons/pi";
import { CiMail as Mail } from "react-icons/ci";
import { FiGithub as Github} from "react-icons/fi";
import { FaLinkedinIn as LinkedIn } from "react-icons/fa";
import { BsSend as Send } from "react-icons/bs";

export default function Contact() {

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
            id="contact"
            className="px-3 lg:px-6 py-14 lg:py-24 bg-sections overflow-hidden"
        >

            <div 
                className="max-w-3xl mx-auto"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                }}
            >
                <h2 
                    className="text-4xl text-gradient-sections font-bold text-center mb-10"
                >
                    Get In Touch
                </h2>
            </div>

            {/* Desktop Layout */}
            <div 
                className="hidden lg:flex lg:flex-col max-w-3xl mx-auto"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                }}
            >
                <p className="text-secondary text-center px-12 mb-10">
                    I am currently looking for new opportunities and am always available via email. I'm always excited to hear from fellow developers, recruiters, and potential collaborators.
                </p>

                <div className="grid grid-cols-2 gap-6 px-12">
                    <a 
                        href="tel:+12246079378" 
                        className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                    >
                        <Phone className="text-accent" size={28} />
                        <div className="flex flex-col">
                            <span className="text-primary font-semibold">Phone</span>
                            <span className="text-secondary text-sm">(224) 607-9378</span>
                        </div>
                    </a>

                    <a 
                        href="mailto:rudrap26176@gmail.com" 
                        className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                    >
                        <Mail className="text-accent" size={28} />
                        <div className="flex flex-col">
                            <span className="text-primary font-semibold">Email</span>
                            <span className="text-secondary text-sm">rudrap26176@gmail.com</span>
                        </div>
                    </a>

                    <a 
                        href="https://github.com/rpat9/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                    >
                        <Github className="text-accent" size={28} />
                        <div className="flex flex-col">
                            <span className="text-primary font-semibold">GitHub</span>
                            <span className="text-secondary text-sm">github.com/rpat9</span>
                        </div>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/rudrapatel09/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                    >
                        <LinkedIn className="text-accent" size={28} />
                        <div className="flex flex-col">
                            <span className="text-primary font-semibold">LinkedIn</span>
                            <span className="text-secondary text-sm">linkedin.com/in/rudrapatel09</span>
                        </div>
                    </a>
                </div>

                <div className="flex justify-center mt-10">
                    <a 
                        className="btn-primary flex items-center gap-2"
                        href="mailto:rudrap26176@gmail.com"
                    >
                        <span>Say Hello</span>
                        <Send size={24} />
                    </a>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col gap-6 px-4 md:ml-15">
                <p className="text-secondary mb-4">
                    I am currently looking for new opportunities and am always available via email. I'm always excited to hear from fellow developers, recruiters, and potential collaborators.
                </p>

                <a 
                    href="tel:+12246079378" 
                    className="glass-card p-5 flex items-center gap-4"
                >
                    <Phone className="text-accent" size={24} />
                    <div className="flex flex-col">
                        <span className="text-primary font-semibold">Phone</span>
                        <span className="text-secondary text-sm">(224) 607-9378</span>
                    </div>
                </a>

                <a 
                    href="mailto:rudrap26176@gmail.com" 
                    className="glass-card p-5 flex items-center gap-4"
                >
                    <Mail className="text-accent" size={24} />
                    <div className="flex flex-col">
                        <span className="text-primary font-semibold">Email</span>
                        <span className="text-secondary text-sm">rudrap26176@gmail.com</span>
                    </div>
                </a>

                <a 
                    href="https://github.com/rpat9/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card p-5 flex items-center gap-4"
                >
                    <Github className="text-accent" size={24} />
                    <div className="flex flex-col">
                        <span className="text-primary font-semibold">GitHub</span>
                        <span className="text-secondary text-sm">github.com/rpat9</span>
                    </div>
                </a>

                <a 
                    href="https://www.linkedin.com/in/rudrapatel09/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card p-5 flex items-center gap-4"
                >
                    <LinkedIn className="text-accent" size={24} />
                    <div className="flex flex-col">
                        <span className="text-primary font-semibold">LinkedIn</span>
                        <span className="text-secondary text-sm">linkedin.com/in/rudrapatel09</span>
                    </div>
                </a>

                <div className="flex justify-center mt-6">
                    <a 
                        className="btn-primary flex items-center gap-2"
                        href="mailto:rudrap26176@gmail.com"
                    >
                        <span>Say Hello</span>
                        <Send size={24} />
                    </a>
                </div>
            </div>

        </section>
    )
}