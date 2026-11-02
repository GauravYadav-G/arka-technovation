'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Target,
  Search,
  Film,
  Newspaper,
  ArrowRight,
  Plus,
  Minus,
} from 'lucide-react';

export interface LightifyHeroSlide {
  id: string;
  index: string;
  num: number;
  watermark: string;
  category: string;
  title: string;
  shortTitle: string;
  headline: string;
  hotspotTop: {
    label: string;
    sublabel: string;
  };
  hotspotBottom: {
    label: string;
    sublabel: string;
    calloutText: string;
  };
  narrativeText: string;
  narrativeLinkText: string;
  narrativeHref: string;
  imageWebp: string;
  imagePng: string;
  serviceHref: string;
  accent: string;
}

export const HERO_SLIDES: LightifyHeroSlide[] = [
  {
    id: 'software-development',
    index: '01',
    num: 1,
    watermark: 'DEVELOPMENT',
    category: '01 · SOFTWARE ENGINEERING',
    title: 'Software Development',
    shortTitle: 'Software Dev',
    headline: 'Bespoke Enterprise Software & Scalable Cloud Matrices',
    hotspotTop: {
      label: 'Modular Architecture',
      sublabel: 'Next.js 15 & High-Throughput APIs',
    },
    hotspotBottom: {
      label: 'Enterprise ERP & CRM',
      sublabel: 'Custom workflow matrices built for dependable scale',
      calloutText:
        'Using modular microservices and automated matrices, we engineer platforms that scale with zero lock-in.',
    },
    narrativeText:
      'Over 6,256 projects executed across enterprise CRM, custom portals, and automated workflow matrices.',
    narrativeLinkText: 'Explore Architecture.',
    narrativeHref: '/services/development',
    imageWebp: '/images/hero/hero-01-software-development.webp',
    imagePng: '/images/hero/hero-01-software-development.png',
    serviceHref: '/services/development',
    accent: '#E8742C',
  },
  {
    id: 'digital-marketing',
    index: '02',
    num: 2,
    watermark: 'PERFORMANCE',
    category: '02 · DIGITAL MARKETING',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    headline: 'Full-Funnel Acquisition & Precision Conversion Optimization',
    hotspotTop: {
      label: 'Multi-Touch Telemetry',
      sublabel: 'Real-time revenue attribution & ROI modeling',
    },
    hotspotBottom: {
      label: '+248% Qualified Inbound',
      sublabel: 'Paid search, programmatic media & conversion engineering',
      calloutText:
        'Using precision attribution telemetry, we connect enterprise ad spend directly to verified qualified pipeline.',
    },
    narrativeText:
      '12,000+ high-intent inbound calls and leads generated across Meta, Google Ads, and omnichannel brand campaigns.',
    narrativeLinkText: 'Explore Growth Telemetry.',
    narrativeHref: '/services/digital-marketing',
    imageWebp: '/images/hero/hero-02-digital-marketing.webp',
    imagePng: '/images/hero/hero-02-digital-marketing.png',
    serviceHref: '/services/digital-marketing',
    accent: '#F59E0B',
  },
  {
    id: 'search-ai-engines',
    index: '03',
    num: 3,
    watermark: 'AUTHORITY',
    category: '03 · SEARCH & AI ENGINES',
    title: 'SEO, GEO & AEO Services',
    shortTitle: 'SEO & AI',
    headline: 'Dominate Organic Search & Generative AI Answer Engines',
    hotspotTop: {
      label: 'Top-3 Search Rankings',
      sublabel: 'Schema.org entity graphs & Core Web Vitals dominance',
    },
    hotspotBottom: {
      label: '+312% Organic Authority',
      sublabel: 'Technical crawl depth & answer engine optimization',
      calloutText:
        'Using structured entity graphs and high-intent keyword mapping, we guarantee top organic authority across AI and Google search.',
    },
    narrativeText:
      'Dominating search engine results pages and AI generative overviews for industry-leading enterprise brands.',
    narrativeLinkText: 'Explore Search Dominance.',
    narrativeHref: '/seo-lead-generation',
    imageWebp: '/images/hero/hero-03-search-ai-engines.webp',
    imagePng: '/images/hero/hero-03-search-ai-engines.png',
    serviceHref: '/seo-lead-generation',
    accent: '#10B981',
  },
  {
    id: 'film-production',
    index: '04',
    num: 4,
    watermark: 'CINEMATIC',
    category: '04 · PRODUCTION STUDIO',
    title: 'Film Production & Media',
    shortTitle: 'Film & Media',
    headline: 'Broadcast-Grade Corporate Cinema & Next-Gen Visuals',
    hotspotTop: {
      label: '4K Cinema Studio',
      sublabel: 'Industrial plant documentaries & executive film',
    },
    hotspotBottom: {
      label: 'Full Crew & AI Motion',
      sublabel: 'Commercial ads, podcast studios & product shoots',
      calloutText:
        'Using broadcast-grade cinema gear and cinematic grading, we produce corporate films that command executive attention.',
    },
    narrativeText:
      'In-house production crew, aerial cinema, soundstage facilities, and high-impact commercial video produced in Delhi NCR.',
    narrativeLinkText: 'Explore Film & Production.',
    narrativeHref: '/services/film-making',
    imageWebp: '/images/hero/hero-04-film-production.webp',
    imagePng: '/images/hero/hero-04-film-production.png',
    serviceHref: '/services/film-making',
    accent: '#8B5CF6',
  },
  {
    id: 'corporate-world-news',
    index: '05',
    num: 5,
    watermark: 'BROADCAST',
    category: '05 · CORPORATE WORLD NEWS',
    title: 'Corporate World News',
    shortTitle: 'Corporate News',
    headline: 'Authoritative Corporate Journalism & Industry Market Intelligence',
    hotspotTop: {
      label: 'Newsroom & Media Wall',
      sublabel: 'Executive interview broadcasts & market analysis',
    },
    hotspotBottom: {
      label: 'Strategic PR Wire',
      sublabel: 'Corporate press releases & verified sector reports',
      calloutText:
        'Using verified market data and broadcast interviews, we publish authoritative updates that shape industry narratives.',
    },
    narrativeText:
      'Breaking business updates, market research reports, and executive leadership interviews distributed to global readers.',
    narrativeLinkText: 'Read Corporate News.',
    narrativeHref: '/blogs',
    imageWebp: '/images/hero/hero-05-corporate-world-news.webp',
    imagePng: '/images/hero/hero-05-corporate-world-news.png',
    serviceHref: '/blogs',
    accent: '#3B82F6',
  },
];

