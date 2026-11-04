import type { ReactNode } from 'react';
import { Reveal } from './reveal';

export function Card({
  children,
  className = '',
  delay = 0,
  interactive = true,
  tone = 'light',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  interactive?: boolean;
  tone?: 'light' | 'ink';
}) {
  const shell =
    tone === 'ink'
      ? 'border-white/10 bg-white/[0.04] backdrop-blur-sm'
      : 'border-mist-200 bg-white';
  const hover =
    tone === 'ink'
      ? 'hover:border-brand-400/50 hover:bg-white/[0.07]'
      : 'hover:border-brand-200 hover:shadow-lift';

  return (
    <Reveal
      delay={delay}
      className={`group rounded-2xl border p-6 shadow-soft transition-all duration-300 sm:p-7 ${shell} ${interactive ? hover : ''} ${className}`}
    >
      {children}
    </Reveal>
  );
}

export function CardTitle({
  children,
  tone = 'light',
  className = '',
}: {
  children: ReactNode;
  tone?: 'light' | 'ink';
  className?: string;
}) {
  return (
    <h3
      className={`text-lg font-semibold tracking-tight ${tone === 'light' ? 'text-ink-900' : 'text-white'} ${className}`}
    >
      {children}
    </h3>
  );
}

export function CardBody({
  children,
  tone = 'light',
  className = '',
}: {
  children: ReactNode;
  tone?: 'light' | 'ink';
  className?: string;
}) {
  return (
    <p
      className={`mt-3 text-[0.9375rem] leading-relaxed ${tone === 'light' ? 'text-mist-600' : 'text-mist-300'} ${className}`}
    >
      {children}
    </p>
  );
}

/** Numbered / lettered badge used across framework cards. */
export function StepBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 font-display text-sm font-bold text-brand-600 ring-1 ring-brand-100">
      {children}
    </span>
  );
}

export function CheckList({
  items,
  tone = 'light',
  className = '',
}: {
  items: ReactNode[];
  tone?: 'light' | 'ink';
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className={`mt-1 size-4 shrink-0 ${tone === 'light' ? 'text-brand-500' : 'text-brand-400'}`}
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className={`text-[0.9375rem] leading-relaxed ${tone === 'light' ? 'text-mist-700' : 'text-mist-300'}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
