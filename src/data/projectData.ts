export const projects = [
    {
        id: 1,
        title: "Hometown Liquor",
        category: "Full-Stack Development",
        dates: "May 2025 - Jul 2025",
        status: "Completed",
        type: "Professional",
        color: "teal",
        description: "A full-stack e-commerce platform built from scratch that increased monthly revenue by 45% to $40,000, featuring mobile-first design, sub-200ms search performance, automated POS integration for 770+ products, and an admin suite for pricing/quantity updates, customer management, discounts, and analytics",
        technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "Docker", "JWT"],
        achievements: [
            'Increased monthly revenue by 45% to $40k by building a full-stack ecommerce platform using React, serving 770+ products',
            'Developed 90 REST endpoints using FastAPI, and implemented full-text search using PostgreSQL and transactional checkout',
            'Automated POS inventory sync across a distributed store network, processing 100+ items/batch via async API and SKU matching, eliminating all manual updates',
            'Implemented JWT authentication, RBAC, and rate limiting; built an admin dashboard with analytics, bulk pricing/discounts, CRM, and CSV export, managing 770+ products and customer base',
        ],
        metrics: ["45% Revenue Growth", "$40K Monthly Revenue", "770+ Products", "90 REST Endpoints"],
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
        description: "Lead developer for a capstone quiz platform where I tackled critical performance issues, reducing dashboard load time from 30+ seconds to under 5 seconds and cutting cloud hosting costs by 37%.",
        technologies: ["React", "JavaScript", "Node.js", "Firebase", "Google Cloud Platform", "GitHub Actions", "Tailwind CSS"],
        achievements: [
            'Cut load times from 30+ seconds to sub-5 seconds by eliminating N+1 query pattern and implementing batch Firebase queries with a caching layer, consolidating 6 API calls to 1 endpoint',
            'Reduced production bundle by 89% (16.1MB to 1.7MB), cut cloud hosting costs by 37% through asset conversion, and removed 9 unused Firebase Functions, eliminating 26 redundant npm package',
            'Migrated core cloud infrastructure from Node.js 16 to Node.js 20 across 17 Firebase Functions, implementing error handling and modern async patterns across 36 cloud functions',
            'Eliminated 80% of redundant database reads by restructuring the application\'s data layer and centralizing state management',
        ],
        metrics: ["6x Faster Load Time", "89% Smaller Bundle", "37% Cost Reduction"],
        links: {
            github: "https://github.com/QuizMasterInc/QuizMaster"
        },
        featured: true
    },

    {
        id: 3,
        title: "Analytics Pipeline",
        category: "Backend Development",
        dates: "Jan 2026",
        status: "Completed",
        type: "Personal",
        color: "blue",
        description: "An analytics system that ingests 100,000 events per hour continuously, processes them in real-time, stores them efficiently, visualizes metrics on a live dashboard, and the ability to query historical data.",
        technologies: ["Node.js", "TypeScript", "React", "TimescaleDB", "Redis Streams", "Docker"],
        achievements: [
            "Built an event processing pipeline handling 2.4M events in 24 hours, achieving under 10ms latency and zero message loss",
            "Reduced dashboard query latency by 55x (1.8s to 33ms) by precomputing aggregations at 3 time levels (minute/hour/day) and automatic refresh policies, eliminating live computation at query time",
            "Developed REST API with 5-38ms response times using caching (5-10s TTL), aggregates, and built a React dashboard with auto-refresh polling (5s intervals) with visualization across 2.4M+ records",
        ],
        metrics: ["2.4M events daily", "5-38ms API response times", "33ms latency"],
        links: {
            github: "https://github.com/rpat9/Analytics-Pipeline",
        },
        featured: true,
    },

    {
        id: 4,
        title: "MasterChef",
        category: "AI Full-Stack",
        dates: "Dec 2025 - Feb 2026",
        status: "Completed",
        type: "Personal",
        color: "magenta",
        description: "An AI-powered recipe generator integrating AI models Ollama/Mistral that serve personalized recipes based on dietary restrictions, and ingredient preferences. Built with production-grade backend infrastructure utilizing Spring Boot, AWS S3, RDS, IAM, CloudWatch, SecretsManager, ECS.",
        technologies: ["TypeScript", "Java", "Spring Boot", "AWS", "Docker", "PostgreSQL", "Terraform"],
        achievements: [
            "Built a full-stack AI recipe platform with React and Spring Boot, implementing JWT authentication with access/refresh tokens, an LLM layer with automatic retry logic, and complete tracking of tokens, latency, and cost per generation",
            "Designed PostgreSQL caching layer for AI responses, achieving 40% hit rate, cutting redundant AI calls, and delivering sub-200ms response times for repeat queries",
            "Defined AWS infrastructure using Terraform with ECS Fargate, RDS, ALB, and Secrets Manager, with least-privileged IAM and CloudWatch monitoring",
            "Wrote a 98-test suite covering unit, integration, API layers, validating authentication, cloud storage, and database persistence"
        ],
        metrics: ["3-15 Ingredients", "40% cache hit rate"],
        links: {
            github: "https://github.com/rpat9/MasterChef"
        },
        featured: true
    },

    {
        id: 5,
        title: "Social Media Sentiment Classifier",
        category: "Machine Learning",
        dates: "Nov 2025",
        status: "Completed",
        type: "Academic",
        color: "orange",
        description: "A sentiment classification system achieving 78% accuracy on 241K social media posts using hyperparameter-tuned Logistic Regression with TF-IDF vectorization, outperforming pretrained RoBERTa on noisy data.",
        technologies: ["Python", "Scikit-learn", "TF-IDF", "GridSearchCV", "Pandas", "NumPy"],
        achievements: [
            "Built a sentiment classifier on 241K posts using Logistic Regression with TF-IDF, achieving 78% test accuracy",
            "Performed hyperparameter optimization with GridSearchCV (192 combinations, 5-fold CV), achieving strong generalization",
            "Evaluated model robustness across datasets, showing domain alignment impacts performance more than model complexity",
        ],
        metrics: ["78% Accuracy", "241K Posts Analyzed"],
        links: {
            github: "https://github.com/MachineLearningLU/Models"
        }
    },

]