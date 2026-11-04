/**
 * Shared, approved v1.8 content fragments reused across pages.
 * Source: docs/ReadyMynd Website Content v1.8.docx
 */

export type Dimension = {
  id: string;
  index: string;
  title: string;
  summary: string;
  detail: string;
  examines: string[];
};

export const dimensions: Dimension[] = [
  {
    id: 'manual-data',
    index: '01',
    title: 'Manual Data & Information',
    summary: 'Availability, completeness and accessibility of manually maintained product information.',
    detail:
      'Most factories still hold a meaningful share of product truth in paper Tech Packs, printed specifications, whiteboards and personal files. This dimension examines whether that information can actually be located, completed and used when a buyer asks for it.',
    examines: [
      'Where manually maintained product information physically lives',
      'Whether records are complete for the selected style',
      'How quickly information can be retrieved on request',
      'Dependency on individual knowledge holders',
    ],
  },
  {
    id: 'digital-data',
    index: '02',
    title: 'Digital Data & Information',
    summary: 'Digital information availability, quality, accessibility and supporting system capabilities.',
    detail:
      'Digital records are only useful when they are current, consistent and reachable. This dimension examines the quality and accessibility of digital product information and whether the supporting systems can hold what the business expects of them.',
    examines: [
      'Digital availability of specifications, BOMs and records',
      'Consistency between duplicate copies of the same data',
      'Accessibility across departments and roles',
      'Capability limits of the systems in use',
    ],
  },
  {
    id: 'integration',
    index: '03',
    title: 'Data & System Integration',
    summary: 'Connectivity, information exchange and interoperability.',
    detail:
      'Product information rarely sits in one place. This dimension examines how information moves — or fails to move — between merchandising, sourcing, production, quality and compliance systems.',
    examines: [
      'Handover points between departments',
      'Manual re-keying and its error exposure',
      'Interfaces between ERP, PLM, spreadsheets and files',
      'Exchange with suppliers and external partners',
    ],
  },
  {
    id: 'validation',
    index: '04',
    title: 'Data Validation, Verification & Auditability',
    summary: 'Information reliability, supporting evidence, validation controls and audit trails.',
    detail:
      'A claim is only as strong as the evidence behind it. This dimension examines whether reported information can be substantiated, whether checks exist before information leaves the factory, and whether decisions leave a trace.',
    examines: [
      'Availability of supporting evidence per data field',
      'Validation and approval controls before submission',
      'Version history and change traceability',
      'Auditability of information shared with buyers',
    ],
  },
  {
    id: 'governance',
    index: '05',
    title: 'Data Governance',
    summary: 'Information ownership, accountability, maintenance, access and integrity.',
    detail:
      'Sustainable readiness depends on clear accountability. This dimension examines who owns which information, how it is maintained over time, who may access it, and how integrity is protected.',
    examines: [
      'Named ownership of critical product information',
      'Maintenance routines and update responsibility',
      'Access control and confidentiality practice',
      'Integrity protection across the information lifecycle',
    ],
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Define Assessment Scope',
    body: 'Select one representative product, confirm one physical factory and identify applicable functions, information sources and responsibilities.',
  },
  {
    index: '02',
    title: 'Collect Information & Evidence',
    body: 'Use software-supported questionnaires, discussions and available records to collect relevant assessment information.',
  },
  {
    index: '03',
    title: 'Evaluate Digital Readiness',
    body: 'Examine applicable functions across the five assessment dimensions. The software supports scoring, while Enterprise Analysts assess the information and evidence.',
  },
  {
    index: '04',
    title: 'Identify Gaps & Priorities',
    body: 'Use software-supported gap analysis to identify weaknesses and dependencies. Analysts interpret their significance and determine improvement priorities.',
  },
  {
    index: '05',
    title: 'Report Findings & Recommendations',
    body: 'Generate structured reporting outputs through the assessment software. Analysts review the results, develop recommendations and prepare a proposed 90-day action plan.',
  },
];

