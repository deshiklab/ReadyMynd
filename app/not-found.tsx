import { ButtonLink } from '@/components/ui/button';
import { mainNav } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="section-ink flex min-h-[70vh] items-center overflow-hidden pb-24 pt-36">
      <div aria-hidden className="grid-veil absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div aria-hidden className="absolute left-1/2 top-1/3 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[110px]" />

      <div className="container-page text-center">
        <p className="font-display text-7xl font-bold text-white/15">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">This page could not be found</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist-400">
          The page you were looking for may have moved. Use the links below to continue.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {mainNav.slice(0, 5).map((item) => (
            <ButtonLink key={item.href} href={item.href} variant="outlineLight" size="sm">
              {item.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
