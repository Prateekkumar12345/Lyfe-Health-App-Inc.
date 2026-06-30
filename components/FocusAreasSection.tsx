'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { FadeIn, ArrowIcon } from '@/components/FadeIn';
import { focusAreas } from '@/lib/data';

const accentStyles: Record<string, { tab: string; panel: string; icon: string; chip: string; ring: string }> = {
  emerald: {
    tab: 'border-emerald-400 bg-emerald-500/20 text-white ring-1 ring-emerald-400/30',
    panel: 'from-emerald-600 to-emerald-800',
    icon: 'bg-emerald-500/20 text-emerald-100',
    chip: 'bg-emerald-500/15 text-emerald-100 border-emerald-400/30',
    ring: 'ring-emerald-500/20',
  },
  violet: {
    tab: 'border-violet-400 bg-violet-500/20 text-white ring-1 ring-violet-400/30',
    panel: 'from-violet-600 to-indigo-800',
    icon: 'bg-violet-500/20 text-violet-100',
    chip: 'bg-violet-500/15 text-violet-100 border-violet-400/30',
    ring: 'ring-violet-500/20',
  },
  blue: {
    tab: 'border-blue-400 bg-blue-500/20 text-white ring-1 ring-blue-400/30',
    panel: 'from-blue-600 to-blue-900',
    icon: 'bg-blue-500/20 text-blue-100',
    chip: 'bg-blue-500/15 text-blue-100 border-blue-400/30',
    ring: 'ring-blue-500/20',
  },
  sky: {
    tab: 'border-sky-400 bg-sky-500/20 text-white ring-1 ring-sky-400/30',
    panel: 'from-sky-600 to-cyan-800',
    icon: 'bg-sky-500/20 text-sky-100',
    chip: 'bg-sky-500/15 text-sky-100 border-sky-400/30',
    ring: 'ring-sky-500/20',
  },
  teal: {
    tab: 'border-teal-400 bg-teal-500/20 text-white ring-1 ring-teal-400/30',
    panel: 'from-teal-600 to-emerald-800',
    icon: 'bg-teal-500/20 text-teal-100',
    chip: 'bg-teal-500/15 text-teal-100 border-teal-400/30',
    ring: 'ring-teal-500/20',
  },
  amber: {
    tab: 'border-amber-400 bg-amber-500/20 text-white ring-1 ring-amber-400/30',
    panel: 'from-amber-600 to-orange-800',
    icon: 'bg-amber-500/20 text-amber-100',
    chip: 'bg-amber-500/15 text-amber-100 border-amber-400/30',
    ring: 'ring-amber-500/20',
  },
};

const icons: Record<string, ReactNode> = {
  ethics: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  technology: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm0-12h9v9h-9v-9z" />
    </svg>
  ),
  reporting: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  public: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  sustainability: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 4.582h-.016l-.867 12.142A2.25 2.25 0 003.636 21.75h16.728a2.25 2.25 0 002.136-2.993L21.75 7.613a9 9 0 00-8.993-4.582z" />
    </svg>
  ),
  tax: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25m0 0V3.75m0 0h-.375c-.621 0-1.125.504-1.125 1.125v.75c0 .621.504 1.125 1.125 1.125H3.75m0 0h-.375A1.125 1.125 0 012 6.75v9.75c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125V6.75A1.125 1.125 0 0020.25 5.625h-.375" />
    </svg>
  ),
};

function DetailPanel({ area, style }: { area: (typeof focusAreas)[number]; style: (typeof accentStyles)[string] }) {
  return (
    <div
      className={`relative w-full max-w-full box-border rounded-2xl bg-gradient-to-br ${style.panel} p-4 sm:p-10 ring-1 ${style.ring} shadow-2xl`}
    >
      <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none" />

      <div className="relative w-full min-w-0 max-w-full">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 ${style.icon}`}>
          {icons[area.id]}
        </div>

        <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 break-words">{area.title}</h3>
        <p className="text-white/90 text-sm sm:text-lg leading-relaxed mb-5 sm:mb-8 break-words [overflow-wrap:anywhere]">
          {area.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-5 sm:mb-8">
          {area.highlights.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border break-words ${style.chip}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={area.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/90 group max-w-full"
        >
          <span className="break-words">Explore {area.title.split(' ')[0].toLowerCase()} resources</span>
          <ArrowIcon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

export default function FocusAreasSection() {
  const [active, setActive] = useState(0);
  const area = focusAreas[active];
  const style = accentStyles[area.accent];

  return (
    <section id="focus" className="bg-brand-ink text-white overflow-x-clip scroll-mt-28">
      <div className="section-pad py-20 sm:py-24 w-full max-w-full box-border">
        <FadeIn>
          <div className="mb-8 sm:mb-12 max-w-2xl">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">What we do</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2">
              Our focus areas
            </h2>
            <p className="text-white/55 text-sm sm:text-lg mt-2 leading-relaxed">
              Six pillars guiding CPA Canada&apos;s mission to serve the public interest and empower the profession.
            </p>
          </div>
        </FadeIn>

        {/* Mobile: show content card first so it is fully visible */}
        <div className="lg:hidden w-full max-w-full min-w-0 space-y-4">
          <FadeIn key={area.id} delay={80}>
            <DetailPanel area={area} style={style} />
          </FadeIn>

          <FadeIn delay={120}>
            <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-1">
                {focusAreas.map((item, i) => {
                  const tabStyle = accentStyles[item.accent];
                  const isActive = i === active;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`shrink-0 snap-start max-w-[80vw] text-left px-4 py-3 rounded-xl border-l-4 transition-all duration-300 ${
                        isActive
                          ? tabStyle.tab
                          : 'border-white/20 bg-white/8 text-white/85 hover:bg-white/12'
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                        0{i + 1}
                      </span>
                      <span className="block text-sm font-semibold mt-0.5 leading-snug whitespace-normal">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center gap-2 pt-2">
              {focusAreas.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Focus area ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? 'w-6 bg-blue-400' : 'w-1.5 bg-white/25'
                  }`}
                />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Desktop: sidebar + panel */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 min-w-0">
          <FadeIn className="lg:col-span-4 min-w-0" delay={80}>
            <div className="flex flex-col gap-2">
              {focusAreas.map((item, i) => {
                const tabStyle = accentStyles[item.accent];
                const isActive = i === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-full min-w-0 text-left px-4 py-3.5 rounded-xl border-l-4 transition-all duration-300 ${
                      isActive
                        ? `${tabStyle.tab} shadow-md`
                        : 'border-transparent bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                      0{i + 1}
                    </span>
                    <span className="block text-sm font-semibold mt-0.5 break-words">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-8 min-w-0" delay={160}>
            <DetailPanel area={area} style={style} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
