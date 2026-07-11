export default function Skills() {
    const languages = ["Python", "Java", "TypeScript", "Go", "C", "C++"];

    const frameworks = ["React", "Spring Boot", "Node.js", "Express.js", "REST APIs"];

    const dataMl = ["PostgreSQL", "Redis", "MySQL", "Firebase", "Pandas", "Scikit-learn", "Apache Spark", "Apache Hadoop", "Apache Kafka", "Apache Hive"];

    const cloudTools = ["AWS", "GCP", "Docker", "Terraform", "GitHub Actions", "CI/CD"];

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
                        Data & ML
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {dataMl.map((database) => (
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
                        Cloud & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {cloudTools.map((practice) => (
                            <span
                                key={practice}
                                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500  rounded-full border border-cyan-500/20"
                            >
                                {practice}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}
