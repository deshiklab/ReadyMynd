import { asset } from '@/lib/site';

/**
 * The fixed hero banner used on every page except the home page, which
 * runs the full-screen slider instead.
 *
 * Deliberately shorter than a full screen: an inner page is somewhere
 * people arrive with a task, and making them scroll a whole viewport to
 * reach the title works against that.
 *
 * The artwork is drawn whole over a blurred copy of itself rather than
 * cropped to fill — the same rule as the slider, since these carry
 * infographics that lose meaning if the edges are cut away.
 */
export function HeroBanner({
  image,
  imageAlt = '',
  eyebrow,
}: {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
}) {
  const small = image.replace(/\.jpeg$|\.jpg$/, '-1280.jpeg');

  return (
    <div className="relative h-[20rem] overflow-hidden bg-surface-muted sm:h-[24rem] lg:h-[32rem]">
      {/* Ambient fill — blurred, so cropping it costs nothing. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(small)}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full scale-110 object-cover opacity-40 blur-2xl"
        loading="eager"
        decoding="async"
      />
      {/* The artwork itself, shown whole. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(image)}
        srcSet={`${asset(small)} 1280w, ${asset(image)} 2560w`}
        sizes="100vw"
        alt={imageAlt}
        className="absolute inset-0 size-full object-contain"
        loading="eager"
        decoding="async"
      />

      {/*
       * Scrims. The header is translucent glass, so it needs something
       * behind it to stay legible. Using the theme surface rather than
       * black keeps this working in light and dark.
       */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface via-surface/75 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent"
      />

      {eyebrow && (
        <div className="absolute inset-x-0 bottom-0 pb-6">
          <div className="container-page">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
              {eyebrow}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
