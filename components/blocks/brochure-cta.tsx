'use client';

import { ArrowRight, FileText } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { useI18n } from '@/lib/i18n';
import { brochureCta } from '@/lib/site';

/** Secondary CTA that closes every v1.8 main page. */
export function BrochureCta({
  title,
  body,
  ctaLabel,
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
}) {
  const { t } = useI18n();

  return (
    <section className="border-t border-line bg-surface-muted py-14">
      <div className="container-page">
        <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-surface-raised p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent-line">
              <FileText className="size-5" aria-hidden />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-heading">{title ?? t('brochureCta.title')}</h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-body">
                {body ?? t('brochureCta.body')}
              </p>
            </div>
          </div>
          <ButtonLink href={brochureCta.href} variant="secondary" className="shrink-0">
            {ctaLabel ?? t('brochureCta.cta')}
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
