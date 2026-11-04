import Link from 'next/link';
import type { Metadata } from 'next';
import { CalendarDays, Clock } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { BrochureCta } from '@/components/blocks/brochure-cta';
import { Notice } from '@/components/blocks/notice';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeading } from '@/components/ui/section';
import { InsightsBrowser } from '@/components/insights/insights-browser';
import { insights } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Textile DPP Resources & Insights',
  description:
    'Analysis and a knowledge library on the evolving EU Textile Digital Product Passport landscape — regulation, standards, product data, traceability and Bangladesh factory readiness.',
  alternates: { canonical: '/insights/' },
};

const featured = insights.filter((item) => item.featured);

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="07 — Textile DPP Resources & Insights"
        title="Understanding Developments That Matter to Bangladesh Manufacturers"
        intro="ReadyMynd publishes analysis and practical insights on the evolving EU Textile Digital Product Passport landscape — helping readers distinguish confirmed requirements from emerging proposals."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Textile DPP Resources & Insights' }]}
        image="/images/pages/insights.jpeg"
        imageAlt="Textile DPP research and knowledge resources"
        actions={[
          { href: '/contact/?purpose=brochure#assessment-enquiry', label: 'Download Service Brochure', variant: 'primary' },
        ]}
      />

      {/* ------------------------------------------------------------- 7.1 */}
      <Section id="featured" tone="light" grid>
        <SectionHeading
          eyebrow="7.1 — Featured Insights & Research"
          title="What We Are Reading, and What It Means for You"
          intro="Our publications examine regulatory developments, technical standards, product information, traceability, interoperability and implications for Bangladesh’s textile and apparel manufacturers."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featured.map((insight, i) => (
            <Reveal key={insight.slug} delay={i * 70} className="h-full">
              <Link
                href={`/insights/${insight.slug}/`}
                className="group flex h-full flex-col rounded-2xl border border-mist-200 bg-white p-6 shadow-soft transition-all hover:border-brand-200 hover:shadow-lift sm:p-7"
              >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mist-500">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                  {insight.topic}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" aria-hidden />
                  {formatDate(insight.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" aria-hidden />
                  {insight.readTime}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-ink-900">
                {insight.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-600">{insight.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Read insight
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-mist-700">
            Featured insights help readers distinguish confirmed requirements from emerging proposals
            and consider relevant preparation activities.
          </p>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------------- 7.2 */}
      <Section id="knowledge-library" tone="mist">
        <SectionHeading
          eyebrow="7.2 — Textile DPP Knowledge Library"
          title="Explore Policy, Data, Technology and Factory Readiness"
          intro="The knowledge library covers seven principal topics. Filter by topic to focus on the area most relevant to your preparation."
        />

        <Reveal delay={80} className="mt-12">
          <InsightsBrowser />
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Notice title="Scope of the library">
            <p>
              The library supports informed preparation and does not replace legal or regulatory
              advice. Visitors should consult applicable official legislation, regulatory publications
              and qualified professional advisers when making compliance decisions.
            </p>
          </Notice>
        </Reveal>
      </Section>

      <BrochureCta />
    </>
  );
}
