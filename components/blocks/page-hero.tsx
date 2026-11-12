import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/section';
import { asset } from '@/lib/site';
import { HeroBanner } from '@/components/blocks/hero-banner';

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
  actions,
  meta,
  image,
  imageAlt = '',
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  actions?: {
    href: string;
    label: string;
    variant?: 'primary' | 'outlineLight';
  }[];
  meta?: { label: string }[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <>
      {/*
       * Inner pages get one fixed banner rather than the home page's slider —
       * the artwork belongs to this page, so there is nothing to rotate
       * through. The banner carries the image, so the text block below no
       * longer repeats it in a side column.
       */}
      {image && <HeroBanner image={image} imageAlt={imageAlt} eyebrow={eyebrow} />}
      <section className="section-hero overflow-hidden pb-20 pt-24 sm:pb-24 lg:pb-28 lg:pt-28">
        <div
          aria-hidden
          className="grid-veil-light absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_78%)]"
        />
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px] dark:bg-brand-500/20"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-line to-transparent"
        />

        <div className="container-page">
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-body-soft">
                {crumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="size-3" aria-hidden />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition-colors hover:text-heading">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-body-strong">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div
            className="grid items-center gap-12"
          >
            <div className="max-w-3xl">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-heading sm:text-5xl lg:text-[3.5rem]">
                {title}
              </h1>
              {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">{intro}</p>}

              {meta && meta.length > 0 && (
                <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8 lg:grid-cols-4">
                  {meta.map((item) => (
                    <div key={item.label}>
                      <dt className="font-display text-lg font-bold leading-snug text-heading lg:text-xl">
                        {item.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              )}

              {actions && actions.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-3">
                  {actions.map((action) => (
                    <ButtonLink
                      key={action.href + action.label}
                      href={action.href}
                      /* `outline` is theme-aware, so it reads correctly on the light hero. */
                      variant={action.variant === 'outlineLight' ? 'outline' : 'primary'}
                      size="lg"
                    >
                      {action.label}
                    </ButtonLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
