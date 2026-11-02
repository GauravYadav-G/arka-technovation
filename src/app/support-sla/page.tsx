import type { Metadata } from 'next';
import SupportSlaPage from '@/views/SupportSlaPage';

export const metadata: Metadata = {
  title: 'Support SLA & Enterprise Maintenance | ARKA Technovation Private Limited',
  description:
    'Service Level Agreement (SLA) & enterprise support policy of ARKA Technovation Private Limited. 99.95% uptime guarantee, incident severity response times, and dedicated in-house support in Sector 63, Noida.',
  alternates: {
    canonical: '/support-sla',
  },
  openGraph: {
    title: 'Support SLA & Enterprise Maintenance | ARKA Technovation Private Limited',
    description:
      'Service Level Agreement (SLA) & enterprise support policy. 99.95% uptime guarantee, automated daily backups, and in-house support in Sector 63, Noida.',
    url: '/support-sla',
    type: 'website',
  },
};

export default function Page() {
  return <SupportSlaPage />;
}

