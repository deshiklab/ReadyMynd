import type { Metadata } from 'next';
import { Clock3, FileCheck2, Target } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { CheckList } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { evidenceSources, processSteps } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Assessment Methodology & Process',
  description:
    'ReadyMynd’s five-step assessment process, the evidence used to evaluate digital readiness, and the scope, timeline and responsibilities of a One Product. One Factory. engagement.',
  alternates: { canonical: '/assessment-methodology/' },
};

const readyMyndResponsibilities = [
  'Confirm assessment scope and applicable functions.',
  'Conduct the structured assessment.',
  'Evaluate available information and evidence.',
  'Interpret findings and improvement priorities.',
  'Deliver and review the assessment report.',
];

const factoryResponsibilities = [
  'Nominate management and departmental contacts.',
  'Provide relevant information and supporting records.',
  'Facilitate discussions with applicable personnel.',
  'Clarify responsibilities and information inconsistencies.',
  'Review the findings with ReadyMynd.',
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="04 — Assessment Methodology & Process"
        title="Software-Enabled Execution with Professional Evaluation"
        intro="Five structured steps, an evidence-based evaluation approach, and clearly defined responsibilities on both sides — designed to keep disruption to factory operations minimal."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Assessment Methodology & Process' }]}
        image="/images/pages/methodology.jpeg"
        imageAlt="Assessment process review session"
        meta={[
          { label: '5 steps' },
          { label: '8 evidence types' },
          { label: '10–15 days' },
          { label: '1 factory' },
        ]}
        actions={[
          { href: '/contact/#assessment-enquiry', label: 'Request an Assessment' },
          { href: '/contact/?purpose=brochure#assessment-enquiry', label: 'Download Service Brochure', variant: 'outlineLight' },
        ]}
      />

      {/* ------------------------------------------------------------- 4.1 */}
      <Section id="five-steps" tone="light" grid>
        <SectionHeading
          eyebrow="4.1 — Our Five-Step Assessment Process"
          title="From Agreed Scope to a Proposed 90-Day Plan"
          intro="ReadyMynd follows five structured steps to assess existing digital capabilities and prepare management-oriented findings."
        />

        <ol className="mt-14 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <li key={step.index} className="relative">
              <Reveal delay={i * 70} className="h-full">
                <div className="relative h-full rounded-2xl border border-mist-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-lift">
                  <span className="font-display text-4xl font-bold text-brand-100">{step.index}</span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-600">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-mist-700">
            The process combines consistent assessment execution with professional judgment — software
            handles structure and scoring, our Enterprise Analysts handle interpretation.
          </p>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------------- 4.2 */}
      <Section id="evidence" tone="ink">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="4.2 — Evidence-Based Evaluation Approach"
              title="Findings Supported by Available Factory Information"
            />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-mist-300">
              <p>
                ReadyMynd evaluates information provided by the factory and the supporting evidence
                available within the agreed scope.
              </p>
              <p>
                Analysts examine information availability, consistency, accessibility, reliability and
                relevant controls. Evidence limitations are reflected in the assessment findings.
              </p>
            </Reveal>
            <Reveal delay={140} className="mt-8">
              <Notice tone="ink" title="Interpretation, not blanket verification">
                <p>
                  Software-supported results are interpreted in context; the assessment does not
                  independently verify every factory record.
                </p>
              </Notice>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <Eyebrow tone="light">Relevant sources may include</Eyebrow>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {evidenceSources.map((source, i) => (
                  <div
                    key={source}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="font-display text-xs font-bold text-brand-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-relaxed text-mist-200">{source}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 4.3 */}
      <Section id="scope-responsibilities" tone="mist">
        <SectionHeading
          eyebrow="4.3 — Scope, Timeline & Responsibilities"
          title="One Product. One Factory. Clearly Defined Responsibilities."
          intro="Each engagement covers one representative product and one physical factory. Assessment coverage is tailored to the relevant departments and information environment."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Reveal className="rounded-2xl border border-mist-200 bg-white p-6 sm:p-7">
            <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Target className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">Scope</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-600">
              One representative product, one physical factory, and the departments and information
              sources relevant to them.
            </p>
          </Reveal>

          <Reveal delay={70} className="rounded-2xl border border-mist-200 bg-white p-6 sm:p-7">
            <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Clock3 className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">Timeline</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-600">
              The indicative duration is 10–15 working days, depending on factory complexity, agreed
              scope and information availability.
            </p>
          </Reveal>

          <Reveal delay={140} className="rounded-2xl border border-mist-200 bg-white p-6 sm:p-7">
            <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <FileCheck2 className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">Delivery</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-600">
              Structured report delivery and a review discussion with factory management.
            </p>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-ink-800/10 bg-white p-6 shadow-soft sm:p-8">
            <Eyebrow>ReadyMynd’s responsibilities</Eyebrow>
            <div className="mt-5">
              <CheckList items={readyMyndResponsibilities} />
            </div>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-mist-200 bg-mist-50 p-6 sm:p-8">
            <Eyebrow>Factory’s responsibilities</Eyebrow>
            <div className="mt-5">
              <CheckList items={factoryResponsibilities} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-8">
          <Notice title="What delivery does and does not include">
            <p>
              Information is handled under agreed confidentiality arrangements. Assessment delivery
              does not include system implementation or operational management.
            </p>
          </Notice>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Request an assessment"
        title="A Defined Scope Beats an Open-Ended Project."
        intro="One product, one factory, ten to fifteen working days. Contact ReadyMynd to discuss a structured assessment for your facility."
        primary={{ href: '/contact/#assessment-enquiry', label: 'Request an Assessment' }}
      />

      <BrochureCta />
    </>
  );
}
