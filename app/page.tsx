import type { Metadata } from 'next';
import { HomeContent } from '@/components/pages/home-content';

export const metadata: Metadata = {
  title: 'ReadyMynd | Textile DPP Readiness & Digital Advisory',
  description:
    'Know your digital readiness before deciding what comes next. Software-enabled, analyst-led Textile DPP Digital Readiness Assessment for Bangladesh textile and apparel manufacturers.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return <HomeContent />;
}