export const factoryTypes = [
  {
    title: 'Garment Manufacturing Factories',
    body: 'Knitwear, woven garments, denim, sweaters and other apparel products.',
  },
  {
    title: 'Knitwear Manufacturing Factories',
    body: 'Facilities specializing in knitted apparel production.',
  },
  {
    title: 'Spinning Mills',
    body: 'Yarn manufacturing operations.',
  },
  {
    title: 'Knitting Mills',
    body: 'Knitted fabric manufacturing operations.',
  },
  {
    title: 'Weaving Mills',
    body: 'Woven fabric manufacturing operations.',
  },
  {
    title: 'Dyeing & Finishing Facilities',
    body: 'Textile processing and finishing operations.',
  },
  {
    title: 'Fabric Manufacturing Facilities',
    body: 'Manufacturers producing textile fabrics.',
  },
  {
    title: 'Composite Textile Mills',
    body: 'Integrated facilities combining multiple textile manufacturing activities.',
  },
];

export const reportOutputs = [
  {
    title: 'Assessment Scope & Functional Coverage',
    body: 'The agreed product, facility, functions and information sources examined.',
  },
  {
    title: 'Overall Digital Readiness Findings and Score',
    body: 'A single management-level view of current digital readiness.',
  },
  {
    title: 'Function-Wise Findings and Scores',
    body: 'Results broken down by the factory functions included in scope.',
  },
  {
    title: 'Five-Dimension Readiness Results',
    body: 'Performance across manual data, digital data, integration, validation and governance.',
  },
  {
    title: 'Digital Gaps & Cross-Functional Dependencies',
    body: 'Weaknesses that span departments and cannot be fixed by one team alone.',
  },
  {
    title: 'Prioritised Improvement Recommendations',
    body: 'Improvement actions ordered by significance and practicality.',
  },
  {
    title: 'Proposed 90-Day Action Plan',
    body: 'A sequenced, realistic plan for the first improvement cycle.',
  },
];

export const assessmentBenefits = [
  {
    title: 'Strengthen Buyer Readiness',
    body: 'Understand the ability to respond to emerging product-information requests.',
  },
  {
    title: 'Improve Investment Decisions',
    body: 'Identify capability gaps before selecting additional technologies.',
  },
  {
    title: 'Avoid Unnecessary Costs',
    body: 'Recognize opportunities to improve or reuse existing information and systems.',
  },
  {
    title: 'Increase Management Visibility',
    body: 'Understand weaknesses and dependencies across relevant departments.',
  },
  {
    title: 'Support Competitiveness',
    body: 'Develop information capabilities relevant to changing market expectations.',
  },
  {
    title: 'Prioritise Improvements',
    body: 'Direct attention and resources toward the most important assessed gaps.',
  },
];

export const advisoryAreas = [
  {
    index: '01',
    title: 'Data Advisory',
    subtitle: 'Improve the Readiness of Textile DPP Information',
    body: 'Examine product-data structure, completeness, quality, accessibility and management requirements. Identify technical improvements needed to make relevant information more usable and reliable.',
    points: [
      'Product data structure and field definition',
      'Completeness and quality of DPP-relevant information',
      'Accessibility and retrieval for buyer requests',
      'Management requirements and update routines',
    ],
  },
  {
    index: '02',
    title: 'Digital Systems Advisory',
    subtitle: 'Evaluate and Plan Suitable Digital Systems',
    body: 'Examine application capabilities, technical limitations and system requirements. Help management evaluate suitable digital system options based on assessed needs.',
    points: [
      'Capability of applications currently in use',
      'Technical limitations blocking readiness',
      'System requirements derived from assessment findings',
      'Vendor-neutral option evaluation',
    ],
  },
  {
    index: '03',
    title: 'System Integration Advisory',
    subtitle: 'Connect Data Across Systems and Organizations',
    body: 'Examine interfaces, connectivity, interoperability and data exchange requirements. Help factories plan technical integration between relevant internal applications and external information partners.',
    points: [
      'Interface and connectivity assessment',
      'Interoperability between internal applications',
      'Data exchange with suppliers and buyers',
      'Integration sequencing and prerequisites',
    ],
  },
];

export const advisoryPrinciples = [
  {
    title: 'Assessment Prerequisite',
    body: 'A completed paid ReadyMynd assessment is required.',
  },
  {
    title: 'Technical Scope',
    body: 'Advisory is limited to Data, Digital Systems and System Integration.',
  },
  {
    title: 'Vendor Neutrality',
    body: 'Recommendations are not tied to a particular technology provider.',
  },
  {
    title: 'Evidence-Based Priorities',
    body: 'Work is driven by documented assessment findings and relevant technical requirements.',
  },
  {
    title: 'Separate Engagement',
    body: 'Deliverables, duration and commercial terms are agreed independently.',
  },
];

