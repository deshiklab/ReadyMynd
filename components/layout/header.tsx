'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Mail, Phone } from 'lucide-react';
import { mainNav, site } from '@/lib/site';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle, ThemeToggle } from '@/components/theme/controls';

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-line bg-surface/90 shadow-[0_1px_0_rgba(11,18,32,0.06)] backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      {/* Utility strip — visible at the top of the page only */}
      <div
        className={`hidden overflow-hidden border-b border-white/10 bg-ink-deep/60 text-onink transition-all duration-300 lg:block ${
          solid ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <p className="tracking-wide">{t('header.utilityStrip')}</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="size-3.5" aria-hidden />
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="size-3.5" aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${solid ? 'h-16' : 'h-20'}`}>
          <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="ReadyMynd — home">
            <span
              className={`grid size-10 place-items-center rounded-xl font-display text-lg font-extrabold transition-colors ${
                solid ? 'bg-ink text-white' : 'bg-brand-500 text-white'
              }`}
            >
              R
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`font-display text-[1.0625rem] font-bold tracking-tight transition-colors ${
                  solid ? 'text-heading' : 'text-white'
                }`}
              >
                {t('brand.name')}
              </span>
              <span
                className={`mt-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                  solid ? 'text-body-soft' : 'text-onink-soft'
                }`}
              >
                {t('brand.shortLabel')}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label={t('nav.mainMenu')} className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`relative rounded-lg px-2.5 py-2 text-[0.8125rem] font-medium transition-colors ${
                      solid
                        ? isActive(item.href)
                          ? 'text-accent'
                          : 'text-body-strong hover:text-heading'
                        : isActive(item.href)
                          ? 'text-white'
                          : 'text-onink hover:text-white'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                    {isActive(item.href) && (
                      <span
                        className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full ${solid ? 'bg-brand-500' : 'bg-brand-400'}`}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t('nav.mainMenu')} className="hidden lg:block xl:hidden">
            <ul className="flex items-center gap-0.5">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`relative rounded-lg px-2 py-2 text-xs font-medium transition-colors ${
                      solid
                        ? isActive(item.href)
                          ? 'text-accent'
                          : 'text-body-strong hover:text-heading'
                        : isActive(item.href)
                          ? 'text-white'
                          : 'text-onink hover:text-white'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageToggle onDark={!solid} />
            </div>
            <ThemeToggle onDark={!solid} />

            <Link
              href="/contact/#assessment-enquiry"
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-[0.8125rem] font-semibold transition-all lg:inline-flex ${
                solid
                  ? 'bg-brand-500 text-white hover:bg-brand-600'
                  : 'bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20'
              }`}
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
              className={`grid size-10 place-items-center rounded-xl transition-colors lg:hidden ${
                solid ? 'text-heading hover:bg-surface-sunken' : 'text-white hover:bg-white/10'
              }`}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-0 -z-10 bg-ink-deep pt-24 transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="h-full overflow-y-auto px-5 pb-10">
          <nav aria-label={t('nav.mobileMenu')}>
            <ul className="divide-y divide-white/10">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-start justify-between gap-4 py-4 ${
                      isActive(item.href) ? 'text-white' : 'text-onink'
                    }`}
                  >
                    <span>
                      <span className="block font-display text-lg font-semibold">
                        {t(`nav.${item.key}Full`)}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-onink-muted">
                        {t(`nav.${item.key}Desc`)}
                      </span>
                    </span>
                    <ChevronDown className="mt-1 size-4 -rotate-90 text-onink-muted" aria-hidden />
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

          <div className="mt-8 space-y-2 border-t border-white/10 pt-6 text-sm text-onink-soft">
            <a href={`mailto:${site.email}`} className="block hover:text-white">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="block hover:text-white">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
