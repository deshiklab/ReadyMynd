'use client';

import { Languages, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { LOCALES, localeLabels, useI18n, type Locale } from '@/lib/i18n';

/**
 * compact  – standalone bordered control
 * glass    – bare control, meant to sit inside a frosted `glass-pill` cluster
 * labelled – full-width row used in the mobile drawer
 */
export type ControlVariant = 'compact' | 'glass' | 'labelled';

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50';

/** Sun / moon switch. */
export function ThemeToggle({ variant = 'compact' }: { variant?: ControlVariant }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const nextIsDark = theme === 'light';

  if (variant === 'labelled') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        role="switch"
        aria-checked={theme === 'dark'}
        className={`flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-surface-raised px-4 py-3 text-sm font-medium text-heading transition-colors hover:bg-surface-muted ${focusRing}`}
      >
        <span className="inline-flex items-center gap-2.5">
          {theme === 'dark' ? (
            <Moon className="size-4" aria-hidden />
          ) : (
            <Sun className="size-4" aria-hidden />
          )}
          {t('controls.darkMode')}
        </span>
        <span
          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
            theme === 'dark' ? 'bg-brand-500' : 'bg-line-strong'
          }`}
        >
          <span
            className={`absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform ${
              theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5'
            }`}
          />
        </span>
      </button>
    );
  }

  const bare = variant === 'glass';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label={nextIsDark ? t('controls.switchToDark') : t('controls.switchToLight')}
      title={nextIsDark ? t('controls.switchToDark') : t('controls.switchToLight')}
      className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full transition-colors ${focusRing} ${
        bare
          ? 'text-body hover:bg-surface-sunken hover:text-heading'
          : 'border border-line bg-surface-raised text-body hover:text-heading'
      }`}
    >
      <Sun className={`size-4 ${theme === 'dark' ? 'hidden' : 'block'}`} aria-hidden />
      <Moon className={`size-4 ${theme === 'dark' ? 'block' : 'hidden'}`} aria-hidden />
    </button>
  );
}

/** EN / বাং segmented switch. */
export function LanguageToggle({ variant = 'compact' }: { variant?: ControlVariant }) {
  const { locale, setLocale } = useI18n();

  if (variant === 'labelled') {
    return (
      <div className="rounded-xl border border-line bg-surface-raised p-1.5">
        <p className="px-2.5 pt-1 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-body-soft">
          <Languages className="mr-1.5 inline size-3" aria-hidden />
          {localeLabels.en.full} / {localeLabels.bn.full}
        </p>
        <div className="mt-1.5 grid grid-cols-2 gap-1.5">
          {LOCALES.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLocale(code)}
              aria-pressed={locale === code}
              className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${focusRing} ${
                locale === code
                  ? 'bg-brand-500 text-white'
                  : 'text-body hover:bg-surface-muted hover:text-heading'
              }`}
            >
              {localeLabels[code].full}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const bare = variant === 'glass';

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-0.5 rounded-full p-0.5 ${
        bare ? '' : 'border border-line bg-surface-raised'
      }`}
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          lang={localeLabels[code].htmlLang}
          className={`rounded-full px-2.5 py-1.5 text-[0.6875rem] font-bold tracking-wide transition-colors ${focusRing} ${
            locale === code
              ? 'bg-brand-500 text-white'
              : 'text-body hover:bg-surface-sunken hover:text-heading'
          }`}
        >
          {localeLabels[code].short}
        </button>
      ))}
    </div>
  );
}

export function localeName(code: Locale) {
  return localeLabels[code].full;
}
