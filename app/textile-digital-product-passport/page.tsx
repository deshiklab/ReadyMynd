import type { Metadata } from 'next';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { Card, CardBody, CardTitle } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { informationAreas } from '@/lib/content';

export const metadata: Metadata = {
  title: 'EU Textile Digital Product Passport',
  description:
    'The EU Ecodesign for Sustainable Products Regulation (ESPR), Regulation (EU) 2024/1781, establishes the framework for Digital Product Passports. What it means for Bangladesh textile and apparel manufacturers.',
  alternates: { canonical: '/textile-digital-product-passport/' },
};

const timeline = [
  {
    phase: 'Framework',
    title: 'ESPR establishes the DPP framework',
    body: 'Regulation (EU) 2024/1781 creates the legal basis for introducing Digital Product Passports for covered product groups.',
  },
  {
    phase: 'Prioritisation',
    title: 'Textiles named a priority product group',
    body: 'Textiles and apparel are among the priority groups, but the detailed textile-specific requirements are still being developed.',
  },
  {
    phase: 'Detail',
    title: 'Fields, obligations and dates still to be fixed',
    body: 'The final information fields, technical obligations and implementation dates will depend on the applicable EU rules.',
  },
  {
    phase: 'Reality',
    title: 'Buyer expectations move earlier than the law',
    body: 'European buyers may request structured information from manufacturing partners well before obligations are finalised.',
  },
];

export default function EuTextileDppPage() {
  return (
    <>
      <PageHero
        eyebrow="02 — EU Textile Digital Product Passport"
        title="A Developing Framework for Digital Product Information"
        intro="The European Union's Ecodesign for Sustainable Products Regulation establishes the framework for Digital Product Passports. Textiles are a priority group — but the textile-specific detail is still being written."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'EU Textile Digital Product Passport' }]}
        image="/images/pages/eu-dpp.jpeg"
        imageAlt="Digital product passport and structured product information"
        actions={[
          { href: '/textile-dpp-digital-readiness-assessment/', label: 'Explore Digital Readiness Assessment' },
          { href: '/contact/?purpose=brochure#assessment-enquiry', label: 'Download Service Brochure', variant: 'outlineLight' },
        ]}
      />

      {/* ------------------------------------------------------------- 2.1 */}
      <Section id="understanding" tone="light" grid>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="2.1 — Understanding the EU Textile Digital Product Passport"
              title="What a Digital Product Passport Is Intended to Do"
            />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-mist-700">
              <p>
                The European Union&apos;s Ecodesign for Sustainable Products Regulation (ESPR),
                Regulation (EU) 2024/1781, establishes the framework for introducing Digital Product
                Passports for covered product groups.
              </p>
              <p>
                A Digital Product Passport is intended to make specified product information digitally
                accessible to relevant users according to applicable access requirements.
              </p>
              <p>
                Textiles and apparel are among the priority product groups. However, the detailed
                textile-specific DPP requirements are still being developed.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8 rounded-2xl border border-ink-800/10 bg-mist-50 p-6">
                <Eyebrow>The practical implication</Eyebrow>
                <p className="mt-3 text-base leading-relaxed text-mist-700">
                  The final information fields, technical obligations and implementation dates will
                  depend on the applicable EU rules. That uncertainty is a reason to understand your
                  own information capabilities now — not a reason to wait.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pt-4">
            <div className="overflow-hidden rounded-2xl ring-1 ring-mist-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/generated/dpp-passport.jpg"
                alt="Concept illustration of a digital product passport linked to a garment's product data"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------- Timeline / how it develops */}
      <Section id="how-it-develops" tone="mist">
        <SectionHeading
          align="center"
          eyebrow="Where the framework stands"
          title="From Framework to Final Obligations"
          intro="Four things are worth separating: what is established, what is expected, what is still open, and what is already happening commercially."
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, i) => (
            <li key={item.phase}>
              <Reveal
                delay={i * 70}
                className="h-full rounded-2xl border border-mist-200 bg-white p-6 shadow-soft"
              >
                <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand-700">
                  {item.phase}
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist-600">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------------------- 2.2 */}
      <Section id="implications" tone="ink">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="2.2 — Implications for Bangladesh’s Textile & Apparel Industry"
              title="Buyer Information Expectations May Develop Before Legal Deadlines"
            />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-mist-300">
              <p>
                Bangladesh&apos;s textile and apparel manufacturers supply European brands, retailers
                and other international customers.
              </p>
              <p>
                While the legal responsibility for a product passport may fall on the relevant economic
                operator placing a product on the EU market, manufacturers and upstream suppliers hold
                important product and production information.
              </p>
              <p>
                European buyers may increasingly request structured, reliable and traceable information
                from their manufacturing partners.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 border-l-2 border-brand-500 pl-5 font-display text-xl font-semibold text-white">
                Factories that understand their existing information capabilities will be better
                positioned to assess such requests and plan necessary improvements.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Legal responsibility', body: 'May sit with the operator placing the product on the EU market.' },
              { title: 'Information reality', body: 'Product and production data sits with manufacturers and upstream suppliers.' },
              { title: 'Commercial pressure', body: 'Buyers request structured information ahead of formal deadlines.' },
              { title: 'Preparation value', body: 'Knowing your capabilities turns a request into a negotiation.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{item.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 2.3 */}
      <Section id="information-areas" tone="light">
        <SectionHeading
          eyebrow="2.3 — Product Information and Traceability Expectations"
          title="Connecting Information Across the Product Lifecycle"
          intro="Potentially relevant textile product information areas include the following. These information areas may involve multiple factory departments, upstream suppliers and digital systems."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {informationAreas.map((area, i) => (
            <Card key={area.title} delay={i * 45}>
              <span className="font-display text-xs font-bold text-brand-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <CardTitle className="mt-3 text-base leading-snug">{area.title}</CardTitle>
              <CardBody className="text-sm">{area.body}</CardBody>
            </Card>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-mist-200 bg-mist-50 p-6 sm:p-7">
            <h3 className="font-display text-lg font-semibold text-ink-900">Traceability</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-700">
              Traceability helps connect information to the relevant product, materials, facilities and
              supply-chain activities.
            </p>
          </div>
          <div className="rounded-2xl border border-mist-200 bg-mist-50 p-6 sm:p-7">
            <h3 className="font-display text-lg font-semibold text-ink-900">Supporting evidence</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-700">
              Supporting evidence helps establish the reliability of reported information — which is
              what buyers ultimately test.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <Notice title="Please read as preparation, not obligation">
            <p>
              These categories are preparation topics, not a claim that every listed item is already a
              mandatory textile DPP data field. Final requirements will depend on the applicable EU
              rules.
            </p>
          </Notice>
        </Reveal>
      </Section>

      <CtaBand
        title="Understand What You Can Already Evidence."
        intro="A structured readiness assessment shows which of these information areas your factory can locate, check and share today — and which need work first."
        primary={{ href: '/textile-dpp-digital-readiness-assessment/', label: 'Explore Digital Readiness Assessment' }}
      />

      <BrochureCta />
    </>
  );
}
