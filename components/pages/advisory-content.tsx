'use client';

import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { CheckList } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { advisoryAreas, advisoryPrinciples } from '@/lib/content';
import { useI18n } from '@/lib/i18n';
import { asset } from '@/lib/site';

export function AdvisoryContent() {
  const { t, tx, tl } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t('advisory.eyebrow')}
        title={t('advisory.title')}
        intro={t('advisory.intro')}
        crumbs={[{ label: t('nav.home'), href: '/' }, { label: t('nav.advisoryFull') }]}
        image="/images/pages/advisory.jpeg"
        imageAlt={t('advisory.imageAlt')}
        meta={tl('advisory.meta').map((label) => ({ label }))}
        actions={[
          { href: '/contact/', label: t('cta.contactReadyMynd') },
          {
            href: '/contact/?purpose=brochure#assessment-enquiry',
            label: t('cta.downloadBrochure'),
            variant: 'outlineLight',
          },
        ]}
      />

      {/* ------------------------------------------------------------- 5.1 */}
      <Section id="overview" tone="light" grid>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={t('advisory.oEyebrow')} title={t('advisory.oTitle')} />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-body">
              <p>{t('advisory.oP1')}</p>
              <p>{t('advisory.oP2')}</p>
              <p>{t('advisory.oP3')}</p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pt-6">
            <Notice title={t('advisory.prerequisiteTitle')}>
              <p>{t('advisory.prerequisite')}</p>
            </Notice>
            <div className="mt-6 rounded-2xl border border-line bg-surface-muted p-6">
              <Eyebrow>{t('advisory.whyTitle')}</Eyebrow>
              <p className="mt-3 text-sm leading-relaxed text-body">{t('advisory.why')}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 5.2 */}
      <Section id="advisory-areas" tone="mist">
        <SectionHeading
          align="center"
          eyebrow={t('advisory.aEyebrow')}
          title={t('advisory.aTitle')}
          intro={t('advisory.aIntro')}
        />

        <Reveal delay={60} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/images/generated/advisory-areas.jpg')}
              alt={t('advisory.aImageAlt')}
              className="aspect-[2/1] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="mt-14 space-y-6">
          {advisoryAreas.map((area, i) => (
            <Reveal
              key={area.index}
              delay={i * 80}
              className="overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-soft"
            >
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-ink font-display text-sm font-bold text-white">
                      {area.index}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-heading">
                      {tx(area.title)}
                    </h3>
                  </div>
                  <p className="mt-4 font-display text-base font-medium text-accent">
                    {tx(area.subtitle)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body">{tx(area.body)}</p>
                </div>
                <div className="lg:border-l lg:border-line lg:pl-10">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-body-soft">
                    {t('advisory.aFocusLabel')}
                  </p>
                  <div className="mt-4">
                    <CheckList items={area.points.map((point) => tx(point))} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------- 5.3 */}
      <Section id="principles">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={t('advisory.pEyebrow')} title={t('advisory.pTitle')} />
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-relaxed text-body-strong">
                {t('advisory.pIntro')}
              </p>
            </Reveal>
          </div>

          <div>
            <ol className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {advisoryPrinciples.map((principle, i) => (
                <li key={tx(principle.title)} className="bg-surface-raised">
                  <Reveal
                    delay={i * 60}
                    className="flex flex-col gap-2 p-6 sm:flex-row sm:gap-8 sm:p-7"
                  >
                    <span className="font-display text-2xl font-bold text-body-soft sm:w-10 sm:shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-heading">{tx(principle.title)}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-body">
                        {tx(principle.body)}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal delay={140} className="mt-6">
              <Notice title={t('advisory.pNoticeTitle')}>
                <p>{t('advisory.pNotice')}</p>
              </Notice>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow={t('nav.contactFull')}
        title={t('advisory.ctaTitle')}
        intro={t('advisory.ctaIntro')}
        primary={{ href: '/contact/', label: t('cta.contactReadyMynd') }}
        note={t('advisory.ctaNote')}
      />

      <BrochureCta />
    </>
  );
}
