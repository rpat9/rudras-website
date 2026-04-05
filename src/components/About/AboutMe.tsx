import { useEffect, useRef, useState } from "react";
import Skills from "./Skills";

export default function AboutMe() {

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

    const paragraphs = [
        {id: 'school', content: "I'm an incoming Master of Computer Science student at the University of Illinois Urbana-Champaign (Fall 2026) in AI & Machine Learning for Enterprise Applications. I'm finishing my B.S. in Computer Science (AI concentration) at Lewis University with a 3.9 GPA and Dean's List honors (5x)."},

        {id: 'coursework', content: "My core coursework includes Machine Learning, Artificial Intelligence, Big Data Systems (Apache Spark, Hadoop, Arrow, Hive, Distributed Systems), Natural Language Processing, and Computer Organization in C/C++."},

        {id: 'hometown-liquor', content: "At Hometown Liquor, I shipped a full-stack e-commerce platform serving 150+ active users and 770+ products, increasing revenue by 45% to $25k/month. I built semantic search with pgvector, implemented backend services across 92 REST endpoints, and automated real-time POS inventory sync with zero manual updates."},

        {id: 'quizmaster', content: "As Lead Developer for QuizMaster, I led a team of 6 delivering 38+ features. I reduced load times from 30s+ to sub-5s, shrank the production bundle by 89% (16.1MB to 1.7MB), reduced cloud costs by 37%, and migrated 17 cloud functions from Node.js 16 to 20."},

        {id: 'focus', content: "I enjoy building resilient backend systems, optimizing performance, and delivering measurable results. Right now, I'm building NeuralGate. It's a distributed LLM inference gateway focused on OpenAI-compatible APIs, low-latency routing, observability, and reliable multi-provider failover while continuing work on full-stack AI apps, real-time analytics pipelines, and high-performance data tooling in C++."},
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

            {/* Desktop About Section */}
            <div className="hidden lg:grid lg:grid-cols-2 ml-15 gap-8">

                {/* Description column */}
                <div className="flex flex-col gap-6 px-10 py-4">

                    {paragraphs.map((paragraph) => (
                        <p
                            key={paragraph.id}
                            className="text-secondary"
                        >
                            {paragraph.content}
                        </p>
                    ))}

                </div>

                <Skills />

            </div>

            {/* Mobile About Section */}
            <div className="flex flex-col lg:hidden md:mr-8 md:ml-16">

                <div className="flex flex-col gap-6 px-3 py-2">
                    {paragraphs.map((paragraph) => (
                        <p
                            key={paragraph.id}
                            className="text-secondary"
                        >
                            {paragraph.content}
                        </p>
                    ))}
                </div>

                <Skills />

            </div>

        </section>
    )
}