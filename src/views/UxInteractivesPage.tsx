'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  Smartphone,
  BarChart3,
  PenTool,
  Sparkles,
  Video,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Eye,
  MousePointerClick,
  Layers,
  Code2,
  Mic,
  Server,
  FileCode,
  Check,
  ChevronDown,
  Globe,
  TrendingUp,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

type UXCategory = 'All' | 'Design & UX' | 'Content & Media' | 'Engineering & CMS' | 'Compliance & Voice';

export default function UxInteractivesPage() {
  const [activeCategory, setActiveCategory] = useState<UXCategory>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories: UXCategory[] = [
    'All',
    'Design & UX',
    'Content & Media',
    'Engineering & CMS',
    'Compliance & Voice',
  ];

  const uxFeatures = [
    // ─────────────────────────────────────────────────────────────
    // DESIGN & UX
    // ─────────────────────────────────────────────────────────────
    {
      id: 'website-design',
      category: 'Design & UX',
      tag: 'Bespoke UI/UX',
      title: 'UX Website Design & Strategic Redesign',
      subtitle: 'Capturing brand identity, reducing bounce rates, and optimizing conversion funnels',
      desc: 'Although UI/UX design is a critical skill for web developers, many lack an in-depth understanding of how user interface and user experience differ. They are not interchangeable terms, but they are inextricably tied together. A good UI enables a great UX, but with a poor UI, it is impossible for users to enjoy a frictionless digital journey. Our award-winning design pod creates bespoke, mobile-optimized websites that capture your brand, improve conversion rates, and maximize revenue.',
      highlights: [
        'User Interface (UI) vs User Experience (UX) distinction engineered into every template',
        'Mobile-first responsive layouts tested across 30+ physical screen sizes and browsers',
        'Conversion Rate Optimization (CRO) frameworks measuring and accelerating site ROI',
        'Behavioral friction analysis reducing page bounce rates and form abandonment',
      ],
      deliverables: ['Full UX research report', 'Interactive Figma prototypes', 'Design systems & UI kits', 'Post-launch CRO analytics'],
    },
    {
      id: 'landing-pages',
      category: 'Design & UX',
      tag: 'Conversion Funnels',
      title: 'High-Converting Landing Pages & Funnel Optimization',
      subtitle: 'Psychological visual flow, rapid load speeds, and maximum lead capture rates',
      desc: 'Laser-focused landing pages engineered specifically for high-intent paid search and social campaigns. We build landing pages that eliminate navigation distractions, deliver clear value propositions above the fold, and guide visitors smoothly into high-converting form fills or checkout flows.',
      highlights: [
        'Above-the-fold value proposition design tailored to specific PPC ad copy',
        'Multi-step micro-forms that dramatically improve completion rates compared to long forms',
        'Heatmap tracking and session recordings to identify and remove drop-off bottlenecks',
        'Continuous A/B and multivariate split-testing on live traffic to optimize conversion rate',
      ],
      deliverables: ['Custom landing page templates', 'A/B testing architecture', 'Form velocity optimization', 'Real-time conversion dashboards'],
    },
    {
      id: 'cro',
      category: 'Design & UX',
      tag: 'CRO Science',
      title: 'Conversion Rate Optimization (CRO) & Heatmap Telemetry',
      subtitle: 'Transforming existing website traffic into paying enterprise customers',
      desc: 'Getting traffic is only half the battle. If your website visitors leave without contacting you or completing a purchase, marketing spend is wasted. Our CRO analysts use qualitative session replays, click heatmaps, scroll maps, and statistical split-testing to discover where buyers hesitate, streamlining user paths to purchase.',
      highlights: [
        'In-depth heuristic UX analysis uncovering hidden navigation and layout friction points',
        'Multivariate testing of headlines, call-to-action buttons, pricing tables, and guarantees',
        'Mobile checkout streamlining eliminating unnecessary input fields and form validation errors',
        'Detailed monthly CRO scorecards showing statistically verified conversion gains',
      ],
      deliverables: ['Friction audit scorecard', 'Hypothesis test roadmap', 'Multivariate test execution', 'Revenue impact reports'],
    },

    // ─────────────────────────────────────────────────────────────
    // CONTENT & MEDIA
    // ─────────────────────────────────────────────────────────────
    {
      id: 'content-marketing',
      category: 'Content & Media',
      tag: 'SEO Copywriting',
      title: 'Content Marketing & SEO Copywriting Services',
      subtitle: 'Original, compelling copy that connects with human buyers and ranks in search engines',
      desc: 'Compelling copy is essential to any business that wants to succeed online. It is what connects you with your target audience and persuades them to purchase your product, request a consultation, or visit your corporate facility. With 15+ years of experience crafting web copy, our copywriting team features technical and strategic writers who produce high-converting blog posts, sales content, and authoritative online guides.',
      highlights: [
        'Original research-backed copywriting tailored to human readability and search engine indexing',
        'Technical whitepapers, B2B case studies, and comprehensive industry playbooks',
        'Strategic editorial calendars mapped to seasonal search demand and buying stages',
        'Brand tone of voice documentation ensuring consistency across all company touchpoints',
      ],
      deliverables: ['Content audit & gap analysis', 'SEO copywriting guides', 'Editorial calendar management', 'Tone of voice guidelines'],
    },
    {
      id: 'personalized-content',
      category: 'Content & Media',
      tag: 'Dynamic Personalization',
      title: 'Personalized Web Content & Firmographic Messaging',
      subtitle: 'Customizing page content in real-time based on visitor industry, company size, and location',
      desc: 'A powerful personalization strategy is key to a modern website because it allows you to tailor each visitor’s experience to their specific firmographic profile. Our proprietary personalization engine collects data on each visitor’s demographics, referring campaign, and on-site behavior, automatically serving tailored headlines, pricing packages, and case studies based on their company size, revenue, and geography.',
      highlights: [
        'Firmographic B2B audience rules customizing content by industry, company size, and revenue',
        'Dynamic headline, hero banner, and case study swapping based on referring campaign URL',
        'Real-time behavioral trigger workflows responding to specific pages visited and dwell time',
        '100% transparent personalization analytics measuring engagement lift across visitor segments',
      ],
      deliverables: ['Firmographic rule configuration', 'Dynamic content module setup', 'Audience segmentation matrix', 'Segment performance reports'],
    },
    {
      id: 'infographics-motion',
      category: 'Content & Media',
      tag: 'Data Visualization',
      title: 'Infographics & Kinetic Motion Graphics',
      subtitle: 'Transforming complex technical data into viral visual assets and engaging graphics',
      desc: 'Infographics are much more likely to be shared and gain widespread attention than traditional text content. Our data visualization experts design captivating visual assets that explain complex technical concepts in an accessible medium, facilitating emotional connections with your brand and establishing your company as an unmistakable industry leader.',
      highlights: [
        'Data-driven infographics distilling proprietary industry research into viral shareable assets',
        '2D and 3D kinetic motion graphics for explainer videos, web hero sections, and social media',
        'Online PR distribution strategy placing infographics on high-traffic industry publications',
        'Full vector asset delivery in SVG, WebM, and high-resolution print formats',
      ],
      deliverables: ['Data visualization design', 'Motion graphics animations', 'Digital PR distribution package', 'Vector & responsive assets'],
    },
    {
      id: 'web-video-services',
      category: 'Content & Media',
      tag: 'Video Production',
      title: 'Web Video Production & Trust-Building Media',
      subtitle: 'Video content that builds trust and drives the 73% of viewers who purchase after watching',
      desc: 'Products are proven to sell significantly faster when accompanied by professional video. Research confirms that 73 percent of visitors who watch product videos make a purchase, and companies offering video content are universally viewed as more trustworthy. We produce compelling web videos—from product demonstrations to customer testimonials—that accelerate site ROI.',
      highlights: [
        'Studio and on-location product demonstration videos highlighting real-world build quality',
        'Executive interview videos establishing corporate leadership and engineering expertise',
        'Customer testimonial videos supercharging authentic word-of-mouth social proof',
        'Mobile-optimized video delivery with custom video players and fast CDN streaming',
      ],
      deliverables: ['Full video production script', 'Cinema 4K shoot & editing', 'Color grading & licensed audio', 'Web-ready streaming assets'],
    },

    // ─────────────────────────────────────────────────────────────
    // ENGINEERING & CMS
    // ─────────────────────────────────────────────────────────────
    {
      id: 'web-development',
      category: 'Engineering & CMS',
      tag: 'Full-Stack Engineering',
      title: 'Enterprise Web Development Services',
      subtitle: 'Mastery across open-source PHP & MySQL as well as Microsoft ASP, .NET & SQL Server',
      desc: 'Our web development staff is not only skilled in open-source technologies such as PHP 8, MySQL, Node.js, and Next.js, but also possesses extensive enterprise experience with Microsoft technologies like ASP, .NET, and SQL Server. With a wealth of experience across popular CMS platforms like Magento, WordPress, and Joomla, we create powerful, user-friendly, and visually appealing web portals.',
      highlights: [
        'Open-source proficiency: Next.js 15, React, PHP 8, MySQL, and PostgreSQL databases',
        'Enterprise Microsoft proficiency: ASP.NET Core, C#, Entity Framework, and SQL Server',
        'Seamless integration with enterprise ERP, CRM, payment gateways, and shipping APIs',
        'Clean, modular, thoroughly documented codebases with full client source code ownership',
      ],
      deliverables: ['Technical architecture spec', 'Full-stack frontend & backend build', 'API documentation', 'Production deployment & git repo'],
    },
    {
      id: 'shopify-ecommerce',
      category: 'Engineering & CMS',
      tag: 'E-Commerce Engineering',
      title: 'Shopify & Headless E-Commerce Development',
      subtitle: 'Custom Liquid themes, headless Shopify Plus, and high-volume storefronts',
      desc: 'Shopify powers over 1.7 million merchants worldwide, offering unparalleled stability and flexibility. Our certified Shopify development specialists build custom Shopify and Shopify Plus stores tailored to your catalog and brand. From bespoke Liquid theme design to headless Storefront API architectures and custom checkout apps, we help you make the most of this powerful platform.',
      highlights: [
        'Custom Shopify theme engineering built from scratch with zero code bloat',
        'Headless e-commerce development leveraging Shopify Storefront API and Next.js frontend',
        'Third-party ERP, inventory sync, and localized payment gateway integration',
        'Checkout optimization, automated cart recovery, and mobile speed tuning',
      ],
      deliverables: ['Bespoke Shopify theme', 'App configuration & integrations', 'Inventory & payment setup', 'Merchant training manual'],
    },
    {
      id: 'digital-experience-dev',
      category: 'Engineering & CMS',
      tag: 'Experience Platforms',
      title: 'Digital Experience Development & Custom CMS Portals',
      subtitle: '15+ years experience building transactional, content-based, and headless portals',
      desc: 'We bring more than 15 years of deep experience to digital experience development. We have architected and deployed enterprise portals across Magento, WordPress, SugarCRM, Joomla, PHPNuke, OS Commerce, Microsoft SharePoint, BEA AquaLogic, and modern headless CMS platforms. We build content systems that marketing teams can easily manage without needing developer intervention.',
      highlights: [
        'Bespoke CMS development with intuitive drag-and-drop editorial controls',
        'Headless CMS architectures decoupling content management from frontend delivery',
        'Multi-lingual, multi-region content localization and permission management',
        'High-concurrency database caching and sub-second page rendering',
      ],
      deliverables: ['Custom CMS platform', 'Role-based editorial permissions', 'User onboarding guide', 'Automated backup configuration'],
    },
    {
      id: 'web-infrastructure',
      category: 'Engineering & CMS',
      tag: '24/7 SLA & DevOps',
      title: 'Web Infrastructure & Turnkey Maintenance Retainers',
      subtitle: 'The 50% First-Impression Rule: Delivering fast, secure, and seamless uptime',
      desc: 'With every online search, 50 percent of users discover a new company, product, or service. Their first impression can make or break your next sale. Our custom website maintenance plans ensure your digital storefront delivers sub-second load times, impenetrable security, and 99.99% uptime with 24/7 proactive monitoring and regular security patching.',
      highlights: [
        'The 50% First-Impression Guarantee: Zero downtime and sub-second page response speeds',
        'Automated daily offsite cloud backups and one-click disaster recovery protocols',
        'Continuous security monitoring, SSL/TLS certificate renewal, and malware defense',
        'Dedicated monthly developer hours for feature enhancements, bug fixes, and speed audits',
      ],
      deliverables: ['24/7 uptime monitoring dashboard', 'Daily automated backups', 'Monthly maintenance report', 'Dedicated SLA support channel'],
    },

    // ─────────────────────────────────────────────────────────────
    // COMPLIANCE & VOICE
    // ─────────────────────────────────────────────────────────────
    {
      id: 'voice-search-optimization',
      category: 'Compliance & Voice',
      tag: 'Voice Search (VSO)',
      title: 'Voice Search Content Optimization (VSO)',
      subtitle: 'Capturing conversational long-tail queries across Siri, Google Assistant, and Alexa',
      desc: 'With the explosive rise of digital voice assistants like Siri, Google Home, and Amazon Alexa, optimizing for voice search is critical. Voice queries differ drastically from typed searches—they are conversational, localized, and question-driven. We optimize your website content, schema, and FAQ structures so your brand is returned as the single authoritative spoken answer.',
      highlights: [
        'Conversational natural language content optimization answering spoken "Who, What, Where, How" queries',
        'FAQ and Speakable schema markup integrated according to Google Voice guidelines',
        'Local voice search optimization capturing "near me" and spoken business directory queries',
        'Continuous monitoring of voice assistant featured snippet placements and answer authority',
      ],
      deliverables: ['Voice search readiness audit', 'Conversational query keyword map', 'Speakable schema implementation', 'Voice ranking reports'],
    },
    {
      id: 'voice-skills-development',
      category: 'Compliance & Voice',
      tag: 'Voice Apps',
      title: 'Voice Assistant Skills & Action Development',
      subtitle: 'Custom intent and skill programming for Amazon Alexa and Google Assistant',
      desc: 'Voice assistant skills development involves implementing custom intents that allow users to interact with your services using voice commands. Whether booking an appointment, checking order status, or streaming audio content, we build custom Alexa Skills and Google Assistant Actions that fulfill user intentions and open new interactive commercial channels.',
      highlights: [
        'Custom voice intent programming for Amazon Alexa Skills and Google Actions',
        'Integration with your backend CRM, e-commerce catalog, and booking databases',
        'Rigorous natural language testing across multiple accents and phrasing variations',
        'Voice app publishing, certification approval, and ongoing intent maintenance',
      ],
      deliverables: ['Voice interaction model', 'Cloud backend API integration', 'Certified voice skill build', 'Voice analytics dashboard'],
    },
    {
      id: 'ada-compliance',
      category: 'Compliance & Voice',
      tag: 'WCAG 2.2 AA',
      title: 'ADA Web Compliance & Accessibility Remediation',
      subtitle: 'Ensuring barrier-free digital access and full civil rights compliance for disabled users',
      desc: 'The global awareness of disability-inclusive development has significantly increased over time. Web accessibility laws protect the civil rights of disabled people, requiring a barrier-free digital environment. We audit, remediate, and certify websites to meet strict ADA Title III and international WCAG 2.2 Level AA accessibility standards, ensuring equal access for all users.',
      highlights: [
        'Comprehensive WCAG 2.2 AA audit across keyboard navigation, color contrast, and screen readers',
        'Code remediation fixing missing alt text, ARIA attributes, semantic headings, and focus traps',
        'Assistive technology testing with JAWS, NVDA, and VoiceOver screen-reading software',
        'Accessibility statement generation and official compliance certificate for legal protection',
      ],
      deliverables: ['Accessibility audit report', 'Code remediation patches', 'Screen reader testing matrix', 'ADA Compliance Certificate'],
    },
  ];

  const filteredFeatures =
    activeCategory === 'All'
      ? uxFeatures
      : uxFeatures.filter((f) => f.category === activeCategory);

  const designPhases = [
    {
      num: '01',
      title: 'User Research & Journey Architecture',
      desc: 'We map user personas, intent friction, and drop-off points using heatmaps and telemetry before writing a line of code.',
    },
    {
      num: '02',
      title: 'Interactive Wireframing & Design Systems',
      desc: 'Tokenized UI kits built in Figma with production-ready atomic components, light/dark themes, and optical alignment.',
    },
    {
      num: '03',
      title: 'Micro-Interactions & Front-End Polish',
      desc: 'Smooth Framer Motion transitions, zero-layout-shift responsiveness, and 60fps gesture physics engineered in React.',
    },
    {
      num: '04',
      title: 'CRO Multivariate Testing & Optimization',
      desc: 'Continuous split-testing on live traffic to validate conversion gains, form velocity, and revenue impact.',
    },
  ];

  const guides = [
    {
      title: 'User Interface (UI) vs User Experience (UX): Bridging Visuals and Psychology',
      cat: 'Design Theory',
      readTime: '6 min read',
      desc: 'Why an award-winning UI cannot succeed without rigorous UX engineering. How information architecture, user journeys, and mental models turn casual visitors into loyal customers.',
    },
    {
      title: 'Firmographic Dynamic Personalization: The Modern B2B Web Standard',
      cat: 'Conversion Science',
      readTime: '5 min read',
      desc: 'How tailoring website copy, case studies, and pricing models by company size, industry, and geographic location doubles conversion rates without altering page URLs.',
    },
    {
      title: 'The 50% First-Impression Rule: Why Web Infrastructure Dictates Digital Sales',
      cat: 'Infrastructure & CRO',
      readTime: '7 min read',
      desc: '50% of consumers form their brand perception during their first seconds on a website. How sub-second load times, SSL security, and zero layout shift preserve enterprise credibility.',
    },
  ];

  const faqs = [
    {
      q: 'What is the real commercial difference between UI Design and UX Design?',
      a: 'User Interface (UI) design focuses on the visual and interactive surface of your product—color palettes, typography, button states, micro-animations, and aesthetic polish. User Experience (UX) design focuses on the overall psychology, journey mapping, task completion efficiency, and friction removal. While a striking UI attracts users, only an intuitive UX ensures they can complete their goals, submit inquiries, and convert into paying clients.',
    },
    {
      q: 'How does firmographic website personalization work for B2B enterprises?',
      a: 'Our personalization system uses reverse IP lookup and referral parameters to identify the visiting company’s industry, estimated employee count, and geographic location in real time. Without redirecting to separate landing pages, the website dynamically adjusts headlines, displays relevant industry case studies, and presents custom pricing tiers suited to that enterprise.',
    },
    {
      q: 'Why is ADA and WCAG 2.2 web compliance necessary for our website?',
      a: 'Website accessibility ensures that people with visual, auditory, motor, or cognitive disabilities can independently navigate, read, and transact on your digital properties. Beyond ethical responsibility, ADA Title III compliance protects your enterprise from expensive legal accessibility lawsuits, improves Google SEO rankings, and opens your brand to millions of underserved consumers.',
    },
    {
      q: 'Do you build custom Shopify stores or just modify pre-made templates?',
      a: 'We build custom Shopify and Shopify Plus themes from the ground up using clean Liquid and Tailwind CSS, or headless Next.js architectures using the Shopify Storefront API. We avoid bloated pre-made marketplace themes to ensure lightning-fast page loading speeds, unique brand differentiation, and customized checkout workflows.',
    },
    {
      q: 'How does voice search optimization (VSO) differ from standard Google SEO?',
      a: 'Standard SEO targets short keyword phrases typed into a search bar. Voice searches are spoken aloud as natural, conversational questions (e.g., "Hey Google, who is the best enterprise software company near me?"). VSO focuses on structured FAQ blocks, conversational tone, Speakable schema, and securing position-zero featured snippets that voice assistants read aloud.',
    },
    {
      q: 'What is included in your 24/7 website maintenance and infrastructure retainers?',
      a: 'Our retainers provide 24/7 server uptime monitoring, automatic offsite daily backups, instant SSL renewals, emergency malware removal, Core Web Vitals performance tuning, and guaranteed engineer response times under a strict Service Level Agreement (SLA).',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-black/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] text-left">
              UX Interactives, Dynamic Experience Design &amp; Content Systems.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-light text-left">
              A great user interface drives an unforgettable digital brand. At {COMPANY.name}, our in-house engineering and visual design pods craft bespoke, high-converting digital interfaces, personalized content engines, voice search solutions, and fully accessible web applications.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="site-button px-7 py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
              >
                <span style={{ color: '#FFFFFF' }}>Request UX Consultation</span>
                <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="px-7 py-3.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-solar" />
                <span>Speak with Design Lead</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Tabs Segmented Dock with Spring Physics Animation ── */}
      <section className="py-2 border-b border-black/5 bg-white/90 sticky top-[64px] sm:top-[78px] z-30 backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none py-0.5">
          <div className="segmented-dock inline-flex items-center gap-1 p-1 rounded-full bg-zinc-100/90 border border-black/8 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)] relative shrink-0">
            {[
              { label: 'All' as UXCategory, icon: Layers },
              { label: 'Design & UX' as UXCategory, icon: PenTool },
              { label: 'Content & Media' as UXCategory, icon: Video },
              { label: 'Engineering & CMS' as UXCategory, icon: Code2 },
              { label: 'Compliance & Voice' as UXCategory, icon: ShieldCheck },
            ].map(({ label, icon: Icon }) => {
              const count = label === 'All' ? uxFeatures.length : uxFeatures.filter((f) => f.category === label).length;
              const active = activeCategory === label;
              return (
                <motion.button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  whileTap={{ scale: 0.96 }}
                  data-dock-btn
                  className="segmented-dock-btn group relative shrink-0 pl-3 pr-2.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap focus:outline-none select-none cursor-pointer"
                >
                  {/* Sliding active background pill */}
                  {active && (
                    <motion.div
                      layoutId="uxTabActiveIndicator"
                      className="absolute inset-0 bg-black rounded-full shadow-sm shadow-black/20"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* Tab Icon */}
                  <Icon
                    className={`relative z-10 w-3.5 h-3.5 shrink-0 transition-colors duration-200 ${
                      active ? 'text-white' : 'text-zinc-500 group-hover:text-black'
                    }`}
                  />

                  {/* Tab Label */}
                  <span
                    className={`relative z-10 font-semibold tracking-tight transition-colors duration-200 text-xs sm:text-[13px] ${
                      active ? 'text-white' : 'text-zinc-600 group-hover:text-black'
                    }`}
                  >
                    {label}
                  </span>

                  {/* Tab Count Pill */}
                  <span
                    className={`relative z-10 px-1.5 py-0.2 min-w-[18px] rounded-full text-[10px] font-mono tracking-tight font-bold shrink-0 transition-colors duration-200 inline-flex items-center justify-center ${
                      active
                        ? 'bg-white/20 text-white'
                        : 'bg-black/5 text-zinc-500 group-hover:bg-black/10 group-hover:text-black'
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comprehensive Features Grid ── */}
      {/* ── Comprehensive Features (Alternating Editorial Layout with Images) ── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
            Interactive Systems &amp; Experience Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3 font-display text-balance">
            Human-Centered UI/UX, Dynamic Content &amp; Design Systems
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed font-light text-pretty">
            Explore our specialized interactive design capabilities, atomic design tokens, accessibility protocols, and headless CMS implementations. Filter by category above to review full deliverable scopes.
          </p>
        </div>

        <motion.div layout className="flex flex-col gap-6 sm:gap-10 lg:gap-14">
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const aliases: Record<string, string> = {
                'infographics-motion': 'infographics',
                'digital-experience-dev': 'digital-experience',
              };
              const aliasId = aliases[item.id];

              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  id={item.id}
                  className={`scroll-mt-36 group rounded-2xl sm:rounded-[28px] lg:rounded-[32px] bg-white border border-black/[0.08] hover:border-black/25 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } relative`}
                >
                  {/* Alias anchors for deep linking */}
                  {aliasId && (
                    <span id={aliasId} className="absolute -top-36 left-0" aria-hidden="true" />
                  )}

                  {/* ── Visual Panel: Responsive image height on mobile, full editorial height on desktop ── */}
                  <div className="w-full h-48 sm:h-64 lg:h-auto lg:min-h-[440px] lg:w-[42%] xl:w-[40%] shrink-0 relative overflow-hidden bg-zinc-100">
                    <img
                      src={`/images/services/ux/${item.id}.webp?v=2`}
                      alt={`${item.title} — ARKA UI/UX`}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* ── Context & Deliverables Panel: Editorial Content alongside Image ── */}
                  <div className="w-full lg:w-[58%] xl:w-[60%] p-5 sm:p-8 lg:p-11 flex flex-col justify-between bg-zinc-50/50 group-hover:bg-zinc-50 transition-colors duration-300">
                    <div>
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black tracking-tight leading-snug font-display text-balance">
                        {item.title}
                      </h3>

                      {/* Punchy Subtitle */}
                      <p className="text-[11px] sm:text-xs lg:text-sm font-mono text-solar font-semibold mt-1.5 leading-relaxed">
                        {item.subtitle}
                      </p>

                      {/* Editorial Context Description */}
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-zinc-600 leading-relaxed font-normal text-pretty line-clamp-3 sm:line-clamp-none">
                        {item.desc}
                      </p>

                      {/* Core Framework & Highlights Grid */}
                      <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-black/8">
                        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                          Core Framework &amp; Highlights:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {item.highlights.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-solar shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Standard Deliverables Chips */}
                      {item.deliverables && item.deliverables.length > 0 && (
                        <div className="mt-4 pt-3 sm:mt-5 sm:pt-4 border-t border-black/5">
                          <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                            Standard Deliverables:
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {item.deliverables.map((del, dIdx) => (
                              <span
                                key={dIdx}
                                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white border border-black/8 text-[11px] sm:text-xs text-zinc-700 font-medium shadow-2xs"
                              >
                                {del}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Footer Action Bar */}
                    <div className="mt-5 pt-4 sm:mt-8 sm:pt-5 border-t border-black/8 flex items-center justify-end">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-sm active:scale-[0.97] w-full sm:w-auto"
                        style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
                      >
                        <span>Request Custom Audit</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── Working Methodology Strip ── */}
      <section className="py-20 bg-zinc-900 text-white border-t border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              The ARKA Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              How Our UX &amp; Engineering Teams Deliver
            </h2>
            <p className="mt-3 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
              No generic templates or outsourced code. Every interface is built iteratively by dedicated specialists working under one roof in Sector 63, Noida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPhases.map((phase) => (
              <div key={phase.num} className="p-6 rounded-xl bg-zinc-800/60 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-mono font-bold text-solar">{phase.num}</span>
                  <h3 className="text-lg font-bold text-white mt-3 tracking-tight">{phase.title}</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Educational Guides & Playbooks ── */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Design &amp; Experience Guides
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            Strategic Playbooks for Digital Leaders
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            In-depth guides on user research, UI architecture, accessibility compliance, and interaction performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover:border-black/25 transition-all shadow-sm group"
            >
              <div>
                <span className="text-xs font-mono text-solar uppercase tracking-wider font-medium block mb-3">
                  {g.cat} · {g.readTime}
                </span>
                <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-zinc-800 transition-colors leading-snug">
                  {g.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {g.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/8 flex items-center gap-1.5 text-xs font-semibold text-black group-hover:text-solar transition-colors">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Interactive FAQ Accordion ── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            Answers on UX, CMS &amp; Compliance
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Everything you need to know about our UX design sprints, Figma deliverables, and code handoff.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-black leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-solar' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-600 font-light leading-relaxed border-t border-black/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-zinc-50 border border-black/10 shadow-sm relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Start Your Project
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3">
              Ready to Upgrade Your Digital Experience?
            </h2>
            <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              Book a UX &amp; conversion audit with {COMPANY.name}&apos;s senior designers and architects in Sector 63, Noida. Get a concrete action plan within 48 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-black text-white hover:bg-zinc-800 font-semibold text-sm transition-all shadow-md"
              >
                <span>Schedule a UX Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-black/15 bg-white text-black hover:bg-zinc-50 font-semibold text-sm transition-all"
              >
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
