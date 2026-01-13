import { FiGithub as Github, FiLinkedin as LinkedIn, FiMail as Mail } from "react-icons/fi";

export default function Sidebar() {
    return (
        <>
            {/* Desktop Sidebar - Fixed position left */}
            <div className="sidebar-left hidden md:flex sidebar-initial-animation">
                <div className="flex flex-col items-center gap-6">

                    <a 
                        href="https://github.com/rpat9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-icon"
                        aria-label="Github Profile"
                    >
                        <Github size={24} />
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/rudrapatel09/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-icon"
                        aria-label="LinkedIn Profile"
                    >
                        <LinkedIn size={24} />
                    </a>

                    <a 
                        href="mailto:rudrap26176@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-icon"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>

                    {/* Vertical Line */}
                    <div className="sidebar-line"></div>

                </div>
            </div>

            {/* Mobile Sidebar - Centered Below Buttons */}
            <div className="flex md:hidden justify-center pt-10 pb-12 sidebar-initial-animation">
                <div className="flex flex-row items-center gap-6">
                    <a 
                        href="https://github.com/rpat9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-icon"
                        aria-label="Github Profile"
                    >
                        <Github size={24} />
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/rudrapatel09/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-icon"
                        aria-label="LinkedIn Profile"
                    >
                        <LinkedIn size={24} />
                    </a>

                    <a 
                        href="mailto:rudrap26176@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-icon"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </div>
        </>
    )
}