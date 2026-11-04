'use client';

import { ButtonLink } from '@/components/ui/button';
import { mainNav } from '@/lib/site';
import { useI18n } from '@/lib/i18n';

const navKeys = ['home', 'dpp', 'assessment', 'methodology', 'advisory'] as const;

export default function NotFound() {
  const { t } = useI18n();

  return (
    <section className="section-ink flex min-h-[70vh] items-center overflow-hidden pb-24 pt-36">
      <div
        aria-hidden
        className="grid-veil absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[110px]"
      />

      <div className="container-page text-center">
        <p className="font-display text-7xl font-bold text-white/15">{t('notFound.code')}</p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t('notFound.title')}</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-onink-soft">
          {t('notFound.body')}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {navKeys.map((key) => (
            <ButtonLink key={key} href={mainNav[navKeys.indexOf(key)].href} variant="outlineLight" size="sm">
              {t(`nav.${key}`)}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
