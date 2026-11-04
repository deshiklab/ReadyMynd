'use client';

import { FileText, Languages } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { useI18n } from '@/lib/i18n';

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'note'; text: string };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export function LegalPage({
  kind,
  sections,
}: {
  kind: 'privacy' | 'cookies' | 'terms';
  sections: LegalSection[];
}) {
  const { t, locale } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t('shared.eyebrow')}
        title={t(`${kind}.title`)}
        intro={t(`${kind}.intro`)}
        crumbs={[{ label: t('nav.home'), href: '/' }, { label: t(`${kind}.title`) }]}
      />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          {/* Contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav
              aria-label={t('shared.contentsLabel')}
              className="rounded-2xl border border-line bg-surface-muted p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-body-soft">
                {t('shared.contentsLabel')}
              </p>
              <ol className="mt-4 space-y-2 text-sm">
                {sections.map((section, i) => (
                  <li key={section.heading}>
                    <a
                      href={`#section-${i + 1}`}
                      className="flex gap-2 text-body transition-colors hover:text-accent"
                    >
                      <span className="font-mono text-xs text-body-soft">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Body */}
          <div className="max-w-3xl">
            <Reveal className="mb-10 flex items-start gap-3 rounded-2xl border border-signal-500/30 bg-signal-500/[0.07] p-5">
              <FileText className="mt-0.5 size-5 shrink-0 text-signal-500" aria-hidden />
              <p className="text-sm leading-relaxed text-body">{t('shared.draftBanner')}</p>
            </Reveal>

            {locale === 'bn' && (
              <Reveal className="mb-10 flex items-start gap-3 rounded-2xl border border-line bg-surface-muted p-5">
                <Languages className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-heading">{t('englishOnly.title')}</p>
                  <p className="mt-1 text-sm leading-relaxed text-body">{t('englishOnly.body')}</p>
                </div>
              </Reveal>
            )}

            <div className="space-y-12">
              {sections.map((section, i) => (
                <Reveal
                  key={section.heading}
                  delay={i * 30}
                  as="section"
                  id={`section-${i + 1}`}
                  className="scroll-mt-28"
                >
                  <h2 className="flex items-baseline gap-3 text-2xl font-bold text-heading">
                    <span className="font-mono text-sm font-normal text-body-soft">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span lang="en">{section.heading}</span>
                  </h2>

                  <div className="mt-4 space-y-4">
                    {section.blocks.map((block, j) => {
                      if (block.type === 'paragraph') {
                        return (
                          <p key={j} lang="en" className="text-base leading-relaxed text-body">
                            {block.text}
                          </p>
                        );
                      }
                      if (block.type === 'list') {
                        const Tag = block.ordered ? 'ol' : 'ul';
                        return (
                          <Tag
                            key={j}
                            lang="en"
                            className={`ml-5 space-y-2 pl-1 text-base leading-relaxed text-body marker:text-brand-500 ${
                              block.ordered ? 'list-decimal' : 'list-disc'
                            }`}
                          >
                            {block.items.map((item) => (
                              <li key={item} className="pl-1">
                                {item}
                              </li>
                            ))}
                          </Tag>
                        );
                      }
                      return (
                        <p
                          key={j}
                          lang="en"
                          className="border-l-2 border-brand-500 bg-surface-muted py-3 pl-4 pr-4 text-sm leading-relaxed text-body"
                        >
                          {block.text}
                        </p>
                      );
                    })}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
