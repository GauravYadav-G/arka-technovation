'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Send,
  ShieldCheck,
  HeartHandshake,
  Zap,
  Compass,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import { COMPANY } from '../lib/data';

export default function PortfoliteCareers() {
  const [submitted, setSubmitted] = useState(false);
  const [discipline, setDiscipline] = useState('Full-Stack Software Engineering');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    message: '',
  });

  const disciplines = [
    'Full-Stack Software Engineering',
    'Technical SEO Architecture',
    'Performance Media & Growth',
    'Corporate Cinema & DaVinci Resolve',
    'Brand & UX Architecture',
    'Other Specialized Craft',
  ];

  const perks = [
    {
      title: 'Director-Led Mentorship',
      desc: 'Work directly alongside directors and senior engineers. Every project is reviewed by craft leadership, not an account coordinator.',
      icon: Compass,
    },
    {
      title: 'Real Production Ownership',
      desc: 'Your name on the production. You participate from client discovery through architecture, engineering, and live launch.',
      icon: ShieldCheck,
    },
    {
      title: 'Cross-Discipline Stack',
      desc: 'Master full-stack Next.js, search engine algorithm models, CRM cloud architectures, and 4K cinema cameras all in one team.',
      icon: Zap,
    },
    {
      title: 'Humane & Hybrid Culture',
      desc: 'Flexible hours, high autonomy, hybrid and remote allowances, and zero performative overtime. We value craft over seat-time.',
      icon: HeartHandshake,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', portfolio: '', message: '' });
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-44 pb-14 sm:pb-20 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] font-display"
          >
            Come and build with us.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            We hire for craft, curiosity, and high standards. Join an in-house team of engineers, SEO architects, and filmmakers scaling enterprise brands and manufacturers worldwide.
          </motion.p>
        </div>
      </section>

      {/* Honest Status & Spontaneous Application Section */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Notice & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/80 text-zinc-800 text-[11px] font-mono font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-solar" />
                <span>Current Status</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black leading-snug font-display">
                No open listed vacancies right now.
              </h2>

              <p className="text-zinc-600 text-sm leading-relaxed font-light">
                Our in-house team at Noida HQ is intentionally compact, senior, and craft-driven. We do not post synthetic or placeholder job openings.
              </p>

              <p className="text-zinc-600 text-sm leading-relaxed font-light">
                However, we are continuously building our private talent bench. When expansion or project-to-hire contracts open in software engineering, technical SEO, corporate cinema, or UI design, we contact candidates directly from this spontaneous roster.
              </p>

              <div className="pt-4 border-t border-black/10 space-y-3 text-xs text-zinc-600">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-solar shrink-0" />
                  <span>Rayos Business Park, Sector 63, Noida HQ</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-solar shrink-0" />
                  <a
                    href="mailto:careers@arkatechnovation.com"
                    className="text-black font-medium hover:text-solar underline transition-colors"
                  >
                    careers@arkatechnovation.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Spontaneous Introduction Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="mb-8">
                <span className="text-xs font-mono font-semibold text-solar uppercase tracking-wider block mb-1">
                  Spontaneous Introduction
                </span>
                <h3 className="text-2xl font-bold text-black font-display tracking-tight">
                  Send your portfolio & craft links.
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm mt-1.5 font-light">
                  Reviewed directly by our technical director within 3 business days.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-2">
                      Primary Discipline *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {disciplines.map((d) => (
                        <button
                          type="button"
                          key={d}
                          onClick={() => setDiscipline(d)}
                          className={`pill-nav-btn text-xs font-medium rounded-full transition-all ${
                            discipline === d
                              ? '!bg-black !text-white font-semibold shadow-sm'
                              : '!bg-zinc-100 hover:!bg-zinc-200 !text-zinc-700 !border !border-black/10'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="talent-name" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="talent-name"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Kranti Parashar"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="talent-email" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="talent-email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="talent-phone" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="talent-phone"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 97114 87316"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="talent-portfolio" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Portfolio / GitHub / Reel URL *
                      </label>
                      <input
                        type="url"
                        id="talent-portfolio"
                        required
                        value={form.portfolio}
                        onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                        placeholder="https://github.com/..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="talent-message" className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Tell us about your hardest problem solved (Optional)
                    </label>
                    <textarea
                      rows={3}
                      id="talent-message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share a brief overview of architecture decisions, algorithmic wins, or film cuts you are proud of..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full !bg-black !text-white hover:!bg-zinc-800 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] cursor-pointer"
                    >
                      <span>Submit Spontaneous Profile</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-4 shadow-lg">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2 font-display">Profile Received</h4>
                  <p className="text-zinc-600 text-sm max-w-sm font-light leading-relaxed">
                    Thank you for introducing yourself. Our technical leadership reviews submissions regularly and will reach out if a matching project arises.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Culture Bento Grid */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-xs font-medium text-zinc-700 mb-4">
            <Sparkles className="w-3 h-3 text-solar" />
            <span>Why Join ARKA Technovation Private Limited</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight font-display">
            Built for craftspeople who take pride in their work.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-black/10 hover:border-black/25 transition-all duration-300 group shadow-sm hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-black/10 flex items-center justify-center text-zinc-700 group-hover:text-solar transition-colors mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-black tracking-tight mb-2 font-display">
                  {perk.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-light">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
