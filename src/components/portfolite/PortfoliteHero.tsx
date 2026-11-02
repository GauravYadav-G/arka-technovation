'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroSlide {
  id: string;
  index: string;
  title: string;
  imageWebp: string;
  imagePng: string;
  link: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'software-development',
    index: '01',
    title: 'Software Development',
    imageWebp: '/images/hero/hero-01-software-development.webp',
    imagePng: '/images/hero/hero-01-software-development.png',
    link: '/services/development',
  },
  {
    id: 'digital-marketing',
    index: '02',
    title: 'Digital Marketing',
    imageWebp: '/images/hero/hero-02-digital-marketing.webp',
    imagePng: '/images/hero/hero-02-digital-marketing.png',
    link: '/services/digital-marketing',
  },
  {
    id: 'search-ai-engines',
    index: '03',
    title: 'SEO, GEO & AEO Services',
    imageWebp: '/images/hero/hero-03-search-ai-engines.webp',
    imagePng: '/images/hero/hero-03-search-ai-engines.png',
    link: '/seo-lead-generation',
  },
  {
    id: 'film-production',
    index: '04',
    title: 'Film Production & Media',
    imageWebp: '/images/hero/hero-04-film-production.webp',
    imagePng: '/images/hero/hero-04-film-production.png',
    link: '/services/film-making',
  },
  {
    id: 'corporate-world-news',
    index: '05',
    title: 'Corporate World News',
    imageWebp: '/images/hero/hero-05-corporate-world-news.webp',
    imagePng: '/images/hero/hero-05-corporate-world-news.png',
    link: '/blogs',
  },
];

const AUTOPLAY_DURATION = 6000; // 6 seconds per slide

export default function PortfoliteHero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeSlide = HERO_SLIDES[current];

  // Go to next slide
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Jump to specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
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
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="hero-slider"
      className="relative w-full pt-[70px] lg:pt-[114px] bg-white text-black font-framer select-none overflow-hidden"
      aria-label="ARKA Technovation Hero Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-Bleed Edge-to-Edge Hero Slider (Zero Padding, Full Screen Width) */}
      <div className="relative w-full aspect-[1672/941] overflow-hidden bg-zinc-900 group">
        
        {/* Animated Slide Canvas */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeSlide.id}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <Link
              href={activeSlide.link}
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
                  className="w-full h-full object-cover object-center select-none"
                  loading={current === 0 ? 'eager' : 'lazy'}
                  fetchPriority={current === 0 ? 'high' : 'auto'}
                />
              </picture>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Subtle Left / Right Navigation Chevrons (Only appear on desktop hover; zero clutter on mobile) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-zinc-800 hover:text-[#E8742C] border border-zinc-200/80 shadow-lg backdrop-blur-md items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.2} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-zinc-800 hover:text-[#E8742C] border border-zinc-200/80 shadow-lg backdrop-blur-md items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
        </button>
      </div>
    </section>
  );
}
