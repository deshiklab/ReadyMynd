import type { ReactNode } from 'react';

/**
 * Boundary / disclaimer callout. ReadyMynd's content is explicit about what the
 * service is not, so every page that describes deliverables carries one.
 */
export function Notice({
  title = 'Important boundary',
  children,
  tone = 'amber',
}: {
  title?: string;
  children: ReactNode;
  tone?: 'amber' | 'ink';
}) {
  const shell =
    tone === 'amber'
      ? 'border-signal-500/30 bg-signal-500/[0.07]'
      : 'border-ink-600/40 bg-white/[0.04]';
  const titleCls = tone === 'amber' ? 'text-ink-900' : 'text-white';
  const bodyCls = tone === 'amber' ? 'text-mist-700' : 'text-mist-300';

  return (
    <aside className={`rounded-2xl border p-5 sm:p-6 ${shell}`}>
      <h3 className={`font-display text-sm font-bold uppercase tracking-wide ${titleCls}`}>
        {title}
      </h3>
      <div className={`mt-2 space-y-2 text-sm leading-relaxed ${bodyCls}`}>{children}</div>
    </aside>
  );
}
