'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { insights, knowledgeTopics } from '@/lib/content';
import { asset } from '@/lib/site';
import { useI18n, type Locale } from '@/lib/i18n';

type SortKey = 'newest' | 'oldest';

function formatDate(iso: string, locale: Locale) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale === 'bn' ? 'bn-GB' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function InsightsBrowser() {
  const { t, tx, locale } = useI18n();
  // Store the topic *index* so the filter survives a language switch.
  const [topicIndex, setTopicIndex] = useState<number | null>(null);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortKey>('newest');

  const topic = topicIndex === null ? null : tx(knowledgeTopics[topicIndex].title);
  const trimmed = query.trim().toLowerCase();

  const matches = useMemo(() => {
    const filtered = insights.filter((item) => {
      if (topic && tx(item.topic) !== topic) return false;
      if (!trimmed) return true;
      const haystack = [
        tx(item.title),
        tx(item.excerpt),
        tx(item.topic),
        ...(item.tags ?? []).map((tag) => tx(tag)),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(trimmed);
    });

    return filtered.sort((a, b) =>
      sort === 'newest' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date),
    );
  }, [topic, trimmed, sort, tx]);

  useEffect(() => {
    if (topicIndex !== null && topicIndex >= knowledgeTopics.length) setTopicIndex(null);
  }, [topicIndex]);

  const hasFilters = topic !== null || trimmed.length > 0;
  const countLabel = matches.length === 1 ? t('insights.lEntry') : t('insights.lEntries');

  const clearAll = () => {
    setTopicIndex(null);
    setQuery('');
  };

  return (
    <div>
      {/* Search, sort and topic filter */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-body-soft"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('insights.lSearchPlaceholder')}
              aria-label={t('insights.lSearch')}
              className="w-full rounded-full border border-line bg-surface-raised py-2.5 pl-11 pr-10 text-sm text-body placeholder:text-body-soft focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label={t('insights.lClear')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-body-soft transition-colors hover:text-heading"
              >
                <X className="size-4" aria-hidden />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="size-4 text-body-soft" aria-hidden />
            <label htmlFor="insight-sort" className="sr-only">
              {t('insights.lSort')}
            </label>
            <select
              id="insight-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              className="rounded-full border border-line bg-surface-raised px-4 py-2.5 text-[0.8125rem] font-semibold text-body focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value="newest">{t('insights.lNewest')}</option>
              <option value="oldest">{t('insights.lOldest')}</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-body-soft">
            <Filter className="size-3.5" aria-hidden />
            {t('insights.lFilter')}
          </span>

          <button
            type="button"
            onClick={() => setTopicIndex(null)}
            aria-pressed={topicIndex === null}
            className={`rounded-full border px-4 py-2 text-[0.8125rem] font-semibold transition-all ${
              topic === null
                ? 'border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink'
                : 'border-line bg-surface-raised text-body hover:border-line-strong hover:text-heading'
            }`}
          >
            {t('insights.lAll')}
          </button>

          {knowledgeTopics.map((item, index) => {
            const label = tx(item.title);
            const selected = topicIndex === index;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setTopicIndex(selected ? null : index)}
                aria-pressed={selected}
                className={`rounded-full border px-4 py-2 text-[0.8125rem] font-semibold transition-all ${
                  selected
                    ? 'border-brand-500 bg-brand-500 text-white'
                    : 'border-line bg-surface-raised text-body hover:border-brand-300 hover:text-heading'
                }`}
              >
                {label}
              </button>
            );
          })}

          {hasFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.8125rem] font-semibold text-accent hover:underline"
            >
              <X className="size-3.5" aria-hidden />
              {t('insights.lClear')}
            </button>
          )}
        </div>
      </div>

      {/* Topic cards — hidden once the reader narrows things down */}
      {!hasFilters && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {knowledgeTopics.map((item) => (
            <article
              key={tx(item.title)}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface-raised p-6 shadow-soft transition-all hover:border-brand-300 hover:shadow-lift"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent-line">
                <BookOpen className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-heading">
                {tx(item.title)}
              </h3>
              <p className="mt-2 text-sm font-medium text-accent">{tx(item.body)}</p>
              <p className="mt-3 text-sm leading-relaxed text-body">{tx(item.detail)}</p>
            </article>
          ))}
        </div>
      )}

      {/* Results */}
      <div className="mt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <h3 className="font-display text-xl font-semibold text-heading">
            {hasFilters ? t('insights.lResults') : t('insights.lLatest')}
          </h3>
          <p className="text-sm text-body-soft">
            {matches.length} {countLabel}
          </p>
        </div>

        {matches.length > 0 ? (
          <ul className="divide-y divide-line">
            {matches.map((insight) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}/`}
                  className="group grid gap-5 py-7 sm:grid-cols-[8rem_1fr_auto] sm:items-start sm:gap-8"
                >
                  {insight.image && (
                    <div className="overflow-hidden rounded-xl ring-1 ring-line">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(insight.image)}
                        alt={insight.imageAlt ? tx(insight.imageAlt) : tx(insight.title)}
                        className="aspect-3/2 h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}

                  <div className={insight.image ? '' : 'sm:col-span-2'}>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-body-soft">
                      <span className="rounded-full bg-surface-sunken px-2.5 py-1 font-semibold text-body-strong">
                        {tx(insight.topic)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-3.5" aria-hidden />
                        {formatDate(insight.date, locale)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5" aria-hidden />
                        {tx(insight.readTime)}
                      </span>
                    </div>
                    <h4 className="mt-3 text-xl font-semibold leading-snug text-heading">
                      {tx(insight.title)}
                    </h4>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
                      {tx(insight.excerpt)}
                    </p>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent">
                    {t('insights.lRead')}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-12 text-center">
            <p className="text-sm leading-relaxed text-body">{t('insights.lNoResults')}</p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-raised px-4 py-2 text-[0.8125rem] font-semibold text-body transition-colors hover:border-brand-300 hover:text-heading"
            >
              <X className="size-3.5" aria-hidden />
              {t('insights.lClear')}
            </button>
          </div>
        )}
      </div>

      <p className="mt-10 text-sm leading-relaxed text-body-soft">{t('insights.lNote')}</p>
    </div>
  );
}
