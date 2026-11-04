'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { legalNav, mainNav, site } from '@/lib/site';
import { useI18n } from '@/lib/i18n';

const serviceHrefs = [
  '/textile-digital-product-passport/',
  '/textile-dpp-digital-readiness-assessment/',
  '/assessment-methodology/',
  '/digital-advisory-services/',
];

const serviceKeys = ['dpp', 'assessment', 'methodology', 'advisory'] as const;

const legalKeys = ['privacy', 'cookies', 'terms'] as const;

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const serviceLinks = serviceHrefs.map((href, index) => ({
    href,
    label: t(`nav.${serviceKeys[index]}`),
  }));

  return (
    <footer className="relative overflow-hidden bg-ink-deep text-onink-soft">
      <div
        aria-hidden
        className="grid-veil pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_bottom_left,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 size-[28rem] rounded-full bg-brand-500/10 blur-3xl"
      />

      <div className="container-page relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-500 font-display text-lg font-extrabold text-white">
                R
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-white">{t('brand.name')}</span>
                <span className="mt-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-onink-muted">
                  {t('brand.shortLabel')}
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed">{t('footer.intro')}</p>
            <p className="mt-4 font-display text-sm font-semibold text-white">
              {t('brand.positioning')}
            </p>
          </div>

          <nav aria-label={t('footer.services')}>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              {t('footer.services')}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-start gap-1 hover:text-white">
                    {item.label}
                    <ArrowUpRight
                      className="mt-0.5 size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t('footer.company')}>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              {t('footer.company')}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: '/about/', label: t('nav.aboutFull') },
                { href: '/insights/', label: t('nav.insightsFull') },
                { href: '/contact/', label: t('footer.contactUs') },
                { href: '/contact/?purpose=brochure#assessment-enquiry', label: t('footer.brochure') },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-start gap-1 hover:text-white">
                    {item.label}
                    <ArrowUpRight
                      className="mt-0.5 size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              {t('footer.contact')}
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
                <a href={`tel:${site.phoneHref}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
                <span>
                  {site.location}
                  <span className="mt-1 block text-xs text-onink-muted">{site.hours}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed">
            © {year} {site.legalName}. {t('footer.rights')}
            <span className="mt-1 block text-onink-muted">{t('footer.disclaimer')}</span>
          </p>
          <nav aria-label={t('nav.legal')} className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            {legalNav.map((item, index) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {t(`nav.${legalKeys[index]}`)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
