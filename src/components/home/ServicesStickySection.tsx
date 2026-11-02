'use client';

import React, { useEffect, useRef } from 'react';
import Link from '@/components/Link';
import { creerReleve, ReleveInstance } from './releve';

const SERVICES = [
  {
    num: '01',
    title: 'Software Development',
    link: '/services/development',
    text: 'We engineer bespoke enterprise software, modular backend architectures, scalable ERP systems, custom CRMs, and automated workflow matrices built for dependable scale.',
    img: '/images/services/cards/service-01-web-development.webp',
  },
  {
    num: '02',
    title: 'Digital Marketing',
    link: '/services/digital-marketing',
    text: 'Full-funnel acquisition campaigns, multi-touch attribution telemetry, and precision conversion optimization engineered to accelerate verified business revenue.',
    img: '/images/services/cards/service-02-ux-interactives.webp',
  },
  {
    num: '03',
    title: 'SEO, GEO & AEO Services',
    link: '/seo-lead-generation',
    text: 'Technical crawl architecture, high-intent keyword mapping, structured Schema.org entity graphs, generative & answer engine dominance, and local discovery.',
    img: '/images/services/cards/service-05-seo-leadgen.webp',
  },
  {
    num: '04',
    title: 'Film Production & Media',
    link: '/services/film-making',
    text: 'Broadcast-quality corporate films, digital & TV commercials, executive interview pods, high-end studio photography, and next-gen AI video creation.',
    img: '/images/services/cards/service-03-crm-erp.webp',
  },
  {
    num: '05',
    title: 'Corporate World News',
    link: '/corporate-world-news',
    text: 'Authoritative corporate journalism, executive interview broadcasts, strategic press releases, breaking business updates, and rigorous market research.',
    img: '/images/services/cards/service-04-data-revenue.webp',
  },
];

