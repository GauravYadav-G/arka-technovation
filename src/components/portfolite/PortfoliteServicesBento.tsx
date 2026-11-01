'use client';

import React from 'react';
import Link from '@/components/Link';
import {
  Code2,
  TrendingUp,
  Share2,
  Target,
  ArrowRight,
  Monitor,
  Film,
} from 'lucide-react';

interface BentoServiceCard {
  id: string;
  index: string;
  category: string;
  title: string;
  link: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES_DATA: BentoServiceCard[] = [
  {
    id: 'software-development',
    index: '01',
    category: 'Software Engineering',
    title: 'Software Development',
    link: '/services/crm-software',
    description:
      'We engineer bespoke business software, modular backend architectures, custom CRMs, and automated workflow matrices built for dependable enterprise scale.',
    icon: Code2,
  },
  {
    id: 'digital-marketing',
    index: '02',
    category: 'Performance Media',
    title: 'Digital Marketing',
    link: '/services/digital-marketing',
    description:
      'Full-funnel acquisition campaigns, multi-touch attribution telemetry, and precision conversion optimization engineered to accelerate business revenue.',
    icon: Target,
  },
  {
    id: 'search-engine-optimization',
    index: '03',
    category: 'Search Authority',
    title: 'SEO (Search Engine Optimization)',
    link: '/seo-lead-generation',
    description:
      'Technical crawl architecture, high-intent keyword mapping, structured Schema.org entity graphs, and 100% Core Web Vitals for dominant search rankings.',
    icon: TrendingUp,
  },
  {
    id: 'corporate-film-making',
    index: '04',
    category: 'Production Studio',
    title: 'Corporate Film Making',
    link: '/contact',
    description:
      'Broadcast-quality corporate films, industrial plant documentaries, executive interviews, and cinematic commercial video produced by our Delhi NCR crew.',
    icon: Film,
  },
  {
    id: 'social-media-marketing',
    index: '05',
    category: 'Brand Amplification',
    title: 'Social Media Marketing',
    link: '/services/digital-marketing',
    description:
      'Strategic multi-channel social campaigns, executive thought leadership, and creative content pods that build verified enterprise authority and engagement.',
    icon: Share2,
  },
  {
    id: 'web-development',
    index: '06',
    category: 'Platform Engineering',
    title: 'Web Development',
    link: '/services/development',
    description:
      'High-performance modular Next.js platforms, accessible design systems, and sub-second page delivery engineered to capture your brand and convert users.',
    icon: Monitor,
  },
];

export default function PortfoliteServicesBento() {
  return (
    <section
      id="capabilities"
      className="relative py-20 sm:py-32 font-framer bg-[#fbfbfb] text-black border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left-Aligned Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-20 gap-4 sm:gap-6 text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-black leading-[1.12] sm:leading-[1.08] font-display">
              Integrated digital services,{' '}
              <span className="font-serif italic font-normal text-solar">
                engineered
              </span>{' '}
              to scale.
            </h2>
          </div>

          <p className="text-zinc-600 max-w-md text-sm sm:text-base font-light leading-relaxed">
            From technical software development and search authority to full-funnel digital marketing and corporate cinema — explore our six core operational disciplines.
          </p>
        </div>

        {/* ── 3-Column × 2-Row Grid: Clean, High-Polish Bento Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.link}
                className="group relative rounded-2xl sm:rounded-[28px] bg-white/80 hover:bg-white active:scale-[0.985] backdrop-blur-md p-5 sm:p-7 lg:p-9 flex flex-col justify-between border border-zinc-200/80 hover:border-black/30 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out min-h-[300px] sm:min-h-[360px]"
              >
                {/* Card Top: Index, Category & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-7">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold text-[#b45309]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {service.index}
                      </span>
                      <span className="text-zinc-400" aria-hidden="true">/</span>
                      <span className="text-xs font-mono font-semibold text-zinc-700 uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>

                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-zinc-200/80 flex items-center justify-center text-zinc-900 group-hover:bg-black group-hover:text-white group-hover:border-black transition-[background-color,color,border-color] duration-200 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-[25px] font-bold text-black tracking-tight leading-snug font-display text-balance">
                    {service.title}
                  </h3>

                  {/* Clean, Punchy Description */}
                  <p className="mt-3 sm:mt-4 text-zinc-600 text-sm sm:text-[15px] font-normal leading-relaxed text-pretty">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer: Simple Minimal Action */}
                <div className="pt-4 sm:pt-6 mt-6 sm:mt-8 border-t border-zinc-100 flex items-center justify-between min-h-[44px]">
                  <span className="text-[11px] sm:text-xs font-mono text-zinc-600 uppercase tracking-wider font-medium">
                    Core Capability
                  </span>

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
