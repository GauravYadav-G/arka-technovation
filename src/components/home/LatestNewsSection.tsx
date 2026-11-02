'use client';

import React, { useRef, useState, useEffect } from 'react';

interface NewsArticle {
  index: string;
  category: string;
  date: string;
  title: string;
  readTime: string;
  excerpt: string;
  slug: string;
  img: string;
  alt: string;
}

const NEWS_ARTICLES: NewsArticle[] = [
  {
    index: '01 / 08',
    category: 'Technical SEO',
    date: 'Oct 15, 2026',
    title: 'Sub-Second Core Web Vitals: Engineering High-Volume SEO for Page-One Dominance',
    readTime: '9 min read',
    excerpt: 'A deep dive into sub-second LCP, minimal TTFB, and zero-CLS layouts that keep competitive enterprise keywords ranking on page one through major Google algorithm updates.',
    slug: 'sub-second-core-web-vitals-seo-dominance',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/8c4efb1854fac9a1bb7d27dd7c7adbab945226ca-2000x1125.webp?w=1400&q=80&auto=format',
    alt: 'Sub-Second Core Web Vitals and technical SEO dominance',
  },
  {
    index: '02 / 08',
    category: 'Enterprise Software',
    date: 'Oct 5, 2026',
    title: 'Replacing Spreadsheets with Custom CRM: Saving 12+ Hours Per Team Weekly',
    readTime: '6 min read',
    excerpt: 'How modern manufacturing leaders unify sales pipelines, approval matrices, and live Tally & WhatsApp synchronization without paying per-seat SaaS taxes.',
    slug: 'custom-enterprise-crm-workflow-automation',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/817ec85c9f7e7b5441e95ff073f4898771670b9c-2930x1648.webp?w=1400&q=80&auto=format',
    alt: 'Replacing spreadsheets with custom CRM and ERP automation',
  },
  {
    index: '03 / 08',
    category: 'UX & CRO',
    date: 'Sep 25, 2026',
    title: 'B2B Landing Page UX: Research-Backed Funnels That Lift Conversion Rates',
    readTime: '7 min read',
    excerpt: 'From click heatmaps to dynamic content personalization: the design systems, micro-interactions, and psychological triggers that turn industrial traffic into qualified inquiries.',
    slug: 'b2b-landing-page-ux-cro-framework',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/096cfc2bc0c1f499bd5782fc75365e4ef54ba139-3840x2160.webp?w=1400&q=80&auto=format',
    alt: 'B2B landing page UX and conversion rate optimization',
  },
  {
    index: '04 / 08',
    category: 'Paid Media & Growth',
    date: 'Sep 16, 2026',
    title: 'Addressable Geofencing & PPC: Reaching High-Value Commercial Decision Makers',
    readTime: '9 min read',
    excerpt: 'How 1,000 sq ft location fences around industry trade shows and corporate parks deliver precision pipeline acceleration with verifiable return on ad spend (ROAS).',
    slug: 'addressable-geofencing-ppc-lead-generation',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/24d5fe67470fb4e2e8d82a96228a38e693cb9db1-1920x1080.webp?w=1400&q=80&auto=format',
    alt: 'Addressable geofencing and PPC paid media strategy',
  },
  {
    index: '05 / 08',
    category: 'Data & Revenue',
    date: 'Aug 4, 2026',
    title: 'Customer Data Platforms (CDP) & Real-Time CRM Retargeting Pipelines',
    readTime: '4 min read',
    excerpt: 'Connecting first-party customer profiles, dynamic call attribution, and ETL data streams so sales pods always know the true commercial intent behind every touchpoint.',
    slug: 'customer-data-platform-attribution-pipelines',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/4954d62904c23cd1b51d1014dc190000003fe471-1920x1080.webp?w=1400&q=80&auto=format',
    alt: 'Customer Data Platforms and CRM retargeting pipelines',
  },
  {
    index: '06 / 08',
    category: 'Web Engineering',
    date: 'Jul 22, 2026',
    title: 'Next.js 15 & Headless Performance: Why Ambitious Brands Are Leaving Legacy Stacks',
    readTime: '11 min read',
    excerpt: 'Sub-second server components, edge rendering, and seamless headless API integrations: why modern web applications deliver 3× higher engagement than WordPress and Drupal.',
    slug: 'nextjs-15-headless-web-performance',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/c2d5feeb2385c376ff72987017b05be6bd192fd2-1920x1080.webp?w=1400&q=80&auto=format',
    alt: 'Next.js 15 and headless web architecture performance',
  },
  {
    index: '07 / 08',
    category: 'Media Production',
    date: 'Jul 14, 2026',
    title: 'Corporate Film Making for Industry: Translating Capacity into Cinematic Trust',
    readTime: '5 min read',
    excerpt: 'A camera on a tripod is not enough. How cinematic factory storytelling, real-time drone shots, and technical precision establish unshakeable buyer trust in high-value procurement.',
    slug: 'corporate-film-making-industrial-storytelling',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/c08e7972a3cc7e1aa1a0ef50197fde17397aed93-3840x2160.png?w=1400&q=80&auto=format',
    alt: 'Corporate film making and industrial storytelling',
  },
  {
    index: '08 / 08',
    category: 'Local Search',
    date: 'May 25, 2026',
    title: 'Google Guarantee & Local SEO: Dominating Multi-Location Map Packs in Noida & NCR',
    readTime: '5 min read',
    excerpt: 'Mastering proximity relevance, sentiment review acceleration, and verified GBP entity signals to capture the 46% of all Google searches that carry high local buying intent.',
    slug: 'google-guarantee-local-seo-map-pack',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/12f53f88f9d9599d978fadaf5249c08e98ae9058-1920x1080.webp?w=1400&q=80&auto=format',
    alt: 'Google Guarantee and local SEO map dominance',
  },
];

