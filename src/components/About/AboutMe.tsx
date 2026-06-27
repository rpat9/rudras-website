import { useEffect, useRef, useState } from "react";
import Skills from "./Skills";

export default function AboutMe() {

    const [isVisible, setIsVisible] = useState(false);
    const [showHighlights, setShowHighlights] = useState(false);
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

    const summaryParagraphs = [
        "I'm an incoming Master of Computer Science student at the University of Illinois Urbana-Champaign (Fall 2026) in AI & Machine Learning for Enterprise Applications. I graduated with a B.S. in Computer Science (AI concentration) at Lewis University with a 3.9 GPA and Dean's List honors (6x).",
        "I build full-stack, backend, and data systems focused on measurable outcomes. My work spans e-commerce platforms ($25K monthly revenue), research dataset management, AI-assisted search, local CI tooling, real-time event processing, and production cloud services.",
    ];

    const impactMetrics = [
        '$25K Monthly Revenue',
        '92+ REST Endpoints',
        '47.4% Faster CI Benchmarks',
        '2.4M+ Events Processed',
        '50GB Dataset Streaming',
    ];

    const highlights = [
        {
            id: 'hometown-liquor',
            title: 'Hometown Liquor',
            content: "Built an e-commerce platform from scratch with React, Java Spring Boot, and PostgreSQL, supporting 150+ users and 770+ products while helping grow monthly revenue to $25K. Secured 92+ REST API endpoints with stateless authentication, role-based admin access, rate limiting, and logging. I also implemented AI-assisted product search with sub-second average response times and automated daily inventory sync with a third-party POS vendor API.",
        },
        {
            id: 'lewis-research',
            title: 'Lewis Research Lab',
            content: "Built a full-stack dataset management platform for Lewis Research Lab with React, Go, and PostgreSQL to centralize scattered research datasets into one place for uploading, documenting, searching, editing, and downloading research data. Developed AI-assisted search against a lab-hosted internal model, implemented concurrent chunked uploads and streaming downloads for files up to 50GB, and designed an AI metadata pipeline for labels, class distributions, summaries, and reusable search queries.",
        },
        {
            id: 'current-focus',
            title: 'LocalCI',
            content: "Shipped an open-source CI runner in Go that reproduces GitHub Actions-style workflows locally. LocalCI validates YAML pipelines, runs dependency-aware jobs from the terminal across Windows, macOS, and Linux, executes independent jobs in parallel while respecting dependencies, cuts benchmark runtime by 47.4%, and saves logs, artifacts, HTML reports, failed-only reruns, and failure grouping to make debugging easier.",
        },
    ];

    return (
        <section
            ref={ref}
            id="about" 
            className="px-3 lg:px-6 py-24 bg-sections"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 2s ease-out, transform 2s ease-out'
            }}
        >

            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl text-gradient-sections font-bold text-center mb-20 ">About Me</h2>
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:ml-15 gap-8">

                <div className="flex flex-col gap-6 px-3 py-2 lg:px-10 lg:py-4 md:mr-8 md:ml-16 lg:mr-0 lg:ml-0">
                    {summaryParagraphs.map((paragraph, index) => (
                        <p key={`summary-${index}`} className="text-secondary">
                            {paragraph}
                        </p>
                    ))}

                    <div className="flex flex-wrap gap-2">
                        {impactMetrics.map((metric) => (
                            <span
                                key={metric}
                                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500 rounded-full border border-cyan-500/20"
                            >
                                {metric}
                            </span>
                        ))}
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={() => setShowHighlights((prev) => !prev)}
                            className="btn-outline text-sm"
                        >
                            {showHighlights ? 'Hide Highlights' : 'Show Highlights'}
                        </button>
                    </div>

                    {showHighlights && (
                        <div className="flex flex-col gap-5 pt-2">
                            {highlights.map((highlight) => (
                                <div key={highlight.id} className="glass-card p-4">
                                    <h3 className="text-primary font-semibold text-lg mb-2">{highlight.title}</h3>
                                    <p className="text-secondary text-sm leading-relaxed">{highlight.content}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-6 lg:mt-0">
                    <Skills />
                </div>

            </div>

        </section>
    )
}
