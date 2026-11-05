'use client';

import { ArrowRight, Download } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { brochureCta } from '@/lib/site';
import { useI18n } from '@/lib/i18n';

export function CtaBand({
  eyebrow,
  title,
  intro,
  primary,
  secondary,
  note,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  note?: React.ReactNode;
}) {
  const { t } = useI18n();

  return (
    <section className="section-cta overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden
        className="grid-veil-light absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[110px] dark:bg-brand-500/20"
      />

      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">{eyebrow ?? t('cta.requestAssessment')}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-heading sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          {intro && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">{intro}</p>}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={primary.href} size="lg">
              {primary.label}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink
              href={secondary?.href ?? brochureCta.href}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <Download className="size-4" aria-hidden />
              {secondary?.label ?? t('brochureCta.cta')}
            </ButtonLink>
          </div>

          {note && <p className="mt-6 text-sm leading-relaxed text-body-soft">{note}</p>}
        </Reveal>
      </div>
    </section>
  );
}
