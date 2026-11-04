'use client';

import { Compass, Cpu, MapPin, Scale, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { capabilities, commitments } from '@/lib/content';
import { useI18n } from '@/lib/i18n';

const capabilityIcons = [MapPin, Compass, Cpu, Sparkles, Scale];

type PairCard = { title: string; body: string };

export function AboutContent() {
  const { t, tx, tl, tr } = useI18n();
  const whoCards = tr<PairCard[]>('about.wCards') ?? [];

  return (
    <>
      <PageHero
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        intro={t('about.intro')}
        crumbs={[{ label: t('nav.home'), href: '/' }, { label: t('nav.aboutFull') }]}
        image="/images/pages/about.jpeg"
        imageAlt={t('about.imageAlt')}
        meta={tl('about.meta').map((label) => ({ label }))}
        actions={[
          { href: '/contact/', label: t('cta.contactReadyMynd') },
          {
            href: '/contact/?purpose=brochure#assessment-enquiry',
            label: t('cta.downloadBrochure'),
            variant: 'outlineLight',
          },
        ]}
      />

      {/* ------------------------------------------------------------- 6.1 */}
      <Section id="who-we-are" tone="light" grid>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={t('about.wEyebrow')} title={t('about.wTitle')} />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-body">
              <p>{t('about.wP1')}</p>
              <p>{t('about.wP2')}</p>
              <p>{t('about.wP3')}</p>
            </Reveal>
          </div>

          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            {whoCards.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-surface-muted p-5">
                <h3 className="font-display text-sm font-semibold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 6.2 */}
      <Section id="expertise" tone="mist">
        <SectionHeading
         eyebrow={t('about.eEyebrow')}
          title={t('about.eTitle')}
          intro={t('about.eIntro')}
        />

        <div className="mt-12 space-y-4">
          {capabilities.map((capability, i) => {
            const Icon = capabilityIcons[i] ?? Sparkles;
            return (
              <Reveal
                key={tx(capability.title)}
                delay={i * 60}
                className="group flex flex-col gap-5 rounded-2xl border border-line bg-surface-raised p-6 shadow-soft transition-shadow hover:shadow-lift sm:flex-row sm:items-start sm:gap-7 sm:p-7"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent-line">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-heading">
                    {tx(capability.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{tx(capability.body)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-body">
            {t('about.eNote')}
          </p>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------------- 6.3 */}
      <Section id="commitments" >
        <SectionHeading
                   eyebrow={t('about.cEyebrow')}
          title={t('about.cTitle')}
          intro={t('about.cIntro')}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((commitment, i) => (
            <Reveal
              key={tx(commitment.title)}
              delay={i * 55}
              className="rounded-2xl border border-line bg-surface-raised p-6"
            >
              <span className="font-display text-xs font-bold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-heading">{tx(commitment.title)}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-body">
                {tx(commitment.body)}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-10 grid gap-6 lg:grid-cols-2">
          <Notice title={t('about.cNotice1Title')}>
            <p>{t('about.cNotice1')}</p>
          </Notice>
          <Notice title={t('about.cNotice2Title')}>
            <p>{t('about.cNotice2')}</p>
          </Notice>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow={t('nav.contactFull')}
        title={t('about.ctaTitle')}
        intro={t('about.ctaIntro')}
        primary={{ href: '/contact/', label: t('cta.contactReadyMynd') }}
      />

      <BrochureCta />
    </>
  );
}
