'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Loader2,
  Lock,
  Send,
} from 'lucide-react';
import type { EnquiryPurpose } from '@/app/api/enquiries/route';
import { site } from '@/lib/site';

type Purpose = EnquiryPurpose;

const purposes: { id: Purpose; label: string; hint: string }[] = [
  {
    id: 'assessment',
    label: 'Request Digital Readiness Assessment',
    hint: 'One representative product at one physical factory.',
  },
  {
    id: 'brochure',
    label: 'Download Service Brochure',
    hint: 'The brochure is available immediately after submission.',
  },
  {
    id: 'general',
    label: 'General Business Enquiry',
    hint: 'Advisory, partnerships or other business matters.',
  },
];

const factoryTypes = [
  'Garment Manufacturing Factory',
  'Knitwear Manufacturing Factory',
  'Spinning Mill',
  'Knitting Mill',
  'Weaving Mill',
  'Dyeing & Finishing Facility',
  'Fabric Manufacturing Facility',
  'Composite Textile Mill',
  'Other / Not listed',
];

const requiredByPurpose: Record<Purpose, string[]> = {
  assessment: ['fullName', 'designation', 'company', 'factoryType', 'email', 'phone'],
  brochure: ['fullName', 'company', 'email'],
  general: ['fullName', 'email', 'message'],
};

type FormState = {
  purpose: Purpose;
  fullName: string;
  designation: string;
  company: string;
  factoryType: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
  marketing: boolean;
};

const initialState = (purpose: Purpose): FormState => ({
  purpose,
  fullName: '',
  designation: '',
  company: '',
  factoryType: '',
  email: '',
  phone: '',
  message: '',
  privacy: false,
  marketing: false,
});

const fieldClass =
  'mt-2 block w-full rounded-xl border border-mist-300 bg-white px-4 py-3 text-[0.9375rem] text-ink-900 placeholder:text-mist-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20';

