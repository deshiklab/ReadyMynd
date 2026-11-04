import type { Metadata } from 'next';
import { AboutContent } from '@/components/pages/about-content';

export const metadata: Metadata = {
  title: 'About ReadyMynd',
  description:
    'ReadyMynd is a Bangladesh-based professional service initiative focused on Textile DPP digital readiness — combining local presence, locally developed assessment software and professional enterprise analysis.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return <AboutContent />;
}
