'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from '../Link';
import type { ProjectData } from './ProjectModal';

interface ShowcaseCardItem {
  id: string;
  bottomTitle: string;
  mosaicVariant: 'navy' | 'olive' | 'terracotta' | 'mauve' | 'graphite' | 'sand';
  glassWidget: React.ReactNode;
  projectData: ProjectData;
}

/* ─────────────────────────────────────────────────────────────
   TOP SECTION BACKGROUND COLORS
   Matches the authentic Convex-style reference design exactly
   ───────────────────────────────────────────────────────────── */
const VARIANT_TOP_BG: Record<string, string> = {
  navy: 'linear-gradient(180deg, #0A1931 0%, #15376F 100%)',
  olive: '#DFE2CE',
  terracotta: '#FF7632',
  mauve: '#E5D9E2',
  graphite: '#E4E4E4',
  sand: '#EDE6DC',
};

/* ─────────────────────────────────────────────────────────────
   DYNAMIC MOSAIC TILE MAPS (11 Columns × 8 Rows)
   Fast, energetic breathing pixel structure matching reference
   ───────────────────────────────────────────────────────────── */
interface Tile {
  col: number;
  row: number;
  color: string;
}

const MOSAIC_TILES: Record<string, Tile[]> = {
  navy: [
    // Row 0
    { col: 0, row: 0, color: '#0A1E3F' },
    { col: 1, row: 0, color: '#0F2D5C' },
    { col: 2, row: 0, color: '#163E7B' },
    { col: 4, row: 0, color: '#0A1E3F' },
    { col: 6, row: 0, color: '#0F2D5C' },
    { col: 8, row: 0, color: '#163E7B' },
    { col: 9, row: 0, color: '#0F2D5C' },
    { col: 10, row: 0, color: '#0A1E3F' },
    // Row 1
    { col: 0, row: 1, color: '#0F2D5C' },
    { col: 1, row: 1, color: '#163E7B' },
    { col: 2, row: 1, color: '#1D519D' },
    { col: 8, row: 1, color: '#1D519D' },
    { col: 9, row: 1, color: '#163E7B' },
    { col: 10, row: 1, color: '#0F2D5C' },
    // Row 2
    { col: 0, row: 2, color: '#163E7B' },
    { col: 1, row: 2, color: '#1D519D' },
    { col: 9, row: 2, color: '#1D519D' },
    { col: 10, row: 2, color: '#163E7B' },
    // Row 3
    { col: 0, row: 3, color: '#1D519D' },
    { col: 1, row: 3, color: '#2768C1' },
    { col: 9, row: 3, color: '#2768C1' },
    { col: 10, row: 3, color: '#1D519D' },
    // Row 4
    { col: 0, row: 4, color: '#2768C1' },
    { col: 1, row: 4, color: '#4D8CE4' },
    { col: 2, row: 4, color: '#4D8CE4' },
    { col: 8, row: 4, color: '#4D8CE4' },
    { col: 9, row: 4, color: '#4D8CE4' },
    { col: 10, row: 4, color: '#2768C1' },
    // Row 5
    { col: 0, row: 5, color: '#4D8CE4' },
    { col: 1, row: 5, color: '#85B2F0' },
    { col: 3, row: 5, color: '#4D8CE4' },
    { col: 7, row: 5, color: '#4D8CE4' },
    { col: 9, row: 5, color: '#85B2F0' },
    { col: 10, row: 5, color: '#4D8CE4' },
    // Row 6
    { col: 0, row: 6, color: '#85B2F0' },
    { col: 1, row: 6, color: '#BFD7F8' },
    { col: 2, row: 6, color: '#BFD7F8' },
    { col: 4, row: 6, color: '#85B2F0' },
    { col: 6, row: 6, color: '#85B2F0' },
    { col: 8, row: 6, color: '#BFD7F8' },
    { col: 9, row: 6, color: '#BFD7F8' },
    { col: 10, row: 6, color: '#85B2F0' },
    // Row 7
    { col: 1, row: 7, color: '#E5F0FD' },
    { col: 3, row: 7, color: '#E5F0FD' },
    { col: 5, row: 7, color: '#E5F0FD' },
    { col: 7, row: 7, color: '#E5F0FD' },
    { col: 9, row: 7, color: '#E5F0FD' },
  ],
  olive: [
    // Row 0
    { col: 1, row: 0, color: '#4D5328' },
    { col: 2, row: 0, color: '#656D35' },
    { col: 4, row: 0, color: '#4D5328' },
    { col: 6, row: 0, color: '#4D5328' },
    { col: 8, row: 0, color: '#656D35' },
    { col: 9, row: 0, color: '#4D5328' },
    // Row 1
    { col: 0, row: 1, color: '#4D5328' },
    { col: 1, row: 1, color: '#656D35' },
    { col: 2, row: 1, color: '#7D8742' },
    { col: 8, row: 1, color: '#7D8742' },
    { col: 9, row: 1, color: '#656D35' },
    { col: 10, row: 1, color: '#4D5328' },
    // Row 2
    { col: 0, row: 2, color: '#656D35' },
    { col: 1, row: 2, color: '#7D8742' },
    { col: 9, row: 2, color: '#7D8742' },
    { col: 10, row: 2, color: '#656D35' },
    // Row 3
    { col: 0, row: 3, color: '#7D8742' },
    { col: 1, row: 3, color: '#95A150' },
    { col: 9, row: 3, color: '#95A150' },
    { col: 10, row: 3, color: '#7D8742' },
    // Row 4
    { col: 0, row: 4, color: '#95A150' },
    { col: 1, row: 4, color: '#ADC068' },
    { col: 2, row: 4, color: '#ADC068' },
    { col: 8, row: 4, color: '#ADC068' },
    { col: 9, row: 4, color: '#ADC068' },
    { col: 10, row: 4, color: '#95A150' },
    // Row 5
    { col: 0, row: 5, color: '#ADC068' },
    { col: 1, row: 5, color: '#C7D488' },
    { col: 3, row: 5, color: '#ADC068' },
    { col: 7, row: 5, color: '#ADC068' },
    { col: 9, row: 5, color: '#C7D488' },
    { col: 10, row: 5, color: '#ADC068' },
    // Row 6
    { col: 0, row: 6, color: '#C7D488' },
    { col: 1, row: 6, color: '#DFE8B4' },
    { col: 2, row: 6, color: '#DFE8B4' },
    { col: 4, row: 6, color: '#C7D488' },
    { col: 6, row: 6, color: '#C7D488' },
    { col: 8, row: 6, color: '#DFE8B4' },
    { col: 9, row: 6, color: '#DFE8B4' },
    { col: 10, row: 6, color: '#C7D488' },
    // Row 7
    { col: 1, row: 7, color: '#EEF3D2' },
    { col: 3, row: 7, color: '#EEF3D2' },
    { col: 5, row: 7, color: '#EEF3D2' },
    { col: 7, row: 7, color: '#EEF3D2' },
    { col: 9, row: 7, color: '#EEF3D2' },
  ],
  terracotta: [
    // Top rows have peach & orange accent squares
    { col: 8, row: 0, color: '#FFA875' },
    { col: 9, row: 0, color: '#FFBD96' },
    { col: 9, row: 1, color: '#FFA875' },
    { col: 10, row: 1, color: '#FFBD96' },
    { col: 0, row: 2, color: '#FFA875' },
    { col: 10, row: 2, color: '#FFA875' },
    { col: 0, row: 3, color: '#FFA875' },
    { col: 10, row: 3, color: '#FFA875' },
    // Row 4: Transition to terracotta
    { col: 0, row: 4, color: '#E85D1B' },
    { col: 1, row: 4, color: '#F3985D' },
    { col: 9, row: 4, color: '#F3985D' },
    { col: 10, row: 4, color: '#E85D1B' },
    // Row 5: Deep terracotta & brown anchoring the bottom
    { col: 0, row: 5, color: '#96340B' },
    { col: 1, row: 5, color: '#BD4411' },
    { col: 2, row: 5, color: '#F3985D' },
    { col: 8, row: 5, color: '#F3985D' },
    { col: 9, row: 5, color: '#BD4411' },
    { col: 10, row: 5, color: '#96340B' },
    // Row 6: Dark chocolate & burnt terracotta squares framing the bottom
    { col: 0, row: 6, color: '#5E1F0A' },
    { col: 1, row: 6, color: '#7E2A0A' },
    { col: 2, row: 6, color: '#BD4411' },
    { col: 3, row: 6, color: '#5E1F0A' },
    { col: 4, row: 6, color: '#7E2A0A' },
    { col: 6, row: 6, color: '#5E1F0A' },
    { col: 7, row: 6, color: '#7E2A0A' },
    { col: 8, row: 6, color: '#BD4411' },
    { col: 9, row: 6, color: '#7E2A0A' },
    { col: 10, row: 6, color: '#5E1F0A' },
    // Row 7: Stepping down into base
    { col: 0, row: 7, color: '#E8742C' },
    { col: 1, row: 7, color: '#BD4411' },
    { col: 3, row: 7, color: '#5E1F0A' },
    { col: 5, row: 7, color: '#381407' },
    { col: 7, row: 7, color: '#5E1F0A' },
    { col: 9, row: 7, color: '#BD4411' },
    { col: 10, row: 7, color: '#E8742C' },
  ],
  mauve: [
    // Row 0
    { col: 1, row: 0, color: '#4B3750' },
    { col: 2, row: 0, color: '#6C4F72' },
    { col: 4, row: 0, color: '#4B3750' },
    { col: 6, row: 0, color: '#4B3750' },
    { col: 8, row: 0, color: '#6C4F72' },
    { col: 9, row: 0, color: '#4B3750' },
    // Row 1
    { col: 0, row: 1, color: '#4B3750' },
    { col: 1, row: 1, color: '#6C4F72' },
    { col: 2, row: 1, color: '#8F6F96' },
    { col: 8, row: 1, color: '#8F6F96' },
    { col: 9, row: 1, color: '#6C4F72' },
    { col: 10, row: 1, color: '#4B3750' },
    // Row 2
    { col: 0, row: 2, color: '#6C4F72' },
    { col: 1, row: 2, color: '#8F6F96' },
    { col: 9, row: 2, color: '#8F6F96' },
    { col: 10, row: 2, color: '#6C4F72' },
    // Row 3
    { col: 0, row: 3, color: '#8F6F96' },
    { col: 1, row: 3, color: '#AD8DB3' },
    { col: 9, row: 3, color: '#AD8DB3' },
    { col: 10, row: 3, color: '#8F6F96' },
    // Row 4
    { col: 0, row: 4, color: '#AD8DB3' },
    { col: 1, row: 4, color: '#C8AECF' },
    { col: 2, row: 4, color: '#C8AECF' },
    { col: 8, row: 4, color: '#C8AECF' },
    { col: 9, row: 4, color: '#C8AECF' },
    { col: 10, row: 4, color: '#AD8DB3' },
    // Row 5
    { col: 0, row: 5, color: '#C8AECF' },
    { col: 1, row: 5, color: '#DEC9E4' },
    { col: 3, row: 5, color: '#C8AECF' },
    { col: 7, row: 5, color: '#C8AECF' },
    { col: 9, row: 5, color: '#DEC9E4' },
    { col: 10, row: 5, color: '#C8AECF' },
    // Row 6
    { col: 0, row: 6, color: '#DEC9E4' },
    { col: 1, row: 6, color: '#EEE0F2' },
    { col: 2, row: 6, color: '#EEE0F2' },
    { col: 4, row: 6, color: '#DEC9E4' },
    { col: 6, row: 6, color: '#DEC9E4' },
    { col: 8, row: 6, color: '#EEE0F2' },
    { col: 9, row: 6, color: '#EEE0F2' },
    { col: 10, row: 6, color: '#DEC9E4' },
    // Row 7
    { col: 1, row: 7, color: '#F7EFF9' },
    { col: 3, row: 7, color: '#F7EFF9' },
    { col: 5, row: 7, color: '#F7EFF9' },
    { col: 7, row: 7, color: '#F7EFF9' },
    { col: 9, row: 7, color: '#F7EFF9' },
  ],
  graphite: [
    // Row 0
    { col: 1, row: 0, color: '#2C2C2E' },
    { col: 2, row: 0, color: '#3A3A3C' },
    { col: 4, row: 0, color: '#2C2C2E' },
    { col: 6, row: 0, color: '#2C2C2E' },
    { col: 8, row: 0, color: '#3A3A3C' },
    { col: 9, row: 0, color: '#2C2C2E' },
    // Row 1
    { col: 0, row: 1, color: '#2C2C2E' },
    { col: 1, row: 1, color: '#3A3A3C' },
    { col: 2, row: 1, color: '#48484A' },
    { col: 8, row: 1, color: '#48484A' },
    { col: 9, row: 1, color: '#3A3A3C' },
    { col: 10, row: 1, color: '#2C2C2E' },
    // Row 2
    { col: 0, row: 2, color: '#3A3A3C' },
    { col: 1, row: 2, color: '#48484A' },
    { col: 9, row: 2, color: '#48484A' },
    { col: 10, row: 2, color: '#3A3A3C' },
    // Row 3
    { col: 0, row: 3, color: '#48484A' },
    { col: 1, row: 3, color: '#636366' },
    { col: 9, row: 3, color: '#636366' },
    { col: 10, row: 3, color: '#48484A' },
    // Row 4
    { col: 0, row: 4, color: '#636366' },
    { col: 1, row: 4, color: '#8E8E93' },
    { col: 2, row: 4, color: '#8E8E93' },
    { col: 8, row: 4, color: '#8E8E93' },
    { col: 9, row: 4, color: '#8E8E93' },
    { col: 10, row: 4, color: '#636366' },
    // Row 5
    { col: 0, row: 5, color: '#8E8E93' },
    { col: 1, row: 5, color: '#AEAEB2' },
    { col: 3, row: 5, color: '#8E8E93' },
    { col: 7, row: 5, color: '#8E8E93' },
    { col: 9, row: 5, color: '#AEAEB2' },
    { col: 10, row: 5, color: '#8E8E93' },
    // Row 6
    { col: 0, row: 6, color: '#AEAEB2' },
    { col: 1, row: 6, color: '#C7C7CC' },
    { col: 2, row: 6, color: '#C7C7CC' },
    { col: 4, row: 6, color: '#AEAEB2' },
    { col: 6, row: 6, color: '#AEAEB2' },
    { col: 8, row: 6, color: '#C7C7CC' },
    { col: 9, row: 6, color: '#C7C7CC' },
    { col: 10, row: 6, color: '#AEAEB2' },
    // Row 7
    { col: 1, row: 7, color: '#E5E5EA' },
    { col: 3, row: 7, color: '#E5E5EA' },
    { col: 5, row: 7, color: '#E5E5EA' },
    { col: 7, row: 7, color: '#E5E5EA' },
    { col: 9, row: 7, color: '#E5E5EA' },
  ],
  sand: [
    // Row 0
    { col: 1, row: 0, color: '#4E3A20' },
    { col: 2, row: 0, color: '#6A5230' },
    { col: 4, row: 0, color: '#4E3A20' },
    { col: 6, row: 0, color: '#4E3A20' },
    { col: 8, row: 0, color: '#6A5230' },
    { col: 9, row: 0, color: '#4E3A20' },
    // Row 1
    { col: 0, row: 1, color: '#4E3A20' },
    { col: 1, row: 1, color: '#6A5230' },
    { col: 2, row: 1, color: '#886C45' },
    { col: 8, row: 1, color: '#886C45' },
    { col: 9, row: 1, color: '#6A5230' },
    { col: 10, row: 1, color: '#4E3A20' },
    // Row 2
    { col: 0, row: 2, color: '#6A5230' },
    { col: 1, row: 2, color: '#886C45' },
    { col: 9, row: 2, color: '#886C45' },
    { col: 10, row: 2, color: '#6A5230' },
    // Row 3
    { col: 0, row: 3, color: '#886C45' },
    { col: 1, row: 3, color: '#A98A5E' },
    { col: 9, row: 3, color: '#A98A5E' },
    { col: 10, row: 3, color: '#886C45' },
    // Row 4
    { col: 0, row: 4, color: '#A98A5E' },
    { col: 1, row: 4, color: '#C8AA7F' },
    { col: 2, row: 4, color: '#C8AA7F' },
    { col: 8, row: 4, color: '#C8AA7F' },
    { col: 9, row: 4, color: '#C8AA7F' },
    { col: 10, row: 4, color: '#A98A5E' },
    // Row 5
    { col: 0, row: 5, color: '#C8AA7F' },
    { col: 1, row: 5, color: '#DDC5A2' },
    { col: 3, row: 5, color: '#C8AA7F' },
    { col: 7, row: 5, color: '#C8AA7F' },
    { col: 9, row: 5, color: '#DDC5A2' },
    { col: 10, row: 5, color: '#C8AA7F' },
    // Row 6
    { col: 0, row: 6, color: '#DDC5A2' },
    { col: 1, row: 6, color: '#EDE1CF' },
    { col: 2, row: 6, color: '#EDE1CF' },
    { col: 4, row: 6, color: '#DDC5A2' },
    { col: 6, row: 6, color: '#DDC5A2' },
    { col: 8, row: 6, color: '#EDE1CF' },
    { col: 9, row: 6, color: '#EDE1CF' },
    { col: 10, row: 6, color: '#DDC5A2' },
    // Row 7
    { col: 1, row: 7, color: '#F7F2EA' },
    { col: 3, row: 7, color: '#F7F2EA' },
    { col: 5, row: 7, color: '#F7F2EA' },
    { col: 7, row: 7, color: '#F7F2EA' },
    { col: 9, row: 7, color: '#F7F2EA' },
  ],
};

