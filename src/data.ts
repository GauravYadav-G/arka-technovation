export const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

/* ── Hero deck ───────────────────────────────────── */
export const PILLARS = [
  { key: 'claim', kicker: 'Arka Technovation', text: 'We think, design, develop and grow world-class digital products for forward-thinking brands.' },
  { key: 'think', kicker: 'Pillar I — Think', text: 'Think. The right product, before it is built. Research, data and user insight become one clear, validated direction.' },
  { key: 'design', kicker: 'Pillar II — Design', text: 'Design. An identity people recognise, trust and enjoy every day — across brand, interface and film.' },
  { key: 'develop', kicker: 'Pillar III — Develop', text: 'Develop. Websites, mobile apps and custom software engineered to scale and perform at any size.' },
  { key: 'grow', kicker: 'Pillar IV — Grow', text: 'Grow. SEO, performance media, social and content — one engine, measured and reported every single month.' },
  { key: 'next', kicker: 'The next floor', text: 'A decade of craft. 1,500+ brands. A new name, founded by Kranti. Are you the next?' },
];

/* ── Services ────────────────────────────────────── */
export type Offering = {
  code: string; title: string; short: string; category: 'Growth' | 'Build' | 'Story' | 'Design';
  desc: string; items: string[]; img: string; stat: string; statLabel: string; brief: string;
};

export const OFFERINGS: Offering[] = [
  { code: 'F1', title: 'Digital Marketing', short: 'Full-funnel growth across search, social and display.', category: 'Growth', brief: 'Digital Marketing', stat: '+212%', statLabel: 'Average lead growth',
    img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'We run marketing as one connected engine — media, creative and measurement — so every channel feeds the next instead of competing for credit. Strategy, execution and transparent reporting from one senior team.',
    items: ['Growth strategy & channel planning', 'Google & Meta performance media', 'Landing pages & conversion optimisation', 'Marketing automation & lead nurture', 'Monthly reporting & attribution'] },
  { code: 'F2', title: 'Website Development', short: 'Corporate sites, e-commerce and web apps that convert.', category: 'Build', brief: 'Website', stat: '<1.8s', statLabel: 'Average load time',
    img: 'https://images.pexels.com/photos/7651919/pexels-photo-7651919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Creative, fast and search-ready websites — designed to be walked through, not scrolled past. Built in React, Next.js, PHP or your CMS of choice, and handed over with the source code.',
    items: ['Corporate & brand websites', 'E-commerce and headless stores', 'React / Next.js / CMS builds', 'UI / UX & design systems', 'Hosting, maintenance & iteration'] },
  { code: 'F3', title: 'Corporate Video Making', short: 'Brand films, ad films and product shoots, script to screen.', category: 'Story', brief: 'Film / Video', stat: '2.1M', statLabel: 'Views on one B2B campaign',
    img: 'https://images.pexels.com/photos/6883811/pexels-photo-6883811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Our in-house production crew turns factories, products and people into films worth watching. Concept, scripting, shoot, edit, grade and sound — under one roof, on one timeline.',
    items: ['Corporate & brand films', 'Ad films and TVCs', 'Product & industrial shoots', 'Social reels and shorts', 'Motion graphics and editing'] },
  { code: 'F4', title: 'Software & Mobile Apps', short: 'CRM, ERP, SaaS and apps engineered to scale.', category: 'Build', brief: 'Software / CRM', stat: '12h', statLabel: 'Saved per team, weekly',
    img: 'https://images.pexels.com/photos/1181305/pexels-photo-1181305.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Custom software built around how your business already works — then handed over with the code. Web platforms and iOS / Android apps used by thousands, engineered for performance and security.',
    items: ['CRM & ERP platforms', 'iOS and Android applications', 'SaaS products & customer portals', 'Cloud, APIs & integrations', 'Support, iteration & training'] },
  { code: 'F5', title: 'SEO & Content', short: 'Technical SEO, editorial and authority that compounds.', category: 'Growth', brief: 'SEO', stat: '+150%', statLabel: 'Organic traffic in 6 months',
    img: 'https://images.pexels.com/photos/8485591/pexels-photo-8485591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Search engines reward clarity. We fix the technical foundations, build content around real intent and earn authority — so rankings and traffic keep improving long after the campaign ends.',
    items: ['Technical & on-page SEO', 'Local SEO and Google Business', 'Content marketing & editorial', 'Link building and digital PR', 'Rank, traffic & revenue reporting'] },
  { code: 'F6', title: 'Brand & Graphic Design', short: 'Identity, campaigns and packaging people remember.', category: 'Design', brief: 'Branding', stat: '600+', statLabel: 'Brand assets shipped yearly',
    img: 'https://images.pexels.com/photos/4623358/pexels-photo-4623358.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'A brand is a system, not a logo. We build identities that hold up across a hoarding, a carton, a website and a film — then hand your team the guidelines to keep it consistent.',
    items: ['Brand identity & positioning', 'Logo systems & brand guidelines', 'Packaging and print design', 'Campaign and advertising creative', 'Publication and editorial design'] },
  { code: 'F7', title: 'Social Media Marketing', short: 'Content and community that build recognition.', category: 'Growth', brief: 'Digital Marketing', stat: '3.4×', statLabel: 'Engagement lift',
    img: 'https://images.pexels.com/photos/4345109/pexels-photo-4345109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Views are easy; recognition is not. We build content calendars, shoot original assets and manage communities on Instagram, LinkedIn, YouTube and X — in a voice your audience actually recognises.',
    items: ['Platform strategy & positioning', 'Content calendars & production', 'Instagram, LinkedIn & YouTube', 'Community management', 'Reels, shorts & creator collabs'] },
  { code: 'F8', title: 'Google & Meta Ads', short: 'Performance media judged on pipeline, not impressions.', category: 'Growth', brief: 'Digital Marketing', stat: '4.6×', statLabel: 'Average ROAS',
    img: 'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Keyword and audience strategy, ad copy, landing pages and relentless optimisation — reported in the language your board understands: cost per lead, payback and pipeline.',
    items: ['Search, shopping & display', 'Meta and remarketing funnels', 'Ad copy & creative testing', 'Landing page optimisation', 'ROAS, CAC & pipeline reporting'] },
  { code: 'F9', title: 'Email & Retention', short: 'Lifecycle journeys that keep customers close.', category: 'Growth', brief: 'Digital Marketing', stat: '38%', statLabel: 'Average open rate',
    img: 'https://images.pexels.com/photos/19102538/pexels-photo-19102538.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Acquisition gets the attention; retention pays the bills. Targeted, personalised email journeys that nurture, re-activate and sell — tracked, tested and improved with every send.',
    items: ['Lifecycle & automation design', 'Newsletters and campaign sends', 'Segmentation & personalisation', 'CRM and platform integration', 'Deliverability & performance'] },
  { code: 'F10', title: 'UI / UX & Product Design', short: 'Interfaces built on research, not guesswork.', category: 'Design', brief: 'Website', stat: '92%', statLabel: 'Task-success in testing',
    img: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Before a line of code we map the flows, test the assumptions and shape the interface. Research-led product design that makes complex software feel obvious to the people using it daily.',
    items: ['User research & journey mapping', 'Interface and interaction design', 'Design systems & component libraries', 'Rapid prototyping and testing', 'Design-to-development handover'] },
];

