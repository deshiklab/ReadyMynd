import { asset } from '@/lib/site';

/**
 * The fixed hero banner used on every page except the home page, which
 * runs the full-screen slider instead.
 *
 * Deliberately shorter than a full screen: an inner page is somewhere
 * people arrive with a task, and making them scroll a whole viewport to
 * reach the title works against that.
 *
 * The artwork fills the frame rather than being letterboxed. The banner is
 * a wide strip, so fitting the whole image would leave large empty bands
 * either side; `object-center` keeps the focal middle band. The home slider
 * keeps the whole-image treatment, since its frame is tall enough for it.
 */
export function HeroBanner({ image, imageAlt = '' }: { image: string; imageAlt?: string }) {
  const small = image.replace(/\.jpeg$|\.jpg$/, '-1280.jpeg');

  return (
    <div className="relative h-[20rem] overflow-hidden bg-surface-muted sm:h-[24rem] lg:h-[32rem]">
      {/* Fills the frame edge to edge — no letterbox bands down the sides. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(image)}
        srcSet={`${asset(small)} 1280w, ${asset(image)} 2560w`}
        sizes="100vw"
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover object-center"
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
    </div>
  );
}
