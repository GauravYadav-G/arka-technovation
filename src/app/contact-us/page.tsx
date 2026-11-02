import type { Metadata } from 'next';
import PortfoliteContact from '@/views/PortfoliteContact';

export const metadata: Metadata = {
  title: 'Contact Us & Start a Project',
  description:
    'Schedule a technical consultation or project discovery with our craft directors in Sector 63, Noida. Fast proposals, SLA support, and dedicated delivery teams.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact Us & Start a Project | ARKA Technovation Private Limited',
    description:
      'Direct communication with engineering, marketing, and film directors at ARKA Technovation Private Limited Corporate HQ in Sector 63, Noida.',
    url: '/contact-us',
    type: 'website',
  },
};

export default function ContactUsPage() {
  return <PortfoliteContact />;
}

