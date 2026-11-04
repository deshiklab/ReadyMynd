import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/blocks/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section';
import { EnquiryForm } from '@/components/contact/enquiry-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact ReadyMynd',
  description:
    'Request a Textile DPP Digital Readiness Assessment, download the service brochure, or send a general business enquiry. Bangladesh-based advisory for textile and apparel manufacturers.',
  alternates: { canonical: '/contact/' },
};

const expectations = [
  {
    title: 'Initial alignment call',
    body: 'We clarify your factory setup, the representative product and the departments in scope.',
  },
  {
    title: 'Mutual NDA',
    body: 'Confidentiality arrangements are agreed before any product information is exchanged.',
  },
  {
    title: 'Scope and proposal',
    body: 'Assessment scope, responsibilities, timelines and commercial terms are confirmed in writing.',
  },
  {
    title: 'Assessment begins',
    body: 'Questionnaires are issued and evidence collection starts — typically 10–15 working days end to end.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="08 — Contact ReadyMynd"
        title="Start with Your Factory’s Current Digital Capabilities"
        intro="Interested in understanding your factory’s Textile DPP Digital Readiness? Contact ReadyMynd to discuss a structured assessment for one representative product at one physical factory."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact ReadyMynd' }]}
        image="/images/pages/contact.jpeg"
        imageAlt="Contact ReadyMynd"
      />

      {/* ------------------------------------------------------------- 8.1 */}
      <Section id="assessment-enquiry" tone="light" className="scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="8.1 — Request an Assessment"
              title="Tell Us About One Product and One Factory"
              intro="Our team will review your enquiry and contact you regarding the proposed engagement."
            />

            <Reveal delay={80} className="mt-8 space-y-6">
              <div className="rounded-2xl border border-mist-200 bg-mist-50 p-6">
                <Eyebrow>What happens next</Eyebrow>
                <ol className="mt-4 space-y-4">
                  {expectations.map((item, i) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink-900 font-display text-[0.6875rem] font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-mist-600">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-white text-brand-600 ring-1 ring-brand-100">
                  <ShieldCheck className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-900">
                  Confidentiality
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-700">
                  Product information, Tech Packs, BOMs and supplier details are handled under agreed
                  confidentiality arrangements. We do not share factory information with technology
                  vendors.
                </p>
              </div>
            </Reveal>
          </div>

          <div id="enquiry-form" className="scroll-mt-28">
            <Suspense
              fallback={
                <div className="rounded-2xl border border-mist-200 bg-white p-8 shadow-lift">
                  <div className="h-6 w-48 animate-pulse rounded bg-mist-100" />
                  <div className="mt-6 h-24 animate-pulse rounded-xl bg-mist-100" />
                  <div className="mt-4 h-12 animate-pulse rounded-xl bg-mist-100" />
                  <div className="mt-4 h-12 animate-pulse rounded-xl bg-mist-100" />
                </div>
              }
            >
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------- 8.2 */}
      <Section id="business-enquiries" tone="ink">
        <SectionHeading
          tone="light"
          eyebrow="8.2 — Contact & Business Enquiries"
          title="Connect with ReadyMynd in Bangladesh"
          intro="For assessment enquiries, eligible post-assessment Digital Advisory Services or other business matters, contact us directly."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
            { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phoneHref}` },
            { icon: MapPin, label: 'Location', value: site.location, href: undefined },
            { icon: Clock, label: 'Hours', value: site.hours, href: undefined },
          ].map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 60}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <item.icon className="size-5 text-brand-400" aria-hidden />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-mist-500">
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="mt-1.5 block text-base font-semibold text-white hover:text-brand-300">
                  {item.value}
                </a>
              ) : (
                <p className="mt-1.5 text-base font-semibold text-white">{item.value}</p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-mist-300">
            We welcome enquiries from textile and apparel manufacturers seeking to understand their
            digital readiness and plan appropriate next steps.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
