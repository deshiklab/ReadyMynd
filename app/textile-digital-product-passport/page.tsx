import type { Metadata } from 'next';
import { EuDppContent } from '@/components/pages/eu-dpp-content';

export const metadata: Metadata = {
  title: 'EU Textile Digital Product Passport',
  description:
    'The EU Ecodesign for Sustainable Products Regulation (ESPR), Regulation (EU) 2024/1781, establishes the framework for Digital Product Passports. What it means for Bangladesh textile and apparel manufacturers.',
  alternates: { canonical: '/textile-digital-product-passport/' },
};

export default function EuTextileDppPage() {
  return <EuDppContent />;
}