export const SERVICE_STEPS = [
  { n: '01', title: 'Brief', desc: 'Goal, audience, platforms and references — the honest starting point.' },
  { n: '02', title: 'Concept', desc: 'Two or three directions; one chosen and developed with you.' },
  { n: '03', title: 'Production', desc: 'One team builds, measures and demos at every stage.' },
  { n: '04', title: 'Delivery', desc: 'Final files, source code where it applies, and a real handover.' },
];

/* ── Elevator floors ─────────────────────────────── */
export const FLOORS = [
  { code: 'F1', name: 'Digital Marketing', tag: 'Visibility, Leads, Revenue', proof: '+212%', proofLabel: 'Average lead growth',
    img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Full-funnel campaigns across search, social and display. Strategy, media buying and analytics under one roof — engineered to turn attention into measurable revenue.',
    deliverables: ['Google & Meta Ads', 'Social Media Marketing', 'Email & Automation', 'Conversion Rate Optimisation', 'Monthly Growth Reporting'] },
  { code: 'F2', name: 'Website Development', tag: 'Design, Speed, Conversion', proof: '<1.8s', proofLabel: 'Average load time',
    img: 'https://images.pexels.com/photos/7651919/pexels-photo-7651919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Creative, lightning-fast websites — corporate sites, e-commerce, CMS and custom web apps. Designed to be walked through, not scrolled past, and built to rank from day one.',
    deliverables: ['Corporate & Brand Websites', 'E-commerce / Headless Stores', 'React · Next.js · CMS Builds', 'UI / UX & Design Systems', 'Maintenance & Hosting'] },
  { code: 'F3', name: 'Corporate Video Making', tag: 'Script, Shoot, Screen', proof: '2.1M', proofLabel: 'Views on one B2B campaign',
    img: 'https://images.pexels.com/photos/6883811/pexels-photo-6883811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Corporate films, ad films, product shoots and reels — produced by our in-house crew from script to final cut. The floor where factories become stories and products become brands.',
    deliverables: ['Corporate & Brand Films', 'Ad Films & TVCs', 'Product Shoots', 'Social Reels & Shorts', 'Motion Graphics & Editing'] },
  { code: 'F4', name: 'Software & Mobile Apps', tag: 'Scalability, Data, Security', proof: '12h', proofLabel: 'Saved per team, weekly',
    img: 'https://images.pexels.com/photos/1181305/pexels-photo-1181305.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Custom CRM and ERP platforms, SaaS products and iOS / Android apps used by thousands — engineered in-house to scale and perform at any size.',
    deliverables: ['CRM / ERP Platforms', 'iOS & Android Apps', 'SaaS & Custom Software', 'Cloud, APIs & Integrations', 'Support & Iteration'] },
  { code: 'F5', name: 'SEO & Content', tag: 'Rankings, Authority, Trust', proof: '+150%', proofLabel: 'Organic traffic in 6 months',
    img: 'https://images.pexels.com/photos/8485591/pexels-photo-8485591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    desc: 'Technical SEO, editorial content and authority building that compounds month after month. Keyword research to local SEO — page one, and staying there.',
    deliverables: ['Technical & On-Page SEO', 'Local SEO / Google Business', 'Content Marketing', 'Link Building & Digital PR', 'Rank & Traffic Reporting'] },
];

