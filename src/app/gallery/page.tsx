import type { Metadata } from 'next';
import GalleryPage from '@/views/GalleryPage';

export const metadata: Metadata = {
  title: 'Visual Gallery & Production Showcase',
  description:
    'Explore our curated visual gallery of enterprise web applications, corporate cinema films, design systems, and digital marketing results engineered by ARKA Technovation in Sector 63, Noida.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Visual Gallery & Production Showcase | ARKA Technovation Private Limited',
    description:
      'Curated showcase of full-stack web platforms, 4K cinema films, UI/UX design systems, and scalable digital products engineered by ARKA Technovation.',
    url: '/gallery',
    type: 'website',
  },
};

export default function Page() {
  return <GalleryPage />;
}

