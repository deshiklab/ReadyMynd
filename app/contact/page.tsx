import type { Metadata } from 'next';
import { ContactContent } from '@/components/pages/contact-content';

export const metadata: Metadata = {
  title: 'Contact ReadyMynd',
  description:
    'Request a Textile DPP Digital Readiness Assessment, download the service brochure, or send a general business enquiry. Bangladesh-based advisory for textile and apparel manufacturers.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return <ContactContent />;
}
