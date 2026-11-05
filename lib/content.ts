/**
 * Shared, approved v1.8 content fragments reused across pages.
 * Source: docs/ReadyMynd Website Content v1.8.docx
 *
 * Text fields are bilingual `{ en, bn }`. Resolve them with `tx()` from
 * `useI18n()`. Insight article bodies and takeaways are English-only for now
 * (long-form editorial awaiting review); the UI surfaces an `englishOnly`
 * notice on those pages when Bengali is selected.
 */

export type Bi = { en: string; bn: string };

export type Dimension = {
  id: string;
  index: string;
  title: Bi;
  summary: Bi;
  detail: Bi;
  examines: Bi[];
};

export const dimensions: Dimension[] = [
  {
    id: 'manual-data',
    index: '01',
    title: { en: 'Manual Data & Information', bn: 'ম্যানুয়াল তথ্য ও তথ্য-সামগ্রী' },
    summary: {
      en: 'Availability, completeness and accessibility of manually maintained product information.',
      bn: 'ম্যানুয়ালি সংরক্ষিত পণ্য-তথ্যের প্রাপ্যতা, সম্পূর্ণতা ও প্রবেশাধিকার।',
    },
    detail: {
      en: 'Most factories still hold a meaningful share of product truth in paper Tech Packs, printed specifications, whiteboards and personal files. This dimension examines whether that information can actually be located, completed and used when a buyer asks for it.',
      bn: 'অধিকাংশ কারখানায় পণ্য-সংক্রান্ত সত্যের একটি বড় অংশ এখনো কাগজের টেক প্যাক, ছাপা স্পেসিফিকেশন, হোয়াইটবোর্ড ও ব্যক্তিগত ফাইলে থাকে। এই মাত্রায় দেখা হয়, ক্রেতা চাইলে সেই তথ্য সত্যিই খুঁজে পাওয়া, সম্পূর্ণ করা ও ব্যবহার করা যায় কি না।',
    },
    examines: [
      { en: 'Where manually maintained product information physically lives', bn: 'ম্যানুয়ালি সংরক্ষিত পণ্য-তথ্য আসলে কোথায় থাকে' },
      { en: 'Whether records are complete for the selected style', bn: 'নির্বাচিত স্টাইলের জন্য রেকর্ড সম্পূর্ণ কি না' },
      { en: 'How quickly information can be retrieved on request', bn: 'চাওয়ার পর কত দ্রুত তথ্য খুঁজে পাওয়া যায়' },
      { en: 'Dependency on individual knowledge holders', bn: 'নির্দিষ্ট ব্যক্তির জ্ঞানের ওপর নির্ভরতা' },
    ],
  },
  {
    id: 'digital-data',
    index: '02',
    title: { en: 'Digital Data & Information', bn: 'ডিজিটাল তথ্য ও তথ্য-সামগ্রী' },
    summary: {
      en: 'Digital information availability, quality, accessibility and supporting system capabilities.',
      bn: 'ডিজিটাল তথ্যের প্রাপ্যতা, মান, প্রবেশাধিকার এবং সহায়ক সিস্টেমের সক্ষমতা।',
    },
    detail: {
      en: 'Digital records are only useful when they are current, consistent and reachable. This dimension examines the quality and accessibility of digital product information and whether the supporting systems can hold what the business expects of them.',
      bn: 'ডিজিটাল রেকর্ড তখনই কাজে লাগে যখন তা হালনাগাদ, সামঞ্জস্যপূর্ণ এবং প্রবেশযোগ্য। এই মাত্রায় ডিজিটাল পণ্য-তথ্যের মান ও প্রবেশাধিকার, এবং সহায়ক সিস্টেমগুলো ব্যবসার প্রত্যাশা ধরে রাখতে পারে কি না — তা পরীক্ষা করা হয়।',
    },
    examines: [
      { en: 'Digital availability of specifications, BOMs and records', bn: 'স্পেসিফিকেশন, বিওএম ও রেকর্ডের ডিজিটাল প্রাপ্যতা' },
      { en: 'Consistency between duplicate copies of the same data', bn: 'একই তথ্যের নকল কপিগুলোর মধ্যে সামঞ্জস্য' },
      { en: 'Accessibility across departments and roles', bn: 'বিভাগ ও ভূমিকা জুড়ে প্রবেশাধিকার' },
      { en: 'Capability limits of the systems in use', bn: 'ব্যবহৃত সিস্টেমগুলোর সক্ষমতার সীমা' },
    ],
  },
  {
    id: 'integration',
    index: '03',
    title: { en: 'Data & System Integration', bn: 'তথ্য ও সিস্টেম সংযোজন' },
    summary: {
      en: 'Connectivity, information exchange and interoperability.',
      bn: 'সংযোগ, তথ্য বিনিময় ও আন্তঃকার্যক্ষমতা।',
    },
    detail: {
      en: 'Product information rarely sits in one place. This dimension examines how information moves — or fails to move — between merchandising, sourcing, production, quality and compliance systems.',
      bn: 'পণ্য-তথ্য খুব কমই এক জায়গায় থাকে। এই মাত্রায় দেখা হয় তথ্য মার্চেন্ডাইজিং, সোর্সিং, উৎপাদন, মান ও কমপ্লায়েন্স সিস্টেমের মধ্যে কীভাবে চলাচল করে — কিংবা করে না।',
    },
    examines: [
      { en: 'Handover points between departments', bn: 'বিভাগগুলোর মধ্যে হস্তান্তর বিন্দু' },
      { en: 'Manual re-keying and its error exposure', bn: 'ম্যানুয়াল পুনঃএন্ট্রি এবং এর ভুলের ঝুঁকি' },
      { en: 'Interfaces between ERP, PLM, spreadsheets and files', bn: 'ইআরপি, পিএলএম, স্প্রেডশিট ও ফাইলের মধ্যে ইন্টারফেস' },
      { en: 'Exchange with suppliers and external partners', bn: 'সরবরাহকারী ও বাহ্যিক অংশীদারদের সাথে বিনিময়' },
    ],
  },
  {
    id: 'validation',
    index: '04',
    title: {
      en: 'Data Validation, Verification & Auditability',
      bn: 'তথ্য যাচাই, প্রমাণীকরণ ও নিরীক্ষাযোগ্যতা',
    },
    summary: {
      en: 'Information reliability, supporting evidence, validation controls and audit trails.',
      bn: 'তথ্যের নির্ভরযোগ্যতা, সমর্থনকারী প্রমাণ, যাচাই নিয়ন্ত্রণ ও নিরীক্ষা-চিহ্ন।',
    },
    detail: {
      en: 'A claim is only as strong as the evidence behind it. This dimension examines whether reported information can be substantiated, whether checks exist before information leaves the factory, and whether decisions leave a trace.',
      bn: 'একটি দাবি তার পেছনের প্রমাণের সমানই শক্তিশালী। এই মাত্রায় দেখা হয় প্রতিবেদিত তথ্য প্রমাণ করা যায় কি না, কারখানা থেকে তথ্য বের হওয়ার আগে কোনো যাচাই আছে কি না, এবং সিদ্ধান্তের কোনো চিহ্ন থাকে কি না।',
    },
    examines: [
      { en: 'Availability of supporting evidence per data field', bn: 'প্রতিটি তথ্য-ক্ষেত্রের জন্য সমর্থনকারী প্রমাণের প্রাপ্যতা' },
      { en: 'Validation and approval controls before submission', bn: 'জমা দেওয়ার আগে যাচাই ও অনুমোদনের নিয়ন্ত্রণ' },
      { en: 'Version history and change traceability', bn: 'সংস্করণ ইতিহাস ও পরিবর্তনের ট্রেসেবিলিটি' },
      { en: 'Auditability of information shared with buyers', bn: 'ক্রেতাদের সাথে শেয়ার করা তথ্যের নিরীক্ষাযোগ্যতা' },
    ],
  },
  {
    id: 'governance',
    index: '05',
    title: { en: 'Data Governance', bn: 'তথ্য শাসন' },
    summary: {
      en: 'Information ownership, accountability, maintenance, access and integrity.',
      bn: 'তথ্যের মালিকানা, জবাবদিহিতা, রক্ষণাবেক্ষণ, প্রবেশাধিকার ও অখণ্ডতা।',
    },
    detail: {
      en: 'Sustainable readiness depends on clear accountability. This dimension examines who owns which information, how it is maintained over time, who may access it, and how integrity is protected.',
      bn: 'টেকসই প্রস্তুতি নির্ভর করে স্পষ্ট জবাবদিহিতার ওপর। এই মাত্রায় দেখা হয় কে কোন তথ্যের মালিক, সময়ের সাথে সাথে তা কীভাবে রক্ষণাবেক্ষণ করা হয়, কে এতে প্রবেশ করতে পারে এবং অখণ্ডতা কীভাবে রক্ষা হয়।',
    },
    examines: [
      { en: 'Named ownership of critical product information', bn: 'গুরুত্বপূর্ণ পণ্য-তথ্যের নামাঙ্কিত মালিকানা' },
      { en: 'Maintenance routines and update responsibility', bn: 'রক্ষণাবেক্ষণ রুটিন ও হালনাগাদের দায়িত্ব' },
      { en: 'Access control and confidentiality practice', bn: 'প্রবেশাধিকার নিয়ন্ত্রণ ও গোপনীয়তা অনুশীলন' },
      { en: 'Integrity protection across the information lifecycle', bn: 'তথ্য-জীবনচক্র জুড়ে অখণ্ডতা সুরক্ষা' },
    ],
  },
];

export type ProcessStep = { index: string; title: Bi; body: Bi };

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: { en: 'Define Assessment Scope', bn: 'মূল্যায়নের পরিধি নির্ধারণ' },
    body: {
      en: 'Select one representative product, confirm one physical factory and identify applicable functions, information sources and responsibilities.',
      bn: 'একটি প্রতিনিধিত্বমূলক পণ্য নির্বাচন করুন, একটি নির্দিষ্ট কারখানা নিশ্চিত করুন এবং প্রাসঙ্গিক কার্যক্রম, তথ্য-উৎস ও দায়িত্ব চিহ্নিত করুন।',
    },
  },
  {
    index: '02',
    title: { en: 'Collect Information & Evidence', bn: 'তথ্য ও প্রমাণ সংগ্রহ' },
    body: {
      en: 'Use software-supported questionnaires, discussions and available records to collect relevant assessment information.',
      bn: 'সফটওয়্যার-সমর্থিত প্রশ্নপত্র, আলোচনা এবং উপলব্ধ রেকর্ড ব্যবহার করে প্রাসঙ্গিক মূল্যায়ন তথ্য সংগ্রহ করুন।',
    },
  },
  {
    index: '03',
    title: { en: 'Evaluate Digital Readiness', bn: 'ডিজিটাল প্রস্তুতি মূল্যায়ন' },
    body: {
      en: 'Examine applicable functions across the five assessment dimensions. The software supports scoring, while Enterprise Analysts assess the information and evidence.',
      bn: 'পাঁচটি মূল্যায়ন মাত্রায় প্রাসঙ্গিক কার্যক্রম পরীক্ষা করুন। সফটওয়্যার স্কোরিংয়ে সহায়তা করে, আর এন্টারপ্রাইজ বিশ্লেষকরা তথ্য ও প্রমাণ মূল্যায়ন করেন।',
    },
  },
  {
    index: '04',
    title: { en: 'Identify Gaps & Priorities', bn: 'ঘাটতি ও অগ্রাধিকার শনাক্তকরণ' },
    body: {
      en: 'Use software-supported gap analysis to identify weaknesses and dependencies. Analysts interpret their significance and determine improvement priorities.',
      bn: 'দুর্বলতা ও নির্ভরতা শনাক্ত করতে সফটওয়্যার-সমর্থিত ঘাটতি বিশ্লেষণ ব্যবহার করুন। বিশ্লেষকরা সেগুলোর তাৎপর্য ব্যাখ্যা করে উন্নয়নের অগ্রাধিকার নির্ধারণ করেন।',
    },
  },
  {
    index: '05',
    title: { en: 'Report Findings & Recommendations', bn: 'ফলাফল ও সুপারিশ প্রতিবেদন' },
    body: {
      en: 'Generate structured reporting outputs through the assessment software. Analysts review the results, develop recommendations and prepare a proposed 90-day action plan.',
      bn: 'মূল্যায়ন সফটওয়্যারের মাধ্যমে কাঠামোবদ্ধ প্রতিবেদন তৈরি করুন। বিশ্লেষকরা ফলাফল পর্যালোচনা করেন, সুপারিশ গঠন করেন এবং প্রস্তাবিত ৯০ দিনের কর্মপরিকল্পনা প্রস্তুত করেন।',
    },
  },
];

export const factoryTypes: { title: Bi; body: Bi }[] = [
  {
    title: { en: 'Garment Manufacturing Factories', bn: 'পোশাক উৎপাদন কারখানা' },
    body: {
      en: 'Knitwear, woven garments, denim, sweaters and other apparel products.',
      bn: 'নিটওয়্যার, ওভেন পোশাক, ডেনিম, সোয়েটার ও অন্যান্য পোশাকজাত পণ্য।',
    },
  },
  {
    title: { en: 'Knitwear Manufacturing Factories', bn: 'নিটওয়্যার উৎপাদন কারখানা' },
    body: { en: 'Facilities specializing in knitted apparel production.', bn: 'নিটেড পোশাক উৎপাদনে বিশেষায়িত প্রতিষ্ঠান।' },
  },
  {
    title: { en: 'Spinning Mills', bn: 'স্পিনিং মিল' },
    body: { en: 'Yarn manufacturing operations.', bn: 'সুতা উৎপাদন কার্যক্রম।' },
  },
  {
    title: { en: 'Knitting Mills', bn: 'নিটিং মিল' },
    body: { en: 'Knitted fabric manufacturing operations.', bn: 'নিটেড কাপড় উৎপাদন কার্যক্রম।' },
  },
  {
    title: { en: 'Weaving Mills', bn: 'উইভিং মিল' },
    body: { en: 'Woven fabric manufacturing operations.', bn: 'ওভেন কাপড় উৎপাদন কার্যক্রম।' },
  },
  {
    title: { en: 'Dyeing & Finishing Facilities', bn: 'ডাইং ও ফিনিশিং ইউনিট' },
    body: { en: 'Textile processing and finishing operations.', bn: 'টেক্সটাইল প্রক্রিয়াকরণ ও ফিনিশিং কার্যক্রম।' },
  },
  {
    title: { en: 'Fabric Manufacturing Facilities', bn: 'কাপড় উৎপাদন কারখানা' },
    body: { en: 'Manufacturers producing textile fabrics.', bn: 'টেক্সটাইল কাপড় উৎপাদনকারী প্রতিষ্ঠান।' },
  },
  {
    title: { en: 'Composite Textile Mills', bn: 'কম্পোজিট টেক্সটাইল মিল' },
    body: {
      en: 'Integrated facilities combining multiple textile manufacturing activities.',
      bn: 'একাধিক টেক্সটাইল উৎপাদন কার্যক্রম একত্রিত করা সমন্বিত প্রতিষ্ঠান।',
    },
  },
];

export const reportOutputs: { title: Bi; body: Bi }[] = [
  {
    title: { en: 'Assessment Scope & Functional Coverage', bn: 'মূল্যায়নের পরিধি ও কার্যক্রমিক কভারেজ' },
    body: {
      en: 'The agreed product, facility, functions and information sources examined.',
      bn: 'সম্মত পণ্য, প্রতিষ্ঠান, কার্যক্রম ও পরীক্ষিত তথ্য-উৎস।',
    },
  },
  {
    title: { en: 'Overall Digital Readiness Findings and Score', bn: 'সার্বিক ডিজিটাল প্রস্তুতির ফলাফল ও স্কোর' },
    body: {
      en: 'A single management-level view of current digital readiness.',
      bn: 'বর্তমান ডিজিটাল প্রস্তুতির একটি ব্যবস্থাপনা-স্তরের চিত্র।',
    },
  },
  {
    title: { en: 'Function-Wise Findings and Scores', bn: 'কার্যক্রম-ভিত্তিক ফলাফল ও স্কোর' },
    body: {
      en: 'Results broken down by the factory functions included in scope.',
      bn: 'পরিধিভুক্ত কারখানার কার্যক্রম অনুযায়ী বিভাজিত ফলাফল।',
    },
  },
  {
    title: { en: 'Five-Dimension Readiness Results', bn: 'পাঁচ-মাত্রিক প্রস্তুতির ফলাফল' },
    body: {
      en: 'Performance across manual data, digital data, integration, validation and governance.',
      bn: 'ম্যানুয়াল তথ্য, ডিজিটাল তথ্য, সংযোজন, যাচাই ও শাসন জুড়ে কর্মদক্ষতা।',
    },
  },
  {
    title: { en: 'Digital Gaps & Cross-Functional Dependencies', bn: 'ডিজিটাল ঘাটতি ও আন্তঃকার্যক্রমিক নির্ভরতা' },
    body: {
      en: 'Weaknesses that span departments and cannot be fixed by one team alone.',
      bn: 'এমন দুর্বলতা যা একাধিক বিভাগ জুড়ে বিস্তৃত এবং একক দল দিয়ে সমাধান করা যায় না।',
    },
  },
  {
    title: { en: 'Prioritised Improvement Recommendations', bn: 'অগ্রাধিকারভিত্তিক উন্নয়ন সুপারিশ' },
    body: {
      en: 'Improvement actions ordered by significance and practicality.',
      bn: 'তাৎপর্য ও বাস্তবায়নযোগ্যতা অনুযায়ী সাজানো উন্নয়ন পদক্ষেপ।',
    },
  },
  {
    title: { en: 'Proposed 90-Day Action Plan', bn: 'প্রস্তাবিত ৯০ দিনের কর্মপরিকল্পনা' },
    body: {
      en: 'A sequenced, realistic plan for the first improvement cycle.',
      bn: 'প্রথম উন্নয়ন চক্রের জন্য একটি ধারাবাহিক, বাস্তবসম্মত পরিকল্পনা।',
    },
  },
];

export const assessmentBenefits: { title: Bi; body: Bi }[] = [
  {
    title: { en: 'Strengthen Buyer Readiness', bn: 'ক্রেতা-প্রস্তুতি শক্তিশালীকরণ' },
    body: {
      en: 'Understand the ability to respond to emerging product-information requests.',
      bn: 'উদীয়মান পণ্য-তথ্য সংক্রান্ত অনুরোধের জবাব দেওয়ার সক্ষমতা বোঝা।',
    },
  },
  {
    title: { en: 'Improve Investment Decisions', bn: 'বিনিয়োগ সিদ্ধান্ত উন্নতকরণ' },
    body: {
      en: 'Identify capability gaps before selecting additional technologies.',
      bn: 'নতুন প্রযুক্তি নির্বাচনের আগেই সক্ষমতার ঘাটতি শনাক্ত করা।',
    },
  },
  {
    title: { en: 'Avoid Unnecessary Costs', bn: 'অপ্রয়োজনীয় খরচ এড়ানো' },
    body: {
      en: 'Recognize opportunities to improve or reuse existing information and systems.',
      bn: 'বিদ্যমান তথ্য ও সিস্টেম উন্নত বা পুনঃব্যবহারের সুযোগ চিহ্নিত করা।',
    },
  },
  {
    title: { en: 'Increase Management Visibility', bn: 'ব্যবস্থাপনার দৃশ্যমানতা বৃদ্ধি' },
    body: {
      en: 'Understand weaknesses and dependencies across relevant departments.',
      bn: 'প্রাসঙ্গিক বিভাগগুলোর দুর্বলতা ও নির্ভরতা বোঝা।',
    },
  },
  {
    title: { en: 'Support Competitiveness', bn: 'প্রতিযোগিতায় সহায়তা' },
    body: {
      en: 'Develop information capabilities relevant to changing market expectations.',
      bn: 'বদলানো বাজার প্রত্যাশার সাথে প্রাসঙ্গিক তথ্য-সক্ষমতা গড়ে তোলা।',
    },
  },
  {
    title: { en: 'Prioritise Improvements', bn: 'উন্নয়নে অগ্রাধিকার নির্ধারণ' },
    body: {
      en: 'Direct attention and resources toward the most important assessed gaps.',
      bn: 'সবচেয়ে গুরুত্বপূর্ণ মূল্যায়িত ঘাটতির দিকে মনোযোগ ও সম্পদ পরিচালিত করা।',
    },
  },
];

