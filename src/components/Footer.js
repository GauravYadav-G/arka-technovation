/**
 * Editorial Footer Component
 * Arka Technovation Private Limited
 * Backed by 6,250+ enterprise project deliveries and proven service excellence
 */
export function renderFooter() {
  return `
    <footer class="relative bg-black/60 cursor-force-white text-white">
      <div class="relative z-10 border-b border-white/20">
        <div class="md:min-h-[200px] lg:min-h-[320px] xl:max-w-6xl xl:mx-auto p-10 px-4 lg:px-12 flex flex-col md:flex-row gap-10 justify-between items-end pb-12">
          <div>
            <p class="!font-mono text-xs text-[#FF9900] uppercase tracking-widest mb-3">500+ PROJECTS DELIVERED • 100+ TESTIMONIALS</p>
            <p class="!font-mono font-light text-3xl lg:text-6xl w-full text-start md:max-w-xl lg:tracking-tighter leading-[115%]">
              Let’s engineer your digital supremacy...
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-max">
            <a class="font-light text-base md:text-xl tracking-[0.03rem] flex gap-3 items-center justify-center cursor-pointer px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors" href="/contact-us">
              <span>Initiate Project</span>
              <svg viewBox="0 0 50 50" width="24" height="24" class="fill-none stroke-current" aria-hidden="true">
                <circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="1.5"></circle>
                <g transform="translate(7, 10) scale(1)">
                  <path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="1.5"></path>
                  <path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="1.5"></path>
                  <path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="1.5"></path>
                </g>
              </svg>
            </a>
            <a class="font-mono text-xs tracking-wider flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-white/30 text-white/90 hover:border-white transition-colors" href="https://wa.me/919711487316" target="_blank" rel="noopener">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      <div class="z-10 relative">
        <div class="grid md:grid-cols-3 border-b border-white/20 lg:px-12 bg-black/40">
          
          <!-- Col 1: Core Services & Execution -->
          <div class="px-4 py-8 md:pr-8 lg:p-8 border-b md:border-b-0 md:border-r border-white/15">
            <p class="!font-mono text-xs text-[#FF9900] mb-4 tracking-wider uppercase">CORE SERVICES & CAPABILITIES</p>
            <nav>
              <ul class="flex flex-col gap-2.5 list-none p-0 m-0">
                <li class="font-medium text-xs"><a class="hover:text-[#FF9900] transition-colors" href="/pillars/software-design">Software & Web Application Development</a></li>
                <li class="font-medium text-xs"><a class="hover:text-[#FF9900] transition-colors" href="/pillars/seo">SEO, Technical Audits & Search Domination</a></li>
                <li class="font-medium text-xs"><a class="hover:text-[#FF9900] transition-colors" href="/pillars/digital-marketing">Digital Marketing & Performance Growth</a></li>
                <li class="font-medium text-xs"><a class="hover:text-[#FF9900] transition-colors" href="/pillars/corporate-video">Corporate Film Making & Video Production</a></li>
              </ul>
            </nav>
          </div>

          <!-- Col 2: Studio & Work -->
          <div class="px-4 py-8 md:p-8 border-b md:border-b-0 md:border-r border-white/15">
            <p class="!font-mono text-xs text-white/50 mb-4 tracking-wider uppercase">COMPANY & WORK</p>
            <nav>
              <ul class="flex flex-col gap-2.5 list-none p-0 m-0">
                <li class="font-medium text-xs"><a class="hover:text-white/70 transition-colors" href="/studio">The Innovation Studio</a></li>
                <li class="font-medium text-xs"><a class="hover:text-white/70 transition-colors" href="/manifesto">Our Manifesto & Craft</a></li>
                <li class="font-medium text-xs"><a class="hover:text-white/70 transition-colors" href="/contact-us">Start a Project / Consultation</a></li>
              </ul>
            </nav>
          </div>

          <!-- Col 3: Leadership & Track Record -->
          <div class="px-4 py-8 md:p-8">
            <p class="!font-mono text-xs text-white/50 mb-4 tracking-wider uppercase">LEADERSHIP & TRACK RECORD</p>
            <p class="text-xs text-white/80 leading-relaxed mb-4">
              Delivering over 500+ software, SEO, growth marketing, and corporate film projects with 100+ verified client testimonials.
            </p>
            <div class="flex flex-col gap-1.5 text-xs font-mono text-white/70">
              <p>Noida, Delhi NCR, India</p>
              <a href="mailto:contact@arkatechnovation.com" class="hover:text-white transition-colors">contact@arkatechnovation.com</a>
            </div>
          </div>

        </div>

        <div class="flex flex-col md:flex-row py-6 md:py-8 p-4 lg:px-12 text-xs gap-4 bg-black/50 text-white/60 justify-between items-center">
          <p>© 2026 Arka Technovation Private Limited. All Rights Reserved.</p>
          <p class="text-center font-mono text-[11px] text-white/50">Noida, Delhi NCR • Global Digital Engineering & Media</p>
          <p class="text-right">500+ Projects Delivered</p>
        </div>
      </div>
    </footer>
  `;
}
