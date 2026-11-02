import type { Metadata } from 'next';
import PortfoliteCareers from '@/views/PortfoliteCareers';

export const metadata: Metadata = {
  title: 'Career & Engineering Roles',
  description:
    'Join our full-time in-house team in Sector 63, Noida. Opportunities in Next.js development, SEO engineering, UX architecture, and corporate cinema.',
  alternates: {
    canonical: '/career',
  },
  openGraph: {
    title: 'Career & Engineering Roles | ARKA Technovation Private Limited',
    description:
      'Build serious digital products and growth engines with ARKA Technovation Private Limited. Explore talent opportunities in Noida HQ.',
    url: '/career',
    type: 'website',
  },
};

export default function CareerPage() {
  return <PortfoliteCareers />;
}

