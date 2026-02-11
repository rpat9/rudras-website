export const projects = [
    {
        id: 1,
        title: "Hometown Liquor",
        category: "Full-Stack Development",
        dates: "May 2025 - Jul 2025",
        status: "Completed",
        type: "Professional",
        color: "teal",
        description: "A full-stack e-commerce platform that increased monthly revenue by 45% to $40,000, featuring mobile-first design, sub-200ms search performance, and automated POS integration for 750+ products.",
        technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "Docker", "JWT"],
        achievements: [
            "Increased monthly revenue 45% to $40,000 with full-stack e-commerce platform serving 750+ products",
            "Built 89 REST API endpoints with FastAPI and async PostgreSQL achieving 99.9% uptime on critical operations",
            "Implemented PostgreSQL full-text search with sub-200ms response times and checkout flow for guest/authenticated users",
            "Automated POS integration synchronizing inventory across distributed store network with conflict resolution",
            "Created admin dashboard with real-time analytics reducing administrative overhead by 60%"
        ],
        metrics: ["45% Revenue Growth", "$40K Monthly Revenue", "750+ Products", "99.9% Uptime"],
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
            "Eliminated N+1 query pattern reducing dashboard load time from 30+ seconds to sub-5 seconds through batch Firebase queries and caching",
            "Reduced production bundle 89% (16.1MB to 1.7MB) by converting PNG assets to WebP and removing unused dependencies",
            "Cut cloud hosting costs 37% through asset optimization and code cleanup",
            "Migrated 17 Firebase Functions from Node.js 16 to Node.js 20 ahead of October 2025 deadline",
            "Refactored component architecture eliminating 80% of redundant database reads using service layer pattern"
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
            "Built event processing pipeline handling 2.4M events over 24 hours (28 events/sec, 280 events/sec burst) with Redis Streams consumer groups achieving <10ms latency and zero message loss",
            "Reduced dashboard query latency 55x (1.8s → 33ms) by implementing TimescaleDB continuous aggregates with 3 materialization levels (minute/hour/day) and automatic refresh policies, eliminating real-time aggregation",
            "Developed REST API with 5-38ms response times using strategic caching (5-10s TTL) and continuous aggregates, powering React dashboard with auto-refresh polling (5s intervals) and Recharts visualization across 2.4M+  records",
        ],
        metrics: ["2.4M events daily", "5-38ms API response times"],
        links: {
            github: "https://github.com/rpat9/Analytics-Pipeline",
        },
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
            "Developed full-stack AI recipe platform with React and Java/Spring Boot, generating personalized recipes from 3-15 ingredients with dietary filters (vegan, keto, gluten-free), user authentication, and recipe management using AWS S3 (save, export, view history)",
            "Built AI orchestration layer integrating local LLM (Ollama/Mistral) with PostgreSQL caching and automatic retry logic, achieving 40% cache hit rate and sub-200ms response times for cached requests, reducing redundant AI calls",
            "Implemented security with JWT authentication, password hashing, role-based access control, and designed cloud infrastructure using Terraform and Docker with AWS IAM policies, Secrets Manager for credentials, and encrypted storage (RDS, S3)"
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
            "Achieved 78% accuracy on 241K social media posts using hyperparameter-tuned Logistic Regression with TF-IDF vectorization",
            "Outperformed pretrained RoBERTa (54%) on noisy social media data through GridSearchCV with 5-fold cross-validation",
            "Demonstrated deep learning limitations through comparative analysis showing task-tuned traditional models beat complex architectures",
            "Proved model-data alignment matters more than architectural complexity through systematic experimentation"
        ],
        metrics: ["78% Accuracy", "241K Posts Analyzed"],
        links: {
            github: "https://github.com/MachineLearningLU/Models"
        }
    },

]