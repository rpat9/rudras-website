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
            'Led a team of 6 by coordinating agile sprints and weekly meetings, delivering 38+ features and improvements',
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
        description: "A multi-service event pipeline system that ingests 100,000 events per hour continuously, processes them in real-time, stores them efficiently, visualizes metrics on a live dashboard, and the ability to query historical data.",
        technologies: ["Node.js", "TypeScript", "Redis Streams", "TimescaleDB", "Docker", "React"],
        achievements: [
            "Engineered a multi-service event pipeline handling 2.4M+ events / 24 hours, sustaining 28 events/sec with zero message loss across 1.5 hours of stability testing",
            "Reduced dashboard query latency by 55x (1.8s to 33ms) using TimescaleDB continuous aggregates at minute/hour/day, eliminating live computation at query time",
            "Built REST API with p95 response times of 5-38ms using Redis caching (5-10s TTL) serving 2.4M+ records",
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
            "Built a full-stack AI recipe platform with React and Spring Boot, implementing JWT authentication with access/refresh tokens, an LLM orchestration layer (Ollama) with automatic retry, and tracking of tokens, cost, and latency",
            "Designed a PostgreSQL AI response cache achieving 40% hit rate, delivering sub-200ms response times for repeat queries, and cutting redundant LLM calls",
            "Defined AWS infrastructure in Terraform (ECS Fargate, S3, RDS, ALB, Secrets Manager) with least-privileged IAM and CloudWatch logs, reproduced locally with LocalStack",
            "Wrote 98+ unit and integration tests to validate API layer, authentication, cloud storage, and database persistence"
        ],
        metrics: ["3-15 Ingredients", "40% cache hit rate"],
        links: {
            github: "https://github.com/rpat9/MasterChef"
        },
        featured: true
    },

    {
        id: 5,
        title: "Sentiment Classifier",
        category: "Machine Learning",
        dates: "Nov 2025",
        status: "Completed",
        type: "Academic",
        color: "orange",
        description: "A sentiment classification system achieving 78% accuracy on 241K+ social media posts using hyperparameter-tuned Logistic Regression with TF-IDF vectorization, outperforming pretrained RoBERTa on noisy data.",
        technologies: ["Python", "Scikit-learn", "TF-IDF", "GridSearchCV", "Pandas", "NumPy"],
        achievements: [
            "Built a sentiment classifier on 241,000+ posts using Logistic Regression with TF-IDF, achieving 78% test accuracy",
            "Performed hyperparameter optimization with GridSearchCV (192 combinations, 5-fold CV), achieving strong generalization",
            "Showed domain alignment impacts performance more than model complexity through cross-dataset evaluation",
        ],
        metrics: ["78% Accuracy", "241K Posts Analyzed"],
        links: {
            github: "https://github.com/MachineLearningLU/Models"
        }
    },

]