const AUTOPLAY_INTERVAL = 6500; // 6.5s per slide

export default function PortfoliteHero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [showTopHotspot, setShowTopHotspot] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeSlide = HERO_SLIDES[current];

  // Go to next slide
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    setShowTopHotspot(false);
  }, []);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setShowTopHotspot(false);
  }, []);

  // Go to specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setShowTopHotspot(false);
    },
    [current]
  );

  // Autoplay ticker
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="hero-lightify-section"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-32 pb-10 sm:pb-14 bg-[#212328] text-white font-framer select-none overflow-hidden flex flex-col justify-between items-center isolate"
      aria-label="ARKA Technovation Enterprise Hero Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ================================================================ */}
      {/* 1. CINEMATIC MATTE STUDIO BACKGROUND WITH AMBIENT RADIAL GLOW    */}
      {/* ================================================================ */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_50%_46%,#2f333d_0%,#202227_60%,#16171b_100%)] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Subtle Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Subtle Feathered Bottom Blend into White Section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/10 to-transparent z-10"
      />

      {/* ================================================================ */}
      {/* 2. GIGANTIC BACKGROUND WATERMARK TYPOGRAPHY (Behind Subject)     */}
      {/* DEVELOPMENT / MARKETING / AUTHORITY / CINEMATIC / BROADCAST      */}
      {/* ================================================================ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-[1]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeSlide.watermark}
            custom={direction}
            initial={{ opacity: 0, y: direction > 0 ? 30 : -30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: direction > 0 ? -30 : 30, scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full text-center px-4"
          >
            <span
              className="font-extrabold uppercase tracking-tight text-white/[0.045] text-[clamp(4.2rem,14.5vw,13.5rem)] leading-none font-framer whitespace-nowrap block"
              style={{
                fontFamily: 'var(--font-cabinet-grotesk), sans-serif',
                letterSpacing: '-0.03em',
              }}
            >
              {activeSlide.watermark}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================================================================ */}
      {/* 3. TOP DISCIPLINE PILL BADGE                                     */}
      {/* ================================================================ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-2 sm:pt-4 flex items-center justify-center">
        <Link
          href={activeSlide.serviceHref}
          className="group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-200 max-w-[94vw] overflow-hidden"
        >
          <span className="w-2 h-2 rounded-full bg-solar animate-pulse shadow-[0_0_8px_#E8742C] shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase text-white/80 group-hover:text-white font-medium truncate">
            {activeSlide.category}
          </span>
          <span className="text-white/30 hidden xs:inline">|</span>
          <span className="text-[11px] sm:text-xs font-semibold text-solar flex items-center gap-1 group-hover:translate-x-0.5 transition-transform truncate">
            <span>{activeSlide.title}</span>
            <ArrowRight className="w-3 h-3 shrink-0" />
          </span>
        </Link>
      </div>

      {/* ================================================================ */}
      {/* 4. CENTRAL 3D SHOWCASE VISUAL WITH INTERACTIVE HOTSPOT PINS      */}
      {/* ================================================================ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 my-auto py-2 sm:py-4 flex items-center justify-center">
        <div className="relative w-full max-w-4xl aspect-[16/9] flex items-center justify-center">
          
          {/* Animated 3D Visual Subject */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeSlide.id}
              custom={direction}
              initial={{
                opacity: 0,
                scale: 0.94,
                y: direction > 0 ? 25 : -25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 1.03,
                y: direction > 0 ? -25 : 25,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              {/* Subtle Floating Levitation Motion */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 5.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-black/30 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xs group"
              >
                <Link
                  href={activeSlide.serviceHref}
                  className="block w-full h-full cursor-pointer focus:outline-none"
                  aria-label={`View ${activeSlide.title}`}
                >
                  <picture>
                    <source srcSet={activeSlide.imageWebp} type="image/webp" />
                    <img
                      src={activeSlide.imagePng}
                      alt={`ARKA Technovation - ${activeSlide.title}`}
                      width={1672}
                      height={941}
                      className="w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                      loading={current === 0 ? 'eager' : 'lazy'}
                      fetchPriority={current === 0 ? 'high' : 'auto'}
                    />
                  </picture>
                  {/* Subtle Vignette Gradient around edges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15 pointer-events-none" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ============================================================== */}
          {/* INTERACTIVE HOTSPOT (+) ON UPPER-LEFT (Like Reference)         */}
          {/* ============================================================== */}
          <div className="absolute top-[18%] left-[2%] sm:left-[6%] z-20">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowTopHotspot((prev) => !prev)}
                onMouseEnter={() => setShowTopHotspot(true)}
                onMouseLeave={() => setShowTopHotspot(false)}
                aria-label="Toggle technical highlight"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/60 bg-black/40 hover:bg-white text-white hover:text-black flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              >
                <Plus className="w-4 h-4" strokeWidth={2.5} />
              </button>

              {/* Tooltip Callout */}
              <AnimatePresence>
                {showTopHotspot && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    className="absolute left-full ml-3 top-1/2 -translate-y-1/2 w-52 sm:w-60 p-3 rounded-xl bg-black/85 backdrop-blur-xl border border-white/20 shadow-2xl text-left pointer-events-none z-30"
                  >
                    <p className="text-[10px] font-mono uppercase tracking-wider text-solar font-semibold">
                      {activeSlide.hotspotTop.label}
                    </p>
                    <p className="text-xs text-white/90 font-light mt-0.5 leading-snug">
                      {activeSlide.hotspotTop.sublabel}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ============================================================== */}
          {/* INTERACTIVE HOTSPOT (-) ON LOWER-RIGHT WITH LEADER LINE        */}
          {/* Matches Reference: Circle (-) + Fine line + Text annotation    */}
          {/* ============================================================== */}
          <div className="absolute bottom-[16%] right-[2%] sm:right-[5%] z-20 hidden md:flex items-center">
            {/* The (-) Hotspot Button */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/60 bg-black/40 hover:bg-white text-white hover:text-black flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer shrink-0">
              <Minus className="w-4 h-4" strokeWidth={2.5} />
            </div>

            {/* Connecting Fine Horizontal Line */}
            <div className="w-8 lg:w-14 h-[1px] bg-white/40 shrink-0" />

            {/* Annotation Text Block */}
            <div className="max-w-[200px] lg:max-w-[240px] text-left pl-3">
              <p className="text-[11px] lg:text-xs text-white/80 font-light leading-relaxed drop-shadow-sm">
                {activeSlide.hotspotBottom.calloutText}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* 5. VERTICAL SLIDER PAGINATION TRACK ON RIGHT EDGE (Exact Ref)    */}
      {/* Capsule indicator on active item, delicate open circles for rest */}
      {/* ================================================================ */}
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${slide.index} - ${slide.title}`}
              className="relative p-1.5 flex items-center justify-center cursor-pointer group"
            >
              {isActive ? (
                // Active Capsule Track Pill
                <motion.div
                  layoutId="lightify-active-capsule"
                  className="w-1.5 h-6 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              ) : (
                // Inactive Open Circle Dot
                <div className="w-1.5 h-1.5 rounded-full border border-white/40 group-hover:border-white group-hover:bg-white/40 transition-all duration-200" />
              )}

              {/* Tooltip on Hover */}
              <span className="absolute right-full mr-3 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {slide.index} {slide.shortTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* ================================================================ */}
      {/* 6. BOTTOM BAR: Editorial Narrative on Left, < > Nav on Right     */}
      {/* ================================================================ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-2 pb-2 sm:pb-0 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4">
        
        {/* Bottom Left: Editorial Impact Statement + Solar Orange Action Link */}
        <div className="max-w-2xl text-left pr-2 sm:pr-0">
          <p className="text-xs sm:text-[13px] text-white/70 font-light leading-relaxed">
            {activeSlide.narrativeText}{' '}
            <Link
              href={activeSlide.narrativeHref}
              className="text-solar hover:underline font-medium inline-flex items-center gap-0.5 cursor-pointer ml-1"
            >
              <span>{activeSlide.narrativeLinkText}</span>
            </Link>
          </p>
        </div>

        {/* Bottom Right: Minimalist < > Navigation Controls */}
        <div className="flex items-center gap-4 sm:gap-6 self-end sm:self-auto shrink-0 font-light">
          <div className="text-xs font-mono text-white/40">
            <span className="text-white font-semibold">{activeSlide.index}</span>
            <span className="mx-1">/</span>
            <span>05</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-white/70">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
            >
              <span className="text-sm sm:text-base font-light leading-none">&lt;</span>
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
            >
              <span className="text-sm sm:text-base font-light leading-none">&gt;</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
