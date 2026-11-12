'use client';

import { Suspense } from 'react';
import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { EnquiryForm } from '@/components/contact/enquiry-form';
import { useI18n } from '@/lib/i18n';
import { site } from '@/lib/site';

/**
 * A card holds one or more links — the contact numbers share a single card
 * rather than occupying two.
 */
type ContactCard = {
  icon: LucideIcon;
  label: string;
  links: { value: string; href?: string; note?: string }[];
};

type Step = { title: string; body: string };

export function ContactContent() {
  const { t, tr } = useI18n();
  const steps = tr<Step[]>('contact.eSteps') ?? [];

  const contactCards: ContactCard[] = [
    {
      icon: Mail,
      label: t('contact.email'),
      links: [{ value: site.email, href: `mailto:${site.email}` }],
    },
    {
      icon: Phone,
      label: t('contact.contactNumber'),
      links: [
        { value: site.phone, href: `tel:${site.phoneHref}`, note: t('contact.phone') },
        {
          value: site.corporatePhone,
          href: `tel:${site.corporatePhoneHref}`,
          note: t('contact.corporatePhone'),
        },
      ],
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      links: [{ value: site.address, href: site.addressHref }],
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      links: [{ value: site.hours }],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        intro={t('contact.intro')}
        crumbs={[{ label: t('nav.home'), href: '/' }, { label: t('nav.contactFull') }]}
        image="/images/pages/contact.jpeg"
        imageAlt={t('contact.imageAlt')}
      />

      {/* ------------------------------------------------------------- 8.1 */}
      <Section id="assessment-enquiry" tone="light" className="scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={t('contact.eEyebrow')}
              title={t('contact.eTitle')}
              intro={t('contact.eIntro')}
            />

            <Reveal delay={80} className="mt-8 space-y-6">
              <div className="rounded-2xl border border-line bg-surface-muted p-6">
                <Eyebrow>{t('contact.eNextTitle')}</Eyebrow>
                <ol className="mt-4 space-y-4">
                  {steps.map((item, i) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink font-display text-[0.6875rem] font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-heading">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-body">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-accent-line bg-accent-soft p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-surface-raised text-accent ring-1 ring-accent-line">
                  <ShieldCheck className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-heading">
                  {t('contact.eConfidentialityTitle')}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {t('contact.eConfidentiality')}
                </p>
              </div>
            </Reveal>
          </div>

          <div id="enquiry-form" className="scroll-mt-28">
            <Suspense
              fallback={
                <div className="rounded-2xl border border-line bg-surface-raised p-8 shadow-lift">
                  <div className="h-6 w-48 animate-pulse rounded bg-surface-sunken" />
                  <div className="mt-6 h-24 animate-pulse rounded-xl bg-surface-sunken" />
                  <div className="mt-4 h-12 animate-pulse rounded-xl bg-surface-sunken" />
                  <div className="mt-4 h-12 animate-pulse rounded-xl bg-surface-sunken" />
                </div>
              }
            >
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 8.2 */}
      <Section id="business-enquiries" tone="mist">
        <SectionHeading
          eyebrow={t('contact.bEyebrow')}
          title={t('contact.bTitle')}
          intro={t('contact.bIntro')}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 60}
              className="rounded-2xl border border-line bg-surface-raised p-6"
            >
              <item.icon className="size-5 text-accent" aria-hidden />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-body-soft">
                {item.label}
              </p>
              <div className="mt-2 space-y-2">
                {item.links.map((link) =>
                  link.href ? (
                    <a
                      key={link.value}
                      href={link.href}
                      className="block text-base font-semibold text-heading hover:text-accent"
                    >
                      {link.value}
                      {link.note && (
                        <span className="mt-0.5 block text-xs font-normal text-body-soft">
                          {link.note}
                        </span>
                      )}
                    </a>
                  ) : (
                    <p key={link.value} className="text-base font-semibold text-heading">
                      {link.value}
                    </p>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-body-strong">
            {t('contact.bNote')}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
