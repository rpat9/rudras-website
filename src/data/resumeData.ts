export const experiences = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Hometown Liquor - E Commerce Platform',
        location: 'Remote',
        dates: 'May 2025 - May 2026',
        tags: ['E-Commerce Platform', 'Backend Engineering', 'Production API'],
        metrics: ['45% Revenue Growth', '$25K Monthly Revenue', '150+ Users', '770+ Products', '92 REST Endpoints', '90% Fewer Manual Checks'],
        achievements: [
            "Increased monthly revenue by 45% to $25k by building an e-commerce platform from scratch with 150+ users and 770+ products using React, Java Spring Boot, and PostgreSQL",
            "Secured REST API traffic for 92+ endpoints with Spring Security by implementing stateless JWT auth, role-based admin access, request rate limiting, and audit logging across all REST API endpoints",
            "Built a hybrid AI product search feature using PostgreSQL full-text search and AI-generated embeddings for vector similarity search, returning natural language results in under 1s on average across 770+ products",
            " Reduced manual inventory checks by 90% by automating POS inventory sync with a third-party API, batch processing catalog updates, updating stock quantities, and logging inventory changes",
            "Improved deployment reliability with Docker containerization and CI/CD, and wrote 85+ unit and integration tests covering auth, product, inventory, and API service behavior"
        ],
        skills: ['React', 'TypeScript', 'Java 21', 'Spring Boot', 'PostgreSQL', 'JUnit', 'Docker', 'REST APIs']
    },

    {
        id: 2,
        title: 'Research Assistant',
        company: 'Lewis University',
        location: 'Romeoville, IL',
        dates: 'Present',
        tags: ['Full-Stack Development', 'AI Search', 'Data Platform'],
        metrics: ['40% Search Accuracy Improvement', '50GB Dataset Handling', '3-5s AI Pipeline', 'Real-Time Processing'],
        achievements: [
            'Built a dataset management platform for Lewis Research Lab using React and Go to centralize, document, and search across all lab datasets',
            'Implemented an AI-powered search engine in Go combining PostgreSQL full-text search and semantic vector search, improving search accuracy by 40% across all lab datasets',
            'Designed chunked concurrent dataset uploads and constant-memory streaming downloads in Go, handling dataset files up to 50GB without timeouts or server memory pressure',
            'Engineered an upload-time AI pipeline that automatically generates labels, class distributions, and summaries for every dataset within 3-5 seconds using a bounded file profiler to validate and clean LLM output before storing metadata',
        ],
        skills: ['React', 'Go', 'PostgreSQL', 'LLMs', 'REST APIs', 'Data Management']
    },

    {
        id: 3,
        title: 'Hackathons & Competitions',
        company: 'ASA DataFest - American Statistical Association',
        location: 'Team Competition',
        dates: 'Apr 2026',
        tags: ['Hackathon', 'Data Engineering', 'Data Science'],
        metrics: ['48-Hour Competition', '7.6M+ Patient Encounters', '79K Patients Analyzed'],
        achievements: [
            'Built an ETL pipeline in a 48-hour team competition using Python, cleaning and joining 7.6M+ patient encounters from a worldwide healthcare dataset',
            'Designed classification algorithms in Python for 79K patients, identifying 83.6% hypertension and 74.4% diabetes disengagement rates',
            'Presented actionable insights on patient outreach gaps to support data-driven healthcare intervention strategies',
        ],
        skills: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'ETL', 'Classification']
    },

]