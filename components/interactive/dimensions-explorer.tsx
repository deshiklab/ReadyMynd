'use client';

import { useRef, useState } from 'react';
import { dimensions } from '@/lib/content';
import { useI18n } from '@/lib/i18n';

export function DimensionsExplorer({ tone = 'light' }: { tone?: 'light' | 'mist' | 'ink' }) {
  const { t, tx } = useI18n();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = dimensions[active];

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = dimensions.length - 1;
    let next = active;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = active === last ? 0 : active + 1;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = active === 0 ? last : active - 1;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = last;
    else return;

    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const ink = tone === 'ink';

  return (
    <div>
      <div
        role="tablist"
        aria-label={t('dimensions.title')}
        onKeyDown={onKeyDown}
        className={`flex flex-wrap gap-2 ${ink ? '' : ''}`}
      >
        {dimensions.map((dimension, index) => {
          const selected = index === active;
          return (
            <button
              key={dimension.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              id={`dimension-tab-${dimension.id}`}
              aria-selected={selected}
              aria-controls={`dimension-panel-${dimension.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`rounded-full border px-4 py-2 text-[0.8125rem] font-semibold transition-all ${
                selected
                  ? ink
                    ? 'border-brand-400 bg-brand-500 text-white'
                    : 'border-brand-500 bg-brand-500 text-white shadow-[0_8px_24px_-10px_rgba(229,62,62,0.8)]'
                  : ink
                    ? 'border-white/15 bg-white/5 text-onink hover:border-white/30 hover:text-white'
                    : 'border-line bg-surface-raised text-body-strong hover:border-accent-line hover:text-heading'
              }`}
            >
              <span className="mr-2 font-display text-xs opacity-70">{dimension.index}</span>
              {tx(dimension.title)}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`dimension-panel-${current.id}`}
        aria-labelledby={`dimension-tab-${current.id}`}
        tabIndex={0}
        className={`mt-6 rounded-2xl border p-6 sm:p-8 ${
          ink
            ? 'border-white/10 bg-white/[0.04]'
            : tone === 'mist'
              ? 'border-line bg-surface-raised'
              : 'border-line bg-surface-muted'
        }`}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p
              className={`font-display text-xs font-bold uppercase tracking-[0.16em] ${ink ? 'text-brand-400' : 'text-accent'}`}
            >
              {t('dimensions.dimensionLabel')} {current.index}
            </p>
            <h3 className={`mt-3 text-2xl font-bold ${ink ? 'text-white' : 'text-heading'}`}>
              {tx(current.title)}
            </h3>
            <p className={`mt-3 text-base leading-relaxed ${ink ? 'text-onink' : 'text-body-strong'}`}>
              {tx(current.summary)}
            </p>
            <p className={`mt-4 text-sm leading-relaxed ${ink ? 'text-onink-soft' : 'text-body'}`}>
              {tx(current.detail)}
            </p>
          </div>

          <div>
            <p
              className={`text-xs font-bold uppercase tracking-[0.16em] ${ink ? 'text-onink-soft' : 'text-body-soft'}`}
            >
              {t('dimensions.whatWeExamine')}
            </p>
            <ul className="mt-4 space-y-3">
              {current.examines.map((item) => (
                <li key={tx(item)} className="flex gap-3">
                  <span
                    className={`mt-1.5 size-1.5 shrink-0 rounded-full ${ink ? 'bg-brand-400' : 'bg-brand-500'}`}
                  />
                  <span className={`text-sm leading-relaxed ${ink ? 'text-onink' : 'text-body-strong'}`}>
                    {tx(item)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
