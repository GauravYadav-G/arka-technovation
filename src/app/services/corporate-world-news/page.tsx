import type { Metadata } from 'next';
import CorporateWorldNewsPage from '@/views/CorporateWorldNewsPage';

export const metadata: Metadata = {
  title: 'Corporate World News & Market Intelligence | ARKA Technovation',
  description:
    'Authoritative corporate journalism, executive interview broadcasts, strategic press releases, breaking business updates, and empirical market research produced in Sector 63, Noida.',
  alternates: {
    canonical: '/services/corporate-world-news',
  },
  openGraph: {
    title: 'Corporate World News & Market Intelligence | ARKA Technovation',
    description:
      'Authoritative corporate journalism, executive interview broadcasts, strategic press releases, and empirical market research.',
    url: '/services/corporate-world-news',
    type: 'website',
  },
};

export default function Page() {
  return <CorporateWorldNewsPage />;
}
