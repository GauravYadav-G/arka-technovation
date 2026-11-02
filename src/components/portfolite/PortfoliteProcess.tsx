'use client';

import React, { useEffect, useRef } from 'react';
import { ArtcraftGalaxyCanvas } from '../ArtcraftGalaxyCanvas';

const PROCESS_COLUMNS = [
  {
    label: '01 · Discovery & System Planning',
    title: 'Business requirement analysis, system architecture mapping, and technical specifications.',
    illustration: (
      <svg
        viewBox="0 0 200 130"
        className="w-full max-w-[220px] h-auto text-black select-none pointer-events-none group-hover:scale-[1.03] transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top Main Window */}
        <rect x="1" y="1" width="176" height="84" rx="8" stroke="currentColor" strokeWidth="1.5" />

        {/* Dynamic Resizing Left Panel */}
        <rect className="mg-pane-left" x="10" y="10" width="60" height="66" rx="5" stroke="currentColor" strokeWidth="1.2" fill="white" />
        <line x1="18" y1="26" x2="52" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="18" y1="36" x2="42" y2="36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Dynamic Yielding Right Panel */}
        <rect className="mg-pane-right" x="76" y="10" width="91" height="66" rx="5" stroke="currentColor" strokeWidth="1.2" fill="white" />

        {/* Animated Mouse Cursor Dragging the Seam */}
        <g className="mg-cursor-pane">
          <path
            d="M0 0 L0 15 L4.2 11.5 L7.2 18 L10 16.6 L7 10.2 L12 10.2 Z"
            fill="#18181b"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>

        {/* Bottom Pills with streaming dash animation */}
        <rect x="1" y="96" width="76" height="18" rx="9" stroke="currentColor" strokeWidth="1.4" />
        <line x1="16" y1="105" x2="62" y2="105" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        <rect className="mg-march-ants" x="85" y="96" width="76" height="18" rx="9" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 4" />
        <line
          className="mg-march-ants"
          x1="100"
          y1="105"
          x2="146"
          y2="105"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </svg>
    ),
  },
  {
    label: '02 · Interface Design & Modeling',
    title: 'User journey prototyping, modular component libraries, and relational schema modeling.',
    illustration: (
      <svg
        viewBox="0 0 200 130"
        className="w-full max-w-[220px] h-auto text-black select-none pointer-events-none group-hover:scale-[1.03] transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Main Outer Canvas Window */}
        <rect x="1" y="1" width="186" height="116" rx="8" stroke="currentColor" strokeWidth="1.5" />

        {/* Left Sidebar */}
        <rect x="10" y="10" width="58" height="98" rx="6" stroke="currentColor" strokeWidth="1.2" fill="white" />
        <line x1="18" y1="24" x2="52" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="18" y1="34" x2="42" y2="34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Component card in sidebar */}
        <rect x="18" y="50" width="30" height="24" rx="4" stroke="currentColor" strokeWidth="1.2" fill="#f4f4f5" />

        {/* Right Canvas: Top Slider Bar Box */}
        <rect x="76" y="10" width="101" height="42" rx="6" stroke="currentColor" strokeWidth="1.2" fill="white" />
        <line x1="86" y1="22" x2="118" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Slider track line */}
        <line x1="86" y1="34" x2="167" y2="34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Animated Slider thumb */}
        <circle className="mg-slider-thumb" cx="116" cy="34" r="5" fill="#18181b" />
        {/* Animated Cursor dragging thumb */}
        <g className="mg-slider-cursor">
          <path
            d="M0 0 L0 15 L4.2 11.5 L7.2 18 L10 16.6 L7 10.2 L12 10.2 Z"
            fill="#18181b"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>

        {/* Right Canvas: Bottom Property Block with dynamic bar expansion */}
        <rect x="76" y="60" width="101" height="48" rx="6" stroke="currentColor" strokeWidth="1.2" fill="white" />
        <line className="mg-property-bar" x1="86" y1="74" x2="162" y2="74" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="86" y1="86" x2="140" y2="86" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: '03 · Full-Stack Software Development',
    title: 'Clean frontend components, secure backend services, and enterprise integration workflows.',
    illustration: (
      <svg
        viewBox="0 0 200 130"
        className="w-full max-w-[220px] h-auto text-black select-none pointer-events-none group-hover:scale-[1.03] transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Center Node Engine Box */}
        <rect x="76" y="38" width="46" height="54" rx="6" stroke="currentColor" strokeWidth="1.5" fill="white" />
        <line x1="84" y1="62" x2="114" y2="62" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="84" y1="70" x2="104" y2="70" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Streaming connector buses */}
        <line className="mg-databus" x1="56" y1="34" x2="76" y2="48" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
        <line className="mg-databus" x1="56" y1="92" x2="76" y2="78" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
        <line className="mg-databus" x1="142" y1="34" x2="122" y2="48" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
        <line className="mg-databus" x1="142" y1="92" x2="122" y2="78" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />

        {/* Traveling data packets */}
        <circle className="mg-packet-1" cx="0" cy="0" r="2.5" fill="#E8742C" />
        <circle className="mg-packet-2" cx="0" cy="0" r="2.5" fill="#E8742C" />

        {/* Top Left Satellite Node */}
        <rect x="10" y="10" width="46" height="34" rx="5" stroke="currentColor" strokeWidth="1.3" fill="white" />
        <line x1="18" y1="22" x2="38" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="18" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Bottom Left Satellite Node */}
        <rect x="10" y="82" width="46" height="34" rx="5" stroke="currentColor" strokeWidth="1.3" fill="white" />
        <line x1="18" y1="94" x2="38" y2="94" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="18" y1="102" x2="30" y2="102" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Top Right Satellite Node */}
        <rect x="142" y="10" width="46" height="34" rx="5" stroke="currentColor" strokeWidth="1.3" fill="white" />
        <line x1="150" y1="22" x2="170" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="150" y1="30" x2="162" y2="30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Bottom Right Satellite Node */}
        <rect x="142" y="82" width="46" height="34" rx="5" stroke="currentColor" strokeWidth="1.3" fill="white" />
        <line x1="150" y1="94" x2="170" y2="94" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="150" y1="102" x2="162" y2="102" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Center Node pulsing ping dot */}
        <circle className="mg-node-ping" cx="122" cy="78" r="3" fill="#18181b" />
      </svg>
    ),
  },
  {
    label: '04 · Quality Assurance & Deployment',
    title: 'Automated regression testing, production cloud deployment, and continuous system monitoring.',
    illustration: (
      <svg
        viewBox="0 0 200 130"
        className="w-full max-w-[220px] h-auto text-black select-none pointer-events-none group-hover:scale-[1.03] transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top Pill / Status Tag with subtle pulse */}
        <rect x="2" y="12" width="80" height="18" rx="9" stroke="currentColor" strokeWidth="1.4" fill="white" />
        <line x1="14" y1="21" x2="70" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Baseline horizontal axis */}
        <line x1="0" y1="98" x2="198" y2="98" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />

        {/* Ascending solid plateau curve */}
        <path
          d="M 22 98 C 38 98 46 56 62 56 L 132 56"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Sequentially pulsing milestone control points */}
        <circle className="mg-milestone-1" cx="62" cy="56" r="3" fill="#18181b" />
        <circle className="mg-milestone-2" cx="98" cy="56" r="3" fill="#18181b" />
        <circle className="mg-milestone-3" cx="132" cy="56" r="3" fill="#E8742C" />

        {/* Descending dashed curve with streaming waterfall animation */}
        <path
          className="mg-waterfall"
          d="M 132 56 C 146 56 154 84 166 98"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />

        {/* Sparks bursting from active control point */}
        <g className="mg-spark">
          <line x1="124" y1="46" x2="128" y2="48" stroke="#E8742C" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="121" y1="52" x2="125" y2="52" stroke="#E8742C" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="126" y1="42" x2="128" y2="44" stroke="#E8742C" strokeWidth="1.3" strokeLinecap="round" />
        </g>

        {/* Cursor steering the trajectory with interactive wiggle */}
        <g className="mg-trajectory-cursor">
          <path
            d="M0 0 L0 15 L4.2 11.5 L7.2 18 L10 16.6 L7 10.2 L12 10.2 Z"
            fill="#18181b"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
];

