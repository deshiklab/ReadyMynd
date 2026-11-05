'use client';

import { Clock3, FileCheck2, Target } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { CheckList } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { evidenceSources, processSteps } from '@/lib/content';
import { useI18n } from '@/lib/i18n';

export function MethodologyContent() {
  const { t, tx, tl } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t('methodology.eyebrow')}
        title={t('methodology.title')}
        intro={t('methodology.intro')}
        crumbs={[{ label: t('nav.home'), href: '/' }, { label: t('nav.methodologyFull') }]}
        image="/images/pages/methodology.jpeg"
        imageAlt={t('methodology.imageAlt')}
        meta={tl('methodology.meta').map((label) => ({ label }))}
        actions={[
          { href: '/contact/#assessment-enquiry', label: t('cta.requestAssessment') },
          {
            href: '/contact/?purpose=brochure#assessment-enquiry',
            label: t('cta.downloadBrochure'),
            variant: 'outlineLight',
          },
        ]}
      />

      {/* ------------------------------------------------------------- 4.1 */}
      <Section id="five-steps" tone="light" grid>
        <SectionHeading
         eyebrow={t('methodology.sEyebrow')}
          title={t('methodology.sTitle')}
          intro={t('methodology.sIntro')}
        />

        <ol className="mt-14 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <li key={step.index} className="relative">
              <Reveal delay={i * 70} className="h-full">
                <div className="relative h-full rounded-2xl border border-line bg-surface-raised p-6 shadow-soft transition-shadow hover:shadow-lift">
                  <span className="font-display text-4xl font-bold text-brand-100">
                    {step.index}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-heading">
                    {tx(step.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{tx(step.body)}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-body">
            {t('methodology.sNote')}
          </p>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------------- 4.2 */}
      <Section id="evidence" tone="mist">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
                           eyebrow={t('methodology.eEyebrow')}
              title={t('methodology.eTitle')}
            />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-body-strong">
              <p>{t('methodology.eP1')}</p>
              <p>{t('methodology.eP2')}</p>
            </Reveal>
            <Reveal delay={140} className="mt-8">
              <Notice title={t('methodology.eNoticeTitle')}>
                <p>{t('methodology.eNotice')}</p>
              </Notice>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <Eyebrow >{t('methodology.eSourcesTitle')}</Eyebrow>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {evidenceSources.map((source, i) => (
                  <div
                    key={tx(source)}
                    className="flex items-start gap-3 rounded-xl border border-line bg-surface-raised p-4"
                  >
                    <span className="font-display text-xs font-bold text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-relaxed text-body-strong">{tx(source)}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 4.3 */}
      <Section id="scope-responsibilities" tone="light">
        <SectionHeading
         eyebrow={t('methodology.rEyebrow')}
          title={t('methodology.rTitle')}
          intro={t('methodology.rIntro')}
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {[
            { icon: Target, title: t('methodology.rScopeTitle'), body: t('methodology.rScope') },
            {
              icon: Clock3,
              title: t('methodology.rTimelineTitle'),
              body: t('methodology.rTimeline'),
            },
            {
              icon: FileCheck2,
              title: t('methodology.rDeliveryTitle'),
              body: t('methodology.rDelivery'),
            },
          ].map((item) => (
            <Reveal
              key={item.title}
              className="rounded-2xl border border-line bg-surface-raised p-6 sm:p-7"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent-line">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-heading">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-surface-raised p-6 shadow-soft sm:p-8">
            <Eyebrow>{t('methodology.rOursTitle')}</Eyebrow>
            <div className="mt-5">
              <CheckList items={tl('methodology.rOurs')} />
            </div>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-line bg-surface-muted p-6 sm:p-8">
            <Eyebrow>{t('methodology.rTheirsTitle')}</Eyebrow>
            <div className="mt-5">
              <CheckList
                items={tl('methodology.rTheirs')}
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-8">
          <Notice title={t('methodology.rNoticeTitle')}>
            <p>{t('methodology.rNotice')}</p>
          </Notice>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow={t('cta.requestAssessment')}
        title={t('methodology.ctaTitle')}
        intro={t('methodology.ctaIntro')}
        primary={{ href: '/contact/#assessment-enquiry', label: t('cta.requestAssessment') }}
      />

      <BrochureCta />
    </>
  );
}
