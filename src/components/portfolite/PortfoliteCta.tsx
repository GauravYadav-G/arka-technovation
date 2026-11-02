import { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY } from '../../lib/data';

export default function PortfoliteCta() {
  const [copied, setCopied] = useState(false);
  const email = COMPANY.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 font-framer bg-white text-black border-t border-black/10 overflow-hidden">
      {/* Massive ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] sm:h-[600px] bg-gradient-to-b from-solar/[0.12] via-zinc-200/[0.3] to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-100 border border-black/10 backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium tracking-wide text-zinc-700">
            Available For New Projects — Sector 63, Noida (Delhi NCR)
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.12] max-w-3xl !mx-auto text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Ready to scale your business with search dominance, custom software &amp; film?
        </h2>

        {/* Subtext */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-600 font-light max-w-xl !mx-auto leading-relaxed text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Talk directly with Kranti and our engineering directors. After our discovery call, you receive a written proposal with a fixed scope, timeline, and deliverables.
        </p>

        {/* CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
            className="px-8 py-4 text-base font-semibold text-white bg-black rounded-full inline-flex items-center gap-2.5 framer-btn-primary shadow-xl"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Call: {COMPANY.phones[0]}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-6 py-4 text-sm font-medium text-zinc-700 hover:text-black bg-zinc-100 hover:bg-zinc-200 border border-black/10 hover:border-black/20 rounded-full backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">Copied {email}!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>{email}</span>
                <Copy className="w-3.5 h-3.5 text-zinc-400 ml-1" />
              </>
            )}
          </button>
        </div>

        {/* Office Quick Reference */}
        <p className="mt-8 text-xs text-zinc-500 font-mono tracking-wider uppercase">
          Corporate Office: Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India • {COMPANY.phone}
        </p>
      </div>
    </section>
  );
}
