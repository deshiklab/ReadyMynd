import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/legal/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How ReadyMynd collects, uses, stores, protects and handles personal information through its website and related communications.',
  alternates: { canonical: '/privacy-policy/' },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: 'Introduction',
    blocks: [
      {
        type: 'paragraph',
        text: 'ReadyMynd respects the privacy of individuals and organizations who visit our website, contact us, request information, or enquire about our professional services.',
      },
      {
        type: 'paragraph',
        text: 'This Privacy Policy explains how ReadyMynd collects, uses, stores, protects, and handles personal information through its website and related communications.',
      },
    ],
  },
  {
    heading: 'Information We Collect',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may collect information that visitors voluntarily provide when submitting enquiries, requesting a Textile DPP Digital Readiness Assessment, requesting a service brochure, or communicating with ReadyMynd. This information may include:',
      },
      {
        type: 'list',
        items: [
          'Name and professional designation.',
          'Company or factory name.',
          'Business email address and telephone number.',
          'Factory type, location, and relevant business information.',
          'Enquiry details and information voluntarily included in messages.',
        ],
      },
      {
        type: 'paragraph',
        text: 'We may also collect limited technical information, such as browser type, device information, IP address, and website usage information, where necessary for website operation, security, or approved analytics.',
      },
    ],
  },
  {
    heading: 'How We Use Information',
    blocks: [
      { type: 'paragraph', text: 'ReadyMynd may use collected information to:' },
      {
        type: 'list',
        items: [
          'Respond to enquiries and service requests.',
          'Provide requested brochures or information.',
          'Discuss assessment scope and potential engagements.',
          'Communicate about agreed professional services.',
          'Maintain website security and technical functionality.',
          'Meet applicable legal and regulatory obligations.',
        ],
      },
      {
        type: 'paragraph',
        text: 'We do not use submitted business contact information for unrelated marketing communications without an appropriate basis or permission.',
      },
    ],
  },
  {
    heading: 'Assessment and Client Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'Information supplied during a contracted Digital Readiness Assessment is handled according to the applicable engagement agreement, confidentiality commitments, and any agreed Non-Disclosure Agreement (NDA).',
      },
      {
        type: 'note',
        text: 'The website Privacy Policy does not replace the confidentiality and information-handling provisions of a separately executed client agreement.',
      },
    ],
  },
  {
    heading: 'Information Sharing',
    blocks: [
      { type: 'paragraph', text: 'ReadyMynd does not sell personal information.' },
      {
        type: 'paragraph',
        text: 'Information may be shared with authorized service providers where necessary for website hosting, communications, technical support, or other legitimate operational purposes, subject to appropriate confidentiality and security arrangements.',
      },
      {
        type: 'paragraph',
        text: 'Information may also be disclosed where required by applicable law or lawful authority.',
      },
    ],
  },
  {
    heading: 'Data Security',
    blocks: [
      {
        type: 'paragraph',
        text: 'ReadyMynd applies reasonable administrative, technical, and organizational safeguards intended to protect information against unauthorized access, disclosure, alteration, or loss.',
      },
      {
        type: 'paragraph',
        text: 'However, no internet transmission or electronic storage system can be guaranteed to be completely secure.',
      },
    ],
  },
  {
    heading: 'Data Retention',
    blocks: [
      {
        type: 'paragraph',
        text: 'Personal information is retained only for as long as reasonably necessary for the purpose for which it was collected, applicable contractual requirements, legitimate business needs, or legal obligations.',
      },
      {
        type: 'paragraph',
        text: 'Retention periods may vary according to the nature of the information and the relevant engagement.',
      },
    ],
  },
  {
    heading: 'International Data Processing',
    blocks: [
      {
        type: 'paragraph',
        text: 'Where website hosting, email, or other authorized service providers process information outside Bangladesh, ReadyMynd will review the applicable legal requirements and appropriate safeguards before relying on such arrangements.',
      },
    ],
  },
  {
    heading: 'Your Privacy Requests',
    blocks: [
      {
        type: 'paragraph',
        text: 'Individuals may contact ReadyMynd to request access to, correction of, or deletion of their personal information, or to raise concerns about its processing.',
      },
      {
        type: 'paragraph',
        text: 'Requests will be considered in accordance with applicable law, identity-verification requirements, and legitimate retention obligations.',
      },
    ],
  },
  {
    heading: 'Cookies and Similar Technologies',
    blocks: [
      {
        type: 'paragraph',
        text: 'Our website may use essential cookies and, where enabled, optional analytics or other technologies. Further information is available in our Cookie Policy.',
      },
    ],
  },
  {
    heading: 'Third-Party Websites',
    blocks: [
      {
        type: 'paragraph',
        text: 'Our website may contain links to external websites, including regulatory authorities, standards organizations, and research publications.',
      },
      {
        type: 'paragraph',
        text: 'ReadyMynd is not responsible for the privacy practices of independently operated third-party websites.',
      },
    ],
  },
  {
    heading: 'Policy Updates',
    blocks: [
      {
        type: 'paragraph',
        text: 'ReadyMynd may update this Privacy Policy to reflect changes in website functionality, business operations, or applicable legal requirements. The latest version will be published on this page.',
      },
    ],
  },
  {
    heading: 'Contact',
    blocks: [
      { type: 'paragraph', text: 'For privacy-related enquiries, please contact:' },
      {
        type: 'list',
        items: [`ReadyMynd`, `Email: ${site.email}`, `Location: ${site.location}`, `Website: ${site.url}`],
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      crumb="Privacy Policy"
      intro="How ReadyMynd collects, uses, stores, protects and handles personal information through its website and related communications."
      sections={sections}
    />
  );
}
