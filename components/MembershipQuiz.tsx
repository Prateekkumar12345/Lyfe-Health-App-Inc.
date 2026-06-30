'use client';

import { useEffect, useState } from 'react';
import {
  membershipQuiz,
  quizTierLabels,
  type QuizTier,
} from '@/lib/data';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MembershipQuiz({ open, onClose }: Props) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<QuizTier, number>>({
    member: 0,
    advantage: 0,
    affiliate: 0,
  });

  useEffect(() => {
    if (open) {
      setStep(0);
      setScores({ member: 0, advantage: 0, affiliate: 0 });
    }
  }, [open]);

  if (!open) return null;

  const finished = step >= membershipQuiz.length;
  const winner = finished
    ? (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0] as QuizTier)
    : null;

  function pickOption(tier: QuizTier) {
    setScores((s) => ({ ...s, [tier]: s[tier] + 1 }));
    setStep((s) => s + 1);
  }

  function scrollToMembership() {
    onClose();
    document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-black/5"
        role="dialog"
        aria-labelledby="quiz-title"
        aria-modal="true"
      >
        <div className="bg-brand-ink text-white px-5 py-4 flex justify-between items-start">
          <h2 id="quiz-title" className="font-bold text-lg">
            Membership path finder
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-white/40 hover:text-white"
            aria-label="Close quiz"
          >
            &times;
          </button>
        </div>

        <div className="p-6">
          {!finished ? (
            <>
              <div className="h-1 bg-black/5 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-400"
                  style={{ width: `${(step / membershipQuiz.length) * 100}%` }}
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
                Question {step + 1} of {membershipQuiz.length}
              </p>
              <p className="text-base font-semibold text-black mb-5 leading-snug">
                {membershipQuiz[step].question}
              </p>
              <div className="space-y-3">
                {membershipQuiz[step].options.map((opt) => (
                  <button
                    key={opt.text}
                    type="button"
                    onClick={() => pickOption(opt.tier)}
                    className="w-full text-left px-4 py-3.5 rounded-xl border border-black/10 text-sm text-black/70 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Recommended: {quizTierLabels[winner!]}
              </h3>
              <p className="text-sm text-black/50 mb-6">
                Based on your answers, this tier best matches your needs.
              </p>
              <button
                type="button"
                onClick={scrollToMembership}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                View membership tiers
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Standalone opener for use from AI chat or other components */
export function openMembershipQuiz() {
  window.dispatchEvent(new CustomEvent('open-membership-quiz'));
}
