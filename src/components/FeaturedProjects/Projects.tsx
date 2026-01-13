import { useState, useEffect, useRef } from "react";
import { projects } from "../../data/projectData";
import { CiCalendar, CiShoppingTag } from "react-icons/ci";

export default function Projects() {
    
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayProject, setDisplayProject] = useState(projects[0]);
    const [showBullets, setShowBullets] = useState(false);
    const sectionRef = useRef(null);

    // Trigger bullet animation when section comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Small delay to let the section settle, then animate bullets
                    setTimeout(() => setShowBullets(true), 100);
                } else {
                    // Reset when leaving so animation replays on return
                    setShowBullets(false);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (selectedProject.id !== displayProject.id) {
            setIsAnimating(true);
            setShowBullets(false); // Hide bullets during transition

            // Wait for exit animation to complete, then switch content
            const timer = setTimeout(() => {
                setDisplayProject(selectedProject);
                setIsAnimating(false);
                // Trigger bullet animation after content switches
                setTimeout(() => setShowBullets(true), 50);
            }, 300); // Matching the exit animation duration set in styling

            return () => clearTimeout(timer);
        }
    }, [selectedProject, displayProject.id]);

    const handleProjectClick = (project: typeof projects[0]) => {
        if (project.id !== selectedProject.id) {
            setSelectedProject(project);
        }
    };

    return (
        <section ref={sectionRef} id="projects" className="px-3 lg:px-6 py-14 lg:py-24 bg-sections">

            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl text-gradient-sections font-bold text-center mb-20">Featured Work & Projects</h2>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-14">

                {/* Left Sidebar - Project List */}
                <div className="flex flex-col gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => handleProjectClick(project)}
                            className={`glass-card p-6 cursor-pointer ${
                                selectedProject.id === project.id ?
                                `glass-card-selected project-border-${project.color}` : ''
                            }`}
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center gap-3">
                                    <span className={`w-3 h-3 rounded-full mt-1 project-dot-${project.color}`}></span>
                                    <h3 className={`text-lg font-semibold project-color-${project.color}`}>
                                        {project.title}
                                        {project.featured && <span className="ml-2">⭐</span>}
                                    </h3>
                                </div>
                                
                                <p className="text-secondary text-sm mb-2">{project.category}</p>
                                    
                                <p className="text-secondary text-xs font-mono">{project.dates}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Panel - Project Details */}
                <div 
                    className={`col-span-2 glass-card p-8
                        ${isAnimating ? 'project-detail-exit' : 'project-detail-enter'}
                    `}
                    key={displayProject.id}
                >

                    <div className="flex flex-col gap-3 mb-2">
                        <div className="flex flex-row items-center gap-3">
                            <span className={`w-4 h-4 rounded-full mt-1 project-dot-${displayProject.color}`}></span>
                            <h3 className={`text-3xl font-semibold project-color-${displayProject.color}`}>
                                {displayProject.title}
                                {displayProject.featured && <span className="ml-2">⭐</span>}
                            </h3>
                        </div>

                        <div className="flex gap-3 mb-4">
                            <span className={`px-3 py-1 text-sm rounded-full ${
                                displayProject.status === 'Completed' 
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            }`}>
                                {displayProject.status}
                            </span>
                                
                            <span className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                                {displayProject.type}
                            </span>
                        </div>

                        <div className="flex items-center gap-4 text-secondary text-sm mb-4">
                            <span className="flex gap-1 items-center"> <CiCalendar size={22}/> {displayProject.dates}</span>
                            <span className="flex gap-1 items-center"> <CiShoppingTag size={22}/> {displayProject.category}</span>
                        </div>

                        <p className="text-secondary leading-relaxed mb-6">
                            {displayProject.description}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                        <h3 className={`text-2xl font-semibold project-color-${displayProject.color} mb-3`}>
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {displayProject.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                        <h3 className={`text-2xl font-semibold project-color-${displayProject.color} mb-3`}>
                            Key Achievements
                        </h3>
                        <div className="flex flex-col gap-2">
                            {displayProject.achievements.map((achievement, index) => (
                                <div 
                                    key={`${displayProject.id}-${index}`} 
                                    className="flex gap-2"
                                    style={{
                                        opacity: showBullets ? 1 : 0,
                                        transform: showBullets ? 'translateX(0)' : 'translateX(30px)',
                                        transition: `opacity 0.4s ease-out ${index * 0.1}s, transform 0.4s ease-out ${index * 0.1}s`
                                    }}
                                >
                                    <span className={`project-color-${displayProject.color} mt-1`}>▷</span>
                                    <span className="text-secondary text-sm">{achievement}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Metrics */}
                    {displayProject.metrics && displayProject.metrics.length > 0 && (
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                                {displayProject.metrics.map((metric) => (
                                    <div key={metric} className="flex gap-2 items-center">
                                        <span className={`inline-block w-2 h-2 rounded-full project-dot-${displayProject.color}`}></span>
                                        <span className="text-secondary underline underline-offset-3 text-sm">{metric}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4 mt-8">
                        {displayProject.links.github && (
                            <a href={displayProject.links.github} target="_blank" rel="noopener noreferrer">
                                <button className="btn-outline">
                                    <span>Source Code</span>
                                </button>
                            </a>
                        )}
                        
                        {displayProject.links.liveDemo && (
                            <a href={displayProject.links.liveDemo} target="_blank" rel="noopener noreferrer">
                                <button className="btn-primary">
                                    <span>Live Demo</span>
                                </button>
                            </a>
                        )}
                    </div>

                </div>
            </div>

            {/* Mobile Layout - Stack Vertically */}
            <div className="lg:hidden flex flex-col gap-8 px-4 md:ml-15">
                {projects.map((project) => (
                    <div key={project.id} className="glass-card p-6">
                        <div className="flex flex-col gap-2 mb-2">
                            <div className="flex flex-row items-center gap-3">
                                <span className={`w-2.5 h-2.5 md:w-4 md:h-4 rounded-full mt-1 project-dot-${project.color}`}></span>
                                <h3 className={`text-xl md:text-3xl font-semibold project-color-${project.color}`}>
                                    {project.title}
                                    {project.featured && <span className="ml-2">⭐</span>}
                                </h3>
                            </div>

                            <div className="flex gap-3 mb-4">
                                <span className={`px-3 py-1 text-sm rounded-full ${
                                    project.status === 'Completed' 
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                }`}>
                                    {project.status}
                                </span>
                                    
                                <span className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                                    {project.type}
                                </span>
                            </div>

                            <div className="flex flex-col items-start md:flex md:flex-row md:items-center gap-4 text-secondary text-sm mb-4">
                                <span className="flex gap-1 items-center"> <CiCalendar size={22}/> {project.dates}</span>
                                <span className="flex gap-1 items-center"> <CiShoppingTag size={22}/> {project.category}</span>
                            </div>

                            <p className="text-secondary md:leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                            <h4 className={`text-xl md:text-2xl font-semibold project-color-${project.color} mb-2`}>
                                Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                            <h4 className={`text-xl md:text-2xl font-semibold project-color-${project.color} mb-2`}>
                                Achievements
                            </h4>
                            <div className="flex flex-col gap-2">
                                {project.achievements.map((achievement, index) => (
                                    <div key={index} className="flex gap-2">
                                        <span className={`project-color-${project.color}`}>▷</span>
                                        <span className="text-secondary text-sm">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 mt-4">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    <button className="btn-outline text-sm">
                                        Source Code
                                    </button>
                                </a>
                            )}
                            
                            {project.links.liveDemo && (
                                <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer">
                                    <button className="btn-primary text-sm">
                                        Live Demo
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}