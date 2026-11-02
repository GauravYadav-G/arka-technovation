'use client';

export default function PortfoliteAbout() {
  const workedIn = [
    'Tata Teleservices Ltd',
    'Kotak Mahindra Bank',
    'Aegon Religare',
    'Indiamart Intermesh Ltd.',
    'Care Ratings Ltd.',
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 font-framer bg-white text-black border-t border-black/10 overflow-hidden"
    >
      {/* Background ambient light pool (GPU accelerated) */}
      <div
        className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(228,228,231,0.5)_0%,rgba(228,228,231,0)_70%)] rounded-full pointer-events-none"
        style={{ transform: 'translate3d(0, -50%, 0)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column (Clean Framer Editorial Layout) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <p className="text-xs font-mono uppercase tracking-widest text-[#E8742C] font-semibold mb-2">
              Leadership &amp; Heritage
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.12]">
              Meet Founder
            </h2>
            <p className="text-xs text-zinc-500 font-mono mt-1 mb-2">
              ARKA Technovation Private Limited · Formerly known as Jaikvik Technology India Pvt. Ltd.
            </p>

            <p className="mt-4 sm:mt-6 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Led by Founder &amp; Director <strong className="font-semibold text-black">Mr. Kranti Parashar</strong>, an eminent figure in Indian industry circles with over 10 years of craft across technology, enterprise software, and growth marketing. Operating as ARKA Technovation Private Limited (formerly known as Jaikvik Technology India Pvt. Ltd.), with an MBA background, focus on execution, and dedicated in-house specialist pods based in Sector 63, Noida, he drives integrated digital transformation and revenue acceleration across 850+ enterprise and manufacturing deployments.
            </p>

            {/* Mobile Founder Photo (shown between narrative and credentials on mobile) */}
            <div className="mt-6 w-full block lg:hidden">
              <div className="relative rounded-2xl overflow-hidden border border-black/12 bg-zinc-100 aspect-[4/4.5] shadow-lg group">
                <img
                  src="/portfolite/kranti-parashar.webp"
                  alt="Mr. Kranti Parashar — Founder & Director, ARKA Technovation Private Limited"
                  loading="lazy"
                  decoding="async"
                  width="768"
                  height="1024"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 inset-x-4 flex items-end justify-between z-10">
                  <div>
                    <p className="text-white font-bold text-base">Mr. Kranti Parashar</p>
                    <p className="text-zinc-300 text-xs">Founder &amp; Director · ARKA Technovation Private Limited</p>
                    <p className="text-zinc-400 text-[11px] mt-0.5">Sector 63, Noida (Delhi NCR)</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-semibold flex-shrink-0">
                    10+ Years
                  </div>
                </div>
              </div>
            </div>

            {/* Worked in Companies */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-black/10 w-full">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5 sm:mb-3">
                Worked in:
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {workedIn.map((company) => (
                  <span
                    key={company}
                    className="px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium bg-zinc-100 border border-black/8 text-zinc-800"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Photo (Desktop only) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/12 bg-zinc-100 aspect-[4/4.8] sm:aspect-[4/5] shadow-xl group">
              <img
                src="/portfolite/kranti-parashar.webp"
                alt="Mr. Kranti Parashar — Founder & Director, ARKA Technovation Private Limited"
                loading="lazy"
                decoding="async"
                width="768"
                height="1024"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none" />

              <div className="absolute bottom-6 inset-x-6 flex items-end justify-between z-10">
                <div>
                  <p className="text-white font-bold text-base sm:text-lg">Mr. Kranti Parashar</p>
                  <p className="text-zinc-300 text-xs">Founder &amp; Director · ARKA Technovation Private Limited</p>
                  <p className="text-zinc-400 text-[11px] mt-0.5">Sector 63, Noida (Delhi NCR)</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-semibold">
                  10+ Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
