/**
 * Arka Technovation Content & Case Study Data Model
 * Sector 62, Noida, Delhi NCR, India
 */
export const PILLARS_DATA = [
  {
    numeral: 'I',
    text: 'We engineer digital dominance.',
    action: 'EXPLORE CAPABILITIES',
    description: 'At the convergence of high-craft software design, algorithmic search intelligence, performance marketing, and corporate cinema.',
    slug: 'software-design'
  },
  {
    numeral: 'II',
    text: 'Software Design & Engineering.',
    action: 'DISCOVER SOFTWARE CRAFT',
    description: 'Bespoke enterprise cloud platforms, 120fps fluid UI/UX ecosystems, and resilient native mobile applications built for global scale.',
    slug: 'software-design'
  },
  {
    numeral: 'III',
    text: 'SEO & Search Intelligence.',
    action: 'COMMAND SEARCH ALGORITHMS',
    description: 'Mathematical search engine authority, programmatic SEO architectures, and Generative Engine Optimization (GEO) commanding AI citations.',
    slug: 'seo'
  },
  {
    numeral: 'IV',
    text: 'Digital Marketing & Growth.',
    action: 'VIEW GROWTH ENGINES',
    description: 'Data-driven omnichannel acquisition, multi-touch attribution, and conversion funnels that transform attention into predictable enterprise revenue.',
    slug: 'digital-marketing'
  },
  {
    numeral: 'V',
    text: 'Corporate Video Generation.',
    action: 'EXPERIENCE CINEMA',
    description: 'Hollywood-grade 8K corporate documentaries, AI synthetic video pipelines, and photorealistic 3D motion graphics that inspire deep belief.',
    slug: 'corporate-video'
  },
];

export const INDUSTRIES_DATA = [
  {
    id: 'software',
    name: 'Enterprise SaaS & Cloud',
    subtitle: 'Zero Latency, Scalable, Secure',
    description: 'We architect cloud-native SaaS platforms that handle millions of real-time transactions with sub-50ms latency. Strict typing, automated CI/CD, and multi-tenant security.',
    deliverables: ['Custom Web Applications', 'Next.js & React Architectures', 'Microservices & Edge APIs', 'Native iOS & Android Apps'],
    stat: '1,200,000+ Daily Active Users',
    image: '/assets/software-design-collage.jpg',
    project: {
      title: 'AuraCloud OS',
      tagline: 'High-Concurrency Enterprise Workflow Engine',
      image: '/assets/software-design-collage.jpg',
    },
  },
  {
    id: 'seo',
    name: 'Search Intelligence & GEO',
    subtitle: 'Page 1 Domination, AI Citations',
    description: 'We position ambitious enterprises at the absolute apex of Google, ChatGPT, and Perplexity through technical schema graphs and programmatic organic search engines.',
    deliverables: ['Generative Engine Optimization (GEO)', 'Core Web Vitals Perfection', 'Programmatic SEO Engines', 'Entity Authority Building'],
    stat: '+420% Average Organic Traffic Surge',
    image: '/assets/seo-intelligence-collage.jpg',
    project: {
      title: 'SearchGraph AI',
      tagline: 'Semantic Knowledge Graph & Search Engine Authority',
      image: '/assets/seo-intelligence-collage.jpg',
    },
  },
  {
    id: 'marketing',
    name: 'Omnichannel Performance Marketing',
    subtitle: 'High ROAS, Precision Funnels',
    description: 'We turn paid media into predictable revenue engines. From Google Search & YouTube Ads to Meta, LinkedIn B2B, and automated conversion rate optimization.',
    deliverables: ['Paid Search & Social Acquisition', 'Multi-Touch Attribution', 'CRO & Funnel Engineering', 'B2B Account-Based Marketing'],
    stat: '5.8x Blended ROAS • ₹45Cr+ Revenue Generated',
    image: '/assets/marketing-growth-collage.jpg',
    project: {
      title: 'Velocity Growth Funnel',
      tagline: 'Full-Funnel Omnichannel Customer Acquisition',
      image: '/assets/marketing-growth-collage.jpg',
    },
  },
  {
    id: 'video',
    name: 'Corporate Video & AI Motion',
    subtitle: 'Cinematic Storytelling, Synthetic Media',
    description: 'We produce corporate brand films and AI-generated video campaigns that captivate executive audiences, elevate brand equity, and multiply conversion rates.',
    deliverables: ['8K Corporate Documentaries', 'AI Synthetic Video Pipelines', '3D Product Motion Graphics', 'Short-Form Performance Ad Spots'],
    stat: '50M+ High-Retention Video Views Delivered',
    image: '/assets/corporate-video-collage.jpg',
    project: {
      title: 'The Arka Cinema Reel',
      tagline: 'Hollywood Visual Direction Meets Synthetic AI Media',
      image: '/assets/corporate-video-collage.jpg',
    },
  },
];

