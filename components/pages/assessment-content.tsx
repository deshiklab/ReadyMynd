'use client';

import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { ButtonLink } from '@/components/ui/button';
import { Card, CardBody, CardTitle, StepBadge } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeading } from '@/components/ui/section';
import { DimensionsExplorer } from '@/components/interactive/dimensions-explorer';
import { assessmentBenefits, reportOutputs } from '@/lib/content';
import { useI18n } from '@/lib/i18n';
import { asset } from '@/lib/site';

export function AssessmentContent() {
  const { t, tx, tl } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t('assessment.eyebrow')}
        title={t('assessment.title')}
        intro={t('assessment.intro')}
        crumbs={[{ label: t('nav.home'), href: '/' }, { label: t('nav.assessmentFull') }]}
        image="/images/pages/assessment.jpeg"
        imageAlt={t('assessment.imageAlt')}
        meta={tl('assessment.meta').map((label) => ({ label }))}
        actions={[
          { href: '/contact/#assessment-enquiry', label: t('cta.requestAssessment') },
          {
            href: '/contact/?purpose=brochure#assessment-enquiry',
            label: t('cta.downloadBrochure'),
            variant: 'outlineLight',
          },
        ]}
      />

      {/* ------------------------------------------------------------- 3.1 */}
      <Section id="overview" tone="light" grid>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={t('assessment.oEyebrow')} title={t('assessment.oTitle')} />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-body">
              <p>{t('assessment.oP1')}</p>
              <p>{t('assessment.oP2')}</p>
              <p>{t('assessment.oP3')}</p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl ring-1 ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset('/images/generated/dimensions.jpg')}
                alt={t('assessment.oImageAlt')}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <SectionHeading
           eyebrow={t('assessment.frameworkEyebrow')}
            title={t('assessment.frameworkTitle')}
            intro={t('assessment.frameworkIntro')}
          />
          <Reveal delay={80} className="mt-10">
            <DimensionsExplorer />
          </Reveal>
          <Reveal delay={120}>
            <Notice title={t('assessment.noticeTitle')} tone="amber">
              <p>{t('assessment.noticeP1')}</p>
              <p>{t('assessment.noticeP2')}</p>
            </Notice>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 3.2 */}
      <Section id="benefits" tone="mist">
        <SectionHeading
         eyebrow={t('assessment.bEyebrow')}
          title={t('assessment.bTitle')}
          intro={t('assessment.bIntro')}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {assessmentBenefits.map((benefit, i) => (
            <Card key={tx(benefit.title)} delay={i * 50}>
              <StepBadge>{String(i + 1).padStart(2, '0')}</StepBadge>
              <CardTitle className="mt-4">{tx(benefit.title)}</CardTitle>
              <CardBody>{tx(benefit.body)}</CardBody>
            </Card>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-xl font-semibold text-heading">
            {t('assessment.bQuote')}
          </p>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------------- 3.3 */}
      <Section id="deliverables" tone="light">
        <SectionHeading
         eyebrow={t('assessment.dEyebrow')}
          title={t('assessment.dTitle')}
          intro={t('assessment.dIntro')}
        />

        <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
          {reportOutputs.map((output, i) => (
            <li key={tx(output.title)} className="bg-surface-raised">
              <Reveal
                delay={i * 45}
                className="flex flex-col gap-2 p-6 transition-colors hover:bg-surface-muted sm:flex-row sm:items-start sm:gap-8 sm:p-7"
              >
                <span className="font-display text-2xl font-bold text-body-soft sm:w-12 sm:shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-heading">
                    {tx(output.title)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{tx(output.body)}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={80}>
            <Notice title={t('assessment.dNoticeTitle')}>
              <p>{t('assessment.dNotice')}</p>
            </Notice>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-line bg-surface-muted p-6">
            <h3 className="font-display text-base font-semibold text-heading">
              {t('assessment.dOwnershipTitle')}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{t('assessment.dOwnership')}</p>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-10">
          <ButtonLink href="/assessment-methodology/" variant="ink">
            {t('assessment.dCta')}
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow={t('cta.requestAssessment')}
        title={t('assessment.ctaTitle')}
        intro={t('assessment.ctaIntro')}
        primary={{ href: '/contact/#assessment-enquiry', label: t('cta.requestAssessment') }}
        note={t('assessment.ctaNote')}
      />

      <BrochureCta />
    </>
  );
}
