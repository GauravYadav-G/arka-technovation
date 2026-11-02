import type { Metadata } from 'next';
import UxInteractivesPage from '@/views/UxInteractivesPage';

export const metadata: Metadata = {
  title: 'UI/UX Design & Interactive Digital Experiences',
  description:
    'Design human-centric, high-converting digital products. Design systems, motion engineering, 3D WebGL, CRO audits, ADA WCAG 2.2 accessibility, and modern UI/UX architecture by ARKA Technovation.',
  alternates: {
    canonical: '/ui-ux',
  },
  openGraph: {
    title: 'UI/UX Design & Interactive Digital Experiences | ARKA Technovation Private Limited',
    description:
      'Human-centric interface design, design systems, WebGL interactions, and enterprise CRO engineering.',
    url: '/ui-ux',
    type: 'website',
  },
};

export default function Page() {
  return <UxInteractivesPage />;
}

