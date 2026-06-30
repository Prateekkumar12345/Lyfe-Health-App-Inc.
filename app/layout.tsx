import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CPA Canada — Chartered Professional Accountants of Canada',
  description:
    'CPA Canada represents more than 220,000 professional accountants shaping the future of business, sustainability, and public trust across Canada.',
  keywords: 'CPA Canada, chartered professional accountant, accounting, Canada, finance, CPD, certification',
  openGraph: {
    title: 'CPA Canada — Chartered Professional Accountants of Canada',
    description: "Representing more than 220,000 professional accountants. Empowering Canada's financial leaders of tomorrow.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
