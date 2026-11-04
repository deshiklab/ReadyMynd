import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export type EnquiryPurpose = 'assessment' | 'brochure' | 'general';

const purposes: EnquiryPurpose[] = ['assessment', 'brochure', 'general'];

const requiredFields: Record<EnquiryPurpose, (keyof EnquiryPayload)[]> = {
  assessment: ['fullName', 'designation', 'company', 'factoryType', 'email', 'phone'],
  brochure: ['fullName', 'company', 'email'],
  general: ['fullName', 'email', 'message'],
};

export type EnquiryPayload = {
  purpose: EnquiryPurpose;
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

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function asString(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 2000) : '';
}

function validate(payload: EnquiryPayload) {
  const errors: Record<string, string> = {};

  if (!purposes.includes(payload.purpose)) {
    errors.purpose = 'Select an enquiry purpose.';
  }

  for (const field of requiredFields[payload.purpose] ?? requiredFields.general) {
    if (!payload[field]) {
      errors[field] = 'This field is required.';
    }
  }

  if (payload.email && !emailPattern.test(payload.email)) {
    errors.email = 'Enter a valid business email address.';
  }

  if (payload.phone && !/^[+()\d][\d\s\-()]{5,20}$/.test(payload.phone)) {
    errors.phone = 'Enter a valid contact number.';
  }

  if (!payload.privacy) {
    errors.privacy = 'Please acknowledge the privacy notice to continue.';
  }

  return errors;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: 'Invalid request.' } }, { status: 400 });
  }

  const raw = (body ?? {}) as Record<string, unknown>;

  // Honeypot: real users never fill this hidden field.
  if (asString(raw.website)) {
    return NextResponse.json({ ok: true, reference: 'RM-OK' });
  }

  const payload: EnquiryPayload = {
    purpose: asString(raw.purpose) as EnquiryPurpose,
    fullName: asString(raw.fullName),
    designation: asString(raw.designation),
    company: asString(raw.company),
    factoryType: asString(raw.factoryType),
    email: asString(raw.email),
    phone: asString(raw.phone),
    message: asString(raw.message),
    privacy: raw.privacy === true,
    marketing: raw.marketing === true,
  };

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const reference = `RM-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  // Delivery point: forward to the ReadyMynd mailbox / CRM here.
  // e.g. await sendMail({ to: site.email, subject: `[${reference}] ${payload.purpose}`, ... })
  if (process.env.NODE_ENV !== 'test') {
    console.info('[enquiry]', reference, {
      purpose: payload.purpose,
      company: payload.company,
      email: payload.email,
      marketing: payload.marketing,
    });
  }

  return NextResponse.json({ ok: true, reference });
}
