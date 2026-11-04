import { site } from '@/lib/site';
import { bi, list, note, p, type LegalSection } from './types';

export const privacySections: LegalSection[] = [
  {
    heading: bi('Introduction', 'ভূমিকা'),
    blocks: [
      p(
        'ReadyMynd respects the privacy of individuals and organizations who visit our website, contact us, request information, or enquire about our professional services.',
        'যে সব ব্যক্তি ও প্রতিষ্ঠান আমাদের ওয়েবসাইট পরিদর্শন করেন, আমাদের সাথে যোগাযোগ করেন, তথ্য চান বা আমাদের পেশাগত পরিষেবা সম্পর্কে জানতে চান, তাদের গোপনীয়তাকে ReadyMynd সম্মান করে।',
      ),
      p(
        'This Privacy Policy explains how ReadyMynd collects, uses, stores, protects, and handles personal information through its website and related communications.',
        'তার ওয়েবসাইট ও সংশ্লিষ্ট যোগাযোগের মাধ্যমে ব্যক্তিগত তথ্য ReadyMynd কীভাবে সংগ্রহ, ব্যবহার, সংরক্ষণ, সুরক্ষিত ও পরিচালনা করে, তা এই গোপনীয়তা নীতিমালায় ব্যাখ্যা করা হয়েছে।',
      ),
    ],
  },
  {
    heading: bi('Information We Collect', 'আমরা যে তথ্য সংগ্রহ করি'),
    blocks: [
      p(
        'We may collect information that visitors voluntarily provide when submitting enquiries, requesting a Textile DPP Digital Readiness Assessment, requesting a service brochure, or communicating with ReadyMynd. This information may include:',
        'দর্শনার্থীরা অনুসন্ধান জমা দেওয়ার, টেক্সটাইল ডিপিপি ডিজিটাল প্রস্তুতি মূল্যায়নের অনুরোধ করার, পরিষেবা ব্রোশিওর চাওয়ার বা ReadyMynd-এর সাথে যোগাযোগের সময় স্বেচ্ছায় যে তথ্য দেন, তা আমরা সংগ্রহ করতে পারি। এই তথ্যের মধ্যে থাকতে পারে:',
      ),
      list([
        bi('Name and professional designation.', 'নাম ও পেশাগত পদবি।'),
        bi('Company or factory name.', 'প্রতিষ্ঠান বা কারখানার নাম।'),
        bi('Business email address and telephone number.', 'ব্যবসায়িক ইমেইল ঠিকানা ও টেলিফোন নম্বর।'),
        bi(
          'Factory type, location, and relevant business information.',
          'কারখানার ধরন, অবস্থান ও প্রাসঙ্গিক ব্যবসায়িক তথ্য।',
        ),
        bi(
          'Enquiry details and information voluntarily included in messages.',
          'অনুসন্ধানের বিস্তারিত এবং বার্তায় স্বেচ্ছায় দেওয়া তথ্য।',
        ),
      ]),
      p(
        'We may also collect limited technical information, such as browser type, device information, IP address, and website usage information, where necessary for website operation, security, or approved analytics.',
        'ওয়েবসাইট পরিচালনা, নিরাপত্তা বা অনুমোদিত অ্যানালিটিক্সের জন্য প্রয়োজন হলে আমরা সীমিত কারিগরি তথ্য — যেমন ব্রাউজারের ধরন, ডিভাইসের তথ্য, আইপি ঠিকানা ও ওয়েবসাইট ব্যবহারের তথ্য — সংগ্রহ করতে পারি।',
      ),
    ],
  },
  {
    heading: bi('How We Use Information', 'আমরা তথ্য কীভাবে ব্যবহার করি'),
    blocks: [
      p('ReadyMynd may use collected information to:', 'ReadyMynd সংগৃহীত তথ্য ব্যবহার করতে পারে:'),
      list([
        bi('Respond to enquiries and service requests.', 'অনুসন্ধান ও পরিষেবার অনুরোধের উত্তর দিতে।'),
        bi('Provide requested brochures or information.', 'চাওয়া ব্রোশিওর বা তথ্য সরবরাহ করতে।'),
        bi(
          'Discuss assessment scope and potential engagements.',
          'মূল্যায়নের পরিধি ও সম্ভাব্য চুক্তি নিয়ে আলোচনা করতে।',
        ),
        bi('Communicate about agreed professional services.', 'সম্মত পেশাগত পরিষেবা সম্পর্কে যোগাযোগ করতে।'),
        bi('Maintain website security and technical functionality.', 'ওয়েবসাইটের নিরাপত্তা ও কারিগরি কার্যকারিতা বজায় রাখতে।'),
        bi('Meet applicable legal and regulatory obligations.', 'প্রযোজ্য আইনি ও নিয়ন্ত্রক বাধ্যবাধকতা পালন করতে।'),
      ]),
      p(
        'We do not use submitted business contact information for unrelated marketing communications without an appropriate basis or permission.',
        'যথাযথ ভিত্তি বা অনুমতি ছাড়া জমা দেওয়া ব্যবসায়িক যোগাযোগের তথ্য আমরা অসম্পর্কিত মার্কেটিং যোগাযোগে ব্যবহার করি না।',
      ),
    ],
  },
  {
    heading: bi('Assessment and Client Information', 'মূল্যায়ন ও ক্লায়েন্টের তথ্য'),
    blocks: [
      p(
        'Information supplied during a contracted Digital Readiness Assessment is handled according to the applicable engagement agreement, confidentiality commitments, and any agreed Non-Disclosure Agreement (NDA).',
        'চুক্তিবদ্ধ ডিজিটাল প্রস্তুতি মূল্যায়নের সময় দেওয়া তথ্য প্রযোজ্য চুক্তি, গোপনীয়তার প্রতিশ্রুতি এবং সম্মত যেকোনো নন-ডিসক্লোজার চুক্তি (এনডিএ) অনুযায়ী পরিচালিত হয়।',
      ),
      note(
        'The website Privacy Policy does not replace the confidentiality and information-handling provisions of a separately executed client agreement.',
        'ওয়েবসাইটের গোপনীয়তা নীতিমালা পৃথকভাবে সম্পাদিত ক্লায়েন্ট চুক্তির গোপনীয়তা ও তথ্য-পরিচালনা সংক্রান্ত বিধানের স্থলাভিষিক্ত নয়।',
      ),
    ],
  },
  {
    heading: bi('Information Sharing', 'তথ্য বণ্টন'),
    blocks: [
      p('ReadyMynd does not sell personal information.', 'ReadyMynd ব্যক্তিগত তথ্য বিক্রি করে না।'),
      p(
        'Information may be shared with authorized service providers where necessary for website hosting, communications, technical support, or other legitimate operational purposes, subject to appropriate confidentiality and security arrangements.',
        'ওয়েবসাইট হোস্টিং, যোগাযোগ, কারিগরি সহায়তা বা অন্য কোনো বৈধ কার্যকরী উদ্দেশ্যে প্রয়োজন হলে যথাযথ গোপনীয়তা ও নিরাপত্তা ব্যবস্থা সাপেক্ষে অনুমোদিত পরিষেবা প্রদানকারীর সাথে তথ্য বণ্টন করা হতে পারে।',
      ),
      p(
        'Information may also be disclosed where required by applicable law or lawful authority.',
        'প্রযোজ্য আইন বা বৈধ কর্তৃপক্ষের প্রয়োজনে তথ্য প্রকাশ করা হতে পারে।',
      ),
    ],
  },
  {
    heading: bi('Data Security', 'তথ্য নিরাপত্তা'),
    blocks: [
      p(
        'ReadyMynd applies reasonable administrative, technical, and organizational safeguards intended to protect information against unauthorized access, disclosure, alteration, or loss.',
        'অননুমোদিত প্রবেশ, প্রকাশ, পরিবর্তন বা ক্ষতির হাত থেকে তথ্য রক্ষা করতে ReadyMynd যুক্তিসঙ্গত প্রশাসনিক, কারিগরি ও সাংগঠনিক সুরক্ষা ব্যবস্থা প্রয়োগ করে।',
      ),
      p(
        'However, no internet transmission or electronic storage system can be guaranteed to be completely secure.',
        'তবে কোনো ইন্টারনেট ট্রান্সমিশন বা ইলেকট্রনিক সংরক্ষণ ব্যবস্থা সম্পূর্ণ নিরাপদ হওয়ার নিশ্চয়তা দেওয়া যায় না।',
      ),
    ],
  },
  {
    heading: bi('Data Retention', 'তথ্য সংরক্ষণের মেয়াদ'),
    blocks: [
      p(
        'Personal information is retained only for as long as reasonably necessary for the purpose for which it was collected, applicable contractual requirements, legitimate business needs, or legal obligations.',
        'যে উদ্দেশ্যে ব্যক্তিগত তথ্য সংগৃহীত হয়েছে সেই উদ্দেশ্য, প্রযোজ্য চুক্তিভিত্তিক প্রয়োজনীয়তা, বৈধ ব্যবসায়িক প্রয়োজন বা আইনি বাধ্যবাধকতা পূরণের জন্য যুক্তিসঙ্গতভাবে যতদিন প্রয়োজন, ততদিনই তা সংরক্ষিত হয়।',
      ),
      p(
        'Retention periods may vary according to the nature of the information and the relevant engagement.',
        'তথ্যের প্রকৃতি ও সংশ্লিষ্ট চুক্তির ওপর ভিত্তি করে সংরক্ষণের মেয়াদ ভিন্ন হতে পারে।',
      ),
    ],
  },
  {
    heading: bi('International Data Processing', 'আন্তর্জাতিক তথ্য প্রক্রিয়াকরণ'),
    blocks: [
      p(
        'Where website hosting, email, or other authorized service providers process information outside Bangladesh, ReadyMynd will review the applicable legal requirements and appropriate safeguards before relying on such arrangements.',
        'যেখানে ওয়েবসাইট হোস্টিং, ইমেইল বা অন্য অনুমোদিত পরিষেবা প্রদানকারীরা বাংলাদেশের বাইরে তথ্য প্রক্রিয়াকরণ করে, সেখানে এই ব্যবস্থার ওপর নির্ভর করার আগে ReadyMynd প্রযোজ্য আইনি প্রয়োজনীয়তা ও যথাযথ সুরক্ষা ব্যবস্থা পর্যালোচনা করবে।',
      ),
    ],
  },
  {
    heading: bi('Your Privacy Requests', 'আপনার গোপনীয়তা সংক্রান্ত অনুরোধ'),
    blocks: [
      p(
        'Individuals may contact ReadyMynd to request access to, correction of, or deletion of their personal information, or to raise concerns about its processing.',
        'নিজের ব্যক্তিগত তথ্যে প্রবেশাধিকার, সংশোধন বা মুছে ফেলার অনুরোধ করতে কিংবা সেটির প্রক্রিয়াকরণ নিয়ে উদ্বেগ জানাতে ব্যক্তিগণ ReadyMynd-এর সাথে যোগাযোগ করতে পারেন।',
      ),
      p(
        'Requests will be considered in accordance with applicable law, identity-verification requirements, and legitimate retention obligations.',
        'অনুরোধগুলো প্রযোজ্য আইন, পরিচয় যাচাইয়ের প্রয়োজনীয়তা এবং বৈধ সংরক্ষণ বাধ্যবাধকতা অনুযায়ী বিবেচনা করা হবে।',
      ),
    ],
  },
  {
    heading: bi('Cookies and Similar Technologies', 'কুকি ও অনুরূপ প্রযুক্তি'),
    blocks: [
      p(
        'Our website may use essential cookies and, where enabled, optional analytics or other technologies. Further information is available in our Cookie Policy.',
        'আমাদের ওয়েবসাইটে অপরিহার্য কুকি এবং চালু থাকলে ঐচ্ছিক অ্যানালিটিক্স বা অন্য প্রযুক্তি ব্যবহার করা হতে পারে। বিস্তারিত তথ্য আমাদের কুকি নীতিমালায় পাওয়া যাবে।',
      ),
    ],
  },
  {
    heading: bi('Third-Party Websites', 'তৃতীয় পক্ষের ওয়েবসাইট'),
    blocks: [
      p(
        'Our website may contain links to external websites, including regulatory authorities, standards organizations, and research publications.',
        'আমাদের ওয়েবসাইটে বাহ্যিক ওয়েবসাইটের লিংক থাকতে পারে, যার মধ্যে নিয়ন্ত্রক কর্তৃপক্ষ, মান নির্ধারণী সংস্থা ও গবেষণা প্রকাশনা অন্তর্ভুক্ত।',
      ),
      p(
        'ReadyMynd is not responsible for the privacy practices of independently operated third-party websites.',
        'স্বাধীনভাবে পরিচালিত তৃতীয় পক্ষের ওয়েবসাইটের গোপনীয়তা অনুশীলনের জন্য ReadyMynd দায়ী নয়।',
      ),
    ],
  },
  {
    heading: bi('Policy Updates', 'নীতিমালা হালনাগাদ'),
    blocks: [
      p(
        'ReadyMynd may update this Privacy Policy to reflect changes in website functionality, business operations, or applicable legal requirements. The latest version will be published on this page.',
        'ওয়েবসাইটের কার্যকারিতা, ব্যবসায়িক কার্যক্রম বা প্রযোজ্য আইনি প্রয়োজনীয়তার পরিবর্তন প্রতিফলিত করতে ReadyMynd এই গোপনীয়তা নীতিমালা হালনাগাদ করতে পারে। সর্বশেষ সংস্করণ এই পাতায় প্রকাশ করা হবে।',
      ),
    ],
  },
  {
    heading: bi('Contact', 'যোগাযোগ'),
    blocks: [
      p(
        'For privacy-related enquiries, please contact:',
        'গোপনীয়তা সংক্রান্ত অনুসন্ধানের জন্য যোগাযোগ করুন:',
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