function DynamicMosaicCanvas({ variant }: { variant: string }) {
  const tiles = MOSAIC_TILES[variant] || MOSAIC_TILES.terracotta;

  return (
    <svg
      viewBox="0 0 326 240"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full select-none pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {tiles.map((tile, i) => {
        const animClass =
          i % 4 === 0
            ? 'mg-pixel-1'
            : i % 4 === 1
            ? 'mg-pixel-2'
            : i % 4 === 2
            ? 'mg-pixel-3'
            : 'mg-pixel-4';

        return (
          <rect
            key={i}
            x={4 + tile.col * 29}
            y={4 + tile.row * 29}
            width={25}
            height={25}
            rx={4}
            fill={tile.color}
            className={animClass}
          />
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   SHOWCASE CARDS DATA
   Structured around core agency operations, methodologies, and quality standards:
   1. Navy: Production-Grade Architecture (STACK & ENGINEERING)
   2. Olive: Continuous Delivery & CI/CD (DEPLOYMENT PIPELINE)
   3. Terracotta: Search Authority & Semantic SEO (SEARCH TELEMETRY)
   4. Mauve: Enterprise CRM & Workflows (SYSTEMS & DATA SYNC)
   5. Graphite: Corporate Cinema & Visual Production (BROADCAST CINEMATOGRAPHY)
   6. Sand: Complete Source Code Ownership (COMMERCIAL IP & HANDOVER)
   No claimed numbers — focused on operations, working methodologies, and quality.
   ───────────────────────────────────────────────────────────── */
const SHOWCASE_CARDS: ShowcaseCardItem[] = [
  {
    id: 'card-architecture',
    bottomTitle: 'Production-Grade Architecture',
    mosaicVariant: 'navy',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          ENGINEERING · STACK
        </div>
        <div className="space-y-2 text-xs sm:text-[12.5px] font-mono">
          <div className="flex items-center justify-between text-zinc-900 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span>Next.js · React</span>
            </span>
            <span className="text-zinc-500 text-[11px] font-normal">Modern Stack</span>
          </div>
          <div className="flex items-center justify-between text-zinc-900 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
              <span>Strict TypeScript</span>
            </span>
            <span className="text-zinc-500 text-[11px] font-normal">Clean Code</span>
          </div>
          <div className="flex items-center justify-between text-zinc-900 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Node.js Backend</span>
            </span>
            <span className="text-emerald-700 text-[11px] font-normal">Scalable</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-architecture',
      title: 'Enterprise Software & Platform Architecture',
      category: 'Software Engineering · Technical Architecture',
      image: '/portfolite/proj-1.webp',
      client: 'Technical Leadership',
      year: '2025',
      description:
        'Full-stack enterprise application engineering designed with modular component architecture, typed schema contracts, automated testing suites, and production cloud infrastructure.',
      deliverables: ['Modular Architecture Specification', 'Next.js & React Frontend', 'Scalable Node.js Microservices', 'Full Source Code Handover'],
      results: 'Production-Grade Reliability & Ownership',
    },
  },
  {
    id: 'card-deploy',
    bottomTitle: 'Continuous Delivery & CI/CD',
    mosaicVariant: 'olive',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          PIPELINE · OPERATIONS
        </div>
        <div className="space-y-2 text-xs sm:text-[12.5px] font-mono">
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span>Production Build</span>
            </span>
            <span className="text-emerald-700 font-medium text-[11px]">Deployed</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Automated Tests</span>
            </span>
            <span className="text-zinc-500 font-normal text-[11px]">All Passed</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full border border-zinc-700 shrink-0" />
              <span>Edge Verification</span>
            </span>
            <span className="text-zinc-500 font-normal text-[11px]">Active</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-deploy',
      title: 'Automated CI/CD & Deployment Operations',
      category: 'DevOps · Cloud Infrastructure',
      image: '/portfolite/proj-2.webp',
      client: 'Infrastructure Team',
      year: '2025',
      description:
        'Automated continuous integration and deployment pipelines with immutable release stages, pull-request previews, automated test runs, and instant zero-downtime rollbacks.',
      deliverables: ['Automated CI/CD Workflows', 'Zero-Downtime Releases', 'Pull-Request Environments', 'Instant Rollback Protocols'],
      results: 'High-Velocity Zero-Downtime Releases',
    },
  },
  {
    id: 'card-live-seo',
    bottomTitle: 'Search Authority & Semantic SEO',
    mosaicVariant: 'terracotta',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          SEARCH TELEMETRY
        </div>
        <div className="space-y-2 text-xs sm:text-[12.5px] font-mono">
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              <span>Schema.org JSON-LD</span>
            </span>
            <span className="text-emerald-700 font-medium text-[11px]">Structured</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              <span>Core Web Vitals</span>
            </span>
            <span className="text-emerald-700 font-medium text-[11px]">All Green</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              <span>Entity Indexing</span>
            </span>
            <span className="text-zinc-500 font-normal text-[11px]">Active</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-seo',
      title: 'Enterprise Search Authority & Inbound Lead Generation',
      category: 'SEO & Technical Crawl Engineering',
      image: '/portfolite/proj-3.webp',
      client: 'Growth & Marketing Leadership',
      year: '2025',
      description:
        'Full-service enterprise search engine optimization covering technical crawl architecture, Core Web Vitals optimization, Schema.org entity graphs, high-intent keyword mapping, and AI Overviews visibility.',
      deliverables: ['Deep Technical Crawl Audit', 'Schema.org Graph Design', 'Commercial Intent Mapping', 'Authoritative Editorial Backlinks'],
      results: 'Compounding Inbound Commercial Demand',
    },
  },
  {
    id: 'card-enterprise-crm',
    bottomTitle: 'Enterprise CRM & Workflows',
    mosaicVariant: 'mauve',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          ENTERPRISE · WORKFLOWS
        </div>
        <div className="space-y-2 text-xs sm:text-[12.5px] font-mono">
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
              <span>Role-Based Access</span>
            </span>
            <span className="text-zinc-600 font-normal text-[11px]">Encrypted</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
              <span>ERP Sync Pipeline</span>
            </span>
            <span className="text-emerald-700 font-medium text-[11px]">Live</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
              <span>Approval Matrices</span>
            </span>
            <span className="text-zinc-600 font-normal text-[11px]">Automated</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-crm',
      title: 'Custom Cloud CRM & Process Automation',
      category: 'Enterprise Software & Workflow Systems',
      image: '/portfolite/proj-4.webp',
      client: 'Operations & IT Directors',
      year: '2025',
      description:
        'Bespoke business operating platforms featuring custom lead pipelines, multi-level approval matrices, secure relational schemas, and direct synchronization with legacy ERP systems.',
      deliverables: ['Bespoke CRM Workflows', 'Legacy ERP Integration', 'Role-Based Dashboards', 'Automated Lead Routing'],
      results: 'Automated Operational Synchronization',
    },
  },
  {
    id: 'card-corporate-cinema',
    bottomTitle: 'Corporate Cinema & Production',
    mosaicVariant: 'graphite',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          BROADCAST · PRODUCTION
        </div>
        <div className="space-y-2 text-xs sm:text-[12.5px] font-mono">
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-700 shrink-0" />
              <span>Cinema Cameras</span>
            </span>
            <span className="text-zinc-600 font-normal text-[11px]">Ultra HD</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-700 shrink-0" />
              <span>DaVinci Studio Color</span>
            </span>
            <span className="text-zinc-600 font-normal text-[11px]">Mastered</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-700 shrink-0" />
              <span>On-Location Filming</span>
            </span>
            <span className="text-emerald-700 font-medium text-[11px]">In-House Crew</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-film',
      title: 'Corporate Film & Brand Cinematography',
      category: 'Film Production & Brand Storytelling',
      image: '/portfolite/proj-5.webp',
      client: 'Brand & Marketing Directors',
      year: '2025',
      description:
        'Broadcast-standard corporate documentaries, manufacturing plant films, technical product demos, and executive brand stories produced end-to-end by our in-house cinematography crew.',
      deliverables: ['Concept Treatment & Scripting', 'On-Location Cinema Filming', 'DaVinci Resolve Color Grading', 'Multi-Platform Cutdowns'],
      results: 'High-Impact Brand Authority & Trust',
    },
  },
  {
    id: 'card-code-ownership',
    bottomTitle: 'Complete Source Code Ownership',
    mosaicVariant: 'sand',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          COMMERCIAL · OWNERSHIP
        </div>
        <div className="space-y-2 text-xs sm:text-[12.5px] font-mono">
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
              <span>Full Source Code</span>
            </span>
            <span className="text-emerald-700 font-medium text-[11px]">Full Handover</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
              <span>Cloud Deployment</span>
            </span>
            <span className="text-zinc-600 font-normal text-[11px]">Your Accounts</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
              <span>Proprietary Lock-In</span>
            </span>
            <span className="text-zinc-500 font-normal text-[11px]">Zero Lock-In</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-ownership',
      title: 'Uncompromised Intellectual Property & Source Handover',
      category: 'Commercial Clarity & Client Ownership',
      image: '/portfolite/proj-6.webp',
      client: 'Enterprise Founders & Executives',
      year: '2025',
      description:
        'Full commercial transparency and complete intellectual property transfer. All source code repositories, deployment credentials, architecture documentation, and assets are transferred directly to your organization.',
      deliverables: ['Full Git Repository Handover', 'Dedicated Cloud Account Deployment', 'Technical Architecture Documentation', 'Clean Commercial Handover'],
      results: 'Total IP Control & Freedom',
    },
  },
];

