export default function Skills() {
    const languages = ["Python", "Java", "TypeScript", "JavaScript", "Go", "HTML", "CSS"];

    const frameworks = ["Spring Boot", "React", "Express.js", "Node.js", "REST API", "Docker", "GitHub Actions", "Linux", "Bash Scripting"];

    const databases = ["PostgreSQL", "Redis", "ElasticSearch", "MySQL", "Firebase", "AWS (ECS, RDS, S3, CloudWatch, IAM)", "GCP"];

    const practicesBigData = ["AI-Assisted Development", "REST APIs", "Agile", "Microservices", "Apache Spark", "Hadoop", "Kafka", "Hive"];

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
                        Practices & Big Data
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {practicesBigData.map((practice) => (
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
