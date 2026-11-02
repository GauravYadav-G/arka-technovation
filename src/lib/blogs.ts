export interface BlogSection {
  title?: string;
  id?: string;
  paragraphs: string[];
  callout?: {
    type: 'note' | 'tip' | 'stat';
    text: string;
    label?: string;
  };
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  image: string;
  alt: string;
  tags: string[];
  keyTakeaways: string[];
  sections: BlogSection[];
  relatedSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'sub-second-core-web-vitals-seo-dominance',
    title: 'Sub-Second Core Web Vitals: Engineering High-Volume SEO for Page-One Dominance',
    subtitle: 'How technical speed optimizations, edge SSR, and layout stability turn Google search rankings into sustained commercial revenue.',
    excerpt: 'A deep dive into sub-second LCP, minimal TTFB, and zero-CLS layouts that keep competitive enterprise keywords ranking on page one through major Google algorithm updates.',
    category: 'Technical SEO',
    date: 'Oct 28, 2026',
    readTime: '8 min read',
    author: {
      name: 'Admin',
      role: 'Engineering Lead',
      avatarInitials: 'AD',
    },
    image: '/images/blogs/blog-07-core-web-vitals-speed.webp',
    alt: 'Sub-second Core Web Vitals and Technical SEO architecture dashboard',
    tags: ['Core Web Vitals', 'Technical SEO', 'PageSpeed', 'Next.js', 'Google Rankings'],
    keyTakeaways: [
      'Largest Contentful Paint (LCP) under 1.2s correlates with a 38% increase in organic crawl budget allocation.',
      'Cumulative Layout Shift (CLS) can be reduced to 0.00 by enforcing aspect ratios on media containers and avoiding dynamic ad injections.',
      'Interaction to Next Paint (INP) replaced FID, requiring all main-thread JavaScript tasks to stay below 50ms.',
      'Edge-rendered server components reduce Time to First Byte (TTFB) to sub-120ms globally across Indian telecom networks.',
    ],
    sections: [
      {
        id: 'the-speed-equation',
        title: 'The Real Impact of Speed on Organic SERP Rankings',
        paragraphs: [
          'In competitive search verticals—particularly manufacturing, industrial machinery, and B2B SaaS—traditional keyword density and backlinks are no longer enough to guarantee top rankings. Since Google rolled out the Page Experience update and replaced FID with Interaction to Next Paint (INP), technical execution has become the baseline gatekeeper.',
          'When two websites possess comparable domain authority and backlink profiles, Google’s indexing systems consistently favor the platform that serves content with minimal resource overhead and zero render-blocking lag.',
        ],
        callout: {
          type: 'stat',
          label: 'Google Research Benchmark',
          text: 'Pages that satisfy all three Core Web Vitals thresholds experience a 24% lower abandonment rate and an average 18% lift in organic conversion value.',
        },
      },
      {
        id: 'lcp-optimization',
        title: 'Cracking Sub-Second LCP on Complex Enterprise Sites',
        paragraphs: [
          'Largest Contentful Paint measures when the main content of a viewport is fully rendered. For most landing pages, this is either a hero headline or a high-impact product visual.',
          'To achieve sub-second LCP, our engineering pod eliminates three common bottlenecks: unoptimized image formats, late-discovered fonts, and bloated third-party analytics bundles.',
        ],
        bullets: [
          'Modern Next-Gen Image Formats: Transcoding all legacy JPEG/PNG assets into WebP or AVIF with explicit width and height attributes prevents layout recalculation.',
          'Self-Hosted Font Subsetting: Preloading only the Latin glyph subsets via font-display: swap prevents FOIT (Flash of Invisible Text) and saves 300ms of critical render blocking.',
          'Priority Preload Flags: Setting fetchpriority="high" on the single hero image ensures the browser prioritizes network packets before lower-tier assets.',
        ],
      },
      {
        id: 'inp-and-cls',
        title: 'Taming Interaction to Next Paint (INP) & Zero CLS',
        paragraphs: [
          'Layout shifts destroy user trust and severely punish mobile rankings. Every dynamic UI component—such as accordion filters, client logos marquee, or product carousels—must be given reserved aspect-ratio geometry before data loads.',
          'Furthermore, to keep INP under 50ms, heavy JavaScript processing (such as real-time search filtering or CRM forms) is offloaded to Web Workers or scheduled using requestIdleCallback.',
        ],
        callout: {
          type: 'tip',
          label: 'Engineering Rule',
          text: 'Never insert dynamic promotional banners or pop-ins above existing DOM elements. Always append to dedicated fixed wrappers to prevent shift penalties.',
        },
      },
      {
        id: 'conclusion',
        title: 'The Continuous Optimization Playbook',
        paragraphs: [
          'Core Web Vitals are not a one-time audit checklist; they require continuous monitoring through real-user measurement (RUM) tools and synthetic Lighthouse CI pipelines. When your platform is fast by design, every marketing dollar spent on SEO generates compound returns.',
        ],
      },
    ],
    relatedSlugs: [
      'nextjs-15-headless-web-performance',
      'b2b-landing-page-ux-cro-framework',
      'google-guarantee-local-seo-map-pack',
    ],
  },
  {
    slug: 'custom-enterprise-crm-workflow-automation',
    title: 'Replacing Spreadsheets with Custom CRM: Saving 12+ Hours Per Team Weekly',
    subtitle: 'Why growing industrial leaders outgrow Excel and SaaS per-seat taxes, and how bespoke automated pipelines unify sales, dispatch, and accounting.',
    excerpt: 'How modern manufacturing leaders unify sales pipelines, approval matrices, and live Tally & WhatsApp synchronization without paying per-seat SaaS taxes.',
    category: 'Enterprise Software',
    date: 'Oct 24, 2026',
    readTime: '7 min read',
    author: {
      name: 'Admin',
      role: 'Systems Architecture',
      avatarInitials: 'AD',
    },
    image: '/images/blogs/blog-03-enterprise-crm-erp.webp',
    alt: 'Custom Enterprise CRM and ERP Workflow Automation Dashboard',
    tags: ['Custom CRM', 'ERP', 'Automation', 'Enterprise Software', 'Workflow'],
    keyTakeaways: [
      'Off-the-shelf SaaS charges hefty per-user monthly subscription fees while forcing enterprises into rigid, generic workflows.',
      'Custom ERP/CRM integrations with Tally, GST portals, and WhatsApp automate 80% of repetitive operational manual entry.',
      'Role-based permissions prevent sales rep leakage and safeguard proprietary pricing formulas and client databases.',
      'An enterprise custom portal pays for its entire development cost within 6 to 9 months through direct license savings.',
    ],
    sections: [
      {
        id: 'the-spreadsheet-trap',
        title: 'The Hidden Cost of "Spreadsheet Operations"',
        paragraphs: [
          'In hundreds of mid-market enterprises across India, multi-million-dollar sales pipelines still run on disconnected Excel sheets, Google Drive folders, and personal WhatsApp messages. While spreadsheets are frictionless to start, they quickly create invisible operational friction as transaction volumes grow.',
          'Quotes get duplicated, inventory numbers drift out of sync with dispatch, and when a senior sales manager leaves the firm, their entire client history leaves with them.',
        ],
        callout: {
          type: 'stat',
          label: 'Operational Audit',
          text: 'Sales teams spend up to 34% of their active working hours manually formatting quotes, cross-referencing stock lists, and reconciling payment receipts.',
        },
      },
      {
        id: 'bespoke-advantage',
        title: 'Why Off-The-Shelf SaaS Often Fails Industrial Businesses',
        paragraphs: [
          'Popular global CRM platforms charge between ₹4,000 to ₹12,000 per user per month. For a 50-person commercial team, that translates to over ₹30,00,000 annually—indefinitely. Worse still, these platforms are designed for Silicon Valley tech sales, not the multi-tier dealer networks, credit terms, and GST invoicing required in Indian commerce.',
          'A bespoke enterprise software solution is built around your exact commercial logic. You own the source code, deploy it on your private cloud, and pay zero recurring seat fees.',
        ],
        bullets: [
          'Native Tally Prime & ERP Sync: Automatically generates pro-forma invoices and verifies ledger credit balances before approving dispatches.',
          'WhatsApp Business Cloud API: Sends instant quotation PDFs, order tracking, and delivery notifications directly to client phones.',
          'Granular Role-Based Access: Regional managers view only their assigned territories, while senior directors access consolidated real-time P&L analytics.',
        ],
      },
      {
        id: 'roi-timeline',
        title: 'Measurable Financial Return in Months, Not Years',
        paragraphs: [
          'By eliminating manual re-entry errors and speeding up quotation turnaround from 24 hours to 3 minutes, client win rates increase dramatically. Your team focuses on high-value client relationships rather than administrative paperwork.',
        ],
      },
    ],
    relatedSlugs: [
      'customer-data-platform-attribution-pipelines',
      'b2b-landing-page-ux-cro-framework',
      'nextjs-15-headless-web-performance',
    ],
  },
  {
    slug: 'nextjs-15-headless-web-performance',
    title: 'Next.js 15, Server Components & Edge Caching: The Modern Web Blueprint',
    subtitle: 'Leaving monolithic legacy CMS stacks behind: why server components, edge rendering, and sub-second delivery drive 3× higher engagement.',
    excerpt: 'Sub-second server components, edge rendering, and seamless headless API integrations: why modern web applications deliver 3× higher engagement than WordPress and Drupal.',
    category: 'Web Engineering',
    date: 'Oct 20, 2026',
    readTime: '10 min read',
    author: {
      name: 'Admin',
      role: 'Full-Stack Architecture',
      avatarInitials: 'AD',
    },
    image: '/images/blogs/blog-01-web-architecture.webp',
    alt: 'Next.js 15 Server Components and Edge Caching Architecture',
    tags: ['Next.js 15', 'React', 'Headless CMS', 'Edge Computing', 'Performance'],
    keyTakeaways: [
      'React Server Components (RSC) eliminate heavy client-side JavaScript bundles, streaming pre-rendered HTML straight to the browser.',
      'Edge CDN caching brings server responses physically closer to Indian users, dropping TTFB to under 80ms.',
      'Headless architectures decouple backend business logic from frontend design, allowing rapid redesigns without database rebuilds.',
      'Zero-compromise security: eliminating PHP backend vulnerabilities prevents SQL injection and malware exploitation.',
    ],
    sections: [
      {
        id: 'monolith-vs-headless',
        title: 'Why Monolithic Platforms Are Holding Fast-Growing Brands Back',
        paragraphs: [
          'For years, platforms like WordPress, Magento, and Drupal were the default choices for corporate web development. However, as web standards evolved and mobile devices became the primary touchpoint, the architectural limitations of traditional LAMP stacks became apparent.',
          'Every page view triggers multiple SQL database queries, bloated PHP execution, and dozens of third-party plugins competing for main-thread CPU time. The result is slow page loads, brittle update cycles, and frequent security vulnerabilities.',
        ],
      },
      {
        id: 'nextjs-paradigm',
        title: 'The Next.js 15 Architecture: Streamed HTML & Edge Logic',
        paragraphs: [
          'With Next.js 15 and React Server Components, the server renders the entire component tree and delivers lightweight HTML directly. The client only downloads the JavaScript required for interactive UI elements—such as interactive calculators, custom form modals, and theme selectors.',
        ],
        bullets: [
          'Static Page Pre-generation: High-traffic marketing pages are pre-built at compile time and served from distributed Edge CDNs worldwide.',
          'Dynamic Data Streaming: High-load dynamic blocks stream in seamlessly using React Suspense, ensuring the user sees the page layout instantly.',
          'Automated Image & Font Optimization: Zero-config WebP conversion and zero-layout-shift font injection built right into the framework.',
        ],
      },
    ],
    relatedSlugs: [
      'sub-second-core-web-vitals-seo-dominance',
      'b2b-landing-page-ux-cro-framework',
      'custom-enterprise-crm-workflow-automation',
    ],
  },
  {
    slug: 'b2b-landing-page-ux-cro-framework',
    title: 'B2B Landing Page UX: The 7 Psychological Triggers That Double Inquiries',
    subtitle: 'From click heatmaps to dynamic content personalization: the design systems, micro-interactions, and cognitive triggers that turn industrial traffic into qualified inquiries.',
    excerpt: 'From click heatmaps to dynamic content personalization: the design systems, micro-interactions, and psychological triggers that turn industrial traffic into qualified inquiries.',
    category: 'UX & CRO',
    date: 'Oct 14, 2026',
    readTime: '6 min read',
    author: {
      name: 'Admin',
      role: 'Product Design Lead',
      avatarInitials: 'AD',
    },
    image: '/images/blogs/blog-06-accessible-ui-design.webp',
    alt: 'B2B Landing Page UX and Conversion Rate Optimization Heatmap',
    tags: ['CRO', 'UX Design', 'Landing Pages', 'B2B Marketing', 'Conversion'],
    keyTakeaways: [
      'Commercial decision makers scan in an F-pattern; placing proof points above the digital fold lifts engagement by 47%.',
      'Multi-step progressive profiling forms capture 62% more qualified leads than intimidating 10-field single forms.',
      'Contextual video snippets and facility virtual tours eliminate buyer hesitations during supplier evaluation.',
      'Explicit response SLAs ("We reply within 15 minutes during business hours") dramatically increase form completion.',
    ],
    sections: [
      {
        id: 'the-b2b-buyer-mindset',
        title: 'Understanding the High-Stakes Commercial Buyer',
        paragraphs: [
          'Unlike consumer impulse shopping, a B2B procurement director or corporate VP is not buying with an emotional impulse—they are managing risk. If they recommend the wrong software partner, agency, or manufacturing supplier, their career reputation is on the line.',
          'Effective landing page design is not about decorative animations; it is about systematically answering every conscious and subconscious objection before the user exits the tab.',
        ],
      },
      {
        id: 'core-triggers',
        title: 'The 7 Essential Elements of High-Converting B2B Pages',
        paragraphs: [
          'Over hundreds of user testing sessions and multivariate experiments, our team identified seven high-impact design patterns:',
        ],
        bullets: [
          'Specific, Quantifiable Value Propositions: Replace vague buzzwords with concrete numbers (e.g., "Reduce cycle times by 35% in 60 days").',
          'Verified Client Badges: High-contrast client marquees showcasing recognized enterprise logos validate stability immediately.',
          'Progressive Frictionless Form Steps: Start by asking for the company industry or project type before requesting sensitive contact information.',
          'Direct Access to Senior Leadership: Highlighting director oversight reassures buyers that their account will receive executive priority.',
        ],
      },
    ],
    relatedSlugs: [
      'addressable-geofencing-ppc-lead-generation',
      'corporate-film-making-industrial-storytelling',
      'sub-second-core-web-vitals-seo-dominance',
    ],
  },
  {
    slug: 'addressable-geofencing-ppc-lead-generation',
    title: 'Addressable Geofencing & Precision B2B PPC: Converting Trade Show Crowds',
    subtitle: 'How 1,000 sq ft location fences around industry trade shows and corporate parks deliver precision pipeline acceleration with verifiable return on ad spend.',
    excerpt: 'How 1,000 sq ft location fences around industry trade shows and corporate parks deliver precision pipeline acceleration with verifiable return on ad spend (ROAS).',
    category: 'Paid Media & Growth',
    date: 'Oct 8, 2026',
    readTime: '9 min read',
    author: {
      name: 'Admin',
      role: 'Growth Marketing Lead',
      avatarInitials: 'AD',
    },
    image: '/images/blogs/blog-05-b2b-digital-marketing.webp',
    alt: 'Addressable Geofencing and Precision PPC Campaign Mapping',
    tags: ['PPC', 'Geofencing', 'Paid Ads', 'B2B Growth', 'Lead Generation'],
    keyTakeaways: [
      'Virtual geo-fences drawn around exhibition centres target attendee mobile IDs with 99.4% location precision.',
      'Cross-device retargeting follows verified event visitors home and back to their corporate offices for 30 consecutive days.',
      'Custom account-based advertising lists exclude tire-kickers and focus budget strictly on procurement decision makers.',
      'Verifiable offline walk-in and digital enquiry attribution confirms direct return on investment for trade budgets.',
    ],
    sections: [
      {
        id: 'the-trade-show-dilemma',
        title: 'Maximizing Value Beyond the Exhibition Booth',
        paragraphs: [
          'Companies spend tens of lakhs every year on trade show booth construction, travel, and logistics at venues like India Expo Centre in Greater Noida or Pragati Maidan in Delhi. Yet, booth staff can only speak with a tiny fraction of the thousands of industry delegates passing through the hall.',
          'Addressable geofencing allows enterprises to create an invisible digital polygon around the exhibition grounds, delivering programmatic video ads and high-converting search promos to every attendee’s smartphone.',
        ],
      },
      {
        id: 'the-retargeting-pipeline',
        title: 'The 30-Day Omnichannel Nurture Sequence',
        paragraphs: [
          'Once a mobile device enters the geofenced perimeter, its advertising identifier is added to a high-intent audience segment. For the next 30 days, as delegates research suppliers and evaluate vendors, your brand’s case studies, product videos, and testimonials appear across Forbes, LinkedIn, YouTube, and premium news networks.',
        ],
      },
    ],
    relatedSlugs: [
      'corporate-film-making-industrial-storytelling',
      'b2b-landing-page-ux-cro-framework',
      'customer-data-platform-attribution-pipelines',
    ],
  },
  {
    slug: 'corporate-film-making-industrial-storytelling',
    title: 'Industrial Storytelling: Turning High-Tech Manufacturing into Cinematic Trust',
    subtitle: 'A camera on a tripod is not enough. How cinematic factory storytelling, drone cinematography, and technical precision establish unshakeable buyer trust.',
    excerpt: 'A camera on a tripod is not enough. How cinematic factory storytelling, real-time drone shots, and technical precision establish unshakeable buyer trust in high-value procurement.',
    category: 'Media Production',
    date: 'Sep 30, 2026',
    readTime: '5 min read',
    author: {
      name: 'Admin',
      role: 'Cinematography Director',
      avatarInitials: 'AD',
    },
    image: '/images/blogs/blog-04-corporate-film-production.webp',
    alt: 'Cinematic Industrial Corporate Film Production on Factory Floor',
    tags: ['Corporate Film', 'Video Production', 'Industrial Cinema', 'Storytelling', 'Branding'],
    keyTakeaways: [
      'High-resolution cinematic factory tours replace expensive client travel, accelerating international supplier verification.',
      'Drone fly-throughs and macro 4K lens captures reveal manufacturing tolerances and quality control rigor.',
      'Lighting around heavy machinery requires specialized industrial cinema techniques to capture steel, brass, and robotic movement.',
      'Embedding video across sales decks and website landing pages lifts conversion rates by up to 86%.',
    ],
    sections: [
      {
        id: 'the-visual-gap',
        title: 'Why Standard Promotional Videos Fail Industrial Leaders',
        paragraphs: [
          'Too many corporate videos resemble dry corporate slideshows with royalty-free music and static boardroom shots. For an exporter competing against German, Japanese, or American manufacturers, your digital media must reflect the same precision and technological sophistication found on your factory floor.',
          'True industrial cinema captures the sensory experience of manufacturing: the orange glow of induction furnaces, the sub-micron accuracy of 5-axis CNC machining, and the rigorous quality checks of cleanroom assembly lines.',
        ],
      },
      {
        id: 'production-methodology',
        title: 'Filming on an Active Shop Floor Without Halting Output',
        paragraphs: [
          'A factory is a commercial asset that cannot stop running for a video shoot. Our production crew uses compact cinema cameras, wireless monitor links, and custom magnetic rigging that enables rapid repositioning between shifts without interrupting factory staff or compromising safety standards.',
        ],
      },
    ],
    relatedSlugs: [
      'b2b-landing-page-ux-cro-framework',
      'addressable-geofencing-ppc-lead-generation',
      'custom-enterprise-crm-workflow-automation',
    ],
  },
  {
    slug: 'customer-data-platform-attribution-pipelines',
    title: 'Real-Time Customer Data Platforms (CDP): Solving Multi-Touch B2B Attribution',
    subtitle: 'Connecting first-party customer profiles, dynamic call attribution, and ETL data streams so sales pods always know the true commercial intent behind every touchpoint.',
    excerpt: 'Connecting first-party customer profiles, dynamic call attribution, and ETL data streams so sales pods always know the true commercial intent behind every touchpoint.',
    category: 'Data & Revenue',
    date: 'Sep 22, 2026',
    readTime: '8 min read',
    author: {
      name: 'Admin',
      role: 'Data Infrastructure',
      avatarInitials: 'AD',
    },
    image: '/images/blogs/blog-02-seo-topical-authority.webp',
    alt: 'Customer Data Platform and Real-time Attribution Pipeline Architecture',
    tags: ['CDP', 'Analytics', 'Attribution', 'Data Engineering', 'Revenue'],
    keyTakeaways: [
      'B2B customer journeys often span 6 to 18 touchpoints before a phone call or formal tender inquiry occurs.',
      'First-party server-side tracking bypasses iOS browser privacy blocks and third-party cookie phase-outs.',
      'Dynamic number insertion (DNI) links offline phone conversations directly back to the originating keyword and campaign.',
      'Sales representatives receive enriched lead intelligence before picking up the phone to close high-ticket contracts.',
    ],
    sections: [
      {
        id: 'attribution-chaos',
        title: 'The Multi-Touch Blindspot in High-Value Sales',
        paragraphs: [
          'When an enterprise closes a ₹50,00,000 contract, which channel should receive the credit? Was it the initial organic search article they read three months ago, the trade show geofencing campaign, the email newsletter, or the final direct visit?',
          'Without a unified Customer Data Platform, marketing and sales teams argue over vanity metrics while budget is misallocated to underperforming ad channels.',
        ],
      },
      {
        id: 'first-party-cdp',
        title: 'Building a Resilient First-Party Data Architecture',
        paragraphs: [
          'By streaming event data directly from web servers to a private data warehouse, enterprises build complete, permanent customer profiles that are never subject to third-party cookie restrictions or browser tracking limitations.',
        ],
      },
    ],
    relatedSlugs: [
      'custom-enterprise-crm-workflow-automation',
      'sub-second-core-web-vitals-seo-dominance',
      'addressable-geofencing-ppc-lead-generation',
    ],
  },
  {
    slug: 'google-guarantee-local-seo-map-pack',
    title: 'Google Guarantee & Local SEO: Dominating Multi-Location Map Packs in NCR',
    subtitle: 'Mastering proximity relevance, sentiment review acceleration, and verified GBP entity signals to capture the 46% of all Google searches that carry high local buying intent.',
    excerpt: 'Mastering proximity relevance, sentiment review acceleration, and verified GBP entity signals to capture the 46% of all Google searches that carry high local buying intent.',
    category: 'Local Search',
    date: 'Sep 12, 2026',
    readTime: '6 min read',
    author: {
      name: 'Admin',
      role: 'Local SEO Strategy',
      avatarInitials: 'AD',
    },
    image: '/images/blogs/blog-08-executive-broadcast-news.webp',
    alt: 'Google Guarantee and Multi-location Map Pack Optimization Strategy',
    tags: ['Local SEO', 'Google Maps', 'Google Guarantee', 'NCR Business', 'Reputation'],
    keyTakeaways: [
      '46% of all Google searches have local intent; the top 3 Map Pack listings capture over 68% of local mobile clicks.',
      'Google Guarantee badges build instant trust and protect campaigns with official Google-backed customer verification.',
      'Automated review request workflows lift verified Google reviews by 4.2× within 90 days.',
      'Consistent NAP (Name, Address, Phone) citations across local directories establish bulletproof entity authority.',
    ],
    sections: [
      {
        id: 'map-pack-dominance',
        title: 'Why The Local Map 3-Pack Is the Most Valuable Real Estate on Google',
        paragraphs: [
          'For businesses serving commercial or regional clients in Noida, Delhi, Gurugram, and the wider NCR, the Map Pack appears at the very top of mobile search results, above standard organic listings. Capturing one of the top three spots guarantees an immediate, daily stream of inbound calls and directions.',
        ],
      },
      {
        id: 'optimization-pillars',
        title: 'The Three Pillars of Map Pack Algorithm Ranking',
        paragraphs: [
          'Google’s local ranking algorithm weighs three primary factors: Relevance, Distance, and Prominence.',
        ],
        bullets: [
          'Relevance: Complete, exact GBP categorization, service menu attributes, and localized landing pages with Schema.org LocalBusiness markup.',
          'Prominence: High review velocity, steady review response rates, and local press mentions.',
          'Google Guarantee Verification: Completing background checks and license verification grants the green shield badge, boosting click-through rates by up to 30%.',
        ],
      },
    ],
    relatedSlugs: [
      'sub-second-core-web-vitals-seo-dominance',
      'b2b-landing-page-ux-cro-framework',
      'addressable-geofencing-ppc-lead-generation',
    ],
  },
];

export function getAllBlogs(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedBlogs(currentSlug: string, count: number = 3): BlogPost[] {
  const current = getBlogBySlug(currentSlug);
  if (!current) return BLOG_POSTS.slice(0, count);

  const related = BLOG_POSTS.filter((p) => current.relatedSlugs.includes(p.slug));
  if (related.length >= count) return related.slice(0, count);

  const others = BLOG_POSTS.filter((p) => p.slug !== currentSlug && !related.some((r) => r.slug === p.slug));
  return [...related, ...others].slice(0, count);
}

export function getBlogCategories(): string[] {
  const cats = new Set<string>();
  BLOG_POSTS.forEach((p) => cats.add(p.category));
  return ['All', ...Array.from(cats)];
}