export const advisoryAreas: {
  index: string;
  title: Bi;
  subtitle: Bi;
  body: Bi;
  points: Bi[];
}[] = [
  {
    index: '01',
    title: { en: 'Data Advisory', bn: 'তথ্য পরামর্শ' },
    subtitle: { en: 'Improve the Readiness of Textile DPP Information', bn: 'টেক্সটাইল ডিপিপি তথ্যের প্রস্তুতি উন্নতকরণ' },
    body: {
      en: 'Examine product-data structure, completeness, quality, accessibility and management requirements. Identify technical improvements needed to make relevant information more usable and reliable.',
      bn: 'পণ্য-তথ্যের কাঠামো, সম্পূর্ণতা, মান, প্রবেশাধিকার ও ব্যবস্থাপনা শর্ত পরীক্ষা করা। প্রাসঙ্গিক তথ্য আরও ব্যবহারযোগ্য ও নির্ভরযোগ্য করতে প্রয়োজনীয় কারিগরি উন্নয়ন শনাক্ত করা।',
    },
    points: [
      { en: 'Product data structure and field definition', bn: 'পণ্য-তথ্যের কাঠামো ও ক্ষেত্র সংজ্ঞা' },
      { en: 'Completeness and quality of DPP-relevant information', bn: 'ডিপিপি-প্রাসঙ্গিক তথ্যের সম্পূর্ণতা ও মান' },
      { en: 'Accessibility and retrieval for buyer requests', bn: 'ক্রেতার অনুরোধে প্রবেশাধিকার ও পুনরুদ্ধার' },
      { en: 'Management requirements and update routines', bn: 'ব্যবস্থাপনা শর্ত ও হালনাগাদ রুটিন' },
    ],
  },
  {
    index: '02',
    title: { en: 'Digital Systems Advisory', bn: 'ডিজিটাল সিস্টেম পরামর্শ' },
    subtitle: { en: 'Evaluate and Plan Suitable Digital Systems', bn: 'উপযুক্ত ডিজিটাল সিস্টেম মূল্যায়ন ও পরিকল্পনা' },
    body: {
      en: 'Examine application capabilities, technical limitations and system requirements. Help management evaluate suitable digital system options based on assessed needs.',
      bn: 'অ্যাপ্লিকেশনের সক্ষমতা, কারিগরি সীমাবদ্ধতা ও সিস্টেম শর্ত পরীক্ষা করা। মূল্যায়িত প্রয়োজনের ভিত্তিতে উপযুক্ত ডিজিটাল সিস্টেম বিকল্প মূল্যায়নে ব্যবস্থাপনাকে সাহায্য করা।',
    },
    points: [
      { en: 'Capability of applications currently in use', bn: 'বর্তমানে ব্যবহৃত অ্যাপ্লিকেশনের সক্ষমতা' },
      { en: 'Technical limitations blocking readiness', bn: 'প্রস্তুতিতে বাধা দিচ্ছে এমন কারিগরি সীমাবদ্ধতা' },
      { en: 'System requirements derived from assessment findings', bn: 'মূল্যায়নের ফলাফল থেকে উদ্ভূত সিস্টেম শর্ত' },
      { en: 'Vendor-neutral option evaluation', bn: 'ভেন্ডর-নিরপেক্ষ বিকল্প মূল্যায়ন' },
    ],
  },
  {
    index: '03',
    title: { en: 'System Integration Advisory', bn: 'সিস্টেম সংযোজন পরামর্শ' },
    subtitle: { en: 'Connect Data Across Systems and Organizations', bn: 'সিস্টেম ও প্রতিষ্ঠান জুড়ে তথ্য সংযুক্তকরণ' },
    body: {
      en: 'Examine interfaces, connectivity, interoperability and data exchange requirements. Help factories plan technical integration between relevant internal applications and external information partners.',
      bn: 'ইন্টারফেস, সংযোগ, আন্তঃকার্যক্ষমতা ও তথ্য বিনিময়ের শর্ত পরীক্ষা করা। প্রাসঙ্গিক অভ্যন্তরীণ অ্যাপ্লিকেশন ও বাহ্যিক তথ্য-অংশীদারদের মধ্যে কারিগরি সংযোজন পরিকল্পনায় কারখানাকে সাহায্য করা।',
    },
    points: [
      { en: 'Interface and connectivity assessment', bn: 'ইন্টারফেস ও সংযোগ মূল্যায়ন' },
      { en: 'Interoperability between internal applications', bn: 'অভ্যন্তরীণ অ্যাপ্লিকেশনের মধ্যে আন্তঃকার্যক্ষমতা' },
      { en: 'Data exchange with suppliers and buyers', bn: 'সরবরাহকারী ও ক্রেতাদের সাথে তথ্য বিনিময়' },
      { en: 'Integration sequencing and prerequisites', bn: 'সংযোজনের ধারাবাহিকতা ও পূর্বশর্ত' },
    ],
  },
];

export const advisoryPrinciples: { title: Bi; body: Bi }[] = [
  {
    title: { en: 'Assessment Prerequisite', bn: 'মূল্যায়ন পূর্বশর্ত' },
    body: {
      en: 'A completed paid ReadyMynd assessment is required.',
      bn: 'একটি সম্পন্ন, অর্থপ্রদত্ত ReadyMynd মূল্যায়ন প্রয়োজন।',
    },
  },
  {
    title: { en: 'Technical Scope', bn: 'কারিগরি পরিধি' },
    body: {
      en: 'Advisory is limited to Data, Digital Systems and System Integration.',
      bn: 'পরামর্শ সীমিত থাকে তথ্য, ডিজিটাল সিস্টেম ও সিস্টেম সংযোজনের মধ্যে।',
    },
  },
  {
    title: { en: 'Vendor Neutrality', bn: 'ভেন্ডর-নিরপেক্ষতা' },
    body: {
      en: 'Recommendations are not tied to a particular technology provider.',
      bn: 'কোনো নির্দিষ্ট প্রযুক্তি সরবরাহকারীর সাথে সুপারিশ যুক্ত নয়।',
    },
  },
  {
    title: { en: 'Evidence-Based Priorities', bn: 'প্রমাণ-ভিত্তিক অগ্রাধিকার' },
    body: {
      en: 'Work is driven by documented assessment findings and relevant technical requirements.',
      bn: 'নথিভুক্ত মূল্যায়নের ফলাফল ও প্রাসঙ্গিক কারিগরি শর্ত দ্বারা কাজ পরিচালিত হয়।',
    },
  },
  {
    title: { en: 'Separate Engagement', bn: 'পৃথক চুক্তি' },
    body: {
      en: 'Deliverables, duration and commercial terms are agreed independently.',
      bn: 'ফলাফল, সময়কাল ও বাণিজ্যিক শর্তাবলি স্বাধীনভাবে সম্মত হয়।',
    },
  },
];

export const evidenceSources: Bi[] = [
  { en: 'Tech Packs & Product Specifications', bn: 'টেক প্যাক ও পণ্য স্পেসিফিকেশন' },
  { en: 'Bills of Materials & Component Records', bn: 'বিল অব ম্যাটেরিয়ালস ও উপাদান রেকর্ড' },
  { en: 'Supplier & Facility Information', bn: 'সরবরাহকারী ও প্রতিষ্ঠানের তথ্য' },
  { en: 'Production & Quality Records', bn: 'উৎপাদন ও মান সংক্রান্ত রেকর্ড' },
  { en: 'Certificates & Compliance Documents', bn: 'সার্টিফিকেট ও কমপ্লায়েন্স কাগজপত্র' },
  { en: 'Spreadsheets, PDFs & Manual Records', bn: 'স্প্রেডশিট, পিডিএফ ও ম্যানুয়াল রেকর্ড' },
  { en: 'ERP, PLM & Other Relevant Digital Systems', bn: 'ইআরপি, পিএলএম ও অন্যান্য প্রাসঙ্গিক ডিজিটাল সিস্টেম' },
  { en: 'Sustainability & Traceability Information', bn: 'টেকসইতা ও ট্রেসেবিলিটি তথ্য' },
];

export const informationAreas: { title: Bi; body: Bi }[] = [
  {
    title: { en: 'Product Identification & Specifications', bn: 'পণ্য শনাক্তকরণ ও স্পেসিফিকেশন' },
    body: {
      en: 'Style, product identity and technical specification records.',
      bn: 'স্টাইল, পণ্যের পরিচয় ও কারিগরি স্পেসিফিকেশন রেকর্ড।',
    },
  },
  {
    title: { en: 'Materials, Components & Composition', bn: 'উপকরণ, উপাদান ও গঠন' },
    body: { en: 'Fibre, material and component composition information.', bn: 'ফাইবার, উপকরণ ও উপাদানের গঠন সংক্রান্ত তথ্য।' },
  },
  {
    title: { en: 'Suppliers, Facilities & Supply Chain Traceability', bn: 'সরবরাহকারী, প্রতিষ্ঠান ও সাপ্লাই-চেইন ট্রেসেবিলিটি' },
    body: {
      en: 'Supplier identity, facility mapping and chain-of-custody records.',
      bn: 'সরবরাহকারীর পরিচয়, প্রতিষ্ঠান মানচিত্র এবং হেফাজত-শৃঙ্খল রেকর্ড।',
    },
  },
  {
    title: { en: 'Manufacturing & Quality Information', bn: 'উৎপাদন ও মান সংক্রান্ত তথ্য' },
    body: {
      en: 'Production, inspection and quality assurance records.',
      bn: 'উৎপাদন, পরিদর্শন ও মান নিশ্চয়তা রেকর্ড।',
    },
  },
  {
    title: { en: 'Environmental & Sustainability Information', bn: 'পরিবেশ ও টেকসইতা সংক্রান্ত তথ্য' },
    body: {
      en: 'Environmental performance data and supporting declarations.',
      bn: 'পরিবেশগত কর্মদক্ষতার তথ্য ও সমর্থনকারী ঘোষণা।',
    },
  },
  {
    title: { en: 'Compliance & Supporting Evidence', bn: 'কমপ্লায়েন্স ও সমর্থনকারী প্রমাণ' },
    body: {
      en: 'Certificates, test reports and compliance documentation.',
      bn: 'সার্টিফিকেট, পরীক্ষা প্রতিবেদন ও কমপ্লায়েন্স ডকুমেন্টেশন।',
    },
  },
  {
    title: { en: 'Durability, Care, Repair & Circularity', bn: 'স্থায়িত্ব, যত্ন, মেরামত ও বৃত্তাকারতা' },
    body: {
      en: 'Product lifespan, care, repairability and circularity information.',
      bn: 'পণ্যের আয়ু, যত্ন, মেরামতযোগ্যতা ও বৃত্তাকারতা সংক্রান্ত তথ্য।',
    },
  },
  {
    title: { en: 'Reuse, Recycling & End-of-Life Information', bn: 'পুনঃব্যবহার, রিসাইক্লিং ও জীবনান্ত তথ্য' },
    body: {
      en: 'End-of-life handling, reuse and recycling guidance.',
      bn: 'জীবনান্ত সামলানো, পুনঃব্যবহার ও রিসাইক্লিং নির্দেশনা।',
    },
  },
];

export const commitments: { title: Bi; body: Bi }[] = [
  {
    title: { en: 'Independent Assessment', bn: 'স্বাধীন মূল্যায়ন' },
    body: {
      en: 'Findings reflect the agreed scope, available information, supporting evidence and professional evaluation.',
      bn: 'ফলাফল প্রতিফলিত করে সম্মত পরিধি, উপলব্ধ তথ্য, সমর্থনকারী প্রমাণ ও পেশাদার মূল্যায়ন।',
    },
  },
  {
    title: { en: 'Vendor Neutrality', bn: 'ভেন্ডর-নিরপেক্ষতা' },
    body: {
      en: 'Recommendations are not influenced by an obligation to sell a particular technology.',
      bn: 'কোনো নির্দিষ্ট প্রযুক্তি বিক্রির বাধ্যবাধকতা সুপারিশকে প্রভাবিত করে না।',
    },
  },
  {
    title: { en: 'Confidentiality', bn: 'গোপনীয়তা' },
    body: {
      en: 'Factory information is handled according to agreed confidentiality arrangements.',
      bn: 'কারখানার তথ্য সম্মত গোপনীয়তা ব্যবস্থা অনুযায়ী সামলানো হয়।',
    },
  },
  {
    title: { en: 'Transparent Service Boundaries', bn: 'স্বচ্ছ সেবা-সীমা' },
    body: {
      en: 'We do not certify DPP compliance, endorse products or act as a software implementation vendor.',
      bn: 'আমরা ডিপিপি সম্মতি সার্টিফিকেট দিই না, পণ্য অনুমোদন করি না, কিংবা সফটওয়্যার বাস্তবায়ন বিক্রেতা হিসেবে কাজ করি না।',
    },
  },
  {
    title: { en: 'Responsible Reporting', bn: 'দায়িত্বশীল প্রতিবেদন' },
    body: {
      en: 'We communicate assessment limitations and avoid guaranteeing regulatory or commercial outcomes.',
      bn: 'আমরা মূল্যায়নের সীমাবদ্ধতা স্পষ্টভাবে জানাই এবং নিয়ন্ত্রক বা বাণিজ্যিক ফলাফলের নিশ্চয়তা দেওয়া এড়াই।',
    },
  },
];

export const capabilities: { title: Bi; body: Bi }[] = [
  {
    title: { en: 'Bangladesh Origin & Local Presence', bn: 'বাংলাদেশে উৎপত্তি ও স্থানীয় উপস্থিতি' },
    body: {
      en: 'Our Bangladesh-based operations support direct engagement with factory management and relevant departments. This local focus helps us understand the practical context in which information is maintained and shared.',
      bn: 'বাংলাদেশভিত্তিক আমাদের কার্যক্রম কারখানা ব্যবস্থাপনা ও প্রাসঙ্গিক বিভাগের সাথে সরাসরি যোগাযোগ সহজ করে। এই স্থানীয় মনোযোগের কারণে তথ্য কোন বাস্তব পরিবেশে সংরক্ষিত ও শেয়ার করা হয়, তা আমরা বুঝতে পারি।',
    },
  },
  {
    title: { en: 'Enterprise Analysis & Digital Strategy', bn: 'এন্টারপ্রাইজ বিশ্লেষণ ও ডিজিটাল কৌশল' },
    body: {
      en: 'Our professional approach draws on enterprise analysis, digital systems understanding and technical evaluation to identify capability gaps and practical improvement opportunities.',
      bn: 'আমাদের পেশাদার পদ্ধতিতে এন্টারপ্রাইজ বিশ্লেষণ, ডিজিটাল সিস্টেম বোঝাপড়া ও কারিগরি মূল্যায়ন ব্যবহার করে সক্ষমতার ঘাটতি এবং বাস্তবসম্মত উন্নয়ন সুযোগ শনাক্ত করা হয়।',
    },
  },
  {
    title: { en: 'Locally Developed Assessment Software', bn: 'দেশেই তৈরি মূল্যায়ন সফটওয়্যার' },
    body: {
      en: 'ReadyMynd has developed its own Textile DPP Digital Readiness Assessment software, supporting structured questionnaires, scoring, gap analysis and report generation.',
      bn: 'ReadyMynd নিজস্ব টেক্সটাইল ডিপিপি ডিজিটাল প্রস্তুতি মূল্যায়ন সফটওয়্যার তৈরি করেছে, যা কাঠামোবদ্ধ প্রশ্নপত্র, স্কোরিং, ঘাটতি বিশ্লেষণ ও প্রতিবেদন তৈরিতে সহায়তা করে।',
    },
  },
  {
    title: {
      en: 'Understanding of Bangladesh Factory Information Environments',
      bn: 'বাংলাদেশের কারখানার তথ্য-পরিবেশ সম্পর্কে বোঝাপড়া',
    },
    body: {
      en: 'We recognize the different information environments of garment factories, textile mills, processing facilities and composite manufacturers, including the coexistence of manual records, spreadsheets and enterprise applications.',
      bn: 'পোশাক কারখানা, টেক্সটাইল মিল, প্রক্রিয়াকরণ ইউনিট ও কম্পোজিট উৎপাদকদের ভিন্ন ভিন্ন তথ্য-পরিবেশ আমরা বুঝি — যেখানে ম্যানুয়াল রেকর্ড, স্প্রেডশিট ও এন্টারপ্রাইজ অ্যাপ্লিকেশন একসাথে বিদ্যমান।',
    },
  },
  {
    title: { en: 'Professional Interpretation & Practical Recommendations', bn: 'পেশাদার ব্যাখ্যা ও ব্যবহারিক সুপারিশ' },
    body: {
      en: 'Our Enterprise Analysts interpret assessment results in the context of factory-provided information and available supporting evidence, developing recommendations relevant to the agreed scope.',
      bn: 'আমাদের এন্টারপ্রাইজ বিশ্লেষকরা কারখানার সরবরাহকৃত তথ্য ও উপলব্ধ সমর্থনকারী প্রমাণের প্রেক্ষাপটে মূল্যায়নের ফলাফল ব্যাখ্যা করেন এবং সম্মত পরিধির সাথে প্রাসঙ্গিক সুপারিশ তৈরি করেন।',
    },
  },
];

