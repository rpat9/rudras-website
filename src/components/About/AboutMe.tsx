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
        {id: 'school', content: "I'm a Computer Science major at Lewis University, graduating in May 2026, with a concentration in Artificial Intelligence and a 3.9 GPA."},

        {id: 'hometown-liquor', content: "I've built software that drives real business results. At Hometown Liquor, I built a full-stack e-commerce platform that increased monthly revenue by 45% to $40,000 serving 770+ products. I developed 90 REST endpoints with FastAPI and PostgreSQL, implemented JWT authentication with RBAC, and automated POS inventory sync across their distributed store network."},

        {id: 'quizmaster', content: "As Lead Developer for QuizMaster, I reduced dashboard load times from 30+ seconds to under 5 seconds, cut the production bundle by 89%, and reduced cloud hosting costs by 37%. I also migrated 17 Firebase Functions to Node.js 20 and eliminated 80% of redundant database reads."},

        {id: 'masterchef', content: "My latest work is MasterChef, an AI-powered recipe platform with React and Spring Boot. It features a PostgreSQL caching layer achieving a 40% hit rate with sub-200ms responses, AWS infrastructure defined via Terraform (ECS Fargate, RDS, ALB), and a 98-test suite covering authentication, cloud storage, and persistence."},

        {id: 'focus', content: "I enjoy solving complex technical problems, whether that's optimizing queries, building scalable backends, or engineering cloud infrastructure. My focus is on writing code that performs well and delivers measurable impact."},
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