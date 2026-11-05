import { NextResponse } from 'next/server';
import { asString, validate, type EnquiryPayload, type EnquiryPurpose } from '@/lib/enquiry';

export const runtime = 'nodejs';

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
