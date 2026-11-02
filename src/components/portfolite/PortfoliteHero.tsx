'use client';

import React from 'react';
import Link from '@/components/Link';

export default function PortfoliteHero() {
  return (
    <section
      id="hero"
      className="relative w-full pt-[60px] lg:pt-[96px] bg-white text-black font-framer select-none overflow-hidden"
      aria-label="ARKA Technovation Hero"
    >
      {/* Full-Bleed Edge-to-Edge Hero Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-white">
        <Link
          href="/contact"
          className="block w-full h-full cursor-pointer focus:outline-none"
          aria-label="ARKA Technovation - Innovate. Build. Grow. Your Partner for Progress"
        >
          <picture className="block w-full h-full">
            <source srcSet="/images/hero/hero-main.webp" type="image/webp" />
            <img
              src="/images/hero/hero-main.jpg"
              alt="ARKA Technovation - Innovate. Build. Grow. Your Partner for Progress"
              width={1024}
              height={576}
              className="w-full h-full object-cover select-none"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </picture>
        </Link>
      </div>
    </section>
  );
}
