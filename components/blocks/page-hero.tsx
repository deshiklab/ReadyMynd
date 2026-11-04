import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/section';

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
  actions?: { href: string; label: string; variant?: 'primary' | 'outlineLight' }[];
  meta?: { label: string }[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="section-ink overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
      <div aria-hidden className="grid-veil absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_78%)]" />
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container-page">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-mist-400">
              {crumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="size-3 text-mist-600" aria-hidden />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-mist-300">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={`grid items-center gap-12 ${image ? 'lg:grid-cols-[1.05fr_0.95fr]' : ''}`}>
          <div className="max-w-3xl">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            {intro && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-300">{intro}</p>
            )}

            {meta && meta.length > 0 && (
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
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
                    variant={action.variant ?? 'primary'}
                    size="lg"
                  >
                    {action.label}
                  </ButtonLink>
                ))}
              </div>
            )}
          </div>

          {image && (
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={imageAlt}
                  className="aspect-4/3 w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
