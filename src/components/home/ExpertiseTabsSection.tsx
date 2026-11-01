'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import {
  Mail,
  Radio,
  Target,
  Share2,
  Code2,
  ArrowRight,
} from 'lucide-react';

interface Pillar {
  title: string;
  desc: string;
}

interface DisciplineItem {
  id: string;
  num: string;
  label: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
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
    headline: 'Advertising through email',
    narrative:
      'Email advertising is a cost-effective and efficient method to reach consumers. Companies can send targeted messages directly to individuals who have given permission or opted in to receive them. By personalizing the email with the recipient\'s name, companies entice customers with exclusive offers, promotions, and updates for products or services. Analytics tools allow businesses to track open rates, click-through rates, and conversions of their email campaigns to improve future efforts.',
    pillars: [
      {
        title: 'Targeted Audience Outreach',
        desc: 'Send targeted messages directly to individuals who have given permission or opted in to receive them.',
      },
      {
        title: 'Dynamic Personalization',
        desc: 'Entice customers with personalized recipient tokens, exclusive promotions, and customized product updates.',
      },
      {
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
    headline: 'Strategies to enhance online visibility and traffic.',
    narrative:
      'To enhance online visibility and traffic, there are several strategies that businesses can utilize. The first strategy is to create high-quality content that targets the audience\'s needs and interests. This includes using relevant keywords in titles and meta descriptions to improve search engine optimization (SEO). Another effective strategy is to engage with the audience through social media platforms by sharing informative posts, visual content, and actively responding to comments or questions.',
    pillars: [
      {
        title: 'Site Optimisation',
        desc: 'Optimizing various elements of a website, such as its design, layout, content, speed, and navigation, to make it more appealing to users and search engines.',
      },
      {
        title: 'Page Rankings',
        desc: 'Search engines use complex algorithms to rank webpages based on a variety of factors such as relevance, authority, and user experience.',
      },
      {
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
    headline: 'Developing strategies and campaigns on digital platforms',
    narrative:
      'Developing strategies and campaigns on digital platforms is essential for businesses to thrive in today\'s fast-paced world. With the proliferation of social media and other online channels, it is critical for companies to have a strong digital presence that can help them connect with customers, build brand awareness, and drive sales. Developing effective digital strategies involves understanding the target audience, identifying the right platforms to reach them on, and creating engaging content that resonates with their interests and behaviors.',
    pillars: [
      {
        title: 'Corporate Online Advertising',
        desc: 'Full-funnel digital campaigns engineered to connect with customers and capture qualified enterprise demand.',
      },
      {
        title: 'Seo Optimization Services',
        desc: 'Compounding organic search presence aligned directly with business pipeline and digital presence targets.',
      },
      {
        title: 'Web Analytics',
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
    headline: 'Digital community channels',
    narrative:
      'Digital community channels such as social media, forums, and messaging apps have revolutionized the way in which people can connect and share information online. In a professional context, these platforms provide valuable opportunities for individuals to engage with like-minded professionals, collaborate on projects, and build their personal brand. Online communities enable professionals to stay up-to-date on industry news and trends, access training resources, and seek advice on specific challenges or initiatives.',
    pillars: [
      {
        title: 'Digital Community Channels',
        desc: 'Social media, forums, and messaging apps revolutionizing how modern people and businesses connect and share information.',
      },
      {
        title: 'Professional Collaboration',
        desc: 'Engage with like-minded professionals, collaborate on high-value projects, and build executive personal branding.',
      },
      {
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
    headline: 'Developing Web Applications',
    narrative:
      'Developing web applications requires a systematic approach encompassing planning, designing, implementing and testing to create a high-quality user experience. In order to achieve this, it is important for developers to have extensive knowledge of various programming languages such as HTML, CSS and JavaScript, along with proficiency in frameworks like AngularJS and ReactJS. The development process should also take into consideration the scalability and security of the application while being agile to changes in requirements or technology.',
    pillars: [
      {
        title: 'Systematic Architecture',
        desc: 'Comprehensive planning, UX wireframing, designing, implementing, and rigorous testing for high-quality experience.',
      },
      {
        title: 'Modern Framework Proficiency',
        desc: 'Extensive knowledge of HTML, CSS, JavaScript, and deep proficiency in frameworks like ReactJS, AngularJS, and Next.js.',
      },
      {
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

  const active = DISCIPLINES.find((d) => d.id === activeId) || DISCIPLINES[2];

  return (
    <section
      id="our-expertise"
      className="relative py-24 sm:py-32 lg:py-36 font-framer bg-[#fbfbfb] text-black border-t border-black/10 overflow-hidden isolate"
      aria-label="Our Expertise - Outstanding Experience"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl">
        {/* Exact Website Heading Placement: Left Eyebrow & Title, Right Intro Paragraph */}
        <div className="ws__head mb-12 sm:mb-16">
          <div className="ws__headtxt">
            <p className="eyebrow">Our expertise</p>
            <h2 className="ws__h2 font-display">Outstanding Experience</h2>
          </div>
          <p className="ws__intro">
            Through years our team has achieved the highest level of expertise in our field.
            Every single member of our team possesses a wealth of knowledge and experience.
          </p>
        </div>

        {/* Modern Segmented Floating Dock Navigation (Linear/Apple Studio Standard) */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto scrollbar-none py-2 mb-10 sm:mb-14 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
          <div
            role="tablist"
            aria-label="Expertise disciplines"
            className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-zinc-200/70 border border-black/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)] shrink-0"
          >
            {DISCIPLINES.map((item) => {
              const isActive = item.id === activeId;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(item.id)}
                  style={{
                    backgroundColor: isActive ? '#09090B' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#3f3f46',
                  }}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 shrink-0 select-none cursor-pointer focus:outline-none ${
                    isActive
                      ? 'shadow-md scale-[1.02]'
                      : 'hover:text-black hover:bg-white/80'
                  }`}
                >
                  <span
                    className="font-mono text-[11px] font-bold"
                    style={{ color: isActive ? 'var(--color-solar, #E8742C)' : '#71717a' }}
                  >
                    {item.num}
                  </span>
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-solar' : 'text-zinc-500'
                    }`}
                  />
                  <span className="whitespace-nowrap font-display">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Showcase Card (Left: Text & Pillars, Right: Pure Unobstructed Image) with Generous Padding */}
        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="relative rounded-[28px] sm:rounded-[36px] bg-white border border-black/10 p-8 sm:p-12 lg:p-16 xl:p-18 shadow-[0_16px_44px_-12px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* Left Column (Desktop 7 cols): Content & Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Discipline Tag */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="font-mono text-xs font-bold text-solar uppercase tracking-wider">
                    Discipline {active.num} · {active.category}
                  </span>
                  <span className="w-10 h-px bg-zinc-200" />
                </div>

                {/* Primary Headline (Website Typography: Cabinet Grotesk / Bold) */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-black leading-[1.16] mb-4 font-display text-balance">
                  {active.headline}
                </h3>

                {/* Narrative Description (Website Typography: Geist / Neutral) */}
                <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed mb-7 font-sans text-pretty max-w-2xl">
                  {active.narrative}
                </p>

                {/* 3 Structured Spec Pillars (Re-imagined from the reference bullets with generous breathing room) */}
                <div className="flex flex-col gap-3.5 mb-9">
                  {active.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#f8f7f5] border border-black/5 hover:border-black/15 hover:bg-white transition-all duration-200 group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-orange-100/90 border border-orange-200/80 flex items-center justify-center shrink-0 mt-0.5 text-solar group-hover:scale-110 transition-transform">
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                          <polygon points="6 4 20 12 6 20 6 4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-[15px] font-semibold text-black tracking-tight group-hover:text-solar transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mt-1">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar / CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-7 border-t border-zinc-100">
                <Link
                  href={active.link}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-black hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-all duration-200 active:scale-98 group"
                >
                  <span>{active.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-solar" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-black border border-black/10 text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Book Strategy Call</span>
                </Link>
              </div>
            </div>

            {/* Right Column (Desktop 5 cols): Pure Unobstructed Image (Badges Completely Removed) */}
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 shadow-[0_12px_28px_-8px_rgba(0,0,0,0.1)] bg-zinc-100 group">
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
        </div>
      </div>
    </section>
  );
}
