// Lightweight blog metadata for list/teaser surfaces (homepage + Insights index).
//
// The full articles (with long `body` arrays) live in ./blog.js and are only
// needed on the individual post pages. Keeping this small module separate lets
// the homepage and the Insights index avoid pulling the entire article corpus
// into their JS bundles, which is a large mobile win.
//
// `blog.js` re-uses these entries and adds the `body` field, so there is a
// single source of truth for slug/title/category/date/excerpt.

const blogMeta = [
  {
    id: 1,
    title:
      "Property Due Diligence & Advance Refund: The Kottayam Land Resurvey Trap",
    slug: "kottayam-land-resurvey-trap",
    category: "Insights",
    excerpt:
      "How a digital re-survey exposed a shortfall in commercial land and secured a full advance refund for an NRI buyer.",
    coverImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed83a0b?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Property Desk",
    date: "13 Sep 2026",
  },
  {
    id: 2,
    title: "Crime & Anticipatory Bail: The False Matrimonial FIR",
    slug: "false-matrimonial-fir",
    category: "Judgment Notes",
    excerpt:
      "Objective residency and banking records helped protect an entire family from arrest in a matrimonial criminal complaint.",
    coverImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Criminal Defence Team",
    date: "12 Sep 2026",
  },
  {
    id: 3,
    title: "Gold Smuggling: The Customs Detainment & Coerced Confession",
    slug: "customs-coerced-confession",
    category: "Legal Updates",
    excerpt:
      "A first-production retraction and procedural challenge dismantled the impact of an involuntary Section 108 statement.",
    coverImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Customs & Economic Offences Team",
    date: "11 Sep 2026",
  },
  {
    id: 4,
    title: "Cheque Bounce & Financial Fraud: The Signed Blank Cheque Defense",
    slug: "signed-blank-cheque-defense",
    category: "Judgment Notes",
    excerpt:
      "Banking records and income-tax contradictions rebutted a claim based on a blank security cheque.",
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Commercial Litigation Team",
    date: "10 Sep 2026",
  },
  {
    id: 5,
    title: "Crypto & P2P Trading: The Bank Account Freeze Defense",
    slug: "p2p-crypto-account-freeze",
    category: "Legal Updates",
    excerpt:
      "Verification trails and a clean money trail convinced the cyber cell to lift a blanket freeze on a P2P trader.",
    coverImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Cyber & Banking Desk",
    date: "9 Sep 2026",
  },
  {
    id: 6,
    title: "NDPS Defense: Search and Seizure Protocol Violations",
    slug: "ndps-search-protocol-violations",
    category: "Judgment Notes",
    excerpt:
      "Independent witnesses and a Section 50 compliance failure undermined the prosecution case at the threshold.",
    coverImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Criminal Defence Team",
    date: "8 Sep 2026",
  },
  {
    id: 7,
    title: "Kerala Data Bank: The Property Registration Trap",
    slug: "kerala-data-bank-trap",
    category: "Insights",
    excerpt:
      "A missed data-bank entry nearly derailed a clean title transfer, and how a timely rectification saved the sale.",
    coverImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Property Desk",
    date: "7 Sep 2026",
  },
  {
    id: 8,
    title: "Good Samaritan Protection: Legal Safeguards for Bystanders",
    slug: "good-samaritan-protection",
    category: "Legal Updates",
    excerpt:
      "The statutory shield that protects bystanders who help road-accident victims from harassment and liability.",
    coverImage:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Advocacy Team",
    date: "6 Sep 2026",
  },
  {
    id: 9,
    title: "NRI Property: Unauthorized Dubai Purchase Recovery",
    slug: "unauthorized-dubai-property-purchase",
    category: "Insights",
    excerpt:
      "Cross-border recovery strategy after an unauthorized property purchase drained an NRI investor.",
    coverImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel NRI Desk",
    date: "5 Sep 2026",
  },
  {
    id: 10,
    title: "Green Channel: Electronics Import & Redemption",
    slug: "green-channel-electronics-redemption",
    category: "Legal Updates",
    excerpt:
      "How a Green Channel declaration dispute was resolved with structured documentation and a redemption fine challenge.",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Customs & Economic Offences Team",
    date: "4 Sep 2026",
  },
  {
    id: 11,
    title: "Cheque Bounce: The Premature Complaint Strategy",
    slug: "premature-cheque-bounce-complaint",
    category: "Judgment Notes",
    excerpt:
      "Filing before the statutory period lapsed gave a complete defense to a Section 138 complaint.",
    coverImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Commercial Litigation Team",
    date: "3 Sep 2026",
  },
  {
    id: 12,
    title: "Section 9: Emergency Bank Account Freeze Relief",
    slug: "section-9-emergency-account-freeze",
    category: "Insights",
    excerpt:
      "Interim protection under Section 9 of the Arbitration Act to unfreeze critical operating accounts.",
    coverImage:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel Arbitration Team",
    date: "2 Sep 2026",
  },
  {
    id: 13,
    title: "Counterfeit Raid: The Anton Piller Order",
    slug: "counterfeit-raid-anton-piller-order",
    category: "Judgment Notes",
    excerpt:
      "Executing an Anton Piller order to seize counterfeit inventory before evidence could be destroyed.",
    coverImage:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1400&q=85",
    author: "Vakkeel IP & Enforcement Team",
    date: "1 Sep 2026",
  },
];

export default blogMeta;
