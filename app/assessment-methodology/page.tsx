import type { Metadata } from 'next';
import { MethodologyContent } from '@/components/pages/methodology-content';

export const metadata: Metadata = {
  title: 'Assessment Methodology & Process',
  description:
    'ReadyMynd’s five-step assessment process, the evidence used to evaluate digital readiness, and the scope, timeline and responsibilities of a One Product. One Factory. engagement.',
  alternates: { canonical: '/assessment-methodology/' },
};

export default function MethodologyPage() {
  return <MethodologyContent />;
}
