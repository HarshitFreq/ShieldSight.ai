import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ShieldSight AI — Real-Time On-Device AI Content Moderation',
  description:
    'ShieldSight AI uses on-device multimodal AI to moderate explicit images, graphic violence, harmful language, and unsafe interactions across any browser while keeping your data 100% private.',
  keywords: [
    'ShieldSight AI',
    'Content Moderation Extension',
    'On-Device AI Moderation',
    'Explicit Content Protection',
    'Harmful Language Filter',
    'Privacy First Chrome Extension',
    'Local OCR Moderation',
  ],
  authors: [{ name: 'ShieldSight AI Team' }],
  openGraph: {
    title: 'ShieldSight AI — Real-Time On-Device AI Content Moderation',
    description:
      'On-device multimodal AI browser extension moderating explicit images, violent media, and harmful conversations across any browser.',
    url: 'https://shieldsight.ai',
    siteName: 'ShieldSight AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShieldSight AI — Real-Time On-Device AI Content Moderation',
    description:
      'On-device multimodal AI browser extension moderating explicit images, violent media, and harmful conversations across any browser.',
    creator: '@ShieldSightAI',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} bg-[#0B1220] text-slate-100 antialiased selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
