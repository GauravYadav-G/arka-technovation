'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Target,
  Radio,
  Zap,
  LineChart,
  ArrowRight,
  ShieldCheck,
  Layout,
  Sparkles,
  BarChart3,
  Gauge,
  TrendingUp,
  Compass,
  Layers,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';

interface Pillar {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

interface DisciplineItem {
  id: string;
  label: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  headline: string;
  narrative: string;
  pillars: Pillar[];
  link: string;
  ctaText: string;
  image: string;
  imageAlt: string;
}

const DISCIPLINES: DisciplineItem[] = [
  {
    id: 'software-development',
    label: 'Software Development',
    subtitle: 'Custom CRM, ERP & Web Platforms',
    icon: Code2,
    headline: 'Bespoke Enterprise Software, Custom CRM, ERP & Modular Architectures',
    narrative:
      'We engineer bespoke enterprise software, modular backend architectures, scalable ERP systems, custom CRMs, and automated workflow matrices built for dependable scale. Dedicated pods eliminate technical debt with complete source handover.',
    pillars: [
      {
        icon: Layout,
        title: 'Custom CRM & ERP Systems',
        desc: 'Bespoke operational backbones with automated approval matrices, live inventory sync, and unified data.',
      },
      {
        icon: Code2,
        title: 'Mobile & Web Platforms',
        desc: 'Enterprise iOS, Android, and Next.js applications engineered with strict type safety and sub-second speed.',
      },
      {
        icon: ShieldCheck,
        title: 'Automated Workflow Matrices',
        desc: 'Modular backend pipelines, microservices, and custom APIs built to handle enterprise scale.',
      },
    ],
    link: '/services/development',
    ctaText: 'Explore Software Development',
    image: '/images/disciplines/discipline-01-software-development.webp',
    imageAlt: 'Software Engineering, Enterprise CRM and Custom Platform Development',
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    subtitle: 'Full-Funnel Paid Media & ROAS Telemetry',
    icon: Target,
    headline: 'Full-Funnel Acquisition Campaigns & Multi-Touch Attribution Telemetry',
    narrative:
      'Full-funnel acquisition campaigns, multi-touch attribution telemetry, and precision conversion optimization engineered to accelerate verified business revenue. We build the strategy, manage the spend, and optimize for pipeline growth.',
    pillars: [
      {
        icon: Target,
        title: 'Google & Meta Paid Media',
        desc: 'Search, Performance Max, and social campaigns managed against strict CPA and return on ad spend (ROAS).',
      },
      {
        icon: Sparkles,
        title: 'Branding & Social Management',
        desc: 'Comprehensive multi-channel social media marketing, high-impact content marketing, and brand identity.',
      },
      {
        icon: BarChart3,
        title: 'Conversion Optimization (CRO)',
        desc: 'Multi-touch attribution telemetry, dynamic landing page testing, and PR management that compound pipeline.',
      },
    ],
    link: '/services/digital-marketing',
    ctaText: 'Explore Digital Marketing',
    image: '/images/disciplines/discipline-02-digital-marketing.webp',
    imageAlt: 'Performance Marketing, Paid Media and Attribution Telemetry',
  },
  {
    id: 'seo-geo-aeo',
    label: 'SEO, GEO & AEO',
    subtitle: 'Schema Graphs & Generative AI Search',
    icon: Radio,
    headline: 'Technical Crawl Architecture, Schema Entity Graphs & Generative AI Dominance',
    narrative:
      'Technical crawl architecture, high-intent keyword mapping, structured Schema.org entity graphs, generative & answer engine dominance, and local discovery. Ensuring your brand dominates search results and citations across LLMs.',
    pillars: [
      {
        icon: Gauge,
        title: 'Technical Crawl & Schema Graphs',
        desc: 'Sub-second Core Web Vitals, semantic HTML hierarchy, and interconnected Schema.org entity graphs.',
      },
      {
        icon: TrendingUp,
        title: 'Generative AI Engines (GEO/AEO)',
        desc: 'Passage indexing optimization and AI engine answer extraction for maximum citability in LLM-driven search.',
      },
      {
        icon: Compass,
        title: 'High-Intent Keywords & Local SEO',
        desc: 'On-page and off-page optimization, local Google Business Profile rank maps, and marketplace listings.',
      },
    ],
    link: '/seo-lead-generation',
    ctaText: 'Explore SEO & AI Optimization',
    image: '/images/disciplines/discipline-03-search-ai-engines.webp',
    imageAlt: 'SEO, GEO and AI Answer Engine Optimization',
  },
  {
    id: 'film-production',
    label: 'Film Production',
    subtitle: 'Commercials, Studio & Executive Media',
    icon: Zap,
    headline: 'Broadcast-Quality Corporate Films, TV Commercials & Executive Media',
    narrative:
      'Broadcast-quality corporate films, digital & TV commercials, executive interview pods, high-end studio photography, and next-gen AI video creation. Complete scripting, direction, cinematography, color grading, and delivery.',
    pillars: [
      {
        icon: Layers,
        title: 'Corporate Films & TV Commercials',
        desc: 'Cinematic corporate documentaries, TV ads, digital commercials, and industrial shoots with aerial drone footage.',
      },
      {
        icon: MessageSquare,
        title: 'Podcasts & Personal Interviews',
        desc: 'Broadcast-quality executive podcasts, CEO leadership interviews, and thought-leadership video pods.',
      },
      {
        icon: Sparkles,
        title: 'AI Video & Studio Photography',
        desc: 'Commercial product photography, model shoots, and cutting-edge generative AI video creation.',
      },
    ],
    link: '/services/film-making',
    ctaText: 'Explore Film Production',
    image: '/images/disciplines/discipline-04-film-production.webp',
    imageAlt: 'Cinematic Corporate Film Production and Soundstage Studio',
  },
  {
    id: 'corporate-world-news',
    label: 'Corporate World News',
    subtitle: 'Executive Journalism & Market Intelligence',
    icon: LineChart,
    headline: 'Authoritative Corporate Journalism, Executive Broadcasts & Market Research',
    narrative:
      'Authoritative corporate journalism, executive interview broadcasts, strategic press releases, breaking business updates, and rigorous market research. Tracking economic shifts and producing verified corporate publications.',
    pillars: [
      {
        icon: LineChart,
        title: 'Interview & Press Releases',
        desc: 'Strategic corporate press releases, executive interview broadcasts, and global distribution to verified media.',
      },
      {
        icon: BarChart3,
        title: 'Industries Analysis & Research',
        desc: 'Rigorous empirical market research, vertical benchmarks, and deep competitive intelligence for leaders.',
      },
      {
        icon: Zap,
        title: 'Market Updates & Corporate News',
        desc: 'Daily business news updates, industry trend reporting, and authoritative analysis across emerging markets.',
      },
    ],
    link: '/corporate-world-news',
    ctaText: 'Explore Corporate World News',
    image: '/images/disciplines/discipline-05-corporate-world-news.webp',
    imageAlt: 'Corporate World News, Journalism and Market Intelligence',
  },
];

export default function ExpertiseTabsSection() {
  const [activeId, setActiveId] = useState<string>(DISCIPLINES[0].id);
  const activeItem = DISCIPLINES.find((d) => d.id === activeId) || DISCIPLINES[0];

  return (
    <section
      id="our-expertise"
      className="relative py-16 sm:py-20 lg:py-24 font-sans bg-[#FAF9F5] text-black border-t border-black/10 overflow-hidden"
      aria-label="Core Technical Disciplines"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* ======================================================== */}
        {/* 1. SECTION HEADER (Compact, Clean Typography)            */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/10 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2">
              Disciplines &amp; Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-tight">
              Core Technical Disciplines
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-md leading-relaxed border-l-2 border-[#E8742C]/40 pl-4">
            Software development, performance marketing, search optimization, film production, and market research.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 2. DESKTOP VIEW: Split-Screen Interactive Explorer       */}
        {/*    (Zero Big Tab Buttons • Compact Single-Viewport View) */}
        {/* ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): Interactive Discipline Directory List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {DISCIPLINES.map((item) => {
              const Icon = item.icon;
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveId(item.id);
                    }
                  }}
                  style={{
                    backgroundColor: isActive ? '#09090b' : '#ffffff',
                    borderColor: isActive ? '#09090b' : 'rgba(0, 0, 0, 0.08)',
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer border ${
                    isActive
                      ? 'shadow-lg shadow-black/10 scale-[1.01]'
                      : 'hover:border-black/20 hover:bg-zinc-50'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#E8742C] text-white shadow-sm'
                          : 'bg-black/5 text-zinc-700 group-hover:bg-black group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 pr-2">
                      <div
                        className="text-sm font-bold tracking-tight truncate transition-colors"
                        style={{ color: isActive ? '#ffffff' : '#09090b' }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-xs font-mono truncate mt-0.5 transition-colors"
                        style={{ color: isActive ? '#d4d4d8' : '#71717a' }}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-all ${
                      isActive
                        ? 'translate-x-0.5 opacity-100'
                        : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 text-zinc-400'
                    }`}
                    style={{ color: isActive ? '#E8742C' : undefined }}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column (7 cols): Active Discipline Showcase Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-black/10 shadow-xl overflow-hidden min-h-[520px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="flex flex-col h-full"
                >
                  {/* Clean Photographic Visual (NO Badges, NO Overlays) */}
                  <div className="relative w-full h-56 sm:h-64 bg-zinc-100 border-b border-black/10 overflow-hidden">
                    <Image
                      src={activeItem.image}
                      alt={activeItem.imageAlt}
                      fill
                      sizes="(max-width: 1280px) 60vw, 750px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Showcase Content Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Clean Headline (No Numbered Slash Heading) */}
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black leading-snug mb-3">
                        {activeItem.headline}
                      </h3>

                      {/* Executive Narrative */}
                      <p className="text-sm text-zinc-600 font-light leading-relaxed mb-6">
                        {activeItem.narrative}
                      </p>

                      {/* 3 Structured Spec Pillars */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-black/8 mb-6">
                        {activeItem.pillars.map((pillar, pIdx) => {
                          const PillarIcon = pillar.icon;
                          return (
                            <div
                              key={pIdx}
                              className="p-3.5 rounded-xl bg-[#FAF9F5] border border-black/6 flex flex-col justify-between"
                            >
                              <div className="w-7 h-7 rounded-lg bg-black/5 text-[#E8742C] flex items-center justify-center mb-2.5 shrink-0">
                                <PillarIcon className="w-3.5 h-3.5" strokeWidth={2} />
                              </div>
                              <div>
                                <h5 className="text-xs font-bold text-black tracking-tight mb-1">
                                  {pillar.title}
                                </h5>
                                <p className="text-[11px] text-zinc-500 font-light leading-relaxed line-clamp-2">
                                  {pillar.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={activeItem.link}
                        style={{ backgroundColor: '#09090b', color: '#ffffff' }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full hover:bg-[#E8742C] text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 group"
                      >
                        <span>{activeItem.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href="/contact"
                        style={{ backgroundColor: '#f4f4f5', color: '#09090b' }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full hover:bg-zinc-200 text-xs sm:text-sm font-medium transition-colors"
                      >
                        <span>Book Strategy Call</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. MOBILE VIEW: Interactive In-Place Accordion           */}
        {/*    (Only 1 Open at a Time • Minimal Vertical Height)     */}
        {/* ======================================================== */}
        <div className="block lg:hidden space-y-3">
          {DISCIPLINES.map((item) => {
            const Icon = item.icon;
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm transition-all"
              >
                {/* Accordion Toggle Bar */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveId(isOpen ? '' : item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveId(isOpen ? '' : item.id);
                    }
                  }}
                  style={{
                    backgroundColor: isOpen ? '#09090b' : '#ffffff',
                    color: isOpen ? '#ffffff' : '#09090b',
                  }}
                  className="w-full p-4 flex items-center justify-between text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isOpen ? 'bg-[#E8742C] text-white' : 'bg-black/5 text-zinc-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <div className="truncate">
                      <div
                        className="text-sm font-bold tracking-tight truncate"
                        style={{ color: isOpen ? '#ffffff' : '#09090b' }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-xs font-mono truncate mt-0.5"
                        style={{ color: isOpen ? '#d4d4d8' : '#71717a' }}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E8742C]' : 'text-zinc-400'
                    }`}
                  />
                </div>

                {/* Accordion Collapsible Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-6 border-t border-black/8 space-y-4">
                        {/* Pure Photography (Zero Badges) */}
                        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-100 border border-black/10">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 500px"
                            className="object-cover"
                          />
                        </div>

                        {/* Headline */}
                        <h4 className="text-base sm:text-lg font-bold tracking-tight text-black leading-snug">
                          {item.headline}
                        </h4>

                        {/* Narrative */}
                        <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                          {item.narrative}
                        </p>

                        {/* Specs */}
                        <div className="space-y-2 pt-3 border-t border-black/8">
                          {item.pillars.map((pillar, pIdx) => {
                            const PillarIcon = pillar.icon;
                            return (
                              <div
                                key={pIdx}
                                className="flex items-start gap-2.5 p-2 rounded-lg bg-zinc-50"
                              >
                                <div className="w-5 h-5 rounded bg-black/5 text-[#E8742C] flex items-center justify-center shrink-0 mt-0.5">
                                  <PillarIcon className="w-3 h-3" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-black">
                                    {pillar.title}
                                  </div>
                                  <div className="text-[11px] text-zinc-500 font-light leading-relaxed">
                                    {pillar.desc}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Action CTA */}
                        <div className="pt-2 flex flex-col sm:flex-row gap-2">
                          <Link
                            href={item.link}
                            style={{ backgroundColor: '#09090b', color: '#ffffff' }}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#E8742C] transition-colors"
                          >
                            <span>{item.ctaText}</span>
                            <ArrowRight size={13} />
                          </Link>
                          <Link
                            href="/contact"
                            style={{ backgroundColor: '#f4f4f5', color: '#09090b' }}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors"
                          >
                            <span>Book Strategy Call</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
