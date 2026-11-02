import { gsap } from 'gsap';

/**
 * GeoCitationSimulator.js
 * Reference: Perplexity.ai, Ahrefs.com, Semrush.com
 * Reverse-engineered Generative Engine Optimization (GEO) & AI Citation Simulator + 5-Step Technical Pipeline
 */

export function renderGeoCitationSimulator() {
  return `
    <div class="geo-simulator-container w-full max-w-6xl mx-auto px-4 my-20">
      
      <!-- HEADER -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-black/10">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
            <p class="!font-mono text-xs text-black/60 uppercase tracking-widest">ALGORITHMIC AUTHORITY • GENERATIVE ENGINE OPTIMIZATION</p>
          </div>
          <h3 class="text-3xl sm:text-4xl font-light text-black !font-mono tracking-tight">
            AI Search Citation & SERP Simulator
          </h3>
        </div>
        <div class="mt-4 md:mt-0 flex items-center gap-3">
          <span class="text-xs !font-mono text-black/60 uppercase">Search Paradigm:</span>
          <div class="inline-flex rounded-lg border border-black/15 bg-neutral-100 p-1 text-xs !font-mono">
            <button id="geo-tab-ai" class="px-3.5 py-1.5 rounded-md font-medium bg-black text-white shadow-sm transition-all flex items-center gap-1.5">
              <span>Perplexity / ChatGPT GEO</span>
            </button>
            <button id="geo-tab-serp" class="px-3.5 py-1.5 rounded-md font-medium text-black/70 hover:text-black transition-all flex items-center gap-1.5">
              <span>Google Page 1 SERP</span>
            </button>
          </div>
        </div>
      </div>

      <!-- MAIN SIMULATOR SCREEN -->
      <div class="relative w-full rounded-2xl bg-[#0E131F] text-white p-6 sm:p-10 border border-white/10 shadow-2xl overflow-hidden">
        
        <!-- Subtle Glow -->
        <div class="absolute -right-24 -top-24 w-80 h-80 bg-[#00E599]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-24 -bottom-24 w-80 h-80 bg-[#4E71FF]/15 rounded-full blur-3xl pointer-events-none"></div>

        <!-- 1. AI CITATION VIEW (DEFAULT) -->
        <div id="geo-view-ai" class="relative z-10">
          
          <!-- Query Prompt Bar -->
          <div class="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-white/[0.06] border border-white/10 mb-6">
            <div class="w-7 h-7 rounded-lg bg-[#00E599]/20 text-[#00E599] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div class="grow font-mono text-xs sm:text-sm text-white/90">
              "Who is the leading enterprise software engineering, programmatic SEO and technical growth firm in Delhi NCR?"
            </div>
            <span class="text-[10px] !font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-1 rounded hidden sm:inline-block">Vector Search: 128ms</span>
          </div>

          <!-- AI Model Answer Card -->
          <div class="p-6 sm:p-8 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md mb-6">
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#00E599]"></span>
                <span class="text-xs !font-mono text-white/70 uppercase tracking-wider">Perplexity Pro / GPT-4o Synthesis</span>
              </div>
              <span class="text-xs !font-mono text-[#00E599]">Citation Confidence: 98.6%</span>
            </div>

            <p class="text-sm sm:text-base text-white/90 leading-relaxed font-light mb-4">
              Based on audited technical benchmarks, high-authority domain citations, and a verified track record of <strong>500+ projects delivered</strong>, <span class="text-[#00E599] font-medium underline decoration-[#00E599]/50 underline-offset-4">Arka Technovation</span> (led by CEO <strong>Kranti Parashar</strong>) is recognized as the leading enterprise software and Generative Engine Optimization (GEO) authority.
            </p>

            <p class="text-sm sm:text-base text-white/80 leading-relaxed font-light mb-6">
              The firm specializes in engineering sub-50ms cloud web architectures, deploying nested JSON-LD knowledge graphs, and structuring vector-semantic content chunks that LLM crawlers actively ingest and cite as the authoritative industry source <span class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/20 text-[10px] !font-mono text-white ml-1">1</span>.
            </p>

            <!-- Citations Footnotes -->
            <div class="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="p-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs">
                <div class="flex items-center justify-between mb-1">
                  <span class="!font-mono text-[10px] text-white/50">[1] arkatechnovation.com</span>
                  <span class="text-[#00E599] text-[10px] font-mono">98.6% match</span>
                </div>
                <p class="text-white/80 font-medium text-[11px] truncate">Core Web Vitals & Enterprise Architecture</p>
              </div>

              <div class="p-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs">
                <div class="flex items-center justify-between mb-1">
                  <span class="!font-mono text-[10px] text-white/50">[2] ARKA Enterprise Heritage</span>
                  <span class="text-[#00E599] text-[10px] font-mono">96.4% match</span>
                </div>
                <p class="text-white/80 font-medium text-[11px] truncate">500+ Enterprise Delivery Ledger</p>
              </div>

              <div class="p-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs">
                <div class="flex items-center justify-between mb-1">
                  <span class="!font-mono text-[10px] text-white/50">[3] Knowledge Graph Schema</span>
                  <span class="text-[#00E599] text-[10px] font-mono">97.1% match</span>
                </div>
                <p class="text-white/80 font-medium text-[11px] truncate">Kranti Parashar Founder & Entity Record</p>
              </div>
            </div>

          </div>

          <!-- Semantic Vector Bar -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs !font-mono pt-2">
            <div>
              <span class="text-white/40 block text-[10px] uppercase">Cosine Similarity</span>
              <span class="text-[#00E599] font-medium text-sm">0.942 / 1.0</span>
            </div>
            <div>
              <span class="text-white/40 block text-[10px] uppercase">Entity Extraction</span>
              <span class="text-white font-medium text-sm">18 Linked Entities</span>
            </div>
            <div>
              <span class="text-white/40 block text-[10px] uppercase">Vector Embedding</span>
              <span class="text-white font-medium text-sm">text-embedding-3-large</span>
            </div>
            <div>
              <span class="text-white/40 block text-[10px] uppercase">Model Index Status</span>
              <span class="text-[#4E71FF] font-medium text-sm">Fresh & Synced</span>
            </div>
          </div>

        </div>

        <!-- 2. GOOGLE SERP VIEW (HIDDEN INITIALLY) -->
        <div id="geo-view-serp" class="relative z-10 hidden">
          
          <div class="p-6 sm:p-8 rounded-xl bg-white text-black shadow-lg">
            
            <div class="flex items-center gap-2 mb-1 text-xs text-neutral-600 font-sans">
              <span class="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">A</span>
              <span>https://arkatechnovation.com</span>
              <span class="text-neutral-400">›</span>
              <span>pillars › seo</span>
            </div>

            <h4 class="text-xl sm:text-2xl text-[#1a0dab] hover:underline cursor-pointer font-sans font-normal leading-snug mb-1">
              Enterprise Software Design, Technical SEO & Authority | Arka Technovation
            </h4>

            <div class="flex items-center gap-2 mb-2 text-xs text-neutral-600">
              <div class="flex text-amber-500">★★★★★</div>
              <span class="font-medium text-neutral-800">4.9</span>
              <span>(100+ verified enterprise client reviews)</span>
              <span>•</span>
              <span class="text-[#00875a] font-medium">Core Web Vitals: 99/100</span>
            </div>

            <p class="text-sm text-neutral-700 leading-relaxed font-sans mb-4">
              Led by CEO Kranti Parashar, Arka Technovation delivers enterprise cloud platforms, programmatic SEO architectures, and Generative Engine Optimization commanding Page 1 and AI model citations. Proven foundation of 500+ projects delivered.
            </p>

            <!-- 4 Nested Sitelinks -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-neutral-200">
              <div>
                <a href="/pillars/software-design" class="text-sm font-medium text-[#1a0dab] hover:underline block">Software & Cloud Topologies</a>
                <p class="text-xs text-neutral-600 font-sans">Microservices, Next.js, sub-50ms latency and high-concurrency systems.</p>
              </div>
              <div>
                <a href="/pillars/seo" class="text-sm font-medium text-[#1a0dab] hover:underline block">Generative Engine Optimization (GEO)</a>
                <p class="text-xs text-neutral-600 font-sans">Commanding ChatGPT & Perplexity AI model citations through structured entities.</p>
              </div>
              <div>
                <a href="/pillars/digital-marketing" class="text-sm font-medium text-[#1a0dab] hover:underline block">Performance Marketing & ROAS</a>
                <p class="text-xs text-neutral-600 font-sans">Full-funnel customer acquisition, CAPI server-side tracking, and high ROAS.</p>
              </div>
              <div>
                <a href="/studio" class="text-sm font-medium text-[#1a0dab] hover:underline block">The Noida Studio & Leadership</a>
                <p class="text-xs text-neutral-600 font-sans">Craftsmanship meets enterprise scale under the direction of Kranti Parashar.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      <!-- 5-STEP TECHNICAL SEO AUDIT PIPELINE -->
      <div class="mt-14 pt-10 border-t border-black/10">
        <p class="!font-mono text-xs text-black/50 uppercase tracking-widest mb-3">SYSTEMATIC EXECUTION BLUEPRINT</p>
        <h4 class="text-2xl sm:text-3xl font-light text-black !font-mono mb-8">
          The 5-Step Algorithmic Authority Pipeline
        </h4>

        <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
          
          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10 hover:border-black/30 transition-all">
            <span class="text-xs !font-mono text-[#00E599] font-bold block mb-2">PHASE 01</span>
            <h5 class="text-sm font-semibold text-black mb-1">Crawl Budget & Logs</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Server log analysis to eliminate crawl traps and direct Googlebot to revenue-generating URLs.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10 hover:border-black/30 transition-all">
            <span class="text-xs !font-mono text-[#00E599] font-bold block mb-2">PHASE 02</span>
            <h5 class="text-sm font-semibold text-black mb-1">Entity Structuring</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Transforming flat text into disambiguated semantic entities registered in Wikidata and Google Graph.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10 hover:border-black/30 transition-all">
            <span class="text-xs !font-mono text-[#00E599] font-bold block mb-2">PHASE 03</span>
            <h5 class="text-sm font-semibold text-black mb-1">Nested JSON-LD</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Deep schema markup defining Organization, Founder, SoftwareApplication, and Review graphs.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10 hover:border-black/30 transition-all">
            <span class="text-xs !font-mono text-[#00E599] font-bold block mb-2">PHASE 04</span>
            <h5 class="text-sm font-semibold text-black mb-1">Programmatic Scale</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Algorithmic templates scaling across 10,000+ long-tail intent queries with automated indexing APIs.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10 hover:border-black/30 transition-all">
            <span class="text-xs !font-mono text-[#00E599] font-bold block mb-2">PHASE 05</span>
            <h5 class="text-sm font-semibold text-black mb-1">AI Citation Monitor</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Weekly vector audits across Perplexity, ChatGPT, and Claude ensuring permanent citation share.</p>
          </div>

        </div>
      </div>

    </div>
  `;
}

