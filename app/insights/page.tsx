import type { Metadata } from 'next';
import { InsightsContent } from '@/components/pages/insights-content';

export const metadata: Metadata = {
  title: 'Textile DPP Resources & Insights',
  description:
    'Analysis and a knowledge library on the evolving EU Textile Digital Product Passport landscape — regulation, standards, product data, traceability and Bangladesh factory readiness.',
  alternates: { canonical: '/insights/' },
};

export default function InsightsPage() {
  return <InsightsContent />;
}
