import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ShowcaseSlide {
  img: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
  chip: string;
}

const CARD_1_SLIDES: ShowcaseSlide[] = [
  {
    img: '/images/industries/saas.webp',
    alt: 'Digital Product Studio - Arka Product Engineering',
    badge: 'Digital Product Studio',
    title: 'Arka Product Engineering',
    subtitle: 'Full-stack software, headless e-commerce & WebGL',
    chip: 'Web & Cloud Platform',
  },
  {
    img: '/images/industries/ai-automation.webp',
    alt: 'Autonomous AI & Neural Workflows',
    badge: 'Autonomous Systems',
    title: 'Neural Engine Platforms',
    subtitle: 'High-throughput model serving & automated intelligence',
    chip: 'AI & Model Serving',
  },
];

const CARD_2_SLIDES: ShowcaseSlide[] = [
  {
    img: '/images/industries/robotics-hardware.webp',
    alt: 'Hardware & DeepTech - Advanced Computing',
    badge: 'Hardware & DeepTech',
    title: 'Advanced Computing',
    subtitle: 'Robotics, sensory data pipelines & edge systems',
    chip: 'Robotics & Edge',
  },
  {
    img: '/images/industries/deeptech.webp',
    alt: 'DeepTech & Quantum Systems',
    badge: 'Frontier Infrastructure',
    title: 'Sensory RTOS & Quantum',
    subtitle: 'Precision sensor fusion & embedded real-time microelectronics',
    chip: 'Sensors & Embedded',
  },
];

const CLIENT_BRANDS = [
  'BotBlox',
  'Kestrix',
  'Hylight',
  'Artefact',
  'Skipper NDT',
  'Siemens',
  'Vast Space',
  'Quantum Silicon',
  'Cognitive Energy',
  'DeepOptics',
  'NVIDIA Bio',
  'Apex Robotics',
  'Orbital Lab',
  'BioGrid Corp',
  'Synapse Dynamics',
  'Plexus AI',
  'NanoMatrix',
  'Hyperion Dynamics',
  'Aether Dynamics',
  'Cortex Tech',
  'Helios Energy',
];

const METRICS = [
  { val: '500+', lbl: 'Projects Delivered' },
  { val: '100+', lbl: 'Client Testimonials' },
  { val: '98%', lbl: 'Client Retention Rate' },
  { val: '10+', lbl: 'Years Industry Leadership' },
];

