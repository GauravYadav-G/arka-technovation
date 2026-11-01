'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { PRESETS } from '../LiquidBackground';

const LiquidBackground = dynamic(() => import('../LiquidBackground'), {
  ssr: false,
});

export default function PortfoliteHero() {
  // Default to ARKA Solar Fire palette (index 0)
  const [presetIndex, setPresetIndex] = useState(0);

  useEffect(() => {
    // Check if user previously saved a theme preference for testing
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('arka-hero-theme');
      if (saved !== null) {
        const idx = parseInt(saved, 10);
        if (!isNaN(idx) && idx >= 0 && idx < PRESETS.length) {
          setPresetIndex(idx);
        }
      }

      const handleThemeChange = (e: Event) => {
        const customEvent = e as CustomEvent<{ index: number }>;
        if (typeof customEvent.detail?.index === 'number') {
          setPresetIndex(customEvent.detail.index);
        }
      };

      window.addEventListener('arka:theme-change', handleThemeChange);
      return () => window.removeEventListener('arka:theme-change', handleThemeChange);
    }
  }, []);

  const line1Words = ['Digital', 'Products', 'that', 'you'];
  const line2Words = ['need', 'Indeed'];

  const scrollToProjects = () => {
    const target = document.querySelector('#projects') || document.querySelector('#works');
    if (!target) return;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element | string, opt?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(target, { offset: -70 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-32 sm:pt-40 pb-12 sm:pb-16 font-framer bg-white text-black overflow-hidden flex flex-col justify-between items-center text-center isolate select-none" style={{ contain: 'layout style' }}>
      {/* Interactive Liquid WebGL Canvas Background (Defaults to Solar Fire) */}
      <LiquidBackground preset={presetIndex} />

      {/* Subtle Feathered Bottom Blend into White Section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/40 to-transparent z-10"
      />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center my-auto pt-6 sm:pt-10">
        {/* Hero Title with Smooth Line-Level Entrance (CSS-accelerated for instant, rock-solid LCP) */}
        <h1
          style={{ color: '#ffffff' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-normal tracking-tight text-white leading-[1.05] sm:leading-[1.02] max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          <div className="hero-line-1 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
            {line1Words.map((word) => (
              <span
                key={word}
                style={{ color: '#ffffff' }}
                className="inline-block"
              >
                {word}
              </span>
            ))}
          </div>
          <div className="hero-line-2 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 mt-1 sm:mt-2">
            {line2Words.map((word) => (
              <span
                key={word}
                style={{
                  color: word === 'Indeed' ? 'rgba(255, 255, 255, 0.75)' : '#ffffff',
                }}
                className={`inline-block ${word === 'Indeed' ? 'font-light' : ''}`}
              >
                {word}
              </span>
            ))}
          </div>
        </h1>

        {/* Subtitle */}
        <p
          style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          className="hero-sub-animate mt-6 text-white text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed text-balance drop-shadow-md"
        >
          We think, design and develop custom enterprise software, high-performance web platforms, and search engine dominance for forward-thinking brands.
        </p>

        {/* Action Buttons (Framer Authentic Glow + Outline) */}
        <div className="hero-btn-animate mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button with Radial Glow Backing */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-full blur-md opacity-40 group-hover:opacity-80 transition duration-500" />
            <a
              href="/contact"
              className="site-button site-button--light relative px-7 sm:px-8 py-3 rounded-full bg-white hover:bg-zinc-100 active:scale-[0.97] text-black text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center gap-2 transition-[transform,background-color,box-shadow] duration-200 ease-out shadow-[0_4px_24px_rgba(255,255,255,0.25)]"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Secondary Ghost Button */}
          <button
            onClick={scrollToProjects}
            style={{ color: '#ffffff' }}
            className="px-7 sm:px-8 py-3 rounded-full bg-black/25 hover:bg-black/40 active:scale-[0.97] border border-white/30 hover:border-white/60 text-white text-xs sm:text-sm font-medium tracking-wide transition-[transform,background-color,border-color] duration-200 ease-out backdrop-blur-md shadow-sm cursor-pointer"
          >
            See Projects
          </button>
        </div>
      </div>

      {/* Scroll Down Mouse Indicator — Accessible 44px touch area with optical pill */}
      <div className="hero-scroll-animate relative z-20 mt-10 flex items-center justify-center select-none">
        <button
          onClick={scrollToProjects}
          aria-label="Scroll down to projects"
          className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
        >
          <div className="w-5 h-8 rounded-full border border-white/40 bg-white/15 group-hover:bg-white/25 group-hover:border-white transition-[border-color,background-color] duration-200 backdrop-blur-sm flex justify-center pt-1.5 shadow-sm">
            <div className="hero-mouse-wheel w-1 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
          </div>
        </button>
      </div>
    </section>
  );
}
