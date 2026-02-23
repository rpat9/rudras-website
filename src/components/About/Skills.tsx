export default function Skills() {
    const languages = ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "SQL", "HTML", "CSS"];

    const frameworks = ["React", "Node.js", "Spring Boot", "FastAPI", "Tailwind CSS", "Docker", "GitHub Actions", "JUnit 5", "Jest", "Testcontainers"];

    const databases = ["PostgreSQL", "Redis", "Firebase", "MySQL", "AWS (ECS, RDS, S3, CloudWatch, IAM)", "GCP", "Azure", "TimescaleDB"];

    const mlData = ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "Apache Spark", "Apache Hadoop", "LLMs"];

    return (
        <>
            {/* Skills and Languages Component */}
            <div className="flex flex-col justify-between px-2 py-4">

                <div className="mb-8">
                    <h3 className="text-primary font-semibold text-2xl mb-3">
                        Languages
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {languages.map((language) => (
                            <span
                                key={language}
                                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500  rounded-full border border-cyan-500/20"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-primary font-semibold text-2xl mb-3">
                        Frameworks & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {frameworks.map((framework) => (
                            <span
                                key={framework}
                                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500  rounded-full border border-cyan-500/20"
                            >
                                {framework}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-primary font-semibold text-2xl mb-3">
                        Database & Cloud
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {databases.map((database) => (
                            <span
                                key={database}
                                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500  rounded-full border border-cyan-500/20"
                            >
                                {database}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-primary font-semibold text-2xl mb-3">
                        Big Data & ML
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {mlData.map((mld) => (
                            <span
                                key={mld}
                                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500  rounded-full border border-cyan-500/20"
                            >
                                {mld}
                            </span>
                        ))}
                    </div>
                </div>
                        
            </div>
        </>
    )
}