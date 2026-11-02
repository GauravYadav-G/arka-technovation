import type { Metadata } from 'next';
import TermsPage from '@/views/TermsPage';

export const metadata: Metadata = {
  title: 'Terms of Service | ARKA Technovation Private Limited',
  description:
    'Terms of Service and Master Services Agreement of ARKA Technovation Private Limited.',
  alternates: {
    canonical: '/terms',
  },
};

export default function Page() {
  return <TermsPage />;
}

