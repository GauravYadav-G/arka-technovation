import type { Metadata } from 'next';
import TermsPage from '@/views/TermsPage';

export const metadata: Metadata = {
  title: 'Terms of Service | ARKA Technovation Private Limited',
  description:
    'Terms of Service and Master Services Agreement of ARKA Technovation Private Limited (formerly Jaikvik Technology India Pvt. Ltd.). Complete IP source code ownership, agile sprints, milestone billing, and governing law in Noida, UP, India.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | ARKA Technovation Private Limited',
    description:
      'Master Terms of Service of ARKA Technovation Private Limited. 100% intellectual property transfer, agile sprints, and Noida jurisdiction.',
    url: '/terms',
    type: 'website',
  },
};

export default function Page() {
  return <TermsPage />;
}

