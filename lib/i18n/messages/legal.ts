import type { Messages } from '@/lib/i18n';

/**
 * Page furniture for the three supporting legal pages.
 *
 * The clause text itself is intentionally left in English only: it is a
 * working draft awaiting legal review, and a low-confidence translation of
 * binding wording is a liability rather than a feature. `englishOnly.*` is
 * rendered above the clauses when the UI language is Bengali.
 */
export const legalEn: Messages = {
  privacy: {
    title: 'Privacy Policy',
    intro:
      'How ReadyMynd collects, uses, stores, protects and handles personal information through its website and related communications.',
  },
  cookies: {
    title: 'Cookie Policy',
    intro:
      'How ReadyMynd uses cookies and similar technologies, the categories that may apply, and how you can manage your preferences.',
  },
  terms: {
    title: 'Terms of Use',
    intro:
      'The terms governing access to and use of the ReadyMynd website, including service descriptions, assessment scope and limitations, and intellectual property.',
  },
  shared: {
    eyebrow: 'Legal',
    contentsLabel: 'On this page',
    draftBanner:
      'This page forms part of the ReadyMynd Supporting Legal Pages v1.8 working draft. Effective dates and certain operational details remain to be confirmed following legal review. The latest version will always be published here.',
  },
};

export const legalBn: Messages = {
  privacy: {
    title: 'গোপনীয়তা নীতি',
    intro:
      'ReadyMynd কীভাবে তার ওয়েবসাইট ও সংশ্লিষ্ট যোগাযোগের মাধ্যমে ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ, সুরক্ষিত ও সামলায়।',
  },
  cookies: {
    title: 'কুকি নীতি',
    intro:
      'ReadyMynd কীভাবে কুকি ও অনুরূপ প্রযুক্তি ব্যবহার করে, কোন কোন ধরন প্রযোজ্য হতে পারে এবং আপনি কীভাবে আপনার পছন্দ সামলাতে পারেন।',
  },
  terms: {
    title: 'ব্যবহারের শর্তাবলি',
    intro:
      'ReadyMynd ওয়েবসাইটে প্রবেশ ও ব্যবহার সংক্রান্ত শর্তাবলি — সেবার বিবরণ, মূল্যায়নের পরিধি ও সীমাবদ্ধতা এবং মেধাস্বত্বসহ।',
  },
  shared: {
    eyebrow: 'আইনি',
    contentsLabel: 'এই পৃষ্ঠায়',
    draftBanner:
      'এই পৃষ্ঠাটি ReadyMynd সাপোর্টিং লিগ্যাল পেজেস v1.8 কার্যকরী খসড়ার অংশ। কার্যকর তারিখ ও কিছু কার্যক্রম-সংক্রান্ত বিবরণ আইনি পর্যালোচনার পর নিশ্চিত করা বাকি। সর্বশেষ সংস্করণ সবসময় এই পৃষ্ঠায় প্রকাশিত হবে।',
  },
};
