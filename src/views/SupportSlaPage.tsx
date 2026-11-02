'use client';

import React from 'react';
import Link from '@/components/Link';
import {
  ShieldCheck,
  Clock,
  Server,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  FileText,
  LifeBuoy,
  RefreshCw,
  Lock,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

export default function SupportSlaPage() {
  const slaTiers = [
    {
      severity: 'Severity 1 (Critical)',
      impact: 'Core production systems down, primary revenue funnel halted, or critical data breach.',
      initialResponse: '< 1 Hour (24/7/365)',
      resolutionTarget: '< 4 Hours continuous engineering effort until restored',
      coverage: '24/7/365 Emergency Pager Pod',
      color: 'bg-red-500/10 text-red-600 border-red-200',
    },
    {
      severity: 'Severity 2 (Major)',
      impact: 'Core service degraded, major feature non-functional with high impact on business operations.',
      initialResponse: '< 2 Hours',
      resolutionTarget: '< 8 Hours',
      coverage: 'Extended Business Hours (8:00 AM – 10:00 PM IST)',
      color: 'bg-amber-500/10 text-amber-600 border-amber-200',
    },
    {
      severity: 'Severity 3 (Moderate)',
      impact: 'Non-critical defect, administrative dashboard anomaly, or workflow workaround available.',
      initialResponse: '< 6 Hours',
      resolutionTarget: 'Next scheduled sprint or < 24 Hours',
      coverage: 'Standard Business Hours (9:30 AM – 6:30 PM IST, Mon–Sat)',
      color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    },
    {
      severity: 'Severity 4 (Low / Request)',
      impact: 'General cosmetic update, minor copywriting change, new feature scoping or architecture inquiry.',
      initialResponse: '< 24 Hours',
      resolutionTarget: 'Prioritized in upcoming milestone backlog',
      coverage: 'Standard Business Hours',
      color: 'bg-zinc-100 text-zinc-700 border-zinc-200',
    },
  ];

  const commitments = [
    {
      icon: Server,
      title: '99.95% Infrastructure Uptime Guarantee',
      desc: 'All managed Next.js web applications, enterprise ERP portals, and database clusters deployed by ARKA Technovation are architected with automated health checks, edge caching, and failover redundancy to deliver 99.95% production availability.',
    },
    {
      icon: RefreshCw,
      title: 'Automated Daily Backups & Disaster Recovery',
      desc: 'Point-in-time relational database snapshots and encrypted object storage backups are executed daily across isolated geographical availability zones, with a Recovery Point Objective (RPO) < 1 hour and Recovery Time Objective (RTO) < 4 hours.',
    },
    {
      icon: Lock,
      title: 'Proactive Security & Dependency Audits',
      desc: 'Continuous vulnerability scanning across npm dependencies, Docker containers, and API endpoints. Security patches and critical zero-day fixes are rolled out immediately within 24 hours of disclosure.',
    },
    {
      icon: Zap,
      title: 'Dedicated In-House Specialist Pods',
      desc: 'No third-party subcontractors or generic call centers. Support tickets are triaged and resolved directly by senior full-stack software engineers, cloud architects, and systems specialists based in our Sector 63, Noida headquarters.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* Hero Header */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 overflow-hidden border-b border-black/10 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-3">
            Support &amp; Maintenance
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.12]">
            Service Level Agreement (SLA) &amp; Enterprise Support
          </h1>

          <p className="mt-5 text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed font-light">
            This Service Level Agreement (&quot;SLA&quot;) outlines the performance, uptime standards, response times, and ongoing technical maintenance commitments provided by <strong className="font-semibold text-black">{COMPANY.legalName}</strong> (formerly known as Jaikvik Technology India Pvt. Ltd.) to our enterprise partners and digital clients.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span>Corporate HQ: Rayos Business Park, Sector 63, Noida</span>
            <span>·</span>
            <span>Support Line: +91 97114 87316</span>
            <span>·</span>
            <span>Email: support@arkatechnovation.com</span>
          </div>
        </div>
      </section>

      {/* SLA Metrics & Severity Matrix */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Incident Management
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
            Incident Severity Matrix &amp; Response Times
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base font-light">
            Every support inquiry or telemetry alert is classified into four operational severity tiers based on real-world business impact.
          </p>
        </div>

        <div className="space-y-4">
          {slaTiers.map((tier) => (
            <div
              key={tier.severity}
              className="p-6 sm:p-7 rounded-2xl border border-black/10 bg-white hover:border-black/20 hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-black">
                  {tier.severity}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  Coverage: <strong className="text-black font-semibold">{tier.coverage}</strong>
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-800 font-medium mb-4">
                {tier.impact}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-black/6 text-xs sm:text-sm">
                <div>
                  <span className="text-zinc-500 font-mono block text-xs">Initial Acknowledgment:</span>
                  <span className="font-semibold text-black">{tier.initialResponse}</span>
                </div>
                <div>
                  <span className="text-zinc-500 font-mono block text-xs">Target Resolution Window:</span>
                  <span className="font-semibold text-black">{tier.resolutionTarget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Commitments Grid */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-y border-black/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Operational Guarantees
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
              Enterprise Infrastructure Guarantees
            </h2>
            <p className="mt-3 text-zinc-600 text-sm sm:text-base font-light">
              Built on production-grade infrastructure, strict change management, and zero vendor lock-in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-black/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-solar mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-black tracking-tight">{c.title}</h3>
                    <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Escalation Path & Contact */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900 text-white border border-black shadow-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Escalation Protocol
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2">
              Direct Executive Escalation
            </h2>
            <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              In the unlikely event that a Severity 1 or 2 incident exceeds standard response timelines, enterprise clients have direct access to our Founder &amp; Director, <strong className="text-white font-semibold">Mr. Kranti Parashar</strong>, and our Lead Cloud Architect to ensure uncompromised executive oversight.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <p className="text-zinc-400">Headquarters</p>
                <p className="text-white font-semibold mt-1">Rayos Business Park, Sector 63, Noida</p>
              </div>
              <div>
                <p className="text-zinc-400">Emergency Support</p>
                <p className="text-white font-semibold mt-1">+91 97114 87316</p>
              </div>
              <div>
                <p className="text-zinc-400">Support Ticket Desk</p>
                <p className="text-white font-semibold mt-1">support@arkatechnovation.com</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-solar hover:bg-orange-600 text-white font-semibold text-sm transition-colors"
              >
                Submit Support Request
              </Link>
              <a
                href="tel:+919711487316"
                className="px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm transition-colors border border-white/10"
              >
                Call Hotline
              </a>
            </div>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}

