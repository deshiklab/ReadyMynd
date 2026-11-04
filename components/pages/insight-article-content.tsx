'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Lightbulb, Languages } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { Notice } from '@/components/blocks/notice';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section } from '@/components/ui/section';
import { insights } from '@/lib/content';
import { useI18n, type Locale } from '@/lib/i18n';

function formatDate(iso: string, locale: Locale) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale === 'bn' ? 'bn-GB' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function InsightArticleContent({ slug }: { slug: string }) {
  const { t, tx, locale } = useI18n();
  const insight = insights.find((item) => item.slug === slug);
  const related = insights.filter((item) => item.slug !== slug).slice(0, 3);

  if (!insight) return null;

  return (
    <>
      <PageHero
        eyebrow={tx(insight.topic)}
        title={tx(insight.title)}
        intro={tx(insight.excerpt)}
        crumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.insightsFull'), href: '/insights/' },
          { label: tx(insight.title) },
        ]}
        actions={[
          { href: '/contact/#assessment-enquiry', label: t('cta.requestAssessment') },
          {
            href: '/contact/?purpose=brochure#assessment-enquiry',
            label: t('cta.downloadBrochure'),
            variant: 'outlineLight',
          },
        ]}
      />

      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-6 text-sm text-body-soft">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4" aria-hidden />
              {formatDate(insight.date, locale)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4" aria-hidden />
              {tx(insight.readTime)}
            </span>
            <span className="rounded-full bg-surface-sunken px-2.5 py-1 text-xs font-semibold text-body-strong">
              {tx(insight.topic)}
            </span>
          </Reveal>

          {/* Long-form body is English-only until reviewed. */}
          {locale === 'bn' && (
            <Reveal className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-surface-muted p-5">
              <Languages className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-heading">{t('englishOnly.title')}</p>
                <p className="mt-1 text-sm leading-relaxed text-body">{t('englishOnly.body')}</p>
              </div>
            </Reveal>
          )}

          <div className="mt-10 space-y-6">
            {insight.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 40}>
                <p
                  lang="en"
                  className={`leading-relaxed text-body ${i === 0 ? 'text-xl text-heading' : 'text-[1.0625rem]'}`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-2xl border border-line bg-surface-muted p-6 sm:p-8">
            <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent-line">
              <Lightbulb className="size-5" aria-hidden />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold text-heading">
              {t('insights.aTakeaways')}
            </h2>
            <ul className="mt-4 space-y-3">
              {insight.takeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span lang="en" className="text-[0.9375rem] leading-relaxed text-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-10">
            <Notice title={t('insights.aNoticeTitle')}>
              <p>{t('insights.aNotice')}</p>
            </Notice>
          </Reveal>

          <Reveal className="mt-10">
            <Link
              href="/insights/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <ArrowLeft className="size-4" aria-hidden />
              {t('insights.aContinueShort')}
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{t('insights.aContinue')}</Eyebrow>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/insights/${item.slug}/`}
                  className="group flex items-start justify-between gap-6 py-6"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-body-soft">
                      {tx(item.topic)}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold leading-snug text-heading">
                      {tx(item.title)}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-body">
                      {tx(item.excerpt)}
                    </p>
                  </div>
                  <ArrowRight
                    className="mt-1 size-5 shrink-0 text-body-soft transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        eyebrow={t('cta.requestAssessment')}
        title={t('insights.aCtaTitle')}
        intro={t('insights.aCtaIntro')}
        primary={{ href: '/contact/#assessment-enquiry', label: t('cta.requestAssessment') }}
      />
    </>
  );
}
