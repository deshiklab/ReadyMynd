'use client';

import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { Card, CardBody, CardTitle } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { informationAreas } from '@/lib/content';
import { useI18n } from '@/lib/i18n';

type TimelineItem = { phase: string; title: string; body: string };
type PairCard = { title: string; body: string };

export function EuDppContent() {
  const { t, tx, tr } = useI18n();
  const timeline = tr<TimelineItem[]>('dpp.timeline') ?? [];
  const implicationCards = tr<PairCard[]>('dpp.i2Cards') ?? [];

  return (
    <>
      <PageHero
        eyebrow={t('dpp.eyebrow')}
        title={t('dpp.title')}
        intro={t('dpp.intro')}
        crumbs={[{ label: t('nav.home'), href: '/' }, { label: t('nav.dppFull') }]}
        image="/images/pages/eu-dpp.jpeg"
        imageAlt={t('dpp.imageAlt')}
        actions={[
          { href: '/textile-dpp-digital-readiness-assessment/', label: t('cta.exploreAssessment') },
          {
            href: '/contact/?purpose=brochure#assessment-enquiry',
            label: t('cta.downloadBrochure'),
            variant: 'outlineLight',
          },
        ]}
      />

      {/* ------------------------------------------------------------- 2.1 */}
      <Section id="understanding" tone="light" grid>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={t('dpp.u1Eyebrow')} title={t('dpp.u1Title')} />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-body">
              <p>{t('dpp.u1P1')}</p>
              <p>{t('dpp.u1P2')}</p>
              <p>{t('dpp.u1P3')}</p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8 rounded-2xl border border-line bg-surface-muted p-6">
                <Eyebrow>{t('dpp.u1CalloutEyebrow')}</Eyebrow>
                <p className="mt-3 text-base leading-relaxed text-body">{t('dpp.u1Callout')}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pt-4">
            <div className="overflow-hidden rounded-2xl ring-1 ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/generated/dpp-passport.jpg"
                alt={t('dpp.u1ImageAlt')}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------- Timeline / how it develops */}
      <Section id="how-it-develops" tone="mist">
        <SectionHeading
          align="center"
          eyebrow={t('dpp.timelineEyebrow')}
          title={t('dpp.timelineTitle')}
          intro={t('dpp.timelineIntro')}
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, i) => (
            <li key={item.phase}>
              <Reveal
                delay={i * 70}
                className="h-full rounded-2xl border border-line bg-surface-raised p-6 shadow-soft"
              >
                <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-accent-strong">
                  {item.phase}
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-heading">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------------------- 2.2 */}
      <Section id="implications" >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
                           eyebrow={t('dpp.i2Eyebrow')}
              title={t('dpp.i2Title')}
            />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-body-strong">
              <p>{t('dpp.i2P1')}</p>
              <p>{t('dpp.i2P2')}</p>
              <p>{t('dpp.i2P3')}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 border-l-2 border-brand-500 pl-5 font-display text-xl font-semibold text-heading">
                {t('dpp.i2Quote')}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            {implicationCards.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-surface-raised p-6">
                <h3 className="font-display text-sm font-semibold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 2.3 */}
      <Section id="information-areas" tone="mist">
        <SectionHeading
         eyebrow={t('dpp.i3Eyebrow')}
          title={t('dpp.i3Title')}
          intro={t('dpp.i3Intro')}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {informationAreas.map((area, i) => (
            <Card key={tx(area.title)} delay={i * 45}>
              <span className="font-display text-xs font-bold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <CardTitle className="mt-3 text-base leading-snug">{tx(area.title)}</CardTitle>
              <CardBody className="text-sm">{tx(area.body)}</CardBody>
            </Card>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface-muted p-6 sm:p-7">
            <h3 className="font-display text-lg font-semibold text-heading">{t('dpp.traceTitle')}</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">{t('dpp.traceBody')}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface-muted p-6 sm:p-7">
            <h3 className="font-display text-lg font-semibold text-heading">
              {t('dpp.evidenceTitle')}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body">{t('dpp.evidenceBody')}</p>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <Notice title={t('dpp.noticeTitle')}>
            <p>{t('dpp.noticeBody')}</p>
          </Notice>
        </Reveal>
      </Section>

      <CtaBand
        title={t('dpp.ctaTitle')}
        intro={t('dpp.ctaIntro')}
        primary={{
          href: '/textile-dpp-digital-readiness-assessment/',
          label: t('dpp.ctaPrimary'),
        }}
      />

      <BrochureCta />
    </>
  );
}
