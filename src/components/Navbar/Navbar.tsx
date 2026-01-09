import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() { 

    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const navigationLinks = [
        { name: 'About', id: 'about' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <>
            <nav className={scrolled ? "scrolled" : ""}>

                <a 
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-bold text-2xl transition-smooth hover-lift"
                >
                    <span className="text-gradient-cyan">RP</span>
                </a>

                {/* Navigation Links Desktop */}
                <div className="hidden lg:flex items-center gap-8">

                    {navigationLinks.map((link, index) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="nav-link text-primary text-sm font-medium cursor-pointer px-4 flex items-center whitespace-nowrap"
                        >
                            <span className="text-accent font-mono mr-2">0{index + 1}.</span> {link.name}
                        </button>
                    ))}

                    <a 
                        href="/PatelRudraResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm"
                    >
                        Resume
                    </a> 

                </div>

                <button
                    className="lg:hidden p-2 transition-smooth hover-lift text-primary cursor-pointer z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    { isMobileMenuOpen ? <X size={24} /> : <Menu size={24} /> }
                </button>

            </nav>

            <div className={`fixed inset-0 bg-primary z-40 lg:hidden flex items-center justify-center transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>

                {/* Navigation Links Mobile (With Animations) */}
                <div className="flex flex-col items-center gap-8">
                    {navigationLinks.map((link, index) => (
                        <div
                            key={link.id}
                            style={{ transitionDelay: isMobileMenuOpen ? `${index * 100 + 150}ms` : '0ms' }}
                            className={`transition-smooth ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
                        >
                            <button
                                onClick={() => {
                                    scrollToSection(link.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="nav-link text-primary text-2xl font-medium cursor-pointer transition-smooth hover-lift"
                            >
                                <span className="text-accent font-mono mr-2">0{index + 1}.</span> {link.name}
                            </button>
                        </div>
                    ))}

                    <div
                        style={{ transitionDelay: isMobileMenuOpen ? `${navigationLinks.length * 100 + 150}ms` : '0ms' }}
                        className={`transition-smooth ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
                    >
                        <a 
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline text-lg mt-4 transition-smooth"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                </div>

            </div>
        </>
    )    
}