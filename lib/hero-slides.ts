/**
 * The eight page infographics, in the order the home hero shows them.
 *
 * Shared rather than living inside the slider component so inner pages can
 * open the carousel on the artwork that belongs to them — /about/ lands on
 * the About infographic instead of always starting on slide one.
 */
export const HERO_SLIDES = [
  /**
   * The landing artwork leads. Pages without one of their own fall back to
   * index 0, so this is also what the legal and article routes open on.
   */
  { id: 'home', image: '/images/pages/home.jpeg', href: '/' },
  {
    id: 'advisory',
    image: '/images/pages/advisory.jpeg',
    href: '/digital-advisory/',
  },
  {
    id: 'dpp',
    image: '/images/pages/eu-dpp.jpeg',
    href: '/textile-digital-product-passport/',
  },
  {
    id: 'assessment',
    image: '/images/pages/assessment.jpeg',
    href: '/textile-dpp-digital-readiness-assessment/',
  },
  {
    id: 'methodology',
    image: '/images/pages/methodology.jpeg',
    href: '/assessment-methodology/',
  },
  { id: 'about', image: '/images/pages/about.jpeg', href: '/about/' },
  { id: 'insights', image: '/images/pages/insights.jpeg', href: '/insights/' },
  { id: 'contact', image: '/images/pages/contact.jpeg', href: '/contact/' },
] as const;

/** Plain string[] so callers can look up an arbitrary `image` prop. */
export const HERO_SLIDE_ORDER: string[] = HERO_SLIDES.map((slide) => slide.image);