export const knowledgeTopics: { title: Bi; body: Bi; detail: Bi }[] = [
  {
    title: { en: 'EU Regulations & Policy Developments', bn: 'ইইউ নিয়ম ও নীতি উন্নয়ন' },
    body: { en: 'ESPR and textile-specific regulatory developments.', bn: 'ESPR ও টেক্সটাইল-নির্দিষ্ট নিয়ন্ত্রক উন্নয়ন।' },
    detail: {
      en: 'The Ecodesign for Sustainable Products Regulation establishes the framework for Digital Product Passports. This topic tracks the regulation itself, its product-group priorities and the implementing measures that shape textile-specific obligations.',
      bn: 'Ecodesign for Sustainable Products Regulation ডিজিটাল প্রোডাক্ট পাসপোর্টের কাঠামো প্রতিষ্ঠা করে। এই বিষয়ে নিয়মটি, এর পণ্যগোষ্ঠীর অগ্রাধিকার এবং টেক্সটাইল-নির্দিষ্ট বাধ্যবাধকতা গঠনকারী বাস্তবায়ন ব্যবস্থা অনুসরণ করা হয়।',
    },
  },
  {
    title: { en: 'JRC Research & Product Information', bn: 'JRC গবেষণা ও পণ্য-তথ্য' },
    body: { en: 'Preparatory research and emerging information requirements.', bn: 'প্রস্তুতিমূলক গবেষণা ও উদীয়মান তথ্য-শর্ত।' },
    detail: {
      en: 'Preparatory studies and technical research inform which product information fields may be required. This topic follows that work and translates it into practical preparation areas for manufacturers.',
      bn: 'প্রস্তুতিমূলক গবেষণা ও কারিগরি গবেষণা থেকে জানা যায় কোন কোন পণ্য-তথ্য ক্ষেত্র প্রয়োজন হতে পারে। এই বিষয়ে সেই কাজ অনুসরণ করে তা উৎপাদকদের জন্য বাস্তব প্রস্তুতি ক্ষেত্রে রূপান্তর করা হয়।',
    },
  },
  {
    title: { en: 'DPP Standards & Technical Infrastructure', bn: 'ডিপিপি মান ও কারিগরি অবকাঠামো' },
    body: { en: 'Product identification, interoperability and data exchange.', bn: 'পণ্য শনাক্তকরণ, আন্তঃকার্যক্ষমতা ও তথ্য বিনিময়।' },
    detail: {
      en: 'Product identifiers, data carriers, interoperability principles and exchange standards determine how passport information is carried and read. This topic covers the technical foundations suppliers will need to work with.',
      bn: 'পণ্য শনাক্তকারী, তথ্য বাহক, আন্তঃকার্যক্ষমতার নীতি ও বিনিময় মান নির্ধারণ করে পাসপোর্টের তথ্য কীভাবে বহন ও পড়া হবে। এই বিষয়ে সেই কারিগরি ভিত্তি কভার করা হয় যা সরবরাহকারীদের কাজে লাগবে।',
    },
  },
  {
    title: { en: 'Product Data & Information Management', bn: 'পণ্য-তথ্য ব্যবস্থাপনা' },
    body: { en: 'Product specifications, Tech Packs, BOMs and digital records.', bn: 'পণ্য স্পেসিফিকেশন, টেক প্যাক, বিওএম ও ডিজিটাল রেকর্ড।' },
    detail: {
      en: 'Passport information is assembled from records factories already hold. This topic covers the structure, quality and maintenance of Tech Packs, BOMs, specifications and supporting digital records.',
      bn: 'পাসপোর্টের তথ্য সেই সব রেকর্ড থেকে সংকলিত হয় যা কারখানার কাছে আগেই থাকে। এই বিষয়ে টেক প্যাক, বিওএম, স্পেসিফিকেশন ও সহায়ক ডিজিটাল রেকর্ডের কাঠামো, মান ও রক্ষণাবেক্ষণ আলোচিত হয়।',
    },
  },
  {
    title: { en: 'Supply Chain Traceability', bn: 'সাপ্লাই-চেইন ট্রেসেবিলিটি' },
    body: { en: 'Supplier information, facility identification and information exchange.', bn: 'সরবরাহকারীর তথ্য, প্রতিষ্ঠান শনাক্তকরণ ও তথ্য বিনিময়।' },
    detail: {
      en: 'Traceability connects information to the relevant product, materials, facilities and supply-chain activities. This topic covers supplier records, facility identification and upstream information exchange.',
      bn: 'ট্রেসেবিলিটি তথ্যকে সংশ্লিষ্ট পণ্য, উপকরণ, প্রতিষ্ঠান ও সাপ্লাই-চেইন কার্যক্রমের সাথে যুক্ত করে। এই বিষয়ে সরবরাহকারীর রেকর্ড, প্রতিষ্ঠান শনাক্তকরণ ও আপস্ট্রিম তথ্য বিনিময় কভার করা হয়।',
    },
  },
  {
    title: { en: 'Sustainability & Circularity', bn: 'টেকসইতা ও বৃত্তাকারতা' },
    body: {
      en: 'Environmental information, supporting evidence, durability, reuse and recycling.',
      bn: 'পরিবেশগত তথ্য, সমর্থনকারী প্রমাণ, স্থায়িত্ব, পুনঃব্যবহার ও রিসাইক্লিং।',
    },
    detail: {
      en: 'Environmental and circularity information is among the most evidence-dependent categories. This topic covers what suppliers may need to substantiate and how supporting evidence is assembled.',
      bn: 'পরিবেশ ও বৃত্তাকারতা সংক্রান্ত তথ্য সবচেয়ে বেশি প্রমাণ-নির্ভর বিভাগগুলোর মধ্যে একটি। এই বিষয়ে আলোচিত হয় সরবরাহকারীদের কী প্রমাণ করতে হতে পারে এবং সমর্থনকারী প্রমাণ কীভাবে সংকলিত হয়।',
    },
  },
  {
    title: { en: 'Bangladesh Textile DPP Readiness', bn: 'বাংলাদেশের টেক্সটাইল ডিপিপি প্রস্তুতি' },
    body: { en: 'Factory preparation, digital capabilities and local industry implications.', bn: 'কারখানার প্রস্তুতি, ডিজিটাল সক্ষমতা ও স্থানীয় শিল্পে প্রভাব।' },
    detail: {
      en: 'Local context matters. This topic covers how Bangladesh factories, mills and processing facilities can prepare, and what readiness looks like across the different information environments in the sector.',
      bn: 'স্থানীয় প্রেক্ষাপট গুরুত্বপূর্ণ। এই বিষয়ে আলোচিত হয় বাংলাদেশের কারখানা, মিল ও প্রক্রিয়াকরণ ইউনিটগুলো কীভাবে প্রস্তুতি নিতে পারে, এবং খাতের বিভিন্ন তথ্য-পরিবেশে প্রস্তুতি দেখতে কেমন।',
    },
  },
];

export type Insight = {
  slug: string;
  title: Bi;
  topic: Bi;
  excerpt: Bi;
  date: string;
  readTime: Bi;
  featured?: boolean;
  /** Path under /public. Rendered as the article's lead image. */
  image?: string;
  imageAlt?: Bi;
  author?: Bi;
  /** Free-form keywords; the browser searches these alongside title and excerpt. */
  tags?: Bi[];
  body: Bi[];
  takeaways: Bi[];
};

/** Default byline for articles that do not name a specific author. */
export const defaultAuthor: Bi = {
  en: 'ReadyMynd Enterprise Analysts',
  bn: 'ReadyMynd এন্টারপ্রাইজ বিশ্লেষকবৃন্দ',
};

