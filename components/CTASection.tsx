'use client';

import { FadeIn } from '@/components/FadeIn';

export default function CTASection() {
  return (
    <section id="join-cta" className="bg-brand-ink border-t border-white/10">
      <div className="section-pad py-14 sm:py-20">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-left">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">
                Membership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Find the membership path
                <span className="block font-light text-white/70 mt-1">that fits your career stage</span>
              </h2>
              <p className="text-white/45 text-base sm:text-lg mt-4 max-w-md leading-relaxed">
                Compare tiers, explore benefits, or take our 30-second quiz to see which option matches your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4">
              <a
                href="#membership"
                className="flex-1 bg-white text-brand-ink px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Compare membership tiers
              </a>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-membership-quiz'))}
                className="flex-1 text-white px-6 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors text-center"
              >
                Take the 30-second quiz
              </button>
              <a
                href="#become-cpa"
                className="text-sm text-white/50 hover:text-white/80 text-center sm:text-left lg:text-center transition-colors"
              >
                Learn about CPA certification →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
