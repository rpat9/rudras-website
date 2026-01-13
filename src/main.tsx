import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

// Load Umami analytics dynamically
const loadUmami = () => {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://cloud.umami.is/script.js';
    script.setAttribute('data-website-id', import.meta.env.VITE_UMAMI_WEBSITE_ID);
    document.head.appendChild(script);
};

// Load analytics after a short delay to not interfere with initial page load
setTimeout(loadUmami, 100);