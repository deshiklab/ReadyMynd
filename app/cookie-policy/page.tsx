import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/legal/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How ReadyMynd uses cookies and similar technologies on its website, the categories that may apply, and how to manage your preferences.',
  alternates: { canonical: '/cookie-policy/' },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: 'Introduction',
    blocks: [
      {
        type: 'paragraph',
        text: 'This Cookie Policy explains how ReadyMynd uses cookies and similar technologies on its website.',
      },
      {
        type: 'paragraph',
        text: 'Our objective is to maintain a functional, secure, and accessible website while respecting visitor privacy and providing appropriate information about any tracking technologies used.',
      },
    ],
  },
  {
    heading: 'What Are Cookies?',
    blocks: [
      {
        type: 'paragraph',
        text: 'Cookies are small text files that websites may store on a visitor’s device through a web browser.',
      },
      {
        type: 'paragraph',
        text: 'Cookies can support website functionality, remember certain preferences, maintain security, and provide information about website performance and usage.',
      },
    ],
  },
  {
    heading: 'Types of Cookies',
    blocks: [
      {
        type: 'paragraph',
        text: 'Depending on the website’s final technical configuration, ReadyMynd may use the following categories.',
      },
      {
        type: 'list',
        items: [
          'Essential Cookies — these support core website functionality, security, and technical operations. They may be necessary for the website to function correctly.',
          'Functional Cookies — these may remember visitor preferences or settings to improve the browsing experience.',
          'Analytics Cookies — where enabled, these may help ReadyMynd understand aggregated website usage, page performance, and visitor interactions.',
          'Marketing Cookies — ReadyMynd does not intend to use advertising or behavioural marketing cookies as part of its initial website configuration. Any future introduction of such technologies will require an update to this policy and appropriate consent arrangements.',
        ],
      },
    ],
  },
  {
    heading: 'Cookies Used by Our Website',
    blocks: [
      {
        type: 'paragraph',
        text: 'The actual cookies used will depend on the website hosting platform, content management system, security services, analytics tools, and any third-party integrations.',
      },
      {
        type: 'paragraph',
        text: 'Before publication, ReadyMynd will maintain an accurate record of relevant cookies, including their purpose, provider, and duration.',
      },
      {
        type: 'note',
        text: 'Cookie inventory: to be completed after technical verification of the deployed website.',
      },
    ],
  },
  {
    heading: 'Cookie Consent and Preferences',
    blocks: [
      {
        type: 'paragraph',
        text: 'Where required by applicable law, non-essential cookies will be activated only after the visitor has provided the necessary consent.',
      },
      {
        type: 'paragraph',
        text: 'Visitors will be able to manage relevant cookie preferences through the controls made available on the website, where implemented.',
      },
    ],
  },
  {
    heading: 'Managing Cookies Through Your Browser',
    blocks: [
      {
        type: 'paragraph',
        text: 'Most web browsers allow users to view, block, or delete cookies through browser settings.',
      },
      {
        type: 'paragraph',
        text: 'Disabling certain cookies may affect the functionality or performance of some website features.',
      },
    ],
  },
  {
    heading: 'Third-Party Technologies',
    blocks: [
      {
        type: 'paragraph',
        text: 'Some website functions may depend on external services, such as hosting, security, embedded content, or analytics providers.',
      },
      {
        type: 'paragraph',
        text: 'Where these services place cookies or use similar technologies, ReadyMynd will review their purposes and disclose relevant information in this policy.',
      },
    ],
  },
  {
    heading: 'Changes to This Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'ReadyMynd may revise this Cookie Policy when website technologies, service providers, or applicable requirements change. The updated policy will be published on this page.',
      },
    ],
  },
  {
    heading: 'Contact',
    blocks: [
      { type: 'paragraph', text: 'For questions about website cookies or related technologies, please contact:' },
      {
        type: 'list',
        items: [`ReadyMynd`, `Email: ${site.email}`, `Location: ${site.location}`, `Website: ${site.url}`],
      },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      crumb="Cookie Policy"
      intro="How ReadyMynd uses cookies and similar technologies, the categories that may apply, and how you can manage your preferences."
      sections={sections}
    />
  );
}
