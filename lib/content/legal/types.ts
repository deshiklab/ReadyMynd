import type { Bi } from '@/lib/content';

export type LegalBlock =
  | { type: 'paragraph'; text: Bi }
  | { type: 'list'; items: Bi[]; ordered?: boolean }
  | { type: 'note'; text: Bi };

export type LegalSection = {
  heading: Bi;
  blocks: LegalBlock[];
};

/** Shorthand builders that keep the clause files readable. */
export const bi = (en: string, bn: string): Bi => ({ en, bn });
export const p = (en: string, bn: string): LegalBlock => ({ type: 'paragraph', text: bi(en, bn) });
export const note = (en: string, bn: string): LegalBlock => ({ type: 'note', text: bi(en, bn) });
export const list = (items: Bi[], ordered?: boolean): LegalBlock => ({ type: 'list', items, ordered });
