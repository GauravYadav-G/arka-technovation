import type { Metadata } from 'next';
import WhoWeArePage from '@/views/WhoWeArePage';

export const metadata: Metadata = {
  title: 'About Us — ARKA Technovation',
  description:
    'About ARKA Technovation Private Limited. Engineering, SEO, and visual production pods based in Sector 63, Noida.',
  alternates: {
    canonical: '/about-us',
  },
};

export default function Page() {
  return <WhoWeArePage />;
}

