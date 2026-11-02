'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Radio,
  Target,
  Share2,
  Code2,
  ArrowRight,
  Sparkles,
  Users,
  BarChart3,
  Gauge,
  TrendingUp,
  Compass,
  LineChart,
  Layers,
  MessageSquare,
  Zap,
  Layout,
  ShieldCheck,
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
}

const DISCIPLINES: DisciplineItem[] = [
  {
    id: 'email-marketing',
    num: '01',
    label: 'Email Marketing',
    category: 'Lifecycle & Retention',
    icon: Mail,
    headline: 'Precision Email Marketing & Automated Retention Engines',
    narrative:
      "Email advertising is a cost-effective and efficient method to reach consumers. Companies can send targeted messages directly to individuals who have given permission or opted in to receive them. By personalizing the email with the recipient's name, companies entice customers with exclusive offers, promotions, and updates for products or services. Analytics tools allow businesses to track open rates, click-through rates, and conversions of their email campaigns to improve future efforts.",
    pillars: [
      {
        icon: Users,
        title: 'Targeted Audience Outreach',
        desc: 'Send targeted messages directly to individuals who have given permission or opted in to receive them.',
      },
      {
        icon: Sparkles,
        title: 'Dynamic Personalization',
        desc: 'Entice customers with personalized recipient tokens, exclusive promotions, and customized product updates.',
      },
      {
        icon: BarChart3,
        title: 'Attribution & Analytics',
        desc: 'Analytics tools track open rates, click-through rates, and conversions to continuously improve campaigns.',
      },
    ],
    link: '/services',
    ctaText: 'Explore Email Marketing',
    image: '/images/services/technology/lead_nurture_email_marketing.webp',
    imageAlt: 'Email advertising campaigns, personalized customer outreach and email analytics dashboard',
  },
  {
    id: 'seo-services',
    num: '02',
    label: 'SEO Services',
    category: 'Search Engine Dominance',
    icon: Radio,
    headline: 'Strategies to Enhance Online Visibility, Authority & Organic Traffic',
    narrative:
      "To enhance online visibility and traffic, there are several strategies that businesses can utilize. The first strategy is to create high-quality content that targets the audience's needs and interests. This includes using relevant keywords in titles and meta descriptions to improve search engine optimization (SEO). Another effective strategy is to engage with the audience through social media platforms by sharing informative posts, visual content, and actively responding to comments or questions.",
    pillars: [
      {
        icon: Gauge,
        title: 'Site Optimisation',
        desc: 'Optimizing technical architecture, page speed, mobile UX, and structured semantic HTML to captivate users and search crawlers.',
      },
      {
        icon: TrendingUp,
        title: 'Page Rankings & Authority',
        desc: 'Algorithmic ranking dominance built on multi-tier backlink authority, topical clusters, and deep search intent matching.',
      },
      {
        icon: Compass,
        title: 'Targeted Content & Engagement',
        desc: 'Engaging with the audience through relevant keyword content and active social media communication.',
      },
    ],
    link: '/seo-lead-generation',
    ctaText: 'Explore SEO Services',
    image: '/images/services/seo/seo-services.webp',
    imageAlt: 'Search engine optimization strategies, site rankings and organic traffic growth audit',
  },
  {
    id: 'digital-marketing',
    num: '03',
    label: 'Digital Marketing',
    category: 'Performance Acquisition',
    icon: Target,
    headline: 'Developing Strategic Campaigns Across High-Yield Digital Platforms',
    narrative:
      "Developing strategies and campaigns on digital platforms is essential for businesses to thrive in today's fast-paced world. With the proliferation of social media and other online channels, it is critical for companies to have a strong digital presence that can help them connect with customers, build brand awareness, and drive sales. Developing effective digital strategies involves understanding the target audience, identifying the right platforms to reach them on, and creating engaging content that resonates with their interests and behaviors.",
    pillars: [
      {
        icon: Target,
        title: 'Corporate Online Advertising',
        desc: 'Full-funnel digital campaigns engineered to connect with customers and capture qualified enterprise demand.',
      },
      {
        icon: LineChart,
        title: 'SEO Optimization Services',
        desc: 'Compounding organic search presence aligned directly with business pipeline and digital presence targets.',
      },
      {
        icon: Layers,
        title: 'Web Analytics & Attribution',
        desc: 'Multi-touch analytics telemetry tracking audience behaviors, engagement rates, and advertising ROI.',
      },
    ],
    link: '/services/digital-marketing',
    ctaText: 'Explore Digital Marketing',
    image: '/images/expertise/digital-marketing.jpg',
    imageAlt: 'Developing digital marketing strategies and online advertising campaigns on digital platforms',
  },
  {
    id: 'social-media',
    num: '04',
    label: 'Social Media',
    category: 'Digital Communities',
    icon: Share2,
    headline: 'Digital Community Channels & Enterprise Brand Amplification',
    narrative:
      'Digital community channels such as social media, forums, and messaging apps have revolutionized the way in which people can connect and share information online. In a professional context, these platforms provide valuable opportunities for individuals to engage with like-minded professionals, collaborate on projects, and build their personal brand. Online communities enable professionals to stay up-to-date on industry news and trends, access training resources, and seek advice on specific challenges or initiatives.',
    pillars: [
      {
        icon: MessageSquare,
        title: 'Digital Community Channels',
        desc: 'Social media, forums, and messaging apps revolutionizing how modern people and businesses connect and share information.',
      },
      {
        icon: Share2,
        title: 'Professional Collaboration',
        desc: 'Engage with like-minded professionals, collaborate on high-value projects, and build executive personal branding.',
      },
      {
        icon: Zap,
        title: 'Industry News & Trends',
        desc: 'Stay up-to-date on market trends, access valuable training resources, and seek peer advice on specific challenges.',
      },
    ],
    link: '/services/digital-marketing',
    ctaText: 'Explore Social Strategy',
    image: '/images/services/seo/social-media-management.webp',
    imageAlt: 'Social media digital community channels, audience collaboration and personal brand building',
  },
  {
    id: 'web-design',
    num: '05',
    label: 'Web Design',
    category: 'Platform Engineering',
    icon: Code2,
    headline: 'Developing High-Performance Scalable Web Applications',
    narrative:
      'Developing web applications requires a systematic approach encompassing planning, designing, implementing and testing to create a high-quality user experience. In order to achieve this, it is important for developers to have extensive knowledge of various programming languages such as HTML, CSS and JavaScript, along with proficiency in frameworks like AngularJS and ReactJS. The development process should also take into consideration the scalability and security of the application while being agile to changes in requirements or technology.',
    pillars: [
      {
        icon: Layout,
        title: 'Systematic Architecture',
        desc: 'Comprehensive planning, UX wireframing, designing, implementing, and rigorous testing for high-quality experience.',
      },
      {
        icon: Code2,
        title: 'Modern Framework Proficiency',
        desc: 'Extensive knowledge of HTML, CSS, JavaScript, and deep proficiency in frameworks like ReactJS, AngularJS, and Next.js.',
      },
      {
        icon: ShieldCheck,
        title: 'Scalability & Security',
        desc: 'Enterprise security, high-concurrency architecture, and agility to rapidly adapt to evolving technology changes.',
      },
    ],
    link: '/services/development',
    ctaText: 'Explore Web Design',
    image: '/images/services/ux/website-design.webp',
    imageAlt: 'Developing web applications with modern frameworks, high-quality user experience and scalable architecture',
  },
];

