import Link from 'next/link';
import { ArrowRight, Download, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { Card, CardBody, CardTitle, StepBadge } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { DimensionsExplorer } from '@/components/interactive/dimensions-explorer';
import { dimensions, factoryTypes, processSteps } from '@/lib/content';
import { brochureCta } from '@/lib/site';

const heroStats = [
  { value: '5', label: 'Readiness dimensions' },
  { value: '7', label: 'Report outputs' },
  { value: '10–15', label: 'Working days' },
  { value: '1:1', label: 'Product to factory' },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="section-ink overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44">
        <div aria-hidden className="grid-veil absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div aria-hidden className="absolute -top-48 left-1/2 -z-10 size-[46rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[130px]" />
        <div aria-hidden className="absolute -right-24 top-40 -z-10 size-[26rem] rounded-full bg-brand-700/20 blur-[100px]" />

        <div className="container-page">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-mist-300 backdrop-blur">
                  <Sparkles className="size-3.5 text-brand-400" aria-hidden />
                  Textile DPP Digital Readiness for Bangladesh Factories
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-7 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.75rem]">
                  Know Your Digital Readiness
                  <span className="mt-2 block bg-gradient-to-r from-white via-white to-brand-300 bg-clip-text text-transparent">
                    Before Deciding What Comes Next.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist-300">
                  ReadyMynd is a Bangladesh-based professional service initiative helping textile and
                  apparel manufacturers understand their digital readiness for emerging EU Textile
                  Digital Product Passport (DPP) expectations.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist-400">
                  We combine locally developed assessment software with professional enterprise
                  analysis to examine existing capabilities, identify digital gaps and recommend
                  practical improvement priorities.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <p className="mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-brand-400/30 bg-brand-500/10 px-4 py-2.5 font-display text-sm font-semibold tracking-tight text-white">
                  <ShieldCheck className="size-4 text-brand-300" aria-hidden />
                  Software-Enabled. Analyst-Led. Evidence-Based.
                </p>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/textile-dpp-digital-readiness-assessment/" size="lg">
                    Explore Digital Readiness Assessment
                    <ArrowRight className="size-4" aria-hidden />
                  </ButtonLink>
                  <ButtonLink href={brochureCta.href} size="lg" variant="outlineLight">
                    <Download className="size-4" aria-hidden />
                    Download Service Brochure
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={240} className="relative">
              <div aria-hidden className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-gradient-to-br from-brand-500/25 via-transparent to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/pages/home.jpeg"
                  alt="ReadyMynd analysts reviewing product information with a Bangladesh factory team"
                  className="aspect-4/3 w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-ink-850/90 p-5 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">
                  Assessment principle
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-white">
                  One Product. One Factory.
                </p>
                <p className="mt-1 text-sm text-mist-400">
                  A practical starting point — understand the current situation before deciding where
                  improvements are needed.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-ink-900 px-5 py-6 text-center sm:px-6 sm:py-8">
                  <dt className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-xs uppercase tracking-[0.12em] text-mist-400">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ 1.2 Why it matters */}
      <Section id="why-readiness-matters" tone="light" grid>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="1.2 — Why Factory Data Readiness Matters"
              title="Your Product Information Exists. But Is It Ready to Be Used?"
            />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-mist-700">
              <p>
                Textile and apparel manufacturers maintain valuable product information in Tech Packs,
                Bills of Materials (BOMs), supplier documents, production records, spreadsheets and
                enterprise systems.
              </p>
              <p>
                However, information may be incomplete, inconsistent, difficult to locate or
                disconnected across factory departments.
              </p>
              <p>
                As European product information expectations evolve, factories may need to demonstrate
                that relevant information can be located, checked and shared reliably.
              </p>
              <p className="border-l-2 border-brand-500 pl-5 font-display text-lg font-semibold text-ink-900">
                Understanding these capabilities before investing in additional technology can help
                management make more informed decisions.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8">
                <ButtonLink href="/textile-digital-product-passport/" variant="ghost" className="px-0">
                  Understand the EU Textile DPP framework
                  <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lift ring-1 ring-mist-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pages/eu-dpp.jpeg"
                alt="Digital product passport and product information"
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Layers, title: 'Fragmented sources', body: 'The same field recorded in three places, three ways.' },
                { icon: ShieldCheck, title: 'Weak evidence', body: 'Claims that cannot be substantiated on request.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-mist-200 bg-white p-5">
                  <item.icon className="size-5 text-brand-500" aria-hidden />
                  <p className="mt-3 font-display text-sm font-semibold text-ink-900">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist-600">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------- Five dimensions (interactive) */}
      <Section id="readiness-dimensions" tone="ink">
        <SectionHeading
          tone="light"
          eyebrow="The assessment framework"
          title="Five Dimensions of Digital Readiness"
          intro="ReadyMynd's Textile DPP Digital Readiness Assessment examines how a factory maintains, manages, validates and exchanges product information across relevant functions — through five dimensions."
        />

        <Reveal delay={80} className="mt-12">
          <DimensionsExplorer tone="ink" />
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-mist-500">
            Traceability is examined across applicable functions and dimensions rather than treated as
            a separate assessment dimension. These dimensions form ReadyMynd&apos;s professional
            assessment framework. They are not official EU regulatory assessment categories.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10">
            <ButtonLink href="/textile-dpp-digital-readiness-assessment/" variant="outlineLight">
              See the full assessment scope
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* -------------------------------------------------- 1.3 Practical start */}
      <Section id="practical-start" tone="mist" grid>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="1.3 — Discover Your Factory’s Digital Readiness"
              title="One Product. One Factory. A Practical Starting Point."
            />
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-relaxed text-mist-700">
                Start with one representative product at one physical factory. Understand the current
                situation before deciding where improvements are needed.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Readiness findings',
                body: 'A structured view of current digital capabilities across the functions in scope.',
              },
              {
                title: 'Identified gaps',
                body: 'Weaknesses and cross-functional dependencies that limit reliable information sharing.',
              },
              {
                title: 'Improvement recommendations',
                body: 'Prioritised, practical actions interpreted against your operational context.',
              },
              {
                title: 'Proposed 90-day action plan',
                body: 'A sequenced first improvement cycle your teams can actually execute.',
              },
            ].map((item, i) => (
              <Card key={item.title} delay={i * 60}>
                <StepBadge>{String(i + 1).padStart(2, '0')}</StepBadge>
                <CardTitle className="mt-4">{item.title}</CardTitle>
                <CardBody>{item.body}</CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- 1.4 Who we serve */}
      <Section id="who-we-serve" tone="light">
        <SectionHeading
          eyebrow="1.4 — Who We Serve"
          title="Focused on Bangladesh’s Textile & Apparel Manufacturing Sector"
          intro="ReadyMynd serves manufacturers across Bangladesh’s textile and apparel value chain. Assessment coverage is tailored to the selected factory’s activities, relevant departments and product-information environment."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {factoryTypes.map((type, i) => (
            <Card key={type.title} delay={i * 50} className="flex flex-col">
              <span className="font-display text-xs font-bold text-brand-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <CardTitle className="mt-3 text-base">{type.title}</CardTitle>
              <CardBody className="text-sm">{type.body}</CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------- Process teaser */}
      <Section id="process" tone="ink">
        <SectionHeading
          tone="light"
          eyebrow="How the assessment runs"
          title="Five Steps, Software-Enabled Execution"
          intro="ReadyMynd follows five structured steps to assess existing digital capabilities and prepare management-oriented findings — combining consistent execution with professional judgment."
        />

        <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {processSteps.map((step, i) => (
            <li key={step.index} className="bg-ink-900">
              <Reveal delay={i * 60} className="group grid gap-4 p-6 transition-colors hover:bg-white/[0.03] sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8">
                <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                  <span className="font-display text-3xl font-bold text-white/20 transition-colors group-hover:text-brand-400">
                    {step.index}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist-400">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-10">
            <ButtonLink href="/assessment-methodology/" variant="outlineLight">
              Read the full methodology
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Start the conversation"
        title="Understand Your Capabilities Before You Commit Budget."
        intro="One representative product. One physical factory. A structured diagnostic that tells you what you already have, what is missing, and what to do first."
        primary={{ href: '/contact/#assessment-enquiry', label: 'Request an Assessment' }}
        note="Enquiries are reviewed by our advisory team and answered within two business days."
      />

      <BrochureCta />
    </>
  );
}
