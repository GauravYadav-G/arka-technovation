'use client';

import React from 'react';
import Link from '@/components/Link';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Scale,
  Code2,
  CreditCard,
  AlertCircle,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

export default function TermsPage() {
  const sections = [
    {
      num: '01',
      title: 'Master Services Agreement & Acceptance',
      content: [
        'These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between your organization (&quot;Client&quot;) and ARKA Technovation Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, formerly known as Jaikvik Technology India Pvt. Ltd.), having its principal corporate office at Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India.',
        'By engaging ARKA Technovation for custom software engineering, Next.js web application development, ERP/CRM deployments, search engine optimization (SEO), digital marketing campaigns, or corporate film production, you agree to these Terms alongside any project-specific Scope of Work (SOW).',
      ],
    },
    {
      num: '02',
      title: '100% Intellectual Property (IP) Transfer & Zero Lock-In',
      content: [
        'Complete Source Code Ownership: Upon receipt of final payment for the designated milestone or project deliverables, 100% of custom source code, database architectures, digital assets, Figma design systems, and video raw footage are fully transferred to the Client.',
        'Zero Proprietary Lock-In: ARKA Technovation does not hold client source code hostage or enforce proprietary recurring hosting locks. Codebases are deployed directly to the Client\'s dedicated cloud accounts (AWS, Google Cloud, Vercel, Supabase, Azure).',
        'Company Pre-Existing IP: General algorithmic utilities, open-source libraries, and foundational development boilerplates developed prior to the engagement remain licensed to the Client on a perpetual, irrevocable, royalty-free, worldwide basis.',
      ],
    },
    {
      num: '03',
      title: 'Agile Delivery Sprints & Acceptance Testing',
      content: [
        'Two-Week Sprint Iterations: Development projects are executed in disciplined 14-day sprints with demonstrable staging deployments provided at every milestone review.',
        'Review & Acceptance Window: The Client has ten (10) business days from delivery of a milestone to review, test, and provide written feedback or acceptance. If no defects are reported within this window, the deliverable is deemed accepted.',
        'Change Orders: Any material changes to project scope outside the signed Scope of Work will be scoped transparently as an addendum sprint before implementation.',
      ],
    },
    {
      num: '04',
      title: 'Invoicing, Fees & Commercial Terms',
      content: [
        'Milestone-Based Billing: Payments are structured around predefined, demonstrable project milestones (e.g., Architecture Approval, Staging Alpha Release, Production Go-Live).',
        'Taxes: All fees quoted are subject to applicable Indian Goods and Services Tax (GST) or relevant local withholding taxes.',
        'Payment Timelines: Invoices are payable within Net-15 days from issuance. Overdue balances may incur a late payment interest fee of 1.5% per month or the statutory maximum.',
      ],
    },
    {
      num: '05',
      title: 'Post-Launch Warranty & Technical Support',
      content: [
        '30-Day Bug-Fix Warranty: All bespoke software deliverables include a comprehensive 30-day post-launch warranty during which any reproducible software bugs or defects deviating from the SOW are remedied at zero additional charge.',
        'Extended Support & SLA: Ongoing server maintenance, infrastructure scaling, Core Web Vitals optimization, and uptime commitments are governed by our enterprise Support SLA.',
      ],
    },
    {
      num: '06',
      title: 'Governing Law & Dispute Resolution',
      content: [
        'Jurisdiction: These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of India.',
        'Exclusive Courts: The courts located in Gautam Buddha Nagar (Noida), Uttar Pradesh, India shall have exclusive jurisdiction to settle any disputes arising under or related to these Terms.',
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
            Commercial Terms
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.12]">
            Terms of Service
          </h1>

          <p className="mt-5 text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed font-light">
            These Terms of Service govern commercial engagements, software development contracts, enterprise SEO, and digital media production delivered by <strong className="font-semibold text-black">{COMPANY.legalName}</strong> (formerly known as Jaikvik Technology India Pvt. Ltd.).
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span>Corporate Entity: ARKA Technovation Private Limited</span>
            <span>·</span>
            <span>CIN Registered</span>
            <span>·</span>
            <span>Rayos Business Park, Sector 63, Noida</span>
          </div>
        </div>
      </section>

      {/* Terms Articles */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.num} className="pb-10 border-b border-black/10 last:border-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-solar font-mono text-xs font-semibold uppercase tracking-wider">
                  Article {section.num}
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

      {/* Corporate Sign-off */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-t border-black/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Legal Inquiries &amp; Notices
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
              Corporate &amp; Contractual Inquiries
            </h3>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
              For questions regarding Master Services Agreements (MSA), Custom Non-Disclosure Agreements (NDA), or invoicing inquiries, please contact our legal and contract administration team:
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 pt-6 border-t border-black/10 text-xs sm:text-sm">
              <div className="space-y-2">
                <p className="text-zinc-500 font-mono text-xs">Registered Entity:</p>
                <p className="font-semibold text-black">ARKA Technovation Private Limited</p>
                <p className="text-zinc-600">Formerly known as Jaikvik Technology India Pvt. Ltd.</p>
                <p className="text-zinc-600">Director: Mr. Kranti Parashar</p>
              </div>

              <div className="space-y-2">
                <p className="text-zinc-500 font-mono text-xs">Official Contact:</p>
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
                  <span>+91 97114 87316</span>
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

