import type { Metadata } from 'next';
import { Compass, Cpu, MapPin, Scale, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { capabilities, commitments } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About ReadyMynd',
  description:
    'ReadyMynd is a Bangladesh-based professional service initiative focused on Textile DPP digital readiness — combining local presence, locally developed assessment software and professional enterprise analysis.',
  alternates: { canonical: '/about/' },
};

const capabilityIcons = [MapPin, Compass, Cpu, Sparkles, Scale];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="06 — About ReadyMynd"
        title="Bangladesh-Based. Focused on Digital Readiness."
        intro="ReadyMynd is a Bangladesh-based professional service initiative established to support the digital readiness needs of the country’s textile and apparel manufacturing sector."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About ReadyMynd' }]}
        image="/images/pages/about.jpeg"
        imageAlt="The ReadyMynd team"
        meta={[
          { label: 'Bangladesh-based' },
          { label: '5 capabilities' },
          { label: '5 commitments' },
          { label: 'Vendor-neutral' },
        ]}
        actions={[
          { href: '/contact/', label: 'Contact ReadyMynd' },
          { href: '/contact/?purpose=brochure#assessment-enquiry', label: 'Download Service Brochure', variant: 'outlineLight' },
        ]}
      />

      {/* ------------------------------------------------------------- 6.1 */}
      <Section id="who-we-are" tone="light" grid>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="6.1 — Who We Are" title="A Specialist Initiative, Not a General Consultancy" />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-mist-700">
              <p>
                ReadyMynd is a Bangladesh-based professional service initiative established to support
                the digital readiness needs of the country&apos;s textile and apparel manufacturing
                sector.
              </p>
              <p>
                We specialize in Textile DPP Digital Readiness Assessment and subsequent Digital
                Advisory Services, helping factory management understand existing capabilities and make
                informed improvement decisions.
              </p>
              <p>
                Our approach combines local accessibility, structured assessment technology and
                professional enterprise analysis.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'What we assess', body: 'How product information is created, maintained, validated, exchanged and governed.' },
              { title: 'How we assess', body: 'Locally developed software for structure and scoring; Enterprise Analysts for interpretation.' },
              { title: 'What we deliver', body: 'Management-ready findings and a prioritised, proposed 90-day action plan.' },
              { title: 'What we do not do', body: 'Certify compliance, endorse products, or act as a software implementation vendor.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-mist-200 bg-mist-50 p-5">
                <h3 className="font-display text-sm font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-600">{item.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 6.2 */}
      <Section id="expertise" tone="mist">
        <SectionHeading
          eyebrow="6.2 — Our Expertise & Bangladesh Industry Focus"
          title="Enterprise Analysts & Digital Strategists with Local Industry Understanding"
          intro="ReadyMynd brings together five capabilities relevant to Bangladesh’s textile and apparel manufacturers."
        />

        <div className="mt-12 space-y-4">
          {capabilities.map((capability, i) => {
            const Icon = capabilityIcons[i] ?? Sparkles;
            return (
              <Reveal
                key={capability.title}
                delay={i * 60}
                className="group flex flex-col gap-5 rounded-2xl border border-mist-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-lift sm:flex-row sm:items-start sm:gap-7 sm:p-7"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-ink-900">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-600">{capability.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-mist-700">
            These capabilities support a structured assessment service adapted to Bangladesh&apos;s
            manufacturing environment.
          </p>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------------- 6.3 */}
      <Section id="commitments" tone="ink">
        <SectionHeading
          tone="light"
          eyebrow="6.3 — Independence & Professional Commitments"
          title="Professional Integrity Without Vendor Dependence"
          intro="Our objective is to provide credible findings and useful technical direction while maintaining professional independence."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((commitment, i) => (
            <Reveal
              key={commitment.title}
              delay={i * 55}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="font-display text-xs font-bold text-brand-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{commitment.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{commitment.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-10 grid gap-6 lg:grid-cols-2">
          <Notice tone="ink" title="Report ownership">
            <p>
              The factory owns its delivered assessment report under the engagement terms.
            </p>
          </Notice>
          <Notice tone="ink" title="Client references">
            <p>
              ReadyMynd may identify a factory in its customer list where permitted by those terms.
            </p>
          </Notice>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Work with us"
        title="Local Context. Independent Findings."
        intro="Contact ReadyMynd to discuss a Textile DPP Digital Readiness Assessment for one representative product at one physical factory."
        primary={{ href: '/contact/', label: 'Contact ReadyMynd' }}
      />

      <BrochureCta />
    </>
  );
}
