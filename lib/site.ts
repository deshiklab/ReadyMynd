export type NavItem = {
  /** Short label used in the desktop header (per the v1.8 master menu guidance). */
  label: string;
  /** Full approved page name, used in the mobile drawer and metadata. */
  full: string;
  href: string;
  description?: string;
};

/**
 * Prefix a public path with the deployment basePath.
 *
 * next/link and next/image apply `basePath` automatically, but plain
 * <img src> and <a href> do not — they need the prefix added by hand, which
 * matters when the site is exported to GitHub Pages under /ReadyMynd.
 */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

export const site = {
  name: 'ReadyMynd',
  legalName: 'ReadyMynd',
  tagline: 'Textile DPP Readiness & Digital Advisory',
  positioning: 'Software-Enabled. Analyst-Led. Evidence-Based.',
  /**
   * Absolute origin for canonicals, Open Graph tags and the sitemap. Inlined
   * at build time from NEXT_PUBLIC_SITE_URL, which next.config.mjs defaults
   * per build mode so the GitHub Pages export points at the Pages origin
   * rather than the production domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.readymynd.com',
  email: 'contact@readymynd.com',
  phone: '+880 13 4949 2761',
  phoneHref: '+8801349492761',
  /** Digits only, in international format — used for wa.me / tel: deep links. */
  whatsapp: '8801349492761',
  location: 'Bangladesh',
  hours: 'Sun – Thu, 9:00 AM – 6:00 PM (BST)',
  brochureHref: '/downloads/readymynd-corporate-brochure.pdf',
} as const;

export const mainNav: NavItem[] = [
  { label: 'Home', full: 'Home', href: '/' },
  {
    label: 'EU Textile DPP',
    full: 'EU Textile Digital Product Passport',
    href: '/textile-digital-product-passport/',
    description: 'The developing EU framework and what it may mean for Bangladesh suppliers.',
  },
  {
    label: 'Assessment',
    full: 'Textile DPP Digital Readiness Assessment',
    href: '/textile-dpp-digital-readiness-assessment/',
    description: 'A structured evaluation of your factory’s digital capabilities.',
  },
  {
    label: 'Methodology',
    full: 'Assessment Methodology & Process',
    href: '/assessment-methodology/',
    description: 'Five steps, evidence-based evaluation, scope and responsibilities.',
  },
  {
    label: 'Digital Advisory',
    full: 'Digital Advisory Services',
    href: '/digital-advisory/',
    description: 'Focused post-assessment technical advisory: data, systems, integration.',
  },
  { label: 'About', full: 'About ReadyMynd', href: '/about/', description: 'Who we are and how we work.' },
  {
    label: 'Insights',
    full: 'Textile DPP Resources & Insights',
    href: '/insights/',
    description: 'Analysis and a knowledge library for Bangladesh manufacturers.',
  },
  { label: 'Contact', full: 'Contact ReadyMynd', href: '/contact/', description: 'Request an assessment or the service brochure.' },
];

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', full: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Cookie Policy', full: 'Cookie Policy', href: '/cookie-policy/' },
  { label: 'Terms of Use', full: 'Terms of Use', href: '/terms-of-use/' },
];

/** Every v1.8 main page ends with the same secondary CTA. */
export const brochureCta = {
  label: 'Download Service Brochure',
  href: '/contact/?purpose=brochure#assessment-enquiry',
};