export default function ServicesStickySection() {
  const pfRef = useRef<HTMLElement>(null);
  const pfTrackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const track = pfTrackRef.current;
    const canvas = canvasRef.current;
    if (!track) return;

    const steps = [...track.querySelectorAll<HTMLElement>('[data-pf-step]')];
    const figures = [...track.querySelectorAll<HTMLElement>('[data-pf-fig]')];
    const digitsList = [...track.querySelectorAll<HTMLElement>('[data-pf-digits]')];
    const sCount = steps.length;
    let currentStep = -1;

    // Build the particle field only as the section approaches the viewport.
    let releve: ReleveInstance | null = null;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initializeReleve = () => {
      // Do not run WebGL particle relief on mobile (< 1024px) to ensure heading and description text remain razor-sharp and unobstructed
      if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
      if (!canvas || releve) return;
      releve = creerReleve(canvas, {
        seed: 5.3,
        reduce: isReduced,
        vague: true,
        souris: true,
      });
      releve?.setStep(Math.max(0, currentStep), sCount);
      releve?.start();
      updateHoles();
    };

    const updateHoles = () => {
      if (!releve || !canvas || !pfRef.current) return;
      const cRect = canvas.getBoundingClientRect();
      const numEls = [...pfRef.current.querySelectorAll('.pf__num')];
      const activeStep = steps[currentStep >= 0 ? currentStep : 0];
      const infoEl = activeStep?.querySelector('.pf__info');
      const targets = [...numEls, infoEl].filter(Boolean) as HTMLElement[];

      releve.setHoles(
        targets.map((el) => {
          const r = el.getBoundingClientRect();
          return {
            left: r.left - cRect.left,
            top: r.top - cRect.top,
            right: r.right - cRect.left,
            bottom: r.bottom - cRect.top,
          };
        })
      );
    };

    // Initial setup for wheel offsets
    figures.forEach((f, n) => {
      f.setAttribute('data-wheel-offset', String(n));
    });

    // Continuous Scroll Listener (Runs on both Desktop & Mobile)
    const handleScroll = () => {
      if (!track) return;
      const top = -track.getBoundingClientRect().top;
      const isMobile = window.innerWidth < 1024;
      const stepH = window.innerHeight * (isMobile ? 0.5 : 0.7);
      const idx = Math.max(0, Math.min(sCount - 1, Math.floor((top + 40) / stepH)));

      if (idx !== currentStep) {
        currentStep = idx;
        steps.forEach((s, n) => {
          s.classList.toggle('is-active', n === idx);
          s.classList.toggle('is-before', n < idx);
        });
        figures.forEach((f, n) => {
          f.classList.toggle('is-on', n <= idx);
          f.setAttribute('data-wheel-offset', String(n - idx));
        });
        digitsList.forEach((digits) => {
          digits.style.setProperty('--a', String(idx));
        });
        releve?.setStep(idx, sCount);
        updateHoles();
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Lenis smooth scroll listener integration
    type LenisGlobal = {
      __lenis?: {
        on: (ev: string, cb: () => void) => void;
        off: (ev: string, cb: () => void) => void;
      };
    };
    const lenis = (window as unknown as LenisGlobal).__lenis;
    if (lenis) {
      lenis.on('scroll', handleScroll);
    }

    // Initialize and run the particle render loop only while nearby.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          initializeReleve();
          releve?.start();
          handleScroll();
        } else {
          releve?.stop();
        }
      },
      { rootMargin: '400px 0px', threshold: 0 }
    );
    observer.observe(track);

    // Mouse Follower Tag & Particle Pointer Interaction (desktop only)
    const cursor = cursorRef.current;
    const pf = pfRef.current;
    let rafId = 0;
    let cx = 0, cy = 0, tx = 0, ty = 0, isHover = false;

    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (cursor) {
        cursor.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      }
      if (isHover || Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = 0;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      if (canvas && releve) {
        const cRect = canvas.getBoundingClientRect();
        releve.setMouse(e.clientX - cRect.left, e.clientY - cRect.top);
      }
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target as HTMLElement | null;
      const onLink = !!target?.closest('[data-pf-link]');
      if (onLink !== isHover) {
        isHover = onLink;
        cursor?.classList.toggle('is-on', isHover);
        if (isHover && !rafId) {
          cx = tx;
          cy = ty;
        }
      }
      if (!rafId) rafId = requestAnimationFrame(loop);
    };

    const onPointerLeave = () => {
      releve?.setMouse(null);
      isHover = false;
      cursor?.classList.remove('is-on');
    };

    if (pf) {
      pf.addEventListener('pointermove', onPointerMove);
      pf.addEventListener('pointerleave', onPointerLeave);
    }

    const onResize = () => {
      handleScroll();
      updateHoles();
    };
    window.addEventListener('resize', onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (lenis) {
        lenis.off('scroll', handleScroll);
      }
      window.removeEventListener('resize', onResize);
      if (pf) {
        pf.removeEventListener('pointermove', onPointerMove);
        pf.removeEventListener('pointerleave', onPointerLeave);
      }
      if (rafId) cancelAnimationFrame(rafId);
      releve?.destroy();
    };
  }, []);

  return (
    <section
      id="services"
      ref={pfRef}
      className="pf pf--papier relative"
      data-pf
      data-seed="5.3"
      data-vague="0"
      data-souris="1"
      style={
        {
          '--n': '5',
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
        } as React.CSSProperties
      }
    >
      <style>{`
        @media (min-width: 1024px) {
          #services .pf__card-wrap {
            display: contents !important;
          }
        }
        @media (max-width: 1023px) {
          #services.pf {
            padding: 0 !important;
          }
          #services .pf__track {
            width: 100% !important;
            height: calc(100vh + 4 * 60vh) !important;
            margin: 0 !important;
            position: relative;
          }
          #services .pf__stage {
            position: sticky !important;
            top: 0 !important;
            height: 100dvh !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 68px 16px 20px !important;
            box-sizing: border-box !important;
            background-color: #FAFAFA !important;
          }
          #services .pf__bg {
            display: none !important;
          }
          #services .pf__head-mobile {
            width: min(88vw, 360px);
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            z-index: 20 !important;
          }
          #services .pf__num-mobile {
            display: flex !important;
            align-items: baseline;
            gap: 6px;
            margin: 0;
            font-family: var(--font-mono);
            font-variant-numeric: tabular-nums;
            z-index: 20 !important;
          }
          #services .pf__num-mobile .pf__lbl {
            font-size: 11px !important;
            text-transform: uppercase !important;
            color: var(--fg-muted) !important;
            letter-spacing: .04em !important;
          }
          #services .pf__num-mobile .pf__roll {
            height: 1.1em !important;
            line-height: 1.1 !important;
            font-family: var(--font-heading) !important;
            font-size: 20px !important;
            font-weight: 700 !important;
            display: inline-block !important;
            overflow: hidden !important;
          }
          #services .pf__num-mobile .pf__digits {
            display: flex !important;
            flex-direction: column !important;
            transform: translateY(calc(var(--a, 0) * -1.1em)) !important;
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) !important;
          }
          #services .pf__num-mobile .pf__digits > span {
            height: 1.1em !important;
            line-height: 1.1em !important;
            display: block !important;
          }
          #services .pf__card-wrap {
            position: relative;
            width: min(88vw, 360px);
            height: calc(min(88vw, 360px) * (10 / 16) + 195px);
            z-index: 20;
          }
          #services .pf__steps, #services .pf__step {
            display: contents !important;
          }
          #services .pf__fig {
            --cut: 26px;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 16/10 !important;
            margin: 0 !important;
            z-index: calc(1 + var(--i)) !important;
            clip-path: polygon(0 100%, calc(100% - var(--cut)) 100%, 100% 100%, 100% 100%, 0 100%) !important;
            transition: clip-path 0.85s cubic-bezier(0.25, 1, 0.5, 1) !important;
            border-radius: 14px !important;
            overflow: hidden !important;
            box-shadow: 0 16px 36px -10px rgba(0,0,0,0.22) !important;
          }
          #services .pf__fig img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            transition: transform 1.4s var(--ease-out-quint) !important;
            transform: scale(1.14) !important;
          }
          #services .pf__fig.is-on {
            clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%) !important;
          }
          #services .pf__fig.is-on img {
            transform: scale(1) !important;
          }
          #services .pf__info {
            position: absolute !important;
            top: calc(min(88vw, 360px) * (10 / 16) + 12px) !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            z-index: 25 !important;
            opacity: 0 !important;
            pointer-events: none !important;
            transition: opacity 0.4s var(--ease-out-quint), transform 0.5s var(--ease-out-quint) !important;
            transform: translateY(16px) !important;
          }
          #services .pf__step.is-before .pf__info {
            transform: translateY(-16px) !important;
          }
          #services .pf__step.is-active .pf__info {
            opacity: 1 !important;
            pointer-events: auto !important;
            transition-delay: 0.15s !important;
            transform: translateY(0) !important;
          }
          #services .pf__n {
            font-family: var(--font-mono);
            letter-spacing: .04em;
            text-transform: uppercase;
            color: #71717a !important;
            margin: 0 0 4px;
            font-size: 11px;
            display: block !important;
          }
          #services .pf__title {
            font-size: 22px !important;
            font-weight: 700 !important;
            letter-spacing: -0.02em !important;
            line-height: 1.15 !important;
            margin: 0 !important;
            color: #09090B !important;
          }
          #services .pf__text {
            margin: 8px 0 0 !important;
            font-size: 13.5px !important;
            line-height: 1.55 !important;
            color: #3f3f46 !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 3 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
          #services .pf__cta {
            margin-top: 14px !important;
          }
          #services .cta {
            min-height: 44px !important;
            padding: 0 18px !important;
            font-size: 13px !important;
            border-radius: 9999px !important;
          }
        }
      `}</style>

      {/* Desktop Section Header (lg:absolute lg:top-0) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-0 lg:absolute lg:inset-x-0 lg:top-0 lg:z-20">
        <p className="eyebrow text-[#E8742C] font-mono tracking-widest uppercase text-xs">Capabilities</p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-black leading-none">
          Services Overview
        </h2>
      </div>

      <div
        className="pf__track"
        ref={pfTrackRef}
        data-pf-track
        style={{
          marginTop: 0,
          paddingTop: 0,
          marginBottom: 0,
          paddingBottom: 0,
          height: 'calc(100vh + 5 * 70vh)',
        }}
      >
        <div
          className="pf__stage sticky top-0 h-screen overflow-hidden"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          {/* WebGL Particle Relief Canvas (Desktop only; disabled on mobile so text is completely crisp & unobstructed) */}
          <canvas
            ref={canvasRef}
            className="pf__bg hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
            data-pf-bg
            aria-hidden={true}
          />

          {/* Mobile Header + Counter (closely & optically grouped right above the card) */}
          <div className="pf__head-mobile block lg:hidden">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-semibold m-0">
                Core Capabilities &amp; Architecture
              </p>
              <h2 className="mt-0.5 text-2xl font-bold tracking-tight text-black leading-tight m-0">
                Services
              </h2>
            </div>
            <p className="pf__num-mobile pf__num z-10" aria-hidden={true}>
              <span className="pf__lbl">Service</span>
              <span className="pf__roll">
                <span className="pf__digits" data-pf-digits>
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                  <span>04</span>
                  <span>05</span>
                </span>
              </span>
              <span className="pf__lbl">/ 05</span>
            </p>
          </div>

          {/* Desktop Sticky Counter */}
          <p className="hidden lg:flex pf__num z-10" aria-hidden={true}>
            <span className="pf__lbl">Service</span>
            <span className="pf__roll">
              <span className="pf__digits" data-pf-digits>
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
              </span>
            </span>
            <span className="pf__lbl">/ 05</span>
          </p>

          {/* Card Wrap Container (Clean optical mobile card box; display: contents on desktop) */}
          <div
            className="pf__card-wrap"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
              touchStartY.current = e.touches[0].clientY;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null || touchStartY.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              const dy = e.changedTouches[0].clientY - touchStartY.current;
              if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40 && pfTrackRef.current) {
                const track = pfTrackRef.current;
                const activeStepEl = track.querySelector('.pf__step.is-active');
                const allSteps = [...track.querySelectorAll('[data-pf-step]')];
                const activeIdx = activeStepEl ? allSteps.indexOf(activeStepEl as HTMLElement) : 0;
                const nextIdx = dx < 0 ? Math.min(allSteps.length - 1, activeIdx + 1) : Math.max(0, activeIdx - 1);
                if (nextIdx !== activeIdx) {
                  const isMobile = window.innerWidth < 1024;
                  const stepH = window.innerHeight * (isMobile ? 0.5 : 0.7);
                  const rect = track.getBoundingClientRect();
                  const targetY = window.scrollY + rect.top + nextIdx * stepH + 20;
                  window.scrollTo({ top: targetY, behavior: 'smooth' });
                }
              }
              touchStartX.current = null;
              touchStartY.current = null;
            }}
          >
            <ol className="pf__steps">
              {SERVICES.map((s, idx) => (
                <li
                  key={s.num}
                  className={`pf__step ${idx === 0 ? 'is-active' : ''}`}
                  data-pf-step
                >
                  <figure
                    className={`pf__fig z-20 ${idx === 0 ? 'is-on' : ''}`}
                    data-pf-fig
                    data-wheel-offset={String(idx)}
                    style={{ '--i': String(idx) } as React.CSSProperties}
                    onClick={(e) => {
                      if (typeof window !== 'undefined' && pfTrackRef.current) {
                        const track = pfTrackRef.current;
                        const activeStepEl = track.querySelector('.pf__step.is-active');
                        const allSteps = [...track.querySelectorAll('[data-pf-step]')];
                        const activeIdx = activeStepEl ? allSteps.indexOf(activeStepEl as HTMLElement) : 0;
                        if (activeIdx !== idx) {
                          e.preventDefault();
                          const isMobile = window.innerWidth < 1024;
                          const stepH = window.innerHeight * (isMobile ? 0.5 : 0.7);
                          const rect = track.getBoundingClientRect();
                          const targetY = window.scrollY + rect.top + idx * stepH + 20;
                          window.scrollTo({ top: targetY, behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    <Link
                      className="pf__figlink"
                      to={s.link}
                      data-pf-link
                      tabIndex={-1}
                      aria-hidden={true}
                    >
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        decoding="async"
                        width="1376"
                        height="768"
                      />
                    </Link>
                  </figure>
                  <div className="pf__info z-30">
                    <p className="pf__n">{s.num}</p>
                    <h3 className="pf__title">
                      <Link to={s.link}>{s.title}</Link>
                    </h3>
                    <p className="pf__text">{s.text}</p>
                    <div className="pf__cta">
                      <Link to={s.link} className="cta cta--ink">
                        <span className="cta__text">
                          <span className="cta__label">Explore {s.title}</span>
                          <span className="cta__label cta__label--hover" aria-hidden={true}>
                            Explore {s.title}
                          </span>
                        </span>
                        <svg
                          className="cta__arrow"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden={true}
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Floating Interactive Mouse Cursor (Desktop only) */}
      <div className="pf__cursor" ref={cursorRef} data-pf-cursor aria-hidden={true}>
        <span className="pf__cursor-in">
          <span className="pf__cursor-txt">View services</span>
          <span className="pf__cursor-arr">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </span>
        </span>
      </div>
    </section>
  );
}
