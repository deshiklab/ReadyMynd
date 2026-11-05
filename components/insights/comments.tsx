'use client';

import { useEffect, useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';

type GiscusConfig = {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
};

function readConfig(): GiscusConfig | null {
  const config = {
    repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? '',
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID ?? '',
    category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? '',
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? '',
  };
  // Without a category the widget cannot decide where to open discussions, so
  // it stays hidden rather than rendering an error to visitors.
  if (!config.repo || !config.repoId || !config.categoryId) return null;
  return config;
}

/**
 * GitHub Discussions-backed comments via giscus. Rendered only once the repo
 * has Discussions enabled, a category exists and their ids are set as
 * NEXT_PUBLIC_GISCUS_* build variables — see README "Comments".
 */
export function Comments() {
  const { t, locale } = useI18n();
  const { theme, ready: themeReady } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const config = readConfig();

  useEffect(() => {
    if (!config || !containerRef.current) return;

    const container = containerRef.current;
    container.replaceChildren();

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.setAttribute('data-repo', config.repo);
    script.setAttribute('data-repo-id', config.repoId);
    script.setAttribute('data-category', config.category);
    script.setAttribute('data-category-id', config.categoryId);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    script.setAttribute('data-lang', locale === 'bn' ? 'bn' : 'en');

    container.appendChild(script);
    return () => {
      container.replaceChildren();
    };
    // Re-mounting on theme or locale change restarts the widget, so the theme
    // is applied through postMessage below instead.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config?.repo, config?.repoId, config?.category, config?.categoryId, locale]);

  // giscus only reads data-theme on load, so later switches are pushed in.
  useEffect(() => {
    if (!config || !themeReady) return;
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: theme === 'dark' ? 'dark' : 'light' } } },
      'https://giscus.app',
    );
  }, [theme, themeReady, config]);

  if (!config) return null;

  return (
    <section aria-labelledby="comments-heading" className="mt-14">
      <h2 id="comments-heading" className="font-display text-xl font-semibold text-heading">
        {t('insights.comments')}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-body-soft">{t('insights.commentsNote')}</p>
      <div ref={containerRef} className="mt-6" />
    </section>
  );
}
