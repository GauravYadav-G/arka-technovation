import type { Metadata } from 'next';
import WhoWeArePage from '@/views/WhoWeArePage';

export const metadata: Metadata = {
  title: 'About Us — Heritage, Craft & Leadership',
  description:
    'Learn about ARKA Technovation Private Limited, led by Mr. Kranti Parashar. 17+ years of engineering craft, 100% in-house software, design, SEO, and cinema production teams in Sector 63, Noida.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Us — Heritage, Craft & Leadership | ARKA Technovation Private Limited',
    description:
      'Learn about our 17+ year history, founder Mr. Kranti Parashar, our Centralized Content Library, and our 100% in-house execution pods in Sector 63, Noida.',
    url: '/about-us',
    type: 'website',
  },
};

export default function Page() {
  return <WhoWeArePage />;
}

