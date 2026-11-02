import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | ARKA Technovation Private Limited',
  description:
    'Privacy Policy of ARKA Technovation Private Limited (formerly Jaikvik Technology India Pvt. Ltd.). Learn how we protect enterprise client data, adhere to DPDP Act regulations, and enforce strict zero third-party data selling.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | ARKA Technovation Private Limited',
    description:
      'Privacy Policy and institutional data governance of ARKA Technovation Private Limited. Sector 63, Noida.',
    url: '/privacy-policy',
    type: 'website',
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}

