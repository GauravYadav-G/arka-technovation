import type { Metadata } from 'next';
import NewsPage from '@/views/NewsPage';

export const metadata: Metadata = {
  title: 'Blogs & Technical Insights',
  description:
    'Our take on design, technology, and what makes a website convert. Practical notes, Core Web Vitals benchmarks, custom ERP/CRM case studies, and digital marketing insights from ARKA Technovation.',
  alternates: {
    canonical: '/blogs',
  },
  openGraph: {
    title: 'Blogs & Technical Insights | ARKA Technovation Private Limited',
    description:
      'Practical notes, Core Web Vitals benchmarks, custom ERP/CRM case studies, and digital marketing insights from ARKA Technovation.',
    url: '/blogs',
    type: 'website',
  },
};

export default function Page() {
  return <NewsPage />;
}

