'use client';

import { useState } from 'react';
import Image from 'next/image';
import { navItems } from '@/lib/data';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl">
      <nav className="bg-brand-cream/90 backdrop-blur-xl border border-black/5 shadow-lg rounded-full px-5 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.png" alt="CPA Canada" width={32} height={32} className="h-8 w-auto" />
            <span className="text-sm font-semibold tracking-tight hidden sm:block">CPA Canada</span>
          </a>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-2.5 py-1.5 text-sm rounded-lg text-black/60 hover:text-black hover:bg-black/5 transition-all whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a href="#membership" className="hidden sm:block text-sm text-black/60 hover:text-black px-2.5 py-1.5 transition-colors">
              Login
            </a>
            <a
              href="#membership"
              className="text-sm bg-brand-ink text-white px-3.5 py-1.5 rounded-full hover:bg-brand-ink/90 transition-all shadow-sm hover:shadow-md"
            >
              Register
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="lg:hidden p-1.5 text-black/60 hover:text-black"
              onClick={() => setOpen(!open)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-black/5 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-2 py-2 text-sm text-black/70 hover:text-black"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
