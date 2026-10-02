import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return {rules:{userAgent:'*',allow:'/'},sitemap:'https://mrlisasi.vercel.app/sitemap.xml'}; }
