import type { MetadataRoute } from 'next';
const base='https://mrlisasi.vercel.app';
export default function sitemap(): MetadataRoute.Sitemap { const routes=['/','/mr-lisa-si','/listrayl','/projects','/projects/chess','/projects/chat','/projects/marketplace','/projects/gaming','/journey','/contact']; return routes.map(route=>({url:base+route,lastModified:new Date(),changeFrequency:'monthly',priority:route==='/'?1:0.8})); }