export const evidenceSources = [
  'Tech Packs & Product Specifications',
  'Bills of Materials & Component Records',
  'Supplier & Facility Information',
  'Production & Quality Records',
  'Certificates & Compliance Documents',
  'Spreadsheets, PDFs & Manual Records',
  'ERP, PLM & Other Relevant Digital Systems',
  'Sustainability & Traceability Information',
];

export const informationAreas = [
  { title: 'Product Identification & Specifications', body: 'Style, product identity and technical specification records.' },
  { title: 'Materials, Components & Composition', body: 'Fibre, material and component composition information.' },
  { title: 'Suppliers, Facilities & Supply Chain Traceability', body: 'Supplier identity, facility mapping and chain-of-custody records.' },
  { title: 'Manufacturing & Quality Information', body: 'Production, inspection and quality assurance records.' },
  { title: 'Environmental & Sustainability Information', body: 'Environmental performance data and supporting declarations.' },
  { title: 'Compliance & Supporting Evidence', body: 'Certificates, test reports and compliance documentation.' },
  { title: 'Durability, Care, Repair & Circularity', body: 'Product lifespan, care, repairability and circularity information.' },
  { title: 'Reuse, Recycling & End-of-Life Information', body: 'End-of-life handling, reuse and recycling guidance.' },
];

export const commitments = [
  {
    title: 'Independent Assessment',
    body: 'Findings reflect the agreed scope, available information, supporting evidence and professional evaluation.',
  },
  {
    title: 'Vendor Neutrality',
    body: 'Recommendations are not influenced by an obligation to sell a particular technology.',
  },
  {
    title: 'Confidentiality',
    body: 'Factory information is handled according to agreed confidentiality arrangements.',
  },
  {
    title: 'Transparent Service Boundaries',
    body: 'We do not certify DPP compliance, endorse products or act as a software implementation vendor.',
  },
  {
    title: 'Responsible Reporting',
    body: 'We communicate assessment limitations and avoid guaranteeing regulatory or commercial outcomes.',
  },
];

export const capabilities = [
  {
    title: 'Bangladesh Origin & Local Presence',
    body: 'Our Bangladesh-based operations support direct engagement with factory management and relevant departments. This local focus helps us understand the practical context in which information is maintained and shared.',
  },
  {
    title: 'Enterprise Analysis & Digital Strategy',
    body: 'Our professional approach draws on enterprise analysis, digital systems understanding and technical evaluation to identify capability gaps and practical improvement opportunities.',
  },
  {
    title: 'Locally Developed Assessment Software',
    body: 'ReadyMynd has developed its own Textile DPP Digital Readiness Assessment software, supporting structured questionnaires, scoring, gap analysis and report generation.',
  },
  {
    title: 'Understanding of Bangladesh Factory Information Environments',
    body: 'We recognize the different information environments of garment factories, textile mills, processing facilities and composite manufacturers, including the coexistence of manual records, spreadsheets and enterprise applications.',
  },
  {
    title: 'Professional Interpretation & Practical Recommendations',
    body: 'Our Enterprise Analysts interpret assessment results in the context of factory-provided information and available supporting evidence, developing recommendations relevant to the agreed scope.',
  },
];