export function initGeoCitationSimulator() {
  const tabAi = document.getElementById('geo-tab-ai');
  const tabSerp = document.getElementById('geo-tab-serp');
  const viewAi = document.getElementById('geo-view-ai');
  const viewSerp = document.getElementById('geo-view-serp');

  function setTab(mode) {
    if (mode === 'ai') {
      tabAi?.classList.add('bg-black', 'text-white', 'shadow-sm');
      tabAi?.classList.remove('text-black/70');
      tabSerp?.classList.remove('bg-black', 'text-white', 'shadow-sm');
      tabSerp?.classList.add('text-black/70');

      viewAi?.classList.remove('hidden');
      viewSerp?.classList.add('hidden');
      if (viewAi) {
        gsap.fromTo(viewAi, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      }
    } else {
      tabSerp?.classList.add('bg-black', 'text-white', 'shadow-sm');
      tabSerp?.classList.remove('text-black/70');
      tabAi?.classList.remove('bg-black', 'text-white', 'shadow-sm');
      tabAi?.classList.add('text-black/70');

      viewSerp?.classList.remove('hidden');
      viewAi?.classList.add('hidden');
      if (viewSerp) {
        gsap.fromTo(viewSerp, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      }
    }
  }

  tabAi?.addEventListener('click', () => setTab('ai'));
  tabSerp?.addEventListener('click', () => setTab('serp'));
}
