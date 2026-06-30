'use client';

import Image from 'next/image';
import { FadeIn, ArrowIcon } from '@/components/FadeIn';
import { newsItems } from '@/lib/data';

export default function NewsSection() {
  const [lead, ...more] = newsItems;

  return (
    <section id="news" className="bg-brand-cream">
      <div className="section-pad py-16 sm:py-24">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div className="max-w-xl">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 border-l-[3px] border-slate-800 pl-3">
                Insights
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-black mt-4 leading-tight">
                What CPAs
                <span className="block font-light text-black/55">are reading now</span>
              </h2>
            </div>
            <a
              href="#news"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-black transition-colors px-5 py-3 rounded-xl bg-white border border-black/10 hover:border-black/20 shadow-sm"
            >
              Browse all stories
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Lead story — tall image panel */}
          <FadeIn className="lg:col-span-7" delay={60}>
            <a href={lead.href} className="group block h-full">
              <article className="h-full rounded-2xl overflow-hidden border border-black/8 bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="relative h-64 sm:h-80 lg:h-[22rem] shrink-0">
                  <Image
                    src={lead.image}
                    alt={lead.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold bg-white/95 text-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
                    {lead.tag}
                  </span>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black leading-snug mb-3 group-hover:text-slate-700 transition-colors">
                    {lead.title}
                  </h3>
                  <p className="text-black/50 text-sm sm:text-base leading-relaxed flex-1">{lead.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                    Read full story
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </a>
          </FadeIn>

          {/* Side stack — thumbnail + text rows */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {more.map((item, i) => (
              <FadeIn key={item.title} delay={140 + i * 80}>
                <a href={item.href} className="group block h-full">
                  <article className="h-full rounded-2xl overflow-hidden border border-black/8 bg-white shadow-sm hover:shadow-lg transition-all duration-500 flex flex-row min-h-[140px]">
                    <div className="relative w-[38%] sm:w-[42%] min-w-[120px] shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        sizes="180px"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-4 sm:p-5 flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        {item.tag}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-black leading-snug mb-1.5 line-clamp-2 group-hover:text-slate-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-black/45 text-xs sm:text-sm leading-relaxed line-clamp-2 hidden sm:block">
                        {item.desc}
                      </p>
                      <span className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700">
                        Read
                        <ArrowIcon className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </article>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
