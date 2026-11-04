import type { Locale, Messages } from '@/lib/i18n';
import { commonEn, commonBn } from './common';
import { homeEn, homeBn } from './home';
import { servicesEn, servicesBn } from './services';
import { companyEn, companyBn } from './company';
import { legalEn, legalBn } from './legal';

export const messages: Record<Locale, Messages> = {
  en: { ...commonEn, ...homeEn, ...servicesEn, ...companyEn, ...legalEn },
  bn: { ...commonBn, ...homeBn, ...servicesBn, ...companyBn, ...legalBn },
};

export type { Messages };
