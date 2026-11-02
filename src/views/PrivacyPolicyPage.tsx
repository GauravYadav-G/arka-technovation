'use client';

import React from 'react';
import Link from '@/components/Link';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  UserCheck,
  Mail,
  MapPin,
  Phone,
  Server,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      num: '01',
      title: 'Information We Collect',
      content: [
        'Direct Business Inquiries: Full name, business email address, corporate telephone number, company name, project specifications, and commercial scope submitted via contact forms, RFP documents, or discovery sessions.',
        'Technical Telemetry & Analytics: Browser type, operating system version, anonymized IP addresses, page response metrics, and interaction timestamps captured via privacy-focused telemetry to ensure optimal performance and security.',
        'Client Operational Data: For clients utilizing our custom CRM/ERP and managed cloud deployments, all organizational data remains exclusively owned by the client and is processed solely to perform contractual services.',
      ],
    },
    {
      num: '02',
      title: 'How We Use Your Information',
      content: [
        'Contract Fulfillment: Delivering requested software development builds, SEO audits, corporate film productions, and digital marketing campaigns.',
        'Technical Support & SLA Delivery: Responding to support inquiries, triaging server incidents, and maintaining 99.95% system uptime.',
        'Commercial Communication: Providing requested milestone roadmaps, billing invoices, technical documentation, and strategic progress reports.',
        'Legal Compliance & Security: Protecting against unauthorized access, malicious attacks, security threats, and fulfilling statutory requirements under Indian law.',
      ],
    },
    {
      num: '03',
      title: 'Strict Non-Disclosure & Zero Data Sale Policy',
      content: [
        'Zero Third-Party Sale: We do not sell, rent, monetize, or trade any client data, personal contact information, or proprietary business assets to third-party data brokers or marketing networks.',
        'Confidentiality: All customer information and project specifications are treated with strict confidentiality under non-disclosure obligations.',
        'In-House Processing: 100% of development, marketing analysis, and data engineering is handled by our full-time in-house pods based in Sector 63, Noida—never outsourced to unvetted freelancers.',
      ],
    },
    {
      num: '04',
      title: 'Data Security & Storage Standards',
      content: [
        'Enterprise Encryption: All data in transit is encrypted using TLS 1.3 standards. Sensitive credentials and client databases at rest are secured using AES-256 bit encryption.',
        'Access Controls: Strict role-based access control (RBAC), multi-factor authentication (MFA), and audit logging are enforced across our internal systems.',
        'Geographic Hosting: Managed production servers are deployed on enterprise cloud providers (AWS, Google Cloud) compliant with ISO 27001, SOC 2, and Indian data localization guidelines.',
      ],
    },
    {
      num: '05',
      title: 'Your Privacy Rights (DPDP Act & Global Standards)',
      content: [
        'Right to Access & Review: You have the right to request a complete summary of the personal and business contact information we maintain about you.',
        'Right to Rectification: You may request immediate correction of inaccurate or incomplete corporate records.',
        'Right to Erasure (&quot;Right to Be Forgotten&quot;): Subject to statutory retention requirements for accounting and taxation under Indian law, you may request complete deletion of your data.',
        'Revocation of Consent: You may opt out of commercial communications at any time with a single click or written request.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* Hero Header */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 overflow-hidden border-b border-black/10 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-3">
            Institutional Governance
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.12]">
            Privacy Policy
          </h1>

          <p className="mt-5 text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed font-light">
            This Privacy Policy governs the collection, processing, and protection of information by <strong className="font-semibold text-black">{COMPANY.legalName}</strong> (formerly known as Jaikvik Technology India Pvt. Ltd.) across our web applications, enterprise client portals, and corporate digital services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span>Data Controller: ARKA Technovation Private Limited</span>
            <span>·</span>
            <span>CIN &amp; DPIIT Registered</span>
            <span>·</span>
            <span>Rayos Business Park, Sector 63, Noida</span>
          </div>
        </div>
      </section>

      {/* Policy Articles */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.num} className="pb-10 border-b border-black/10 last:border-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-solar font-mono text-xs font-semibold uppercase tracking-wider">
                  Section {section.num}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-3.5 pl-0 sm:pl-11">
                {section.content.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statutory Grievance Redressal Officer */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-t border-black/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Statutory Redressal Mechanism
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
              Grievance Officer &amp; Legal Notices
            </h3>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
              In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023, the details of the designated Grievance Officer for ARKA Technovation Private Limited are provided below:
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 pt-6 border-t border-black/10 text-xs sm:text-sm">
              <div className="space-y-2">
                <p className="text-zinc-500 font-mono text-xs">Designated Grievance Officer:</p>
                <p className="font-semibold text-black">Mr. Kranti Parashar</p>
                <p className="text-zinc-600">Founder &amp; Director</p>
                <p className="text-zinc-600">ARKA Technovation Private Limited</p>
              </div>

              <div className="space-y-2">
                <p className="text-zinc-500 font-mono text-xs">Official Correspondence:</p>
                <p className="text-zinc-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-solar shrink-0" />
                  <span>Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, UP 201301</span>
                </p>
                <p className="text-zinc-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-solar shrink-0" />
                  <span>legal@arkatechnovation.com / info@arkatechnovation.com</span>
                </p>
                <p className="text-zinc-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-solar shrink-0" />
                  <span>+91 97114 87316 (Mon–Sat, 9:30 AM – 6:30 PM IST)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}

