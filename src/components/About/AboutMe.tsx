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
        "I'm an incoming Master of Computer Science student at the University of Illinois Urbana-Champaign (Fall 2026) in AI & Machine Learning for Enterprise Applications. I'm finishing my B.S. in Computer Science (AI concentration) at Lewis University with a 3.9 GPA and Dean's List honors (5x).",
        "I build full-stack and backend systems focused on measurable outcomes, and my core coursework includes Machine Learning, Artificial Intelligence, Big Data Systems, Natural Language Processing, and Computer Organization in C/C++.",
    ];

    const impactMetrics = [
        '45% Revenue Growth',
        '92 REST Endpoints',
        '<10ms Session Latency',
        '2.4M+ Events Processed',
    ];

    const highlights = [
        {
            id: 'hometown-liquor',
            title: 'Hometown Liquor',
            content: "Increased monthly revenue by 45% to $25k by shipping a full-stack platform serving 150+ users and 770+ products. Built a production Python/FastAPI backend with 92 REST endpoints using SQLAlchemy ORM, JWT + refresh token rotation, RBAC, rate limiting, and structured audit logging. Added pgvector semantic search with sub-200ms responses and a real-time POS sync tool that reduced internal manual inventory checks by 90%.",
        },
        {
            id: 'quizmaster',
            title: 'QuizMaster',
            content: "Led a team of 6 engineers to ship a full-stack React and Node.js quiz and flashcard product with a 5K+ question bank. Removed a key Node.js bottleneck to bring study session request latency from 5-7s to under 10ms. Also cut dashboard load times from 30s+ to under 5s, reduced database reads by 80%, and refactored 1,400+ lines into reusable components while restoring CI/CD.",
        },
        {
            id: 'current-focus',
            title: 'Current Focus',
            content: "Building a Distributed LLM Inference Gateway in Go with an OpenAI-compatible REST API, middleware-based tracing, unique request IDs, and structured latency logging. Also engineering a two-tier semantic cache (Redis exact-match + pgvector cosine similarity) with cost-aware multi-provider routing, circuit breaking, and automatic failover targeting sub-10ms p95 cached responses.",
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