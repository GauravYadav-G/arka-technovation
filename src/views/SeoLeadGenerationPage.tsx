'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Zap,
  TrendingUp,
  MapPin,
  Target,
  Share2,
  Star,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Phone,
  HelpCircle,
  FileText,
  Compass,
  Cpu,
  Layers,
  Award,
  ChevronDown,
  Crosshair,
  Globe,
  Users,
  Palette,
  Video,
  BookOpen,
  Briefcase,
  SlidersHorizontal,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

type CategoryType = 'all' | 'organic' | 'advertising' | 'social' | 'learn';

interface ServiceItem {
  id: string;
  aliasIds?: string[];
  category: 'organic' | 'advertising' | 'social' | 'learn';
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  highlights: string[];
}

export default function SeoLeadGenerationPage() {
  const [activeTab, setActiveTab] = useState<CategoryType>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const allOfferings: ServiceItem[] = [
    // ══════════════════════════════════════════════════════════════
    // 1. ORGANIC SEARCH
    // ══════════════════════════════════════════════════════════════
    {
      id: 'seo-services',
      aliasIds: ['seo', 'organic-search'],
      category: 'organic',
      tag: 'Organic Search & SEO',
      title: 'SEO Services',
      subtitle: 'Keyword cluster mapping, search intent analysis & high-authority white-hat link acquisition',
      desc: 'Are you looking to grow your business? If so, then SEO (search engine optimization) should be an integral part of your marketing strategy. SEO is a process that helps your website rank higher in relevant search results on search engines like Google. This, in turn, increases the amount of qualified traffic that your website receives. At ARKA Technovation Private Limited, we offer custom SEO campaigns that provide an all-in-one solution to SEO. When you partner with us for an SEO campaign, our full-time in-house team handles all aspects of SEO for you, from on-page optimization to off-page optimization to technical SEO, ensuring your most valuable audience can find you online with ease.',
      highlights: [
        'Comprehensive keyword research identifying high-intent commercial and transactional queries',
        'Full on-page optimization: titles, meta descriptions, H1/H2 header hierarchies, and internal linking',
        'High-authority, white-hat editorial link acquisition that steadily builds domain authority',
        'Continuous ranking monitoring, competitor gap analysis, and transparent monthly performance reporting',
      ],
    },
    {
      id: 'enterprise-seo-services',
      aliasIds: ['enterprise-seo', 'enterprise'],
      category: 'organic',
      tag: 'Enterprise SEO',
      title: 'Enterprise SEO Services',
      subtitle: 'Tailored strategies for massive architectures, multi-tier indexing hierarchies & national competition',
      desc: 'Search offers enterprises an extraordinary commercial advantage. With over 90% of online experiences starting with a search engine, high rankings in competitive search results enable your company to connect with shoppers and enterprise business consumers looking to make their next purchase. Enterprise SEO involves specialized methods tailored to larger corporations and complex website architectures that enable you to rank for highly competitive keywords with massive search volumes across national and global markets.',
      highlights: [
        'Enterprise keyword cluster modeling and commercial intent mapping across 5,000+ indexed URLs',
        'Large-scale crawl budget governance, internal link equity distribution, and faceted navigation indexing',
        'Entity-based SEO and semantic search schema engineering for Google Knowledge Graph recognition',
        'Automated daily enterprise rank tracking, algorithmic anomaly detection, and rapid response',
      ],
    },
    {
      id: 'local-seo-services',
      aliasIds: ['local-seo', 'local'],
      category: 'organic',
      tag: 'Local Dominance',
      title: 'Local SEO Services',
      subtitle: 'Capturing high-intent local buyers in Noida, Delhi NCR & nationwide across Google 3-Pack',
      desc: 'Here at ARKA Technovation Private Limited, we are neighborhood search engine optimization experts. Over 46% of all Google searches have local intent, and we help your business appear at the exact moment nearby customers search for your products or services. Get an all-in-one local search solution with our fully-managed local SEO services: custom local SEO strategy, professional campaign implementation, Google Business Profile management, and consistent directory citations that power calls and qualified store visits.',
      highlights: [
        'Google Business Profile (GBP) complete verification, weekly geotagged updates, and Category optimization',
        'Consistent NAP (Name, Address, Phone) citations across 70+ verified local and industry directories',
        'Localized keyword targeting for city, suburban territory, and regional industrial hubs',
        'Call tracking and ROI measurement attributing phone inquiries and quotes directly to local search keywords',
      ],
    },
    {
      id: 'google-local-services-ads-management',
      aliasIds: ['google-guaranteed', 'lsa-management'],
      category: 'organic',
      tag: 'Google Guaranteed (LSA)',
      title: 'Google Local Services Ads Management',
      subtitle: 'Pay-per-qualified-lead model with green Google Guaranteed trust badge at the top of search',
      desc: 'More than half of online searchers visit a business within 24 hours of conducting a local search. With Google Local Services Ads (LSA), you can show up at the very top of Google search results—even above standard PPC ads—with the green Google Guaranteed badge. You only pay for valid phone calls and inquiries from real prospective customers. ARKA Technovation Private Limited guides your team through the entire Google Guaranteed verification process, license checks, and background reviews from start to finish.',
      highlights: [
        'Complete Google Guaranteed application, background check guidance, and badge approval',
        'Ad setup, service area zoning, and category configuration tailored to your target markets',
        'Dispute management to contest and refund non-qualified calls or spam inquiries',
        'Direct integration with CRM lead distribution pipelines and immediate sales rep alerts',
      ],
    },
    {
      id: 'seo-audits',
      aliasIds: ['audits', 'audit-services'],
      category: 'organic',
      tag: 'Technical Health',
      title: 'SEO Audits',
      subtitle: 'Deep 150+ point architectural diagnosis to eliminate crawl traps and indexation blocks',
      desc: 'Our website SEO audit services begin with an overall analysis of your website codebase and analytics telemetry to assess what action is needed to best optimize for search engines. Based on this 150+ point diagnostic analysis, ARKA Technovation Private Limited provides actionable recommendations and direct technical implementations to eliminate crawl traps, fix broken links, resolve duplicate content, and ensure search engine spiders index your commercial pages without friction.',
      highlights: [
        'Detection and resolution of duplicate content, thin pages, and canonical tag conflicts',
        'Meta title, description, and OpenGraph audit across every indexed URL',
        'HTTP to HTTPS migration validation and mixed-content security resolution',
        'Robots.txt, XML sitemap verification, and 404 / soft-404 error page elimination',
      ],
    },
    {
      id: 'page-speed-&-core-web-vitals-optimization',
      aliasIds: ['core-web-vitals', 'page-speed-core-web-vitals'],
      category: 'organic',
      tag: 'Speed Engineering',
      title: 'Page Speed & Core Web Vitals Optimization',
      subtitle: 'Sub-second LCP, zero layout shift (CLS), and snappy interaction (INP) speed engineering',
      desc: 'Website speed optimization services are often an overlooked part of great SEO, but they are crucial for a website\'s success. A slow-loading website loses conversions and revenue, as nearly half of web searchers will not wait more than 3 seconds for a page to load. We engineer your frontend for instant performance, sub-second Largest Contentful Paint (LCP < 1.2s), zero Cumulative Layout Shift (CLS), and instantaneous Interaction to Next Paint (INP) to satisfy Google\'s ranking criteria.',
      highlights: [
        'Largest Contentful Paint (LCP) reduction below 1.2 seconds through server optimization and edge caching',
        'Cumulative Layout Shift (CLS) elimination with explicit image, video, and container dimensions',
        'Interaction to Next Paint (INP) tuning for 60fps responsiveness across mobile devices',
        'Asset minification, Brotli compression, next-gen WebP/AVIF images, and Cloudflare CDN distribution',
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 2. DIGITAL ADVERTISING
    // ══════════════════════════════════════════════════════════════
    {
      id: 'ppc_management',
      aliasIds: ['ppc-management', 'ppc'],
      category: 'advertising',
      tag: 'Search Engine Advertising',
      title: 'PPC Management Services',
      subtitle: 'High-ROAS Google Search, Display, and Performance Max campaigns with negative keyword harvesting',
      desc: 'At ARKA Technovation Private Limited, we believe that our technology-powered PPC services are the key to unlocking a powerful advertising duo: deep technical experience and real-time bid data. With our dedicated in-house performance marketing specialists and billions of data points that power our marketing efforts, your business can launch smarter, higher-ROAS Google Search, Display, and Performance Max campaigns that turn clicks into paying clients.',
      highlights: [
        'Granular single-keyword ad groups (SKAGs) and intent-tiered campaign structure for maximum Quality Score',
        'Continuous negative keyword harvesting to eliminate wasted ad spend on irrelevant searches',
        'High-converting landing page creation paired with dynamic text insertion matching user queries',
        'Full conversion tracking integration with CRM pipelines, call recording, and revenue attribution',
      ],
    },
    {
      id: 'enterprise_ppc_management',
      aliasIds: ['enterprise-ppc', 'enterprise-ppc-management'],
      category: 'advertising',
      tag: 'Enterprise Media',
      title: 'Enterprise PPC Management Services',
      subtitle: 'High-spend optimization, value-based bidding (VBB), and omnichannel retargeting architecture',
      desc: 'PPC is a powerful traffic-boosting method with the goal of generating quality leads and high return on ad spend (ROAS). For enterprise firms deploying high-volume advertising budgets, precision bid management becomes critical. Our enterprise PPC specialists architect customized bidding algorithms, audience tiering, and multi-channel retargeting that scale campaign revenue while aggressively suppressing cost-per-acquisition (CPA).',
      highlights: [
        'Custom bidding rules and value-based bidding (VBB) aligned with profit margins rather than vanity clicks',
        'Omnichannel ad synchronization across Google Search, YouTube, Display Network, and Bing Ads',
        'Automated script monitoring detecting budget pacing anomalies and ad copy fatigue 24/7',
        'Dedicated senior enterprise strategist and bi-weekly executive performance reporting',
      ],
    },
    {
      id: 'programmatic_advertising_service',
      aliasIds: ['programmatic', 'programmatic-advertising'],
      category: 'advertising',
      tag: 'Real-Time Bidding',
      title: 'Programmatic Advertising Services',
      subtitle: 'Automated machine-learning ad exchanges, lookalike modeling & fraud-free impressions',
      desc: 'Online advertising shouldn\'t be a painful, fragmented process. ARKA Technovation Private Limited offers programmatic advertising services to take the hassle out of digital media buying. Harness machine-learning ad exchanges to buy premium impressions in real-time across thousands of authoritative publisher websites, targeting your most profitable audience segments with custom lookalike modeling, strict brand-safety controls, and click-fraud elimination.',
      highlights: [
        'Real-time bidding (RTB) across Google Ad Manager, AppNexus, OpenX, and premium ad exchanges',
        'Audience lookalike modeling based on your highest-value customer segments and buying patterns',
        'Strict brand-safety protocols, publisher whitelisting, and automated click-fraud filtering',
        'Cross-device frequency capping preventing ad fatigue across desktop, mobile, and tablet',
      ],
    },
    {
      id: 'competitor_geofencing_service',
      aliasIds: ['competitor-geofencing', 'geofencing'],
      category: 'advertising',
      tag: 'Precision Geofencing',
      title: 'Competitor Geofencing Services',
      subtitle: 'Hyper-targeted mobile advertising down to 1,000 square foot boundaries around rival locations',
      desc: 'Precision is key for successful digital advertising campaigns. By using geofencing technology, ARKA Technovation Private Limited targets custom audiences and physical locations with pinpoint accuracy. Draw razor-sharp virtual boundaries down to 1,000 square feet around competitor locations, industry trade shows, and commercial hubs to deliver ads directly to prospects visiting those premises, capturing high-intent footfall and driving higher ROI.',
      highlights: [
        '1,000 sq ft precision geofences drawn around competitor facilities, showrooms, and commercial centers',
        'Event geofencing targeting attendees at national industry conferences and trade exhibitions',
        'Cross-device retargeting serving display, video, and social ads to prospects after they leave the geofence',
        'Footfall Conversion Zone tracking measuring how many ad recipients physically walk into your facility',
      ],
    },
    {
      id: 'addressable_geofencing_service',
      aliasIds: ['addressable-geofencing'],
      category: 'advertising',
      tag: 'Address-Based Targeting',
      title: 'Addressable Geofencing Services',
      subtitle: 'Delivering digital ads to exact household physical boundaries from CRM mailing lists',
      desc: 'With our addressable geofencing services, your enterprise can launch hyper-targeted, street-address-based advertising campaigns that result in phone calls, quote requests, and sales. By mapping physical CRM client mailing lists, registered voter databases, or zoned commercial real estate parcels directly to mobile advertising IDs, we deliver digital ads to exact household physical boundaries.',
      highlights: [
        'Mapping CRM physical mailing lists and client street addresses directly to mobile device IDs',
        'Delivery of targeted ads across mobile apps, desktop browsers, and connected TV (CTV)',
        'Up to 90% match rate on street address records with zero reliance on third-party tracking cookies',
        'Conversion Zone attribution tracking physical visits to your office, showroom, or retail store',
      ],
    },
    {
      id: 'employment_recruiting_marketing',
      aliasIds: ['recruiting', 'recruiting-marketing'],
      category: 'advertising',
      tag: 'Talent Acquisition',
      title: 'Employment & Recruiting Marketing',
      subtitle: 'Attracting top-tier passive executives, engineers, and specialists via digital recruitment ads',
      desc: 'If you want to recruit the best candidates for your open positions, you need to use digital recruitment marketing services. Potential candidates rely heavily on digital platforms to find their dream jobs. ARKA Technovation Private Limited crafts digital recruitment marketing campaigns that shape your employer brand, target passive skilled engineers, executives, and specialists on LinkedIn and niche portals, and fill critical hiring pipelines with top-tier talent.',
      highlights: [
        'Targeted recruitment advertising on LinkedIn, Google Search, and specialized industry job boards',
        'Employer branding video production and career portal landing page optimization',
        'Passive candidate targeting filtering by job title, certifications, years of experience, and location',
        'Application tracking integration streamlining candidate flow into your HR management software',
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 3. SOCIAL MEDIA MARKETING
    // ══════════════════════════════════════════════════════════════
    {
      id: 'social-media-advertising',
      aliasIds: ['social-ads'],
      category: 'social',
      tag: 'Paid Social Funnels',
      title: 'Social Media Advertising',
      subtitle: 'High-impact paid campaigns across Meta, LinkedIn, and X with native lead capture',
      desc: 'Social media advertising services are a key part of any modern marketing strategy. With ever-changing algorithms, businesses need diversified strategies to reach the right buyers at the right time. ARKA Technovation Private Limited designs, launches, and manages high-converting paid social campaigns across Meta (Facebook & Instagram), LinkedIn, and X, leveraging demographic, firmographic, and behavioral targeting to drive qualified leads.',
      highlights: [
        'Granular demographic and behavioral targeting connecting with active buyers and decision-makers',
        'Lead Generation forms embedded natively within social apps for frictionless contact capture',
        'Dynamic creative variant testing optimizing hooks, copy length, and visual assets',
        'Custom audience remarketing re-engaging website visitors who did not complete inquiries',
      ],
    },
    {
      id: 'social-media-management',
      aliasIds: ['social-management'],
      category: 'social',
      tag: 'Publishing & Engagement',
      title: 'Social Media Management',
      subtitle: '75% purchase touchpoint: Editorial planning, active community handling, and brand voice',
      desc: 'Over 75% of people use social media when making purchasing decisions, making it a critical touchpoint for shoppers in both B2C and B2B industries. Companies invest in professional social media management to build brand awareness, foster customer loyalty, and drive inbound inquiries. Our dedicated social media managers handle content creation, daily community interaction, reputation monitoring, and editorial distribution.',
      highlights: [
        'Comprehensive monthly content calendar mapped to company product launches and milestones',
        'Active community management, rapid direct message responses, and comment moderation',
        'Consistent brand voice and aesthetic across LinkedIn, Instagram, Facebook, and X',
        'Monthly analytics digests measuring follower growth, engagement rates, and referral traffic',
      ],
    },
    {
      id: 'social-media-design',
      aliasIds: ['social-design'],
      category: 'social',
      tag: 'Creative Studio',
      title: 'Social Media Design',
      subtitle: 'Eye-catching branded carousels, cover banners, and motion graphics that stop the scroll',
      desc: 'As a premier digital marketing agency, we know the importance of professionally designed social media assets. First impressions matter immensely on visual feeds. Our talented in-house graphic designers and motion artists craft eye-catching social banners, carousel decks, story graphics, and branded infographics that represent your enterprise with polish, commanding attention and boosting organic engagement.',
      highlights: [
        'Custom profile branding: Facebook cover banners, LinkedIn corporate headers, and profile graphics',
        'Multi-slide carousel graphics engineered for high dwell time and educational value',
        'Branded story, reel, and video thumbnail templates maintaining visual consistency',
        'Vector asset creation and typography pairing adhering to your corporate brand guidelines',
      ],
    },
    {
      id: 'youtube_social_media',
      aliasIds: ['youtube-ads', 'youtube-advertising'],
      category: 'social',
      tag: 'YouTube Cinema Ads',
      title: 'YouTube Social Media Advertising',
      subtitle: 'Broadcast-quality video production, in-stream skippable ads & search attribution',
      desc: 'YouTube is the world\'s second-largest search engine, with billions of hours of video watched daily. As a full-service YouTube advertising agency with in-house cinema production capabilities, ARKA Technovation Private Limited provides everything your business needs to advertise on YouTube—from scripting and filming commercial-grade video ads to building targeted campaigns that capture ready-to-buy prospects.',
      highlights: [
        'Skippable in-stream, non-skippable, bumper, and YouTube Shorts video ad campaign management',
        'Precision contextual targeting placing ads before relevant industry tutorials and competitor reviews',
        'Full in-house video production: Scriptwriting, cinema 4K/8K shoots, voiceover, and editing',
        'Advanced lead tracking and call attribution measuring exact website visits and inquiries from video ads',
      ],
    },
    {
      id: 'online_review',
      aliasIds: ['online-review', 'reviews', 'review-acceleration'],
      category: 'social',
      tag: 'Reputation Engineering',
      title: 'Online Review Acceleration',
      subtitle: 'Building overwhelming digital trust, 5-star customer proof, and SERP review schema',
      desc: 'Our review acceleration and reputation management packages help you build overwhelming social proof. Over 92% of buyers read online reviews before purchasing, making customer feedback critical to your commercial success. ARKA Technovation Private Limited deploys automated review request workflows via SMS and email, captures client feedback post-transaction, and showcases verified 5-star ratings on Google Maps, Trustpilot, and Clutch.',
      highlights: [
        'Automated SMS and email review requests triggered following client milestone completions',
        'Smart review funnels directing satisfied clients to Google Maps, Clutch, and industry review sites',
        'Private feedback resolution workflows addressing customer concerns before public posting',
        'Review schema markup on your website to display golden stars directly in Google search results',
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 4. LEARN & RESULTS
    // ══════════════════════════════════════════════════════════════
    {
      id: 'our_seo_reult',
      aliasIds: ['our-seo-results', 'seo-results'],
      category: 'learn',
      tag: 'Performance Benchmarks',
      title: 'Our SEO Results',
      subtitle: 'Computing confirmed client income from qualified leads, calls, and organic transactions',
      desc: 'At ARKA Technovation Private Limited, we compute client income generated from confirmed qualified leads, inbound phone calls, and e-commerce transactions across the search and advertising campaigns we manage. Our data-driven results deliver measurable pipeline expansion, lower cost-per-acquisition (CPA), and sustainable commercial growth that compounds over months and years.',
      highlights: [
        '+210% average organic traffic lift across enterprise client portfolios within 6 months',
        '4.8× verified client pipeline return on advertising spend (ROAS) across paid search and social',
        'Over 92% of targeted transactional keywords ranked on Page One of Google search results',
        '100% direct attribution telemetry connecting organic keywords to CRM closed-won contracts',
      ],
    },
    {
      id: 'our_seo_case_studies',
      aliasIds: ['our-seo-case-studies', 'case-studies'],
      category: 'learn',
      tag: 'Verified Case Studies',
      title: 'Our SEO Case Studies',
      subtitle: 'Real-world search engine optimization examples, architecture revamps & documented ROI',
      desc: 'Our SEO case studies demonstrate how real-world search engine optimization best practices outmaneuver competitors and drive commercial growth. Rather than relying on abstract theories, our published work highlights verifiable ranking gains, technical architecture transformations, and revenue acceleration across manufacturing, SaaS, e-commerce, and enterprise B2B sectors.',
      highlights: [
        'Multi-location B2B manufacturer: 340% organic lead growth via localized keyword cluster architecture',
        'Enterprise SaaS platform: Core Web Vitals overhaul reducing page latency to 850ms, lifting signups by 68%',
        'Healthcare network: Google Guaranteed and Local SEO implementation driving 1,200+ monthly patient calls',
        'Industrial distributor: E-commerce catalog restructuring lifting organic transaction volume by 185%',
      ],
    },
    {
      id: 'what_is_an_seo_company',
      aliasIds: ['what-is-an-seo-company', 'what-is-seo-company'],
      category: 'learn',
      tag: 'Strategic Guide',
      title: 'What Is an SEO Company?',
      subtitle: 'How an SEO partner drives business through discovery, creation, optimization, and measurement',
      desc: 'An SEO company helps brands drive business by discovering, creating, optimizing, and measuring their search engine visibility. Success in SEO requires quality content that is thematically structured, lightning-fast pages that load in under 2 seconds, robust technical crawlability, full HTTPS security, and schema metadata that search engines can easily understand to index your pages for high-intent queries.',
      highlights: [
        'Discovery: In-depth technical crawl, competitive landscape analysis, and keyword intent research',
        'Creation: High-value, authoritative content structured for human readers and search algorithms',
        'Optimization: Continuous Core Web Vitals speed tuning, on-page refinement, and link building',
        'Measurement: Closed-loop telemetry tracking keyword rankings, organic traffic, and revenue pipeline',
      ],
    },
    {
      id: 'how_to_find_best_seo',
      aliasIds: ['how-to-find-the-best-seo-company', 'how-to-find-best-seo'],
      category: 'learn',
      tag: 'Executive Evaluation',
      title: 'How to Find the Best SEO Company',
      subtitle: 'Evaluating in-house talent, white-hat ethics, reporting telemetry & technical capabilities',
      desc: 'Looking to take your business to the next level with digital marketing? Search Engine Optimization is a powerful way to improve visibility and attract customers. When evaluating an SEO partner, look beyond generic promises. Demand to see verified case studies in your specific industry, transparent reporting methodologies, and a dedicated in-house team of engineers and copywriters rather than outsourced contractors.',
      highlights: [
        'Verify in-house delivery: Ensure the agency executes work directly without third-party outsourcing',
        'Examine ethical practices: Demand white-hat methodologies compliant with Google\'s search guidelines',
        'Inspect reporting transparency: Look for agencies that provide real-time dashboards rather than static PDFs',
        'Evaluate technical depth: Confirm capabilities in Core Web Vitals, server architecture, and schema markup',
      ],
    },
    {
      id: 'seo_guide_marketing_manager',
      aliasIds: ['seo-guide-for-marketing-managers', 'seo-guide'],
      category: 'learn',
      tag: 'Leadership Playbook',
      title: 'SEO Guide for Marketing Managers',
      subtitle: 'Aligning search strategy with pipeline revenue, CAC reduction & Core Web Vitals health',
      desc: 'As the manager or director of a marketing team, having a strong understanding of search engine optimization is essential to business growth. Marketing leaders must view SEO as a predictable revenue generator rather than an isolated vanity metric. Key performance indicators should include qualified pipeline generated, customer acquisition cost (CAC) reduction over time, and Core Web Vitals health.',
      highlights: [
        'Establish commercial KPIs: Focus on pipeline value and customer acquisition cost rather than raw impressions',
        'Align organic search with paid media: Use PPC search query data to inform organic content clusters',
        'Prioritize technical speed: Protect conversion rates by maintaining sub-1.2-second page load times',
        'Implement closed-loop CRM attribution to demonstrate tangible SEO return on investment to leadership',
      ],
    },
    {
      id: 'what_is_dm',
      aliasIds: ['what-is-digital-marketing', 'digital-marketing-overview'],
      category: 'learn',
      tag: 'Digital Strategy',
      title: 'What Is Digital Marketing?',
      subtitle: 'The comprehensive process of leveraging search, paid media, social, and web technologies',
      desc: 'Digital marketing is the process of using online channels—search engines, paid advertising, social media platforms, email, and websites—to promote and sell products or services. At ARKA Technovation Private Limited, we utilize our extensive engineering experience and world-class technical knowledge to help businesses reach their full online potential, building cohesive growth engines that drive sustainable revenue.',
      highlights: [
        'Multi-channel synergy: Coordinating search, paid advertising, social media, and video for maximum impact',
        'Data-driven targeting: Connecting with high-intent decision-makers based on demographics and behavior',
        'Predictable customer acquisition: Lowering acquisition costs through conversion rate optimization',
        'Complete corporate accountability: Full-service strategy and execution under one roof in Sector 63, Noida',
      ],
    },
  ];

  const filteredOfferings =
    activeTab === 'all'
      ? allOfferings
      : allOfferings.filter((s) => s.category === activeTab);

  const faqs = [
    {
      q: 'How long does it take to see tangible results from an enterprise SEO campaign?',
      a: 'While technical fixes and Core Web Vitals optimizations yield measurable speed and indexing improvements within 2 to 4 weeks, significant organic keyword movements and inbound lead volume typically compound between months 3 and 6 as domain authority and content clusters mature.',
    },
    {
      q: 'What makes Competitor and Addressable Geofencing different from standard radius targeting?',
      a: 'Standard radius targeting casts a wide net around an entire city or postal code. Competitor Geofencing draws razor-sharp virtual boundaries down to 1,000 square feet around specific competitor buildings or convention halls. Addressable Geofencing takes a street-level list of client addresses and matches mobile advertising IDs to deliver ads directly to those exact households.',
    },
    {
      q: 'How does ARKA Technovation Private Limited handle Google Guaranteed and Local Services Ads?',
      a: 'We guide your company through the entire Google Guaranteed verification process, including background checks, license verification, and insurance compliance. Once approved, your business displays the green Google Guaranteed badge at the very top of local search results, and you only pay for valid phone inquiries.',
    },
    {
      q: 'Does ARKA Technovation Private Limited outsource any SEO, paid media, or content development?',
      a: 'No. Every technical audit, schema implementation, keyword strategy, and copywriting piece is executed by our full-time, in-house team located at our Corporate Headquarters in Sector 63, Noida. We believe in 100% direct accountability.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden border-b border-black/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] text-left">
              SEO &amp; Lead Generation Services That Generate High Quality Leads.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-light text-left">
              With over 90% of online journeys beginning on search engines, top rankings in competitive search results connect your enterprise with ready-to-buy customers and procurement leaders. At {COMPANY.name}, our data-powered SEO campaigns provide an all-in-one revenue acceleration solution covering organic search, enterprise SEO, Google Guaranteed local services, programmatic advertising, addressable geofencing, and review acceleration.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="site-button px-7 py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
              >
                <span style={{ color: '#FFFFFF' }}>Request SEO Audit &amp; Proposal</span>
                <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="px-7 py-3.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-solar" />
                <span>Speak with SEO Strategist</span>
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
              { key: 'all' as CategoryType, label: 'All Capabilities', count: 23, icon: Layers },
              { key: 'organic' as CategoryType, label: 'Organic Search', count: 6, icon: Search },
              { key: 'advertising' as CategoryType, label: 'Digital Advertising', count: 6, icon: Target },
              { key: 'social' as CategoryType, label: 'Social Media Marketing', count: 5, icon: Share2 },
              { key: 'learn' as CategoryType, label: 'Learn & SEO Insights', count: 6, icon: BookOpen },
            ].map((tab) => {
              const active = activeTab === tab.key;
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  whileTap={{ scale: 0.96 }}
                  data-dock-btn
                  className="segmented-dock-btn group relative shrink-0 pl-3 pr-2.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap focus:outline-none select-none cursor-pointer"
                >
                  {/* Sliding active background pill */}
                  {active && (
                    <motion.div
                      layoutId="seoTabActiveIndicator"
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
                    {tab.label}
                  </span>

                  {/* Tab Count Pill */}
                  <span
                    className={`relative z-10 px-1.5 py-0.2 min-w-[18px] rounded-full text-[10px] font-mono tracking-tight font-bold shrink-0 transition-colors duration-200 inline-flex items-center justify-center ${
                      active
                        ? 'bg-white/20 text-white'
                        : 'bg-black/5 text-zinc-500 group-hover:bg-black/10 group-hover:text-black'
                    }`}
                  >
                    {tab.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Complete Service Scope: Editorial Cards with Images Alongside Context ── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div id="full-scope" className="scroll-mt-36 text-left max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
            Full Service Scope &amp; Deliverables
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3">
            Search, Paid Advertising &amp; Growth Intelligence
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed font-light">
            Every campaign is tailored to your commercial objectives, combining technical speed engineering, competitive telemetry, addressable geofencing, and multi-channel marketing automation to build an unshakeable digital footprint.
          </p>
        </div>

        <motion.div layout className="flex flex-col gap-6 sm:gap-10 lg:gap-14">
          <AnimatePresence mode="popLayout">
            {filteredOfferings.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.article
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  id={service.id}
                  className={`scroll-mt-36 group rounded-2xl sm:rounded-[28px] lg:rounded-[32px] bg-white border border-black/[0.08] hover:border-black/25 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } relative`}
                >
                  {/* Alias anchors for seamless navbar deep linking */}
                  {service.aliasIds?.map((alias) => (
                    <span key={alias} id={alias} className="absolute -top-36 left-0" aria-hidden="true" />
                  ))}

                  {/* ── Visual Panel: Responsive image height on mobile, full editorial height on desktop ── */}
                  <div className="w-full h-48 sm:h-64 lg:h-auto lg:min-h-[440px] lg:w-[42%] xl:w-[40%] shrink-0 relative overflow-hidden bg-zinc-100">
                    <img
                      src={`/images/services/seo/${service.id}.webp?v=2`}
                      alt={`${service.title} — ARKA Technovation`}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* ── Context & Deliverables Panel: Compact mobile spacing, expansive desktop typography ── */}
                  <div className="w-full lg:w-[58%] xl:w-[60%] p-5 sm:p-8 lg:p-11 flex flex-col justify-between bg-zinc-50/50 group-hover:bg-zinc-50 transition-colors duration-300">
                    <div>
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black tracking-tight leading-snug font-display text-balance">
                        {service.title}
                      </h3>

                      {/* Punchy Subtitle */}
                      <p className="text-[11px] sm:text-xs lg:text-sm font-mono text-solar font-semibold mt-1.5 leading-relaxed">
                        {service.subtitle}
                      </p>

                      {/* Editorial Context Description */}
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-zinc-600 leading-relaxed font-normal text-pretty line-clamp-3 sm:line-clamp-none">
                        {service.desc}
                      </p>

                      {/* Deliverables & Technical Capabilities Grid */}
                      <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-black/8">
                        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                          Deliverables &amp; Technical Capabilities:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {service.highlights.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-solar shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer Action Bar */}
                    <div className="mt-5 pt-4 sm:mt-8 sm:pt-5 border-t border-black/8 flex items-center justify-end">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-solar text-xs sm:text-sm font-semibold transition-[background-color,transform] duration-200 active:scale-[0.98] shadow-sm group/btn w-full sm:w-auto"
                      >
                        <span>Request Custom Strategy</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── Interactive FAQ Section ── */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mt-3">
            Common Inquiries on Search &amp; Lead Generation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Everything you need to know about our SEO contracts, reporting cadences, and Noida HQ engineering.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-black/10 rounded-2xl overflow-hidden bg-zinc-50/50 transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-black hover:text-solar transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-solar' : 'text-zinc-400'
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed font-light border-t border-black/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── Consultation CTA Strip ── */}
      <section className="py-20 bg-zinc-950 text-white border-t border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold text-center">
            Schedule a Confidential Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 max-w-3xl !mx-auto text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Ready to Dominate Search &amp; Accelerate Pipeline Revenue?
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl !mx-auto text-base sm:text-lg font-light leading-relaxed text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Connect directly with senior SEO architects and performance media specialists at our Noida Headquarters. We review your existing domain telemetry and deliver a transparent proposal within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="site-button px-8 py-4 rounded-full !bg-white !text-black text-sm font-semibold flex items-center gap-2 hover:!bg-zinc-200 transition-colors shadow-xl"
              style={{ color: '#000000', backgroundColor: '#FFFFFF' }}
            >
              <span style={{ color: '#000000' }}>Request SEO Strategy &amp; Proposal</span>
              <ArrowRight className="w-4 h-4 !text-black" style={{ color: '#000000', stroke: '#000000' }} />
            </Link>
            <a
              href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
              className="px-8 py-4 rounded-full bg-zinc-900 border border-white/15 text-white text-sm font-medium flex items-center gap-2 hover:bg-zinc-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-solar" />
              <span>{COMPANY.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
