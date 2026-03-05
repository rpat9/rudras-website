export const experiences = [
    {
        id: 1,
        title: 'Software Engineer (Contract)',
        company: 'Hometown Liquor',
        location: 'Braceville, IL',
        dates: 'May 2025 - July 2025',
        tags: ['Full-Stack Development', 'E-Commerce'],
        metrics: ['45% Revenue Growth', '770+ Products'],
        achievements: [
            'Shipped a full-stack e-commerce platform serving 770+ products, driving 45% increase in revenue to $40k/mo',
            'Delivered real-time POS inventory sync across a distributed store network, processing 100+ items/batch via async API and SKU matching, eliminating all manual updates',
            'Designed 90 REST endpoints FastAPI backend with full-text PostgreSQL search, transactional checkout, JWT auth, RBAC, and rate limiting',
            'Built an admin dashboard with analytics, bulk pricing/discounts, CRM, and CSV export to manage 770+ products',
        ],
        skills: ['REST APIs', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'JWT Authentication']
    },

    {
        id: 2,
        title: 'Lead Developer (Capstone)',
        company: 'QuizMaster',
        location: 'Romeoville, IL',
        dates: 'August 2025 - December 2025',
        tags: ['Performance Engineering', 'Technical Leadership'],
        metrics: ['37% Cost Reduction', '6x Faster Load Time'],
        achievements: [
            'Cut load times from 30s+ to sub-5s by eliminating N+1 query patterns and consolidating 6 Firebase API calls to a single batched endpoint with caching layer',
            'Reduced production bundle by 89% (16.1MB to 1.7MB) and cut cloud hosting costs by 37% through asset conversion, removing 9 unused Firebase Functions, and eliminating 26 redundant npm packages',
            'Migrated 17 core cloud functions from Node.js 16 to Node.js 20, and implemented error handling and modern async patterns to 36 cloud functions',
            'Eliminated 80% redundant DB reads by restructuring application\'s data layer and centralizing state management',
            'Led a team of 6 by coordinating agile sprints and weekly meetings, delivering 38+ features and improvements',
        ],
        skills: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Google Cloud Platform', 'Firebase', 'Performance Optimization', 'Cloud Architecture']
    },

]