'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { asset } from '@/lib/site';
import { HERO_SLIDES } from '@/lib/hero-slides';

/** 1280x720 twin of each slide, generated alongside the 2560x1440 master. */
const small = (image: string) => image.replace(/\.jpeg$/, '-1280.jpeg');

const INTERVAL_MS = 6000;

export function HeroSlider({ initialSlide = 0 }: { initialSlide?: number } = {}) {
  const { t } = useI18n();
  const [index, setIndex] = useState(initialSlide);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  /** Only slides that have been shown get their image mounted, so the hero
   *  costs one request on first paint instead of all eight. Inner pages open
   *  on their own slide, so that one is the eager one. */
  const [visited, setVisited] = useState<number[]>([initialSlide]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const go = useCallback((next: number) => {
    setIndex(((next % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    setVisited((seen) => (seen.includes(index) ? seen : [...seen, index]));
  }, [index]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const active = HERO_SLIDES[index];

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
      {/*
       * Fullscreen stage. It starts at the very top of the document so the
       * fixed header floats directly over it, with no gap between the menu
       * and the image. svh keeps it honest on mobile, where a 100vh hero
       * would slide under the browser chrome.
       */}
      <div className="relative h-screen [height:100svh] min-h-[34rem] overflow-hidden bg-surface-muted">
        {HERO_SLIDES.map((slide, i) => {
          const shown = visited.includes(i);
          return (
            <div
              key={slide.id}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              {shown && (
                <>
                  {/*
                   * Ambient fill. Always the small file: it is blurred and
                   * scaled past the point where extra pixels show, so there
                   * is no reason to spend the bandwidth on it.
                   */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(small(slide.image))}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 size-full scale-110 object-cover opacity-40 blur-2xl"
                    loading={i === initialSlide ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  {/* The infographic itself, shown whole. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(slide.image)}
                    srcSet={`${asset(small(slide.image))} 1280w, ${asset(slide.image)} 2560w`}
                    sizes="100vw"
                    alt={t(`heroSlider.slides.${slide.id}.alt`)}
                    className="absolute inset-0 size-full object-contain"
                    loading={i === initialSlide ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </>
              )}
            </div>
          );
        })}

        {/*
         * Scrims. The header is translucent glass, so a gradient from the
         * surface colour sits behind it to keep the nav legible whatever the
         * slide behind happens to be doing. The same trick carries the
         * caption at the foot. Using the theme surface rather than black
         * keeps this working in both light and dark.
         */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface via-surface/75 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-surface via-surface/85 to-transparent"
        />

        {/* Caption and controls, pinned to the foot and on the page grid. */}
        <div className="absolute inset-x-0 bottom-0 pb-10 sm:pb-12 lg:pb-14">
          <div className="container-page">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
                  {t(`heroSlider.slides.${active.id}.eyebrow`)}
                </p>
                <p className="mt-1.5 font-display text-lg font-semibold leading-snug text-heading sm:text-xl">
                  {t(`heroSlider.slides.${active.id}.title`)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
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

              <div className="flex items-center gap-2">
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

                <div className="ml-2 flex items-center gap-1.5">
                  {HERO_SLIDES.map((slide, i) => (
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
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {t('heroSlider.slideOf', {
          current: String(index + 1),
          total: String(HERO_SLIDES.length),
        })}
      </p>
    </div>
  );
}
