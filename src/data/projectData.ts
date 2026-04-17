export const projects = [
    {
        id: 1,
        title: "Hometown Liquor",
        category: "E-Commerce Platform Engineering",
        dates: "May 2025 - Jul 2025",
        status: "Completed",
        type: "Professional",
        color: "teal",
        description: "A production e-commerce platform built with React, TypeScript, and FastAPI that drove measurable revenue growth, introduced semantic product search, and automated inventory sync through third-party POS integration.",
        technologies: ["React", "TypeScript", "FastAPI", "Python", "SQLAlchemy ORM", "PostgreSQL", "pgvector", "Pytest", "Docker", "JWT"],
        achievements: [
            "Increased monthly revenue by 45% to $25k by shipping a full-stack e-commerce platform with 150+ users and 770+ products using React, TypeScript, and FastAPI with SQLAlchemy ORM",
            "Deployed production REST API backend (92 endpoints) using Python/FastAPI with JWT authentication, refresh token rotation, RBAC, rate limiting, and structured audit logging across all requests",
            "Built semantic search feature using Python and PostgreSQL pgvector embeddings, enabling natural language product queries with sub-200ms response times against a 770+ product catalog",
            "Reduced internal manual inventory checks by 90% by building a real-time POS sync tool connected to a third-party API using async REST and batch processing 100+ products per batch",
            "Implemented CI/CD pipeline via Docker containerization enabling consistent, repeatable deployments; wrote 85+ unit and integration tests using pytest ensuring reliability across auth, order, and inventory service layers"
        ],
        metrics: ["45% Revenue Growth", "$25K Monthly Revenue", "150+ Users", "770+ Products", "92 REST Endpoints", "90% Fewer Manual Checks", "85+ Tests"],
        links: {
            liveDemo: "https://www.hometownliquorsil.com/"
        },
        featured: true
    },

    {
        id: 2,
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
        featured: true
    },

    {
        id: 3,
        title: "MasterChef",
        category: "AI Full-Stack",
        dates: "Dec 2025 - Feb 2026",
        status: "Completed",
        type: "Personal",
        color: "magenta",
        description: "Built a full-stack AI application with React and Spring Boot featuring JWT authentication, LLM orchestration with pluggable clients, production-grade resilience patterns, and AWS infrastructure managed through Terraform.",
        technologies: ["TypeScript", "Java", "Spring Boot", "AWS", "PostgreSQL", "Docker", "Terraform", "React"],
        achievements: [
            'Built full-stack AI application (React, Spring Boot, JWT auth) with an LLM orchestration layer using pluggable clients for zero-code provider changes across Ollama, OpenAI, and Anthropic',
            'Designed SHA-256 content-addressable caching achieving 40% cache hit rate, tracking token usage, cost, and latency on every LLM call via a full audit trail in PostgreSQL',
            'Applied circuit breaker, retry with exponential backoff, and rate limiting on the LLM call path to prevent cascading failures and gracefully degrade under load',
            'Defined AWS infrastructure in Terraform (ECS, RDS, ALB, Secrets Manager, S3) with least-privilege IAM roles, replicated locally via LocalStack',
            'Validated API layer, auth, cloud storage, and persistence with 98+ tests using JUnit, Mockito, WebMvcTest, and DataJpaTest',
        ],
        metrics: ["40% Cache Hit Rate", "98+ Tests", "Zero-Code LLM Provider Swaps"],
        links: {
            github: "https://github.com/rpat9/MasterChef"
        },
        featured: true
    },

    {
        id: 4,
        title: "Real Time Event Processor",
        category: "Backend Development",
        dates: "Jan 2026",
        status: "Completed",
        type: "Personal",
        color: "blue",
        description: "An event-driven processing pipeline built with Node.js and TypeScript for high-throughput ingestion, low-latency analytics, and reliable API delivery at scale.",
        technologies: ["Node.js", "TypeScript", "Express.js", "Redis Streams", "Redis", "TimescaleDB"],
        achievements: [
            "Engineered an event-driven processing pipeline using Node.js and TypeScript processing 2.4M+ events (28 events/sec) with zero message loss, leveraging Redis Streams consumer groups",
            "Reduced dashboard query latency by 55x (1.828ms to 0.033ms) using TimescaleDB continuous aggregates at minute/hour/day, eliminating live computation at query time",
            "Implemented batch processing (100 events/batch) with schema validation, transactional writes, and conflict-safe inserts reducing database transactions by 60-70% versus single-event processing",
            "Built a REST API using Express.js and Redis caching with p95 response times of 5-38ms and 5-10s TTL, serving 2.4M+ records",
        ],
        metrics: ["2.4M+ Events", "28 Events/Sec", "55x Faster Queries", "60-70% Fewer DB Transactions", "5-38ms p95 API"],
        links: {
            github: "https://github.com/rpat9/Analytics-Pipeline"
        },
        featured: true
    },

    {
        id: 5,
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
        id: 6,
        title: "NLP Classification Pipline",
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
    }
]