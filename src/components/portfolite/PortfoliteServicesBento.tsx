'use client';

import React from 'react';
import Link from '@/components/Link';
import {
  Code2,
  Search,
  Target,
  ArrowRight,
  Film,
  Newspaper,
  CheckCircle2,
} from 'lucide-react';

interface BentoServiceCard {
  id: string;
  index: string;
  category: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  colSpanDesktop: string;
  colSpanTablet: string;
}

const SERVICES_DATA: BentoServiceCard[] = [
  {
    id: 'software-development',
    index: '01',
    category: 'Software Engineering',
    title: 'Software Development',
    link: '/services/development',
    description:
      'We engineer bespoke enterprise software, modular backend architectures, scalable ERP systems, custom CRMs, and automated workflow matrices built for dependable scale.',
    tags: [
      'CRM',
      'ERP',
      'Mobile App',
      'E-Commerce Website',
      'Corporate Website',
      'Custom Software',
    ],
    icon: Code2,
    colSpanDesktop: 'lg:col-span-6',
    colSpanTablet: 'md:col-span-1',
  },
  {
    id: 'digital-marketing',
    index: '02',
    category: 'Performance Media',
    title: 'Digital Marketing',
    link: '/services/digital-marketing',
    description:
      'Full-funnel acquisition campaigns, multi-touch attribution telemetry, and precision conversion optimization engineered to accelerate verified business revenue.',
    tags: [
      'Digital Marketing',
      'Social Media Marketing',
      'Content Marketing',
      'Performance Marketing',
      'Branding',
      'Google Ads',
      'Meta Ads',
      'PR Management',
    ],
    icon: Target,
    colSpanDesktop: 'lg:col-span-6',
    colSpanTablet: 'md:col-span-1',
  },
  {
    id: 'seo-geo-aeo',
    index: '03',
    category: 'Search & AI Engines',
    title: 'SEO, GEO & AEO Services',
    link: '/seo-lead-generation',
    description:
      'Technical crawl architecture, high-intent keyword mapping, structured Schema.org entity graphs, generative & answer engine dominance, and local discovery.',
    tags: [
      'SEO',
      'GEO Services',
      'AEO Services',
      'On-Page Services',
      'Off-Page Services',
      'Local SEO (GMB)',
      'Google Marketplace Listing',
    ],
    icon: Search,
    colSpanDesktop: 'lg:col-span-4',
    colSpanTablet: 'md:col-span-1',
  },
  {
    id: 'film-production',
    index: '04',
    category: 'Production Studio',
    title: 'Film Production & Media',
    link: '/services/film-making',
    description:
      'Broadcast-quality corporate films, digital & TV commercials, executive interview pods, high-end studio photography, and next-gen AI video creation.',
    tags: [
      'Film Production',
      'Digital Ads',
      'TV Ads',
      'Corporate Film Production',
      'Podcasts',
      'Personal Interviews',
      'AI Video Creation',
      'Product Photoshoot',
      'Model Shoot',
    ],
    icon: Film,
    colSpanDesktop: 'lg:col-span-4',
    colSpanTablet: 'md:col-span-1',
  },
  {
    id: 'corporate-world-news',
    index: '05',
    category: 'Editorial & Market Intelligence',
    title: 'Corporate World News',
    link: '/corporate-world-news',
    description:
      'Authoritative corporate journalism, executive interview broadcasts, strategic press releases, breaking business updates, and rigorous market research.',
    tags: [
      'Corporate World News',
      'Interview & Press Releases',
      'Corporate News',
      'Market Update',
      'Industries Analysis',
      'Market Research',
    ],
    icon: Newspaper,
    colSpanDesktop: 'lg:col-span-4',
    colSpanTablet: 'md:col-span-2',
  },
];

export default function PortfoliteServicesBento() {
  return (
    <section
      id="capabilities"
      className="relative py-20 sm:py-32 font-framer bg-[#fbfbfb] text-black border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left-Aligned Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6 text-left">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2 sm:mb-3">
              Capabilities
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]">
              Services Overview
            </h2>
          </div>

          <p className="text-zinc-600 max-w-md text-sm sm:text-base font-light leading-relaxed">
            Software development, performance marketing, search optimization, film production, and market research.
          </p>
        </div>

        {/* ── 12-Column Bento Grid: Row 1 (2 cards: 6+6), Row 2 (3 cards: 4+4+4) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-7">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.link}
                className={`group relative rounded-2xl sm:rounded-[28px] bg-white hover:bg-white active:scale-[0.985] p-6 sm:p-8 lg:p-9 flex flex-col justify-between border border-zinc-200/80 hover:border-black/30 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out min-h-[340px] sm:min-h-[400px] ${service.colSpanTablet} ${service.colSpanDesktop}`}
              >
                {/* Card Top: Index & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span
                      className="text-base sm:text-lg font-mono font-bold text-[#b45309]"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {service.index}
                    </span>

                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-900 group-hover:bg-black group-hover:text-white group-hover:border-black transition-[background-color,color,border-color] duration-200 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-black tracking-tight leading-snug font-display text-balance">
                    {service.title}
                  </h3>

                  {/* Clean, Punchy Description */}
                  <p className="mt-3 text-zinc-600 text-sm sm:text-[15px] font-normal leading-relaxed text-pretty">
                    {service.description}
                  </p>

                  {/* Subservices / Capability Pills */}
                  <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5 sm:gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium bg-zinc-100/80 text-zinc-700 border border-zinc-200/60 group-hover:bg-amber-50 group-hover:text-amber-900 group-hover:border-amber-200/70 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Simple Minimal Action */}
                <div className="pt-4 sm:pt-6 mt-6 border-t border-zinc-100 flex items-center justify-end min-h-[44px]">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-black group-hover:text-solar transition-colors duration-200">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
