'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import { motion } from 'framer-motion';
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
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-design',
    name: 'Creative Websites Design',
    category: 'Digital Experience',
    slug: '/services/development',
    highlight: 'Next.js 15, headless architecture & interactive 3D web',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'Full-Funnel Growth',
    slug: '/services/digital-marketing',
    highlight: 'Revenue attribution, performance media & omnichannel scaling',
  },
  {
    id: 'software-dev',
    name: 'Software Development',
    category: 'Custom Engineering',
    slug: '/services/crm-software',
    highlight: 'Custom enterprise CRM, ERP portals & high-throughput APIs',
  },
  {
    id: 'film-making',
    name: 'Corporate Film Making',
    category: 'Creative Production',
    slug: '/services/film-making',
    highlight: 'Cinematic brand documentaries, 4K product films & aerial cinema',
  },
  {
    id: 'seo-services',
    name: 'SEO Optimization Services',
    category: 'Organic Authority',
    slug: '/services/seo-lead-generation',
    highlight: 'Schema.org entity graphs, Core Web Vitals & Top-3 rank dominance',
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    category: 'Editorial Systems',
    slug: '/services/content-marketing',
    highlight: 'Executive thought leadership, technical whitepapers & media assets',
  },
  {
    id: 'google-ads',
    name: 'Google Ads Services',
    category: 'Paid Search & Media',
    slug: '/services/digital-advertising',
    highlight: 'High-intent search capture, smart bidding & programmatic display',
  },
];

export default function DigitalGrowthShowcaseSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section
      id="digital-services-showcase"
      className="relative py-20 sm:py-28 lg:py-32 font-framer bg-white text-black border-t border-black/10 overflow-hidden"
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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">

          {/* ======================================================== */}
          {/* LEFT COLUMN: Freestanding Full-Height Tech Collage       */}
          {/* Transparent background, no card box, no badges          */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-4 lg:py-0 min-h-[360px] sm:min-h-[460px] lg:min-h-0">
            {/* Ambient Solar Warmth Glow Pool */}
            <div
              className="absolute inset-0 max-w-[420px] max-h-[500px] m-auto bg-gradient-to-tr from-solar/15 via-amber-200/20 to-transparent rounded-full blur-3xl pointer-events-none opacity-70"
              aria-hidden="true"
            />

            {/* Freestanding Floating Visual - Spanning Full Height of Content */}
            <motion.div
              animate={{
                y: [-7, 7, -7],
              }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full h-full flex items-center justify-center select-none"
            >
              <Image
                src="/images/home/arka-growth-tech-showcase-transparent.webp"
                alt="ARKA Technovation - Software Development, SEO Authority & Digital Marketing"
                width={896}
                height={1200}
                className="w-auto h-full max-h-[420px] sm:max-h-[520px] lg:max-h-none object-contain select-none pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.06)]"
                priority
              />
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Editorial Content, 7 Capabilities & Stats  */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Section Heading */}
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2 sm:mb-3">
              Overview
            </p>
            <h2
              id="services-showcase-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]"
              style={{ textWrap: 'balance' }}
            >
              Digital Growth &amp; Technology
            </h2>

            {/* Strategic Mission Paragraph */}
            <p
              className="mt-4 sm:mt-6 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
              style={{ textWrap: 'pretty' }}
            >
              <strong className="font-semibold text-black">ARKA Technovation</strong> helps businesses modernize software infrastructure, expand search visibility, and grow qualified customer demand through dependable engineering and digital marketing.
            </p>

            {/* 7 Capabilities Interactive List (Clean, no pills, matching reference) */}
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
                      <div className="flex items-center gap-2.5 min-w-0">
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
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 2 Core Performance Metrics (500+ Projects, 100+ Testimonials) */}
            <div className="mt-10 w-full pt-8 border-t border-zinc-200/90">
              <div className="grid grid-cols-2 gap-4 sm:gap-12 max-w-md">
                
                {/* Stat 1: 500+ Projects Delivered */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-0.5 sm:gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      500
                    </span>
                    <span className="text-solar font-bold text-xl sm:text-2xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 mt-1">
                    Projects Delivered
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-500 font-light mt-0.5">
                    Web, ERP &amp; media deliverables
                  </span>
                </div>

                {/* Stat 2: 100+ Client Testimonials */}
                <div className="flex flex-col border-l border-zinc-200/80 pl-4 sm:pl-12">
                  <div className="flex items-baseline gap-0.5 sm:gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      100
                    </span>
                    <span className="text-solar font-bold text-xl sm:text-2xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 mt-1">
                    Client Testimonials
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-500 font-light mt-0.5">
                    Verified enterprise reviews
                  </span>
                </div>

              </div>
            </div>

            {/* CTA Buttons (Let's Connect + Learn More) */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA: Let's Connect */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full bg-gradient-to-r from-solar via-orange-600 to-amber-600 text-white font-semibold text-sm shadow-[0_8px_20px_rgba(232,116,44,0.28)] hover:shadow-[0_12px_28px_rgba(232,116,44,0.38)] hover:brightness-105 active:scale-[0.98] transition-all group"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Learn More */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-white text-zinc-900 border border-zinc-300 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-400 active:scale-[0.98] transition-all shadow-sm group"
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
