export default function Skills() {
    const languages = ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"];

    const frameworks = ["React", "Node.js", "Spring Boot", "FastAPI", "Express.js", "Tailwind CSS", "Bootstrap"];

    const databases = ["PostgreSQL", "Supabase", "MySQL", "NoSQL", "MongoDB", "Redis", "Google Firebase"];

    const devtools = ["Git", "Docker", "AWS S3", "AWS IAM", "AWS CloudWatch", "AWS RDS", "AWS ECS", "AWS SecretsManager", "GCP", "Azure", "REST APIs", "System Design"];

    const mlData = ["Scikit-learn", "TensorFlow", "Pandas", "NumPy"];

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
                        Frameworks
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
                        Databases
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

                <div className="mb-8">
                    <h3 className="text-primary font-semibold text-2xl mb-3">
                        Developer Tools
                    </h3>
                
                    <div className="flex flex-wrap gap-2">
                        {devtools.map((devtool) => (
                            <span
                                key={devtool}
                                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500  rounded-full border border-cyan-500/20"
                            >
                                {devtool}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-primary font-semibold text-2xl mb-3">
                        Machine Learning & Data Science
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