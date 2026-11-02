import { gsap } from 'gsap';
import { renderHeader } from '../components/Header.js';
import { renderLogosTicker } from '../components/LogosTicker.js';
import { renderFooter } from '../components/Footer.js';

export function renderStudioPage() {
  return `
    <div class="subpage-wrapper-authentic bg-white text-black min-h-screen">
      ${renderHeader('/studio')}

      <!-- STUDIO HERO -->
      <div class="pt-28 md:pt-40 pb-20 max-w-6xl mx-auto px-4">
        
        <!-- LIVE NOIDA TELEMETRY BADGE -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-black/10 text-xs !font-mono text-black/70 mb-6">
          <span class="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
          <span id="studio-noida-clock">NOIDA HQ: 10:25:00 PM IST</span>
          <span>•</span>
          <span class="text-black font-medium">CAMPUS OPERATIONAL</span>
        </div>

        <div class="max-w-4xl">
          <p class="!font-mono text-sm text-[#FF9900] mb-4 tracking-wider uppercase">NOIDA INNOVATION STUDIO • DELIVERING PROVEN RESULTS</p>
          <h1 class="!font-mono text-4xl sm:text-5xl lg:text-7xl font-light break-words leading-[115%] text-black">
            Where craftsmanship meets enterprise scale.
          </h1>
          <div class="max-w-2xl mt-8 mb-12 text-lg sm:text-xl text-black/80 leading-relaxed font-light">
            <p>Led by Director & CEO <strong>Kranti Parashar</strong>, Arka Technovation builds on a proven execution heritage of delivering over 6,250+ enterprise projects. We engineer high-performance web applications, command search engine authority, architect high-ROAS marketing engines, and produce cinematic corporate films from Noida.</p>
          </div>
        </div>

        <!-- 2 PROVEN STAT COUNTERS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          <div class="p-8 rounded-2xl bg-[#FAFAFA] border border-black/10">
            <p class="!font-mono text-4xl sm:text-5xl font-light text-black mb-2">500+</p>
            <p class="!font-mono text-xs uppercase tracking-widest text-black/50">Projects Successfully Executed</p>
          </div>
          <div class="p-8 rounded-2xl bg-[#FAFAFA] border border-black/10">
            <p class="!font-mono text-4xl sm:text-5xl font-light text-black mb-2">100+</p>
            <p class="!font-mono text-xs uppercase tracking-widest text-black/50">Verified Client Testimonials</p>
          </div>
        </div>

        <div class="w-full max-h-[75dvh] aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-neutral-100">
          <img class="w-full h-full object-cover object-center" src="/assets/noida-studio-collage.jpg" alt="Arka Noida Campus" />
        </div>

        <!-- KRANTI PARASHAR FOUNDER & CEO LEADERSHIP FEATURE -->
        <div class="mt-16 p-8 sm:p-12 rounded-2xl bg-[#0F1420] text-white border border-white/10 shadow-xl relative overflow-hidden">
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-[#FF9900]/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start justify-between">
            <div class="max-w-3xl">
              <div class="flex items-center gap-2 mb-4">
                <span class="w-2 h-2 rounded-full bg-[#FF9900]"></span>
                <span class="text-xs !font-mono text-white/60 uppercase tracking-widest">LEADERSHIP STATEMENT • NOIDA INNOVATION CAMPUS</span>
              </div>
              <p class="text-xl sm:text-2xl lg:text-3xl font-light !font-mono text-white/95 leading-snug mb-6">
                “We don’t build software or launch campaigns to look good for six months. We engineer high-concurrency systems, mathematically dominant search graphs, and cinematic identities built to compound enterprise value for a decade.”
              </p>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-[#FF9900]/20 border border-[#FF9900]/40 flex items-center justify-center font-mono font-bold text-[#FF9900] text-lg">
                  KP
                </div>
                <div>
                  <p class="font-mono text-base font-medium text-white">KRANTI PARASHAR</p>
                  <p class="text-xs text-white/50">Director & Chief Executive Officer — Arka Technovation</p>
                </div>
              </div>
            </div>
            
            <div class="shrink-0 flex flex-col gap-2 pt-2 text-xs !font-mono text-white/70">
              <div class="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                <span class="text-[10px] text-white/40 uppercase block">Execution Heritage</span>
                <span class="text-white font-medium text-sm">500+ Projects Delivered</span>
              </div>
              <div class="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                <span class="text-[10px] text-white/40 uppercase block">Campus Location</span>
                <span class="text-[#00E599] font-medium text-sm">Noida, Delhi NCR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WHAT WE DO & TECH CO-FOUNDER BLUE BOX -->
      <div class="max-w-6xl mx-auto px-4 pt-16 pb-28">
        <div class="flex flex-col md:flex-row gap-16 lg:gap-20 items-stretch">
          <div class="grow flex flex-col justify-center">
            <h2 class="!font-mono text-xs opacity-50 uppercase tracking-widest mb-4">WHAT WE DO</h2>
            <div class="text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.02rem] leading-[135%] text-black">
              <p>We combine software engineering discipline, technical search engine dominance, high-conversion growth marketing, and cinematic storytelling. Every solution is custom-architected to deliver tangible business revenue.</p>
            </div>
          </div>

          <div class="relative shrink-0 w-full md:w-96">
            <div class="bg-[#4E71FF] text-white p-8 lg:p-10 rounded-2xl flex flex-col justify-between shadow-xl">
              <div>
                <p class="text-xs !font-mono text-white/60 mb-6 uppercase tracking-wider">CORE CAPABILITIES</p>
                <ol class="flex flex-col gap-3 list-decimal ml-6 text-lg sm:text-xl font-light leading-relaxed">
                  <li>Software & Web Apps</li>
                  <li>Technical SEO & Audits</li>
                  <li>Digital Growth Marketing</li>
                  <li>Corporate Film Making</li>
                  <li>Conversion Optimization</li>
                  <li>UI/UX Design Systems</li>
                </ol>
              </div>
              <div class="mt-8 pt-6 border-t border-white/20">
                <a class="text-base flex items-center justify-between text-white hover:opacity-80 transition-opacity font-medium" href="/contact-us">
                  <span>Consult with Kranti & Team</span>
                  <svg viewBox="0 0 50 50" width="28" height="28" class="fill-none stroke-current" aria-hidden="true">
                    <circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="2"></circle>
                    <g transform="translate(7, 10) scale(1)">
                      <path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="2"></path>
                      <path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="2"></path>
                      <path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="2"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GIANT MARQUEE BANNER "TRUST THE PROCESS." -->
      <div class="py-16 bg-neutral-100 overflow-hidden border-y border-black/10">
        <div class="flex whitespace-nowrap animate-marquee">
          <div class="flex items-center text-7xl sm:text-9xl lg:text-[10rem] font-light !font-mono text-black tracking-tighter pr-16 select-none">
            Trust the process. — Trust the process. — Trust the process. —
          </div>
          <div class="flex items-center text-7xl sm:text-9xl lg:text-[10rem] font-light !font-mono text-black tracking-tighter pr-16 select-none">
            Trust the process. — Trust the process. — Trust the process. —
          </div>
        </div>
      </div>

      <!-- 6 ACTION CARDS WITH 3D ICONS -->
      <div class="max-w-6xl mx-auto px-4 py-28">
        <p class="text-xs !font-mono opacity-50 uppercase tracking-widest mb-3">BUILDING COMPANIES</p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light leading-[120%] mb-12 text-black">
          How we build at Studio.
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <div class="bg-white border border-black/15 p-8 rounded-2xl flex flex-col justify-between gap-12 hover:shadow-md transition-shadow">
            <img alt="Branding" width="64" height="64" class="object-contain" src="/assets/raven.png" />
            <div>
              <h3 class="!font-mono text-sm tracking-wider uppercase mb-2 font-semibold">BRANDING</h3>
              <p class="text-xl font-light text-black/80 leading-snug">Shape a distinctive brand that fits product and market.</p>
            </div>
          </div>

          <div class="bg-white border border-black/15 p-8 rounded-2xl flex flex-col justify-between gap-12 hover:shadow-md transition-shadow">
            <img alt="Product Design" width="64" height="64" class="object-contain" src="/assets/chef_hat.png" />
            <div>
              <h3 class="!font-mono text-sm tracking-wider uppercase mb-2 font-semibold">PRODUCT DESIGN</h3>
              <p class="text-xl font-light text-black/80 leading-snug">Turn ideas into clear, valuable product experiences.</p>
            </div>
          </div>

          <div class="bg-white border border-black/15 p-8 rounded-2xl flex flex-col justify-between gap-12 hover:shadow-md transition-shadow">
            <img alt="Visual & UX" width="64" height="64" class="object-contain" src="/assets/wall_art.png" />
            <div>
              <h3 class="!font-mono text-sm tracking-wider uppercase mb-2 font-semibold">VISUAL & UX DESIGN</h3>
              <p class="text-xl font-light text-black/80 leading-snug">Craft interfaces users understand and enjoy using.</p>
            </div>
          </div>

          <div class="bg-white border border-black/15 p-8 rounded-2xl flex flex-col justify-between gap-12 hover:shadow-md transition-shadow">
            <img alt="Engineering" width="64" height="64" class="object-contain" src="/assets/data_object.png" />
            <div>
              <h3 class="!font-mono text-sm tracking-wider uppercase mb-2 font-semibold">ENGINEERING</h3>
              <p class="text-xl font-light text-black/80 leading-snug">Build robust, scalable software that can actually ship.</p>
            </div>
          </div>

          <div class="bg-white border border-black/15 p-8 rounded-2xl flex flex-col justify-between gap-12 hover:shadow-md transition-shadow">
            <img alt="Go To Market" width="64" height="64" class="object-contain" src="/assets/web_traffic.png" />
            <div>
              <h3 class="!font-mono text-sm tracking-wider uppercase mb-2 font-semibold">GO-TO-MARKET</h3>
              <p class="text-xl font-light text-black/80 leading-snug">Plan launches that win early users and real traction.</p>
            </div>
          </div>

          <div class="bg-white border border-black/15 p-8 rounded-2xl flex flex-col justify-between gap-12 hover:shadow-md transition-shadow">
            <img alt="Product Management" width="64" height="64" class="object-contain" src="/assets/dashboard_customize.png" />
            <div>
              <h3 class="!font-mono text-sm tracking-wider uppercase mb-2 font-semibold">PRODUCT MANAGEMENT</h3>
              <p class="text-xl font-light text-black/80 leading-snug">Guide roadmap and learning to fit real market needs.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- ENTERPRISE PARTNERSHIP ARCHITECTURE -->
      <div class="max-w-6xl mx-auto px-4 py-20">
        <p class="text-xs !font-mono opacity-50 uppercase tracking-widest mb-3">INSTITUTIONAL GOVERNANCE • ENTERPRISE STANDARDS</p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light leading-[120%] mb-10 text-black">
          Engineering rigor built on accountability, security, and proven SLA governance.
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-[#4E71FF] border border-[#4E71FF] rounded-2xl overflow-hidden">
          <div class="bg-white p-6 flex flex-col justify-between min-h-[260px]">
            <p class="text-[#4E71FF] !font-mono text-2xl font-bold">01</p>
            <p class="text-base font-light text-black leading-snug">Executive accountability & transparent reporting</p>
          </div>
          <div class="bg-white p-6 flex flex-col justify-between min-h-[260px]">
            <p class="text-[#4E71FF] !font-mono text-2xl font-bold">02</p>
            <p class="text-base font-light text-black leading-snug">Milestone-driven SLA delivery guarantees</p>
          </div>
          <div class="bg-white p-6 flex flex-col justify-between min-h-[260px]">
            <p class="text-[#4E71FF] !font-mono text-2xl font-bold">03</p>
            <p class="text-base font-light text-black leading-snug">Turnkey cross-functional engineering pods</p>
          </div>
          <div class="bg-white p-6 flex flex-col justify-between min-h-[260px]">
            <p class="text-[#4E71FF] !font-mono text-2xl font-bold">04</p>
            <p class="text-base font-light text-black leading-snug">Enterprise SOC2 readiness & data security</p>
          </div>
          <div class="bg-white p-6 flex flex-col justify-between min-h-[260px]">
            <p class="text-[#4E71FF] !font-mono text-2xl font-bold">05</p>
            <p class="text-base font-light text-black leading-snug">Telemetry-backed & deterministic optimization</p>
          </div>
          <div class="bg-white p-6 flex flex-col justify-between min-h-[260px]">
            <p class="text-[#4E71FF] !font-mono text-2xl font-bold">06</p>
            <p class="text-base font-light text-black leading-snug">Multi-year architectural durability & scale</p>
          </div>
        </div>
      </div>

      <!-- LIVE PRODUCTS CASE STUDIES -->
      <div class="max-w-6xl mx-auto px-4 py-16">
        <p class="text-xs !font-mono opacity-50 uppercase tracking-widest mb-3">PROVEN PRODUCTION DEPLOYMENTS</p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light leading-[120%] mb-12 text-black">
          Enterprise Systems in Production
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="w-full">
            <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="/contact-us">
              <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
                <img alt="WITZ" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/home-witz.jpg" />
              </div>
              <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60">WITZ</p>
              <p class="text-sm text-black">AI-Powered Quiz Game</p>
            </a>
          </div>

          <div class="w-full">
            <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="/contact-us">
              <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
                <img alt="WHUIS" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/whuis-1.jpg" />
              </div>
              <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60">WHUIS</p>
              <p class="text-sm text-black">Real Estate Intelligence Platform</p>
            </a>
          </div>

          <div class="w-full">
            <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="/contact-us">
              <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
                <img alt="Shift2Cal" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/last-shot-shift2cal.png" />
              </div>
              <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60">SHIFT2CAL</p>
              <p class="text-sm text-black">Shift App Manager Intelligence Platform</p>
            </a>
          </div>
        </div>
      </div>

      <!-- CLIENT LOGOS MARQUEE -->
      ${renderLogosTicker()}

      ${renderFooter()}
    </div>
  `;
}

export function initStudioPage() {
  const subpageView = document.getElementById('subpage-view');

  // Scroll-reveal observer for studio sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.fromTo(entry.target,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, root: subpageView });

  // Observe action cards for staggered entrance
  document.querySelectorAll('.subpage-wrapper-authentic .bg-white.border.border-black\\/15').forEach((card, i) => {
    card.style.opacity = '0';
    setTimeout(() => observer.observe(card), i * 60);
  });

  // Hero title entrance
  const heroTitle = document.querySelector('.subpage-wrapper-authentic h1');
  if (heroTitle) {
    gsap.fromTo(heroTitle,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: 'power4.out' }
    );
  }

  // Live Noida IST Clock
  function updateNoidaClock() {
    const clockEl = document.getElementById('studio-noida-clock');
    if (!clockEl) return;
    const now = new Date();
    const istTime = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    clockEl.textContent = `NOIDA HQ: ${istTime} IST`;
  }
  updateNoidaClock();
  const clockInterval = setInterval(updateNoidaClock, 1000);

  return () => {
    clearInterval(clockInterval);
  };
}
