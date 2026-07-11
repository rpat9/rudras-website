export type Project = {
    id: number;
    title: string;
    category: string;
    dates: string;
    status: "Completed" | "In Progress";
    type: string;
    color: string;
    description: string;
    technologies: string[];
    achievements: string[];
    metrics: string[];
    links: {
        github?: string;
        liveDemo?: string;
    };
    featured: boolean;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "LocalCI",
        category: "Cross-Platform CI Runner",
        dates: "2026",
        status: "Completed",
        type: "Open Source",
        color: "teal",
        description: "An open-source CI runner in Go that lets developers reproduce GitHub Actions-style workflows locally, validate YAML pipelines, and run dependency-aware jobs from the terminal on Windows, macOS, and Linux.",
        technologies: ["Go", "Python", "GitHub Actions", "YAML"],
        achievements: [
            "Shipped an open-source CI runner in Go that lets developers reproduce GitHub Actions-style workflows, validating YAML pipelines and running jobs with dependencies from the terminal on Windows, macOS, and Linux",
            "Implemented parallel job execution, running independent jobs like linting, unit tests, and integration tests at the same time while respecting dependencies, cutting benchmark runtime by 47.4%",
            "Made failures easier to debug by saving logs and artifacts for every job, generating HTML reports, adding reruns for failed jobs only, and grouping repeated failures to flag flaky or persistent problems",
        ],
        metrics: ["47.4% Faster Benchmarks", "Parallel Job Execution", "HTML Reports", "Failed-Only Reruns"],
        links: {
            github: "https://github.com/rpat9/CI-Runner",
        },
        featured: true,
    },

    {
        id: 2,
        title: "AI Recipe Service",
        category: "AI Full-Stack",
        dates: "2026",
        status: "Completed",
        type: "Personal",
        color: "orange",
        description: "A Java Spring Boot AI recipe backend secured with stateless JWT authentication, resilient generation workflows, AWS infrastructure, and extensive backend test coverage.",
        technologies: ["TypeScript", "Java", "Spring Boot", "AWS", "PostgreSQL", "Docker", "Terraform"],
        achievements: [
            "Built a Java (Spring Boot) backend with 12 REST API endpoints with a LLM integration layer supporting OpenAI, Anthropic, and local models to generate structured recipes with token usage and latency tracked on every request",
            "Added caching layer to avoid redundant LLM API calls, plus rate limiting and retry handling to keep the service reliable under failure, backed by 139 unit and integration tests",
            "Defined secure AWS infrastructure in Terraform with ECS Fargate, RDS PostgreSQL, IAM, S3, and CloudWatch to isolate compute, protect data, and monitor service health",
        ],
        metrics: ["12 REST Endpoints", "139 Backend Tests", "AWS ECS Fargate", "Terraform IaC"],
        links: {
            github: "https://github.com/rpat9/MasterChef",
        },
        featured: true,
    },

    {
        id: 3,
        title: "Real-Time Event Processor",
        category: "Backend Development",
        dates: "2026",
        status: "Completed",
        type: "Personal",
        color: "blue",
        description: "A distributed event pipeline using Node.js, Express.js, TypeScript, Redis Streams, and TimescaleDB for reliable ingestion, low-latency dashboard queries, and cached REST API reads.",
        technologies: ["Node.js", "Express.js", "TypeScript", "Redis", "TimescaleDB", "Docker"],
        achievements: [
            "Built a real time analytics pipeline using TypeScript (Node.js), and Redis that ingested, processed, stored, and visualized 2.4M+ events over 24 hours with zero data loss, containerized with Docker for consistent deployments",
            "Designed a batch consumer on Redis Streams that grouped up to 100 events per database write, cutting database transactions by 60–70% and ensuring no data was lost even if the service crashed mid batch",
            "Built a REST API with Express.js to query and visualize millions of event rows, cutting dashboard latency 55x from 1.8s to 33ms by pre-calculating results instead of scanning raw data on every request",
        ],
        metrics: ["2.4M+ Events", "Zero Observed Message Loss", "55x Faster Queries", "60-70% Fewer DB Transactions"],
        links: {
            github: "https://github.com/rpat9/Analytics-Pipeline",
        },
        featured: true,
    },

    {
        id: 4,
        title: "NLP Classification Pipeline",
        category: "Machine Learning",
        dates: "Nov 2025",
        status: "Completed",
        type: "Academic",
        color: "yellow",
        description: "An end-to-end NLP classification workflow comparing classical and transformer-based approaches under a unified evaluation framework on noisy real-world sentiment data.",
        technologies: ["Python", "Scikit-learn", "HuggingFace", "Sentence-BERT"],
        achievements: [
            "Built an end-to-end NLP pipeline in Python with 240K+ samples, comparing TF-IDF with Logistic Regression, Naive Bayes, and RoBERTa within a unified evaluation framework",
            "Ran 190+ hyperparameter experiments with 5-fold cross-validation, with Logistic Regression achieving 78% accuracy, outperforming pretrained RoBERTa by 23.4% on noisy domain-mismatched data",
            "Applied Sentence-BERT embeddings with t-SNE across 5,000 samples, revealing distinguishable but overlapping sentiment clusters confirming dataset ambiguity and validating 78% accuracy ceiling",
        ],
        metrics: ["78% Accuracy", "240K+ Samples", "190+ Hyperparameter Experiments", "5,000 t-SNE Samples"],
        links: {
            github: "https://github.com/MachineLearningLU/Models",
        },
        featured: true,
    },

    {
        id: 5,
        title: "QuizMaster",
        category: "Full-Stack Platform Engineering",
        dates: "Aug 2025 - Dec 2025",
        status: "Completed",
        type: "Academic",
        color: "magenta",
        description: "A full-stack quiz and flashcard platform built in React and Node.js with custom quiz creation, a large question bank, and major backend/frontend performance improvements.",
        technologies: ["React", "JavaScript", "Node.js", "Firebase Auth", "GCP", "CI/CD", "Agile"],
        achievements: [
            "Led development on a full-stack React and Node.js quiz platform with a 5K+ question bank, custom quizzes, and flashcard study within a 6-engineer Agile team",
            "Reduced study session latency from 5s to 300ms and cut dashboard load times from 30s+ in background to under 3s by resolving N+1 queries, improving user experience",
            "Added caching for services and core GCP cloud functions, reducing database reads by 80%, and refactored 1,400+ lines of React code into reusable UI components to improve development velocity",
        ],
        metrics: ["6-Engineer Team", "5K+ Question Bank", "5s to 300ms Latency", "80% Fewer DB Reads"],
        links: {
            github: "https://github.com/QuizMasterInc/QuizMaster",
        },
        featured: false,
    },

    {
        id: 6,
        title: "CSV Data Analyzer",
        category: "Systems & Data Engineering",
        dates: "March 2026",
        status: "Completed",
        type: "Personal",
        color: "purple",
        description: "A C++ CSV query engine with immutable copy-on-write DataFrame internals and SQL-like operations for efficient filtering and sorting on typed CSV data.",
        technologies: ["C++", "STL", "CMake"],
        achievements: [
            "Built a C++17 command-line CSV query engine with a six-class architecture, enabling schema inspection, SQL-like filtering, sorting, and numeric aggregates without a database engine or external libraries",
            "Implemented immutable DataFrame operations, INT/DOUBLE/STRING type inference, and a character-by-character RFC 4180 parser handling quoted commas, escaped quotes, empty cells, and CRLF line endings",
        ],
        metrics: ["Copy-on-Write DataFrame", "RFC 4180 Parser", "Typed Query Engine"],
        links: {
            github: "https://github.com/rpat9/CsvDataAnalysis",
        },
        featured: false,
    },
]
