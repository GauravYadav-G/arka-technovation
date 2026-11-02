import type { Metadata } from 'next';
import WhoWeArePage from '@/views/WhoWeArePage';

export const metadata: Metadata = {
  title: 'About Us — Heritage, Craft & Leadership | ARKA Technovation',
  description:
    'Learn about ARKA Technovation Private Limited (formerly Jaikvik Technology India Pvt. Ltd.), led by Mr. Kranti Parashar. 10+ years of engineering craft, 100% in-house software, design, SEO, and cinema production teams in Sector 63, Noida.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Us — Heritage, Craft & Leadership | ARKA Technovation Private Limited',
    description:
      'Learn about our 10+ years of engineering craft, founder Mr. Kranti Parashar, 500+ delivered projects, and our 100% in-house execution pods in Sector 63, Noida.',
    url: '/about-us',
    type: 'website',
  },
};

export default function Page() {
  return <WhoWeArePage />;
}

