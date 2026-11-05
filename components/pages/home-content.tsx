'use client';

import { ArrowRight, Download, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Card, CardBody, CardTitle, StepBadge } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeading } from '@/components/ui/section';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { HeroSlider } from '@/components/blocks/hero-slider';
import { DimensionsExplorer } from '@/components/interactive/dimensions-explorer';
import { factoryTypes, processSteps } from '@/lib/content';
import { useI18n } from '@/lib/i18n';
import {brochureCta, asset } from '@/lib/site';

const heroStatValues = ['5', '7', '10–15', '1:1'];

export function HomeContent() {
  const { t, tx, tl } = useI18n();
  const statLabels = tl('hero.stats');

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="section-hero overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44">
        <div
          aria-hidden
          className="grid-veil-light absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        />
        <div
          aria-hidden
          className="absolute -top-48 left-1/2 -z-10 size-[46rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[130px] dark:bg-brand-500/20"
        />
        <div
          aria-hidden
          className="absolute -right-24 top-40 -z-10 size-[26rem] rounded-full bg-brand-500/10 blur-[100px] dark:bg-brand-500/15"
        />

        <div className="container-page">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-raised px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-body-strong backdrop-blur">
                  <Sparkles className="size-3.5 text-accent" aria-hidden />
                  {t('hero.eyebrow')}
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-7 text-4xl font-bold leading-[1.05] text-heading sm:text-5xl lg:text-[3.75rem]">
                  {t('hero.titleA')}
                  <span className="mt-2 block bg-gradient-to-r from-heading via-heading to-accent bg-clip-text text-transparent">
                    {t('hero.titleB')}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body">
                  {t('hero.introA')}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-body-soft">
                  {t('hero.introB')}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <p className="mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-accent-line bg-accent-soft px-4 py-2.5 font-display text-sm font-semibold tracking-tight text-heading">
                  <ShieldCheck className="size-4 text-accent" aria-hidden />
                  {t('hero.principle')}
                </p>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/textile-dpp-digital-readiness-assessment/" size="lg">
                    {t('hero.ctaPrimary')}
                    <ArrowRight className="size-4" aria-hidden />
                  </ButtonLink>
                  <ButtonLink href={brochureCta.href} size="lg" variant="outline">
                    <Download className="size-4" aria-hidden />
                    {t('hero.ctaSecondary')}
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={240} className="relative">
              <div
                aria-hidden
                className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-gradient-to-br from-brand-500/25 via-transparent to-transparent blur-2xl"
              />
              <HeroSlider />
              <div className="mt-6 rounded-xl border border-line bg-surface-raised/95 p-5 shadow-lift">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {t('hero.badgeTitle')}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-heading">
                  {t('hero.badgeHeading')}
                </p>
                <p className="mt-1 text-sm text-body">{t('hero.badgeBody')}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {heroStatValues.map((value, index) => (
                <div key={value} className="bg-surface-raised px-5 py-6 text-center sm:px-6 sm:py-8">
                  <dt className="font-display text-3xl font-bold text-heading sm:text-4xl">{value}</dt>
                  <dd className="mt-2 text-xs uppercase tracking-[0.12em] text-body-soft">
                    {statLabels[index]}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ 1.2 Why it matters */}
      <Section id="why-readiness-matters" tone="light" grid>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow={t('why.eyebrow')} title={t('why.title')} />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-body">
              <p>{t('why.p1')}</p>
              <p>{t('why.p2')}</p>
              <p>{t('why.p3')}</p>
              <p className="border-l-2 border-brand-500 pl-5 font-display text-lg font-semibold text-heading">
                {t('why.p4')}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8">
                <ButtonLink href="/textile-digital-product-passport/" variant="ghost" className="px-0">
                  {t('why.link')}
                  <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lift ring-1 ring-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset('/images/pages/eu-dpp.jpeg')}
                alt={t('why.imageAlt')}
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Layers, title: t('why.card1Title'), body: t('why.card1Body') },
                { icon: ShieldCheck, title: t('why.card2Title'), body: t('why.card2Body') },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-line bg-surface-raised p-5">
                  <item.icon className="size-5 text-accent" aria-hidden />
                  <p className="mt-3 font-display text-sm font-semibold text-heading">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------- Five dimensions (interactive) */}
      <Section id="readiness-dimensions" tone="mist">
        <SectionHeading
                   eyebrow={t('dimensions.eyebrow')}
          title={t('dimensions.title')}
          intro={t('dimensions.intro')}
        />

        <Reveal delay={80} className="mt-12">
          <DimensionsExplorer tone="mist" />
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-body-soft">
            {t('dimensions.note')}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10">
            <ButtonLink href="/textile-dpp-digital-readiness-assessment/" variant="outline">
              {t('dimensions.cta')}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* -------------------------------------------------- 1.3 Practical start */}
      <Section id="practical-start" tone="light" grid>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={t('start.eyebrow')} title={t('start.title')} />
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-relaxed text-body">{t('start.intro')}</p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tl('start.itemTitles').map((title, i) => (
              <Card key={title} delay={i * 60}>
                <StepBadge>{String(i + 1).padStart(2, '0')}</StepBadge>
                <CardTitle className="mt-4">{title}</CardTitle>
                <CardBody>{tl('start.items')[i]}</CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- 1.4 Who we serve */}
      <Section id="who-we-serve" tone="mist">
        <SectionHeading
         eyebrow={t('serve.eyebrow')}
          title={t('serve.title')}
          intro={t('serve.intro')}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {factoryTypes.map((type, i) => (
            <Card key={tx(type.title)} delay={i * 50} className="flex flex-col">
              <span className="font-display text-xs font-bold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <CardTitle className="mt-3 text-base">{tx(type.title)}</CardTitle>
              <CardBody className="text-sm">{tx(type.body)}</CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------- Process teaser */}
      <Section id="process" >
        <SectionHeading
                   eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          intro={t('process.intro')}
        />

        <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
          {processSteps.map((step, i) => (
            <li key={step.index} className="bg-surface-raised">
              <Reveal
                delay={i * 60}
                className="group grid gap-4 p-6 transition-colors hover:bg-surface-muted sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8"
              >
                <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                  <span className="font-display text-3xl font-bold text-body-soft transition-colors group-hover:text-accent">
                    {step.index}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-heading">{tx(step.title)}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">
                    {tx(step.body)}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-body-strong">{t('process.note')}</p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8">
            <ButtonLink href="/assessment-methodology/" variant="outline">
              {t('process.cta')}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow={t('ctaBand.eyebrow')}
        title={t('ctaBand.title')}
        intro={t('ctaBand.intro')}
        primary={{ href: '/contact/#assessment-enquiry', label: t('ctaBand.primary') }}
        note={t('ctaBand.note')}
      />

      <BrochureCta />
    </>
  );
}