function AnimatedShowcaseCard({
  slides,
  accentColor,
  dotColorClass,
  intervalMs = 4800,
  staggerMs = 0,
}: {
  slides: ShowcaseSlide[];
  accentColor: string;
  dotColorClass: string;
  intervalMs?: number;
  staggerMs?: number;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides with staggered delay
  useEffect(() => {
    if (isPaused) return;

    const delay = staggerMs > 0 && activeIdx === 0 ? staggerMs : 0;
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % slides.length);
      }, intervalMs);
      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isPaused, intervalMs, staggerMs, slides.length, activeIdx]);

  const currentSlide = slides[activeIdx];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-black/10 bg-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-1 aspect-[16/10.5] cursor-pointer select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={handleNext}
    >
      {/* Background Image Layer with Cinematic Fade & Zoom Transition */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 1.08, filter: 'blur(3px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(2px)' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.img}
              alt={currentSlide.alt}
              className="w-full h-full object-cover animate-ken-burns transition-transform duration-700 ease-out group-hover:scale-108"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glassmorphic Gradient Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25 flex flex-col justify-between p-5 sm:p-6 pointer-events-none">
        
        {/* Top Header: Badge + Segmented Progress Indicator Bars */}
        <div className="flex items-center justify-between gap-3 pointer-events-auto">
          {/* Eyebrow Badge */}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSlide.badge}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 !text-white font-mono text-[10px] tracking-[0.16em] uppercase font-medium shadow-sm"
              style={{ color: '#ffffff' }}
            >
              <span className={`w-2 h-2 rounded-full ${dotColorClass} animate-pulse`} />
              {currentSlide.badge}
            </motion.span>
          </AnimatePresence>

          {/* Segmented Slide Indicators & Navigation Controls */}
          <div className="flex items-center gap-2">
            {/* Quick Arrow Controls (Reveal on Hover) */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                type="button"
                onClick={handlePrev}
                className="w-6 h-6 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:bg-black/90 flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Previous slide"
              >
                <ChevronLeft size={12} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-6 h-6 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:bg-black/90 flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Next slide"
              >
                <ChevronRight size={12} />
              </button>
            </div>

            {/* Segmented Progress Bars */}
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIdx(i);
                  }}
                  className="relative h-1.5 w-6 sm:w-7 rounded-full overflow-hidden bg-white/30 hover:bg-white/50 transition-colors cursor-pointer"
                  aria-label={`Jump to slide ${i + 1}`}
                >
                  {/* Fill Animation for Active Segment */}
                  {activeIdx === i && (
                    <motion.div
                      key={`fill-${activeIdx}-${isPaused}`}
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: accentColor }}
                      initial={{ width: '0%' }}
                      animate={{ width: isPaused ? undefined : '100%' }}
                      transition={{
                        duration: intervalMs / 1000,
                        ease: 'linear',
                      }}
                    />
                  )}
                  {/* Completed Fill for Past Segments */}
                  {i < activeIdx && (
                    <div className="absolute inset-0 rounded-full bg-white/90" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer: Dynamic Headline & Subtitle synchronized with image */}
        <div className="pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-block px-2 py-0.5 rounded bg-white/15 backdrop-blur-sm border border-white/15 font-mono text-[9.5px] uppercase tracking-[0.18em] !text-white/90 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {currentSlide.chip}
                </span>
                <span className="font-mono text-[9.5px] text-white/60 tracking-wider">
                  0{activeIdx + 1} / 0{slides.length}
                </span>
              </div>
              <h3
                className="font-heading text-lg sm:text-xl md:text-2xl font-medium !text-white tracking-tight leading-snug drop-shadow-md"
                style={{ color: '#ffffff' }}
              >
                {currentSlide.title}
              </h3>
              <p
                className="!text-white/85 font-body text-xs sm:text-sm font-light mt-1 max-w-md drop-shadow-sm"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                {currentSlide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function ClientsShowcaseSection() {
  return (
    <section className="clients-showcase-section relative w-full pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 border-b border-black/[0.07] overflow-hidden bg-transparent">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Grid: Dribbble/Pinterest Inspired Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Visual Showcase Cards with Continuous Transition Animations */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
            {/* Card 1: Digital Product Studio & AI Automation (Solar Accent) */}
            <AnimatedShowcaseCard
              slides={CARD_1_SLIDES}
              accentColor="#e8742c"
              dotColorClass="bg-[#e8742c] ring-2 ring-[#e8742c]/40"
              intervalMs={4600}
              staggerMs={0}
            />

            {/* Card 2: Hardware & DeepTech (Cobalt Accent) */}
            <AnimatedShowcaseCard
              slides={CARD_2_SLIDES}
              accentColor="#4050a7"
              dotColorClass="bg-[#4050a7] ring-2 ring-[#4050a7]/40"
              intervalMs={4600}
              staggerMs={2300}
            />
          </div>

          {/* Right Column: Institutional Trust Metrics & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8742c]/[0.08] border border-[#e8742c]/20 text-[#e8742c] font-mono text-[11px] tracking-[0.2em] uppercase font-semibold w-fit mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8742c]" />
              Enterprise Validation
            </div>

            {/* Headline with Cabinet Grotesk luxury display typography */}
            <h2 className="font-heading text-[clamp(2rem,3.2vw,3.2rem)] font-medium text-neutral-950 tracking-[-0.03em] leading-[1.08] mb-5">
              Engineered for companies changing global infrastructure.
            </h2>

            {/* Narrative text */}
            <p className="font-body text-neutral-600 text-[15px] sm:text-[16px] leading-[1.68] max-w-xl font-normal mb-8 sm:mb-10">
              From pre-seed deeptech prototypes to Series C market champions, we bridge complex engineering with world-class digital experiences, verifiable growth metrics, and high-conversion architectures.
            </p>

            {/* KPI Live Stats Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-6 border-t border-black/[0.08]">
              {METRICS.map((m) => (
                <div key={m.lbl} className="flex flex-col">
                  <span className="font-heading text-[clamp(2.2rem,3vw,2.9rem)] font-light sm:font-normal text-neutral-900 tracking-tight leading-none">
                    {m.val}
                  </span>
                  <span className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.14em] uppercase text-neutral-500 font-medium mt-2">
                    {m.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Marquee Strip: Seamless Infinite Brand Ticker */}
        <div className="mt-14 sm:mt-20 lg:mt-24 pt-8 sm:pt-10 border-t border-black/[0.07]">
          <p className="text-center font-mono text-[10px] sm:text-[10.5px] tracking-[0.24em] uppercase text-neutral-400 font-medium mb-6">
            Trusted by industry innovators &amp; deeptech pioneers
          </p>

          <div className="relative w-full overflow-hidden">
            {/* Left & Right gradient fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#fbfbfb] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#fbfbfb] to-transparent z-10" />

            {/* Continuous Marquee Track */}
            <div className="flex w-max arka-marquee gap-3 sm:gap-4 hover:[animation-play-state:paused] py-2">
              {[...CLIENT_BRANDS, ...CLIENT_BRANDS].map((brand, i) => (
                <span
                  key={`${brand}-${i}`}
                  className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-black/[0.08] bg-white/80 hover:bg-white hover:border-[#e8742c]/40 hover:text-[#e8742c] transition-all duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-md cursor-default text-neutral-700 font-mono text-[11px] sm:text-[11.5px] tracking-[0.16em] uppercase backdrop-blur-sm whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#e8742c] transition-colors" />
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

