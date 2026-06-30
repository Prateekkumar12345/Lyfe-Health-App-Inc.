'use client';

import Image from 'next/image';
import { FadeIn, ArrowIcon } from '@/components/FadeIn';
import { elevateCards } from '@/lib/data';

export default function ElevateSection() {
  return (
    <section id="elevate" className="bg-white border-y border-black/5">
      <div className="section-pad py-16 sm:py-24">
        <FadeIn>
          <div className="mb-10 sm:mb-14">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Growth</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mt-2">
              Elevate your career
            </h2>
            <p className="text-black/40 text-base sm:text-lg mt-2 max-w-xl">
              Resources and events designed to help you grow as a finance professional.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {elevateCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 80}>
              <a href={card.href} className="group block h-full">
                <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-black font-bold text-lg mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-black/50 text-sm leading-relaxed mb-4">{card.desc}</p>
                    <div className="flex items-center gap-1.5 text-sm text-blue-600 font-medium">
                      Learn more
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
