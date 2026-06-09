export const projects = [
    {
        id: 1,
        title: "Hometown Liquor",
        category: "E-Commerce Platform",
        dates: "May 2025 - May 2026",
        status: "Completed",
        type: "Professional",
        color: "teal",
        description: "A production e-commerce platform built with React, TypeScript, and FastAPI that drove measurable revenue growth, introduced semantic product search, and automated inventory sync through third-party POS integration.",
        technologies: ['React', 'TypeScript', 'Java 21', 'Spring Boot', 'PostgreSQL', 'JUnit', 'Docker', 'REST APIs'],
        achievements: [
            "Increased monthly revenue by 45% to $25k by building an e-commerce platform from scratch with 150+ users and 770+ products using React, Java Spring Boot, and PostgreSQL",
            "Secured REST API traffic for 92+ endpoints with Spring Security by implementing stateless JWT auth, role-based admin access, request rate limiting, and audit logging across all REST API endpoints",
            "Built a hybrid AI product search feature using PostgreSQL full-text search and AI-generated embeddings for vector similarity search, returning natural language results in under 1s on average across 770+ products",
            " Reduced manual inventory checks by 90% by automating POS inventory sync with a third-party API, batch processing catalog updates, updating stock quantities, and logging inventory changes",
            "Improved deployment reliability with Docker containerization and CI/CD, and wrote 85+ unit and integration tests covering auth, product, inventory, and API service behavior"
        ],
        metrics: ["45% Revenue Growth", "$25K Monthly Revenue", "150+ Users", "770+ Products", "92 REST Endpoints", "90% Fewer Manual Checks", "85+ Tests"],
        links: {
            liveDemo: "https://www.hometownliquorsil.com/"
        },
        featured: true
    },

    {
        id: 2,
        title: "AI Recipe Service",
        category: "AI Full-Stack",
        dates: "Dec 2025 - Feb 2026",
        status: "Completed",
        type: "Personal",
        color: "magenta",
        description: "Built a full-stack AI application with React and Spring Boot featuring JWT authentication, LLM orchestration with pluggable clients, production-grade resilience patterns, and AWS infrastructure managed through Terraform.",
        technologies: ["TypeScript", "Java", "Spring Boot", "AWS", "PostgreSQL", "Docker", "Terraform", "React"],
        achievements: [
            'Built a production AI recipe service in Java and Spring Boot with a pluggable LLM client for recipes supporting zero-code provider swaps across local Ollama, OpenAI, and Anthropic',
            'Designed a content-matched AI response cache in PostgreSQL with configurable expiration times, cutting redundant AI processing and serving repeat queries in under 10ms vs 10 to 20s latency',
            'Added automatic failure handling to the AI generation pipeline including retry logic, rate limiting, and circuit breaking so the app degrades gracefully instead of crashing when the model is slow or unavailable',
            'Wrote 98+ unit and integration tests, achieving 80%+ test coverage across unit, API, and database layers using real PostgreSQL containers in CI to catch schema regressions before they hit production',
            'Defined AWS infrastructure in Terraform including ECS, RDS, ALB, Secrets Manager, and S3 with IAM roles',
        ],
        metrics: ["10ms AI Cache Response", "98+ Tests", "80%+ Test Coverage"],
        links: {
            github: "https://github.com/rpat9/MasterChef"
        },
        featured: true
    },

    {
        id: 3,
        title: "Real Time Event Processor",
        category: "Backend Development",
        dates: "Jan 2026",
        status: "Completed",
        type: "Personal",
        color: "blue",
        description: "An event-driven processing pipeline built with Node.js and TypeScript for high-throughput ingestion, low-latency analytics, and reliable API delivery at scale.",
        technologies: ["Node.js", "TypeScript", "Express.js", "Redis Streams", "Redis", "TimescaleDB"],
        achievements: [
            "Built a distributed event pipeline similar to Kafka processing 2.4M+ events (28 events/sec) with zero message loss using Node.js, Express.js, and Redis Streams (consumer groups)",
            "Reduced dashboard query latency by 55x (1.828s to 33ms) using TimescaleDB, eliminating live computation at query time",
            "Cut database transactions by 60–70% via batch processing (100 events/batch) with schema validation, and conflict-safe inserts",
            "Built a REST API using Express.js and Redis caching with p95 response times of 5-38ms and 5-10s TTL, serving 2.4M+ records",
        ],
        metrics: ["2.4M+ Events", "28 Events/Sec", "55x Faster Queries", "60-70% Fewer DB Transactions", "5-38ms p95 API"],
        links: {
            github: "https://github.com/rpat9/Analytics-Pipeline"
        },
        featured: true
    },

    {
        id: 4,
        title: "CSV Data Analysis",
        category: "Systems & Data Engineering",
        dates: "March 2026",
        status: "Completed",
        type: "Personal",
    color: "purple",
        description: "Built a C++ CSV query engine with immutable copy-on-write DataFrame internals and SQL-like operations for efficient filtering and sorting on typed CSV data.",
        technologies: ["C++", "STL", "CMake"],
        achievements: [
            "Built a C++ CSV query engine with immutable, copy-on-write DataFrame design, enabling efficient SQL-like filtering and sorting without duplicating memory",
            "Developed an RFC 4180-compliant parser and type inference engine, enabling accurate typed queries over raw CSV data",
        ],
        metrics: ["Copy-on-Write DataFrame", "RFC 4180 Parser", "Typed Query Engine"],
        links: {
            github: "https://github.com/rpat9/CsvDataAnalysis"
        },
        featured: true
    },

    {
        id: 5,
        title: "NLP Classification Pipeline",
        category: "Machine Learning",
        dates: "Nov 2025",
        status: "Completed",
        type: "Academic",
        color: "orange",
        description: "An end-to-end NLP classification workflow comparing classical and transformer-based approaches under a unified evaluation framework on noisy real-world sentiment data.",
        technologies: ["Python", "Scikit-learn", "HuggingFace", "Sentence-BERT"],
        achievements: [
            "Built an end-to-end NLP pipeline in Python with 240K+ samples, comparing TF-IDF with Logistic Regression, Naive Bayes, and RoBERTa within a unified evaluation framework",
            "Ran 190+ hyperparameter experiments with 5-fold cross-validation, with Logistic Regression achieving 78% accuracy and outperforming pretrained RoBERTa by 23.4% on noisy domain-mismatched data",
            "Applied Sentence-BERT embeddings with t-SNE across 5,000 samples, revealing distinguishable but overlapping sentiment clusters, confirming dataset ambiguity and validating the 78% accuracy ceiling"
        ],
        metrics: ["78% Accuracy", "240K+ Samples", "190+ Hyperparameter Experiments", "5,000 t-SNE Samples"],
        links: {
            github: "https://github.com/MachineLearningLU/Models"
        },
        featured: true
    },

    {
        id: 6,
        title: "QuizMaster",
        category: "Full-Stack Platform Engineering",
        dates: "Aug 2025 - Dec 2025",
        status: "Completed",
        type: "Academic",
        color: "yellow",
        description: "A full-stack quiz and flashcard platform built in React and Node.js with custom quiz creation, spaced-repetition study workflows, and major backend/frontend performance improvements.",
        technologies: ["React", "JavaScript", "Node.js", "Firebase Auth", "Google Cloud Platform", "CI/CD", "Caching"],
        achievements: [
            "Led a team of 6 engineers to ship a full-stack quiz and flashcard platform in React and Node.js with a 5K+ question bank, custom quiz creation, user authentication, and spaced-repetition study",
            "Eliminated Node.js study session latency bottleneck reducing per-request response times from 5-7s to under 10ms, improving reliability for concurrent users",
            "Cut dashboard load times from 30s+ to under 5s by fixing N+1 query patterns and adding a caching layer, reducing database reads by 80%",
            "Refactored 1,400+ lines of React code into reusable UI components and removed unused GCP infrastructure and dependencies, restoring broken CI/CD pipelines and accelerating development velocity"
        ],
        metrics: ["Team of 6 Engineers", "5K+ Question Bank", "<10ms Study Session Latency", "80% Fewer DB Reads"],
        links: {
            github: "https://github.com/QuizMasterInc/QuizMaster"
        },
        featured: false
    },
]