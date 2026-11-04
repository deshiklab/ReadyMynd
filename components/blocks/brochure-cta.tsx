import { ArrowRight, FileText } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { brochureCta } from '@/lib/site';

/**
 * Secondary CTA that closes every v1.8 main page.
 */
export function BrochureCta({
  title = 'Prefer to read the details first?',
  body = 'The ReadyMynd corporate brochure summarises the assessment framework, deliverables and advisory scope in a single document.',
  ctaLabel = brochureCta.label,
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="border-t border-mist-200 bg-mist-50 py-14">
      <div className="container-page">
        <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-mist-200 bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <FileText className="size-5" aria-hidden />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-ink-900">{title}</h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-mist-600">{body}</p>
            </div>
          </div>
          <ButtonLink href={brochureCta.href} variant="secondary" className="shrink-0">
            {ctaLabel}
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
