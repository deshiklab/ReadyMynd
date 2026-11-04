import type { Metadata } from 'next';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { CheckList } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { advisoryAreas, advisoryPrinciples } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Digital Advisory Services',
  description:
    'Independent, vendor-neutral post-assessment advisory across three technical areas: data advisory, digital systems advisory and system integration advisory.',
  alternates: { canonical: '/digital-advisory-services/' },
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="05 — Digital Advisory Services"
        title="From Identified Digital Gaps to Focused Technical Improvements"
        intro="ReadyMynd’s Digital Advisory Services help factories examine and plan technical improvements arising from a completed Textile DPP Digital Readiness Assessment."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Digital Advisory Services' }]}
        image="/images/pages/advisory.jpeg"
        imageAlt="Digital advisory session with factory management"
        meta={[
          { label: '3 areas' },
          { label: '5 principles' },
          { label: 'Vendor-neutral' },
          { label: 'Separate engagement' },
        ]}
        actions={[
          { href: '/contact/', label: 'Contact ReadyMynd' },
          { href: '/contact/?purpose=brochure#assessment-enquiry', label: 'Download Service Brochure', variant: 'outlineLight' },
        ]}
      />

      {/* ------------------------------------------------------------- 5.1 */}
      <Section id="overview" tone="light" grid>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="5.1 — Digital Advisory Following the Assessment"
              title="Advisory Starts Where the Assessment Ends"
            />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-mist-700">
              <p>
                ReadyMynd&apos;s Digital Advisory Services help factories examine and plan technical
                improvements arising from a completed Textile DPP Digital Readiness Assessment.
              </p>
              <p>
                Advisory is available only after the factory has purchased and completed ReadyMynd&apos;s
                paid assessment. It is optional and separately contracted.
              </p>
              <p>
                Each engagement is based on identified digital gaps, agreed technical priorities and the
                factory&apos;s existing technology environment.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pt-6">
            <Notice title="Prerequisite">
              <p>
                A completed paid ReadyMynd Textile DPP Digital Readiness Assessment is required before
                advisory work can begin.
              </p>
            </Notice>
            <div className="mt-6 rounded-2xl border border-mist-200 bg-mist-50 p-6">
              <Eyebrow>Why we work this way</Eyebrow>
              <p className="mt-3 text-sm leading-relaxed text-mist-700">
                Advisory built on documented findings is faster, cheaper and far more specific than
                advisory built on assumption. The assessment is what makes the advice worth paying for.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 5.2 */}
      <Section id="advisory-areas" tone="mist">
        <SectionHeading
          align="center"
          eyebrow="5.2 — Our Three Technical Advisory Areas"
          title="Focused on Data, Digital Systems and System Integration"
          intro="Advisory work concentrates on three technical areas where assessment findings most often translate into action."
        />

        <div className="mt-14 space-y-6">
          {advisoryAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 80}
              className="overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-soft"
            >
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-ink-900 font-display text-sm font-bold text-white">
                      {area.index}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-ink-900">{area.title}</h3>
                  </div>
                  <p className="mt-4 font-display text-base font-medium text-brand-600">
                    {area.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist-700">{area.body}</p>
                </div>
                <div className="lg:border-l lg:border-mist-200 lg:pl-10">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-mist-500">
                    Typical focus
                  </p>
                  <div className="mt-4">
                    <CheckList items={area.points} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------- 5.3 */}
      <Section id="principles" tone="ink">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              tone="light"
              eyebrow="5.3 — Advisory Scope & Engagement Principles"
              title="Independent Technical Advice Based on Assessment Findings"
            />
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-relaxed text-mist-300">
                ReadyMynd provides independent technical advice rather than acting as a software vendor
                or implementation contractor.
              </p>
            </Reveal>
          </div>

          <div>
            <ol className="space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {advisoryPrinciples.map((principle, i) => (
                <li key={principle.title} className="bg-ink-900">
                  <Reveal delay={i * 60} className="flex flex-col gap-2 p-6 sm:flex-row sm:gap-8 sm:p-7">
                    <span className="font-display text-2xl font-bold text-white/20 sm:w-10 sm:shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{principle.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal delay={140} className="mt-6">
              <Notice tone="ink" title="Outside advisory scope">
                <p>
                  Digital Advisory Services do not include business process redesign, factory
                  operational management, software development, software deployment or system
                  implementation.
                </p>
              </Notice>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Talk to us"
        title="Independent Advice, Grounded in Your Own Assessment Data."
        intro="If you have completed a ReadyMynd assessment, contact us to discuss a separately scoped advisory engagement."
        primary={{ href: '/contact/', label: 'Contact ReadyMynd' }}
        note="Advisory deliverables, duration and commercial terms are agreed independently of the assessment."
      />

      <BrochureCta />
    </>
  );
}
