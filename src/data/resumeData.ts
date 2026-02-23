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
            'Increased monthly revenue by 45% to $40k by building a full-stack ecommerce platform using React, serving 770+ products',
            'Developed 90 REST endpoints using FastAPI, and implemented full-text search using PostgreSQL and transactional checkout',
            'Automated POS inventory sync across a distributed store network, processing 100+ items/batch via async API and SKU matching, eliminating all manual updates',
            'Implemented JWT authentication, RBAC, and rate limiting; built an admin dashboard with analytics, bulk pricing/discounts, CRM, and CSV export, managing 770+ products and customer base',
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
            'Cut load times from 30+ seconds to sub-5 seconds by eliminating N+1 query pattern and implementing batch Firebase queries with a caching layer, consolidating 6 API calls to 1 endpoint',
            'Reduced production bundle by 89% (16.1MB to 1.7MB), cut cloud hosting costs by 37% through asset conversion, and removed 9 unused Firebase Functions, eliminating 26 redundant npm package',
            'Migrated core cloud infrastructure from Node.js 16 to Node.js 20 across 17 Firebase Functions, implementing error handling and modern async patterns across 36 cloud functions',
            'Eliminated 80% of redundant database reads by restructuring the application\'s data layer and centralizing state management',
        ],
        skills: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Google Cloud Platform', 'Firebase', 'Performance Optimization', 'Cloud Architecture']
    },

]