'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export const LOCALES = ['en', 'bn'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_STORAGE_KEY = 'readymynd-locale';
export const THEME_STORAGE_KEY = 'readymynd-theme';

export const localeLabels: Record<Locale, { short: string; full: string; htmlLang: string }> = {
  en: { short: 'EN', full: 'English', htmlLang: 'en' },
  bn: { short: 'বাং', full: 'বাংলা', htmlLang: 'bn' },
};

export type Node = string | Node[] | { [key: string]: Node };
export type Messages = { [key: string]: Node };

/* -------------------------------------------------------------------------- */
/*  Locale resolution                                                          */
/* -------------------------------------------------------------------------- */

function resolve(source: Node | undefined, path: string[]): Node | undefined {
  let current: Node | undefined = source;
  for (const segment of path) {
    if (current === undefined || current === null) return undefined;
    if (typeof current === 'string' || Array.isArray(current)) return undefined;
    current = current[segment];
  }
  return current;
}

/* -------------------------------------------------------------------------- */
/*  Context                                                                    */
/* -------------------------------------------------------------------------- */

type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Resolve a string. Falls back to English, then to the key itself. */
  t: (key: string, vars?: Record<string, string | number>) => string;
  /** Resolve a string array. */
  tl: (key: string) => string[];
  /** Resolve structured (object / array) content. */
  tr: <T = unknown>(key: string) => T;
  /** Pick the current-language value from a bilingual `{ en, bn }` record. */
  tx: (value: { en: string; bn: string } | string) => string;
  /** True once the stored locale has been applied on the client. */
  ready: boolean;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  children,
  messages,
  defaultLocale = 'en',
}: {
  children: ReactNode;
  messages: Record<Locale, Messages>;
  defaultLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [ready, setReady] = useState(false);

  // Apply the persisted choice after hydration (the inline script already set
  // <html lang>, so there is no flash of the wrong language attribute).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored && (LOCALES as readonly string[]).includes(stored)) {
        setLocaleState(stored as Locale);
      }
    } catch {
      /* storage unavailable — keep the default */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeLabels[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next: Locale = current === 'en' ? 'bn' : 'en';
      try {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<I18nValue>(() => {
    const path = (key: string) => key.split('.');

    const lookup = (key: string): Node | undefined =>
      resolve(messages[locale], path(key)) ?? resolve(messages[defaultLocale], path(key));

    const t = (key: string, vars?: Record<string, string | number>): string => {
      const found = lookup(key);
      if (typeof found === 'string') {
        if (!vars) return found;
        return found.replace(/\{(\w+)\}/g, (match, name: string) =>
          name in vars ? String(vars[name]) : match,
        );
      }
      return key;
    };

    const tl = (key: string): string[] => {
      const found = lookup(key);
      return Array.isArray(found) ? (found.filter((v) => typeof v === 'string') as string[]) : [];
    };

    const tr = <T,>(key: string): T => lookup(key) as T;

    const tx = (input: { en: string; bn: string } | string): string =>
      typeof input === 'string' ? input : (input[locale] ?? input[defaultLocale]);

    return { locale, setLocale, toggleLocale, t, tl, tr, tx, ready };
  }, [locale, messages, defaultLocale, setLocale, toggleLocale, ready]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
