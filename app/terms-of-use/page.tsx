import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { termsSections } from '@/lib/content/legal';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms governing access to and use of the ReadyMynd website, including service descriptions, assessment scope and limitations, and intellectual property.',
  alternates: { canonical: '/terms-of-use/' },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LegalPage kind="terms" sections={termsSections} />;
}
