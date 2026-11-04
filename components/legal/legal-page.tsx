import { FileText } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'note'; text: string };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export function LegalPage({
  title,
  intro,
  crumb,
  sections,
}: {
  title: string;
  intro: string;
  crumb: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={intro} crumbs={[{ label: 'Home', href: '/' }, { label: crumb }]} />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          {/* Contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="On this page" className="rounded-2xl border border-mist-200 bg-mist-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-mist-500">
                On this page
              </p>
              <ol className="mt-4 space-y-2 text-sm">
                {sections.map((section, i) => (
                  <li key={section.heading}>
                    <a
                      href={`#section-${i + 1}`}
                      className="flex gap-2 text-mist-700 transition-colors hover:text-brand-600"
                    >
                      <span className="font-mono text-xs text-mist-400">
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
              <p className="text-sm leading-relaxed text-mist-700">
                This page forms part of the ReadyMynd Supporting Legal Pages v1.8 working draft.
                Effective dates and certain operational details remain to be confirmed following legal
                review. The latest version will always be published here.
              </p>
            </Reveal>

            <div className="space-y-12">
              {sections.map((section, i) => (
                <Reveal
                  key={section.heading}
                  delay={i * 30}
                  as="section"
                  id={`section-${i + 1}`}
                  className="scroll-mt-28"
                >
                  <h2 className="flex items-baseline gap-3 text-2xl font-bold text-ink-900">
                    <span className="font-mono text-sm font-normal text-mist-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.heading}
                  </h2>

                  <div className="mt-4 space-y-4">
                    {section.blocks.map((block, j) => {
                      if (block.type === 'paragraph') {
                        return (
                          <p key={j} className="text-base leading-relaxed text-mist-700">
                            {block.text}
                          </p>
                        );
                      }
                      if (block.type === 'list') {
                        const Tag = block.ordered ? 'ol' : 'ul';
                        return (
                          <Tag
                            key={j}
                            className={`space-y-2 pl-1 text-base leading-relaxed text-mist-700 ${
                              block.ordered ? 'list-decimal' : 'list-disc'
                            } marker:text-brand-500 ml-5`}
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
                          className="border-l-2 border-brand-500 bg-mist-50 py-3 pl-4 pr-4 text-sm leading-relaxed text-mist-700"
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
