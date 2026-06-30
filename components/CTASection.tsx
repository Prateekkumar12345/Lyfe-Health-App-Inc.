'use client';

import { FadeIn } from '@/components/FadeIn';

export default function CTASection() {
  return (
    <>
      <div className="relative -mb-1">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[80px] lg:h-[120px]">
          <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="#0A0A0F" />
        </svg>
      </div>
      <section id="join-cta" className="bg-brand-ink">
        <div className="section-pad py-16 sm:py-24">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Get started</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-3 mb-4">
                Ready to become a
                <br className="hidden sm:block" /> CPA Canada member?
              </h2>
              <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto mb-8">
                Join over 220,000 accounting professionals who rely on CPA Canada for resources, advocacy, and community.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#membership"
                  className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
                >
                  Join CPA Canada
                </a>
                <a
                  href="#become-cpa"
                  className="text-white/60 hover:text-white px-8 py-3.5 rounded-xl font-medium border border-white/10 hover:border-white/20 transition-all w-full sm:w-auto text-center"
                >
                  Learn more
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
