export const experiences = [
    {
        id: 1,
        title: 'Software Engineer (Contract)',
        company: 'Hometown Liquor',
        location: 'Braceville, IL',
        dates: 'May 2025 - July 2025',
        tags: ['Full-Stack Development', 'E-Commerce'],
        metrics: ['45% Revenue Growth', '750+ Products'],
        achievements: [
            'Increased monthly revenue 45% to $40,000 by building a full-stack e-commerce platform for 750+ products with mobile-first design, PostgreSQL full-text search achieving sub-200ms response times, and checkout flow supporting guest and authenticated purchases',
            'Built 89 REST API endpoints across 15 route modules using FastAPI and async PostgreSQL, implementing JWT authentication with tokens, role-based access control, and error handling achieving 99.9% uptime on critical operations',
            'Automated POS integration synchronizing inventory across distributed store network with API client handling pagination for 100+ items per batch, SKU matching with conflict resolution, eliminating manual inventory updates',
            'Built an admin dashboard with real-time analytics (revenue trends, order patterns, top products), bulk email system with customer segmentation, and CRUD operations for 5 modules reducing administrative overhead by 60%',
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
            'Eliminated N+1 query pattern through network waterfall analysis, reducing dashboard load time from 30+ seconds to sub-5 seconds by implementing batch Firebase queries with a caching layer, consolidating 6 API calls to 1 endpoint',
            'Reduced production bundle 89% (16.1MB to 1.7MB) and cut cloud hosting costs 37% by converting 15MB of PNG assets to WebP, removing 9 unused Firebase Functions, and eliminating 26 redundant npm packages',
            'Migrated 17 Firebase Functions from deprecated Node.js 16 to Node.js 20 ahead of the October 2025 deadline, implementing error handling and async patterns across 1,474 lines of cloud function code',
            'Refactored component architecture to eliminate 80% of redundant database reads by extracting business logic into service layer, implementing React Context API for state management, and consolidating duplicate component renders',
        ],
        skills: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Google Cloud Platform', 'Firebase', 'Performance Optimization', 'Cloud Architecture']
    },

]