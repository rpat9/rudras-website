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
        title: "ExoViz",
        category: "Full-Stack Development",
        dates: "Dec 2025 - Present",
        status: "In Progress",
        type: "Personal",
        color: "blue",
        description: "An exoplanet exploration platform enabling astronomy researchers to query and visualize 5,000+ NASA exoplanet records with ML-powered habitability predictions",
        technologies: ["React", "TypeScript", "Spring Boot", "FastAPI", "PostgreSQL", "Scikit-learn", "Docker", "Redis", "Three.js"],
        achievements: [
            "Architected 3-service microservices backend (Spring Boot for data aggregation, FastAPI for ML inference, Redis for caching) reducing query latency by 50%",
            "Developed ML model predicting planet habitability with 82% accuracy using Scikit-learn on NASA exoplanet data",
            "Building a real-time 3D visualization system using Three.js for interactive exploration of 5,000+ exoplanet records",
            "Implementing advanced filtering system by habitability score, stellar type, and orbital characteristics",
        ],
        metrics: ["5000+ NASA Records", "82% ML Accuracy"],
        links: {}, // No links yet - in development
    },

    {
        id: 4,
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

    {
        id: 5,
        title: "MasterChef Claude",
        category: "AI/ML",
        dates: "Apr 2025 - May 2025",
        status: "Completed",
        type: "Personal",
        color: "magenta",
        description: "An AI-powered recipe generator integrating Claude API that serves personalized recipes in under 5 seconds through optimized prompt engineering, supporting dietary restrictions and ingredient preferences.",
        technologies: ["React", "Claude API", "Tailwind CSS", "Firebase", "Docker", "AWS"],
        achievements: [
            "Built AI recipe generator serving personalized recipes in under 5 seconds through optimized prompt engineering",
            "Integrated Claude API with async request handling for dietary restrictions and ingredient preferences",
            "Simplified deployment with Docker containers and automated CI/CD pipeline on AWS",
            "Reduced deployment time by 80% through containerization and automation"
        ],
        metrics: ["<5s Response Time", "80% Faster Deployment"],
        links: {
            github: "https://github.com/rpat9/MasterChef-Claude"
        }
    },
]