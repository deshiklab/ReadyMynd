'use client';

import { Button } from '@/components/ui/button';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="section-ink flex min-h-[70vh] items-center overflow-hidden pb-24 pt-36">
      <div aria-hidden className="grid-veil absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container-page text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist-400">
          An unexpected error occurred while loading this page. Please try again.
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <Button onClick={reset} variant="primary" size="lg">
            Try again
          </Button>
          <Button variant="outlineLight" size="lg" onClick={() => (window.location.href = '/')}>
            Return home
          </Button>
        </div>
      </div>
    </section>
  );
}
