'use client';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useI18n();

  return (
    <section className="section-hero flex min-h-[70vh] items-center overflow-hidden pb-24 pt-36">
      <div
        aria-hidden
        className="grid-veil-light absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="container-page text-center">
        <h1 className="text-3xl font-bold text-heading sm:text-4xl">{t('error.title')}</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-body">
          {t('error.body')}
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <Button onClick={reset} variant="primary" size="lg">
            {t('error.retry')}
          </Button>
          <Button variant="outline" size="lg" onClick={() => (window.location.href = '/')}>
            {t('error.home')}
          </Button>
        </div>
      </div>
    </section>
  );
}
