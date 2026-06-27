export const experiences = [
    {
        id: 1,
        title: 'Research Assistant',
        company: 'Lewis University',
        location: 'Romeoville, IL',
        dates: 'April 2026 - June 2026',
        tags: ['Full-Stack Development', 'AI Search', 'Data Platform'],
        metrics: ['50GB File Support', 'Concurrent Chunked Uploads', 'Streaming Downloads', 'AI Metadata Pipeline'],
        achievements: [
            'Built a full-stack dataset management platform for Lewis Research Lab with React, Go, and PostgreSQL to centralize scattered research datasets into one place for uploading, documenting, searching, editing, and downloading research data',
            'Developed an AI-assisted search system using a lab-hosted internal AI model that helps researchers find datasets by meaning, keywords, labels, summaries, and filters',
            'Implemented large-file upload and download workflows in Go using concurrent chunked uploads and streaming, supporting files up to 50GB without loading them fully into server memory',
            'Designed an AI metadata pipeline to automatically profile uploaded datasets and generate dataset labels, class distributions, summaries, and search queries for easier dataset reuse',
        ],
        skills: ['React', 'Go', 'PostgreSQL', 'AI Search', 'Large File Uploads', 'Dataset Management'],
    },

    {
        id: 2,
        title: 'Software Engineer',
        company: 'Hometown Liquor - E Commerce Platform',
        location: 'Remote',
        dates: 'May 2025 - May 2026',
        tags: ['E-Commerce Platform', 'Backend Engineering', 'Production API'],
        metrics: ['$25K Monthly Revenue', '150+ Users', '770+ Products', '92+ REST Endpoints', '85+ Tests'],
        achievements: [
            'Built an e-commerce platform from scratch using React, Java Spring Boot, and PostgreSQL, supporting 150+ users and 770+ products while helping grow monthly revenue to $25K',
            'Secured 92+ REST API endpoints with Spring Security, combining stateless authentication, role-based admin access, rate limiting, and logging to protect live customer and store data from unauthorized access',
            'Implemented an AI-assisted product search system combining PostgreSQL ranking with an AI model, helping customers find relevant items across 770+ products with sub-second average response times in production',
            'Automated daily inventory sync with a third-party POS vendor API, batching 100 products per run handling duplicate records, updating stock quantities, and logging inventory changes to avoid overwriting reliable store data',
            'Improved release reliability with Docker containers, CI/CD, and 85+ unit and integration tests covering auth, products, inventory, and API',
        ],
        skills: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'Docker', 'CI/CD', 'REST APIs'],
    },

    {
        id: 3,
        title: 'Hackathons & Competitions',
        company: 'ASA DataFest - American Statistical Association',
        location: 'Team Competition',
        dates: 'April 2026',
        tags: ['Hackathon', 'Data Engineering', 'Data Science'],
        metrics: ['48-Hour Competition', '7.6M+ Patient Records', '79K Patients Analyzed'],
        achievements: [
            'Built an ETL pipeline in a 48-hour competition using Python, cleaning and joining 7.6M+ patient records from global healthcare dataset',
            'Analyzed 79K patient records using Python classification algorithms, identifying an 83.6% hypertension and 74.4% diabetes disengagement rate, and presented findings and outreach recommendations to competition judges within 48 hours',
        ],
        skills: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'ETL', 'Classification'],
    },
]
