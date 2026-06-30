'use client';

import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';

const footerLinks = {
  about: [
    { label: 'Governance', href: '#' },
    { label: 'Job opportunities', href: '#' },
    { label: 'Volunteer', href: '#' },
    { label: 'Media centre', href: '#' },
    { label: 'Contact us', href: '#' },
  ],
  become: [
    { label: 'Pathways to CPA', href: '#become-cpa' },
    { label: 'Certification program', href: '#' },
    { label: 'Provincial bodies', href: '#' },
    { label: 'International recognition', href: '#' },
  ],
  resources: [
    { label: 'CPA Handbook', href: '#elevate' },
    { label: 'Tax 360™', href: '#elevate' },
    { label: 'Complimentary CPD', href: '#elevate' },
    { label: 'Focus areas', href: '#focus' },
    { label: 'News & insights', href: '#news' },
  ],
  membership: [
    { label: 'Join CPA Canada', href: '#membership' },
    { label: 'Affiliate (Free)', href: '#membership' },
    { label: 'Member ($200/yr)', href: '#membership' },
    { label: 'Member Advantage', href: '#membership' },
    { label: 'Membership quiz', href: '#membership' },
  ],
};

const stats = [
  { value: '220K+', label: 'Members' },
  { value: '1,400+', label: 'PD courses' },
  { value: '6', label: 'Focus areas' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-white to-brand-cream text-brand-ink overflow-hidden">
      {/* Wave from dark CTA */}
      <div className="absolute top-0 inset-x-0 -translate-y-[calc(100%-1px)] pointer-events-none z-10">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-14 sm:h-16 lg:h-20 block" aria-hidden>
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Decorative background */}
      <div className="absolute top-32 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" aria-hidden />

      <div className="section-pad relative pt-16 sm:pt-20 pb-0">
        {/* Newsletter */}
        <div className="relative rounded-3xl overflow-hidden border border-black/[0.06] shadow-xl shadow-black/[0.04] mb-14 sm:mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]" />
          <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden />

          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-lg mb-8 lg:mb-0">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 border border-white/15 text-white mb-5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Stay ahead of the profession
              </h3>
              <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                Monthly insights on advocacy, PD, and standards — trusted by 220,000+ Canadian CPAs.
              </p>
            </div>

            <form className="w-full lg:max-w-md shrink-0" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <div className="flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white text-black placeholder:text-black/35 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-400 transition-colors whitespace-nowrap shadow-lg shadow-blue-900/30"
                >
                  Subscribe free
                </button>
              </div>
              <p className="text-[11px] text-white/35 mt-3 text-center sm:text-left">
                No spam. Unsubscribe anytime. Read our{' '}
                <a href="#" className="underline hover:text-white/60">privacy policy</a>.
              </p>
            </form>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 rounded-2xl bg-white border border-black/[0.06] shadow-sm mb-12 sm:mb-14 overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-5 sm:py-6 text-center ${i > 0 ? 'border-l border-black/[0.06]' : ''}`}
            >
              <span className="block text-2xl sm:text-3xl font-bold text-blue-600 tabular-nums tracking-tight">
                {s.value}
              </span>
              <span className="text-[11px] sm:text-xs text-black/40 uppercase tracking-widest font-medium mt-1 block">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-12 sm:pb-16">
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex items-center gap-3.5 mb-6 group">
              <div className="p-2 rounded-2xl bg-white border border-black/[0.06] shadow-sm group-hover:shadow-md transition-shadow">
                <Image src="/logo.png" alt="CPA Canada" width={40} height={40} className="h-10 w-auto" />
              </div>
              <div>
                <span className="block text-lg font-bold tracking-tight text-black">CPA Canada</span>
                <span className="block text-[10px] text-black/40 uppercase tracking-[0.15em] mt-0.5">
                  Chartered Professional Accountants
                </span>
              </div>
            </a>
            <p className="text-sm text-black/50 leading-relaxed max-w-xs mb-6">
              Shaping business, sustainability, and public trust across Canada since uniting the profession nationally.
            </p>
            <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
              <div>
                <p className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-2">Follow us</p>
                <SocialLinks variant="compact" />
              </div>
              <a
                href="#membership"
                className="hidden sm:flex flex-col items-center justify-center px-4 py-3 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 text-center leading-tight"
              >
                Join
                <span className="text-[10px] font-normal text-blue-100 mt-0.5">220K+ CPAs</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
            <FooterColumn title="About" links={footerLinks.about} />
            <FooterColumn title="Become a CPA" links={footerLinks.become} />
            <FooterColumn title="Resources" links={footerLinks.resources} />
            <FooterColumn title="Membership" links={footerLinks.membership} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/[0.08] bg-white/80 backdrop-blur-sm">
        <div className="section-pad py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black/40 order-2 md:order-1">
            © 2026 CPA Canada. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1 order-1 md:order-2">
            {['Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs text-black/45 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-black mb-4 flex items-center gap-2">
        <span className="w-4 h-px bg-blue-500/60" />
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group flex items-center gap-1.5 text-sm text-black/55 hover:text-blue-600 transition-colors py-0.5"
            >
              <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 text-blue-500 opacity-0 group-hover:opacity-100">
                →
              </span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
