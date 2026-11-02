import type { Metadata } from 'next';
import SupportSlaPage from '@/views/SupportSlaPage';

export const metadata: Metadata = {
  title: 'Support SLA & Enterprise Maintenance | ARKA Technovation Private Limited',
  description:
    'Service Level Agreement (SLA) & enterprise support policy of ARKA Technovation Private Limited.',
  alternates: {
    canonical: '/support-sla',
  },
};

export default function Page() {
  return <SupportSlaPage />;
}

