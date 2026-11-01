'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Database,
  Share2,
  PhoneCall,
  Phone,
  Users2,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  Cloud,
  Layers,
  Code2,
  Lock,
  BarChart3,
  Search,
  Mail,
  Zap,
  Globe,
  TrendingUp,
  FileSearch,
  Target,
  ChevronDown,
  Terminal,
  SlidersHorizontal,
  Compass,
  FileText,
  PieChart,
  BookOpen,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

type TechTab = 'All' | 'Revenue Acceleration' | 'Analytic & Attribution' | 'Marketing Automation' | 'Learn';

interface TechItem {
  id: string;
  aliasIds?: string[];
  category: 'Revenue Acceleration' | 'Analytic & Attribution' | 'Marketing Automation' | 'Learn';
  tag: string;
  name: string;
  subtitle: string;
  desc: string;
  capabilities: string[];
  metric?: string;
  metricLabel?: string;
}

export default function OurTechnologyPage() {
  const [activeTab, setActiveTab] = useState<TechTab>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const platforms: TechItem[] = [
    // ══════════════════════════════════════════════════════════════
    // 1. REVENUE ACCELERATION PLATFORM (6 Items)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'marketing_cloud_revenue_platform',
      aliasIds: ['marketing-cloud-revenue', 'revenue-platform'],
      category: 'Revenue Acceleration',
      tag: 'Revenue Engine',
      name: 'Marketing Cloud Revenue Platform',
      subtitle: 'Cross-channel marketing suite automation, journey building & VoIP telephony integration',
      desc: 'Marketing cloud is a suite of cloud-based marketing tools that unify enterprise marketing functions. While a standard CRM system focuses on relationship records and sales contacts, a Marketing Cloud automates, streamlines, and monitors cross-channel marketing operations across email, social, SMS, push notifications, and paid media. At ARKA Technovation Private Limited, we implement unified marketing clouds integrated with RingCentral and Twilio VoIP telephony for complete customer lifecycle management.',
      capabilities: [
        'Cross-channel journey builder coordinating email, SMS, push notifications, and paid retargeting',
        'RingCentral and Twilio VoIP telephony integration for automated call routing, recording, and CRM logging',
        'Clear architectural separation between marketing automation engines and sales CRM pipelines',
        'Real-time revenue attribution connecting initial marketing touches to signed enterprise contracts',
      ],
      metric: '100%',
      metricLabel: 'Lifecycle Visibility',
    },
    {
      id: 'crm_roi',
      aliasIds: ['crm-roi-platform', 'crm-roi'],
      category: 'Revenue Acceleration',
      tag: 'ROI Measurement',
      name: 'CRM ROI',
      subtitle: 'Fostering long-term customer loyalties and maximizing return on investment across sales cycles',
      desc: 'Customer relationship management (CRM) aims to foster long-term customer loyalties and maximize the financial return on your sales efforts. A high-performing CRM is not just an address book—it tracks the velocity of your pipeline, measures sales rep performance, automates follow-ups, and prevents qualified opportunities from slipping through the cracks, generating measurable gains in average deal size and lifetime customer value.',
      capabilities: [
        'Dynamic pipeline deal velocity tracking and sales conversion stage reporting',
        'Automated deal probability scoring based on prospect engagement and firmographic fit',
        'Sales rep productivity dashboards measuring call volume, proposal delivery, and close rates',
        'Direct integration with financial accounting tools to measure exact customer lifetime value (LTV)',
      ],
      metric: '4.8×',
      metricLabel: 'Average Pipeline ROAS',
    },
    {
      id: 'customer_data_platform',
      aliasIds: ['customer-data-platform', 'cdp'],
      category: 'Revenue Acceleration',
      tag: 'Unified CDP',
      name: 'Customer Data Platform (CDP)',
      subtitle: 'First-party cookie resolution, 360-degree buyer profiles & real-time omnichannel sync',
      desc: 'At ARKA Technovation Private Limited, we help enterprises make the most of their first-party data. Our AI-powered Customer Data Platform (CDP) integrates specialized telemetry tools that work in unison to normalize customer interactions across web, email, CRM, and offline channels. Amid third-party cookie deprecation, our persistent CDP database establishes a single, authoritative 360-degree view of your buyer.',
      capabilities: [
        'Collects, cleanses, and unifies fragmented interactions from web, apps, and POS into 360° buyer profiles',
        'First-party cookie identity resolution and cross-device visitor tracking without third-party reliance',
        'Real-time behavioral segmentation triggering personalized on-site content and marketing automation journeys',
        'Firmographic B2B enrichment mapping visitor IP addresses to company name, revenue, and location',
      ],
      metric: '360°',
      metricLabel: 'Customer Profiles',
    },
    {
      id: 'lead_management_solutions',
      aliasIds: ['lead-management-solutions', 'lead-management'],
      category: 'Revenue Acceleration',
      tag: 'Lead Velocity',
      name: 'Lead Management & Scheduling Solutions',
      subtitle: 'Sub-60-second lead routing, automated validation, and embedded calendar appointment sync',
      desc: 'Speed to lead determines conversion rates. Our proprietary lead management and scheduling solutions capture leads across website forms, Google Ads, Meta campaigns, and inbound calls, validate contact data, apply algorithmic scoring rules, and automatically route prospects to regional sales executives. Integrated calendar scheduling eliminates back-and-forth emails, locking in meetings while buyer intent is at its peak.',
      capabilities: [
        'Sub-60-second lead ingestion and automated routing based on geography, deal size, or product category',
        'Dynamic lead scoring combining firmographic data with on-site engagement telemetry',
        'Automated calendar scheduling embedded directly in thank-you pages and email follow-ups',
        'Real-time WhatsApp and SMS sales rep alerts with direct one-click dialer functionality',
      ],
      metric: '<60s',
      metricLabel: 'Lead Route Speed',
    },
    {
      id: 'crm_retargeting_technology',
      aliasIds: ['crm-retargeting-tech', 'crm-retargeting'],
      category: 'Revenue Acceleration',
      tag: 'First-Party Remarketing',
      name: 'CRM Retargeting Technology',
      subtitle: 'Syncing offline CRM data, purchase histories, and deal stages with paid advertising networks',
      desc: 'CRM retargeting is fundamentally different from standard web pixel retargeting because it allows you to leverage all the rich historical data stored inside your CRM. We sync offline customer purchase records, quote values, and lifecycle stages with Google Ads Customer Match, Meta Custom Audiences, and LinkedIn Matched Audiences, serving hyper-relevant ads that re-activate past buyers and accelerate stalled pipeline deals.',
      capabilities: [
        'Secure, hashed synchronization of first-party CRM contact records with Google, Meta, and LinkedIn',
        'Audience segmentation by customer lifetime spend, product ownership, and days since last purchase',
        'Exclusion lists preventing ad spend waste on existing satisfied customers or active support tickets',
        'Custom lookalike modeling finding high-value prospects matching your top 10% highest-margin clients',
      ],
      metric: '+45%',
      metricLabel: 'Re-activation Lift',
    },
    {
      id: 'data_warehouse_pipelines',
      aliasIds: ['data-warehouse-etl', 'data-warehouse'],
      category: 'Revenue Acceleration',
      tag: 'Data Engineering',
      name: 'Data Warehouse & ETL Pipelines',
      subtitle: 'The digital brain of your organization: Single source of truth with automated data pipelines',
      desc: 'Digital enterprise stacks are bursting at the seams with disjointed data. Having a single source of truth for your digital assets is paramount. We engineer centralized cloud data warehouses (BigQuery, Snowflake, PostgreSQL) paired with automated ETL (Extract, Transform, Load) pipelines that pull data from your CRM, email platforms, ERP, and web analytics, execute deep SQL transformations, and make clean business intelligence accessible across your leadership team.',
      capabilities: [
        'Automated ETL pipelines connecting CRM, billing ledgers, web telemetry, and advertising networks',
        'Custom SQL analytics, automated data cleansing, deduplication, and transformation routines',
        'Deep data lake storage designed for complex cohort analysis and predictive customer lifetime value (LTV)',
        'Looker Studio, PowerBI, and custom executive dashboards delivering automated daily performance digests',
      ],
      metric: '100%',
      metricLabel: 'Single Truth Source',
    },

    // ══════════════════════════════════════════════════════════════
    // 2. ANALYTIC & ATTRIBUTION (6 Items)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'web_channel_call_tracking',
      aliasIds: ['call-tracking-telephony', 'call-tracking'],
      category: 'Analytic & Attribution',
      tag: 'Dynamic Number Insertion',
      name: 'Web Channel Call Tracking',
      subtitle: 'Dynamic Number Insertion (DNI) mapping phone leads directly to keywords and sessions',
      desc: 'Website call tracking is a cloud-based SaaS solution operating via Dynamic Number Insertion (DNI). A lightweight JavaScript snippet replaces the static phone numbers on your site with a unique trackable number for each website visitor. When the prospect dials, the system records the call, attributes the exact traffic source, ad group, and search keyword, and forwards the call seamlessly via VoIP to your sales lines.',
      capabilities: [
        'Session-level Dynamic Number Insertion across organic search, Google Ads, Meta, and direct visits',
        'Automatic VoIP call forwarding directly to sales team desk phones or mobile devices',
        'Call recording, automated AI transcription, and keyword sentiment analysis',
        'Direct offline conversion import into Google Ads, unlocking automated Smart Bidding on high-value calls',
      ],
      metric: '100%',
      metricLabel: 'Call Source Match',
    },
    {
      id: 'channel_partner_sales_pipeline_management',
      aliasIds: ['channel-partner-pipeline', 'partner-pipeline'],
      category: 'Analytic & Attribution',
      tag: 'B2B Distribution',
      name: 'Channel Partner Sales Pipeline Management',
      subtitle: 'Multi-tier distributor portals, territorial lead governance, and co-op marketing tracking',
      desc: 'Channel sales distribute products through multiple tiers—direct sales teams, authorized distributors, regional dealers, and third-party retailers. We engineer dedicated channel partner marketing portals that manage lead routing by territory, provide co-op marketing collateral, monitor regional sales velocity, and provide national leadership with consolidated visibility over distributor pipelines.',
      capabilities: [
        'Dedicated dealer portal with deal registration and protected territorial distribution rules',
        'Digital asset management distributing co-op marketing materials, product spec sheets, and video assets',
        'Consolidated national reporting tracking distributor sales performance against regional quotas',
        'Automated conflict prevention ensuring direct sales reps and distributors do not compete on identical accounts',
      ],
      metric: 'Zero',
      metricLabel: 'Channel Conflict',
    },
    {
      id: 'seo_reporting_forecasting',
      aliasIds: ['seo-reporting-forecasting', 'seo-reporting'],
      category: 'Analytic & Attribution',
      tag: 'Custom Telemetry',
      name: 'SEO Reporting & Forecasting',
      subtitle: 'Monthly custom telemetry, multi-channel revenue breakdown, and pipeline projections',
      desc: 'Digital marketing is only as strong as its measurement. We deliver advanced, custom telemetry reports that cover everything from organic search traffic and PPC cost-per-lead to phone call attribution and e-commerce transactions. We build custom GA4 events, goals, and Looker dashboards that track exactly which marketing channels and search queries contribute to bottom-line enterprise revenue.',
      capabilities: [
        'Granular traffic and revenue reporting broken down by organic search, paid search, social, and direct channels',
        'Custom GA4 event schemas, conversion goals, and cross-domain tracking implementations',
        'Cost-per-acquisition (CPA) and customer lifetime value (LTV) attribution models',
        'Algorithmic pipeline forecasting predicting next-quarter organic traffic and lead volumes based on historical run rates',
      ],
      metric: '98%',
      metricLabel: 'Forecast Accuracy',
    },
    {
      id: 'channel_attribution_forecasting',
      aliasIds: ['channel-attribution-forecasting', 'channel-attribution'],
      category: 'Analytic & Attribution',
      tag: 'Multi-Touch Attribution',
      name: 'Channel Attribution & Forecasting',
      subtitle: 'Making sense of billions of data points to predict sales and optimize marketing budgets',
      desc: 'Modern enterprise buyers interact with dozens of marketing touchpoints before signing a contract. First-click or last-click models fail to capture the full buyer journey. Our multi-touch channel attribution models process billions of data points across paid search, organic content, video, social, and email, calculating the true incremental revenue contribution of each channel and forecasting future sales with statistical confidence.',
      capabilities: [
        'Multi-touch attribution models (Data-Driven, Position-Based, and Time-Decay) calibrated to your sales cycle',
        'Attribution data integration connecting digital touchpoints to final closed-won revenue in your ERP',
        'Predictive sales forecasting algorithms helping leadership allocate next-quarter marketing capital with confidence',
        'Identification of top-performing mid-funnel channels that traditional analytics undervalue',
      ],
      metric: 'Multi-Touch',
      metricLabel: 'Full-Funnel Model',
    },
    {
      id: 'digital_marketing_competitor_analysis',
      aliasIds: ['competitor-analysis-engine', 'competitor-analysis'],
      category: 'Analytic & Attribution',
      tag: 'Competitive Intelligence',
      name: 'Digital Marketing Competitor Analysis',
      subtitle: 'Reverse-engineering competitor campaigns, keyword bidding, ad spend, and positioning gaps',
      desc: 'If you want to outperform your competitors, you need to understand their strategy. Our competitor analysis services reverse-engineer your industry rivals’ digital presence—uncovering their highest-performing organic search keywords, estimated paid search spend, active social ad creatives, backlink acquisition velocity, and website conversion funnels. We identify their vulnerabilities and build strategies to capture their market share.',
      capabilities: [
        'Comprehensive keyword gap analysis identifying high-converting commercial queries competitors rank for',
        'Reverse-engineering of competitors’ Google Ads copy, landing page designs, and bidding strategies',
        'Backlink profile inspection identifying referring domains, digital PR opportunities, and link velocity',
        'Quarterly competitive benchmarking scorecards tracking your brand’s digital share of voice (SOV)',
      ],
      metric: '360°',
      metricLabel: 'Rival Intel',
    },
    {
      id: 'digital_due_diligence',
      aliasIds: ['digital-due-diligence', 'due-diligence'],
      category: 'Analytic & Attribution',
      tag: 'M&A Intelligence',
      name: 'Digital Due Diligence',
      subtitle: 'Auditing digital infrastructure, traffic authenticity, code quality, and cybersecurity for M&A',
      desc: 'Your next acquisition doesn’t have to be a gamble. With digital due diligence services from ARKA Technovation Private Limited, your firm can get insight into a target company’s true digital health before finalizing mergers or investments. We perform deep forensic audits of website traffic quality (filtering bot fraud), organic search sustainability, technical codebase architecture, cloud security, and customer database retention.',
      capabilities: [
        'Forensic web traffic audit identifying authentic human visitors vs disguised bot networks and click farms',
        'SEO equity audit evaluating risk of algorithmic Google penalties and unmasking toxic backlink profiles',
        'Full-stack codebase and cloud architecture review evaluating scalability, technical debt, and licensing',
        'Executive due diligence dossier delivering clear go/no-go recommendations and post-merger roadmaps',
      ],
      metric: '100%',
      metricLabel: 'Audit Rigor',
    },

    // ══════════════════════════════════════════════════════════════
    // 3. MARKETING AUTOMATION (6 Items)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'account_based_marketing_services',
      aliasIds: ['account-based-marketing', 'abm-services'],
      category: 'Marketing Automation',
      tag: 'Target Account ABM',
      name: 'Account-Based Marketing Services',
      subtitle: 'Securing high-value enterprise accounts with synchronized multi-stakeholder campaigns',
      desc: 'ARKA Technovation Private Limited offers industry-leading Account-Based Marketing (ABM) services that help your business secure high-value enterprise clients. Rather than broadcasting broad generic messages, ABM treats individual target accounts as markets of one. We coordinate bespoke content, LinkedIn executive outreach, IP-targeted display advertising, and personalized email journeys tailored specifically to decision-makers and buying committees.',
      capabilities: [
        'Target account list (TAL) selection and tiered prioritization based on ideal customer profile (ICP) fit',
        'Firmographic IP-targeted digital advertising serving bespoke ads exclusively to employees of target accounts',
        'Multi-stakeholder executive content mapping addressing CTO, CFO, and procurement concerns separately',
        'Sales and marketing orchestration ensuring sales reps receive real-time alerts when target accounts engage',
      ],
      metric: '3.2×',
      metricLabel: 'Enterprise Win Rate',
    },
    {
      id: 'lead_nurture_email_marketing',
      aliasIds: ['lead-nurture-email-testing', 'lead-nurture'],
      category: 'Marketing Automation',
      tag: 'Lifecycle Nurturing',
      name: 'Lead Nurture Email Marketing',
      subtitle: 'Converting potential leads into high-margin clients with behavioral drip sequences',
      desc: 'Lead nurturing plays a key part in converting potential prospects into paying clients. Enterprise purchasing decisions often take weeks or months. Lead nurturing ensures your brand remains top of mind throughout that evaluation window. We design and execute automated lifecycle email workflows triggered by specific user behaviors—such as visiting a pricing page or downloading a whitepaper, systematically resolving buyer objections.',
      capabilities: [
        'Behavioral email triggers deploying personalized messages based on specific URLs viewed and documents downloaded',
        'Multi-stage drip sequences engineered to guide prospects through awareness, consideration, and decision',
        'Dynamic content blocks swapping case studies and testimonials based on the prospect\'s industry',
        'Automated lead re-engagement campaigns re-activating stalled sales pipeline opportunities',
      ],
      metric: '+52%',
      metricLabel: 'Lead Conversion Lift',
    },
    {
      id: 'email_marketing_management_services',
      aliasIds: ['email-marketing-testing-design', 'email-testing-design'],
      category: 'Marketing Automation',
      tag: 'Template Engineering',
      name: 'Email Marketing Testing & Design',
      subtitle: 'Custom responsive HTML templates tested across 40+ email clients and dark-mode settings',
      desc: 'Email marketing is one of the most tried and true digital marketing strategies available. At ARKA Technovation Private Limited, we know that great email marketing requires stunning visual design paired with technical inbox deliverability. We design custom responsive HTML/CSS email templates, execute rigorous multivariate A/B testing across subject lines, sender names, and layouts, ensuring maximum click-to-open rates (CTOR).',
      capabilities: [
        'Custom responsive email templates rigorously tested across 40+ email clients and dark-mode settings',
        'Multivariate A/B testing of subject lines, preview text, content length, and CTA buttons',
        'Render testing on desktop, mobile, tablet, and webmail clients (Gmail, Outlook, Apple Mail)',
        'Detailed heatmaps and link click telemetry showing exactly how subscribers interact with email content',
      ],
      metric: '40+',
      metricLabel: 'Clients Verified',
    },
    {
      id: 'email_marketing_testing_design',
      aliasIds: ['salesforce-dynamics-automation', 'salesforce-marketing-automation'],
      category: 'Marketing Automation',
      tag: 'Salesforce Cloud',
      name: 'Salesforce Marketing Automation',
      subtitle: 'Salesforce Sales, Service & Marketing Cloud trigger automation and omnichannel journeys',
      desc: 'Did you know sales professionals today spend only 34 percent of their time selling? If you want to automate time-consuming administrative tasks, Salesforce marketing automation is the solution. We configure and customize Salesforce Sales Cloud, Service Cloud, and Marketing Cloud—automating stage progression, quote creation, customer onboarding, and omnichannel marketing journeys.',
      capabilities: [
        'Salesforce Journey Builder and Flow automation eliminating manual data entry for sales representatives',
        'Automated lead scoring, task assignment, and round-robin distribution to regional sales reps',
        'Bidirectional synchronization between Salesforce CRM and external marketing channels',
        'Custom Apex triggers and workflow rules tailored to complex enterprise approval processes',
      ],
      metric: '14h',
      metricLabel: 'Saved Per Rep Weekly',
    },
    {
      id: 'salesforce_marketing_automation',
      aliasIds: ['microsoft-dynamics-automation', 'dynamics-automation'],
      category: 'Marketing Automation',
      tag: 'Dynamics 365',
      name: 'Microsoft Dynamics Marketing Automation',
      subtitle: 'Dynamics 365 Customer Insights & Sales omnichannel journey orchestration',
      desc: 'The modern customer journey doesn\'t follow a straight path anymore. Consumers and business buyers take multiple paths to purchase across web, email, phone, and in-person meetings. We configure and deploy Microsoft Dynamics 365 Customer Insights and Dynamics Sales, engineering event-driven automation, unified customer profiles, and personalized marketing journeys across the entire enterprise.',
      capabilities: [
        'Microsoft Dynamics 365 Customer Insights implementation unifying customer interaction history',
        'Power Automate workflow engineering automating notifications, approvals, and data syncing',
        'Event-driven journey builder triggering automated multi-channel follow-ups based on customer actions',
        'Seamless integration with Microsoft Teams, Outlook, and PowerBI executive reporting suites',
      ],
      metric: 'Real-Time',
      metricLabel: 'Omnichannel Sync',
    },
    {
      id: 'microsoft_dynamics_marketing_automation',
      aliasIds: ['email-marketing-management', 'email-management'],
      category: 'Marketing Automation',
      tag: 'Turnkey Email Ops',
      name: 'Email Marketing Management Services',
      subtitle: 'Turnkey campaign execution, list segmentation, inbox deliverability & weekly reporting',
      desc: 'At ARKA Technovation Private Limited, we take complete care of your email marketing operations. We manage your subscriber lists, craft engaging copy, design responsive templates, execute timely broadcasts, and monitor technical inbox deliverability. Our turnkey email marketing management services allow your leadership team to focus on core operations while your email list generates predictable recurring revenue.',
      capabilities: [
        'Complete broadcast scheduling, list segmentation, and campaign execution handled by our dedicated pod',
        'Dedicated IP warming, SPF, DKIM, and DMARC authentication protocols ensuring 99%+ deliverability',
        'Automated list hygiene routines removing bounced, inactive, and unsubscribed contacts',
        'Comprehensive monthly campaign analytics tracking open rates, click-throughs, and generated revenue',
      ],
      metric: '99.2%',
      metricLabel: 'Inbox Deliverability',
    },

    // ══════════════════════════════════════════════════════════════
    // 4. LEARN & TECHNOLOGY GUIDES (6 Items)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'what_is_a_crm',
      aliasIds: ['what-is-crm', 'crm-guide'],
      category: 'Learn',
      tag: 'CRM Fundamentals',
      name: 'What Is a CRM?',
      subtitle: 'The central operating system for managing sales pipelines, customer records & revenue',
      desc: 'A Customer Relationship Management (CRM) system is software that organizes, tracks, and manages all of your company\'s interactions with prospective buyers and existing clients. Rather than relying on scattered spreadsheets and disconnected email threads, a modern cloud CRM acts as the single source of truth for your sales, marketing, and customer support departments, driving retention and revenue growth.',
      capabilities: [
        'Centralized database unifying contact details, purchase histories, and communication logs',
        'Visual pipeline management displaying deal stages, probability, and forecasted revenue',
        'Automated task reminders and follow-up sequences preventing lost sales opportunities',
        'Cross-device accessibility allowing sales reps to update records on web and mobile apps',
      ],
      metric: 'Single',
      metricLabel: 'Source of Truth',
    },
    {
      id: 'what_is_a_cdp',
      aliasIds: ['what-is-cdp', 'cdp-guide'],
      category: 'Learn',
      tag: 'CDP Architecture',
      name: 'What Is a CDP?',
      subtitle: 'Understanding Customer Data Platforms vs CRMs: Unifying first-party omnichannel telemetry',
      desc: 'A Customer Data Platform (CDP) is a marketer-managed system designed to collect, cleanse, and unify customer data from all sources—websites, mobile apps, point-of-sale systems, email campaigns, and offline databases. While a CRM focuses primarily on sales contacts and manual entry, a CDP processes continuous streaming telemetry, constructing persistent individual customer profiles for real-time personalization.',
      capabilities: [
        'Persistent identity resolution stitching anonymous website visits to authenticated customer profiles',
        'Real-time audience segmentation powering personalized website content and dynamic ad retargeting',
        'Full compliance with privacy standards (GDPR, DPDP) and zero reliance on third-party cookies',
        'Open API architecture feeding clean customer intelligence directly into marketing tools and CRMs',
      ],
      metric: 'Real-Time',
      metricLabel: 'Identity Resolution',
    },
    {
      id: 'data_driven_marketing_guide',
      aliasIds: ['data-driven-marketing', 'data-marketing-guide'],
      category: 'Learn',
      tag: 'Strategic Playbook',
      name: 'Data-Driven Marketing Guide',
      subtitle: 'Moving from intuition to empirical telemetry: Architecting high-converting marketing engines',
      desc: 'Marketing plans have been used for decades to outline organizational strategy. In the modern digital era, the most successful enterprises replace guesswork with data-driven decision making. This comprehensive guide details how to analyze customer journeys, establish multi-touch attribution models, evaluate cost-per-acquisition (CPA), and continuously optimize digital campaigns using empirical analytics.',
      capabilities: [
        'Establishing measurable commercial KPIs aligned with profit margins rather than surface impressions',
        'Mapping full customer touchpoint journeys across organic search, social ads, email, and phone calls',
        'Continuous multivariate experimentation: Testing hypotheses with statistically significant sample sizes',
        'Building automated executive dashboards that transform complex raw data into actionable insights',
      ],
      metric: 'Empirical',
      metricLabel: 'Decision Model',
    },
    {
      id: 'what_is_erp',
      aliasIds: ['what-is-erp', 'erp-guide'],
      category: 'Learn',
      tag: 'ERP Foundations',
      name: 'What Is ERP?',
      subtitle: 'Enterprise Resource Planning: Integrating finance, supply chain, HR, and operations',
      desc: 'Enterprise Resource Planning (ERP) is a software system that manages and integrates core business functions into a unified operational platform. An ERP coordinates financial accounting, supply chain logistics, inventory management, human resources, procurement, and manufacturing operations, ensuring every department operates from identical real-time data.',
      capabilities: [
        'Elimination of departmental data silos through centralized financial and operational ledgers',
        'Real-time inventory and supply chain tracking reducing overhead costs and fulfillment delays',
        'Automated invoicing, multi-currency transaction accounting, and statutory tax compliance',
        'Executive reporting providing leadership with complete operational health transparency',
      ],
      metric: '100%',
      metricLabel: 'Process Alignment',
    },
    {
      id: 'what_is_ai_Marketing',
      aliasIds: ['what-is-ai-marketing', 'ai-marketing-guide'],
      category: 'Learn',
      tag: 'AI & Automation',
      name: 'What Is AI Marketing?',
      subtitle: 'Leveraging predictive algorithms, machine learning ad bidding & generative workflows',
      desc: 'Artificial intelligence (AI) marketing is the process of leveraging AI methods, data models, and machine learning algorithms to automate marketing decisions and optimize customer interactions. From predictive lead scoring and automated programmatic bidding to conversational support chatbots and generative content variations, AI marketing enables enterprises to scale personalized customer experiences.',
      capabilities: [
        'Predictive analytics forecasting customer purchase intent and lifetime value with high accuracy',
        'Algorithmic Smart Bidding adjusting ad bids in real-time based on conversion probability',
        'Conversational AI chatbots resolving customer inquiries instantly and qualifying inbound leads',
        'Dynamic content generation delivering tailored product recommendations to individual website visitors',
      ],
      metric: 'AI-Driven',
      metricLabel: 'Scalable Growth',
    },
    {
      id: 'best_digital_marketingt_tools',
      aliasIds: ['best-digital-marketing-tools', '7-best-marketing-tools'],
      category: 'Learn',
      tag: 'Tooling Ecosystem',
      name: '7 of the Best Digital Marketing Tools',
      subtitle: 'Google Analytics 4, Ahrefs, PageSpeed Insights, Looker Studio, SEMrush & Cloudflare',
      desc: 'Modern digital marketing success requires a world-class technology stack. Our practice leads review the seven indispensable tools used across our Noida headquarters to engineer page-one search rankings, sub-second load times, and high-ROAS advertising campaigns: Google Analytics 4, Ahrefs, Google PageSpeed Insights, Looker Studio Enterprise, SEMrush, Twilio VoIP, and Cloudflare Enterprise CDN.',
      capabilities: [
        'Google Analytics 4 (GA4): Event-based user telemetry and cross-platform journey tracking',
        'Ahrefs & SEMrush: Comprehensive keyword research, competitor backlink profiling, and SERP telemetry',
        'Google PageSpeed Insights: Auditing Core Web Vitals (LCP, CLS, INP) for ranking and speed health',
        'Looker Studio & Cloudflare Enterprise: Executive BI dashboard visualization and edge network caching',
      ],
      metric: 'Enterprise',
      metricLabel: 'Battle-Tested',
    },
  ];

  const filteredPlatforms =
    activeTab === 'All'
      ? platforms
      : platforms.filter((p) => p.category === activeTab);

  const capabilities = [
    {
      domain: 'Data Lakes & Warehouses',
      icon: Database,
      stack: ['Google BigQuery', 'Snowflake', 'PostgreSQL', 'Redis In-Memory', 'Amazon S3 Data Lake', 'Custom SQL ETL'],
    },
    {
      domain: 'Attribution & Telemetry',
      icon: Zap,
      stack: ['Dynamic Number Insertion', 'Looker Studio Enterprise', 'Multi-Touch Models', 'GA4 BigQuery Sync', 'First-Party Pixels', 'Offline Import'],
    },
    {
      domain: 'CRM & ERP Synchronization',
      icon: Server,
      stack: ['Salesforce Cloud', 'Microsoft Dynamics 365', 'Twilio & RingCentral', 'WhatsApp Business API', 'REST & GraphQL', 'Role-Based Auth'],
    },
    {
      domain: 'Security & Edge Architecture',
      icon: ShieldCheck,
      stack: ['Cloudflare Enterprise CDN', '256-bit TLS Hardening', 'GDPR / DPDP Governance', 'Automated Daily Backups', 'Audit Trails', '99.99% SLA'],
    },
  ];

  const faqs = [
    {
      q: 'How does ARKA Technovation Private Limited handle data privacy and first-party cookie deprecation?',
      a: 'We architect Customer Data Platforms (CDPs) and first-party telemetry pipelines that collect and normalize data directly on your own domain infrastructure. By eliminating reliance on vulnerable third-party tracking cookies, our clients maintain 100% compliance with GDPR and Indian DPDP regulations while building persistent, high-accuracy buyer profiles.',
    },
    {
      q: 'Can your attribution platforms track offline telephone sales back to Google Ads keywords?',
      a: 'Yes. Our Web Channel Call Tracking uses session-level Dynamic Number Insertion (DNI). When a visitor dials, the system captures their exact traffic source, ad group, and keyword, records the call, and pushes offline conversion data back into Google Ads and your CRM to train automated Smart Bidding algorithms.',
    },
    {
      q: 'How does CRM Retargeting differ from regular Facebook or Google remarketing pixels?',
      a: 'Standard pixel retargeting only knows that an anonymous browser visited your site. CRM Retargeting synchronizes your actual offline customer records, past transaction values, and active pipeline stages with Google Customer Match and Meta Custom Audiences—allowing you to serve ads tailored specifically to past contract value or re-activate dormant enterprise accounts.',
    },
    {
      q: 'Do you build custom connectors for legacy or specialized ERP software?',
      a: 'Yes. Our software engineering pods in Sector 63, Noida have extensive experience building custom middleware and ETL pipelines connecting legacy on-premise databases, Tally, SAP, and proprietary ERPs with modern cloud BI dashboards and marketing clouds.',
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
              Proprietary Technology &amp; Attribution Engines.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-light text-left">
              Revenue growth cannot rely on guesswork. At {COMPANY.name}, we engineer proprietary marketing clouds, first-party Customer Data Platforms (CDPs), Dynamic Call Tracking, and multi-touch channel attribution models that connect every rupee of spend directly to bottom-line enterprise pipeline.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="site-button px-7 py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
              >
                <span style={{ color: '#FFFFFF' }}>Request Technology Audit</span>
                <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="px-7 py-3.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-solar" />
                <span>Speak with Cloud Architect</span>
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
              { tab: 'All' as TechTab, icon: Cpu },
              { tab: 'Revenue Acceleration' as TechTab, icon: Zap },
              { tab: 'Analytic & Attribution' as TechTab, icon: BarChart3 },
              { tab: 'Marketing Automation' as TechTab, icon: Workflow },
              { tab: 'Learn' as TechTab, icon: BookOpen },
            ].map(({ tab, icon: Icon }) => {
              const count = tab === 'All' ? platforms.length : platforms.filter((p) => p.category === tab).length;
              const active = activeTab === tab;
              return (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileTap={{ scale: 0.96 }}
                  data-dock-btn
                  className="segmented-dock-btn group relative shrink-0 pl-3 pr-2.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap focus:outline-none select-none cursor-pointer"
                >
                  {/* Sliding active background pill */}
                  {active && (
                    <motion.div
                      layoutId="ourTechTabActiveIndicator"
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
                    {tab}
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

      {/* ── All 24 Platforms & Modules (Alternating Editorial Layout) ── */}
      <section id="tech-platforms" className="scroll-mt-36 py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
            Technology Platforms &amp; Software Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3 font-display text-balance">
            Revenue Systems, Attribution &amp; Automation
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed font-light text-pretty">
            Explore all 24 enterprise platforms, attribution algorithms, and cloud data pipelines engineered by ARKA Technovation Private Limited. Filter by category above to review comprehensive technical specifications.
          </p>
        </div>

        <motion.div layout className="flex flex-col gap-6 sm:gap-10 lg:gap-14">
          <AnimatePresence mode="popLayout">
            {filteredPlatforms.map((platform, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.article
                  key={platform.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  id={platform.id}
                  className={`scroll-mt-36 group rounded-2xl sm:rounded-[28px] lg:rounded-[32px] bg-white border border-black/[0.08] hover:border-black/25 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } relative`}
                >
                  {/* Alias anchors for deep linking */}
                  {platform.aliasIds?.map((alias) => (
                    <span key={alias} id={alias} className="absolute -top-36 left-0" aria-hidden="true" />
                  ))}

                  {/* ── Visual Panel: Responsive image height on mobile, full editorial height on desktop ── */}
                  <div className="w-full h-48 sm:h-64 lg:h-auto lg:min-h-[440px] lg:w-[42%] xl:w-[40%] shrink-0 relative overflow-hidden bg-zinc-100">
                    <img
                      src={`/images/services/technology/${platform.id}.webp?v=2`}
                      alt={`${platform.name} — ARKA Technology`}
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
                        {platform.name}
                      </h3>

                      {/* Punchy Subtitle */}
                      <p className="text-[11px] sm:text-xs lg:text-sm font-mono text-solar font-semibold mt-1.5 leading-relaxed">
                        {platform.subtitle}
                      </p>

                      {/* Editorial Context Description */}
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-zinc-600 leading-relaxed font-normal text-pretty line-clamp-3 sm:line-clamp-none">
                        {platform.desc}
                      </p>

                      {/* Technical Capabilities & Architecture Grid */}
                      <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-black/8">
                        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                          Technical Capabilities &amp; Architecture:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {platform.capabilities.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-solar shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer Action Bar */}
                    <div className="mt-5 pt-4 sm:mt-8 sm:pt-5 border-t border-black/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      {platform.metric ? (
                        <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-full bg-black/5 text-zinc-700 font-bold border border-black/5 w-fit">
                          {platform.metric} {platform.metricLabel || ''}
                        </span>
                      ) : <div />}

                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-sm active:scale-[0.97] w-full sm:w-auto"
                        style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
                      >
                        <span>Request Technical Demo</span>
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

      {/* ── Infrastructure Stack Matrix ── */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-y border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
                Infrastructure Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Mission-Critical Data &amp; Cloud Stacks.
              </h2>
            </div>
            <p className="text-zinc-600 text-sm font-light max-w-md leading-relaxed">
              Engineered for high throughput, sub-100ms query latency, and uncompromising first-party data security.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.domain}
                  className="p-6 rounded-2xl bg-white border border-black/8 hover:border-black/20 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-solar mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-black mb-3">{cap.domain}</h3>
                    <ul className="space-y-1.5">
                      {cap.stack.map((item, i) => (
                        <li key={i} className="text-xs text-zinc-600 font-mono flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-zinc-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technical FAQs ── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Technical Architecture FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
            Answers for CTOs &amp; Technical Leadership
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-light">
            In-depth details on data security, first-party cookie resilience, call tracking, and custom ERP connectors.
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

      {/* ── Footer Consultation CTA ── */}
      <section className="py-20 bg-zinc-950 text-white border-t border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold text-center">
            Technical Architecture Review
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 max-w-3xl !mx-auto text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Ready to upgrade your enterprise attribution &amp; data stack?
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl !mx-auto text-base sm:text-lg font-light leading-relaxed text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Schedule a technical consultation with our software architects in Sector 63, Noida. We evaluate your current CRM, telemetry pipelines, and ad data lakes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="site-button px-8 py-4 rounded-full !bg-white !text-black text-sm font-semibold flex items-center gap-2 hover:!bg-zinc-200 transition-colors shadow-xl"
              style={{ color: '#000000', backgroundColor: '#FFFFFF' }}
            >
              <span style={{ color: '#000000' }}>Schedule Technical Consultation</span>
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