export const knowledgeTopics = [
  {
    title: 'EU Regulations & Policy Developments',
    body: 'ESPR and textile-specific regulatory developments.',
    detail:
      'The Ecodesign for Sustainable Products Regulation establishes the framework for Digital Product Passports. This topic tracks the regulation itself, its product-group priorities and the implementing measures that shape textile-specific obligations.',
  },
  {
    title: 'JRC Research & Product Information',
    body: 'Preparatory research and emerging information requirements.',
    detail:
      'Preparatory studies and technical research inform which product information fields may be required. This topic follows that work and translates it into practical preparation areas for manufacturers.',
  },
  {
    title: 'DPP Standards & Technical Infrastructure',
    body: 'Product identification, interoperability and data exchange.',
    detail:
      'Product identifiers, data carriers, interoperability principles and exchange standards determine how passport information is carried and read. This topic covers the technical foundations suppliers will need to work with.',
  },
  {
    title: 'Product Data & Information Management',
    body: 'Product specifications, Tech Packs, BOMs and digital records.',
    detail:
      'Passport information is assembled from records factories already hold. This topic covers the structure, quality and maintenance of Tech Packs, BOMs, specifications and supporting digital records.',
  },
  {
    title: 'Supply Chain Traceability',
    body: 'Supplier information, facility identification and information exchange.',
    detail:
      'Traceability connects information to the relevant product, materials, facilities and supply-chain activities. This topic covers supplier records, facility identification and upstream information exchange.',
  },
  {
    title: 'Sustainability & Circularity',
    body: 'Environmental information, supporting evidence, durability, reuse and recycling.',
    detail:
      'Environmental and circularity information is among the most evidence-dependent categories. This topic covers what suppliers may need to substantiate and how supporting evidence is assembled.',
  },
  {
    title: 'Bangladesh Textile DPP Readiness',
    body: 'Factory preparation, digital capabilities and local industry implications.',
    detail:
      'Local context matters. This topic covers how Bangladesh factories, mills and processing facilities can prepare, and what readiness looks like across the different information environments in the sector.',
  },
];

export type Insight = {
  slug: string;
  title: string;
  topic: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  body: string[];
  takeaways: string[];
};

