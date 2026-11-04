import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { privacySections } from '@/lib/content/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How ReadyMynd collects, uses, stores, protects and handles personal information through its website and related communications.',
  alternates: { canonical: '/privacy-policy/' },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LegalPage kind="privacy" sections={privacySections} />;
}
