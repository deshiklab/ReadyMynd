'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, Clock, Filter, X } from 'lucide-react';
import { insights, knowledgeTopics } from '@/lib/content';

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function InsightsBrowser() {
  const [topic, setTopic] = useState<string | null>(null);

  const visibleTopics = useMemo(
    () => (topic ? knowledgeTopics.filter((t) => t.title === topic) : knowledgeTopics),
    [topic],
  );

  const visibleInsights = useMemo(
    () => (topic ? insights.filter((i) => i.topic === topic) : insights),
    [topic],
  );

  return (
    <div>
      {/* Topic filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-mist-500">
          <Filter className="size-3.5" aria-hidden />
          Filter by topic
        </span>
        <button
          type="button"
          onClick={() => setTopic(null)}
          aria-pressed={topic === null}
          className={`rounded-full border px-4 py-2 text-[0.8125rem] font-semibold transition-all ${
            topic === null
              ? 'border-ink-900 bg-ink-900 text-white'
              : 'border-mist-200 bg-white text-mist-700 hover:border-mist-300 hover:text-ink-900'
          }`}
        >
          All topics
        </button>
        {knowledgeTopics.map((t) => {
          const selected = topic === t.title;
          return (
            <button
              key={t.title}
              type="button"
              onClick={() => setTopic(selected ? null : t.title)}
              aria-pressed={selected}
              className={`rounded-full border px-4 py-2 text-[0.8125rem] font-semibold transition-all ${
                selected
                  ? 'border-brand-500 bg-brand-500 text-white'
                  : 'border-mist-200 bg-white text-mist-700 hover:border-brand-200 hover:text-ink-900'
              }`}
            >
              {t.title}
            </button>
          );
        })}
        {topic && (
          <button
            type="button"
            onClick={() => setTopic(null)}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.8125rem] font-semibold text-brand-600 hover:underline"
          >
            <X className="size-3.5" aria-hidden />
            Clear
          </button>
        )}
      </div>

      {/* Topic cards */}
      <div
        className={`mt-10 grid gap-4 ${visibleTopics.length === 1 ? 'lg:grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
      >
        {visibleTopics.map((t) => (
          <article
            key={t.title}
            className="group flex h-full flex-col rounded-2xl border border-mist-200 bg-white p-6 shadow-soft transition-all hover:border-brand-200 hover:shadow-lift"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <BookOpen className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-semibold leading-snug text-ink-900">{t.title}</h3>
            <p className="mt-2 text-sm font-medium text-brand-600">{t.body}</p>
            <p className="mt-3 text-sm leading-relaxed text-mist-600">{t.detail}</p>
          </article>
        ))}
      </div>

      {/* Matching insights */}
      <div className="mt-16">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-mist-200 pb-4">
          <h3 className="font-display text-xl font-semibold text-ink-900">
            {topic ? `Insights in ${topic}` : 'Latest insights'}
          </h3>
          <p className="text-sm text-mist-500">
            {visibleInsights.length} {visibleInsights.length === 1 ? 'entry' : 'entries'}
          </p>
        </div>

        {visibleInsights.length > 0 ? (
          <ul className="divide-y divide-mist-200">
            {visibleInsights.map((insight) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}/`}
                  className="group grid gap-3 py-7 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mist-500">
                      <span className="rounded-full bg-mist-100 px-2.5 py-1 font-semibold text-mist-700">
                        {insight.topic}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-3.5" aria-hidden />
                        {formatDate(insight.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5" aria-hidden />
                        {insight.readTime}
                      </span>
                    </div>
                    <h4 className="mt-3 text-xl font-semibold leading-snug text-ink-900">
                      {insight.title}
                    </h4>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-mist-600">
                      {insight.excerpt}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Read
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-10 text-sm text-mist-600">
            No published insights in this topic yet. New analysis is added as the EU framework
            develops — contact ReadyMynd if you would like to be notified.
          </p>
        )}
      </div>

      <p className="mt-10 text-sm leading-relaxed text-mist-500">
        Articles should display publication dates and reference relevant authoritative sources where
        practical. The library supports informed preparation and does not replace legal or regulatory
        advice.
      </p>
    </div>
  );
}