export default function PortfoliteProcess() {
  const galaxyContainerRef = useRef<HTMLDivElement>(null);
  const galaxyInstanceRef = useRef<ArtcraftGalaxyCanvas | null>(null);

  useEffect(() => {
    const container = galaxyContainerRef.current;
    if (!container) return;

    try {
      const galaxy = new ArtcraftGalaxyCanvas(container, {
        theme: 'light',
        offsetX: 0,
        offsetY: 0,
      });
      galaxyInstanceRef.current = galaxy;
    } catch (err) {
      console.warn('Failed to initialize ArtcraftGalaxyCanvas in Process section:', err);
    }

    return () => {
      if (galaxyInstanceRef.current) {
        galaxyInstanceRef.current.destroy();
        galaxyInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 font-framer bg-white text-black border-t border-black/10 overflow-hidden"
    >
      {/* 3D Celestial Galaxy Wheel in Background (Centered) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dynamic Warm Ambient Light Pool in Center */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] blur-[150px] rounded-full opacity-20 bg-[#FF8A00]"
        />

        {/* 3D Artcraft Canvas Wheel */}
        <div
          ref={galaxyContainerRef}
          className="w-full h-full opacity-80"
        />

        {/* Soft radial vignette so typography & wireframe diagrams remain razor-sharp while wheel is visible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(255,255,255,0.65)_70%,#ffffff_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-10 sm:mb-20">
          <p className="text-xs uppercase tracking-widest text-[#E8742C] font-mono mb-2.5 sm:mb-3">Our Process</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]">
            How We Work
          </h2>
          <p className="mt-3 sm:mt-5 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            A clear, four-stage workflow from initial requirement analysis and interface modeling to system architecture and production deployment.
          </p>
        </div>

        {/* 4-Column Layout Structure Matching the Design Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black/10 backdrop-blur-[2px] bg-white/40">
          {PROCESS_COLUMNS.map((col, idx) => {
            const borderClasses = [
              'border-b md:border-b lg:border-b-0 md:border-r lg:border-r',
              'border-b md:border-b lg:border-b-0 md:border-r-0 lg:border-r',
              'border-b md:border-b-0 lg:border-b-0 md:border-r lg:border-r',
              'border-b-0 md:border-b-0 lg:border-b-0 md:border-r-0 lg:border-r-0',
            ][idx];

            return (
              <div
                key={col.label}
                className={`p-5 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[460px] lg:min-h-[500px] transition-colors duration-300 group hover:bg-white/90 border-black/10 ${borderClasses}`}
              >
                {/* Top Meta & Headline */}
                <div>
                  <span className="block text-xs sm:text-sm font-normal text-zinc-400 mb-3 sm:mb-4 tracking-normal">
                    {col.label}
                  </span>
                  <h3 className="text-base sm:text-xl lg:text-[22px] font-bold text-black tracking-tight leading-[1.35] max-w-[280px]">
                    {col.title}
                  </h3>
                </div>

                {/* Bottom Technical Schematic Wireframe Illustration */}
                <div className="mt-8 sm:mt-24 pt-4 sm:pt-6 w-full flex items-end justify-start min-h-[110px] sm:min-h-[130px]">
                  {col.illustration}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