/* ── Work ────────────────────────────────────────── */
export const WORKS = [
  { name: 'Precision Engineering Co.', sector: 'Manufacturing', year: '2025', type: 'Website · SEO · Corporate Film', result: '+300%', resultLabel: 'Organic traffic in 9 months',
    img: 'https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'A 40-year-old exporter with world-class machines and a website that ranked for nothing. Buyers in Germany and the UAE simply could not find them.',
    solution: 'Rebuilt the site around product-line intent, fixed the technical foundations, published 60 deep specification pages and shot a factory film that proved capacity on camera.',
    quote: 'They rebuilt our digital presence end-to-end. Enquiries didn’t just grow — they became the right kind of enquiries.', by: 'Rajesh Verma, Director' },
  { name: 'Maison D2C', sector: 'E-Commerce', year: '2025', type: 'Headless Store · Ads · CRO', result: '+60%', resultLabel: 'Revenue in six months',
    img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'Traffic was cheap but conversion was not. A slow theme and a leaky checkout were burning paid media budget every single day.',
    solution: 'Migrated to a headless storefront with a 1.4s budget, rebuilt the funnel with three tests per month, and shifted spend to full-funnel Meta with catalogue remarketing.',
    quote: 'Transparent reporting, real numbers, every month. Organic traffic rose 150% and sales followed by 60%.', by: 'Priya Sharma, Founder' },
  { name: 'Northline Industries', sector: 'Industrial', year: '2024', type: 'Brand Film · Campaign', result: '2.1M', resultLabel: 'Views · 480 qualified leads',
    img: 'https://images.pexels.com/photos/29224578/pexels-photo-29224578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'A commodity category where every competitor sounded identical. Their sales team needed something that made buyers stop and watch.',
    solution: 'A four-minute cinematic brand film shot across two plants, cut into eleven social assets, and distributed with a LinkedIn account-based campaign to a named list of 900 buyers.',
    quote: 'A brand film that actually sells B2B. Four hundred and eighty qualified leads from one campaign.', by: 'Marketing Head' },
  { name: 'Enterprise Group CRM', sector: 'Software', year: '2025', type: 'Custom Platform · Integrations', result: '12h', resultLabel: 'Saved per team, every week',
    img: 'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'Six regional offices running three different spreadsheets. Orders were lost, margins were invisible and nobody trusted the numbers.',
    solution: 'A custom CRM with role-based dashboards, automated approval flows, Tally and WhatsApp integrations, and a leadership view of live pipeline and margin.',
    quote: 'One team for software, marketing and film. Our CRM saves every team hours each week — and support actually picks up the phone.', by: 'Amit Patel, CEO' },
  { name: 'Industrial Plant Ltd.', sector: 'Manufacturing', year: '2024', type: 'Website · Local SEO', result: '140+', resultLabel: 'Keywords ranked on page one',
    img: 'https://images.pexels.com/photos/6937714/pexels-photo-6937714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'Strong offline reputation, invisible online. Dealers were sending buyers to competitors who simply had better pages.',
    solution: 'A modular site with a city-page architecture, schema for every product, Google Business optimisation across nine locations and a technical content calendar.',
    quote: 'A plant the whole world can now find. Page one for every product line we manufacture.', by: 'Business Head' },
  { name: 'Meridian Healthcare', sector: 'Healthcare', year: '2025', type: 'Brand Identity · Web · Social', result: '3.4×', resultLabel: 'Engagement lift',
    img: 'https://images.pexels.com/photos/8485591/pexels-photo-8485591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'A growing clinic chain with inconsistent branding across six cities and no content engine behind its reputation.',
    solution: 'A complete identity system, a patient-first website with online booking, and an always-on social engine producing 30 original assets a month.',
    quote: 'Creative that looks world-class, strategy that behaves like it. That combination is rare.', by: 'Sneha Kulkarni, CMO' },
];