export default function PortfoliteRecentWorksCarousel() {
  return (
    <section
      id="works"
      className="py-24 sm:py-32 font-framer bg-[#FAF9F5] text-black border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        {/* Clean, subtle header aligned with operational standards & engineering protocols */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2 sm:mb-3">
              Delivery Standards
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]">
              Engineering &amp; Delivery Standards
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start lg:items-end gap-4 sm:gap-5">
            <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed lg:text-right">
              Production-grade architecture, automated CI/CD pipelines, search telemetry, and complete IP handover engineered into every client deployment.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 min-h-[44px] w-full sm:w-auto rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Overflowing Horizontal Marquee with Responsive Side Blur ── */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Side Blur Gradient Mask */}
        <div className="absolute left-0 inset-y-0 w-8 sm:w-36 lg:w-56 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent z-20 pointer-events-none" />

        {/* Right Side Blur Gradient Mask */}
        <div className="absolute right-0 inset-y-0 w-8 sm:w-36 lg:w-56 bg-gradient-to-l from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent z-20 pointer-events-none" />

        {/* Infinite Rotating Marquee Track */}
        <div className="flex animate-marquee-showcase gap-4 sm:gap-7 w-max will-change-transform">
          {[...SHOWCASE_CARDS, ...SHOWCASE_CARDS].map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="relative w-[280px] sm:w-[340px] h-[410px] sm:h-[480px] shrink-0 rounded-2xl sm:rounded-[32px] bg-[#EFECE6] overflow-hidden flex flex-col justify-between select-none group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-black/5"
            >
              {/* Upper Area: Dynamic Breathing Pixel Canvas with Centered Floating Glass Card */}
              <div
                className="relative w-full h-[300px] sm:h-[365px] flex items-center justify-center overflow-hidden"
                style={{ background: VARIANT_TOP_BG[card.mosaicVariant] }}
              >
                {/* 1. Dynamic Background Pixel Grid Structure */}
                <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
                  <DynamicMosaicCanvas variant={card.mosaicVariant} />
                </div>

                {/* 2. Floating Frosted Glass Card in Center matching reference exactly */}
                <div className="relative z-10 w-[220px] sm:w-[260px] rounded-xl sm:rounded-2xl bg-white/85 backdrop-blur-md p-3.5 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-white/90 group-hover:scale-[1.02] group-hover:bg-white/95 transition-all duration-300">
                  {card.glassWidget}
                </div>
              </div>

              {/* Lower Area: Bold bottom title, clean & authentic to reference design */}
              <div className="flex-1 p-5 sm:p-7 pt-3 sm:pt-4 pb-4 sm:pb-6 flex items-center">
                <h3 className="text-lg sm:text-[22px] font-bold text-black tracking-tight leading-[1.2]">
                  {card.bottomTitle}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
