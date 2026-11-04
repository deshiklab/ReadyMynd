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
  body: Bi[];
  takeaways: Bi[];
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
    date: '2026-10-30',
    readTime: { en: '6 min read', bn: '৬ মিনিটের পাঠ' },
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
    date: '2026-10-30',
    readTime: { en: '4 min read', bn: '৪ মিনিটের পাঠ' },
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
    date: '2026-10-30',
    readTime: { en: '7 min read', bn: '৭ মিনিটের পাঠ' },
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
    date: '2026-10-30',
    readTime: { en: '5 min read', bn: '৫ মিনিটের পাঠ' },
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
    date: '2026-10-30',
    readTime: { en: '5 min read', bn: '৫ মিনিটের পাঠ' },
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
    date: '2026-10-30',
    readTime: { en: '6 min read', bn: '৬ মিনিটের পাঠ' },
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
];
