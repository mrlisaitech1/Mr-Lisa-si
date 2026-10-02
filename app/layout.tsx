import type { Metadata } from 'next';
import './globals.css';

const SITE = 'https://mrlisasi.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'MR LISA SI — Founder of LISTRAYL | Developer & Cybersecurity',
  description: 'Official website of MR LISA SI, founder of LISTRAYL. Developer, software engineer, bot developer and cybersecurity-focused builder from Nigeria.',
  keywords: ['MR LISA SI','LISTRAYL','Nigeria developer','website developer','software engineer','cybersecurity','Telegram bot developer','automation'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { title: 'MR LISA SI — Founder of LISTRAYL', description: 'The official digital headquarters of MR LISA SI and LISTRAYL.', type: 'website', siteName: 'MR LISA SI' }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  const person = { '@context':'https://schema.org','@type':'Person',name:'MR LISA SI',alternateName:['Mr Lisa Si','MR LISA SI × SADMF'],description:'Developer, software engineer, bot developer and cybersecurity-focused builder from Nigeria.',image:'https://files.catbox.moe/o8qjo2.jpg',nationality:'Nigerian',url:SITE+'/mr-lisa-si',sameAs:['https://t.me/privatemrlisasi001','https://t.me/mrlisasitech'] };
  const org = { '@context':'https://schema.org','@type':'Organization',name:'LISTRAYL',description:'A technology ecosystem founded and created by MR LISA SI.',url:SITE+'/listrayl',logo:'https://files.catbox.moe/9rxy9z.jpg',founder:{'@type':'Person',name:'MR LISA SI',url:SITE+'/mr-lisa-si'}};
  return <html lang="en"><body className="gridbg"><header className="wrap"><nav className="nav"><a href="/">MR LISA SI</a><a href="/listrayl">LISTRAYL</a><a href="/projects">Projects</a><a href="/journey">Journey</a><a href="/contact">Contact</a></nav></header><main>{children}</main><footer><div className="wrap">© {new Date().getFullYear()} MR LISA SI · Founder of LISTRAYL · Nigeria</div></footer><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(org)}}/></body></html>
}
