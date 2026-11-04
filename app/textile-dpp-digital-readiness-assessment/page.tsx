import type { Metadata } from 'next';
import { AssessmentContent } from '@/components/pages/assessment-content';

export const metadata: Metadata = {
  title: 'Textile DPP Digital Readiness Assessment',
  description:
    'A structured evaluation of your factory’s digital capabilities across five dimensions — manual data, digital data, integration, validation and governance — with seven management-ready report outputs and a proposed 90-day action plan.',
  alternates: { canonical: '/textile-dpp-digital-readiness-assessment/' },
};

export default function ReadinessAssessmentPage() {
  return <AssessmentContent />;
}
