'use client';

import Image from 'next/image';
import { FadeIn, ArrowIcon } from '@/components/FadeIn';
import { elevateCards } from '@/lib/data';

export default function ElevateSection() {
  const [featured, ...rest] = elevateCards;

  return (
    <section id="elevate" className="bg-gradient-to-b from-violet-50/40 via-white to-white border-y border-black/5">
      <div className="section-pad py-16 sm:py-24">
        <FadeIn>
          <div className="mb-10 sm:mb-14 max-w-2xl">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 border-l-[3px] border-violet-600 pl-3">
              Learning &amp; events
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-black mt-4 leading-tight">
              Tools to grow
              <span className="block font-light text-black/55 mt-1">your professional practice</span>
            </h2>
            <p className="text-black/45 text-base sm:text-lg mt-3 leading-relaxed">
              Handbooks, conferences, and complimentary CPD — curated to help you stay current and competitive.
            </p>
          </div>
        </FadeIn>

        {/* Featured — large horizontal card */}
        <FadeIn delay={60}>
          <a href={featured.href} className="group block mb-6">
            <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-black/8 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative min-h-[220px] sm:min-h-[280px] md:min-h-[320px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-violet-950 to-slate-900 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-violet-300 mb-3">
                  Featured resource
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug group-hover:text-violet-200 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-6">
                  {featured.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 group-hover:text-white transition-colors">
                  Open handbook
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </a>
        </FadeIn>

        {/* Secondary cards — image-forward tiles */}
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((card, i) => (
            <FadeIn key={card.title} delay={120 + i * 80}>
              <a href={card.href} className="group block h-full">
                <div className="h-full rounded-2xl overflow-hidden border border-black/8 bg-white shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col">
                  <div className="relative h-56 sm:h-64 shrink-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-black font-bold text-lg mb-2 leading-snug group-hover:text-violet-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-black/50 text-sm leading-relaxed flex-1">{card.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-violet-600 font-semibold">
                      View details
                      <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
