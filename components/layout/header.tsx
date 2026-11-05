'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Mail, Phone } from 'lucide-react';
import { mainNav, site } from '@/lib/site';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle, ThemeToggle } from '@/components/theme/controls';
import { Logo } from '@/components/brand/logo';

/** Approved v1.8 desktop nav order -> i18n key. */
const navKeys = [
  'home',
  'dpp',
  'assessment',
  'methodology',
  'advisory',
  'about',
  'insights',
  'contact',
] as const;

export function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const items = mainNav.map((item, index) => ({ ...item, key: navKeys[index] }));

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, ''));

  const navLink = (size: 'lg' | 'xl') =>
    size === 'xl'
      ? 'relative rounded-lg px-2.5 py-2 text-[0.8125rem] font-medium transition-colors'
      : 'relative rounded-lg px-2 py-2 text-xs font-medium transition-colors';

  const navTone = (active: boolean) =>
    active ? 'text-accent' : 'text-body-strong hover:text-heading';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'glass border-b glass-ring shadow-soft' : 'glass-soft border-b border-transparent'
      }`}
    >
      {/* Utility strip — only while the page is at the very top */}
      <div
        className={`hidden overflow-hidden border-b border-line/70 bg-surface-muted/50 text-body transition-all duration-300 lg:block ${
          solid ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <p className="tracking-wide">{t('header.utilityStrip')}</p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 hover:text-heading"
            >
              <Mail className="size-3.5" aria-hidden />
              {site.email}
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-2 hover:text-heading"
            >
              <Phone className="size-3.5" aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page">
        <div
          className={`flex items-center gap-4 transition-all duration-300 sm:gap-6 ${
            solid ? 'h-16' : 'h-20'
          }`}
        >
          <Link
            href="/"
            className="group flex shrink-0 items-center"
            aria-label="ReadyMynd — home"
          >
            <Logo className="h-7 w-auto sm:h-8" priority />
          </Link>

          {/* Desktop nav — full labels */}
          <nav aria-label={t('nav.mainMenu')} className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`${navLink('xl')} ${navTone(isActive(item.href))}`}
                  >
                    {t(`nav.${item.key}`)}
                    {isActive(item.href) && (
                      <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop nav — condensed labels */}
          <nav aria-label={t('nav.mainMenu')} className="hidden lg:block xl:hidden">
            <ul className="flex items-center gap-0.5">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`${navLink('lg')} ${navTone(isActive(item.href))}`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right cluster: frosted controls + primary CTA + menu */}
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="glass-pill glass-ring flex items-center gap-0.5 rounded-full border p-1">
              <LanguageToggle variant="glass" />
              <ThemeToggle variant="glass" />
            </div>

            <Link
              href="/contact/#assessment-enquiry"
              className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-[0.8125rem] font-semibold text-white shadow-[0_10px_30px_-12px_rgba(229,62,62,0.65)] transition-all hover:bg-brand-600 lg:inline-flex"
            >
              {t('header.requestAssessment')}
              <ArrowRight className="size-4" aria-hidden />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t('header.closeMenu') : t('header.openMenu')}
              className="grid size-10 shrink-0 place-items-center rounded-xl text-heading transition-colors hover:bg-surface-sunken lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-0 -z-10 bg-surface transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="h-full overflow-y-auto px-5 pb-10 pt-24">
          <nav aria-label={t('nav.mobileMenu')}>
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-start justify-between gap-4 py-4 ${
                      isActive(item.href) ? 'text-heading' : 'text-body-strong'
                    }`}
                  >
                    <span>
                      <span className="block font-display text-lg font-semibold">
                        {t(`nav.${item.key}Full`)}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-body-soft">
                        {t(`nav.${item.key}Desc`)}
                      </span>
                    </span>
                    <ChevronDown className="mt-1 size-4 -rotate-90 text-body-soft" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/contact/#assessment-enquiry"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white"
          >
            {t('header.requestAssessment')}
            <ArrowRight className="size-4" aria-hidden />
          </Link>

          <div className="mt-8 space-y-3">
            <ThemeToggle variant="labelled" />
            <LanguageToggle variant="labelled" />
          </div>

          <div className="mt-8 space-y-2 border-t border-line pt-6 text-sm text-body">
            <a href={`mailto:${site.email}`} className="block hover:text-heading">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="block hover:text-heading">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
