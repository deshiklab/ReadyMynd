'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { asset } from '@/lib/site';

/**
 * The eight page images are infographics, so the stage scales each one to fit
 * inside a fixed box with `object-contain` rather than cropping it to fill.
 * A fixed height also keeps every slide the same size, so the hero never
 * jumps when the image changes shape between 3:2 and 16:9.
 */
const SLIDES = [
  { id: 'home', image: '/images/pages/home.jpeg', href: '/' },
  { id: 'dpp', image: '/images/pages/eu-dpp.jpeg', href: '/textile-digital-product-passport/' },
  {
    id: 'assessment',
    image: '/images/pages/assessment.jpeg',
    href: '/textile-dpp-digital-readiness-assessment/',
  },
  { id: 'methodology', image: '/images/pages/methodology.jpeg', href: '/assessment-methodology/' },
  { id: 'advisory', image: '/images/pages/advisory.jpeg', href: '/digital-advisory/' },
  { id: 'insights', image: '/images/pages/insights.jpeg', href: '/insights/' },
  { id: 'about', image: '/images/pages/about.jpeg', href: '/about/' },
  { id: 'contact', image: '/images/pages/contact.jpeg', href: '/contact/' },
] as const;

const INTERVAL_MS = 6000;

export function HeroSlider() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  /** Only slides that have been shown get their image mounted, so the hero
   *  costs one request on first paint instead of all eight. */
  const [visited, setVisited] = useState<number[]>([0]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    setVisited((seen) => (seen.includes(index) ? seen : [...seen, index]));
  }, [index]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const active = SLIDES[index];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={t('heroSlider.region')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          go(index - 1);
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          go(index + 1);
        }
      }}
    >
      <div className="overflow-hidden rounded-2xl ring-1 ring-line">
        <div className="relative h-56 bg-surface-muted sm:h-64 lg:h-[25rem]">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              {visited.includes(i) && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={asset(slide.image)}
                  alt={t(`heroSlider.slides.${slide.id}.alt`)}
                  className="size-full object-contain"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-line bg-surface-raised px-5 py-4 sm:px-6">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
            {t(`heroSlider.slides.${active.id}.eyebrow`)}
          </p>
          <p className="mt-1.5 font-display text-base font-semibold leading-snug text-heading sm:text-lg">
            {t(`heroSlider.slides.${active.id}.title`)}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-body">
            {t(`heroSlider.slides.${active.id}.text`)}
          </p>
          <Link
            href={active.href}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-heading"
          >
            {t(`heroSlider.slides.${active.id}.cta`)}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label={t('heroSlider.prev')}
          className="glass-pill glass-ring inline-flex size-9 items-center justify-center rounded-full text-body-strong transition-colors hover:text-heading"
        >
          <ChevronLeft className="size-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label={t('heroSlider.next')}
          className="glass-pill glass-ring inline-flex size-9 items-center justify-center rounded-full text-body-strong transition-colors hover:text-heading"
        >
          <ChevronRight className="size-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => setPaused((current) => !current)}
          aria-label={paused ? t('heroSlider.play') : t('heroSlider.pause')}
          className="glass-pill glass-ring inline-flex size-9 items-center justify-center rounded-full text-body-strong transition-colors hover:text-heading"
        >
          {paused ? (
            <Play className="size-3.5" aria-hidden />
          ) : (
            <Pause className="size-3.5" aria-hidden />
          )}
        </button>

        <div className="ml-auto flex items-center gap-1.5">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => go(i)}
              aria-label={t('heroSlider.goTo', { n: String(i + 1) })}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-accent' : 'w-1.5 bg-line hover:bg-body-soft'
              }`}
            />
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {t('heroSlider.slideOf', { current: String(index + 1), total: String(SLIDES.length) })}
      </p>
    </div>
  );
}
