import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { ButtonLink } from '@/components/ui/button';
import { Card, CardBody, CardTitle, StepBadge } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeading } from '@/components/ui/section';
import { DimensionsExplorer } from '@/components/interactive/dimensions-explorer';
import { assessmentBenefits, reportOutputs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Textile DPP Digital Readiness Assessment',
  description:
    'A structured evaluation of your factory’s digital capabilities across five dimensions — manual data, digital data, integration, validation and governance — with seven management-ready report outputs and a proposed 90-day action plan.',
  alternates: { canonical: '/textile-dpp-digital-readiness-assessment/' },
};

export default function ReadinessAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="03 — Textile DPP Digital Readiness Assessment"
        title="A Structured Evaluation of Your Factory’s Digital Capabilities"
        intro="The assessment examines how a factory maintains, manages, validates and exchanges product information across relevant functions — using ReadyMynd’s assessment software and professional enterprise analysis."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Textile DPP Digital Readiness Assessment' }]}
        image="/images/pages/assessment.jpeg"
        imageAlt="Assessment framework review in progress"
        meta={[
          { label: '5 dimensions' },
          { label: '7 outputs' },
          { label: '10–15 days' },
          { label: '1 product' },
        ]}
        actions={[
          { href: '/contact/#assessment-enquiry', label: 'Request an Assessment' },
          { href: '/contact/?purpose=brochure#assessment-enquiry', label: 'Download Service Brochure', variant: 'outlineLight' },
        ]}
      />

      {/* ------------------------------------------------------------- 3.1 */}
      <Section id="overview" tone="light" grid>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="3.1 — Assessment Overview & Coverage"
              title="Software-Enabled Execution, Analyst-Led Interpretation"
            />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-mist-700">
              <p>
                ReadyMynd&apos;s Textile DPP Digital Readiness Assessment examines how a factory
                maintains, manages, validates and exchanges product information across relevant
                functions.
              </p>
              <p>
                The assessment uses ReadyMynd&apos;s developed software to support questionnaires,
                scoring, gap analysis and report generation. Enterprise Analysts review the available
                evidence, interpret findings and determine recommendations.
              </p>
              <p>
                Assessment coverage is tailored to the selected factory&apos;s activities, relevant
                departments and product-information environment.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl ring-1 ring-mist-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/generated/dimensions.jpg"
                alt="Abstract illustration of layered digital readiness dimensions"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="The framework"
            title="Five Dimensions of Digital Readiness"
            intro="Select a dimension to see what it covers and what our analysts examine within it."
          />
          <Reveal delay={80} className="mt-10">
            <DimensionsExplorer />
          </Reveal>
          <Reveal delay={120}>
            <Notice title="How to read the framework" tone="amber">
              <p>
                Traceability is examined across applicable functions and dimensions rather than treated
                as a separate assessment dimension.
              </p>
              <p>
                These dimensions form ReadyMynd&apos;s professional assessment framework. They are not
                official EU regulatory assessment categories.
              </p>
            </Notice>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 3.2 */}
      <Section id="benefits" tone="mist">
        <SectionHeading
          eyebrow="3.2 — Business Benefits for Factory Management"
          title="Make Better Decisions with a Clearer View of Existing Capabilities"
          intro="The assessment helps factory management identify digital improvement opportunities before committing to new systems or technology investments."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {assessmentBenefits.map((benefit, i) => (
            <Card key={benefit.title} delay={i * 50}>
              <StepBadge>{String(i + 1).padStart(2, '0')}</StepBadge>
              <CardTitle className="mt-4">{benefit.title}</CardTitle>
              <CardBody>{benefit.body}</CardBody>
            </Card>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-xl font-semibold text-ink-900">
            The business value lies in better-informed decisions, not simply obtaining an assessment
            score.
          </p>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------------- 3.3 */}
      <Section id="deliverables" tone="light">
        <SectionHeading
          eyebrow="3.3 — Assessment Report & Deliverables"
          title="Management-Ready Findings and a Practical Improvement Plan"
          intro="ReadyMynd delivers a Textile DPP Digital Readiness Assessment Report containing seven principal outputs."
        />

        <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-mist-200 bg-mist-200">
          {reportOutputs.map((output, i) => (
            <li key={output.title} className="bg-white">
              <Reveal delay={i * 45} className="flex flex-col gap-2 p-6 transition-colors hover:bg-mist-50 sm:flex-row sm:items-start sm:gap-8 sm:p-7">
                <span className="font-display text-2xl font-bold text-mist-300 sm:w-12 sm:shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-ink-900">{output.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist-600">{output.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={80}>
            <Notice title="Scope and limits of the report">
              <p>
                The assessment is not a regulatory audit, DPP compliance certification or product
                endorsement. It does not guarantee future compliance or buyer acceptance.
              </p>
            </Notice>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-mist-200 bg-mist-50 p-6">
            <h3 className="font-display text-base font-semibold text-ink-900">Report ownership</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-600">
              The factory owns the delivered report under the agreed engagement terms.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-10">
          <ButtonLink href="/assessment-methodology/" variant="ink">
            See how the assessment is executed
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Request an assessment"
        title="One Product. One Factory. A Clear Answer."
        intro="Submit an enquiry and our team will review your factory setup and respond regarding the proposed engagement."
        primary={{ href: '/contact/#assessment-enquiry', label: 'Request an Assessment' }}
        note="Scope, commercial terms and timelines are confirmed before any engagement begins."
      />

      <BrochureCta />
    </>
  );
}
