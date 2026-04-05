export const experiences = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Hometown Liquor',
        location: 'Remote',
        dates: 'May 2025 - Jul 2025',
        tags: ['Full-Stack Development', 'E-Commerce', 'Backend Engineering'],
        metrics: ['45% Revenue Growth', '$25K Monthly Revenue', '150+ Active Users', '770+ Products', '92 REST Endpoints'],
        achievements: [
            'Shipped a full-stack e-commerce platform end-to-end (React + FastAPI + PostgreSQL), serving 150+ active users and 770+ products, increasing revenue by 45% to $25k/month',
            'Built semantic product search using pgvector embeddings, enabling natural language queries with sub-200ms response times',
            'Engineered real-time POS inventory sync against a third-party vendor API, processing 100+ products/batch via async REST with SKU matching, eliminating all manual inventory updates',
            'Designed backend service layer (auth, orders, inventory, analytics, coupons) with JWT + refresh token rotation, RBAC, rate limiting, and full audit logging across 92 REST endpoints',
            'Delivered admin dashboard with sales analytics, bulk pricing, inventory management, CRM, and automated low-stock alerts; implemented coupon engine with usage limits and category targeting',
        ],
        skills: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker', 'JWT', 'RBAC']
    },

    {
        id: 2,
        title: 'Lead Developer (Capstone)',
        company: 'QuizMaster',
        location: 'Romeoville, IL',
        dates: 'Aug 2025 - Dec 2025',
        tags: ['Performance Engineering', 'Technical Leadership'],
        metrics: ['37% Cost Reduction', '6x Faster Load Time'],
        achievements: [
            'Cut load times from 30s+ to sub-5s by eliminating N+1 query patterns and consolidating 6 Firebase API calls into a single batched endpoint with caching',
            'Reduced production bundle by 89% (16.1MB to 1.7MB) and cut cloud hosting costs by 37% by removing 9 unused Firebase Functions and 26 redundant npm packages',
            'Integrated Firebase Auth and migrated 17 cloud functions from Node.js 16 to 20',
            'Eliminated 80% redundant DB reads by restructuring the data layer and centralizing state management; unit tested with Jest and React Testing Library',
            'Led a team of 6 by coordinating agile sprints and weekly meetings, delivering 38+ features and improvements',
        ],
        skills: ['React', 'JavaScript', 'Node.js', 'Firebase Auth', 'Google Cloud Platform', 'Jest', 'React Testing Library', 'Performance Optimization']
    },

]