import type { ReactNode } from 'react';
import { Reveal } from './reveal';

type Tone = 'light' | 'mist' | 'ink';

const tones: Record<Tone, string> = {
  light: 'bg-surface text-body',
  mist: 'bg-surface-muted text-body',
  ink: 'section-ink',
};

export function Section({
  children,
  tone = 'light',
  id,
  className = '',
  grid = false,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  grid?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-28 py-20 sm:py-24 lg:py-28 ${tones[tone]} ${className}`}
    >
      {grid && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 -z-10 ${tone === 'ink' ? 'grid-veil' : 'grid-veil-light'} [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]`}
        />
      )}
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = 'dark',
  className = '',
}: {
  children: ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const styles =
    tone === 'dark'
      ? 'text-accent before:bg-brand-500'
      : 'text-brand-300 before:bg-brand-400';
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.18em] before:h-px before:w-8 before:content-[''] ${styles} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  className = '',
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
  children?: ReactNode;
}) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : '';
  const titleCls = tone === 'dark' ? 'text-heading' : 'text-white';
  const introCls = tone === 'dark' ? 'text-body' : 'text-onink';

  return (
    <Reveal className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <Eyebrow tone={tone} className={align === 'center' ? 'justify-center' : ''}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={`mt-4 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${titleCls}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${introCls}`}>{intro}</p>}
      {children}
    </Reveal>
  );
}

export function Lead({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <p className={`text-lg leading-relaxed ${tone === 'dark' ? 'text-body-strong' : 'text-onink'}`}>
      {children}
    </p>
  );
}