export default function LatestNewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanPrev(scrollLeft > 15);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 15);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }

    const reveals = sectionRef.current?.querySelectorAll('[data-reveal]');
    if (reveals && reveals.length > 0) {
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add('is-in');
                obs.unobserve(e.target);
              }
            });
          },
          { rootMargin: '0px 0px -5% 0px' }
        );
        reveals.forEach((r) => obs.observe(r));
        return () => {
          obs.disconnect();
          if (el) {
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
          }
        };
      } else {
        reveals.forEach((r) => r.classList.add('is-in'));
      }
    }

    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  const handlePrev = () => {
    trackRef.current?.scrollBy({ left: -420, behavior: 'smooth' });
  };

  const handleNext = () => {
    trackRef.current?.scrollBy({ left: 420, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="hn hn--survol" data-hn style={{ background: '#fbfbfb', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container hn__head">
        <div className="hn__headtxt">
          <p className="eyebrow" data-reveal>Updates</p>
          <h2 className="hn__h2" data-reveal data-split="words">
            Latest News &amp; Articles
          </h2>
          <div className="hn__cta" data-reveal>
            <a href="/news" style={{ '--cta-w': '320px' } as React.CSSProperties} className="cta cta--light">
              <span className="cta__text">
                <span className="cta__label">See all articles</span>
                <span className="cta__label cta__label--hover" aria-hidden={true}>See all articles</span>
              </span>
              <svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hn__nav" data-reveal>
          <button
            className="hn__arrow hn__arrow--prev"
            type="button"
            data-hn-prev
            aria-label="Previous articles"
            onClick={handlePrev}
            disabled={!canPrev}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>
          <button
            className="hn__arrow hn__arrow--next"
            type="button"
            data-hn-next
            aria-label="Next articles"
            onClick={handleNext}
            disabled={!canNext}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hn__strip" data-hn-strip data-reveal>
        <ul className="hn__track" ref={trackRef} data-hn-track>
          {NEWS_ARTICLES.map((article) => (
            <li key={article.slug} className="hn__item" data-hn-item>
              <a
                className="hn__card"
                href={`/news/${article.slug}`}
                data-morph
              >
                <div className="hn__meta">
                  <span className="hn__cat"><span className="hn__pill">{article.category}</span></span>
                  <span className="hn__date"><span className="hn__pill">{article.date}</span></span>
                </div>
                <figure className="hn__fig" data-morph-tile>
                  <img
                    src={article.img}
                    alt={article.alt}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={225}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
                <span className="hn__band" aria-hidden={true} />
                <div className="hn__txt">
                  <h3 className="hn__title">{article.title}</h3>
                  <p className="hn__sub">{article.readTime}</p>
                  <div className="hn__more">
                    <p className="hn__excerpt">{article.excerpt}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
