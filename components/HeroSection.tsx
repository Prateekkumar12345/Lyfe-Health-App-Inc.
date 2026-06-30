'use client';

import Image from 'next/image';
import { FadeIn, ArrowIcon } from '@/components/FadeIn';
import { heroBento } from '@/lib/data';

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute -top-24 right-0 w-[600px] sm:w-[800px] opacity-40" viewBox="0 0 800 800" fill="none" aria-hidden>
        <path d="M400 0L500 150H300L400 0Z" fill="url(#g1)" opacity="0.3" />
        <path d="M600 200L700 350H500L600 200Z" fill="url(#g1)" opacity="0.2" />
        <path d="M200 300L300 450H100L200 300Z" fill="url(#g1)" opacity="0.25" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute -bottom-20 -left-24 w-[500px] sm:w-[700px] opacity-30" viewBox="0 0 700 700" fill="none" aria-hidden>
        <path d="M350 50L450 200H250L350 50Z" fill="url(#g2)" opacity="0.3" />
        <path d="M150 250L250 400H50L150 250Z" fill="url(#g2)" opacity="0.2" />
        <defs>
          <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
    </div>
  );
}

export default function HeroSection() {
  const { featured, cards } = heroBento;

  return (
    <section className="relative isolate overflow-hidden pb-8 sm:pb-16 pt-28 sm:pt-36">
      <HeroBackground />

      <div className="section-pad">
        <FadeIn>
          <div className="flex flex-col gap-2 mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Chartered Professional Accountants of Canada
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-black max-w-4xl">
              Empowering Canada&apos;s
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">financial leaders</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-blue-100/50 -skew-x-6 rounded-sm" />
                <span className="absolute left-0 right-0 bottom-0.5 h-0.5 bg-blue-400/60 rounded-full" />
              </span>
              of tomorrow
            </h1>
            <p className="text-base sm:text-lg text-black/50 max-w-2xl mt-2 leading-relaxed">
              CPA Canada represents more than 220,000 professional accountants — shaping the future of business,
              sustainability, and public trust.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-5">
          {/* Featured news card */}
          <a href={featured.href} className="order-first sm:col-span-2 lg:row-span-5 group block">
            <FadeIn className="h-full">
              <div className="relative h-full min-h-[320px] lg:min-h-0 rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm card-lift">
                <div className="absolute inset-0">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 min-h-[320px] lg:min-h-[480px]">
                  <span className="text-white/70 text-xs font-medium uppercase tracking-wider mb-2">{featured.tag}</span>
                  <h2 className="text-white text-xl sm:text-2xl font-bold mb-2 leading-tight">{featured.title}</h2>
                  <p className="text-white/70 text-sm max-w-lg">{featured.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    {featured.cta}
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </a>

          {/* Webinar card */}
          <a href={cards[0].href} className="lg:col-span-1 lg:row-span-2 group block">
            <FadeIn className="h-full" delay={80}>
              <BentoTextCard {...cards[0]} />
            </FadeIn>
          </a>

          {/* Pre-budget card */}
          <a href={cards[1].href} className="lg:col-span-1 lg:row-span-2 group block">
            <FadeIn className="h-full" delay={160}>
              <BentoTextCard {...cards[1]} icon="currency" />
            </FadeIn>
          </a>

          {/* Engagement guide card */}
          <a href={cards[2].href} className="lg:col-span-2 lg:row-span-3 group block">
            <FadeIn className="h-full" delay={240}>
              <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 shadow-sm card-lift flex">
                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
                  <span className="text-blue-100/70 text-xs font-medium uppercase tracking-wider mb-1">{cards[2].tag}</span>
                  <h2 className="text-white font-bold text-lg sm:text-xl leading-snug mb-1">{cards[2].title}</h2>
                  <p className="text-blue-100/80 text-sm max-w-md">{cards[2].desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-sm text-white font-medium bg-white/15 px-3 py-1.5 rounded-full w-fit hover:bg-white/25 transition-colors">
                    {cards[2].cta}
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
                {cards[2].image && (
                  <div className="w-1/3 hidden sm:block relative">
                    <Image src={cards[2].image} alt="" fill className="object-cover" sizes="200px" />
                  </div>
                )}
              </div>
            </FadeIn>
          </a>
        </div>
      </div>
    </section>
  );
}

function BentoTextCard({
  tag,
  title,
  desc,
  cta,
  accent = 'blue',
  icon,
}: {
  tag: string;
  title: string;
  desc: string;
  cta: string;
  accent?: string;
  icon?: string;
}) {
  const ctaColor = accent === 'amber' ? 'text-amber-600' : 'text-blue-600';
  const tagColor = accent === 'amber' ? 'text-amber-600' : 'text-blue-600';

  return (
    <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm card-lift p-5 sm:p-6 flex flex-col justify-between min-h-[180px]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="flex items-start justify-between relative">
        <span className={`text-xs font-medium ${tagColor} bg-blue-50 px-2.5 py-1 rounded-full`}>{tag}</span>
        {!icon && (
          <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
            <svg className="w-4 h-4 text-black/40 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </div>
        )}
        {icon === 'currency' && (
          <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
            <svg className="w-4 h-4 text-black/40 group-hover:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
      </div>
      <div className="relative">
        <h2 className="text-black font-bold text-lg leading-snug mb-1">{title}</h2>
        <p className="text-black/50 text-sm">{desc}</p>
        <div className={`mt-3 flex items-center gap-1.5 text-sm font-medium ${ctaColor}`}>
          {cta}
          <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
