import type { Metadata } from 'next';
import { AdvisoryContent } from '@/components/pages/advisory-content';

export const metadata: Metadata = {
  title: 'Digital Advisory Services',
  description:
    'Independent, vendor-neutral post-assessment advisory across three technical areas: data advisory, digital systems advisory and system integration advisory.',
  alternates: { canonical: '/digital-advisory/' },
};

export default function AdvisoryPage() {
  return <AdvisoryContent />;
}