export const insights: Insight[] = [
  {
    slug: 'what-espr-means-for-bangladesh-suppliers',
    title: 'What the ESPR Framework Means for Bangladesh Suppliers',
    topic: 'EU Regulations & Policy Developments',
    excerpt:
      'Regulation (EU) 2024/1781 establishes the framework for Digital Product Passports, with textiles among the priority product groups. Legal responsibility may sit with the operator placing a product on the EU market — but the information itself sits with manufacturers. We explain where that leaves Bangladesh suppliers during the preparation window.',
    date: '2026-10-30',
    readTime: '6 min read',
    featured: true,
    body: [
          'Regulation (EU) 2024/1781 — the Ecodesign for Sustainable Products Regulation — establishes the framework for introducing Digital Product Passports across covered product groups. Textiles and apparel are named among the priority groups, which is why the topic has moved from sustainability conferences into sourcing conversations.',
          'One distinction matters more than any other for Bangladesh suppliers: legal responsibility and information reality are not in the same place. The obligation to place a passport on the market may fall to the economic operator that puts the product on the EU market — often the brand or importer. But the substance of that passport: fibre composition, material suppliers, processing facilities, test evidence, production records — sits with manufacturers and upstream suppliers.',
          'That asymmetry is the practical reason to prepare now. When a buyer asks for structured, traceable product information, the request lands on the factory regardless of where the legal duty formally sits. Factories that can answer quickly, with evidence, become easier to work with. Factories that cannot become a risk to be managed.',
          'The second reason to prepare now is that the textile-specific detail is still being developed. Final information fields, technical obligations and implementation dates will depend on the applicable EU rules. Because those rules are not fixed, spending on a specific software solution today is a bet on an outcome nobody can yet confirm. Understanding your own information capabilities is not a bet — it is groundwork that holds its value whichever way the rules land.',
          'Our recommendation is deliberately unglamorous: find out what you already have, where it lives, who owns it and whether you can evidence it. That is the whole of readiness, and it precedes any technology decision.',
        ],
        takeaways: [
          'ESPR (Regulation (EU) 2024/1781) creates the DPP framework; textiles are a priority group.',
          'Legal duty and information custody sit with different parties — preparation still lands on the factory.',
          'Because textile-specific detail is unsettled, capability assessment is lower-risk than software purchase.',
          'Buyer requests typically arrive before formal obligations do.',
        ],
  },
  {
    slug: 'buyer-requests-before-legal-deadlines',
    title: 'Buyer Information Requests Usually Arrive Before Legal Deadlines',
    topic: 'Supply Chain Traceability',
    excerpt:
      'European buyers may increasingly request structured, reliable and traceable information from manufacturing partners well before textile-specific obligations are finalised. Factories that understand their existing information capabilities respond faster and negotiate from a stronger position.',
    date: '2026-10-30',
    readTime: '4 min read',
    featured: true,
    body: [
          'There is a persistent assumption in the supply chain that preparation can wait until the textile-specific Digital Product Passport rules are finalised. Commercially, that assumption is expensive.',
          'European buyers operate on their own timelines. They face their own reporting commitments, their own board pressure and their own due diligence obligations. When they need structured information about materials, suppliers or processing, they ask for it — and they ask the party that holds it. Those requests do not wait for implementing acts.',
          'The factories that handle this well are not necessarily the most digital. They are the ones that can answer a specific question with a specific document inside a specific timeframe. That capability is mostly about knowing where things are and who is responsible for them.',
          'The factories that handle it badly tend to fail in a predictable way: the request arrives, three departments each hold part of the answer, nobody owns the whole, and the response takes three weeks and three revisions. By then the buyer has learned something about working with that factory.',
          'A readiness assessment does not change what a buyer asks for. It changes how a factory responds — with evidence rather than reassurance, and in days rather than weeks.',
        ],
        takeaways: [
          'Buyer information requests are driven by buyer obligations, not by EU implementation dates.',
          'Response speed and evidence quality shape commercial relationships.',
          'Failure is usually organisational — unclear ownership — not technological.',
          'Knowing where information lives is the highest-leverage preparation step.',
        ],
  },
  {
    slug: 'five-dimensions-of-digital-readiness',
    title: 'The Five Dimensions of Digital Readiness',
    topic: 'Product Data & Information Management',
    excerpt:
      'Manual data, digital data, integration, validation and governance. Readiness is not one number — it is a profile across five dimensions, and the shape of that profile determines which improvements are worth making first.',
    date: '2026-10-30',
    readTime: '7 min read',
    featured: true,
    body: [
          'Readiness is often discussed as if it were a score. In practice it is a profile, and the shape of that profile determines which improvements are worth making first.',
          'The first two dimensions describe where information physically and digitally lives. Manual data covers the paper and personal-file reality of most factories: printed Tech Packs, whiteboards, spreadsheets on one laptop. Digital data covers the records that exist in systems — their availability, quality, accessibility and the capability limits of the systems holding them.',
          'The third dimension, integration, describes movement. Product information rarely stays in one place; it has to travel between merchandising, sourcing, production, quality and compliance. Every handover is an opportunity for the same field to be recorded three different ways.',
          'The fourth dimension is the one buyers actually test. Validation, verification and auditability ask whether a claim can be substantiated, whether anything checks information before it leaves the factory, and whether decisions leave a trace. A factory can hold excellent data and still fail here, because nobody can prove it.',
          'The fifth dimension, governance, determines whether any of it survives contact with staff turnover. Named ownership, maintenance routines, access control and integrity protection are what convert a one-off cleanup into a durable capability.',
          'Treating traceability as a sixth dimension is tempting and wrong. Traceability is a property that emerges across the other five — you cannot have it without manual and digital records, movement between them, evidence behind them, and someone accountable for them.',
        ],
        takeaways: [
          'Readiness is a profile across five dimensions, not a single score.',
          'Manual and digital data describe where information lives; integration describes how it moves.',
          'Validation and auditability are what buyers actually test.',
          'Governance determines whether improvements survive staff turnover.',
          'Traceability is an emergent property, not a separate dimension.',
        ],
  },
  {
    slug: 'better-data-before-bigger-technology',
    title: 'Better Data Before Bigger Technology',
    topic: 'DPP Standards & Technical Infrastructure',
    excerpt:
      'New platforms are often bought to solve problems that are actually data problems. This piece sets out why an evidence-based diagnostic should precede system selection, and how to tell the two apart.',
    date: '2026-10-30',
    readTime: '5 min read',
    body: [
          'When a factory struggles to answer a product information request, the reflex is to buy a platform. It is an understandable reflex and frequently the wrong one.',
          'Most information failures are not caused by absent software. They are caused by absent definitions — two departments using the same field to mean different things, a specification that was never updated after a material substitution, a supplier declaration that exists but cannot be found. No platform resolves any of those. A platform records them more tidily.',
          'This is why our assessment precedes any advisory conversation about systems. The diagnostic separates problems that are genuinely technical from problems that are organisational and can be fixed with a decision rather than a purchase.',
          'The commercial argument is straightforward. Software licences, implementation and the internal disruption of a rollout are real costs. If half of the underlying gap can be closed by naming an owner, standardising a template and archiving evidence properly, that half should be closed first — and the system requirement that remains will be far better specified.',
          'None of this is an argument against technology. It is an argument for buying it last, when you finally know what you need it to do.',
        ],
        takeaways: [
          'Most information failures are definitional, not technological.',
          'Platforms record tidy versions of untidy processes unless the process is fixed first.',
          'A diagnostic separates technical gaps from organisational ones.',
          'Requirements written after remediation are cheaper to satisfy.',
        ],
  },
  {
    slug: 'traceability-across-manual-and-digital-records',
    title: 'Traceability Across Manual, Spreadsheet and Enterprise Records',
    topic: 'Supply Chain Traceability',
    excerpt:
      'Most Bangladesh facilities run a mix of paper files, spreadsheets and enterprise applications. Traceability has to work across all three — and the handover points are where information is most often lost.',
    date: '2026-10-30',
    readTime: '5 min read',
    body: [
          'Almost every Bangladesh facility we encounter runs three information environments at once: paper files, spreadsheets, and at least one enterprise application. Traceability has to work across all three, and it almost always breaks at the joins.',
          'The paper layer is not the problem it is often made out to be. Physical records can be perfectly traceable if they are filed consistently and someone knows where they are. They become a problem when filing depends on one person, or when the file was never completed in the first place.',
          'Spreadsheets are the real wildcard. They are flexible enough to absorb any requirement and unconstrained enough to diverge silently. Two teams maintaining the same supplier list in two workbooks will, within a quarter, hold two different truths — and neither will know.',
          'Enterprise applications usually hold the cleanest data and the narrowest coverage. ERP and PLM modules tend to capture what was configured at implementation, not what the business actually needs for product information questions today.',
          'The practical work of traceability is therefore less about digitising everything and more about mapping the handovers: where information passes between layers, who re-keys it, and what gets lost. Those handovers are where readiness is won.',
        ],
        takeaways: [
          'Most facilities run paper, spreadsheet and enterprise layers simultaneously.',
          'Spreadsheets diverge silently — they are the highest-risk layer.',
          'ERP and PLM coverage often reflects past configuration, not present need.',
          'Map the handovers between layers before digitising anything.',
        ],
  },
  {
    slug: 'preparing-circularity-evidence',
    title: 'Preparing Environmental and Circularity Evidence',
    topic: 'Sustainability & Circularity',
    excerpt:
      'Environmental and end-of-life information is among the most evidence-dependent passport categories. A practical look at what suppliers can assemble now, from records they already hold.',
    date: '2026-10-30',
    readTime: '6 min read',
    body: [
          'Environmental and end-of-life information is among the most evidence-dependent categories in any product passport discussion — and among the least prepared in most factories.',
          'The reason is structural. Composition, supplier and production data are generated by your own operations. Environmental and circularity claims usually depend on information from somewhere else: a mill certificate, a chemical supplier declaration, a test report from a third-party laboratory, a footprint calculation built on assumptions someone else made.',
          'That dependency has two consequences. First, you cannot create this information on demand — you have to know which documents you hold, whether they are current, and whether they are linked to the specific style in question. Second, a claim without its supporting document is worse than no claim, because it invites the reviewer to question everything else you submitted.',
          'The practical starting point is an evidence inventory rather than a data project. For each environmental or circularity field a buyer might ask about, establish three things: do we hold supporting evidence, is it current, and can we retrieve it per style. Fields that fail all three are the ones worth working on — and they are usually fewer than expected, because the evidence often exists somewhere in the organisation and simply is not linked to the product record.',
          'Durability, repairability and end-of-life guidance deserve a separate note. These are forward-looking statements about a product, not records of what happened. They require someone to take responsibility for the statement, which is a governance question rather than a data one.',
        ],
        takeaways: [
          'Environmental claims depend on evidence held outside your operations.',
          'An unsubstantiated claim damages the credibility of everything submitted with it.',
          'Start with an evidence inventory, not a data-capture project.',
          'Durability and end-of-life statements are governance decisions, not records.',
        ],
  },
];
