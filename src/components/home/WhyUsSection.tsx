'use client';

import React, { useEffect, useRef } from 'react';

const WHY_US_ITEMS = [
  {
    num: '01',
    bg: '#260503',
    title: 'Direct access to specialist pods',
    sub: 'No sales gatekeepers, no runaround.',
    text: 'At ARKA, you collaborate directly with senior full-stack developers, UI architects, and technical SEO specialists. Decisions happen in minutes, not across email threads.',
    img: '/images/why-us/why-01-direct-access.webp',
    alt: 'Direct access to senior specialist engineering pods collaborating on custom software development',
  },
  {
    num: '02',
    bg: '#4b0b06',
    title: '100% In-house engineering craft',
    sub: 'Zero outsourcing, 17+ years heritage.',
    text: 'Every line of code, UI system, CRM workflow, and cinematic asset is built under one roof in Sector 63, Noida. Over 850 executed projects and 600+ industrial clients delivered.',
    img: '/images/why-us/why-02-in-house-craft.webp',
    alt: '100% in-house engineering and production craft in modern Noida tech studio',
  },
  {
    num: '03',
    bg: '#711009',
    title: 'High-performance architecture',
    sub: 'Sub-second speeds & headless freedom.',
    text: 'We engineer Next.js 15 platforms with 99+ Core Web Vitals, enterprise headless CMS integrations, and robust CRM/ERP pipelines with zero technical debt.',
    img: '/images/why-us/why-03-high-performance.webp',
    alt: 'Modern high-performance enterprise Next.js software architecture and clean code',
  },
  {
    num: '04',
    bg: '#97150c',
    last: true,
    title: 'Transparent written ROI & SLAs',
    sub: 'Fixed scopes, verified milestones.',
    text: 'Clear deliverables, written timelines, and transparent ROI benchmarks before kick-off. No surprise invoices, no lock-in fees, and verified performance outcomes.',
    img: '/images/why-us/why-04-roi-slas.webp',
    alt: 'Transparent written ROI analytics, live performance tracking and verified milestone delivery',
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-ws-item]'));
    const bodies = items.map((item) => item.querySelector<HTMLElement>('[data-ws-body]'));
    const images = items.map((item) => item.querySelector<HTMLElement>('.ws__fig img'));
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktopQuery = window.matchMedia('(min-width: 810px)');
    const clamp01 = (val: number) => Math.min(1, Math.max(0, val));

    let rafId = 0;
    let isInView = false;

    let imageHeights = images.map((image) => image?.offsetHeight ?? 0);
    const measureHeights = () => {
      imageHeights = images.map((image) => image?.offsetHeight ?? 0);
    };
    measureHeights();

    const updateParallax = () => {
      rafId = 0;
      if (!isInView) return;

      const winH = window.innerHeight;
      const isDesktop = desktopQuery.matches;
      const rects = items.map((item) => item.getBoundingClientRect());

      for (let idx = 0; idx < items.length; idx++) {
        const rect = rects[idx];

        // Parallax image shift
        if (!isReduced && images[idx]) {
          const progress = clamp01((winH - rect.top) / (winH + rect.height));
          const offset = (progress * (imageHeights[idx] * 0.153)).toFixed(1);
          images[idx].style.setProperty('--py', offset);
        }

        // Stacking card body fade out as next card slides over
        if (isDesktop && idx < items.length - 1 && bodies[idx]) {
          const nextTop = rects[idx + 1].top;
          const fadeProg = clamp01((rect.bottom - nextTop) / Math.max(1, rect.height - 64));
          bodies[idx].style.opacity = String(1 - Math.min(1, fadeProg * 1.4));
        } else if (bodies[idx]) {
          bodies[idx].style.opacity = '1';
        }
      }
    };

    const scheduleUpdate = () => {
      if (isInView && !rafId) rafId = requestAnimationFrame(updateParallax);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) scheduleUpdate();
        else if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      },
      { rootMargin: '20% 0px' }
    );

    observer.observe(el);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', measureHeights, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', measureHeights);
      window.removeEventListener('resize', scheduleUpdate);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="why-us" className="ws scroll-mt-24 pt-6 sm:pt-0" data-ws style={{ '--n': '4' } as React.CSSProperties}>
      <div className="container ws__head pt-4 sm:pt-0">
        <div className="ws__headtxt">
          <p className="eyebrow">Why Us</p>
          <h2 className="ws__h2">Why Choose ARKA</h2>
        </div>
        <p className="ws__intro">
          Dedicated in-house specialist teams, direct communication, and dependable technical execution without middlemen or agency fluff.
        </p>
      </div>
      <ul className="ws__list">
        {WHY_US_ITEMS.map((item, idx) => (
          <li
            key={item.num}
            className={`ws__item ${item.last ? 'ws__item--last' : ''}`}
            style={{ '--i': String(idx), '--bg': item.bg } as React.CSSProperties}
            data-ws-item
          >
            <article className="ws__card" style={{ color: '#ffffff' }}>
              <div className="container ws__grid">
                <p className="ws__num" style={{ color: 'rgba(255, 255, 255, 0.75)', fontVariantNumeric: 'tabular-nums' }}>{item.num}</p>
                <h3 className="ws__title" style={{ color: '#ffffff', textWrap: 'balance' }}>{item.title}</h3>
                <div className="ws__right" data-ws-body>
                  <div className="ws__txt">
                    <p className="ws__sub" style={{ color: '#ffffff', textWrap: 'balance' }}>{item.sub}</p>
                    <p className="ws__text" style={{ color: 'rgba(255, 255, 255, 0.78)', textWrap: 'pretty' }}>{item.text}</p>
                  </div>
                  <figure className="ws__fig rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    <img
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width="1600"
                      height="1000"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            </article>
          </li>
        ))}
        <li className="ws__hold" aria-hidden={true} />
      </ul>
    </section>
  );
}
