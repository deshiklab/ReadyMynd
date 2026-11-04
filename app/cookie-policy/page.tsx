import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { cookieSections } from '@/lib/content/legal';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How ReadyMynd uses cookies and similar technologies on its website, the categories that may apply, and how to manage your preferences.',
  alternates: { canonical: '/cookie-policy/' },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LegalPage kind="cookies" sections={cookieSections} />;
}
