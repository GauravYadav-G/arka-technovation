'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Clock, Calendar, ChevronRight, ArrowUpRight } from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { BLOG_POSTS, getBlogCategories, type BlogPost } from '@/lib/blogs';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => getBlogCategories(), []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = filteredPosts[0];
  const gridPosts = selectedCategory === 'All' && !searchQuery ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#E8742C] selection:text-white">
      {/* Navigation */}
      <PortfoliteNav />

      {/* ── Editorial Header Section (NO BADGES) ── */}
      <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 border-b border-black/10 bg-[#FAF9F5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link href="/" className="hover:text-[#E8742C] transition-colors">Home</Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <span className="text-black font-medium">Blogs &amp; Insights</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-3">
              Editorial &amp; Engineering Research
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08] mb-4">
              Insights, Architecture &amp; Strategy
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
              Practical notes on full-stack architecture, Core Web Vitals optimization, custom enterprise software, and commercial search authority from the ARKA Technovation engineering pods.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mt-10 pt-8 border-t border-black/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Minimalist Text-Based Category Tabs (NO PILL BADGES) */}
            <div className="flex items-center gap-6 overflow-x-auto pb-2 md:pb-0 scrollbar-none font-mono text-xs">
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap pb-1.5 transition-colors cursor-pointer border-b-2 uppercase tracking-wider ${
                      active
                        ? 'text-black font-bold border-black'
                        : 'text-zinc-500 hover:text-black border-transparent font-medium'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Clean Search Input */}
            <div className="relative flex items-center w-full md:w-80">
              <Search className="absolute left-3.5 text-zinc-400 pointer-events-none" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or topics..."
                className="w-full pl-10 pr-14 py-2.5 bg-white rounded-xl border border-black/15 text-xs sm:text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:border-black transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-[11px] font-mono text-zinc-500 hover:text-black px-2 py-0.5 rounded bg-zinc-100"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <section className="py-16 sm:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200 max-w-md mx-auto p-8">
            <p className="text-base font-semibold text-zinc-800 mb-2">No matching articles found</p>
            <p className="text-sm text-zinc-500 mb-6 font-light">
              No articles matched your search for &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {/* ── Featured Flagship Article (Shown when no search/filter active) ── */}
            {selectedCategory === 'All' && !searchQuery && featuredPost && (
              <div className="border border-black/10 rounded-3xl overflow-hidden bg-[#FAF9F5] hover:border-black/25 transition-all duration-300 group shadow-sm">
                <div className="grid lg:grid-cols-12 items-center">
                  {/* Image container: Pure image with ZERO overlaid badges */}
                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className="lg:col-span-7 block aspect-[16/10] w-full overflow-hidden bg-zinc-100"
                  >
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.alt}
                      width={900}
                      height={560}
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </Link>

                  {/* Editorial Details */}
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-[#E8742C] font-semibold mb-2">
                        {featuredPost.category} · Featured Analysis
                      </p>
                      <Link href={`/blogs/${featuredPost.slug}`} className="block">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-[#E8742C] transition-colors leading-[1.18] mb-4">
                          {featuredPost.title}
                        </h2>
                      </Link>
                      <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono text-zinc-500">
                      <div>
                        <span className="text-black font-semibold block">{featuredPost.author.name}</span>
                        <span>{featuredPost.date} · {featuredPost.readTime}</span>
                      </div>
                      <Link
                        href={`/blogs/${featuredPost.slug}`}
                        className="inline-flex items-center gap-1.5 font-bold text-black group-hover:text-[#E8742C] transition-colors"
                      >
                        <span>Read Analysis</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Articles Grid (NO BADGES on images or in titles) ── */}
            <div>
              {selectedCategory === 'All' && !searchQuery && (
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black">
                    Recent Engineering Dispatches
                  </h3>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridPosts.map((post: BlogPost, idx: number) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col justify-between bg-white rounded-2xl border border-black/10 overflow-hidden hover:border-black/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Image Container: Clean image with NO badges overlaid */}
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="block aspect-[16/10] w-full overflow-hidden bg-zinc-100 border-b border-black/10"
                      >
                        <img
                          src={post.image}
                          alt={post.alt}
                          width={500}
                          height={312}
                          loading={idx < 3 ? 'eager' : 'lazy'}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </Link>

                      {/* Content Area */}
                      <div className="p-6">
                        {/* Meta information row (clean text, no badge) */}
                        <div className="flex items-center justify-between text-xs font-mono mb-3">
                          <span className="font-semibold text-[#E8742C] uppercase tracking-wider">
                            {post.category}
                          </span>
                          <span className="text-zinc-400">
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <Link href={`/blogs/${post.slug}`} className="block">
                          <h4 className="text-lg font-bold tracking-tight text-black group-hover:text-[#E8742C] transition-colors leading-snug mb-3 line-clamp-2">
                            {post.title}
                          </h4>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light line-clamp-3 mb-6">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="px-6 pb-6 pt-4 border-t border-black/6 flex items-center justify-between text-xs font-mono text-zinc-500">
                      <span>{post.date}</span>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="font-bold text-black group-hover:text-[#E8742C] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Read</span>
                        <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── Consultation Bar ── */}
      <section className="py-16 sm:py-20 bg-zinc-950 text-white border-t border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2">
              Engineering Advisory
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Have an Enterprise Architecture or Search Challenge?
            </h3>
            <p className="mt-2 text-zinc-400 text-sm font-light leading-relaxed">
              Consult directly with our Founder &amp; Director Mr. Kranti Parashar and senior software architects in Sector 63, Noida.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <PortfoliteFooter />
    </div>
  );
}
