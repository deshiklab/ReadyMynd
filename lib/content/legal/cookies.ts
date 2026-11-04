import { site } from '@/lib/site';
import { bi, list, note, p, type LegalSection } from './types';

export const cookieSections: LegalSection[] = [
  {
    heading: bi('Introduction', 'ভূমিকা'),
    blocks: [
      p(
        'This Cookie Policy explains how ReadyMynd uses cookies and similar technologies on its website.',
        'ওয়েবসাইটে কুকি ও অনুরূপ প্রযুক্তি ReadyMynd কীভাবে ব্যবহার করে, তা এই কুকি নীতিমালায় ব্যাখ্যা করা হয়েছে।',
      ),
      p(
        'Our objective is to maintain a functional, secure, and accessible website while respecting visitor privacy and providing appropriate information about any tracking technologies used.',
        'দর্শনার্থীর গোপনীয়তাকে সম্মান রেখে এবং ব্যবহৃত যেকোনো ট্র্যাকিং প্রযুক্তি সম্পর্কে যথাযথ তথ্য দিয়ে একটি কার্যকর, নিরাপদ ও সহজলভ্য ওয়েবসাইট বজায় রাখাই আমাদের উদ্দেশ্য।',
      ),
    ],
  },
  {
    heading: bi('What Are Cookies?', 'কুকি কী?'),
    blocks: [
      p(
        'Cookies are small text files that websites may store on a visitor’s device through a web browser.',
        'কুকি হলো ছোট টেক্সট ফাইল, যা ওয়েবসাইটগুলো একটি ওয়েব ব্রাউজারের মাধ্যমে দর্শনার্থীর ডিভাইসে সংরক্ষণ করতে পারে।',
      ),
      p(
        'Cookies can support website functionality, remember certain preferences, maintain security, and provide information about website performance and usage.',
        'কুকি ওয়েবসাইটের কার্যকারিতা বজায় রাখতে, কিছু পছন্দ মনে রাখতে, নিরাপত্তা রক্ষা করতে এবং ওয়েবসাইটের কার্যক্ষমতা ও ব্যবহার সম্পর্কে তথ্য দিতে পারে।',
      ),
    ],
  },
  {
    heading: bi('Types of Cookies', 'কুকির প্রকারভেদ'),
    blocks: [
      p(
        'Depending on the website’s final technical configuration, ReadyMynd may use the following categories.',
        'ওয়েবসাইটের চূড়ান্ত কারিগরি কনফিগারেশনের ওপর ভিত্তি করে ReadyMynd নিচের শ্রেণিগুলো ব্যবহার করতে পারে।',
      ),
      list([
        bi(
          'Essential Cookies — these support core website functionality, security, and technical operations. They may be necessary for the website to function correctly.',
          'অপরিহার্য কুকি — এগুলো ওয়েবসাইটের মূল কার্যকারিতা, নিরাপত্তা ও কারিগরি পরিচালনায় সহায়তা করে। ওয়েবসাইট সঠিকভাবে কাজ করার জন্য এগুলো প্রয়োজন হতে পারে।',
        ),
        bi(
          'Functional Cookies — these may remember visitor preferences or settings to improve the browsing experience.',
          'কার্যকরী কুকি — এগুলো ব্রাউজিং অভিজ্ঞতা উন্নত করতে দর্শনার্থীর পছন্দ বা সেটিংস মনে রাখতে পারে।',
        ),
        bi(
          'Analytics Cookies — where enabled, these may help ReadyMynd understand aggregated website usage, page performance, and visitor interactions.',
          'অ্যানালিটিক্স কুকি — চালু থাকলে এগুলো সম্মিলিত ওয়েবসাইট ব্যবহার, পাতার কার্যক্ষমতা ও দর্শনার্থীর মিথস্ক্রিয়া বুঝতে ReadyMynd-কে সাহায্য করতে পারে।',
        ),
        bi(
          'Marketing Cookies — ReadyMynd does not intend to use advertising or behavioural marketing cookies as part of its initial website configuration. Any future introduction of such technologies will require an update to this policy and appropriate consent arrangements.',
          'মার্কেটিং কুকি — প্রাথমিক ওয়েবসাইট কনফিগারেশনের অংশ হিসেবে বিজ্ঞাপন বা আচরণভিত্তিক মার্কেটিং কুকি ব্যবহারের কোনো পরিকল্পনা ReadyMynd-এর নেই। ভবিষ্যতে এমন প্রযুক্তি চালু করলে এই নীতিমালা হালনাগাদ করা এবং যথাযথ সম্মতির ব্যবস্থা করতে হবে।',
        ),
      ]),
    ],
  },
  {
    heading: bi('Cookies Used by Our Website', 'আমাদের ওয়েবসাইটে ব্যবহৃত কুকি'),
    blocks: [
      p(
        'The actual cookies used will depend on the website hosting platform, content management system, security services, analytics tools, and any third-party integrations.',
        'প্রকৃতপক্ষে কোন কুকি ব্যবহৃত হবে তা নির্ভর করবে ওয়েবসাইট হোস্টিং প্ল্যাটফর্ম, কনটেন্ট ম্যানেজমেন্ট সিস্টেম, নিরাপত্তা পরিষেবা, অ্যানালিটিক্স টুল এবং যেকোনো তৃতীয় পক্ষের সংযোজনের ওপর।',
      ),
      p(
        'Before publication, ReadyMynd will maintain an accurate record of relevant cookies, including their purpose, provider, and duration.',
        'প্রকাশের আগে ReadyMynd প্রাসঙ্গিক কুকির একটি নিখুঁত রেকর্ড রাখবে, যাতে থাকবে সেগুলোর উদ্দেশ্য, প্রদানকারী ও স্থায়িত্ব।',
      ),
      note(
        'Cookie inventory: to be completed after technical verification of the deployed website.',
        'কুকি তালিকা: ওয়েবসাইট চালু করার পর কারিগরি যাচাই শেষে সম্পন্ন করা হবে।',
      ),
    ],
  },
  {
    heading: bi('Cookie Consent and Preferences', 'কুকি সম্মতি ও পছন্দসমূহ'),
    blocks: [
      p(
        'Where required by applicable law, non-essential cookies will be activated only after the visitor has provided the necessary consent.',
        'প্রযোজ্য আইনে প্রয়োজন হলে, দর্শনার্থী প্রয়োজনীয় সম্মতি দেওয়ার পরেই কেবল অনাবশ্যক কুকি সক্রিয় করা হবে।',
      ),
      p(
        'Visitors will be able to manage relevant cookie preferences through the controls made available on the website, where implemented.',
        'যেখানে বাস্তবায়িত হয়েছে, সেখানে দর্শনার্থীরা ওয়েবসাইটে উপলব্ধ নিয়ন্ত্রণের মাধ্যমে প্রাসঙ্গিক কুকি পছন্দ পরিচালনা করতে পারবেন।',
      ),
    ],
  },
  {
    heading: bi('Managing Cookies Through Your Browser', 'আপনার ব্রাউজারের মাধ্যমে কুকি পরিচালনা'),
    blocks: [
      p(
        'Most web browsers allow users to view, block, or delete cookies through browser settings.',
        'অধিকাংশ ওয়েব ব্রাউজার ব্যবহারকারীদের ব্রাউজার সেটিংসের মাধ্যমে কুকি দেখা, ব্লক করা বা মুছে ফেলার সুযোগ দেয়।',
      ),
      p(
        'Disabling certain cookies may affect the functionality or performance of some website features.',
        'কিছু কুকি নিষ্ক্রিয় করলে ওয়েবসাইটের কিছু বৈশিষ্ট্যের কার্যকারিতা বা কার্যক্ষমতা প্রভাবিত হতে পারে।',
      ),
    ],
  },
  {
    heading: bi('Third-Party Technologies', 'তৃতীয় পক্ষের প্রযুক্তি'),
    blocks: [
      p(
        'Some website functions may depend on external services, such as hosting, security, embedded content, or analytics providers.',
        'ওয়েবসাইটের কিছু কার্যকারিতা বাহ্যিক পরিষেবার ওপর নির্ভর করতে পারে, যেমন হোস্টিং, নিরাপত্তা, এমবেডেড কনটেন্ট বা অ্যানালিটিক্স প্রদানকারী।',
      ),
      p(
        'Where these services place cookies or use similar technologies, ReadyMynd will review their purposes and disclose relevant information in this policy.',
        'যেখানে এই পরিষেবাগুলো কুকি স্থাপন করে বা অনুরূপ প্রযুক্তি ব্যবহার করে, সেখানে ReadyMynd সেগুলোর উদ্দেশ্য পর্যালোচনা করবে এবং এই নীতিমালায় প্রাসঙ্গিক তথ্য প্রকাশ করবে।',
      ),
    ],
  },
  {
    heading: bi('Changes to This Policy', 'এই নীতিমালার পরিবর্তন'),
    blocks: [
      p(
        'ReadyMynd may revise this Cookie Policy when website technologies, service providers, or applicable requirements change. The updated policy will be published on this page.',
        'ওয়েবসাইটের প্রযুক্তি, পরিষেবা প্রদানকারী বা প্রযোজ্য প্রয়োজনীয়তা বদলালে ReadyMynd এই কুকি নীতিমালা সংশোধন করতে পারে। হালনাগাদ নীতিমালা এই পাতায় প্রকাশ করা হবে।',
      ),
    ],
  },
  {
    heading: bi('Contact', 'যোগাযোগ'),
    blocks: [
      p(
        'For questions about website cookies or related technologies, please contact:',
        'ওয়েবসাইটের কুকি বা সংশ্লিষ্ট প্রযুক্তি নিয়ে প্রশ্ন থাকলে যোগাযোগ করুন:',
      ),
      list([
        bi('ReadyMynd', 'ReadyMynd'),
        bi(`Email: ${site.email}`, `ইমেইল: ${site.email}`),
        bi(`Location: ${site.location}`, `অবস্থান: ${site.location}`),
        bi(`Website: ${site.url}`, `ওয়েবসাইট: ${site.url}`),
      ]),
    ],
  },
];
