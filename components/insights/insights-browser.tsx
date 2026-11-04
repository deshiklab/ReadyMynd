'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, Clock, Filter, X } from 'lucide-react';
import { insights, knowledgeTopics } from '@/lib/content';
import { useI18n, type Locale } from '@/lib/i18n';

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
  const topic = topicIndex === null ? null : tx(knowledgeTopics[topicIndex].title);

  const visibleTopics = useMemo(
    () => (topicIndex === null ? knowledgeTopics : [knowledgeTopics[topicIndex]]),
    [topicIndex],
  );

  const visibleInsights = useMemo(
    () => (topic ? insights.filter((item) => tx(item.topic) === topic) : insights),
    [topic, tx],
  );

  useEffect(() => {
    if (topicIndex !== null && topicIndex >= knowledgeTopics.length) setTopicIndex(null);
  }, [topicIndex]);

  const countLabel = visibleInsights.length === 1 ? t('insights.lEntry') : t('insights.lEntries');

  return (
    <div>
      {/* Topic filter */}
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
              ? 'border-ink bg-ink text-white'
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

        {topic && (
          <button
            type="button"
            onClick={() => setTopicIndex(null)}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.8125rem] font-semibold text-accent hover:underline"
          >
            <X className="size-3.5" aria-hidden />
            {t('insights.lClear')}
          </button>
        )}
      </div>

      {/* Topic cards */}
      <div
        className={`mt-10 grid gap-4 ${visibleTopics.length === 1 ? 'lg:grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
      >
        {visibleTopics.map((item) => (
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

      {/* Matching insights */}
      <div className="mt-16">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <h3 className="font-display text-xl font-semibold text-heading">
            {topic ? `${t('insights.lInTopic')} ${topic}` : t('insights.lLatest')}
          </h3>
          <p className="text-sm text-body-soft">
            {visibleInsights.length} {countLabel}
          </p>
        </div>

        {visibleInsights.length > 0 ? (
          <ul className="divide-y divide-line">
            {visibleInsights.map((insight) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}/`}
                  className="group grid gap-3 py-7 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
                >
                  <div>
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
          <p className="py-10 text-sm text-body">{t('insights.lEmpty')}</p>
        )}
      </div>

      <p className="mt-10 text-sm leading-relaxed text-body-soft">{t('insights.lNote')}</p>
    </div>
  );
}
