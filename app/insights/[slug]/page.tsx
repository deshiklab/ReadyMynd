import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Lightbulb } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { CtaBand } from '@/components/blocks/cta-band';
import { Notice } from '@/components/blocks/notice';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section } from '@/components/ui/section';
import { insights } from '@/lib/content';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) return { title: 'Insight not found' };

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `/insights/${insight.slug}/` },
    openGraph: {
      type: 'article',
      title: insight.title,
      description: insight.excerpt,
      publishedTime: insight.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function InsightPage({ params }: Params) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) notFound();

  const related = insights.filter((item) => item.slug !== insight.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={insight.topic}
        title={insight.title}
        intro={insight.excerpt}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources & Insights', href: '/insights/' },
          { label: insight.title },
        ]}
        actions={[
          { href: '/contact/#assessment-enquiry', label: 'Request an Assessment' },
          { href: '/contact/?purpose=brochure#assessment-enquiry', label: 'Download Service Brochure', variant: 'outlineLight' },
        ]}
      />

      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-mist-200 pb-6 text-sm text-mist-500">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4" aria-hidden />
              {formatDate(insight.date)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4" aria-hidden />
              {insight.readTime}
            </span>
            <span className="rounded-full bg-mist-100 px-2.5 py-1 text-xs font-semibold text-mist-700">
              {insight.topic}
            </span>
          </Reveal>

          <div className="mt-10 space-y-6">
            {insight.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 40}>
                <p
                  className={`leading-relaxed text-mist-700 ${
                    i === 0 ? 'text-xl text-ink-900' : 'text-[1.0625rem]'
                  }`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-2xl border border-mist-200 bg-mist-50 p-6 sm:p-8">
            <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Lightbulb className="size-5" aria-hidden />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold text-ink-900">Key takeaways</h2>
            <ul className="mt-4 space-y-3">
              {insight.takeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span className="text-[0.9375rem] leading-relaxed text-mist-700">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-10">
            <Notice title="Scope of this article">
              <p>
                This article supports informed preparation and does not replace legal or regulatory
                advice. EU Digital Product Passport requirements, implementing measures and
                interpretations may change — consult applicable official legislation and qualified
                professional advisers when making compliance decisions.
              </p>
            </Notice>
          </Reveal>

          <Reveal className="mt-10">
            <Link
              href="/insights/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back to all insights
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Continue reading</Eyebrow>
          <ul className="mt-6 divide-y divide-mist-200 border-y border-mist-200">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/insights/${item.slug}/`} className="group flex items-start justify-between gap-6 py-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mist-500">
                      {item.topic}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold leading-snug text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-mist-600">
                      {item.excerpt}
                    </p>
                  </div>
                  <ArrowRight
                    className="mt-1 size-5 shrink-0 text-mist-400 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        eyebrow="Put it into practice"
        title="Move From Reading to Knowing."
        intro="A Textile DPP Digital Readiness Assessment turns the questions in this article into specific, evidenced answers about your own factory."
        primary={{ href: '/contact/#assessment-enquiry', label: 'Request an Assessment' }}
      />
    </>
  );
}
