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
import { useI18n } from '@/lib/i18n';

type Purpose = EnquiryPurpose;

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
  'mt-2 block w-full rounded-xl border border-line-strong bg-surface-raised px-4 py-3 text-[0.9375rem] text-heading placeholder:text-body-soft transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20';

const labelClass = 'text-sm font-semibold text-heading';

export function EnquiryForm() {
  const { t, tl, tr } = useI18n();
  const purposeCopy = tr<{ label: string; hint: string }[]>('form.purposes') ?? [];
  const purposes = (['assessment', 'brochure', 'general'] as Purpose[]).map((id, index) => ({
    id,
    label: purposeCopy[index]?.label ?? id,
    hint: purposeCopy[index]?.hint ?? '',
  }));
  const factoryTypes = tl('form.factoryTypes');
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
        nextErrors[field] = t('form.errorRequired');
      }
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) {
      nextErrors.email = t('form.errorEmail');
    }
    if (isRequired('phone') && form.phone && !/^[+()\d][\d\s\-()]{5,20}$/.test(form.phone)) {
      nextErrors.phone = t('form.errorPhone');
    }
    if (!form.privacy) {
      nextErrors.privacy = t('form.errorPrivacy');
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
        setErrors(data.errors ?? { form: t('form.errorGeneric') });
        setStatus('idle');
        return;
      }

      setReference(data.reference ?? '');
      setStatus('success');
    } catch {
      setErrors({ form: t('form.errorNetwork') });
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
            <h3 className="font-display text-xl font-semibold text-heading">
              {form.purpose === 'brochure' ? t('form.successBrochureTitle') : t('form.successTitle')}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body-strong">
              {form.purpose === 'brochure'
                ? t('form.successBrochureBody')
                : t('form.successBody')}
            </p>
            {reference && (
              <p className="mt-3 inline-flex rounded-lg bg-surface-raised px-3 py-1.5 font-mono text-xs font-semibold text-heading ring-1 ring-line">
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
                {t('form.downloadBrochure')}
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
                className="font-semibold text-accent hover:underline"
              >
                {t('form.submitAnother')}
              </button>
              <Link href="/textile-dpp-digital-readiness-assessment/" className="font-semibold text-body hover:text-heading">
                {t('form.readAssessment')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-surface-raised p-6 shadow-lift sm:p-8">
      {/* Purpose selector */}
      <fieldset>
        <legend className={labelClass}>
          {t('form.purposeLabel')} <span className="text-accent">*</span>
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {purposes.map((purpose) => {
            const selected = form.purpose === purpose.id;
            return (
              <label
                key={purpose.id}
                className={`cursor-pointer rounded-xl border p-4 transition-all ${
                  selected
                    ? 'border-brand-500 bg-accent-soft ring-1 ring-brand-500'
                    : 'border-line bg-surface-raised hover:border-line-strong'
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
                      selected ? 'border-brand-500 bg-brand-500' : 'border-line-strong'
                    }`}
                  >
                    {selected && <span className="size-1.5 rounded-full bg-surface-raised" />}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-heading">{purpose.label}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-body-soft">
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
        <Field id={`${uid}-fullName`} label={t('form.fullName')} required error={errors.fullName}>
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
            placeholder={t('form.placeholderName')}
          />
        </Field>

        <Field
          id={`${uid}-designation`}
          optionalLabel={t('form.optional')}
          label={t('form.designation')}
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
            placeholder={t('form.placeholderDesignation')}
          />
        </Field>

        <Field id={`${uid}-company`} label={t('form.company')} required error={errors.company}>
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
            placeholder={t('form.placeholderCompany')}
          />
        </Field>

        <Field
          id={`${uid}-factoryType`}
          optionalLabel={t('form.optional')}
          label={t('form.factoryType')}
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
            <option value="">{t('form.selectFactoryType')}</option>
            {factoryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${uid}-email`} label={t('form.email')} required error={errors.email}>
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
            placeholder={t('form.placeholderEmail')}
          />
        </Field>

        <Field
          id={`${uid}-phone`}
          optionalLabel={t('form.optional')}
          label={t('form.phone')}
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
            placeholder={t('form.placeholderPhone')}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field
            id={`${uid}-message`}
            optionalLabel={t('form.optional')}
            label={t('form.message')}
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
              placeholder={t('form.placeholderMessage')}
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
      <div className="mt-6 space-y-3 rounded-xl border border-line bg-surface-muted p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            id={`${uid}-privacy`}
            name="privacy"
            type="checkbox"
            checked={form.privacy}
            onChange={(e) => set('privacy', e.target.checked)}
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? `${uid}-privacy-error` : undefined}
            className="mt-0.5 size-4 shrink-0 rounded border-line-strong text-accent focus:ring-brand-500"
          />
          <span className="text-sm leading-relaxed text-body-strong">
            {t('form.privacy')}{' '}
            <Link href="/privacy-policy/" className="font-semibold text-accent hover:underline">
              {t('form.privacyLink')}
            </Link>
            . <span className="text-accent">*</span>
          </span>
        </label>
        <ErrorText id={`${uid}-privacy-error`} message={errors.privacy} />

        <label className="flex cursor-pointer items-start gap-3 border-t border-line pt-3">
          <input
            type="checkbox"
            name="marketing"
            checked={form.marketing}
            onChange={(e) => set('marketing', e.target.checked)}
            className="mt-0.5 size-4 shrink-0 rounded border-line-strong text-accent focus:ring-brand-500"
          />
          <span className="text-sm leading-relaxed text-body">
            <span className="font-semibold text-body-strong">{t('form.marketingLabel')}</span>{' '}
            {t('form.marketing')}
          </span>
        </label>
      </div>

      {errors.form && (
        <p className="mt-5 flex items-start gap-2 rounded-xl border border-accent-line bg-accent-soft px-4 py-3 text-sm text-accent-strong">
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
              {t('form.submitting')}
            </>
          ) : (
            <>
              <Send className="size-4" aria-hidden />
              {form.purpose === 'brochure' ? t('form.submitBrochure') : t('form.submit')}
            </>
          )}
        </button>
        <p className="inline-flex items-center gap-2 text-xs text-body-soft">
          <Lock className="size-3.5" aria-hidden />
          {t('form.secureNote')}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  optionalLabel,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optionalLabel?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-accent">*</span>}
        {!required && <span className="ml-1.5 text-xs font-normal text-body-soft">{optionalLabel}</span>}
      </label>
      {children}
      <ErrorText id={`${id}-error`} message={error} />
    </div>
  );
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-accent">
      {message}
    </p>
  );
}