export const insights: Insight[] = [
  {
    slug: 'what-espr-means-for-bangladesh-suppliers',
    title: {
      en: 'What the ESPR Framework Means for Bangladesh Suppliers',
      bn: 'ESPR কাঠামো বাংলাদেশের সরবরাহকারীদের জন্য কী বোঝায়',
    },
    topic: { en: 'EU Regulations & Policy Developments', bn: 'ইইউ নিয়ম ও নীতি উন্নয়ন' },
    excerpt: {
      en: 'Regulation (EU) 2024/1781 establishes the framework for Digital Product Passports, with textiles among the priority product groups. Legal responsibility may sit with the operator placing a product on the EU market — but the information itself sits with manufacturers. We explain where that leaves Bangladesh suppliers during the preparation window.',
      bn: 'Regulation (EU) 2024/1781 ডিজিটাল প্রোডাক্ট পাসপোর্টের কাঠামো প্রতিষ্ঠা করেছে, যেখানে টেক্সটাইল অগ্রাধিকারপ্রাপ্ত পণ্যগোষ্ঠীর মধ্যে রয়েছে। আইনি দায়িত্ব ইইউ বাজারে পণ্য স্থাপনকারীর ওপর থাকতে পারে — কিন্তু তথ্য থাকে উৎপাদকদের কাছে। প্রস্তুতির এই সময়ে বাংলাদেশের সরবরাহকারীরা কোথায় দাঁড়িয়ে আছেন, তা আমরা ব্যাখ্যা করেছি।',
    },
    date: '2026-09-07',
    readTime: { en: '6 min read', bn: '৬ মিনিটের পাঠ' },
    image: '/images/insights/what-espr-means-for-bangladesh-suppliers.jpg',
    imageAlt: {
      en: 'EU regulation documents beside folded textile samples',
      bn: 'ভাঁজ করা টেক্সটাইল নমুনার পাশে ইইউ বিধিমালার দলিল',
    },
    tags: [
      { en: 'ESPR', bn: 'ESPR' },
      { en: 'Regulation', bn: 'বিধিমালা' },
      { en: 'Suppliers', bn: 'সরবরাহকারী' },
    ],
    featured: true,
    body: [
      { en: 'Regulation (EU) 2024/1781 — the Ecodesign for Sustainable Products Regulation — establishes the framework for introducing Digital Product Passports across covered product groups. Textiles and apparel are named among the priority groups, which is why the topic has moved from sustainability conferences into sourcing conversations.', bn: 'Regulation (EU) 2024/1781 — টেকসই পণ্যের জন্য ইকোডিজাইন বিধিমালা — অন্তর্ভুক্ত পণ্যগোষ্ঠীগুলোতে ডিজিটাল প্রোডাক্ট পাসপোর্ট চালুর কাঠামো প্রতিষ্ঠা করেছে। টেক্সটাইল ও পোশাককে অগ্রাধিকারপ্রাপ্ত গোষ্ঠীর মধ্যে উল্লেখ করা হয়েছে, আর এ কারণেই বিষয়টি টেকসইতার সম্মেলন থেকে সোর্সিং আলোচনায় চলে এসেছে।' },
      { en: 'One distinction matters more than any other for Bangladesh suppliers: legal responsibility and information reality are not in the same place. The obligation to place a passport on the market may fall to the economic operator that puts the product on the EU market — often the brand or importer. But the substance of that passport: fibre composition, material suppliers, processing facilities, test evidence, production records — sits with manufacturers and upstream suppliers.', bn: 'বাংলাদেশের সরবরাহকারীদের জন্য অন্য সব দিকের চেয়ে একটি পার্থক্য বেশি গুরুত্বপূর্ণ: আইনি দায়িত্ব ও তথ্যের বাস্তবতা এক জায়গায় নেই। বাজারে পাসপোর্ট স্থাপনের বাধ্যবাধকতা সেই অর্থনৈতিক অপারেটরের ওপর পড়তে পারে যিনি পণ্যটি ইইউ বাজারে ছাড়েন — সাধারণত ব্র্যান্ড বা আমদানিকারক। কিন্তু সেই পাসপোর্টের মূল বিষয়বস্তু — তন্তুর গঠন, উপকরণ সরবরাহকারী, প্রক্রিয়াকরণ ইউনিট, পরীক্ষার প্রমাণ, উৎপাদন রেকর্ড — থাকে উৎপাদক ও আপস্ট্রিম সরবরাহকারীদের কাছে।' },
      { en: 'That asymmetry is the practical reason to prepare now. When a buyer asks for structured, traceable product information, the request lands on the factory regardless of where the legal duty formally sits. Factories that can answer quickly, with evidence, become easier to work with. Factories that cannot become a risk to be managed.', bn: 'এই অসাম্যই এখনই প্রস্তুতি নেওয়ার ব্যবহারিক কারণ। যখন কোনো ক্রেতা কাঠামোবদ্ধ, ট্রেসেবল পণ্য-তথ্য চান, আনুষ্ঠানিকভাবে আইনি দায়িত্ব যেখানেই থাকুক না কেন, অনুরোধটি এসে পড়ে কারখানায়। যে কারখানা প্রমাণসহ দ্রুত উত্তর দিতে পারে, তার সঙ্গে কাজ করা সহজ হয়। যে পারে না, সে এমন একটি ঝুঁকিতে পরিণত হয় যা সামলাতে হয়।' },
      { en: 'The second reason to prepare now is that the textile-specific detail is still being developed. Final information fields, technical obligations and implementation dates will depend on the applicable EU rules. Because those rules are not fixed, spending on a specific software solution today is a bet on an outcome nobody can yet confirm. Understanding your own information capabilities is not a bet — it is groundwork that holds its value whichever way the rules land.', bn: 'এখনই প্রস্তুতি নেওয়ার দ্বিতীয় কারণ হলো টেক্সটাইল-নির্দিষ্ট বিস্তারিত এখনো তৈরি হচ্ছে। চূড়ান্ত তথ্য-ক্ষেত্র, কারিগরি বাধ্যবাধকতা ও বাস্তবায়নের তারিখ প্রযোজ্য ইইউ বিধির ওপর নির্ভর করবে। সেই বিধি এখনো নির্দিষ্ট নয়, তাই আজ কোনো নির্দিষ্ট সফটওয়্যার সমাধানে ব্যয় করা এমন একটি ফলাফলে বাজি ধরা যা কেউ এখনো নিশ্চিত করতে পারে না। নিজের তথ্য-সক্ষমতা বোঝা কোনো বাজি নয় — এটি এমন ভিত্তি প্রস্তুতি যা বিধি যেভাবেই আসুক, তার মূল্য ধরে রাখে।' },
      { en: 'Our recommendation is deliberately unglamorous: find out what you already have, where it lives, who owns it and whether you can evidence it. That is the whole of readiness, and it precedes any technology decision.', bn: 'আমাদের সুপারিশ ইচ্ছে করেই সাদাসিধা: আপনার কাছে যা আছে তা খুঁজে বের করুন, তা কোথায় আছে, কার দায়িত্বে আছে এবং এর প্রমাণ দিতে পারবেন কি না। এটিই প্রস্তুতির পুরোটা, আর যেকোনো প্রযুক্তি সিদ্ধান্তের আগে এটির জায়গা।' },
    ],
    takeaways: [
      { en: 'ESPR (Regulation (EU) 2024/1781) creates the DPP framework; textiles are a priority group.', bn: 'ESPR (Regulation (EU) 2024/1781) ডিপিপির কাঠামো তৈরি করেছে; টেক্সটাইল একটি অগ্রাধিকারপ্রাপ্ত গোষ্ঠী।' },
      { en: 'Legal duty and information custody sit with different parties — preparation still lands on the factory.', bn: 'আইনি দায়িত্ব ও তথ্যের হেফাজত ভিন্ন ভিন্ন পক্ষের কাছে — প্রস্তুতির দায়িত্ব তবুও কারখানাতেই পড়ে।' },
      { en: 'Because textile-specific detail is unsettled, capability assessment is lower-risk than software purchase.', bn: 'টেক্সটাইল-নির্দিষ্ট বিস্তারিত চূড়ান্ত না হওয়ায় সফটওয়্যার কেনার চেয়ে সক্ষমতা মূল্যায়নে ঝুঁকি কম।' },
      { en: 'Buyer requests typically arrive before formal obligations do.', bn: 'ক্রেতার অনুরোধ সাধারণত আনুষ্ঠানিক বাধ্যবাধকতার আগেই পৌঁছে যায়।' },
    ],
  },
  {
    slug: 'buyer-requests-before-legal-deadlines',
    title: {
      en: 'Buyer Information Requests Usually Arrive Before Legal Deadlines',
      bn: 'ক্রেতার তথ্য-অনুরোধ সাধারণত আইনি সময়সীমার আগেই আসে',
    },
    topic: { en: 'Supply Chain Traceability', bn: 'সাপ্লাই-চেইন ট্রেসেবিলিটি' },
    excerpt: {
      en: 'European buyers may increasingly request structured, reliable and traceable information from manufacturing partners well before textile-specific obligations are finalised. Factories that understand their existing information capabilities respond faster and negotiate from a stronger position.',
      bn: 'টেক্সটাইল-নির্দিষ্ট বাধ্যবাধকতা চূড়ান্ত হওয়ার অনেক আগেই ইউরোপীয় ক্রেতারা উৎপাদন অংশীদারদের কাছে কাঠামোবদ্ধ, নির্ভরযোগ্য ও ট্রেসেবল তথ্য চাইতে পারেন। যে কারখানাগুলো নিজেদের বিদ্যমান তথ্য-সক্ষমতা বোঝে, তারা দ্রুত উত্তর দেয় এবং আরও শক্ত অবস্থান থেকে আলোচনা করে।',
    },
    date: '2026-09-14',
    readTime: { en: '4 min read', bn: '৪ মিনিটের পাঠ' },
    image: '/images/insights/buyer-requests-before-legal-deadlines.jpg',
    imageAlt: {
      en: 'A buyer and supplier reviewing a product information request',
      bn: 'পণ্য-তথ্যের অনুরোধ পর্যালোচনা করছেন একজন ক্রেতা ও সরবরাহকারী',
    },
    tags: [
      { en: 'Buyers', bn: 'ক্রেতা' },
      { en: 'Requests', bn: 'অনুরোধ' },
      { en: 'Timing', bn: 'সময়' },
    ],
    featured: true,
    body: [
      { en: 'There is a persistent assumption in the supply chain that preparation can wait until the textile-specific Digital Product Passport rules are finalised. Commercially, that assumption is expensive.', bn: 'সাপ্লাই চেইনে একটি ধারণা দীর্ঘদিন ধরে টিকে আছে যে টেক্সটাইল-নির্দিষ্ট ডিজিটাল প্রোডাক্ট পাসপোর্টের বিধি চূড়ান্ত না হওয়া পর্যন্ত প্রস্তুতি অপেক্ষা করতে পারে। ব্যবসায়িক দৃষ্টিকোণ থেকে এই ধারণার দাম বেশি।' },
      { en: 'European buyers operate on their own timelines. They face their own reporting commitments, their own board pressure and their own due diligence obligations. When they need structured information about materials, suppliers or processing, they ask for it — and they ask the party that holds it. Those requests do not wait for implementing acts.', bn: 'ইউরোপীয় ক্রেতারা নিজেদের সময়সীমায় কাজ করেন। তাদের নিজস্ব প্রতিবেদনের বাধ্যবাধকতা, নিজস্ব বোর্ডের চাপ ও নিজস্ব যথাযথ-পরীক্ষার দায়িত্ব থাকে। উপকরণ, সরবরাহকারী বা প্রক্রিয়াকরণ সম্পর্কে কাঠামোবদ্ধ তথ্য দরকার হলে তারা তা চান — আর যার কাছে তথ্য আছে, তাকেই চান। এই অনুরোধগুলো বাস্তবায়ন আইনের জন্য অপেক্ষা করে না।' },
      { en: 'The factories that handle this well are not necessarily the most digital. They are the ones that can answer a specific question with a specific document inside a specific timeframe. That capability is mostly about knowing where things are and who is responsible for them.', bn: 'যে কারখানাগুলো এটি ভালোভাবে সামলায়, তারা অগত্যা সবচেয়ে ডিজিটাল নয়। তারাই পারে যারা একটি নির্দিষ্ট সময়ের মধ্যে একটি নির্দিষ্ট প্রশ্নের উত্তর একটি নির্দিষ্ট দলিল দিয়ে দিতে পারে। এই সক্ষমতা মূলত এই বোঝার ওপর নির্ভর করে যে জিনিসগুলো কোথায় আছে এবং সেগুলোর দায়িত্ব কার।' },
      { en: 'The factories that handle it badly tend to fail in a predictable way: the request arrives, three departments each hold part of the answer, nobody owns the whole, and the response takes three weeks and three revisions. By then the buyer has learned something about working with that factory.', bn: 'যারা খারাপভাবে সামলায়, তারা একটা অনুমেয় পথেই ব্যর্থ হয়: অনুরোধ আসে, তিনটি বিভাগের প্রত্যেকের কাছে উত্তরের কিছু অংশ থাকে, পুরোটার দায়িত্ব কারো নেই, আর উত্তর দিতে লাগে তিন সপ্তাহ ও তিনবার সংশোধন। ততক্ষণে ক্রেতা সেই কারখানার সাথে কাজ করা সম্পর্কে কিছু শিখে ফেলেন।' },
      { en: 'A readiness assessment does not change what a buyer asks for. It changes how a factory responds — with evidence rather than reassurance, and in days rather than weeks.', bn: 'প্রস্তুতি মূল্যায়ন ক্রেতা যা চান তা বদলায় না। এটি বদলায় কারখানা কীভাবে উত্তর দেয় — আশ্বাসের বদলে প্রমাণ দিয়ে, আর সপ্তাহের বদলে দিনেই।' },
    ],
    takeaways: [
      { en: 'Buyer information requests are driven by buyer obligations, not by EU implementation dates.', bn: 'ক্রেতার তথ্য-অনুরোধ চালিত হয় ক্রেতার নিজস্ব বাধ্যবাধকতা দ্বারা, ইইউ বাস্তবায়নের তারিখ দ্বারা নয়।' },
      { en: 'Response speed and evidence quality shape commercial relationships.', bn: 'উত্তরের গতি ও প্রমাণের মান বাণিজ্যিক সম্পর্কের রূপ দেয়।' },
      { en: 'Failure is usually organisational — unclear ownership — not technological.', bn: 'ব্যর্থতা সাধারণত সাংগঠনিক — মালিকানা অস্পষ্ট থাকা — প্রযুক্তিগত নয়।' },
      { en: 'Knowing where information lives is the highest-leverage preparation step.', bn: 'তথ্য কোথায় আছে তা জানাই সবচেয়ে বেশি ফলদায়ক প্রস্তুতিমূলক পদক্ষেপ।' },
    ],
  },
  {
    slug: 'five-dimensions-of-digital-readiness',
    title: { en: 'The Five Dimensions of Digital Readiness', bn: 'ডিজিটাল প্রস্তুতির পাঁচটি মাত্রা' },
    topic: { en: 'Product Data & Information Management', bn: 'পণ্য-তথ্য ব্যবস্থাপনা' },
    excerpt: {
      en: 'Manual data, digital data, integration, validation and governance. Readiness is not one number — it is a profile across five dimensions, and the shape of that profile determines which improvements are worth making first.',
      bn: 'ম্যানুয়াল তথ্য, ডিজিটাল তথ্য, সংযোজন, যাচাই ও শাসন। প্রস্তুতি একটি সংখ্যা নয় — এটি পাঁচটি মাত্রার একটি প্রোফাইল, আর সেই প্রোফাইলের আকৃতিই নির্ধারণ করে আগে কোন উন্নয়নগুলো করা মূল্যবান।',
    },
    date: '2026-09-21',
    readTime: { en: '7 min read', bn: '৭ মিনিটের পাঠ' },
    image: '/images/insights/five-dimensions-of-digital-readiness.jpg',
    imageAlt: {
      en: 'Five layered blocks representing the readiness dimensions',
      bn: 'প্রস্তুতির মাত্রা নির্দেশক পাঁচটি স্তরযুক্ত ব্লক',
    },
    tags: [
      { en: 'Dimensions', bn: 'মাত্রা' },
      { en: 'Framework', bn: 'কাঠামো' },
      { en: 'Assessment', bn: 'মূল্যায়ন' },
    ],
    featured: true,
    body: [
      { en: 'Readiness is often discussed as if it were a score. In practice it is a profile, and the shape of that profile determines which improvements are worth making first.', bn: 'প্রস্তুতি সম্পর্কে প্রায়ই এমনভাবে কথা বলা হয় যেন তা একটি স্কোর। বাস্তবে এটি একটি প্রোফাইল, আর সেই প্রোফাইলের আকৃতিই নির্ধারণ করে কোন উন্নয়নগুলো আগে করা মূল্যবান।' },
      { en: 'The first two dimensions describe where information physically and digitally lives. Manual data covers the paper and personal-file reality of most factories: printed Tech Packs, whiteboards, spreadsheets on one laptop. Digital data covers the records that exist in systems — their availability, quality, accessibility and the capability limits of the systems holding them.', bn: 'প্রথম দুটি মাত্রা বর্ণনা করে তথ্য ভৌতভাবে ও ডিজিটালভাবে কোথায় থাকে। ম্যানুয়াল তথ্য অধিকাংশ কারখানার কাগজ ও ব্যক্তিগত ফাইলের বাস্তবতাকে ধরে: ছাপা টেক প্যাক, হোয়াইটবোর্ড, এক ল্যাপটপে থাকা স্প্রেডশিট। ডিজিটাল তথ্য ধরে সিস্টেমে থাকা রেকর্ডগুলোকে — সেগুলোর প্রাপ্যতা, মান, ব্যবহারযোগ্যতা এবং সেগুলো ধরে রাখা সিস্টেমের সক্ষমতার সীমা।' },
      { en: 'The third dimension, integration, describes movement. Product information rarely stays in one place; it has to travel between merchandising, sourcing, production, quality and compliance. Every handover is an opportunity for the same field to be recorded three different ways.', bn: 'তৃতীয় মাত্রা, সংযোজন, বর্ণনা করে চলাচল। পণ্যের তথ্য খুব কমই এক জায়গায় থাকে; তাকে মার্চেন্ডাইজিং, সোর্সিং, উৎপাদন, মান ও কমপ্লায়েন্সের মধ্যে দিয়ে যেতে হয়। প্রতিটি হস্তান্তরই একই ক্ষেত্রটি তিন ভিন্নভাবে লিপিবদ্ধ হওয়ার সুযোগ।' },
      { en: 'The fourth dimension is the one buyers actually test. Validation, verification and auditability ask whether a claim can be substantiated, whether anything checks information before it leaves the factory, and whether decisions leave a trace. A factory can hold excellent data and still fail here, because nobody can prove it.', bn: 'চতুর্থ মাত্রাটিই সেটি যা ক্রেতারা আসলে পরীক্ষা করেন। বৈধতা, যাচাই ও নিরীক্ষাযোগ্যতা প্রশ্ন করে কোনো দাবির সমর্থনে প্রমাণ আছে কি না, কারখানা থেকে বের হওয়ার আগে তথ্য কেউ যাচাই করে কি না, আর সিদ্ধান্তগুলোর কোনো চিহ্ন থাকে কি না। একটি কারখানার হাতে চমৎকার তথ্য থাকতে পারে, তবুও সে এখানে ব্যর্থ হতে পারে — কারণ কেউ তা প্রমাণ করতে পারে না।' },
      { en: 'The fifth dimension, governance, determines whether any of it survives contact with staff turnover. Named ownership, maintenance routines, access control and integrity protection are what convert a one-off cleanup into a durable capability.', bn: 'পঞ্চম মাত্রা, শাসন, নির্ধারণ করে কর্মী-বদলের ধাক্কায় এর কোনোটিই টিকে থাকে কি না। নির্দিষ্ট মালিকানা, রক্ষণাবেক্ষণের নিয়ম, প্রবেশাধিকার নিয়ন্ত্রণ ও অখণ্ডতা রক্ষাই এককালীন পরিচ্ছন্নতাকে টেকসই সক্ষমতায় রূপান্তরিত করে।' },
      { en: 'Treating traceability as a sixth dimension is tempting and wrong. Traceability is a property that emerges across the other five — you cannot have it without manual and digital records, movement between them, evidence behind them, and someone accountable for them.', bn: 'ট্রেসেবিলিটিকে ষষ্ঠ মাত্রা হিসেবে ধরা প্রলুব্ধকর, কিন্তু ভুল। ট্রেসেবিলিটি এমন একটি বৈশিষ্ট্য যা অন্য পাঁচটির মধ্য দিয়ে উদ্ভূত হয় — ম্যানুয়াল ও ডিজিটাল রেকর্ড, তাদের মাঝে চলাচল, তাদের পেছনে প্রমাণ এবং তাদের জন্য দায়ী কেউ না থাকলে তা থাকতে পারে না।' },
    ],
    takeaways: [
      { en: 'Readiness is a profile across five dimensions, not a single score.', bn: 'প্রস্তুতি একটি স্কোর নয়, পাঁচটি মাত্রার একটি প্রোফাইল।' },
      { en: 'Manual and digital data describe where information lives; integration describes how it moves.', bn: 'ম্যানুয়াল ও ডিজিটাল তথ্য বর্ণনা করে তথ্য কোথায় থাকে; সংযোজন বর্ণনা করে তা কীভাবে চলাচল করে।' },
      { en: 'Validation and auditability are what buyers actually test.', bn: 'বৈধতা ও নিরীক্ষাযোগ্যতাই সেটি যা ক্রেতারা আসলে পরীক্ষা করেন।' },
      { en: 'Governance determines whether improvements survive staff turnover.', bn: 'শাসন নির্ধারণ করে উন্নয়নগুলো কর্মী-বদলের মধ্যে টিকে থাকে কি না।' },
      { en: 'Traceability is an emergent property, not a separate dimension.', bn: 'ট্রেসেবিলিটি একটি উদ্ভূত বৈশিষ্ট্য, আলাদা কোনো মাত্রা নয়।' },
    ],
  },
  {
    slug: 'better-data-before-bigger-technology',
    title: { en: 'Better Data Before Bigger Technology', bn: 'বড় প্রযুক্তির আগে ভালো তথ্য' },
    topic: { en: 'DPP Standards & Technical Infrastructure', bn: 'ডিপিপি মান ও কারিগরি অবকাঠামো' },
    excerpt: {
      en: 'New platforms are often bought to solve problems that are actually data problems. This piece sets out why an evidence-based diagnostic should precede system selection, and how to tell the two apart.',
      bn: 'নতুন প্ল্যাটফর্ম কেনা হয় প্রায়ই এমন সমস্যা সমাধানে যা আসলে তথ্যের সমস্যা। কেন সিস্টেম নির্বাচনের আগে প্রমাণ-ভিত্তিক রোগনির্ণয় করা উচিত এবং দুটিকে কীভাবে আলাদা করা যায় — তা এই লেখায় তুলে ধরা হয়েছে।',
    },
    date: '2026-09-28',
    readTime: { en: '5 min read', bn: '৫ মিনিটের পাঠ' },
    image: '/images/insights/better-data-before-bigger-technology.jpg',
    imageAlt: {
      en: 'Data records being reviewed before a software selection meeting',
      bn: 'সফটওয়্যার নির্বাচন সভার আগে তথ্য-রেকর্ড পর্যালোচনা',
    },
    tags: [
      { en: 'Digital systems', bn: 'ডিজিটাল সিস্টেম' },
      { en: 'Investment', bn: 'বিনিয়োগ' },
      { en: 'Sequencing', bn: 'ধারাবাহিকতা' },
    ],
    body: [
      { en: 'When a factory struggles to answer a product information request, the reflex is to buy a platform. It is an understandable reflex and frequently the wrong one.', bn: 'কোনো কারখানা পণ্য-তথ্যের অনুরোধের উত্তর দিতে হিমশিম খেলে স্বাভাবিক প্রতিক্রিয়া হয় একটি প্ল্যাটফর্ম কেনা। এটি বোধগম্য প্রতিক্রিয়া, কিন্তু প্রায়ই ভুল।' },
      { en: 'Most information failures are not caused by absent software. They are caused by absent definitions — two departments using the same field to mean different things, a specification that was never updated after a material substitution, a supplier declaration that exists but cannot be found. No platform resolves any of those. A platform records them more tidily.', bn: 'অধিকাংশ তথ্য-ব্যর্থতার কারণ সফটওয়্যার না থাকা নয়, বরং সংজ্ঞা না থাকা — দুটি বিভাগ একই ক্ষেত্রটি ভিন্ন ভিন্ন অর্থে ব্যবহার করছে, উপকরণ বদলের পর কোনো স্পেসিফিকেশন আর হালনাগাদ হয়নি, সরবরাহকারীর ঘোষণা আছে কিন্তু খুঁজে পাওয়া যাচ্ছে না। এর কোনোটিরই সমাধান কোনো প্ল্যাটফর্ম করতে পারে না। প্ল্যাটফর্ম কেবল সেগুলো আরও গুছিয়ে লিপিবদ্ধ করে।' },
      { en: 'This is why our assessment precedes any advisory conversation about systems. The diagnostic separates problems that are genuinely technical from problems that are organisational and can be fixed with a decision rather than a purchase.', bn: 'এ কারণেই সিস্টেম নিয়ে যেকোনো পরামর্শ-আলোচনার আগে আমাদের মূল্যায়নের স্থান। এই রোগনির্ণয় প্রকৃতপক্ষে কারিগরি সমস্যাকে সাংগঠনিক সমস্যা থেকে আলাদা করে, যা কেনার বদলে একটি সিদ্ধান্তের মাধ্যমেই সমাধান করা যায়।' },
      { en: 'The commercial argument is straightforward. Software licences, implementation and the internal disruption of a rollout are real costs. If half of the underlying gap can be closed by naming an owner, standardising a template and archiving evidence properly, that half should be closed first — and the system requirement that remains will be far better specified.', bn: 'বাণিজ্যিক যুক্তিটি সহজ। সফটওয়্যার লাইসেন্স, বাস্তবায়ন ও রোলআউটের অভ্যন্তরীণ বিশৃঙ্খলা — সবই বাস্তব খরচ। যদি মূল ঘাটতির অর্ধেক একজন মালিক নির্ধারণ করে, একটি টেমপ্লেট মানক করে এবং প্রমাণ সঠিকভাবে সংরক্ষণ করে মেটানো যায়, তবে সেই অর্ধেক আগে মেটানো উচিত — আর যে সিস্টেম-প্রয়োজনীয়তা অবশিষ্ট থাকবে, তা অনেক বেশি স্পষ্টভাবে লেখা যাবে।' },
      { en: 'None of this is an argument against technology. It is an argument for buying it last, when you finally know what you need it to do.', bn: 'এর কোনোটিই প্রযুক্তির বিরুদ্ধে যুক্তি নয়। এটি প্রযুক্তি সবার শেষে কেনার যুক্তি — যখন আপনি অবশেষে জানেন যে দিয়ে আপনাকে আসলে কী করাতে হবে।' },
    ],
    takeaways: [
      { en: 'Most information failures are definitional, not technological.', bn: 'অধিকাংশ তথ্য-ব্যর্থতা সংজ্ঞাগত, প্রযুক্তিগত নয়।' },
      { en: 'Platforms record tidy versions of untidy processes unless the process is fixed first.', bn: 'প্রক্রিয়া আগে ঠিক না করলে প্ল্যাটফর্ম এলোমেলো প্রক্রিয়ার গুছানো সংস্করণ লিপিবদ্ধ করে।' },
      { en: 'A diagnostic separates technical gaps from organisational ones.', bn: 'রোগনির্ণয় কারিগরি ঘাটতিকে সাংগঠনিক ঘাটতি থেকে আলাদা করে।' },
      { en: 'Requirements written after remediation are cheaper to satisfy.', bn: 'সংশোধনের পর লেখা প্রয়োজনীয়তা পূরণ করা সস্তা।' },
    ],
  },
  {
    slug: 'traceability-across-manual-and-digital-records',
    title: {
      en: 'Traceability Across Manual, Spreadsheet and Enterprise Records',
      bn: 'ম্যানুয়াল, স্প্রেডশিট ও এন্টারপ্রাইজ রেকর্ড জুড়ে ট্রেসেবিলিটি',
    },
    topic: { en: 'Supply Chain Traceability', bn: 'সাপ্লাই-চেইন ট্রেসেবিলিটি' },
    excerpt: {
      en: 'Most Bangladesh facilities run a mix of paper files, spreadsheets and enterprise applications. Traceability has to work across all three — and the handover points are where information is most often lost.',
      bn: 'বাংলাদেশের অধিকাংশ প্রতিষ্ঠানে কাগজের ফাইল, স্প্রেডশিট ও এন্টারপ্রাইজ অ্যাপ্লিকেশন একসাথে চলে। ট্রেসেবিলিটিকে এই তিনটিতেই কাজ করতে হবে — আর হস্তান্তর বিন্দুতেই তথ্য সবচেয়ে বেশি হারিয়ে যায়।',
    },
    date: '2026-10-12',
    readTime: { en: '5 min read', bn: '৫ মিনিটের পাঠ' },
    image: '/images/insights/traceability-across-manual-and-digital-records.jpg',
    imageAlt: {
      en: 'Paper files, spreadsheets and an enterprise application side by side',
      bn: 'কাগজের ফাইল, স্প্রেডশিট ও একটি এন্টারপ্রাইজ অ্যাপ্লিকেশন পাশাপাশি',
    },
    tags: [
      { en: 'Traceability', bn: 'ট্রেসেবিলিটি' },
      { en: 'Records', bn: 'রেকর্ড' },
      { en: 'Handovers', bn: 'হস্তান্তর' },
    ],
    body: [
      { en: 'Almost every Bangladesh facility we encounter runs three information environments at once: paper files, spreadsheets, and at least one enterprise application. Traceability has to work across all three, and it almost always breaks at the joins.', bn: 'আমরা বাংলাদেশের যত প্রতিষ্ঠান দেখি, প্রায় প্রতিটিই একসাথে তিনটি তথ্য-পরিবেশ চালায়: কাগজের ফাইল, স্প্রেডশিট, এবং অন্তত একটি এন্টারপ্রাইজ অ্যাপ্লিকেশন। ট্রেসেবিলিটিকে এই তিনটিতেই কাজ করতে হবে, আর প্রায় সব সময়ই তা ভাঙে জোড়ের জায়গায়।' },
      { en: 'The paper layer is not the problem it is often made out to be. Physical records can be perfectly traceable if they are filed consistently and someone knows where they are. They become a problem when filing depends on one person, or when the file was never completed in the first place.', bn: 'কাগজের স্তরটি ততটা সমস্যা নয় যতটা প্রায়ই বলা হয়। ভৌত রেকর্ড নিখুঁতভাবে ট্রেসেবল হতে পারে যদি সেগুলো ধারাবাহিকভাবে ফাইল করা হয় এবং কেউ জানে সেগুলো কোথায় আছে। সমস্যা তখনই হয় যখন ফাইল করা একজনের ওপর নির্ভর করে, কিংবা ফাইলটি প্রথম থেকেই কখনো পূর্ণ করা হয়নি।' },
      { en: 'Spreadsheets are the real wildcard. They are flexible enough to absorb any requirement and unconstrained enough to diverge silently. Two teams maintaining the same supplier list in two workbooks will, within a quarter, hold two different truths — and neither will know.', bn: 'স্প্রেডশিট-ই আসল চলক। এগুলো যেকোনো প্রয়োজন শুষে নেওয়ার মতো নমনীয়, আবার নীরবে বিচ্যুত হওয়ার মতোই অনিয়ন্ত্রিত। দুটি দল দুটি ওয়ার্কবুকে একই সরবরাহকারী তালিকা রক্ষণাবেক্ষণ করলে এক ত্রৈমাসিকের মধ্যেই দুটি ভিন্ন সত্যের অধিকারী হবে — আর কেউই জানবে না।' },
      { en: 'Enterprise applications usually hold the cleanest data and the narrowest coverage. ERP and PLM modules tend to capture what was configured at implementation, not what the business actually needs for product information questions today.', bn: 'এন্টারপ্রাইজ অ্যাপ্লিকেশনে সাধারণত সবচেয়ে পরিষ্কার তথ্য থাকে, কিন্তু বিস্তৃতি সবচেয়ে কম। ERP ও PLM মডিউল সাধারণত সেটিই ধরে যা বাস্তবায়নের সময় কনফিগার করা হয়েছিল, আজ পণ্য-তথ্যের প্রশ্নের জন্য ব্যবসার আসলে যা দরকার তা নয়।' },
      { en: 'The practical work of traceability is therefore less about digitising everything and more about mapping the handovers: where information passes between layers, who re-keys it, and what gets lost. Those handovers are where readiness is won.', bn: 'তাই ট্রেসেবিলিটির ব্যবহারিক কাজ সবকিছু ডিজিটাইজ করার চেয়ে হাত-বদলের মানচিত্র তৈরির ব্যাপার বেশি: স্তরের মাঝে তথ্য কোথায় যায়, কে তা নতুন করে টাইপ করে, আর কী হারিয়ে যায়। সেই হাত-বদলের জায়গাতেই প্রস্তুতি জেতা বা হারা হয়।' },
    ],
    takeaways: [
      { en: 'Most facilities run paper, spreadsheet and enterprise layers simultaneously.', bn: 'অধিকাংশ প্রতিষ্ঠান একই সময়ে কাগজ, স্প্রেডশিট ও এন্টারপ্রাইজ স্তর চালায়।' },
      { en: 'Spreadsheets diverge silently — they are the highest-risk layer.', bn: 'স্প্রেডশিট নীরবে বিচ্যুত হয় — এটি সবচেয়ে বেশি ঝুঁকিপূর্ণ স্তর।' },
      { en: 'ERP and PLM coverage often reflects past configuration, not present need.', bn: 'ERP ও PLM-এর বিস্তৃতি প্রায়ই অতীত কনফিগারেশনের প্রতিফলন, বর্তমান প্রয়োজনের নয়।' },
      { en: 'Map the handovers between layers before digitising anything.', bn: 'কিছু ডিজিটাইজ করার আগে স্তরগুলোর মাঝের হাত-বদলের মানচিত্র তৈরি করুন।' },
    ],
  },
  {
    slug: 'preparing-circularity-evidence',
    title: { en: 'Preparing Environmental and Circularity Evidence', bn: 'পরিবেশ ও বৃত্তাকারতার প্রমাণ প্রস্তুতকরণ' },
    topic: { en: 'Sustainability & Circularity', bn: 'টেকসইতা ও বৃত্তাকারতা' },
    excerpt: {
      en: 'Environmental and end-of-life information is among the most evidence-dependent passport categories. A practical look at what suppliers can assemble now, from records they already hold.',
      bn: 'পরিবেশ ও জীবনান্ত তথ্য সবচেয়ে প্রমাণ-নির্ভর পাসপোর্ট বিভাগের মধ্যে অন্যতম। সরবরাহকারীরা তাদের হাতে থাকা রেকর্ড থেকে এখনই কী সংকলিত করতে পারেন, তার একটি ব্যবহারিক দৃষ্টিভঙ্গি।',
    },
    date: '2026-10-19',
    readTime: { en: '6 min read', bn: '৬ মিনিটের পাঠ' },
    image: '/images/insights/preparing-circularity-evidence.jpg',
    imageAlt: {
      en: 'Environmental certificates and test reports organised for review',
      bn: 'পর্যালোচনার জন্য সাজানো পরিবেশ সার্টিফিকেট ও পরীক্ষা-প্রতিবেদন',
    },
    tags: [
      { en: 'Circularity', bn: 'বৃত্তাকারতা' },
      { en: 'Evidence', bn: 'প্রমাণ' },
      { en: 'Certificates', bn: 'সার্টিফিকেট' },
    ],
    body: [
      { en: 'Environmental and end-of-life information is among the most evidence-dependent categories in any product passport discussion — and among the least prepared in most factories.', bn: 'যেকোনো পণ্য পাসপোর্ট আলোচনায় পরিবেশ ও জীবনান্ত তথ্য সবচেয়ে প্রমাণ-নির্ভর বিভাগের মধ্যে অন্যতম — আর অধিকাংশ কারখানায় সবচেয়ে কম প্রস্তুত থাকা বিভাগগুলোরও একটি।' },
      { en: 'The reason is structural. Composition, supplier and production data are generated by your own operations. Environmental and circularity claims usually depend on information from somewhere else: a mill certificate, a chemical supplier declaration, a test report from a third-party laboratory, a footprint calculation built on assumptions someone else made.', bn: 'কারণটি কাঠামোগত। গঠন, সরবরাহকারী ও উৎপাদনের তথ্য আপনার নিজের কার্যক্রমেই তৈরি হয়। পরিবেশ ও বৃত্তাকারতার দাবি সাধারণত অন্য কোথাও থেকে আসা তথ্যের ওপর নির্ভর করে: একটি মিল সার্টিফিকেট, রাসায়নিক সরবরাহকারীর ঘোষণা, তৃতীয় পক্ষের ল্যাবের পরীক্ষা-প্রতিবেদন, কেউ অন্যের করা অনুমানের ওপর দাঁড়ানো একটি ফুটপ্রিন্ট হিসাব।' },
      { en: 'That dependency has two consequences. First, you cannot create this information on demand — you have to know which documents you hold, whether they are current, and whether they are linked to the specific style in question. Second, a claim without its supporting document is worse than no claim, because it invites the reviewer to question everything else you submitted.', bn: 'এই নির্ভরতার দুটি পরিণতি আছে। প্রথমত, এই তথ্য চাহিদামাত্রিক তৈরি করা যায় না — আপনাকে জানতে হবে কোন দলিলগুলো আপনার কাছে আছে, সেগুলো বর্তমান কি না, আর সেগুলো নির্দিষ্ট স্টাইলের সাথে সংযুক্ত কি না। দ্বিতীয়ত, সমর্থক দলিল ছাড়া একটি দাবি কোনো দাবি না করার চেয়েও খারাপ, কারণ তা পর্যালোচককে আপনার জমা দেওয়া আর সবকিছু নিয়েও প্রশ্ন করতে আমন্ত্রণ জানায়।' },
      { en: 'The practical starting point is an evidence inventory rather than a data project. For each environmental or circularity field a buyer might ask about, establish three things: do we hold supporting evidence, is it current, and can we retrieve it per style. Fields that fail all three are the ones worth working on — and they are usually fewer than expected, because the evidence often exists somewhere in the organisation and simply is not linked to the product record.', bn: 'ব্যবহারিক শুরু একটি তথ্য-প্রকল্প নয়, বরং একটি প্রমাণ-তালিকা। ক্রেতা যে পরিবেশ বা বৃত্তাকারতার ক্ষেত্র সম্পর্কে প্রশ্ন করতে পারেন, তার প্রতিটির জন্য তিনটি বিষয় নিশ্চিত করুন: সমর্থক প্রমাণ আমাদের কাছে আছে কি, তা বর্তমান কি, আর স্টাইলভিত্তিক তা খুঁজে বের করা যায় কি। যে ক্ষেত্রগুলো তিনটিতেই ব্যর্থ হয়, সেগুলোই কাজ করার মতো — আর সাধারণত প্রত্যাশার চেয়ে কম হয়, কারণ প্রমাণ প্রায়ই প্রতিষ্ঠানের কোথাও থাকে, কেবল পণ্য-রেকর্ডের সাথে যুক্ত থাকে না।' },
      { en: 'Durability, repairability and end-of-life guidance deserve a separate note. These are forward-looking statements about a product, not records of what happened. They require someone to take responsibility for the statement, which is a governance question rather than a data one.', bn: 'স্থায়িত্ব, মেরামতযোগ্যতা ও জীবনান্ত নির্দেশনা আলাদা করে উল্লেখের দাবি রাখে। এগুলো কোনো পণ্য সম্পর্কে ভবিষ্যৎমুখী বক্তব্য, ঘটে যাওয়ার রেকর্ড নয়। এগুলোর জন্য কাউকে সেই বক্তব্যের দায়িত্ব নিতে হয়, যা তথ্যের নয়, শাসনের প্রশ্ন।' },
    ],
    takeaways: [
      { en: 'Environmental claims depend on evidence held outside your operations.', bn: 'পরিবেশ সংক্রান্ত দাবি আপনার কার্যক্রমের বাইরে থাকা প্রমাণের ওপর নির্ভর করে।' },
      { en: 'An unsubstantiated claim damages the credibility of everything submitted with it.', bn: 'প্রমাণহীন কোনো দাবি তার সাথে জমা দেওয়া সবকিছুরই বিশ্বাসযোগ্যতা নষ্ট করে।' },
      { en: 'Start with an evidence inventory, not a data-capture project.', bn: 'তথ্য-সংগ্রহ প্রকল্প নয়, একটি প্রমাণ-তালিকা দিয়ে শুরু করুন।' },
      { en: 'Durability and end-of-life statements are governance decisions, not records.', bn: 'স্থায়িত্ব ও জীবনান্ত সংক্রান্ত বক্তব্য রেকর্ড নয়, শাসন-সিদ্ধান্ত।' },
    ],
  },
  {
    slug: 'data-carriers-qr-rfid-nfc-explained',
    image: '/images/insights/data-carriers-qr-rfid-nfc-explained.jpg',
    imageAlt: {
      en: 'A garment care label carrying a QR code beside a spool of RFID tags',
      bn: 'RFID ট্যাগের রিলের পাশে QR কোডযুক্ত একটি পোশাকের কেয়ার লেবেল',
    },
    title: {
      en: 'Data Carriers Explained: QR, RFID and NFC on a Garment',
      bn: 'ডেটা ক্যারিয়ার ব্যাখ্যা: পোশাকে QR, RFID ও NFC',
    },
    topic: {
      en: 'DPP Standards & Technical Infrastructure',
      bn: 'ডিপিপি মান ও কারিগরি অবকাঠামো',
    },
    excerpt: {
      en: 'A passport is only useful if the information can be reached from the product itself. QR codes, RFID tags and NFC each carry different payloads, survive factory conditions differently and sit at very different price points.',
      bn: 'যে তথ্য পণ্য থেকেই পাওয়া যায় না, সেই পাসপোর্ট কাজে লাগে না। QR কোড, RFID ট্যাগ ও NFC ভিন্ন পরিমাণ তথ্য বহন করে, কারখানার পরিবেশে ভিন্নভাবে টিকে এবং দামেও ব্যাপক পার্থক্য রয়েছে।',
    },
    date: '2026-11-10',
    readTime: { en: '5 min read', bn: '৫ মিনিটের পাঠ' },
    tags: [
      { en: 'Data carriers', bn: 'ডেটা ক্যারিয়ার' },
      { en: 'Standards', bn: 'মান' },
      { en: 'Interoperability', bn: 'আন্তঃকার্যক্ষমতা' },
    ],
    body: [
      {
        en: 'Every digital product passport conversation eventually arrives at a physical question: what is actually on the garment? The regulation describes what information must be accessible, but the mechanism that links a physical item to a digital record is a separate engineering decision — and one factories are increasingly being asked to have a view on.',
        bn: 'প্রতিটি ডিজিটাল পণ্য পাসপোর্ট আলোচনা শেষ পর্যন্ত একটি বস্তুগত প্রশ্নে এসে পৌঁছায়: পোশাকে আসলে কী থাকে? বিধিমালা বলে কোন তথ্য প্রবেশযোগ্য থাকতে হবে, কিন্তু একটি বস্তুগত পণ্যকে ডিজিটাল রেকর্ডের সাথে যুক্ত করার পদ্ধতি আলাদা একটি প্রকৌশল সিদ্ধান্ত — আর কারখানাগুলোর কাছে ক্রমেই এ বিষয়ে মতামত চাওয়া হচ্ছে।',
      },
      {
        en: 'The first thing to be clear about is that none of these technologies holds the passport. A QR code is a pointer, not a container. It encodes a link, and the link resolves to a record that lives somewhere else. This matters because the hard part is never printing the code — it is maintaining the record behind it, for every style, for as long as anyone might scan it.',
        bn: 'প্রথমেই স্পষ্ট হওয়া দরকার যে এই প্রযুক্তিগুলোর কোনোটিই পাসপোর্ট ধরে রাখে না। একটি QR কোড হলো পয়েন্টার, ধারক নয়। এটি একটি লিংক এনকোড করে, আর সেই লিংক অন্য কোথাও থাকা একটি রেকর্ডে পৌঁছায়। বিষয়টি গুরুত্বপূর্ণ কারণ কঠিন অংশ কখনোই কোড ছাপানো নয় — কঠিন অংশ হলো তার পেছনের রেকর্ড প্রতিটি স্টাইলের জন্য টিকিয়ে রাখা, যতদিন কেউ স্ক্যান করতে পারে।',
      },
      {
        en: 'A printed QR code costs almost nothing, works with any smartphone camera and survives normal laundering if it is specified properly. Its weaknesses are equally plain: it must be visible to be read, it can be damaged, and it is trivially copied onto a counterfeit. For a single garment scanned at point of sale or by a consumer, these trade-offs are usually acceptable.',
        bn: 'ছাপানো একটি QR কোডের প্রায় কোনো খরচ নেই, যেকোনো স্মার্টফোন ক্যামেরায় কাজ করে এবং সঠিকভাবে নির্দিষ্ট করলে স্বাভাবিক ধোয়ার পরও টিকে থাকে। এর দুর্বলতাগুলোও সমান স্পষ্ট: পড়তে হলে তা দৃশ্যমান হতে হবে, ক্ষতিগ্রস্ত হতে পারে, আর নকল পণ্যে সহজেই কপি করা যায়। বিক্রয়স্থলে বা ভোক্তার দ্বারা স্ক্যান করা একক পোশাকের ক্ষেত্রে এই আপস-সমঝোতা সাধারণত গ্রহণযোগ্য।',
      },
      {
        en: 'RFID carries an identifier that a reader can pick up without line of sight, which is why it dominates in warehouse and inventory handling rather than on the shop floor. It costs more per unit, requires readers at every point where the tag is expected to be read, and introduces a decision about whether the tag stays on the garment after sale. NFC is a near-field variant with a shorter range and better resistance to casual interception, and it is the technology most consumer phones can already read.',
        bn: 'RFID এমন একটি শনাক্তকারী বহন করে যা দৃষ্টিসীমা ছাড়াই একটি রিডার পড়তে পারে, আর সে কারণেই এটি দোকানের তলার চেয়ে গুদাম ও ইনভেন্টরি ব্যবস্থাপনায় বেশি ব্যবহৃত হয়। প্রতি ইউনিটে এর খরচ বেশি, ট্যাগ পড়ার প্রতিটি স্থানে রিডার প্রয়োজন, আর বিক্রয়ের পর ট্যাগ পোশাকে থেকে যাবে কি না সে বিষয়ে একটি সিদ্ধান্ত আসে। NFC একটি নিকট-ক্ষেত্র সংস্করণ যার পৌঁছানোর পরিসর কম এবং আকস্মিক আটকানোর বিরুদ্ধে ভালো প্রতিরোধ, আর অধিকাংশ ভোক্তা ফোনই এটি পড়তে পারে।',
      },
      {
        en: 'The practical advice is unglamorous: choose the carrier based on where the scan actually happens and who does it, not on which technology is newest. A factory shipping to several brands will in any case be told what to apply. What is worth deciding now is not the carrier but whether the record it points at exists, is complete, and can be maintained per style — because a code that resolves to an empty page is worse than no code at all.',
        bn: 'ব্যবহারিক পরামর্শ সাদাসিধা: কোন প্রযুক্তি নতুন তার ওপর নয়, স্ক্যানটি আসলে কোথায় ও কার দ্বারা হবে তার ওপর ভিত্তি করে ক্যারিয়ার বেছে নিন। একাধিক ব্র্যান্ডে পণ্য পাঠানো কারখানাকে যাই হোক বলে দেওয়া হবে কী লাগাতে হবে। এখন যে সিদ্ধান্তটি নেওয়া মূল্যবান তা ক্যারিয়ার নয়, বরং এটি যে রেকর্ডের দিকে নির্দেশ করে তা আছে কি, সম্পূর্ণ কি, আর স্টাইলভিত্তিক রক্ষণাবেক্ষণ করা যায় কি না — কারণ যে কোড একটি ফাঁকা পৃষ্ঠায় পৌঁছায়, তা কোনো কোড না থাকার চেয়েও খারাপ।',
      },
    ],
    takeaways: [
      { en: 'A data carrier holds a reference, not the passport itself.', bn: 'একটি ডেটা ক্যারিয়ার পাসপোর্ট নয়, একটি রেফারেন্স ধরে রাখে।' },
      { en: 'QR is cheapest and most compatible; RFID suits high-volume handling.', bn: 'QR সবচেয়ে সস্তা ও সবচেয়ে সামঞ্জস্যপূর্ণ; RFID বড় আকারের হ্যান্ডলিংয়ের উপযুক্ত।' },
      { en: 'Choose based on where the scan happens, not on novelty.', bn: 'নতুনত্বের ওপর নয়, স্ক্যান কোথায় হবে তার ওপর ভিত্তি করে বেছে নিন।' },
      { en: 'A code that resolves to nothing is worse than no code.', bn: 'যে কোড কিছুতেই পৌঁছায় না, তা কোনো কোড না থাকার চেয়েও খারাপ।' },
    ],
  },

  {
    slug: 'espr-working-plan-textile-timeline',
    image: '/images/insights/espr-working-plan-textile-timeline.jpg',
    imageAlt: {
      en: 'A policy timeline document with highlighted milestone dates',
      bn: 'হাইলাইট করা মাইলস্টোন তারিখসহ একটি নীতি-সময়সীমার দলিল',
    },
    title: {
      en: 'The ESPR Working Plan: Reading the Textile Timeline Without Over-Reading It',
      bn: 'ESPR কর্মপরিকল্পনা: টেক্সটাইল সময়সীমা অতি-পাঠ ছাড়াই পড়া',
    },
    topic: {
      en: 'EU Regulations & Policy Developments',
      bn: 'ইইউ নিয়ম ও নীতি উন্নয়ন',
    },
    excerpt: {
      en: 'The working plan sets out which product groups the Commission intends to prioritise. It is a direction of travel, not a deadline — and confusing the two is what drives both panic buying and complacency.',
      bn: 'কর্মপরিকল্পনায় বলা হয় কমিশন কোন পণ্যগোষ্ঠীগুলোকে অগ্রাধিকার দিতে চায়। এটি একটি দিকনির্দেশ, কোনো সময়সীমা নয় — আর এই দুটিকে গুলিয়ে ফেলাই আতঙ্কিত কেনাকাটা ও উদাসীনতা দুটোরই জন্ম দেয়।',
    },
    date: '2026-11-17',
    readTime: { en: '6 min read', bn: '৬ মিনিটের পাঠ' },
    tags: [
      { en: 'ESPR', bn: 'ESPR' },
      { en: 'Working plan', bn: 'কর্মপরিকল্পনা' },
      { en: 'Timeline', bn: 'সময়সীমা' },
    ],
    body: [
      {
        en: 'Regulation (EU) 2024/1781 establishes the framework for Digital Product Passports but does not itself set out what a textile passport must contain. That detail arrives through separate acts adopted per product group. The working plan is the document that indicates which groups the Commission intends to take first — and it is routinely read as something more binding than it is.',
        bn: 'বিধিমালা (EU) ২০২৪/১৭৮১ ডিজিটাল পণ্য পাসপোর্টের কাঠামো প্রতিষ্ঠা করে, কিন্তু নিজে বলে না যে একটি টেক্সটাইল পাসপোর্টে কী থাকতে হবে। সেই বিস্তারিত প্রতিটি পণ্যগোষ্ঠীর জন্য আলাদা আইনের মাধ্যমে আসে। কর্মপরিকল্পনাই সেই দলিল যা ইঙ্গিত দেয় কমিশন কোন গোষ্ঠীগুলো প্রথমে নিতে চায় — আর এটিকে নিয়মিতই যতটা বাধ্যতামূলক নয়, তার চেয়ে বেশি বাধ্যতামূলক হিসেবে পড়া হয়।',
      },
      {
        en: 'Two mistakes follow from that misreading. The first is treating the plan as a compliance deadline and buying technology against a specification that does not exist yet. The second is treating it as speculative and doing nothing, on the reasoning that nothing is final. Both cost money; the first spends it on the wrong thing, the second spends it later and under time pressure.',
        bn: 'এই ভুল পাঠ থেকে দুটি ভুল হয়। প্রথমটি হলো পরিকল্পনাকে সম্মতির সময়সীমা হিসেবে দেখা এবং এমন একটি বিশদ বিবরণের বিপরীতে প্রযুক্তি কেনা যা এখনো নেই। দ্বিতীয়টি হলো এটিকে অনুমাননির্ভর ভেবে কিছু না করা, এই যুক্তিতে যে কিছুই চূড়ান্ত নয়। দুটোতেই খরচ হয়; প্রথমটি ভুল জিনিসে খরচ করে, দ্বিতীয়টি পরে ও সময়ের চাপে খরচ করে।',
      },
      {
        en: 'What is genuinely settled is narrower but still useful. Textiles and apparel are named among the priority groups. The framework legislation exists and is in force. The Commission has committed to a sequence of implementing measures. And the commercial pressure from buyers is already operating independently of any of it, because brands with their own sustainability commitments need supplier data now, whatever the passport timetable does.',
        bn: 'যা সত্যিই নিষ্পত্তি হয়েছে তা সীমিত কিন্তু তবুও কাজের। টেক্সটাইল ও পোশাককে অগ্রাধিকারপ্রাপ্ত গোষ্ঠীর মধ্যে উল্লেখ করা হয়েছে। কাঠামোগত আইন রয়েছে এবং কার্যকর আছে। কমিশন বাস্তবায়ন ব্যবস্থার একটি ধারাবাহিকতায় প্রতিশ্রুতিবদ্ধ। আর ক্রেতাদের বাণিজ্যিক চাপ ইতোমধ্যেই এসবের থেকে স্বাধীনভাবে কাজ করছে, কারণ নিজস্ব টেকসইতা প্রতিশ্রুতি থাকা ব্র্যান্ডদের সরবরাহকারীর তথ্য এখনই দরকার — পাসপোর্টের সময়সূচি যাই করুক না কেন।',
      },
      {
        en: 'The useful way to read the plan is as a statement about the shape of the eventual requirement, not its date. It tells you which product groups, in which order, and therefore which internal systems and records are most likely to be in scope. That is enough to justify preparatory work that is worth doing regardless of the final specification.',
        bn: 'পরিকল্পনাটি পড়ার কাজের উপায় হলো এটিকে চূড়ান্ত শর্তের তারিখ নয়, তার আকৃতি সম্পর্কিত বক্তব্য হিসেবে দেখা। এটি বলে কোন পণ্যগোষ্ঠী, কোন ক্রমে, আর ফলে কোন অভ্যন্তরীণ সিস্টেম ও রেকর্ডগুলোর সম্ভাব্য পরিধিতে পড়ার কথা। চূড়ান্ত বিশদ বিবরণ যাই হোক না কেন, যে প্রস্তুতিমূলক কাজের মূল্য আছে তা ন্যায্যতা পেতে এটুকুই যথেষ্ট।',
      },
      {
        en: 'Practically, that means investing in knowing what you hold rather than in a specific output format. Formats, fields and deadlines will be revised; the underlying question of whether you can locate, verify and evidence product information per style will not. Preparation aimed at that question holds its value whichever way the timetable moves.',
        bn: 'ব্যবহারিকভাবে এর অর্থ হলো একটি নির্দিষ্ট আউটপুট ফরম্যাটে নয়, আপনার কাছে যা আছে তা জানার বিষয়ে বিনিয়োগ করা। ফরম্যাট, ক্ষেত্র ও সময়সীমা সংশোধিত হবে; স্টাইলভিত্তিক পণ্য-তথ্য খুঁজে পাওয়া, যাচাই করা ও প্রমাণ করা যায় কি না সেই মৌলিক প্রশ্নটি সংশোধিত হবে না। সেই প্রশ্নের দিকে নির্দেশিত প্রস্তুতি সময়সূচি যেদিকেই যাক, তার মূল্য ধরে রাখে।',
      },
    ],
    takeaways: [
      { en: 'The working plan signals priority, not a binding deadline.', bn: 'কর্মপরিকল্পনা অগ্রাধিকারের ইঙ্গিত দেয়, বাধ্যতামূলক সময়সীমা নয়।' },
      { en: 'Textile-specific requirements arrive through separate delegated acts.', bn: 'টেক্সটাইল-নির্দিষ্ট শর্তাবলি আলাদা প্রতিনিধি আইনের মাধ্যমে আসে।' },
      { en: 'Dates move; the underlying data requirements largely do not.', bn: 'তারিখ বদলায়; মৌলিক তথ্য-শর্তাবলি মূলত বদলায় না।' },
      { en: 'Buyer pressure is already running ahead of the regulatory timetable.', bn: 'ক্রেতাদের চাপ ইতোমধ্যেই নিয়ন্ত্রক সময়সূচির চেয়ে এগিয়ে চলছে।' },
    ],
  },

  {
    slug: 'reading-a-readiness-score',
    image: '/images/insights/reading-a-readiness-score.jpg',
    imageAlt: {
      en: 'A readiness profile chart showing scores across five dimensions',
      bn: 'পাঁচটি মাত্রায় স্কোর দেখানো একটি প্রস্তুতি প্রোফাইল চার্ট',
    },
    title: {
      en: 'How to Read a Readiness Score — and What It Is Not',
      bn: 'প্রস্তুতি স্কোর কীভাবে পড়বেন — আর এটি কী নয়',
    },
    topic: {
      en: 'Product Data & Information Management',
      bn: 'পণ্য-তথ্য ও তথ্য ব্যবস্থাপনা',
    },
    excerpt: {
      en: 'A single readiness number is useful for getting attention and dangerous for making decisions. The score is a summary of a profile, and the shape of that profile is what determines what you should do next.',
      bn: 'একক একটি প্রস্তুতি সংখ্যা মনোযোগ আকর্ষণে কাজের, কিন্তু সিদ্ধান্ত নেওয়ার ক্ষেত্রে বিপজ্জনক। স্কোর একটি প্রোফাইলের সারসংক্ষেপ, আর সেই প্রোফাইলের আকৃতিই নির্ধারণ করে পরে কী করা উচিত।',
    },
    date: '2026-11-24',
    readTime: { en: '5 min read', bn: '৫ মিনিটের পাঠ' },
    tags: [
      { en: 'Readiness score', bn: 'প্রস্তুতি স্কোর' },
      { en: 'Assessment', bn: 'মূল্যায়ন' },
      { en: 'Interpretation', bn: 'ব্যাখ্যা' },
    ],
    body: [
      {
        en: 'Management teams ask for a number, and a number is what the assessment software produces. The risk is that the number then becomes the objective. It should not be, for a reason that is structural rather than philosophical: two factories with the same overall score can need completely different work.',
        bn: 'ব্যবস্থাপনা দল একটি সংখ্যা চায়, আর মূল্যায়ন সফটওয়্যার একটি সংখ্যাই তৈরি করে। ঝুঁকি হলো সেই সংখ্যাটি পরে উদ্দেশ্যে পরিণত হয়। হওয়া উচিত নয়, আর এর কারণ দার্শনিক নয়, কাঠামোগত: একই সামগ্রিক স্কোর থাকা দুটি কারখানার সম্পূর্ণ ভিন্ন কাজের প্রয়োজন হতে পারে।',
      },
      {
        en: 'Consider two facilities both scoring in the middle of the range. The first holds good records that nobody can retrieve on request — a retrieval and accessibility problem. The second can retrieve everything quickly, but nothing is checked before it leaves — a validation problem. Identical scores, opposite remedies, and a budget spent on the wrong one is simply wasted.',
        bn: 'দুটি কারখানার কথা ভাবুন, দুটোরই স্কোর গড় সীমার মধ্যে। প্রথমটির কাছে ভালো রেকর্ড আছে যা চাওয়ার সময় কেউ খুঁজে পায় না — একটি পুনরুদ্ধার ও প্রবেশযোগ্যতার সমস্যা। দ্বিতীয়টি সবকিছু দ্রুত খুঁজে পায়, কিন্তু বের হওয়ার আগে কিছুই যাচাই হয় না — একটি বৈধতা-যাচাইয়ের সমস্যা। স্কোর অভিন্ন, প্রতিকার বিপরীত, আর ভুলটিতে ব্যয় করা বাজেট নিছক নষ্ট।',
      },
      {
        en: 'This is why the assessment reports across five dimensions rather than one. Manual data and digital data describe where information lives. Integration describes whether it moves between the departments that need it. Validation describes whether anyone checks it and whether a claim can be substantiated. Governance describes whether any of it survives staff turnover. The profile across those five is the finding; the single score is a headline for it.',
        bn: 'এ কারণেই মূল্যায়ন একটি নয়, পাঁচটি মাত্রায় প্রতিবেদন দেয়। ম্যানুয়াল তথ্য ও ডিজিটাল তথ্য বর্ণনা করে তথ্য কোথায় থাকে। সংহতকরণ বর্ণনা করে তা প্রয়োজনীয় বিভাগগুলোর মধ্যে চলাচল করে কি না। বৈধতা-যাচাই বর্ণনা করে কেউ তা পরীক্ষা করে কি না এবং কোনো দাবি প্রমাণ করা যায় কি না। শাসন বর্ণনা করে কর্মী বদলের পরেও এর কিছু টিকে থাকে কি না। সেই পাঁচটির ওপর প্রোফাইলটিই হলো ফলাফল; একক স্কোর তার একটি শিরোনাম মাত্র।',
      },
      {
        en: 'There is a second caution. A readiness score describes the agreed scope — one representative product at one physical factory. It is not a certificate, it does not predict compliance with a regulation whose final fields are still being written, and it is not comparable to another factory’s score unless both were assessed on the same scope. Treating it as a grade invites exactly the over-reading the framework warns against.',
        bn: 'আরেকটি সতর্কতা আছে। একটি প্রস্তুতি স্কোর সম্মত পরিধি বর্ণনা করে — একটি প্রতিনিধিত্বমূলক পণ্য, একটি নির্দিষ্ট কারখানা। এটি কোনো সার্টিফিকেট নয়, যে বিধিমালার চূড়ান্ত ক্ষেত্র এখনো লেখা হচ্ছে তার সাথে সম্মতির পূর্বাভাস দেয় না, আর সমান পরিধিতে মূল্যায়ন না করা হলে অন্য কারখানার স্কোরের সাথে তুলনীয় নয়। এটিকে গ্রেড হিসেবে দেখলে ঠিক সেই অতি-পাঠের দিকেই যাওয়া হয় যা কাঠামোর বিরুদ্ধে সতর্ক করে।',
      },
      {
        en: 'Read the score as a starting question rather than an answer. Where the profile dips is where a buyer request is most likely to expose you, and where the first improvement cycle should go. That reading is what turns a diagnostic into a plan — and it is the part that needs professional interpretation, because the software can produce the profile but cannot tell you which dip matters most in your operation.',
        bn: 'স্কোরটিকে উত্তর নয়, একটি শুরুর প্রশ্ন হিসেবে পড়ুন। প্রোফাইল যেখানে নামে, সেখানেই ক্রেতার অনুরোধ আপনাকে সবচেয়ে বেশি উন্মুক্ত করতে পারে, আর প্রথম উন্নয়ন চক্র সেখানেই যাওয়া উচিত। সেই পাঠই একটি রোগনির্ণয়কে পরিকল্পনায় রূপ দেয় — আর এটিই সেই অংশ যার পেশাদার ব্যাখ্যা প্রয়োজন, কারণ সফটওয়্যার প্রোফাইল তৈরি করতে পারে কিন্তু বলতে পারে না আপনার কার্যক্রমে কোন ঘাটতিটি সবচেয়ে বেশি গুরুত্বপূর্ণ।',
      },
    ],
    takeaways: [
      { en: 'Readiness is a profile across five dimensions, not a single grade.', bn: 'প্রস্তুতি একটি গ্রেড নয়, পাঁচ মাত্রার একটি প্রোফাইল।' },
      { en: 'Identical scores can need opposite remedies.', bn: 'অভিন্ন স্কোরের বিপরীত প্রতিকার প্রয়োজন হতে পারে।' },
      { en: 'A score describes the agreed scope — it is not certification.', bn: 'স্কোর সম্মত পরিধি বর্ণনা করে — এটি প্রত্যয়ন নয়।' },
      { en: 'Where the profile dips is where a buyer request will expose you first.', bn: 'প্রোফাইল যেখানে নামে, ক্রেতার অনুরোধ সেখানেই প্রথমে আপনাকে উন্মুক্ত করবে।' },
    ],
  },

  {
    slug: 'supplier-data-without-a-portal',
    image: '/images/insights/supplier-data-without-a-portal.jpg',
    imageAlt: {
      en: 'A sourcing officer reviewing supplier declarations across printed and digital records',
      bn: 'ছাপা ও ডিজিটাল রেকর্ড জুড়ে সরবরাহকারীর ঘোষণা পর্যালোচনা করছেন একজন সোর্সিং কর্মকর্তা',
    },
    title: {
      en: 'Collecting Supplier Data Without Building a Portal',
      bn: 'পোর্টাল না বানিয়েই সরবরাহকারীর তথ্য সংগ্রহ',
    },
    topic: {
      en: 'Supply Chain Traceability',
      bn: 'সরবরাহ শৃঙ্খল ট্রেসেবিলিটি',
    },
    excerpt: {
      en: 'Traceability programmes stall on the assumption that supplier data collection requires a platform. Most of what a buyer asks for at tier 1 and tier 2 can be assembled with a template, a deadline and someone who owns the follow-up.',
      bn: 'ট্রেসেবিলিটি কর্মসূচি এই অনুমানে আটকে যায় যে সরবরাহকারীর তথ্য সংগ্রহে একটি প্ল্যাটফর্ম দরকার। টায়ার ১ ও টায়ার ২-এ ক্রেতা যা চান তার বেশিরভাগই একটি টেমপ্লেট, একটি সময়সীমা এবং ফলো-আপের দায়িত্বে থাকা কাউকে দিয়ে সংগ্রহ করা যায়।',
    },
    date: '2026-12-01',
    readTime: { en: '6 min read', bn: '৬ মিনিটের পাঠ' },
    tags: [
      { en: 'Suppliers', bn: 'সরবরাহকারী' },
      { en: 'Traceability', bn: 'ট্রেসেবিলিটি' },
      { en: 'Data collection', bn: 'তথ্য সংগ্রহ' },
    ],
    body: [
      {
        en: 'When a factory is asked for upstream information — fibre origin, mill identity, processing facilities — the reflex is to scope a supplier portal. That instinct is understandable and usually premature. A portal solves the problem of collecting data at scale from many suppliers repeatedly; it does not solve the prior problem, which is that nobody has agreed what to ask for or who will chase it.',
        bn: 'যখন কোনো কারখানাকে আপস্ট্রিম তথ্য চাওয়া হয় — তন্তুর উৎস, মিলের পরিচয়, প্রক্রিয়াকরণ ইউনিট — প্রথম প্রতিক্রিয়া হয় একটি সরবরাহকারী পোর্টালের পরিকল্পনা করা। এই প্রবৃত্তি বোধগম্য এবং সাধারণত অপরিপক্ব। একটি পোর্টাল অনেক সরবরাহকারীর কাছ থেকে বারবার বড় আকারে তথ্য সংগ্রহের সমস্যা সমাধান করে; এটি আগের সমস্যাটি সমাধান করে না — আর তা হলো কী চাওয়া হবে বা কে তাড়া দেবে তা নিয়ে কেউ একমত হয়নি।',
      },
      {
        en: 'Start with the smallest useful artefact: a single template per information type, sent to a named contact, with a date attached. Ask only for what a passport or a buyer request actually needs. Every extra field reduces your response rate, and a partially completed declaration returned on time is more useful than a comprehensive one that never arrives.',
        bn: 'সবচেয়ে ছোট কাজের জিনিস দিয়ে শুরু করুন: প্রতিটি তথ্য-ধরনের জন্য একটি মাত্র টেমপ্লেট, নাম্বারযুক্ত একজন যোগাযোগকারীর কাছে পাঠানো, তারিখসহ। কেবল তাই চান যা একটি পাসপোর্ট বা ক্রেতার অনুরোধে সত্যিই দরকার। প্রতিটি অতিরিক্ত ক্ষেত্র আপনার সাড়ার হার কমিয়ে দেয়, আর সময়মতো ফেরত আসা আংশিকভাবে পূরণ করা একটি ঘোষণা সেই ব্যাপক ঘোষণার চেয়ে বেশি কাজের যা কখনোই আসে না।',
      },
      {
        en: 'Tier 1 is usually solvable this way within weeks. Tier 2 and beyond is where it gets genuinely hard, because your suppliers’ suppliers have no relationship with you and no obligation to answer. The workable approach there is to move the request up one level: ask each tier 1 supplier to obtain and vouch for the information from their own upstream, and make that a condition of the commercial relationship rather than a favour.',
        bn: 'টায়ার ১ সাধারণত এইভাবে কয়েক সপ্তাহের মধ্যে সমাধানযোগ্য। টায়ার ২ ও তার পরে আসল কঠিন জায়গা, কারণ আপনার সরবরাহকারীদের সরবরাহকারীদের সাথে আপনার কোনো সম্পর্ক নেই এবং উত্তর দেওয়ার কোনো বাধ্যবাধকতাও নেই। সেখানে কাজের পদ্ধতি হলো অনুরোধটি এক ধাপ ওপরে নেওয়া: প্রতিটি টায়ার ১ সরবরাহকারীকে নিজেদের আপস্ট্রিম থেকে তথ্য সংগ্রহ করে তার নিশ্চয়তা দিতে বলুন, আর এটিকে অনুগ্রহ নয়, বাণিজ্যিক সম্পর্কের শর্ত বানান।',
      },
      {
        en: 'What matters more than the collection mechanism is what happens to the answer. A declaration that arrives as a PDF and is filed in a folder is not traceability — it is a document you cannot query when a buyer asks about a specific style. The minimum viable step is to record, against each product, which supplier declarations you hold, what period they cover and where the evidence sits.',
        bn: 'সংগ্রহ পদ্ধতির চেয়ে বেশি গুরুত্বপূর্ণ হলো উত্তরটির কী হয়। যে ঘোষণা একটি PDF হিসেবে আসে এবং ফোল্ডারে রাখা হয় তা ট্রেসেবিলিটি নয় — এটি এমন একটি দলিল যা ক্রেতা নির্দিষ্ট স্টাইল সম্পর্কে প্রশ্ন করলে আপনি অনুসন্ধান করতে পারবেন না। সবচেয়ে ছোট কার্যকর পদক্ষেপ হলো প্রতিটি পণ্যের বিপরীতে লিপিবদ্ধ করা যে আপনার কাছে কোন সরবরাহকারীর ঘোষণা আছে, সেগুলো কোন সময়কাল কভার করে আর প্রমাণ কোথায় আছে।',
      },
      {
        en: 'Once that record exists and is being maintained, a portal becomes a reasonable purchase — because you now know what you are automating. Buying it first is the common inversion, and it is why so many traceability platforms end up holding incomplete data they were never going to be able to collect on their own.',
        bn: 'এই রেকর্ডটি একবার তৈরি ও রক্ষণাবেক্ষণ শুরু হলে, একটি পোর্টাল যৌক্তিক কেনাকাটা হয়ে ওঠে — কারণ তখন আপনি জানেন আপনি কী স্বয়ংক্রিয় করছেন। প্রথমে সেটি কেনাই সাধারণ বিপর্যয়, আর সে কারণেই এত ট্রেসেবিলিটি প্ল্যাটফর্মের কাছে অসম্পূর্ণ তথ্য পড়ে থাকে যা তারা নিজেরা কখনোই সংগ্রহ করতে পারত না।',
      },
    ],
    takeaways: [
      { en: 'A template, a deadline and an owner beat a premature platform.', bn: 'একটি টেমপ্লেট, একটি সময়সীমা ও একজন দায়িত্বশীল ব্যক্তি অপরিপক্ব প্ল্যাটফর্মের চেয়ে ভালো।' },
      { en: 'Every extra field you ask for lowers your response rate.', bn: 'আপনি যত বেশি ক্ষেত্র চান, সাড়ার হার তত কমে।' },
      { en: 'Push tier-2 requests up through tier-1 suppliers as a commercial condition.', bn: 'টায়ার ২-এর অনুরোধ টায়ার ১ সরবরাহকারীদের মাধ্যমে বাণিজ্যিক শর্ত হিসেবে পাঠান।' },
      { en: 'A filed PDF is not traceability — record it against the product.', bn: 'ফাইল করা PDF ট্রেসেবিলিটি নয় — পণ্যের বিপরীতে লিপিবদ্ধ করুন।' },
    ],
  },

  {
    slug: 'bangladesh-rmg-where-factories-stand',
    title: {
      en: 'Where Bangladesh Factories Actually Stand on Product Data',
      bn: 'পণ্য-তথ্যে বাংলাদেশের কারখানাগুলো আসলে কোথায় দাঁড়িয়ে',
    },
    topic: {
      en: 'Bangladesh Textile DPP Readiness',
      bn: 'বাংলাদেশের টেক্সটাইল ডিপিপি প্রস্তুতি',
    },
    excerpt: {
      en: 'Most Bangladesh factories run paper files, spreadsheets and an ERP at the same time, and each holds a different version of the same product truth. That is not a failure — it is the starting point, and it is more workable than it looks.',
      bn: 'অধিকাংশ বাংলাদেশি কারখানায় কাগজের ফাইল, স্প্রেডশিট ও একটি ERP একই সাথে চলে, আর প্রতিটিতে একই পণ্য-সত্যের ভিন্ন সংস্করণ থাকে। এটি ব্যর্থতা নয় — এটি শুরুর বিন্দু, আর দেখতে যতটা কঠিন মনে হয় তার চেয়ে বেশি কাজ করা যায়।',
    },
    date: '2026-12-08',
    readTime: { en: '7 min read', bn: '৭ মিনিটের পাঠ' },
    tags: [
      { en: 'Bangladesh', bn: 'বাংলাদেশ' },
      { en: 'RMG', bn: 'আরএমজি' },
      { en: 'Readiness', bn: 'প্রস্তুতি' },
    ],
    body: [
      {
        en: 'Descriptions of factory data environments tend toward two extremes: either the fully manual operation with paper Tech Packs, or the digitised enterprise running a modern PLM. Neither describes most of Bangladesh’s apparel industry. The typical facility runs all three regimes at once, often for the same style.',
        bn: 'কারখানার তথ্য-পরিবেশের বর্ণনা সাধারণত দুটি চরম দিকে যায়: হয় কাগজের টেক প্যাক সহ সম্পূর্ণ ম্যানুয়াল কার্যক্রম, না হয় আধুনিক PLM চালানো ডিজিটালাইজড প্রতিষ্ঠান। কোনোটিই বাংলাদেশের পোশাক শিল্পের বেশিরভাগকে বর্ণনা করে না। সাধারণ কারখানা তিনটি ব্যবস্থাই একসাথে চালায়, প্রায়ই একই স্টাইলের জন্য।',
      },
      {
        en: 'A merchandising team may hold the approved Tech Pack as a printed file and a PDF. Production records sit in an ERP. Quality data lives in spreadsheets maintained by one person who has done it for nine years. Compliance certificates arrive as email attachments and are filed in a shared drive. None of this is unusual, and none of it is disqualifying.',
        bn: 'একটি মার্চেন্ডাইজিং দল অনুমোদিত টেক প্যাক ছাপা ফাইল ও PDF হিসেবে রাখতে পারে। উৎপাদনের রেকর্ড ERP-তে থাকে। গুণমানের তথ্য এমন একজনের রক্ষিত স্প্রেডশিটে থাকে যিনি নয় বছর ধরে এটি করছেন। সম্মতির সার্টিফিকেট ইমেইল সংযুক্তি হিসেবে আসে এবং একটি শেয়ার্ড ড্রাইভে রাখা হয়। এর কোনোটিই অস্বাভাবিক নয়, আর কোনোটিই অযোগ্যতার কারণ নয়।',
      },
      {
        en: 'What it does produce is a specific and predictable set of gaps. The first is retrieval: the information exists but cannot be assembled for one style within a working day. The second is consistency: the same field is recorded three different ways across three systems. The third is evidence: a claim can be made but the supporting document cannot be produced on request.',
        bn: 'তবে এটি একটি নির্দিষ্ট ও পূর্বানুমেয় ঘাটতির সেট তৈরি করে। প্রথমটি হলো পুনরুদ্ধার: তথ্য আছে কিন্তু একটি কর্মদিবসের মধ্যে এক স্টাইলের জন্য একত্রিত করা যায় না। দ্বিতীয়টি হলো সামঞ্জস্য: একই ক্ষেত্র তিনটি সিস্টেমে তিনভাবে লিপিবদ্ধ। তৃতীয়টি হলো প্রমাণ: একটি দাবি করা যায় কিন্তু চাওয়ার সময় সমর্থক দলিল পেশ করা যায় না।',
      },
      {
        en: 'These gaps are worth naming precisely because they are cheaper to close than they appear. Retrieval is largely an indexing and ownership question. Consistency improves once one system is designated the reference for each field, rather than trying to make all three agree. Evidence is an inventory exercise — establishing which certificates you hold, for which period, and linking them to the product record.',
        bn: 'এই ঘাটতিগুলো সুনির্দিষ্টভাবে নামকরণের মতো মূল্যবান, কারণ এগুলো বন্ধ করা দেখতে যতটা কঠিন তার চেয়ে সস্তা। পুনরুদ্ধার মূলত একটি সূচীকরণ ও মালিকানার প্রশ্ন। একবার প্রতিটি ক্ষেত্রের জন্য একটি সিস্টেমকে রেফারেন্স হিসেবে নির্দিষ্ট করলে সামঞ্জস্য উন্নত হয় — তিনটিকেই মিলিয়ে নেওয়ার চেষ্টা করার চেয়ে। প্রমাণ একটি তালিকা-করণ অনুশীলন — নির্ধারণ করা যে আপনার কাছে কোন সার্টিফিকেট আছে, কোন সময়ের জন্য, আর সেগুলো পণ্য-রেকর্ডের সাথে যুক্ত করা।',
      },
      {
        en: 'The honest position is that Bangladesh’s manufacturers are not behind on technology; they are behind on the connective tissue between records they already keep. That is a better starting point than it sounds. It means the first improvement cycle is usually about structure, ownership and retrieval — work that costs attention rather than capital, and that no software purchase can do on a factory’s behalf.',
        bn: 'সৎ অবস্থান হলো বাংলাদেশের উৎপাদকরা প্রযুক্তিতে পিছিয়ে নেই; তারা ইতোমধ্যে রাখা রেকর্ডগুলোর মধ্যে সংযোগের ক্ষেত্রে পিছিয়ে আছে। এটি শোনা যতটা খারাপ তার চেয়ে ভালো শুরুর বিন্দু। এর অর্থ হলো প্রথম উন্নয়ন চক্র সাধারণত কাঠামো, মালিকানা ও পুনরুদ্ধার নিয়ে — যে কাজে মূলধনের চেয়ে মনোযোগ বেশি লাগে, আর কোনো সফটওয়্যার কেনাই কারখানার হয়ে করতে পারে না।',
      },
    ],
    takeaways: [
      { en: 'Most factories run paper, spreadsheets and ERP simultaneously — that is the baseline.', bn: 'অধিকাংশ কারখানায় কাগজ, স্প্রেডশিট ও ERP একসাথে চলে — এটিই ভিত্তিস্তর।' },
      { en: 'The predictable gaps are retrieval, consistency and evidence.', bn: 'পূর্বানুমেয় ঘাটতিগুলো হলো পুনরুদ্ধার, সামঞ্জস্য ও প্রমাণ।' },
      { en: 'Naming one system as the reference per field beats reconciling all three.', bn: 'তিনটিকে মেলানোর চেয়ে প্রতি ক্ষেত্রে একটি সিস্টেমকে রেফারেন্স ধরা ভালো।' },
      { en: 'The first cycle costs attention more than capital.', bn: 'প্রথম চক্রে মূলধনের চেয়ে মনোযোগ বেশি লাগে।' },
    ],
  },

  {
    slug: 'durability-repair-end-of-life-data',
    title: {
      en: 'Durability, Repair and End-of-Life: The Data Nobody Has Yet',
      bn: 'স্থায়িত্ব, মেরামত ও জীবনান্ত: যে তথ্য কারোরই এখনো নেই',
    },
    topic: {
      en: 'Sustainability & Circularity',
      bn: 'টেকসইতা ও বৃত্তাকারতা',
    },
    excerpt: {
      en: 'Composition and supplier data are records of what happened. Durability, repairability and end-of-life guidance are forward-looking statements that someone has to stand behind — which makes them a governance question before they are a data one.',
      bn: 'গঠন ও সরবরাহকারীর তথ্য হলো যা ঘটেছে তার রেকর্ড। স্থায়িত্ব, মেরামতযোগ্যতা ও জীবনান্ত নির্দেশনা হলো ভবিষ্যৎমুখী বক্তব্য যার পেছনে কাউকে দাঁড়াতে হয় — যা এগুলোকে তথ্যের আগে একটি শাসনের প্রশ্ন বানায়।',
    },
    date: '2026-12-15',
    readTime: { en: '6 min read', bn: '৬ মিনিটের পাঠ' },
    tags: [
      { en: 'Circularity', bn: 'বৃত্তাকারতা' },
      { en: 'Durability', bn: 'স্থায়িত্ব' },
      { en: 'Governance', bn: 'শাসন' },
    ],
    body: [
      {
        en: 'Most passport fields describe the product as it was made: fibre composition, material suppliers, processing facilities, test evidence. A factory can, in principle, reconstruct all of it from records it already holds. Durability, repairability and end-of-life handling are different in kind.',
        bn: 'অধিকাংশ পাসপোর্ট ক্ষেত্র পণ্যটি যেভাবে তৈরি হয়েছে তা বর্ণনা করে: তন্তুর গঠন, উপকরণ সরবরাহকারী, প্রক্রিয়াকরণ ইউনিট, পরীক্ষার প্রমাণ। একটি কারখানা নীতিগতভাবে এসব ইতোমধ্যে থাকা রেকর্ড থেকে পুনর্গঠন করতে পারে। স্থায়িত্ব, মেরামতযোগ্যতা ও জীবনান্ত ব্যবস্থাপনা প্রকৃতিগতভাবে আলাদা।',
      },
      {
        en: 'These are statements about the future. How many washes a garment should withstand, whether it can be repaired, how it should be recycled or disposed of — none of these are recorded by the production process. They are asserted, which means someone in the organisation has to decide what the assertion is and accept responsibility for it.',
        bn: 'এগুলো ভবিষ্যৎ সম্পর্কিত বক্তব্য। একটি পোশাক কতবার ধোয়া সহ্য করবে, সেটি মেরামতযোগ্য কি না, সেটি কীভাবে পুনর্ব্যবহার বা নিষ্পত্তি করা হবে — উৎপাদন প্রক্রিয়া এগুলোর কোনোটিই লিপিবদ্ধ করে না। সেগুলো দাবি করা হয়, যার অর্থ প্রতিষ্ঠানে কাউকে সিদ্ধান্ত নিতে হবে দাবিটি কী এবং তার দায় নিতে হবে।',
      },
      {
        en: 'This is where circularity preparation usually goes wrong. Factories wait for a specification, expecting the required fields to be handed down. But the specification will define what must be stated, not what the statement should say. The substantive work — testing, defining care expectations, deciding what end-of-life advice you are prepared to give for each material combination — has to happen inside the business regardless.',
        bn: 'এখানেই বৃত্তাকারতার প্রস্তুতি সাধারণত ভুল পথে যায়। কারখানাগুলো একটি বিশদ বিবরণের জন্য অপেক্ষা করে, প্রত্যাশা করে প্রয়োজনীয় ক্ষেত্রগুলো উপর থেকে দেওয়া হবে। কিন্তু বিশদ বিবরণটি নির্ধারণ করবে কী বলতে হবে, সেই বক্তব্যে কী বলা উচিত তা নয়। মূল কাজ — পরীক্ষা, যত্ন প্রত্যাশা সংজ্ঞায়িত করা, প্রতিটি উপকরণ-সমন্বয়ের জন্য কী জীবনান্ত পরামর্শ দিতে আপনি প্রস্তুত তা সিদ্ধান্ত নেওয়া — যাই হোক ব্যবসার ভেতরেই করতে হবে।',
      },
      {
        en: 'There is a practical middle path. You do not need a finished position on every material to start. Begin with the combinations that make up most of your volume, and for each establish three things: what testing evidence already exists, what care and repair guidance the brand or your own experience supports, and who owns the decision. Volume concentrates quickly — most factories find that a small number of constructions account for the majority of output.',
        bn: 'একটি ব্যবহারিক মধ্যপন্থা আছে। শুরু করতে প্রতিটি উপকরণে চূড়ান্ত অবস্থান থাকার দরকার নেই। আপনার উৎপাদনের বেশিরভাগ অংশ যে সমন্বয়গুলো নিয়ে গঠিত তা দিয়ে শুরু করুন, আর প্রতিটির জন্য তিনটি বিষয় নিশ্চিত করুন: কী পরীক্ষা-প্রমাণ ইতোমধ্যে আছে, ব্র্যান্ড বা নিজের অভিজ্ঞতা কী যত্ন ও মেরামত নির্দেশনা সমর্থন করে, আর সিদ্ধান্তের মালিক কে। পরিমাণ দ্রুত কেন্দ্রীভূত হয় — অধিকাংশ কারখানা দেখে যে অল্প কিছু কাঠামোই উৎপাদনের বেশিরভাগ অংশ দখল করে।',
      },
      {
        en: 'Treating this as governance rather than data changes what you do next. It stops being a collection exercise and becomes a decision register: a short, owned list of statements the business is prepared to make, with the evidence behind each one and a named person responsible for keeping it current. That register is what a passport request will actually draw on.',
        bn: 'এটিকে তথ্য নয়, শাসন হিসেবে দেখলে পরের কাজ বদলে যায়। এটি সংগ্রহের অনুশীলন না হয়ে একটি সিদ্ধান্ত-নিবন্ধনে পরিণত হয়: ব্যবসা যে বক্তব্যগুলো দিতে প্রস্তুত তার একটি সংক্ষিপ্ত, দায়িত্বযুক্ত তালিকা, প্রতিটির পেছনে প্রমাণসহ এবং সেগুলো হালনাগাদ রাখার দায়িত্বে নাম্বারযুক্ত একজন। সেই নিবন্ধনই হলো যা একটি পাসপোর্ট অনুরোধ আসলে ব্যবহার করবে।',
      },
    ],
    takeaways: [
      { en: 'Durability and end-of-life are assertions, not records.', bn: 'স্থায়িত্ব ও জীবনান্ত রেকর্ড নয়, দাবি।' },
      { en: 'A future specification defines what to state, not what to say.', bn: 'ভবিষ্যৎ বিশদ বিবরণ কী বলতে হবে তা নির্ধারণ করে, কী বলা হবে তা নয়।' },
      { en: 'Start with the constructions that carry most of your volume.', bn: 'যে কাঠামোগুলো আপনার উৎপাদনের বেশিরভাগ বহন করে তা দিয়ে শুরু করুন।' },
      { en: 'Keep a decision register with named owners rather than a data dump.', bn: 'তথ্য-গুদাম নয়, দায়িত্বযুক্ত মালিকসহ একটি সিদ্ধান্ত-নিবন্ধন রাখুন।' },
    ],
  },

  {
    slug: 'forty-eight-hour-buyer-data-drill',
    title: {
      en: 'The 48-Hour Drill: If a Buyer Asked for Data Tomorrow',
      bn: '৪৮ ঘণ্টার মহড়া: ক্রেতা যদি কাল তথ্য চেয়ে বসে',
    },
    topic: {
      en: 'Bangladesh Textile DPP Readiness',
      bn: 'বাংলাদেশের টেক্সটাইল ডিপিপি প্রস্তুতি',
    },
    excerpt: {
      en: 'The cheapest readiness test costs nothing and takes two days. Pick one live style and try to assemble everything a European buyer might reasonably ask for, within 48 hours, using only what you can actually find.',
      bn: 'সবচেয়ে সস্তা প্রস্তুতি পরীক্ষার কোনো খরচ নেই আর সময় লাগে দুই দিন। একটি চলমান স্টাইল বেছে নিন আর ৪৮ ঘণ্টার মধ্যে, কেবল আপনার সত্যিই খুঁজে পাওয়া তথ্য ব্যবহার করে, একজন ইউরোপীয় ক্রেতা যা যুক্তিসঙ্গতভাবে চাইতে পারেন তা একত্রিত করার চেষ্টা করুন।',
    },
    date: '2026-12-22',
    readTime: { en: '5 min read', bn: '৫ মিনিটের পাঠ' },
    tags: [
      { en: 'Preparedness', bn: 'প্রস্তুতি' },
      { en: 'Buyer requests', bn: 'ক্রেতার অনুরোধ' },
      { en: 'Exercise', bn: 'মহড়া' },
    ],
    body: [
      {
        en: 'Readiness discussions tend to stay abstract until someone tries to produce something. The most useful exercise we know is also the simplest: choose one style currently in production and attempt to assemble a full information pack for it within 48 hours, without asking any supplier for anything new.',
        bn: 'কেউ কিছু তৈরির চেষ্টা না করা পর্যন্ত প্রস্তুতি নিয়ে আলোচনা বিমূর্ত থাকে। আমাদের জানা সবচেয়ে কাজের অনুশীলনটিও সবচেয়ে সহজ: বর্তমানে উৎপাদনে থাকা একটি স্টাইল বেছে নিন আর ৪৮ ঘণ্টার মধ্যে, কারো কাছে নতুন কিছু না চেয়ে, তার জন্য একটি পূর্ণ তথ্য-প্যাক একত্রিত করার চেষ্টা করুন।',
      },
      {
        en: 'Ask for the things a buyer would: fibre composition with tolerances, material and trim suppliers with facility names, processing and finishing locations, production records for the specific order, quality inspection results, and the compliance certificates that apply. Then try to produce them, exactly as you would if the request were real.',
        bn: 'যা একজন ক্রেতা চাইবেন তা চান: সহনশীলতাসহ তন্তুর গঠন, ইউনিটের নামসহ উপকরণ ও ট্রিম সরবরাহকারী, প্রক্রিয়াকরণ ও ফিনিশিংয়ের অবস্থান, নির্দিষ্ট অর্ডারের উৎপাদন রেকর্ড, গুণমান পরিদর্শনের ফলাফল, আর প্রযোজ্য সম্মতি সার্টিফিকেট। এরপর সেগুলো তৈরির চেষ্টা করুন, ঠিক যেভাবে করতেন যদি অনুরোধটি বাস্তব হতো।',
      },
      {
        en: 'What happens next is the point. Almost always, most of the pack arrives quickly, and a small number of items absorb nearly all of the time. Those items are the finding. They are usually not the exotic ones — they are things like a trim supplier’s facility address that only one person knows, a test report filed against a previous season, or a composition figure that differs between the Tech Pack and the ERP.',
        bn: 'এরপর যা ঘটে তাই আসল বিষয়। প্রায় সবসময়ই প্যাকের বেশিরভাগ দ্রুত এসে যায়, আর অল্প কিছু বিষয় প্রায় পুরো সময় নিয়ে নেয়। সেই বিষয়গুলোই ফলাফল। সাধারণত সেগুলো অদ্ভুত কিছু নয় — সেগুলো হলো এমন কিছু যেমন একটি ট্রিম সরবরাহকারীর ইউনিটের ঠিকানা যা কেবল একজন জানে, আগের মৌসুমের বিপরীতে ফাইল করা একটি পরীক্ষা-প্রতিবেদন, বা টেক প্যাক ও ERP-তে ভিন্ন ভিন্ন একটি গঠনের সংখ্যা।',
      },
      {
        en: 'Write those down and resist the urge to fix them immediately. The value of the drill is diagnostic: it tells you where retrieval breaks, which records are not linked to the product, and where a single person is the only route to information. That is a dependency map, and it is more actionable than any score.',
        bn: 'সেগুলো লিখে রাখুন আর সাথে সাথে ঠিক করার তাড়া সংবরণ করুন। মহড়ার মূল্য রোগনির্ণয়মূলক: এটি বলে কোথায় পুনরুদ্ধার ভেঙে পড়ে, কোন রেকর্ডগুলো পণ্যের সাথে যুক্ত নয়, আর কোথায় একজন মানুষই তথ্যের একমাত্র পথ। এটি একটি নির্ভরতা-মানচিত্র, আর যেকোনো স্কোরের চেয়ে বেশি কার্যকর।',
      },
      {
        en: 'Run it again in three months with a different style and a shorter window. If the same items absorb the time, they are structural and worth fixing properly. If different items do, the problem is process rather than any specific record — and process problems respond well to a named owner and a routine.',
        bn: 'তিন মাস পর ভিন্ন একটি স্টাইল ও আরও ছোট সময়সীমা দিয়ে আবার চালান। যদি একই বিষয়গুলো সময় নেয়, সেগুলো কাঠামোগত আর সঠিকভাবে ঠিক করার মতো। যদি ভিন্ন বিষয় সময় নেয়, সমস্যাটি কোনো নির্দিষ্ট রেকর্ডের নয়, প্রক্রিয়ার — আর প্রক্রিয়ার সমস্যা দায়িত্বপ্রাপ্ত একজন মালিক ও একটি রুটিনে ভালো সাড়া দেয়।',
      },
    ],
    takeaways: [
      { en: 'Pick one live style and try to assemble a full pack in 48 hours.', bn: 'একটি চলমান স্টাইল বেছে নিন আর ৪৮ ঘণ্টায় পূর্ণ প্যাক একত্রিত করার চেষ্টা করুন।' },
      { en: 'The items that eat the time are the finding — note them, do not fix them yet.', bn: 'যে বিষয়গুলো সময় নিয়ে নেয় সেগুলোই ফলাফল — সেগুলো নোট করুন, এখনই ঠিক করবেন না।' },
      { en: 'The output is a dependency map, which beats an abstract score.', bn: 'ফলাফল হলো একটি নির্ভরতা-মানচিত্র, যা বিমূর্ত স্কোরের চেয়ে ভালো।' },
      { en: 'Repeat with a new style: recurring blockers are structural, varying ones are process.', bn: 'নতুন স্টাইল দিয়ে পুনরাবৃত্তি করুন: বারবার আসা বাধা কাঠামোগত, বদলানো বাধা প্রক্রিয়াগত।' },
    ],
  },

  {
    slug: 'data-governance-baseline',
    title: {
      en: 'A Data Governance Baseline You Can Build Before Any System',
      bn: 'যে তথ্য-শাসনের ভিত্তি যেকোনো সিস্টেমের আগেই গড়া যায়',
    },
    topic: {
      en: 'Product Data & Information Management',
      bn: 'পণ্য-তথ্য ও তথ্য ব্যবস্থাপনা',
    },
    excerpt: {
      en: 'Governance sounds like a policy document. In practice it is four mundane things: someone owns each field, someone knows when it was last checked, changes leave a trace, and access is deliberate. None of that requires new software.',
      bn: 'শাসন মানে একটি নীতি-দলিল শোনায়। বাস্তবে এটি চারটি সাধারণ বিষয়: প্রতিটি ক্ষেত্রের মালিক কেউ আছে, কেউ জানে তা শেষ কবে যাচাই হয়েছে, পরিবর্তনের চিহ্ন থাকে, আর প্রবেশাধিকার ইচ্ছাকৃত। এর কোনোটিতেই নতুন সফটওয়্যার লাগে না।',
    },
    date: '2026-12-29',
    readTime: { en: '6 min read', bn: '৬ মিনিটের পাঠ' },
    tags: [
      { en: 'Governance', bn: 'শাসন' },
      { en: 'Ownership', bn: 'মালিকানা' },
      { en: 'Data quality', bn: 'তথ্যের গুণমান' },
    ],
    body: [
      {
        en: 'Governance is the least appealing item on any readiness list and the one that most often determines whether the others hold. It is also the cheapest to start, because the first version is a register rather than a system.',
        bn: 'যেকোনো প্রস্তুতি তালিকায় শাসনই সবচেয়ে কম আকর্ষণীয় বিষয় এবং প্রায়ই সেটিই নির্ধারণ করে বাকিগুলো টিকবে কি না। শুরু করাও সবচেয়ে সস্তা, কারণ প্রথম সংস্করণটি একটি সিস্টেম নয়, একটি নিবন্ধন।',
      },
      {
        en: 'Four things make up a workable baseline. Ownership: every significant product-data field has a named person accountable for it, not a department. Currency: each has a last-reviewed date someone actually maintains. Traceability: when a value changes, there is a record of what it was and why. Access: it is deliberate who can change what.',
        bn: 'একটি কার্যকর ভিত্তি চারটি বিষয়ে গঠিত। মালিকানা: প্রতিটি গুরুত্বপূর্ণ পণ্য-তথ্য ক্ষেত্রের জন্য নাম্বারযুক্ত একজন দায়ী, কোনো বিভাগ নয়। সাম্প্রতিকতা: প্রতিটির একটি শেষ-পর্যালোচিত তারিখ আছে যা কেউ সত্যিই রক্ষণাবেক্ষণ করে। ট্রেসেবিলিটি: কোনো মান বদলালে সেটি কী ছিল ও কেন বদলালো তার একটি রেকর্ড থাকে। প্রবেশাধিকার: কে কী বদলাতে পারবে তা ইচ্ছাকৃত।',
      },
      {
        en: 'Ownership is the one that changes things fastest. In most factories, ambiguous fields are ambiguous because everyone touches them and nobody owns them. Assigning a name does not require authority or budget — it requires a decision, and it converts a data quality argument into a conversation with a specific person.',
        bn: 'মালিকানাই সবচেয়ে দ্রুত পরিবর্তন আনে। অধিকাংশ কারখানায় অস্পষ্ট ক্ষেত্রগুলো অস্পষ্ট থাকে কারণ সবাই সেগুলো স্পর্শ করে আর কেউ মালিকানা নেয় না। একটি নাম বরাদ্দ করতে ক্ষমতা বা বাজেট লাগে না — লাগে একটি সিদ্ধান্ত, আর এটি তথ্যের গুণমান নিয়ে তর্ককে একজন নির্দিষ্ট ব্যক্তির সাথে কথোপকথনে রূপ দেয়।',
      },
      {
        en: 'Currency is where good intentions usually die, because review dates are easy to set and tedious to maintain. The fix is to attach the review to something that already happens — a season handover, a buyer submission, an internal audit — rather than to a calendar reminder nobody will honour. Routines that ride on existing events survive; standalone ones do not.',
        bn: 'সাম্প্রতিকতাই সেখানে যেখানে সদিচ্ছা সাধারণত মারা যায়, কারণ পর্যালোচনার তারিখ নির্ধারণ করা সহজ কিন্তু রক্ষণাবেক্ষণ করা ক্লান্তিকর। সমাধান হলো পর্যালোচনাটি এমন কিছুর সাথে যুক্ত করা যা ইতোমধ্যে ঘটে — একটি মৌসুম হস্তান্তর, ক্রেতার কাছে জমা, একটি অভ্যন্তরীণ নিরীক্ষা — কোনো ক্যালেন্ডার রিমাইন্ডারের সাথে নয় যা কেউ মানবে না। বিদ্যমান ঘটনায় চড়ে থাকা রুটিন টিকে; স্বতন্ত্র রুটিন টিকে না।',
      },
      {
        en: 'None of this needs a platform, and doing it first makes any later platform purchase considerably more likely to succeed. Software can enforce ownership and traceability, but it cannot decide them. Factories that buy first and govern later end up with a system that faithfully records nobody’s responsibility.',
        bn: 'এর কোনোটিতেই প্ল্যাটফর্ম লাগে না, আর প্রথমে এটি করলে পরের যেকোনো প্ল্যাটফর্ম কেনা সফল হওয়ার সম্ভাবনা অনেক বেড়ে যায়। সফটওয়্যার মালিকানা ও ট্রেসেবিলিটি বলবৎ করতে পারে, কিন্তু সেগুলো সিদ্ধান্ত নিতে পারে না। যে কারখানা প্রথমে কেনে আর পরে শাসন করে, তার শেষ পর্যন্ত এমন একটি সিস্টেমে পড়ে থাকে যা বিশ্বস্তভাবে কারোরই দায়িত্ব লিপিবদ্ধ করে।',
      },
    ],
    takeaways: [
      { en: 'The baseline is ownership, currency, traceability and deliberate access.', bn: 'ভিত্তি হলো মালিকানা, সাম্প্রতিকতা, ট্রেসেবিলিটি ও ইচ্ছাকৃত প্রবেশাধিকার।' },
      { en: 'Ambiguous fields are ambiguous because nobody owns them.', bn: 'অস্পষ্ট ক্ষেত্র অস্পষ্ট থাকে কারণ কেউ মালিকানা নেয় না।' },
      { en: 'Attach reviews to events that already happen, not to calendar reminders.', bn: 'ক্যালেন্ডার রিমাইন্ডারে নয়, ইতোমধ্যে ঘটে যাওয়া ঘটনার সাথে পর্যালোচনা যুক্ত করুন।' },
      { en: 'Software can enforce governance but cannot decide it.', bn: 'সফটওয়্যার শাসন বলবৎ করতে পারে, কিন্তু তা সিদ্ধান্ত নিতে পারে না।' },
    ],
  },

  {
    slug: 'product-identity-and-item-coding',
    title: {
      en: 'Product Identity: Getting Item Coding Right Before Passports Arrive',
      bn: 'পণ্য পরিচয়: পাসপোর্ট আসার আগেই আইটেম কোডিং ঠিক করা',
    },
    topic: {
      en: 'DPP Standards & Technical Infrastructure',
      bn: 'ডিপিপি মান ও কারিগরি অবকাঠামো',
    },
    excerpt: {
      en: 'A passport is attached to a product, and a product has to be identifiable. Style, colour and size codes that work for production often do not survive contact with a buyer’s data request.',
      bn: 'একটি পাসপোর্ট একটি পণ্যের সাথে সংযুক্ত থাকে, আর একটি পণ্যকে শনাক্তযোগ্য হতে হবে। উৎপাদনের জন্য কাজ করা স্টাইল, রং ও সাইজ কোড প্রায়ই ক্রেতার তথ্য-অনুরোধের মুখোমুখি হলে টিকে না।',
    },
    date: '2027-01-05',
    readTime: { en: '5 min read', bn: '৫ মিনিটের পাঠ' },
    tags: [
      { en: 'Product identity', bn: 'পণ্য পরিচয়' },
      { en: 'Coding', bn: 'কোডিং' },
      { en: 'Standards', bn: 'মান' },
    ],
    body: [
      {
        en: 'Before any question of carriers or platforms, there is a more basic one: what identifier actually refers to the thing being described? Passport requirements will attach information to a product, and if a factory’s internal codes cannot be mapped unambiguously to what a buyer calls the same item, everything downstream is built on guesswork.',
        bn: 'ক্যারিয়ার বা প্ল্যাটফর্মের যেকোনো প্রশ্নের আগে আরও মৌলিক একটি প্রশ্ন আছে: কোন শনাক্তকারী আসলে যে জিনিসটি বর্ণনা করা হচ্ছে তা নির্দেশ করে? পাসপোর্টের শর্তাবলি একটি পণ্যের সাথে তথ্য যুক্ত করবে, আর যদি কোনো কারখানার অভ্যন্তরীণ কোডগুলোকে ক্রেতা একই পণ্য যা বলেন তার সাথে অদ্ব্যর্থভাবে ম্যাপ করা না যায়, তবে এর পরের সবকিছু অনুমানের ওপর দাঁড়ায়।',
      },
      {
        en: 'The common failure is not that codes are missing but that they are inconsistent in meaning. A style code may persist across seasons with changed materials. A colour code may differ between the merchandising team and the ERP. A size may be recorded differently in production and in quality records. Each is individually harmless and collectively fatal to a per-style query.',
        bn: 'সাধারণ ব্যর্থতা কোড অনুপস্থিত থাকা নয়, বরং সেগুলোর অর্থে অসামঞ্জস্য থাকা। একটি স্টাইল কোড উপকরণ বদলের পরও মৌসুম পেরিয়ে টিকে থাকতে পারে। মার্চেন্ডাইজিং দল ও ERP-তে একটি রং-কোড ভিন্ন হতে পারে। উৎপাদন ও গুণমান রেকর্ডে একটি সাইজ ভিন্নভাবে লিপিবদ্ধ হতে পারে। প্রতিটি আলাদাভাবে ক্ষতিকর নয়, কিন্তু সম্মিলিতভাবে স্টাইলভিত্তিক অনুসন্ধানের জন্য মারাত্মক।',
      },
      {
        en: 'The remedy is to designate one identifier as the reference for external purposes and maintain a mapping to everything else. This does not require re-coding the factory. It requires deciding which code travels outward, ensuring it is unique per sellable item, and keeping a simple cross-reference that someone owns.',
        bn: 'প্রতিকার হলো বাহ্যিক উদ্দেশ্যে একটি শনাক্তকারীকে রেফারেন্স হিসেবে নির্দিষ্ট করা এবং বাকি সবকিছুর সাথে একটি ম্যাপিং রক্ষণাবেক্ষণ করা। এর জন্য কারখানা পুনরায় কোড করতে হবে না। এর জন্য সিদ্ধান্ত নিতে হবে কোন কোডটি বাইরে যাবে, নিশ্চিত করতে হবে তা প্রতিটি বিক্রয়যোগ্য পণ্যের জন্য অনন্য, আর এমন একটি সাধারণ ক্রস-রেফারেন্স রাখতে হবে যার মালিক কেউ আছে।',
      },
      {
        en: 'It is also worth being realistic about granularity. Buyer requests may arrive at style level, at order level, or at item level depending on who is asking and why. A factory that can answer at style level today and knows precisely what it would take to answer at item level is in a far better position than one that assumed a single level and guessed wrong.',
        bn: 'সূক্ষ্মতা সম্পর্কেও বাস্তবসম্মত হওয়া জরুরি। কে কেন জানতে চাইছেন তার ওপর ভিত্তি করে ক্রেতার অনুরোধ স্টাইল স্তরে, অর্ডার স্তরে বা আইটেম স্তরে আসতে পারে। যে কারখানা আজ স্টাইল স্তরে উত্তর দিতে পারে আর সঠিক জানে আইটেম স্তরে উত্তর দিতে কী লাগবে, সেটি সেই কারখানার চেয়ে অনেক ভালো অবস্থানে যেটি একটি মাত্র স্তর ধরে নিয়েছিল আর ভুল অনুমান করেছিল।',
      },
      {
        en: 'This is unglamorous work with an unusually high return. Product identity is the join every other passport field depends on: composition, suppliers, processing, tests and certificates all attach to something. Get the join wrong and accurate data still produces a wrong answer.',
        bn: 'এটি অদ্ভুতভাবে বেশি প্রতিদানসহ একটি নিরস কাজ। পণ্য পরিচয় সেই সংযোগ যার ওপর অন্য প্রতিটি পাসপোর্ট ক্ষেত্র নির্ভর করে: গঠন, সরবরাহকারী, প্রক্রিয়াকরণ, পরীক্ষা ও সার্টিফিকেট সবই কোনো কিছুর সাথে যুক্ত হয়। সংযোগটি ভুল হলে নির্ভুল তথ্য থেকেও ভুল উত্তর আসে।',
      },
    ],
    takeaways: [
      { en: 'Decide which internal code travels outward and keep it unique per sellable item.', bn: 'কোন অভ্যন্তরীণ কোড বাইরে যাবে তা সিদ্ধান্ত নিন আর প্রতিটি বিক্রয়যোগ্য পণ্যের জন্য অনন্য রাখুন।' },
      { en: 'The risk is inconsistent meaning, not missing codes.', bn: 'ঝুঁকি কোড অনুপস্থিত থাকা নয়, অর্থের অসামঞ্জস্য।' },
      { en: 'You do not need to re-code the factory — maintain a mapping someone owns.', bn: 'কারখানা পুনরায় কোড করতে হবে না — মালিকযুক্ত একটি ম্যাপিং রাখুন।' },
      { en: 'Product identity is the join every other passport field depends on.', bn: 'পণ্য পরিচয় সেই সংযোগ যার ওপর অন্য প্রতিটি পাসপোর্ট ক্ষেত্র নির্ভর করে।' },
    ],
  },

  {
    slug: 'cost-of-waiting',
    title: {
      en: 'The Cost of Waiting: What Delay Actually Costs a Factory',
      bn: 'অপেক্ষার খরচ: বিলম্বে একটি কারখানার আসলে কী ক্ষতি হয়',
    },
    topic: {
      en: 'EU Regulations & Policy Developments',
      bn: 'ইইউ নিয়ম ও নীতি উন্নয়ন',
    },
    excerpt: {
      en: 'Waiting for the final rules feels prudent and is usually expensive. The cost is rarely a fine — it is compressed timelines, weaker negotiating positions and improvement work done under pressure.',
      bn: 'চূড়ান্ত নিয়মের জন্য অপেক্ষা করা বিচক্ষণ মনে হয় এবং সাধারণত ব্যয়বহুল। খরচটি কদাচিৎ কোনো জরিমানা — এটি সংকুচিত সময়সীমা, দুর্বল আলোচনার অবস্থান আর চাপে করা উন্নয়ন কাজ।',
    },
    date: '2027-01-12',
    readTime: { en: '5 min read', bn: '৫ মিনিটের পাঠ' },
    tags: [
      { en: 'Business case', bn: 'ব্যবসায়িক যুক্তি' },
      { en: 'Timing', bn: 'সময়' },
      { en: 'Risk', bn: 'ঝুঁকি' },
    ],
    body: [
      {
        en: 'The argument for waiting is reasonable on its face: the textile-specific requirements are not final, so why spend now against a moving specification? The flaw is that it treats readiness as a compliance task with a start date, when it is closer to a capability that takes time to build.',
        bn: 'অপেক্ষার যুক্তিটি উপরিভাগে যুক্তিসঙ্গত: টেক্সটাইল-নির্দিষ্ট শর্তাবলি চূড়ান্ত নয়, তবে একটি বদলানো বিশদ বিবরণের বিপরীতে এখনই কেন খরচ করবেন? ত্রুটিটি হলো এটি প্রস্তুতিকে একটি শুরুর তারিখ থাকা সম্মতির কাজ হিসেবে দেখে, অথচ এটি একটি সক্ষমতার কাছাকাছি যা গড়তে সময় লাগে।',
      },
      {
        en: 'The first cost is time compression. When a requirement does land, it will not arrive with a long runway. Factories that have done the foundational work — knowing what they hold, who owns it, how it is retrieved — can respond in weeks. Those starting from nothing face the same work under a deadline, with less room to choose suppliers or negotiate terms.',
        bn: 'প্রথম খরচ হলো সময় সংকোচন। একটি শর্ত যখনই আসুক, তা দীর্ঘ সময়সীমা নিয়ে আসবে না। যে কারখানাগুলো ভিত্তিমূলক কাজ করেছে — তাদের কাছে কী আছে, কার মালিকানায়, কীভাবে খুঁজে পাওয়া যায় — তারা সপ্তাহের মধ্যে সাড়া দিতে পারে। যারা শূন্য থেকে শুরু করছে তারা একই কাজ সময়সীমার চাপে পড়ে করে, সরবরাহকারী বেছে নেওয়া বা শর্ত নিয়ে আলোচনার কম জায়গা নিয়ে।',
      },
      {
        en: 'The second cost is negotiating position, and it is the one management notices. A buyer asking for structured information is also assessing how easy the factory is to work with. The factory that answers quickly with evidence becomes a preferred partner; the one that needs three weeks and several reminders becomes a risk to be managed. That judgement affects order allocation long before any passport requirement bites.',
        bn: 'দ্বিতীয় খরচ হলো আলোচনার অবস্থান, আর এটিই ব্যবস্থাপনা লক্ষ করে। কাঠামোবদ্ধ তথ্য চাওয়া একজন ক্রেতা একই সাথে মূল্যায়ন করছে কারখানার সাথে কাজ করা কতটা সহজ। যে কারখানা প্রমাণসহ দ্রুত উত্তর দেয় সে পছন্দের অংশীদার হয়; যাকে তিন সপ্তাহ ও কয়েকটি অনুস্মারক লাগে সে এমন একটি ঝুঁকি হয়ে ওঠে যা সামলাতে হয়। যেকোনো পাসপোর্টের শর্ত কার্যকর হওয়ার অনেক আগেই সেই বিচার অর্ডার বরাদ্দে প্রভাব ফেলে।',
      },
      {
        en: 'The third cost is the quality of the work itself. Improvement done under time pressure is improvement done badly: systems chosen before requirements are understood, data captured without ownership, suppliers asked for everything at once. The same budget spent earlier buys a considered programme; spent later it buys a scramble.',
        bn: 'তৃতীয় খরচ হলো কাজের গুণমান নিজেই। সময়ের চাপে করা উন্নয়ন খারাপভাবে করা উন্নয়ন: শর্ত বোঝার আগেই সিস্টেম বেছে নেওয়া, মালিকানা ছাড়া তথ্য ধরা, সরবরাহকারীদের কাছে একসাথে সবকিছু চাওয়া। একই বাজেট আগে খরচ করলে একটি চিন্তিত কর্মসূচি কেনা যায়; পরে খরচ করলে কেনা যায় একটি হুড়োহুড়ি।',
      },
      {
        en: 'None of this argues for buying technology against a specification that does not exist. It argues for doing now the work that is worth doing whatever the specification turns out to be: knowing what information you hold, who owns it, whether it can be evidenced, and how quickly you can produce it per style. That groundwork is cheap, holds its value, and is the difference between responding to a deadline and being driven by one.',
        bn: 'এর কোনোটিই এমন একটি বিশদ বিবরণের বিপরীতে প্রযুক্তি কেনার পক্ষে যুক্তি দেয় না যা নেই। এটি এখনই সেই কাজ করার পক্ষে যুক্তি দেয় যা বিশদ বিবরণ যাই হোক না কেন করার মতো: আপনার কাছে কী তথ্য আছে, কার মালিকানায়, তা প্রমাণ করা যায় কি, আর স্টাইলভিত্তিক কত দ্রুত তা পেশ করা যায়। সেই ভিত্তিপ্রস্তুতি সস্তা, এর মূল্য টিকে থাকে, আর একটি সময়সীমায় সাড়া দেওয়া ও সময়সীমার তাড়ায় চালিত হওয়ার মধ্যে এটিই পার্থক্য।',
      },
    ],
    takeaways: [
      { en: 'Readiness is a capability to build, not a task with a start date.', bn: 'প্রস্তুতি একটি শুরুর তারিখ থাকা কাজ নয়, গড়ে তোলার সক্ষমতা।' },
      { en: 'The real costs are compressed timelines and weaker negotiating position.', bn: 'আসল খরচ হলো সংকুচিত সময়সীমা ও দুর্বল আলোচনার অবস্থান।' },
      { en: 'Buyers judge ease of working with you long before any rule bites.', bn: 'কোনো নিয়ম কার্যকর হওয়ার অনেক আগেই ক্রেতারা আপনার সাথে কাজের সহজতা বিচার করেন।' },
      { en: 'Foundational work is cheap now and expensive under a deadline.', bn: 'ভিত্তিমূলক কাজ এখন সস্তা, সময়সীমার চাপে ব্যয়বহুল।' },
    ],
  },

];
