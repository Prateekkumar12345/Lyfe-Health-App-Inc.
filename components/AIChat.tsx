'use client';

import { useState } from 'react';
import { aiResponses } from '@/lib/data';

function formatMessage(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');

  function getReply(q: string) {
    const lower = q.toLowerCase();
    if (/quiz|which tier|path finder|not sure/.test(lower)) return '__quiz__';
    if (/member|tier|affiliate|advantage|200|1295|join/.test(lower)) return aiResponses.membership;
    if (/pd|hour|logged|tracker|cpd/.test(lower)) return aiResponses.pd;
    if (/tax|360|cch/.test(lower)) return aiResponses.tax;
    return aiResponses.default;
  }

  function handleBotReply(q: string) {
    const reply = getReply(q);
    if (reply === '__quiz__') {
      setMessages((m) => [
        ...m,
        { role: 'bot', text: 'I can help you find the right tier! Opening the 30-second membership quiz…' },
      ]);
      setTimeout(() => {
        setOpen(false);
        window.dispatchEvent(new CustomEvent('open-membership-quiz'));
      }, 600);
      return;
    }
    setMessages((m) => [...m, { role: 'bot', text: reply }]);
  }

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const q = input.trim();
    setMessages((m) => [...m, { role: 'user', text: q }]);
    setInput('');
    setTimeout(() => handleBotReply(q), 400);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center hover:scale-105 hover:bg-blue-700 transition-all"
        aria-label="Open AI assistant"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-black/5">
            <div className="bg-brand-ink text-white px-5 py-4 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">CPA Assistant</h3>
                <p className="text-xs text-white/50 mt-0.5">AI-powered membership &amp; PD help</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-2xl leading-none text-white/40 hover:text-white"
                aria-label="Close assistant"
              >
                &times;
              </button>
            </div>

            <div className="h-72 overflow-y-auto p-4 space-y-3 bg-brand-cream">
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-sm text-black/50 mb-4">Ask about membership, PD hours, or Tax 360™</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Compare membership tiers', 'Take membership quiz', 'How many PD hours?'].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setMessages((m) => [...m, { role: 'user', text: s }]);
                          setTimeout(() => handleBotReply(s), 400);
                        }}
                        className="text-xs px-3 py-1.5 rounded-full bg-white border border-black/10 text-black/60 hover:text-blue-600 hover:border-blue-200 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                      m.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-sm'
                        : 'bg-white border border-black/10 text-black/70 rounded-bl-sm'
                    }`}
                  >
                    {m.role === 'bot' ? formatMessage(m.text) : m.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={send} className="flex gap-2 p-4 border-t border-black/5 bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                className="flex-1 px-4 py-2.5 border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