const labelClass = 'text-sm font-semibold text-ink-900';

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const purposeParam = searchParams.get('purpose');
  const initialPurpose: Purpose =
    purposeParam === 'brochure' || purposeParam === 'general' ? purposeParam : 'assessment';

  const [form, setForm] = useState<FormState>(() => initialState(initialPurpose));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [reference, setReference] = useState<string>('');
  const [website, setWebsite] = useState('');
  const uid = useId();
  const successRef = useRef<HTMLDivElement | null>(null);
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const required = useMemo(() => requiredByPurpose[form.purpose], [form.purpose]);
  const isRequired = (field: string) => required.includes(field);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key as string]) return prev;
      const next = { ...prev };
      delete next[key as string];
      return next;
    });
  };

  const changePurpose = (purpose: Purpose) => {
    setForm((prev) => ({ ...initialState(purpose), ...{ fullName: prev.fullName, email: prev.email, company: prev.company } }));
    setErrors({});
  };

  useEffect(() => {
    if (status === 'success') {
      successRef.current?.focus();
      // Brochure requests: make the PDF available immediately.
      if (form.purpose === 'brochure') {
        const timer = window.setTimeout(() => downloadRef.current?.click(), 600);
        return () => window.clearTimeout(timer);
      }
    }
  }, [status, form.purpose]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    const nextErrors: Record<string, string> = {};
    for (const field of required) {
      if (!String(form[field as keyof FormState] ?? '').trim()) {
        nextErrors[field] = 'This field is required.';
      }
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) {
      nextErrors.email = 'Enter a valid business email address.';
    }
    if (isRequired('phone') && form.phone && !/^[+()\d][\d\s\-()]{5,20}$/.test(form.phone)) {
      nextErrors.phone = 'Enter a valid contact number.';
    }
    if (!form.privacy) {
      nextErrors.privacy = 'Please acknowledge the privacy notice to continue.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`${uid}-${firstKey}`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('/api/enquiries/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website }),
      });
      const data = (await response.json()) as {
        ok: boolean;
        reference?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? { form: 'Something went wrong. Please try again.' });
        setStatus('idle');
        return;
      }

      setReference(data.reference ?? '');
      setStatus('success');
    } catch {
      setErrors({ form: 'Network error. Please try again or email us directly.' });
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-verified-500/30 bg-verified-500/[0.06] p-6 sm:p-8"
      >
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-verified-500/15 text-verified-500">
            <CheckCircle2 className="size-6" aria-hidden />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink-900">
              {form.purpose === 'brochure' ? 'Your brochure is ready' : 'Enquiry received'}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-700">
              {form.purpose === 'brochure'
                ? 'Thank you. The ReadyMynd service brochure is available below, and a copy of your request has been logged.'
                : 'Thank you. Our advisory team will review your enquiry and contact you regarding the proposed engagement.'}
            </p>
            {reference && (
              <p className="mt-3 inline-flex rounded-lg bg-white px-3 py-1.5 font-mono text-xs font-semibold text-ink-900 ring-1 ring-mist-200">
                Reference {reference}
              </p>
            )}

            {form.purpose === 'brochure' && (
              <a
                ref={downloadRef}
                href={site.brochureHref}
                download="ReadyMynd-Corporate-Brochure.pdf"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(229,62,62,0.6)] transition-colors hover:bg-brand-600"
              >
                <Download className="size-4" aria-hidden />
                Download the brochure (PDF)
              </a>
            )}

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <button
                type="button"
                onClick={() => {
                  setForm(initialState('assessment'));
                  setStatus('idle');
                  setReference('');
                }}
                className="font-semibold text-brand-600 hover:underline"
              >
                Submit another enquiry
              </button>
              <Link href="/textile-dpp-digital-readiness-assessment/" className="font-semibold text-mist-600 hover:text-ink-900">
                Read about the assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-mist-200 bg-white p-6 shadow-lift sm:p-8">
      {/* Purpose selector */}
      <fieldset>
        <legend className={labelClass}>
          Select an enquiry purpose <span className="text-brand-600">*</span>
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {purposes.map((purpose) => {
            const selected = form.purpose === purpose.id;
            return (
              <label
                key={purpose.id}
                className={`cursor-pointer rounded-xl border p-4 transition-all ${
                  selected
                    ? 'border-brand-500 bg-brand-50/60 ring-1 ring-brand-500'
                    : 'border-mist-200 bg-white hover:border-mist-300'
                }`}
              >
                <input
                  type="radio"
                  name="purpose"
                  value={purpose.id}
                  checked={selected}
                  onChange={() => changePurpose(purpose.id)}
                  className="sr-only"
                />
                <span className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border-2 ${
                      selected ? 'border-brand-500 bg-brand-500' : 'border-mist-300'
                    }`}
                  >
                    {selected && <span className="size-1.5 rounded-full bg-white" />}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink-900">{purpose.label}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-mist-500">
                      {purpose.hint}
                    </span>
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id={`${uid}-fullName`} label="Full name" required error={errors.fullName}>
          <input
            id={`${uid}-fullName`}
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => set('fullName', e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `${uid}-fullName-error` : undefined}
            className={fieldClass}
            placeholder="e.g. Mohammad Rahman"
          />
        </Field>

        <Field
          id={`${uid}-designation`}
          label="Designation"
          required={isRequired('designation')}
          error={errors.designation}
        >
          <input
            id={`${uid}-designation`}
            name="designation"
            type="text"
            autoComplete="organization-title"
            value={form.designation}
            onChange={(e) => set('designation', e.target.value)}
            aria-invalid={Boolean(errors.designation)}
            aria-describedby={errors.designation ? `${uid}-designation-error` : undefined}
            className={fieldClass}
            placeholder="e.g. Head of Compliance"
          />
        </Field>

        <Field id={`${uid}-company`} label="Factory / company name" required error={errors.company}>
          <input
            id={`${uid}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `${uid}-company-error` : undefined}
            className={fieldClass}
            placeholder="Registered factory or company name"
          />
        </Field>

        <Field
          id={`${uid}-factoryType`}
          label="Factory type"
          required={isRequired('factoryType')}
          error={errors.factoryType}
        >
          <select
            id={`${uid}-factoryType`}
            name="factoryType"
            value={form.factoryType}
            onChange={(e) => set('factoryType', e.target.value)}
            aria-invalid={Boolean(errors.factoryType)}
            aria-describedby={errors.factoryType ? `${uid}-factoryType-error` : undefined}
            className={fieldClass}
          >
            <option value="">Select a factory type</option>
            {factoryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${uid}-email`} label="Business email" required error={errors.email}>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${uid}-email-error` : undefined}
            className={fieldClass}
            placeholder="name@company.com"
          />
        </Field>

        <Field
          id={`${uid}-phone`}
          label="Contact number"
          required={isRequired('phone')}
          error={errors.phone}
        >
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
            className={fieldClass}
            placeholder="+880 1XXX XXXXXX"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field
            id={`${uid}-message`}
            label="Message / enquiry details"
            required={isRequired('message')}
            error={errors.message}
          >
            <textarea
              id={`${uid}-message`}
              name="message"
              rows={4}
              value={form.message}
              onChange={(e) => set('message', e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? `${uid}-message-error` : undefined}
              className={`${fieldClass} resize-y`}
              placeholder="Tell us about your product, factory setup and what you would like to understand."
            />
          </Field>
        </div>
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {/* Consents */}
      <div className="mt-6 space-y-3 rounded-xl border border-mist-200 bg-mist-50 p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            id={`${uid}-privacy`}
            name="privacy"
            type="checkbox"
            checked={form.privacy}
            onChange={(e) => set('privacy', e.target.checked)}
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? `${uid}-privacy-error` : undefined}
            className="mt-0.5 size-4 shrink-0 rounded border-mist-400 text-brand-500 focus:ring-brand-500"
          />
          <span className="text-sm leading-relaxed text-mist-700">
            I acknowledge that ReadyMynd will use the information above to respond to this enquiry, as
            described in the{' '}
            <Link href="/privacy-policy/" className="font-semibold text-brand-600 hover:underline">
              Privacy Policy
            </Link>
            . <span className="text-brand-600">*</span>
          </span>
        </label>
        <ErrorText id={`${uid}-privacy-error`} message={errors.privacy} />

        <label className="flex cursor-pointer items-start gap-3 border-t border-mist-200 pt-3">
          <input
            type="checkbox"
            name="marketing"
            checked={form.marketing}
            onChange={(e) => set('marketing', e.target.checked)}
            className="mt-0.5 size-4 shrink-0 rounded border-mist-400 text-brand-500 focus:ring-brand-500"
          />
          <span className="text-sm leading-relaxed text-mist-600">
            <span className="font-semibold text-mist-700">Optional:</span> send me ReadyMynd updates on
            EU Textile DPP developments and new insights. You can unsubscribe at any time.
          </span>
        </label>
      </div>

      {errors.form && (
        <p className="mt-5 flex items-start gap-2 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-700">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          {errors.form}
        </p>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(229,62,62,0.6)] transition-all hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Submitting…
            </>
          ) : (
            <>
              <Send className="size-4" aria-hidden />
              {form.purpose === 'brochure' ? 'Get the brochure' : 'Submit enquiry'}
            </>
          )}
        </button>
        <p className="inline-flex items-center gap-2 text-xs text-mist-500">
          <Lock className="size-3.5" aria-hidden />
          Submitted for enquiry response only. Never sold or shared for advertising.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-brand-600">*</span>}
        {!required && <span className="ml-1.5 text-xs font-normal text-mist-400">(optional)</span>}
      </label>
      {children}
      <ErrorText id={`${id}-error`} message={error} />
    </div>
  );
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-brand-600">
      {message}
    </p>
  );
}
