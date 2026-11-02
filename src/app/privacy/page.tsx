import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | ARKA Technovation Private Limited',
  description:
    'Privacy Policy of ARKA Technovation Private Limited.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}

