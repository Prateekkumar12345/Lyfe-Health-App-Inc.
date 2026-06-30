'use client';

import Image from 'next/image';
import { FadeIn, ArrowIcon } from '@/components/FadeIn';
import { newsItems } from '@/lib/data';

export default function NewsSection() {
  return (
    <section id="news" className="section-pad py-16 sm:py-24">
      <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Latest</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mt-2">
              In the news
            </h2>
          </div>
          <a
            href="#news"
            className="group inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black transition-colors px-4 py-2 rounded-xl bg-white border border-black/5 hover:shadow-sm"
          >
            View all articles
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item, i) => (
          <FadeIn key={item.title} delay={i * 80}>
            <a href={item.href} className="group block h-full">
              <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-black px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-black font-bold text-lg mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm text-blue-600 font-medium">
                    Read story
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
