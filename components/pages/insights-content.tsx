'use client';

import Link from 'next/link';
import { CalendarDays, Clock } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeading } from '@/components/ui/section';
import { InsightsBrowser } from '@/components/insights/insights-browser';
import { insights } from '@/lib/content';
import { useI18n, type Locale } from '@/lib/i18n';

function formatDate(iso: string, locale: Locale) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale === 'bn' ? 'bn-GB' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function InsightsContent() {
  const { t, tx, locale } = useI18n();
  const featured = insights.filter((item) => item.featured);

  return (
    <>
      <PageHero
        eyebrow={t('insights.eyebrow')}
        title={t('insights.title')}
        intro={t('insights.intro')}
        crumbs={[{ label: t('nav.home'), href: '/' }, { label: t('nav.insightsFull') }]}
        image="/images/pages/insights.jpeg"
        imageAlt={t('insights.imageAlt')}
        actions={[
          {
            href: '/contact/?purpose=brochure#assessment-enquiry',
            label: t('insights.ctaPrimary'),
            variant: 'primary',
          },
        ]}
      />

      {/* ------------------------------------------------------------- 7.1 */}
      <Section id="featured" tone="light" grid>
        <SectionHeading
         eyebrow={t('insights.fEyebrow')}
          title={t('insights.fTitle')}
          intro={t('insights.fIntro')}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featured.map((insight, i) => (
            <Reveal key={insight.slug} delay={i * 70} className="h-full">
              <Link
                href={`/insights/${insight.slug}/`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface-raised p-6 shadow-soft transition-all hover:border-brand-300 hover:shadow-lift sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-body-soft">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 font-semibold text-accent-strong">
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
                <h3 className="mt-4 text-xl font-semibold leading-snug text-heading">
                  {tx(insight.title)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                  {tx(insight.excerpt)}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {t('insights.fRead')}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-body">{t('insights.fNote')}</p>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------------- 7.2 */}
      <Section id="knowledge-library" tone="mist">
        <SectionHeading
         eyebrow={t('insights.lEyebrow')}
          title={t('insights.lTitle')}
          intro={t('insights.lIntro')}
        />

        <Reveal delay={80} className="mt-12">
          <InsightsBrowser />
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Notice title={t('insights.aNoticeTitle')}>
            <p>{t('insights.lNote')}</p>
          </Notice>
        </Reveal>
      </Section>

      <BrochureCta />
    </>
  );
}
