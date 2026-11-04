import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/legal/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms governing access to and use of the ReadyMynd website, including service descriptions, assessment scope and limitations, and intellectual property.',
  alternates: { canonical: '/terms-of-use/' },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: 'Introduction',
    blocks: [
      { type: 'paragraph', text: 'Welcome to the ReadyMynd website.' },
      {
        type: 'paragraph',
        text: 'These Terms of Use govern access to and use of the website, including its informational content, professional service descriptions, articles, resources, and enquiry facilities.',
      },
      {
        type: 'paragraph',
        text: 'By accessing or using the website, visitors agree to comply with these Terms of Use, to the extent permitted by applicable law.',
      },
    ],
  },
  {
    heading: 'About ReadyMynd',
    blocks: [
      {
        type: 'paragraph',
        text: 'ReadyMynd provides professional services focused on Textile Digital Product Passport (DPP) digital readiness for textile and apparel manufacturers in Bangladesh.',
      },
      {
        type: 'paragraph',
        text: 'Our services comprise:',
      },
      {
        type: 'list',
        items: [
          'Textile DPP Digital Readiness Assessment.',
          'Digital Advisory Services, available separately following completion of a paid assessment.',
        ],
      },
      {
        type: 'paragraph',
        text: 'ReadyMynd operates independently and maintains a vendor-neutral, evidence-based approach.',
      },
    ],
  },
  {
    heading: 'Purpose of Website Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'The website provides general information about ReadyMynd, our professional services, the EU Textile Digital Product Passport, and related digital readiness considerations.',
      },
      {
        type: 'paragraph',
        text: 'Website content is intended for general business information and awareness.',
      },
      {
        type: 'note',
        text: 'It does not constitute legal advice, regulatory certification, technical implementation instructions, or a guarantee of compliance with EU legislation.',
      },
    ],
  },
  {
    heading: 'Regulatory Information and Accuracy',
    blocks: [
      { type: 'paragraph', text: 'ReadyMynd makes reasonable efforts to present accurate and relevant information.' },
      {
        type: 'paragraph',
        text: 'However, EU Digital Product Passport requirements, implementing measures, technical standards, and regulatory interpretations may change.',
      },
      {
        type: 'paragraph',
        text: 'Visitors should consult applicable official legislation, regulatory publications, and qualified professional advisers when making legal or compliance decisions.',
      },
      {
        type: 'paragraph',
        text: 'ReadyMynd does not guarantee that all website information will remain complete, current, or suitable for every business circumstance.',
      },
    ],
  },
  {
    heading: 'Professional Service Engagements',
    blocks: [
      {
        type: 'paragraph',
        text: 'Submitting an enquiry, requesting a brochure, or discussing a possible assessment does not automatically establish a professional service engagement.',
      },
      {
        type: 'paragraph',
        text: 'Any paid assessment or advisory engagement is subject to a separately agreed scope, commercial terms, responsibilities, and contractual arrangements.',
      },
      {
        type: 'note',
        text: 'Where a signed service agreement conflicts with these website Terms of Use in relation to contracted services, the applicable service agreement will govern that engagement.',
      },
    ],
  },
  {
    heading: 'Assessment Scope and Limitations',
    blocks: [
      {
        type: 'paragraph',
        text: 'ReadyMynd’s Textile DPP Digital Readiness Assessment examines digital capabilities within an agreed assessment scope.',
      },
      {
        type: 'paragraph',
        text: 'The standard engagement principle is One Product. One Factory.',
      },
      {
        type: 'paragraph',
        text: 'Assessment findings are based on factory-provided information, available supporting evidence, and professional evaluation within the agreed scope.',
      },
      {
        type: 'note',
        text: 'The assessment is not a regulatory compliance audit, product certification, or assurance of future EU DPP compliance.',
      },
    ],
  },
  {
    heading: 'Digital Advisory Services',
    blocks: [
      {
        type: 'paragraph',
        text: 'Digital Advisory Services are optional and separately contracted after completion of a paid Textile DPP Digital Readiness Assessment.',
      },
      {
        type: 'paragraph',
        text: 'Advisory work is limited to agreed digital and technical matters, including data, digital systems, and system integration.',
      },
      {
        type: 'paragraph',
        text: 'ReadyMynd does not represent itself as a software implementation vendor or a provider of business process redesign services.',
      },
    ],
  },
  {
    heading: 'Intellectual Property',
    blocks: [
      {
        type: 'paragraph',
        text: 'Unless otherwise stated, website text, graphics, branding, original illustrations, and other materials belong to ReadyMynd or their respective rights holders.',
      },
      {
        type: 'paragraph',
        text: 'Visitors may read, reference, and share links to publicly accessible website content for legitimate informational purposes.',
      },
      {
        type: 'paragraph',
        text: 'Unauthorized commercial reproduction, redistribution, modification, or representation of ReadyMynd materials as another party’s work is not permitted, except where authorized by law or written permission.',
      },
    ],
  },
  {
    heading: 'Acceptable Website Use',
    blocks: [
      { type: 'paragraph', text: 'Visitors must not:' },
      {
        type: 'list',
        items: [
          'Attempt unauthorized access to the website or its systems.',
          'Introduce malicious software or interfere with website security.',
          'Misuse enquiry forms or submit fraudulent information.',
          'Reproduce protected website materials in violation of applicable rights.',
          'Use the website for unlawful purposes.',
        ],
      },
    ],
  },
  {
    heading: 'External Links and Resources',
    blocks: [
      {
        type: 'paragraph',
        text: 'The website may link to external regulatory authorities, standards organizations, industry publications, research materials, and other independent sources.',
      },
      {
        type: 'paragraph',
        text: 'Such links are provided for information and convenience.',
      },
      {
        type: 'paragraph',
        text: 'ReadyMynd does not automatically endorse external organizations, products, services, or interpretations merely by linking to them.',
      },
    ],
  },
  {
    heading: 'No Certification or Endorsement',
    blocks: [
      {
        type: 'paragraph',
        text: 'ReadyMynd does not issue EU Textile DPP compliance certifications, certify factory products, or endorse particular software platforms or technology vendors through its website or assessment services.',
      },
      {
        type: 'paragraph',
        text: 'Any description of digital readiness reflects the agreed professional assessment scope and should not be interpreted as regulatory approval.',
      },
    ],
  },
  {
    heading: 'Limitation of Liability',
    blocks: [
      {
        type: 'paragraph',
        text: 'To the extent permitted by applicable law, ReadyMynd is not responsible for losses arising solely from reliance on general website information without appropriate independent evaluation.',
      },
      {
        type: 'paragraph',
        text: 'Nothing in these Terms excludes or restricts liability that cannot lawfully be excluded or restricted.',
      },
      {
        type: 'paragraph',
        text: 'Liabilities and responsibilities arising from contracted professional services are governed by the relevant engagement agreement and applicable law.',
      },
    ],
  },
  {
    heading: 'Privacy and Cookies',
    blocks: [
      {
        type: 'paragraph',
        text: 'Use of the website may involve the processing of personal information and the operation of cookies or similar technologies.',
      },
      {
        type: 'paragraph',
        text: 'Please refer to our Privacy Policy and Cookie Policy for further information.',
      },
    ],
  },
  {
    heading: 'Changes to These Terms',
    blocks: [
      {
        type: 'paragraph',
        text: 'ReadyMynd may update these Terms of Use to reflect changes in website functionality, business practices, or applicable requirements. The latest version will be published on this page.',
      },
    ],
  },
  {
    heading: 'Governing Law',
    blocks: [
      {
        type: 'paragraph',
        text: 'These Terms of Use are governed by the applicable laws of Bangladesh, subject to any mandatory legal provisions that apply.',
      },
    ],
  },
  {
    heading: 'Contact',
    blocks: [
      { type: 'paragraph', text: 'For questions about these Terms of Use, please contact:' },
      {
        type: 'list',
        items: [`ReadyMynd`, `Email: ${site.email}`, `Location: ${site.location}`, `Website: ${site.url}`],
      },
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      crumb="Terms of Use"
      intro="The terms governing access to and use of the ReadyMynd website, including service descriptions, assessment scope and limitations, and intellectual property."
      sections={sections}
    />
  );
}
