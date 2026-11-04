import { site } from '@/lib/site';
import { bi, list, note, p, type LegalSection } from './types';

export const termsSections: LegalSection[] = [
  {
    heading: bi('Introduction', 'ভূমিকা'),
    blocks: [
      p('Welcome to the ReadyMynd website.', 'ReadyMynd ওয়েবসাইটে স্বাগতম।'),
      p(
        'These Terms of Use govern access to and use of the website, including its informational content, professional service descriptions, articles, resources, and enquiry facilities.',
        'এই ব্যবহারের শর্তাবলি ওয়েবসাইটে প্রবেশাধিকার ও ব্যবহার পরিচালনা করে, যার মধ্যে রয়েছে তথ্যমূলক কনটেন্ট, পেশাগত পরিষেবার বিবরণ, নিবন্ধ, সম্পদ ও অনুসন্ধান সুবিধা।',
      ),
      p(
        'By accessing or using the website, visitors agree to comply with these Terms of Use, to the extent permitted by applicable law.',
        'ওয়েবসাইটে প্রবেশ বা ব্যবহারের মাধ্যমে দর্শনার্থীরা প্রযোজ্য আইন দ্বারা অনুমোদিত সীমা পর্যন্ত এই শর্তাবলি মেনে চলতে সম্মত হন।',
      ),
    ],
  },
  {
    heading: bi('About ReadyMynd', 'ReadyMynd সম্পর্কে'),
    blocks: [
      p(
        'ReadyMynd provides professional services focused on Textile Digital Product Passport (DPP) digital readiness for textile and apparel manufacturers in Bangladesh.',
        'ReadyMynd বাংলাদেশের টেক্সটাইল ও পোশাক প্রস্তুতকারকদের জন্য টেক্সটাইল ডিজিটাল প্রোডাক্ট পাসপোর্ট (ডিপিপি) ডিজিটাল প্রস্তুতিকেন্দ্রিক পেশাগত পরিষেবা প্রদান করে।',
      ),
      p('Our services comprise:', 'আমাদের পরিষেবাসমূহ:'),
      list([
        bi('Textile DPP Digital Readiness Assessment.', 'টেক্সটাইল ডিপিপি ডিজিটাল প্রস্তুতি মূল্যায়ন।'),
        bi(
          'Digital Advisory Services, available separately following completion of a paid assessment.',
          'ডিজিটাল অ্যাডভাইজরি পরিষেবা, যা অর্থপ্রদানকৃত মূল্যায়ন সম্পন্ন হওয়ার পর আলাদাভাবে পাওয়া যায়।',
        ),
      ]),
      p(
        'ReadyMynd operates independently and maintains a vendor-neutral, evidence-based approach.',
        'ReadyMynd স্বাধীনভাবে পরিচালিত হয় এবং বিক্রেতা-নিরপেক্ষ, প্রমাণ-ভিত্তিক দৃষ্টিভঙ্গি বজায় রাখে।',
      ),
    ],
  },
  {
    heading: bi('Purpose of Website Information', 'ওয়েবসাইটের তথ্যের উদ্দেশ্য'),
    blocks: [
      p(
        'The website provides general information about ReadyMynd, our professional services, the EU Textile Digital Product Passport, and related digital readiness considerations.',
        'ওয়েবসাইটটি ReadyMynd, আমাদের পেশাগত পরিষেবা, ইইউ টেক্সটাইল ডিজিটাল প্রোডাক্ট পাসপোর্ট এবং সংশ্লিষ্ট ডিজিটাল প্রস্তুতির বিবেচ্য বিষয় সম্পর্কে সাধারণ তথ্য প্রদান করে।',
      ),
      p(
        'Website content is intended for general business information and awareness.',
        'ওয়েবসাইটের কনটেন্ট সাধারণ ব্যবসায়িক তথ্য ও সচেতনতার উদ্দেশ্যে প্রস্তুত।',
      ),
      note(
        'It does not constitute legal advice, regulatory certification, technical implementation instructions, or a guarantee of compliance with EU legislation.',
        'এটি আইনি পরামর্শ, নিয়ন্ত্রক সনদ, কারিগরি বাস্তবায়নের নির্দেশনা বা ইইউ আইনের সাথে সম্মতির কোনো নিশ্চয়তা নয়।',
      ),
    ],
  },
  {
    heading: bi('Regulatory Information and Accuracy', 'নিয়ন্ত্রক তথ্য ও নির্ভুলতা'),
    blocks: [
      p(
        'ReadyMynd makes reasonable efforts to present accurate and relevant information.',
        'নির্ভুল ও প্রাসঙ্গিক তথ্য উপস্থাপনে ReadyMynd যুক্তিসঙ্গত প্রচেষ্টা চালায়।',
      ),
      p(
        'However, EU Digital Product Passport requirements, implementing measures, technical standards, and regulatory interpretations may change.',
        'তবে ইইউ ডিজিটাল প্রোডাক্ট পাসপোর্টের প্রয়োজনীয়তা, বাস্তবায়ন ব্যবস্থা, কারিগরি মান ও নিয়ন্ত্রক ব্যাখ্যা পরিবর্তিত হতে পারে।',
      ),
      p(
        'Visitors should consult applicable official legislation, regulatory publications, and qualified professional advisers when making legal or compliance decisions.',
        'আইনি বা সম্মতি সংক্রান্ত সিদ্ধান্ত নেওয়ার সময় দর্শনার্থীদের প্রযোজ্য সরকারি আইন, নিয়ন্ত্রক প্রকাশনা ও যোগ্য পেশাগত উপদেষ্টার সাথে পরামর্শ করা উচিত।',
      ),
      p(
        'ReadyMynd does not guarantee that all website information will remain complete, current, or suitable for every business circumstance.',
        'সব ওয়েবসাইট তথ্য যে সম্পূর্ণ, হালনাগাদ বা প্রতিটি ব্যবসায়িক পরিস্থিতির জন্য উপযুক্ত থাকবে, তা ReadyMynd নিশ্চিত করে না।',
      ),
    ],
  },
  {
    heading: bi('Professional Service Engagements', 'পেশাগত পরিষেবা চুক্তি'),
    blocks: [
      p(
        'Submitting an enquiry, requesting a brochure, or discussing a possible assessment does not automatically establish a professional service engagement.',
        'অনুসন্ধান জমা দেওয়া, ব্রোশিওর চাওয়া বা সম্ভাব্য মূল্যায়ন নিয়ে আলোচনা করার মাধ্যমে স্বয়ংক্রিয়ভাবে কোনো পেশাগত পরিষেবা চুক্তি গঠিত হয় না।',
      ),
      p(
        'Any paid assessment or advisory engagement is subject to a separately agreed scope, commercial terms, responsibilities, and contractual arrangements.',
        'যেকোনো অর্থপ্রদানকৃত মূল্যায়ন বা পরামর্শ চুক্তি পৃথকভাবে সম্মত পরিধি, বাণিজ্যিক শর্ত, দায়িত্ব ও চুক্তিভিত্তিক ব্যবস্থার অধীন।',
      ),
      note(
        'Where a signed service agreement conflicts with these website Terms of Use in relation to contracted services, the applicable service agreement will govern that engagement.',
        'চুক্তিবদ্ধ পরিষেবার ক্ষেত্রে স্বাক্ষরিত কোনো পরিষেবা চুক্তি এই ওয়েবসাইটের ব্যবহারের শর্তাবলির সাথে সাংঘর্ষিক হলে, সংশ্লিষ্ট পরিষেবা চুক্তিই সেই চুক্তি পরিচালনা করবে।',
      ),
    ],
  },
  {
    heading: bi('Assessment Scope and Limitations', 'মূল্যায়নের পরিধি ও সীমাবদ্ধতা'),
    blocks: [
      p(
        'ReadyMynd’s Textile DPP Digital Readiness Assessment examines digital capabilities within an agreed assessment scope.',
        'ReadyMynd-এর টেক্সটাইল ডিপিপি ডিজিটাল প্রস্তুতি মূল্যায়ন সম্মত পরিধির মধ্যে ডিজিটাল সক্ষমতা পরীক্ষা করে।',
      ),
      p('The standard engagement principle is One Product. One Factory.', 'আদর্শ চুক্তির নীতি হলো একটি পণ্য। একটি কারখানা।'),
      p(
        'Assessment findings are based on factory-provided information, available supporting evidence, and professional evaluation within the agreed scope.',
        'মূল্যায়নের ফলাফল কারখানা-সরবরাহকৃত তথ্য, উপলব্ধ সমর্থক প্রমাণ এবং সম্মত পরিধির মধ্যে পেশাগত মূল্যায়নের ওপর ভিত্তি করে তৈরি।',
      ),
      note(
        'The assessment is not a regulatory compliance audit, product certification, or assurance of future EU DPP compliance.',
        'এই মূল্যায়ন কোনো নিয়ন্ত্রক সম্মতি নিরীক্ষা, পণ্য সনদ বা ভবিষ্যতের ইইউ ডিপিপি সম্মতির নিশ্চয়তা নয়।',
      ),
    ],
  },
  {
    heading: bi('Digital Advisory Services', 'ডিজিটাল অ্যাডভাইজরি পরিষেবা'),
    blocks: [
      p(
        'Digital Advisory Services are optional and separately contracted after completion of a paid Textile DPP Digital Readiness Assessment.',
        'ডিজিটাল অ্যাডভাইজরি পরিষেবা ঐচ্ছিক এবং অর্থপ্রদানকৃত টেক্সটাইল ডিপিপি ডিজিটাল প্রস্তুতি মূল্যায়ন সম্পন্ন হওয়ার পর আলাদাভাবে চুক্তিবদ্ধ করা হয়।',
      ),
      p(
        'Advisory work is limited to agreed digital and technical matters, including data, digital systems, and system integration.',
        'পরামর্শমূলক কাজ সম্মত ডিজিটাল ও কারিগরি বিষয়ের মধ্যেই সীমাবদ্ধ, যার মধ্যে রয়েছে তথ্য, ডিজিটাল সিস্টেম ও সিস্টেম সংযোজন।',
      ),
      p(
        'ReadyMynd does not represent itself as a software implementation vendor or a provider of business process redesign services.',
        'ReadyMynd নিজেকে সফটওয়্যার বাস্তবায়নকারী বিক্রেতা বা ব্যবসায়িক প্রক্রিয়া পুনর্গঠনের পরিষেবা প্রদানকারী হিসেবে উপস্থাপন করে না।',
      ),
    ],
  },
  {
    heading: bi('Intellectual Property', 'মেধাসম্পদ'),
    blocks: [
      p(
        'Unless otherwise stated, website text, graphics, branding, original illustrations, and other materials belong to ReadyMynd or their respective rights holders.',
        'অন্য কিছু উল্লেখ না থাকলে, ওয়েবসাইটের লেখা, গ্রাফিক্স, ব্র্যান্ডিং, মৌলিক চিত্র ও অন্যান্য উপকরণ ReadyMynd বা সংশ্লিষ্ট স্বত্বাধিকারীর সম্পত্তি।',
      ),
      p(
        'Visitors may read, reference, and share links to publicly accessible website content for legitimate informational purposes.',
        'দর্শনার্থীরা বৈধ তথ্যের উদ্দেশ্যে প্রকাশ্যে প্রবেশযোগ্য ওয়েবসাইট কনটেন্ট পড়তে, উদ্ধৃত করতে ও লিংক শেয়ার করতে পারেন।',
      ),
      p(
        'Unauthorized commercial reproduction, redistribution, modification, or representation of ReadyMynd materials as another party’s work is not permitted, except where authorized by law or written permission.',
        'আইন বা লিখিত অনুমতি দ্বারা অনুমোদিত ক্ষেত্র ছাড়া ReadyMynd-এর উপকরণ অননুমোদিতভাবে বাণিজ্যিকভাবে পুনরুৎপাদন, পুনর্বণ্টন, পরিবর্তন করা বা অন্য কারো কাজ হিসেবে উপস্থাপন করা অনুমোদিত নয়।',
      ),
    ],
  },
  {
    heading: bi('Acceptable Website Use', 'ওয়েবসাইটের গ্রহণযোগ্য ব্যবহার'),
    blocks: [
      p('Visitors must not:', 'দর্শনার্থীরা করবেন না:'),
      list([
        bi(
          'Attempt unauthorized access to the website or its systems.',
          'ওয়েবসাইট বা এর সিস্টেমে অননুমোদিতভাবে প্রবেশের চেষ্টা করা।',
        ),
        bi(
          'Introduce malicious software or interfere with website security.',
          'ক্ষতিকর সফটওয়্যার প্রবেশ করানো বা ওয়েবসাইটের নিরাপত্তায় হস্তক্ষেপ করা।',
        ),
        bi(
          'Misuse enquiry forms or submit fraudulent information.',
          'অনুসন্ধান ফর্মের অপব্যবহার করা বা প্রতারণামূলক তথ্য জমা দেওয়া।',
        ),
        bi(
          'Reproduce protected website materials in violation of applicable rights.',
          'প্রযোজ্য স্বত্ব লঙ্ঘন করে সুরক্ষিত ওয়েবসাইট উপকরণ পুনরুৎপাদন করা।',
        ),
        bi('Use the website for unlawful purposes.', 'ওয়েবসাইট অবৈধ উদ্দেশ্যে ব্যবহার করা।'),
      ]),
    ],
  },
  {
    heading: bi('External Links and Resources', 'বাহ্যিক লিংক ও সম্পদ'),
    blocks: [
      p(
        'The website may link to external regulatory authorities, standards organizations, industry publications, research materials, and other independent sources.',
        'ওয়েবসাইটে বাহ্যিক নিয়ন্ত্রক কর্তৃপক্ষ, মান নির্ধারণী সংস্থা, শিল্প প্রকাশনা, গবেষণা উপকরণ ও অন্যান্য স্বাধীন উৎসের লিংক থাকতে পারে।',
      ),
      p('Such links are provided for information and convenience.', 'এই লিংকগুলো কেবল তথ্য ও সুবিধার জন্য প্রদান করা হয়।'),
      p(
        'ReadyMynd does not automatically endorse external organizations, products, services, or interpretations merely by linking to them.',
        'কেবল লিংক দেওয়ার মাধ্যমে ReadyMynd বাহ্যিক সংস্থা, পণ্য, পরিষেবা বা ব্যাখ্যাকে স্বয়ংক্রিয়ভাবে অনুমোদন করে না।',
      ),
    ],
  },
  {
    heading: bi('No Certification or Endorsement', 'কোনো সনদ বা অনুমোদন নেই'),
    blocks: [
      p(
        'ReadyMynd does not issue EU Textile DPP compliance certifications, certify factory products, or endorse particular software platforms or technology vendors through its website or assessment services.',
        'ReadyMynd তার ওয়েবসাইট বা মূল্যায়ন পরিষেবার মাধ্যমে ইইউ টেক্সটাইল ডিপিপি সম্মতির সনদ ইস্যু করে না, কারখানার পণ্য সনদ করে না এবং কোনো নির্দিষ্ট সফটওয়্যার প্ল্যাটফর্ম বা প্রযুক্তি বিক্রেতাকে অনুমোদন করে না।',
      ),
      p(
        'Any description of digital readiness reflects the agreed professional assessment scope and should not be interpreted as regulatory approval.',
        'ডিজিটাল প্রস্তুতির যেকোনো বিবরণ সম্মত পেশাগত মূল্যায়ন পরিধির প্রতিফলন, যা নিয়ন্ত্রক অনুমোদন হিসেবে ব্যাখ্যা করা উচিত নয়।',
      ),
    ],
  },
  {
    heading: bi('Limitation of Liability', 'দায়ের সীমাবদ্ধতা'),
    blocks: [
      p(
        'To the extent permitted by applicable law, ReadyMynd is not responsible for losses arising solely from reliance on general website information without appropriate independent evaluation.',
        'প্রযোজ্য আইন দ্বারা অনুমোদিত সীমা পর্যন্ত, যথাযথ স্বাধীন মূল্যায়ন ছাড়া কেবল সাধারণ ওয়েবসাইট তথ্যের ওপর নির্ভরতা থেকে উদ্ভূত ক্ষতির জন্য ReadyMynd দায়ী নয়।',
      ),
      p(
        'Nothing in these Terms excludes or restricts liability that cannot lawfully be excluded or restricted.',
        'এই শর্তাবলির কোনো কিছুই এমন দায় বাদ বা সীমিত করে না যা আইনত বাদ বা সীমিত করা যায় না।',
      ),
      p(
        'Liabilities and responsibilities arising from contracted professional services are governed by the relevant engagement agreement and applicable law.',
        'চুক্তিবদ্ধ পেশাগত পরিষেবা থেকে উদ্ভূত দায় ও দায়িত্ব সংশ্লিষ্ট চুক্তি ও প্রযোজ্য আইন দ্বারা পরিচালিত হয়।',
      ),
    ],
  },
  {
    heading: bi('Privacy and Cookies', 'গোপনীয়তা ও কুকি'),
    blocks: [
      p(
        'Use of the website may involve the processing of personal information and the operation of cookies or similar technologies.',
        'ওয়েবসাইট ব্যবহারের সাথে ব্যক্তিগত তথ্য প্রক্রিয়াকরণ এবং কুকি বা অনুরূপ প্রযুক্তির পরিচালনা জড়িত থাকতে পারে।',
      ),
      p(
        'Please refer to our Privacy Policy and Cookie Policy for further information.',
        'বিস্তারিত তথ্যের জন্য আমাদের গোপনীয়তা নীতিমালা ও কুকি নীতিমালা দেখুন।',
      ),
    ],
  },
  {
    heading: bi('Changes to These Terms', 'এই শর্তাবলির পরিবর্তন'),
    blocks: [
      p(
        'ReadyMynd may update these Terms of Use to reflect changes in website functionality, business practices, or applicable requirements. The latest version will be published on this page.',
        'ওয়েবসাইটের কার্যকারিতা, ব্যবসায়িক অনুশীলন বা প্রযোজ্য প্রয়োজনীয়তার পরিবর্তন প্রতিফলিত করতে ReadyMynd এই ব্যবহারের শর্তাবলি হালনাগাদ করতে পারে। সর্বশেষ সংস্করণ এই পাতায় প্রকাশ করা হবে।',
      ),
    ],
  },
  {
    heading: bi('Governing Law', 'প্রযোজ্য আইন'),
    blocks: [
      p(
        'These Terms of Use are governed by the applicable laws of Bangladesh, subject to any mandatory legal provisions that apply.',
        'প্রযোজ্য যেকোনো বাধ্যতামূলক আইনি বিধান সাপেক্ষে এই ব্যবহারের শর্তাবলি বাংলাদেশের প্রযোজ্য আইন দ্বারা পরিচালিত হয়।',
      ),
    ],
  },
  {
    heading: bi('Contact', 'যোগাযোগ'),
    blocks: [
      p(
        'For questions about these Terms of Use, please contact:',
        'এই ব্যবহারের শর্তাবলি নিয়ে প্রশ্ন থাকলে যোগাযোগ করুন:',
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