export const PHILOSOPHY_SECTIONS = {
  'software-design': {
    tag: 'Product Line 01 // Digital Architecture',
    title: 'Software Design.',
    body: 'Before an empire can stand, its digital bedrock must be unbreakable. At Arka Technovation, we treat software as high craft. We engineer user interfaces that feel instinctive to navigate and cloud architectures that never flinch under enterprise traffic.',
    pillars: [
      { title: 'Human-Centered UI/UX', desc: 'Ergonomic layouts, 120fps fluid micro-interactions, and comprehensive design token libraries.' },
      { title: 'Cloud & SaaS Engineering', desc: 'Sub-50ms API endpoints, zero technical debt, serverless edge compute, and automated CI/CD.' },
      { title: 'Native Mobile Ecosystems', desc: 'Swift, Kotlin, and React Native apps engineered for maximum touch ergonomics and offline resilience.' },
    ],
  },
  seo: {
    tag: 'Product Line 02 // Search Intelligence',
    title: 'SEO & Search Intel.',
    body: 'Being found is not luck; it is mathematical inevitability. Search in 2026 is no longer just ten blue links. It is AI model synthesis, semantic entity graphs, and algorithmic authority. We position your enterprise where decision-makers look first.',
    pillars: [
      { title: 'Generative Engine Optimization (GEO)', desc: 'Structuring data so ChatGPT, Perplexity, and Google AI Overviews cite you as the definitive authority.' },
      { title: 'Technical Architecture & Speed', desc: '100/100 Core Web Vitals, serverless edge rendering, crawl budget maximization, and JSON-LD schema graphs.' },
      { title: 'Programmatic SEO Scale', desc: 'Deploying high-intent landing page engines that capture thousands of long-tail commercial queries.' },
    ],
  },
  'digital-marketing': {
    tag: 'Product Line 03 // Growth Engines',
    title: 'Digital Marketing.',
    body: 'A masterpiece hidden in shadows changes nothing. We ignite irresistible commercial momentum through full-funnel paid media, behavioral psychology, and conversion architectures that transform attention into enterprise revenue.',
    pillars: [
      { title: 'Omnichannel Performance Media', desc: 'Multi-tiered campaign orchestration across Google Ads, YouTube, Meta, and LinkedIn B2B.' },
      { title: 'Conversion Rate Optimization (CRO)', desc: 'Behavioral heatmaps, multivariate landing page experiments, and frictionless checkout flows.' },
      { title: 'Attribution & Unit Economics', desc: 'Server-side CAPI tracking, custom LTV models, and real-time executive revenue dashboards.' },
    ],
  },
  'corporate-video': {
    tag: 'Product Line 04 // Visual Cinema',
    title: 'Corporate Video.',
    body: 'Logic validates decisions, but emotion commands belief. We blend Hollywood-grade cinema camera direction with next-generation AI video generation (Runway Gen-3, Sora) and 3D kinetic typography to create corporate narratives that linger forever.',
    pillars: [
      { title: 'Cinematic Brand Documentaries', desc: '8K anamorphic cinematography showcasing leadership, enterprise facilities, and innovation culture.' },
      { title: 'AI Synthetic Video Pipelines', desc: 'Rapid generative video variants, AI voice synthesis, and multilingual video localization at scale.' },
      { title: '3D Product & Motion Design', desc: 'Hyper-photorealistic 3D product renders, spatial animations, and kinetic typography.' },
    ],
  },
  manifesto: {
    tag: 'Corporate Creed',
    title: 'Manifesto',
    body: 'In an era of disposable templates and algorithmic noise, we reject the ordinary. Founded and led by Kranti Parashar, Arka Technovation builds on a proven execution heritage of 6,250+ enterprise project deliveries. We believe technology should evoke wonder, command authority, and generate exponential commercial value.',
    pillars: [
      { title: 'Code as Craft', desc: 'Zero bloat, strict craftsmanship, and mathematical elegance in every line of code.' },
      { title: 'Algorithms Demand Authority', desc: 'We do not chase trends; we build undeniable structural market moats.' },
      { title: 'Extreme Accountability', desc: 'We treat our clients’ business metrics and capital as if our own name is on the line.' },
    ],
  },
  studio: {
    tag: 'Identity & Craft // Noida, Delhi NCR',
    title: 'The Studio',
    body: 'Operating from our innovation studio in Noida, Delhi NCR. Led by CEO Kranti Parashar, Arka Technovation brings together elite software architects, SEO intelligence specialists, growth marketers, and cinema directors with over 500+ projects delivered across India, North America, Europe, and the Middle East.',
    pillars: [
      { title: 'Noida Innovation Hub', desc: 'Premier technology and media studio in Noida, Delhi NCR.' },
      { title: 'Integrated Teams', desc: 'Full-stack software engineers, 3D motion designers, performance marketers, and cinema directors in one room.' },
      { title: 'Proven Track Record', desc: 'Over 500+ delivered projects and 100+ verified client testimonials.' },
    ],
  },
};
