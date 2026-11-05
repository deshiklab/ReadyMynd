/**
 * Shared enquiry contract.
 *
 * Lives outside `app/api` on purpose: the GitHub Pages build is a static
 * export, which cannot include Route Handlers, so `app/api` is excluded from
 * that build. Keeping the types and validation here lets the form and the API
 * route share them either way.
 */

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

export function asString(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 2000) : '';
}

export function validate(payload: EnquiryPayload) {
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
