import Skills from "./Skills";

export default function AboutMe() {

    const paragraphs = [
        {id: 'school', content: "I'm a Computer Science major at Lewis University, graduating in May 2026, with a concentration in Artificial Intelligence and a 3.87 GPA."},

        {id: 'hometown-liquor', content: "I've built software that drives real business results. At Hometown Liquor, I developed a full-stack e-commerce platform that increased monthly revenue by 45% to $40,000, handling 750+ products with sub-200ms search response times. I built 89 REST API endpoints using FastAPI and PostgreSQL, implemented JWT authentication and role-based access control, and created an admin dashboard that reduced administrative overhead by 60%. I also automated their POS integration to synchronize inventory across their distributed store network."},

        {id: 'quizmaster', content: "As Lead Developer for QuizMaster, my capstone project, I tackled critical performance issues. I reduced dashboard load time from over 30 seconds to under 5 seconds by eliminating N+1 queries and implementing batch queries with caching. I cut the production bundle by 89% and reduced cloud hosting costs by 37% through asset optimization and code cleanup. I also led the migration of 17 Firebase Functions to Node.js 20 and refactored the component architecture to eliminate 80% of redundant database reads."},

        {id: 'current-projects', content: "Currently, I'm building ExoViz, an exoplanet exploration platform that processes 5,000+ NASA records with real-time 3D visualization using Three.js. The project uses a microservices architecture with Spring Boot, FastAPI, and Redis, and includes a machine learning model that predicts planet habitability with 82% accuracy."},

        {id: 'focus', content: "I enjoy solving complex technical problems, whether that's optimizing database queries, building scalable APIs, or training machine learning models. My focus is on writing code that performs well and delivers measurable impact."},
    ];

    return (
        <section 
            id="about" 
            className="px-3 lg:px-6 py-24 lg:py-32 bg-sections animate-fade-in"
        >
            
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl text-gradient-sections font-bold text-center mb-20 ">About Me</h2>
            </div>

            {/* Desktop About Section */}
            <div className="hidden lg:grid md:grid-cols-2 ml-15 gap-8">

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
            <div className="flex flex-col lg:hidden">

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