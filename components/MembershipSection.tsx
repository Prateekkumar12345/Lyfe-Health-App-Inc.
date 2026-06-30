'use client';

import { useEffect, useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { membershipTiers } from '@/lib/data';
import MembershipQuiz from '@/components/MembershipQuiz';

export default function MembershipSection() {
  const [quizOpen, setQuizOpen] = useState(false);

  useEffect(() => {
    const openQuiz = () => setQuizOpen(true);
    window.addEventListener('open-membership-quiz', openQuiz);
    return () => window.removeEventListener('open-membership-quiz', openQuiz);
  }, []);

  return (
    <>
      <section id="membership" className="bg-white border-y border-black/5">
        <div className="section-pad py-16 sm:py-24">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Membership</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mt-2">
                Choose the path that fits your career
              </h2>
              <p className="text-black/40 text-base sm:text-lg mt-2">
                Clear comparison of the April 2026 direct membership model.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {membershipTiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 80}>
                <article
                  className={`rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    tier.featured
                      ? 'bg-brand-ink text-white ring-2 ring-blue-500 shadow-xl'
                      : 'bg-brand-cream border border-black/10'
                  }`}
                >
                  {tier.featured && (
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
                      Most popular
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold mb-1 ${tier.featured ? 'text-white' : 'text-black'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-3xl font-bold mb-6 ${tier.featured ? 'text-blue-400' : 'text-blue-600'}`}>
                    {tier.price}
                    {tier.period && (
                      <span className={`text-base font-normal ${tier.featured ? 'text-white/50' : 'text-black/40'}`}>
                        {tier.period}
                      </span>
                    )}
                  </p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-sm ${
                          tier.featured ? 'text-white/80' : 'text-black/60'
                        }`}
                      >
                        <span className={`mt-0.5 ${tier.featured ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                        {f}
                      </li>
                    ))}
                    {tier.missing && (
                      <li className={`flex items-start gap-2 text-sm ${tier.featured ? 'text-white/40' : 'text-black/40'}`}>
                        <span>—</span>
                        {tier.missing}
                      </li>
                    )}
                  </ul>
                  <button
                    type="button"
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                      tier.featured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border-2 border-black/20 text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={240}>
            <div className="mt-12 text-center">
              <p className="text-black/50 mb-4">Not sure which tier fits?</p>
              <button
                type="button"
                onClick={() => setQuizOpen(true)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Take the 30-second quiz
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <MembershipQuiz open={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