export default function ExpertiseTabsSection() {
  const [activeId, setActiveId] = useState<string>('digital-marketing');
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const active = DISCIPLINES.find((d) => d.id === activeId) || DISCIPLINES[2];

  // Auto-scroll the active tab into the center on mobile/tablet
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

  // Keyboard navigation for accessible tabs (ArrowLeft, ArrowRight)
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
      className="relative py-16 sm:py-24 lg:py-32 font-framer bg-[#FAFAFA] text-black border-t border-black/10 overflow-hidden isolate"
      aria-label="Our Expertise - Outstanding Experience"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Solar Warmth Glow Pool */}
      <div
        className="absolute top-1/4 right-5 sm:right-10 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-gradient-to-bl from-amber-200/25 via-orange-200/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-full mx-auto px-3.5 sm:px-6 lg:px-8 max-w-7xl">
        {/* ======================================================== */}
        {/* SECTION HEADER: Preserving exact required texts           */}
        {/* ======================================================== */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-8 items-end mb-6 sm:mb-14 px-1 sm:px-0">
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2 sm:mb-3">
              Expertise
            </p>
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 font-display leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Core Technical Disciplines
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <p
              className="text-xs sm:text-sm lg:text-base text-zinc-600 font-light leading-relaxed border-l-2 border-solar/40 pl-3.5 sm:pl-5"
              style={{ textWrap: 'pretty' }}
            >
              Proven in-house teams focused on dependable software development, search engine visibility, full-funnel marketing, and corporate production.
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE & DESKTOP SEGMENTED DOCK WITH EDGE FADING          */}
        {/* ======================================================== */}
        <div className="relative mb-6 sm:mb-12">
          {/* Subtle edge fade gradients on mobile to indicate horizontal scrollability */}
          <div className="overflow-x-auto scroll-smooth scrollbar-none py-1.5 -mx-3.5 px-3.5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [mask-image:linear-gradient(to_right,transparent,black_14px,black_calc(100%-14px),transparent)] sm:[mask-image:none]">
            <div className="flex items-center justify-start lg:justify-center">
              <div
                role="tablist"
                aria-label="Expertise disciplines"
                className="relative inline-flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.04)] shrink-0"
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
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      className={`relative flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-2.5 min-h-[44px] rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-colors duration-200 shrink-0 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-solar active:scale-[0.97] ${isActive ? 'text-white' : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70'
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeExpertiseTabPill"
                          className="absolute inset-0 bg-zinc-950 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
                          transition={{ type: 'spring', stiffness: 440, damping: 32 }}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className="relative z-10 font-mono text-[11px] font-bold tabular-nums transition-colors"
                        style={{ color: isActive ? 'var(--color-solar, #E8742C)' : '#a1a1aa' }}
                      >
                        {item.num}
                      </span>
                      <Icon
                        className={`relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors ${isActive ? 'text-solar' : 'text-zinc-500'
                          }`}
                        strokeWidth={2.2}
                      />
                      <span className="relative z-10 whitespace-nowrap font-display">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SHOWCASE STAGE CARD: Mobile & Desktop Optimized Layout    */}
        {/* ======================================================== */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
            className="relative rounded-2xl sm:rounded-[36px] bg-white border border-zinc-200/90 p-4 sm:p-8 lg:p-12 xl:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 xl:gap-14 items-center">

              {/* Left Column (Desktop 7 cols): Header, Narrative, Pillars, Action Buttons */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Primary Headline (Clean, no description eyebrow badge above it) */}
                  <h3
                    className="text-lg sm:text-2xl lg:text-4xl font-bold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-4 font-display"
                    style={{ textWrap: 'balance' }}
                  >
                    {active.headline}
                  </h3>

                  {/* Narrative Description */}
                  <p
                    className="text-xs sm:text-sm lg:text-base text-zinc-600 font-light leading-relaxed mb-5 sm:mb-6"
                    style={{ textWrap: 'pretty' }}
                  >
                    {active.narrative}
                  </p>

                  {/* Mobile-Only Visual Image: positioned right above pillars for immediate mobile context */}
                  <div className="block lg:hidden w-full mb-5">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-black/10 shadow-sm bg-zinc-100">
                      <Image
                        src={active.image}
                        alt={active.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* 3 Structured Spec Pillars */}
                  <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-8">
                    {active.pillars.map((pillar, idx) => {
                      const PillarIcon = pillar.icon;
                      return (
                        <div
                          key={idx}
                          className="group relative flex items-start gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50/80 border border-zinc-200/70 hover:border-zinc-300 hover:bg-white hover:shadow-xs transition-all duration-200"
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-solar group-hover:scale-105 group-hover:bg-orange-500/15 transition-all">
                            <PillarIcon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-zinc-400 group-hover:text-solar transition-colors">
                                0{idx + 1}.
                              </span>
                              <h4 className="text-xs sm:text-sm lg:text-[15px] font-bold text-zinc-950 tracking-tight group-hover:text-black transition-colors">
                                {pillar.title}
                              </h4>
                            </div>
                            <p
                              className="text-[11px] sm:text-xs lg:text-sm text-zinc-600 font-light leading-relaxed"
                              style={{ textWrap: 'pretty' }}
                            >
                              {pillar.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action Bar / CTA Buttons (Full width on mobile, inline on tablet/desktop) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 sm:pt-6 border-t border-zinc-100">
                  <Link
                    href={active.link}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 min-h-[44px] sm:min-h-[48px] rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-all duration-200 active:scale-[0.98] group"
                  >
                    <span>{active.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-solar" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 min-h-[44px] sm:min-h-[48px] rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 border border-zinc-200 text-xs sm:text-sm font-medium transition-colors active:scale-[0.98]"
                  >
                    <span>Book Strategy Call</span>
                  </Link>
                </div>
              </div>

              {/* Desktop-Only Visual Column (Desktop 5 cols): Pure Unobstructed High-Definition Image */}
              <div className="hidden lg:block lg:col-span-5 w-full">
                <div className="relative w-full aspect-[4/3] xl:aspect-[4/3] rounded-3xl overflow-hidden border border-black/10 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.1)] bg-zinc-100 group">
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
