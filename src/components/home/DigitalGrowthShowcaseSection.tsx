'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import {
  ArrowRight,
  ChevronRight,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  slug: string;
  highlight: string;
  tag: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-design',
    name: 'Creative Websites Design',
    category: 'Digital Experience',
    slug: '/services/development',
    highlight: 'Next.js 15, headless architecture & interactive 3D web',
    tag: 'Next.js 15',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'Full-Funnel Growth',
    slug: '/services/digital-marketing',
    highlight: 'Revenue attribution, performance media & omnichannel scaling',
    tag: 'Full Funnel',
  },
  {
    id: 'software-dev',
    name: 'Software Development',
    category: 'Custom Engineering',
    slug: '/services/crm-software',
    highlight: 'Custom enterprise CRM, ERP portals & high-throughput APIs',
    tag: 'Enterprise ERP',
  },
  {
    id: 'film-making',
    name: 'Corporate Film Making',
    category: 'Creative Production',
    slug: '/services/film-making',
    highlight: 'Cinematic brand documentaries, 4K product films & aerial cinema',
    tag: '4K Cinema',
  },
  {
    id: 'seo-services',
    name: 'SEO Optimization Services',
    category: 'Organic Authority',
    slug: '/services/seo-lead-generation',
    highlight: 'Schema.org entity graphs, Core Web Vitals & Top-3 rank dominance',
    tag: 'Top 3 SERP',
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    category: 'Editorial Systems',
    slug: '/services/content-marketing',
    highlight: 'Executive thought leadership, technical whitepapers & media assets',
    tag: 'Editorial Hub',
  },
  {
    id: 'google-ads',
    name: 'Google Ads Services',
    category: 'Paid Search & Media',
    slug: '/services/digital-advertising',
    highlight: 'High-intent search capture, smart bidding & programmatic display',
    tag: 'Smart Bidding',
  },
];

export default function DigitalGrowthShowcaseSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section
      id="digital-services-showcase"
      className="relative py-20 sm:py-28 lg:py-32 font-framer bg-[#FAF9F5] text-black border-t border-black/10 overflow-hidden"
      aria-labelledby="services-showcase-heading"
    >
      {/* Background Architectural Blueprint Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Solar Warmth Glow Pools */}
      <div
        className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-gradient-to-br from-amber-200/30 via-orange-200/15 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-amber-100/40 via-orange-100/20 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: 3D Studio Rocket Visual Showcase Card       */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md lg:max-w-none relative group">
              {/* Outer Glow Halo */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-solar/20 via-amber-500/15 to-orange-500/20 rounded-[32px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none"
                aria-hidden="true"
              />

              {/* Showcase Card Surface */}
              <div className="relative rounded-[28px] bg-gradient-to-b from-white via-zinc-50/90 to-amber-50/20 border border-zinc-200/90 shadow-[0_20px_50px_-15px_rgba(232,116,44,0.1),0_10px_25px_rgba(0,0,0,0.03)] p-6 sm:p-8 overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px] lg:min-h-[520px]">
                
                {/* Background Radar Vector Rings */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
                  viewBox="0 0 400 400"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="200" cy="200" r="160" stroke="#E8742C" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
                  <circle cx="200" cy="200" r="110" stroke="#71717A" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
                  <circle cx="200" cy="200" r="60" stroke="#E8742C" strokeWidth="1" opacity="0.25" />
                </svg>

                {/* Ambient Soft Glow Behind Rocket */}
                <div className="absolute w-56 h-56 bg-gradient-to-tr from-amber-400/20 via-orange-500/15 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* 3D Rocket Artwork (No badge overlaid, clean rendering) */}
                <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] flex items-center justify-center transform transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src="/images/home/rocket-growth-corner.png"
                    alt="ARKA Digital Acceleration Rocket"
                    width={480}
                    height={480}
                    className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(232,116,44,0.16)] select-none pointer-events-none"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Editorial Content, 7 Capabilities & Stats  */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Editorial Heading (No badge above it, clean & confident) */}
            <h2
              id="services-showcase-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Check out what{' '}
              <span className="relative inline-block text-zinc-900">
                digital marketing
                <span
                  className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-solar via-amber-500 to-orange-600 rounded-full"
                  aria-hidden="true"
                />
              </span>{' '}
              &amp; technology services we engineer!
            </h2>

            {/* Strategic Mission Paragraph */}
            <p
              className="mt-6 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
              style={{ textWrap: 'pretty' }}
            >
              <strong className="font-semibold text-black">ARKA Technovation</strong> is committed to helping businesses across industries augment their marketing efforts, modernize digital infrastructure, and capture decisive competitive advantage through integrated engineering, search authority, and comprehensive digital marketing solutions.
            </p>

            {/* 7 Capabilities Interactive List (Matching user reference) */}
            <div className="mt-8 w-full">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-solar" />
                <span>Core Capabilities &amp; Execution Verticals</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {SERVICES_LIST.map((srv) => {
                  const isHovered = hoveredService === srv.id;
                  return (
                    <Link
                      key={srv.id}
                      href={srv.slug}
                      onMouseEnter={() => setHoveredService(srv.id)}
                      onMouseLeave={() => setHoveredService(null)}
                      className={`group relative flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 ${
                        isHovered
                          ? 'bg-white border-solar/40 shadow-sm translate-x-1'
                          : 'bg-white/80 hover:bg-white border-zinc-200/80 hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        {/* Double Arrow Chevron Accent (matching reference » mark with solar flair) */}
                        <div className="flex items-center text-solar group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                          <ChevronRight className="w-3.5 h-3.5 -mr-2" strokeWidth={3} />
                          <ChevronRight className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>

                        <div className="truncate">
                          <span className="text-sm font-semibold text-zinc-900 group-hover:text-solar transition-colors block truncate">
                            {srv.name}
                          </span>
                          <span className="text-[11px] text-zinc-500 block truncate font-light">
                            {srv.highlight}
                          </span>
                        </div>
                      </div>

                      {/* Tech Tag Pill */}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200 flex-shrink-0 group-hover:bg-solar/10 group-hover:text-solar group-hover:border-solar/20 transition-colors">
                        {srv.tag}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 3 Core Performance Metrics (6256, 12000, 1220 from Reference) */}
            <div className="mt-10 w-full pt-8 border-t border-zinc-200/90">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                
                {/* Stat 1: 6256 Projects Executed */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      6,256
                    </span>
                    <span className="text-solar font-bold text-xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700 mt-1">
                    Projects Executed
                  </span>
                  <span className="text-[11px] text-zinc-500 font-light hidden sm:inline-block">
                    Web, ERP &amp; media deliverables
                  </span>
                </div>

                {/* Stat 2: 12000 Calls & Inbound Inquiries */}
                <div className="flex flex-col border-l border-zinc-200/80 pl-4 sm:pl-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      12,000
                    </span>
                    <span className="text-solar font-bold text-xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700 mt-1">
                    Calls Generated
                  </span>
                  <span className="text-[11px] text-zinc-500 font-light hidden sm:inline-block">
                    High-intent qualified inbound
                  </span>
                </div>

                {/* Stat 3: 1220 Client Testimonials */}
                <div className="flex flex-col border-l border-zinc-200/80 pl-4 sm:pl-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      1,220
                    </span>
                    <span className="text-solar font-bold text-xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700 mt-1">
                    Client Testimonials
                  </span>
                  <span className="text-[11px] text-zinc-500 font-light hidden sm:inline-block">
                    Verified enterprise reviews
                  </span>
                </div>

              </div>
            </div>

            {/* CTA Buttons (Let's Connect + Learn More) */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* Primary CTA: Let's Connect */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-solar via-orange-600 to-amber-600 text-white font-semibold text-sm shadow-[0_8px_20px_rgba(232,116,44,0.28)] hover:shadow-[0_12px_28px_rgba(232,116,44,0.38)] hover:brightness-105 active:scale-[0.98] transition-all group"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Learn More */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-900 border border-zinc-300 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-400 active:scale-[0.98] transition-all shadow-sm group"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
