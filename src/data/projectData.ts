export const projects = [
    {
        id: 1,
        title: "Hometown Liquor",
        category: "Full-Stack Development",
        dates: "May 2025 - Jul 2025",
        status: "Completed",
        type: "Professional",
        color: "teal",
        description: "A full-stack e-commerce platform delivered end-to-end with semantic product search, automated POS inventory sync, and a complete admin suite for analytics, pricing, inventory, and CRM.",
        technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "Docker", "JWT"],
        achievements: [
            "Shipped a full-stack e-commerce platform end-to-end (React + FastAPI + PostgreSQL), serving 150+ active users and 770+ products, increasing revenue by 45% to $25k/month",
            "Built semantic product search using pgvector embeddings, enabling natural language queries with sub-200ms response times",
            "Engineered real-time POS inventory sync against a third-party vendor API, processing 100+ products/batch via async REST with SKU matching, eliminating all manual inventory updates",
            "Designed backend service layer (auth, orders, inventory, analytics, coupons) with JWT + refresh token rotation, RBAC, rate limiting, and full audit logging across 92 REST endpoints",
            "Delivered admin dashboard with sales analytics, bulk pricing, inventory management, CRM, and automated low-stock alerting; implemented coupon engine with usage limits, per-user restrictions, and category targeting"
        ],
        metrics: ["45% Revenue Growth", "$25K Monthly Revenue", "150+ Active Users", "770+ Products", "92 REST Endpoints"],
        links: {
            liveDemo: "https://www.hometownliquorsil.com/"
        },
        featured: true
    },

    {
        id: 2,
        title: "QuizMaster",
        category: "Performance Engineering",
        dates: "Aug 2025 - Dec 2025",
        status: "Completed",
        type: "Academic",
        color: "yellow",
        description: "Capstone platform where I led performance and infrastructure optimization, dramatically improving load times, bundle size, and cloud cost efficiency.",
        technologies: ["React", "JavaScript", "Node.js", "Firebase Auth", "Google Cloud Platform", "Jest", "React Testing Library"],
        achievements: [
            "Cut load times from 30s+ to sub-5s by eliminating N+1 query patterns and consolidating 6 Firebase API calls into a single batched endpoint with caching layer",
            "Reduced production bundle by 89% (16.1MB to 1.7MB) and cut cloud hosting costs by 37% by removing 9 unused Firebase Functions and 26 redundant npm packages",
            "Integrated Firebase Auth and migrated 17 cloud functions from Node.js 16 to 20",
            "Eliminated 80% redundant DB reads by restructuring the data layer and centralizing state management; unit tested with Jest and React Testing Library",
            "Led team of 6 by coordinating agile sprints and weekly meetings, delivering 38+ features and improvements"
        ],
        metrics: ["6x Faster Load Time", "89% Smaller Bundle", "37% Cost Reduction", "38+ Features Delivered"],
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
        title: "Analytics Pipeline",
        category: "Backend Development",
        dates: "Jan 2026",
        status: "Completed",
        type: "Personal",
        color: "blue",
        description: "A real-time event processing engine built as a multi-service pipeline for ingestion, aggregation, and fast analytics queries at sustained throughput with zero message loss under stability testing.",
        technologies: ["Node.js", "TypeScript", "Redis", "TimescaleDB", "Docker"],
        achievements: [
            "Engineered a multi-service event pipeline processing 2.4M+ events at 28 events/sec sustained throughput with zero message loss over 1.5 hours using Redis Streams consumer groups",
            "Reduced dashboard query latency by 55x (1.828ms to 0.033ms) using TimescaleDB continuous aggregates at minute/hour/day intervals",
            "Implemented batch event processing (100 events/batch) with schema validation, transactional writes, and conflict-safe inserts, reducing database transactions by 60-70%",
            "Built REST API with p95 response times of 5-38ms using Redis caching (5-10s TTL) serving 2.4M+ records",
        ],
        metrics: ["2.4M+ Events", "28 Events/Sec", "55x Faster Queries", "5-38ms p95 API"],
        links: {
            github: "https://github.com/rpat9/Analytics-Pipeline"
        },
        featured: true
    },

    {
        id: 5,
        title: "CSV Data Analysis",
        category: "Systems & Data Engineering",
        dates: "2025",
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
            github: ""
        },
        featured: true
    },

    {
        id: 6,
        title: "Sentiment Classifier",
        category: "Machine Learning",
        dates: "Nov 2025",
        status: "Completed",
        type: "Academic",
        color: "orange",
        description: "A sentiment classification system achieving strong performance on noisy social media text using TF-IDF and hyperparameter-tuned Logistic Regression.",
        technologies: ["Python", "Scikit-learn", "TF-IDF", "GridSearchCV", "Pandas", "NumPy"],
        achievements: [
            "Built a sentiment classifier on 241,000+ posts using Logistic Regression with TF-IDF, achieving 78% test accuracy",
            "Performed hyperparameter optimization with GridSearchCV (192 combinations, 5-fold CV) for robust generalization",
            "Evaluated model behavior across datasets to show how domain alignment can outweigh raw model complexity"
        ],
        metrics: ["78% Accuracy", "241K+ Posts", "192 Hyperparameter Configurations"],
        links: {
            github: "https://github.com/MachineLearningLU/Models"
        },
        featured: true
    }
]