/* ── Industries ──────────────────────────────────── */
export const INDUSTRIES = [
  { name: 'Manufacturing', count: '600+', tags: 'Visibility, Leads, Trust', desc: 'We put Indian manufacturers on page one and on film. Websites, SEO and corporate films built for industrial enterprises that sell to the world.', img: 'https://images.pexels.com/photos/29988963/pexels-photo-29988963.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200' },
  { name: 'E-Commerce', count: '180+', tags: 'Headless, Sales, Growth', desc: 'High-performance stores and performance media for ambitious D2C brands — infrastructure and ads designed to maximise conversion and handle peak traffic.', img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200' },
  { name: 'Healthcare', count: '90+', tags: 'Trust, Compliance, Reach', desc: 'Clinics, hospitals and device makers. Patient-first websites, careful compliance and content that earns trust before the appointment is booked.', img: 'https://images.pexels.com/photos/8485591/pexels-photo-8485591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200' },
  { name: 'Enterprise Software', count: '120+', tags: 'Efficiency, Data, Security', desc: 'Custom CRM and ERP platforms that automate operations, unify data and give leadership real-time decisions instead of spreadsheets.', img: 'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200' },
  { name: 'Real Estate', count: '70+', tags: 'Leads, Brand, Film', desc: 'Launch campaigns, listing platforms and drone films that move inventory — for developers and brokers who sell on trust and speed.', img: 'https://images.pexels.com/photos/6937714/pexels-photo-6937714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200' },
  { name: 'Education', count: '60+', tags: 'Admissions, Content, Community', desc: 'Schools, coaching and edtech. Admission funnels, parent-first websites and social that keeps a community engaged all year.', img: 'https://images.pexels.com/photos/4345109/pexels-photo-4345109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200' },
];

/* ── Studio ──────────────────────────────────────── */
export const TEAM = [
  { name: 'Kranti', role: 'Founder & Director', focus: 'Strategy · Client Partnerships', initials: 'KR', tint: 'solar' },
  { name: 'Aditi Raghav', role: 'Head of Design', focus: 'Brand Systems · UI / UX', initials: 'AR', tint: 'gold' },
  { name: 'Farhan Qureshi', role: 'Engineering Lead', focus: 'Web · Software · Cloud', initials: 'FQ', tint: 'cobalt' },
  { name: 'Meera Iyer', role: 'Growth Director', focus: 'SEO · Performance Media', initials: 'MI', tint: 'rust' },
  { name: 'Vikram Sethi', role: 'Film Director', focus: 'Corporate Films · Ads', initials: 'VS', tint: 'solar' },
  { name: 'Nisha Barman', role: 'Account Director', focus: 'Delivery · Client Success', initials: 'NB', tint: 'gold' },
];

export const VALUES = [
  { n: '01', title: 'Clarity over clutter', desc: 'Minimal interfaces, honest strategy and reports you can actually read. If we cannot explain it in one sentence, it is not finished.' },
  { n: '02', title: 'Craft at every layer', desc: 'From brand systems to backend architecture to the final film cut — one standard, one team, no outsourcing to strangers.' },
  { n: '03', title: 'Growth that compounds', desc: 'SEO, media and content run as one engine, measured monthly. We optimise for the second year, not the launch week.' },
  { n: '04', title: 'Truthful reporting', desc: 'You see the dashboard we see. Numbers, sources and the things that did not work — every single month, without exception.' },
];

export const STATS = [
  { v: 10, s: '+', l: 'Years in practice', d: 'Modern advertising & technology' },
  { v: 500, s: '+', l: 'Projects delivered', d: 'Web, apps, films, campaigns' },
  { v: 100, s: '+', l: 'Client Testimonials', d: 'Verified enterprise reviews' },
  { v: 600, s: '+', l: 'Manufacturers', d: 'Our deepest specialisation' },
];

export const TESTIMONIALS = [
  { quote: 'They rebuilt our digital presence end-to-end — website, SEO and film. Enquiries didn’t just grow, they became the right kind of enquiries.', name: 'Rajesh Verma', role: 'Director, Precision Engineering Co.', place: 'Delhi NCR', metric: '+300% traffic' },
  { quote: 'Transparent reporting, real numbers, every month. Our organic traffic rose 150% in six months and sales followed by 60%.', name: 'Priya Sharma', role: 'Founder, Maison D2C', place: 'India', metric: '4.6× ROAS' },
  { quote: 'One team for software, marketing and film. Our CRM saves each team hours every week — and support actually picks up the phone.', name: 'Amit Patel', role: 'CEO, Industrial Solutions', place: 'Ahmedabad', metric: '12h saved / wk' },
  { quote: 'Creative that looks world-class and strategy that behaves like it. That combination is rare, and it is why we have stayed for years.', name: 'Sneha Kulkarni', role: 'CMO, Meridian Healthcare', place: 'Bengaluru', metric: '3.4× engagement' },
  { quote: 'The brand film opened doors our sales team had been knocking on for two years. Four hundred and eighty qualified leads from one campaign.', name: 'Harpreet Singh', role: 'Marketing Head, Northline', place: 'Ludhiana', metric: '2.1M views' },
];

export const JOURNAL = [
  { tag: 'SEO', title: 'The six-month SEO playbook we run for Indian manufacturers', read: '6 min', date: 'May 2026', excerpt: 'Site architecture, specification pages, schema and the link strategy that took a exporter from page nine to page one.' },
  { tag: 'Marketing', title: 'Digital marketing that transforms: from visibility to revenue', read: '5 min', date: 'Apr 2026', excerpt: 'Why most reports measure the wrong thing, and the four numbers a board should actually ask for each month.' },
  { tag: 'Agency', title: 'How to choose the best digital marketing agency in India', read: '8 min', date: 'Mar 2026', excerpt: 'Eleven questions to ask in the first meeting — and the two answers that should end the conversation immediately.' },
  { tag: 'Film', title: 'Shooting a factory without stopping production', read: '4 min', date: 'Feb 2026', excerpt: 'Lighting around running machines, sound on a shop floor, and why the second shift is always the better shoot.' },
];

export const CAREERS = [
  { role: 'Senior SEO Executive', type: 'Full-time', place: 'Noida / Hybrid', team: 'Growth' },
  { role: 'React & Next.js Developer', type: 'Full-time', place: 'Noida', team: 'Engineering' },
  { role: 'Video Editor & Colourist', type: 'Full-time', place: 'Noida', team: 'Film' },
  { role: 'Performance Media Specialist', type: 'Full-time', place: 'Remote (India)', team: 'Growth' },
];

export const FAQS = [
  { q: 'What does ARKA Technovation Private Limited actually do?', a: 'Ten services across four disciplines: digital marketing, SEO, performance ads, social, email, website and e-commerce development, mobile apps and custom software, brand and product design, and corporate film production. One senior in-house team, start to finish.' },
  { q: 'Who leads ARKA Technovation Private Limited?', a: 'ARKA Technovation Private Limited is founded and led by Mr. Kranti Parashar, an eminent leader with over 17 years of experience across financial levels, enterprise technology, marketing strategy, and corporate communication.' },
  { q: 'Where are you based, and who do you work with?', a: 'Headquartered at Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India, with work delivered for 1,500+ clients across India and abroad — including 600+ manufacturing enterprises, D2C brands, healthcare groups and software companies.' },
  { q: 'How long does a typical project take?', a: 'A corporate website ships in three to six weeks. E-commerce and apps run eight to sixteen. Custom software depends on scope and is planned in milestones. Growth engines show measurable movement in sixty to ninety days.' },
  { q: 'Do you provide reporting and support after launch?', a: 'Yes — monthly performance reports, a live dashboard, quarterly strategy reviews and a named account contact. Maintenance, hosting and iteration are available as retainers or per project.' },
  { q: 'What does it cost to work with you?', a: 'Projects start around ₹1 lakh for a focused website or a single campaign, and retainers typically run ₹40,000–₹2,50,000 per month depending on scope. After the discovery call you get a written proposal with a fixed number, not a range.' },
];

export const CLIENTS = ['PRECISION ENGINEERING', 'MAISON D2C', 'NORTHLINE INDUSTRIES', 'MERIDIAN HEALTHCARE', 'ENTERPRISE GROUP', 'INDUSTRIAL PLANT LTD', 'ATLAS LOGISTICS', 'VEDA EDUCATION', 'ORBIT REALTY', 'SURAKSHA STEEL', 'KAVYA FOODS', 'ZENITH AUTOMOTIVE'];
