export const experiences = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Hometown Liquor - E Commerce Platform',
        location: 'Remote',
        dates: 'May 2025 - Jul 2025',
        tags: ['E-Commerce Platform', 'Backend Engineering', 'Production API'],
        metrics: ['45% Revenue Growth', '$25K Monthly Revenue', '150+ Users', '770+ Products', '92 REST Endpoints', '90% Fewer Manual Checks', '85+ Tests'],
        achievements: [
            'Increased monthly revenue by 45% to $25k by shipping a full-stack e-commerce platform with 150+ users and 770+ products using React, TypeScript, and FastAPI with SQLAlchemy ORM',
            'Deployed production REST API backend (92 endpoints) using Python/FastAPI with JWT authentication, refresh token rotation, RBAC, rate limiting, and structured audit logging across all requests',
            'Built semantic search feature using Python and PostgreSQL pgvector embeddings, enabling natural language product queries with sub-200ms response times against a 770+ product catalog',
            'Reduced internal manual inventory checks by 90% by building a real-time POS sync tool connected to a third-party API using async REST and batch processing 100+ products per batch',
            'Implemented CI/CD pipeline via Docker containerization enabling consistent, repeatable deployments; wrote 85+ unit and integration tests using pytest across auth, order, and inventory service layers',
        ],
        skills: ['React', 'TypeScript', 'FastAPI', 'Python', 'SQLAlchemy ORM', 'PostgreSQL', 'pgvector', 'Pytest', 'Docker', 'JWT', 'RBAC']
    },

    {
        id: 2,
        title: 'Lead Developer (Capstone)',
        company: 'QuizMaster - Quiz & Flashcard Platform',
        location: 'Romeoville, IL',
        dates: 'Aug 2025 - Dec 2025',
        tags: ['Technical Leadership', 'Performance Engineering', 'Full-Stack Development'],
        metrics: ['Team of 6 Engineers', '5K+ Question Bank', '<10ms Study Session Latency', '80% Fewer DB Reads'],
        achievements: [
            'Led a team of 6 engineers to ship a full-stack quiz and flashcard platform in React and Node.js with a 5K+ question bank, custom quiz creation, user authentication, and spaced-repetition study',
            'Eliminated Node.js study session latency bottleneck, reducing per-request response times from 5-7s to under 10ms and improving reliability for concurrent users',
            'Cut dashboard load times from 30s+ to under 5s by fixing N+1 query patterns and adding a caching layer, reducing database reads by 80%',
            'Refactored 1,400+ lines of React code into reusable UI components and removed unused GCP infrastructure and dependencies, restoring broken CI/CD pipelines and accelerating development velocity',
        ],
        skills: ['React', 'JavaScript', 'Node.js', 'Firebase Auth', 'Google Cloud Platform', 'CI/CD', 'Performance Optimization', 'Caching']
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