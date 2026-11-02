'use client';

import React, { useState, useRef, useCallback } from 'react';
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
  CheckCircle2,
} from 'lucide-react';

interface Pillar {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

interface DisciplineItem {
  id: string;
  num: string;
  label: string;
  category: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  headline: string;
  narrative: string;
  pillars: Pillar[];
  link: string;
  ctaText: string;
  image: string;
  imageAlt: string;
  techSpecs: string[];
}

const DISCIPLINES: DisciplineItem[] = [
  {
    id: 'software-development',
    num: '01',
    label: 'Software Development',
    category: '01 / Software Engineering & Cloud',
    icon: Code2,
    headline: 'Bespoke Enterprise Software, Custom CRM, ERP & Modular Architectures',
    narrative:
      'We engineer bespoke enterprise software, modular backend architectures, scalable ERP systems, custom CRMs, and automated workflow matrices built for dependable scale. Our dedicated software engineering pods eliminate technical debt and deliver high-availability platforms tailored to complex business logic.',
    pillars: [
      {
        icon: Layout,
        title: 'Custom CRM & ERP Systems',
        desc: 'Bespoke operational backbones with automated approval matrices, live inventory sync, and unified customer data.',
      },
      {
        icon: Code2,
        title: 'Mobile & Web Platforms',
        desc: 'Enterprise iOS, Android, and Next.js applications engineered with strict type safety and sub-second load times.',
      },
      {
        icon: ShieldCheck,
        title: 'Automated Workflow Matrices',
        desc: 'Modular backend pipelines, microservices, and custom APIs built to handle enterprise scale with complete source handover.',
      },
    ],
    link: '/services/development',
    ctaText: 'Explore Software Development',
    image: '/images/disciplines/discipline-01-software-development.webp',
    imageAlt: 'ARKA Technovation - Software Engineering, Enterprise CRM and Custom Platform Development',
    techSpecs: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'digital-marketing',
    num: '02',
    label: 'Digital Marketing',
    category: '02 / Performance Media & Growth',
    icon: Target,
    headline: 'Full-Funnel Acquisition Campaigns & Multi-Touch Attribution Telemetry',
    narrative:
      'Full-funnel acquisition campaigns, multi-touch attribution telemetry, and precision conversion optimization engineered to accelerate verified business revenue. We build the strategy, manage the spend across Google Ads and Meta Ads, and optimize for pipeline growth rather than vanity metrics.',
    pillars: [
      {
        icon: Target,
        title: 'Google & Meta Paid Media',
        desc: 'Search, Performance Max, and social campaigns managed against strict cost-per-acquisition (CPA) and return on ad spend (ROAS).',
      },
      {
        icon: Sparkles,
        title: 'Branding & Social Management',
        desc: 'Comprehensive multi-channel social media marketing, high-impact content marketing, and brand identity governance.',
      },
      {
        icon: BarChart3,
        title: 'Conversion Optimization (CRO)',
        desc: 'Multi-touch attribution telemetry, dynamic landing page testing, and PR management that compound lead volume.',
      },
    ],
    link: '/services/digital-marketing',
    ctaText: 'Explore Digital Marketing',
    image: '/images/disciplines/discipline-02-digital-marketing.webp',
    imageAlt: 'ARKA Technovation - Performance Marketing, Paid Media and Attribution Telemetry',
    techSpecs: ['Google PMax', 'Meta Business', 'WhatsApp API', 'Looker Studio', 'GA4 Attribution'],
  },
  {
    id: 'seo-geo-aeo',
    num: '03',
    label: 'SEO, GEO & AEO',
    category: '03 / Search & AI Engine Dominance',
    icon: Radio,
    headline: 'Technical Crawl Architecture, Schema Entity Graphs & Generative AI Dominance',
    narrative:
      'Technical crawl architecture, high-intent keyword mapping, structured Schema.org entity graphs, generative & answer engine dominance, and local discovery. We ensure your brand dominates traditional search results while being cited as the authoritative source by ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
    pillars: [
      {
        icon: Gauge,
        title: 'Technical Crawl & Schema Graphs',
        desc: 'Sub-second Core Web Vitals, semantic HTML hierarchy, and interconnected Schema.org entity knowledge graphs.',
      },
      {
        icon: TrendingUp,
        title: 'Generative & Answer Engines (GEO/AEO)',
        desc: 'Passage indexing optimization and AI engine answer extraction for maximum citability in LLM-driven search.',
      },
      {
        icon: Compass,
        title: 'High-Intent Keywords & Local SEO',
        desc: 'On-page and off-page optimization, local Google Business Profile (GMB) rank maps, and Google Marketplace listings.',
      },
    ],
    link: '/seo-lead-generation',
    ctaText: 'Explore SEO & AI Optimization',
    image: '/images/disciplines/discipline-03-search-ai-engines.webp',
    imageAlt: 'ARKA Technovation - SEO, GEO and AI Answer Engine Optimization',
    techSpecs: ['Core Web Vitals', 'Schema.org JSON-LD', 'AEO Citations', 'Google Maps Rank', 'Ahrefs'],
  },
  {
    id: 'film-production',
    num: '04',
    label: 'Film Production',
    category: '04 / Cinematic Soundstage & Media',
    icon: Zap,
    headline: 'Broadcast-Quality Corporate Films, TV Commercials & Executive Media',
    narrative:
      'Broadcast-quality corporate films, digital & TV commercials, executive interview pods, high-end studio photography, and next-gen AI video creation. Our in-house production studio handles everything from scripting, direction, and cinematography to color grading, sound design, and master delivery.',
    pillars: [
      {
        icon: Layers,
        title: 'Corporate Films & TV Commercials',
        desc: 'Cinematic corporate documentaries, TV ads, digital commercials, and industrial facility shoots with aerial drone footage.',
      },
      {
        icon: MessageSquare,
        title: 'Podcasts & Personal Interviews',
        desc: 'Broadcast-quality executive podcasts, CEO leadership interviews, and thought-leadership video pods in our studio.',
      },
      {
        icon: Sparkles,
        title: 'AI Video & Studio Photography',
        desc: 'Commercial product photography, model shoots, and cutting-edge generative AI video creation for multi-platform distribution.',
      },
    ],
    link: '/services/film-making',
    ctaText: 'Explore Film Production',
    image: '/images/disciplines/discipline-04-film-production.webp',
    imageAlt: 'ARKA Technovation - Cinematic Corporate Film Production and Soundstage Studio',
    techSpecs: ['4K/8K Sony Cinema', 'DaVinci Resolve Studio', 'DJI Aerial Cinema', 'Sennheiser Audio'],
  },
  {
    id: 'corporate-world-news',
    num: '05',
    label: 'Corporate World News',
    category: '05 / Editorial & Market Intelligence',
    icon: LineChart,
    headline: 'Authoritative Corporate Journalism, Executive Broadcasts & Market Research',
    narrative:
      'Authoritative corporate journalism, executive interview broadcasts, strategic press releases, breaking business updates, and rigorous market research. We research market verticals, track economic shifts, and produce verified corporate publications that position industry leaders at the forefront of their sector.',
    pillars: [
      {
        icon: LineChart,
        title: 'Interview & Press Releases',
        desc: 'Strategic corporate press releases, executive interview broadcasts, and global distribution to verified media outlets.',
      },
      {
        icon: BarChart3,
        title: 'Industries Analysis & Research',
        desc: 'Rigorous empirical market research, vertical benchmarks, and deep competitive intelligence for strategic decision-makers.',
      },
      {
        icon: Zap,
        title: 'Market Updates & Corporate News',
        desc: 'Daily business news updates, industry trend reporting, and authoritative analysis across emerging technology markets.',
      },
    ],
    link: '/corporate-world-news',
    ctaText: 'Explore Corporate World News',
    image: '/images/disciplines/discipline-05-corporate-world-news.webp',
    imageAlt: 'ARKA Technovation - Corporate World News, Journalism and Market Intelligence',
    techSpecs: ['Noida Broadcast Soundstage', 'Tier-1 Wire Syndication', 'Primary Sourcing', 'Complete IP Rights'],
  },
];

export default function ExpertiseTabsSection() {
  const [activeId, setActiveId] = useState<string>('digital-marketing');
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const active = DISCIPLINES.find((d) => d.id === activeId) || DISCIPLINES[1];

  const handleTabClick = useCallback((id: string) => {
    setActiveId(id);
    const targetBtn = tabButtonRefs.current[id];
    if (targetBtn) {
      targetBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % DISCIPLINES.length;
      handleTabClick(DISCIPLINES[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + DISCIPLINES.length) % DISCIPLINES.length;
      handleTabClick(DISCIPLINES[prevIndex].id);
    }
  };

  return (
    <section
      id="our-expertise"
      className="relative py-20 sm:py-28 lg:py-32 font-sans bg-[#FAF9F5] text-black border-t border-black/10 overflow-hidden isolate"
      aria-label="Core Technical Disciplines"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* ======================================================== */}
        {/* 1. SECTION HEADER (Clean Editorial Typography, No Badges)  */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2 sm:mb-2.5">
              Disciplines &amp; Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.12]">
              Core Technical Disciplines
            </h2>
          </div>

          <p className="text-xs sm:text-sm lg:text-base text-zinc-600 font-light max-w-md leading-relaxed border-l-2 border-[#E8742C]/40 pl-4">
            Software development, performance marketing, search optimization, film production, and market research.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 2. ARCHITECTURAL DISCIPLINE SELECTOR STRIP (NO BUBBLE PILLS) */}
        {/* ======================================================== */}
        <div className="relative mt-8 sm:mt-10">
          <div className="overflow-x-auto scrollbar-none border-b border-black/15 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div
              role="tablist"
              aria-label="Core Technical Disciplines"
              className="flex items-center gap-1 sm:gap-2 min-w-max"
            >
              {DISCIPLINES.map((item, idx) => {
                const isActive = item.id === activeId;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      tabButtonRefs.current[item.id] = el;
                    }}
                    role="tab"
                    id={`tab-${item.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${item.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleTabClick(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`group relative flex items-center gap-2 sm:gap-2.5 py-3.5 sm:py-4 px-3 sm:px-5 font-mono text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer shrink-0 border-b-2 -mb-px outline-none ${
                      isActive
                        ? 'border-black text-black font-bold'
                        : 'border-transparent text-zinc-500 hover:text-black hover:border-black/20 font-medium'
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold tabular-nums transition-colors ${
                        isActive ? 'text-[#E8742C]' : 'text-zinc-400 group-hover:text-black'
                      }`}
                    >
                      {item.num}
                    </span>
                    <Icon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                        isActive ? 'text-[#E8742C]' : 'text-zinc-400 group-hover:text-black'
                      }`}
                    />
                    <span className="font-sans text-xs sm:text-sm tracking-tight">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. SHOWCASE STAGE: Clean Split Editorial Showcase Card   */}
        {/* ======================================================== */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 bg-white rounded-2xl sm:rounded-3xl border border-black/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column (7 cols): Editorial Narrative & Structured Specs */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between">
                <div>
                  {/* Category Eyebrow */}
                  <p className="text-xs font-mono uppercase tracking-wider text-[#E8742C] font-semibold mb-3">
                    {active.category}
                  </p>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-[1.18] mb-4">
                    {active.headline}
                  </h3>

                  {/* Narrative */}
                  <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed mb-6 sm:mb-8">
                    {active.narrative}
                  </p>

                  {/* Mobile-Only Visual (Integrated cleanly right before pillars on mobile) */}
                  <div className="block lg:hidden w-full mb-6">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-black/10 bg-zinc-100 shadow-sm">
                      <Image
                        src={active.image}
                        alt={active.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 inset-x-3 text-white flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#E8742C] font-semibold">{active.label}</span>
                        <span className="text-zinc-300">Sector 63, Noida</span>
                      </div>
                    </div>
                  </div>

                  {/* 3 Structured Spec Pillars (Clean Minimalist Divider Rows) */}
                  <div className="divide-y divide-black/8 border-y border-black/8 mb-8">
                    {active.pillars.map((pillar, idx) => {
                      const PillarIcon = pillar.icon;
                      return (
                        <div
                          key={idx}
                          className="py-4 sm:py-5 flex items-start gap-3.5 sm:gap-4 group hover:bg-zinc-50/70 -mx-2 px-2 rounded-xl transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-zinc-700 group-hover:bg-[#E8742C] group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <PillarIcon className="w-4 h-4" strokeWidth={2} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[11px] font-mono text-[#E8742C] font-bold">
                                0{idx + 1}.
                              </span>
                              <h4 className="text-sm sm:text-base font-bold text-black tracking-tight group-hover:text-[#E8742C] transition-colors">
                                {pillar.title}
                              </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                              {pillar.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={active.link}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-black hover:bg-[#E8742C] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 group"
                  >
                    <span>{active.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Book Strategy Call</span>
                  </Link>
                </div>
              </div>

              {/* Right Column (5 cols): High-Impact Studio Visual Canvas (Desktop Only) */}
              <div className="hidden lg:block lg:col-span-5 relative min-h-[580px] bg-zinc-100 border-l border-black/10 overflow-hidden group">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Overlaid Technical Telemetry & Location Badges */}
                <div className="absolute bottom-6 inset-x-6 text-white z-10">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#E8742C] font-semibold uppercase tracking-wider">
                      {active.label}
                    </span>
                    <span className="text-zinc-300">Sector 63, Noida</span>
                  </div>

                  <p className="text-base font-bold text-white mb-3">
                    100% In-House Specialist Execution
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/20 text-[11px] font-mono text-zinc-300">
                    {active.techSpecs.map((spec, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-xs border border-white/15">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
