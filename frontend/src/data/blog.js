import blogMeta from './blogMeta.js'

// Full article bodies, keyed by slug. Kept in this module (NOT blogMeta) so that
// list/teaser surfaces can import lightweight metadata without pulling the long
// article text into their JS bundle.
const blogBodies = {
  'kottayam-land-resurvey-trap': [
    'Thomas, an NRI, paid a Rs 40 Lakh advance for 12 cents of commercial land in Kottayam. Digital re-survey records revealed that the property was only 9.1 cents, with the balance overlapping a government canal. The seller refused to correct the revenue records and threatened to invoke the forfeiture clause.',
    'We served an anticipatory breach notice under Section 39 of the Contract Act and Section 55(1)(a) of the Transfer of Property Act, then filed for an advance refund under the Specific Relief Act. An Attachment Before Judgment application under Order 38 Rule 5 CPC froze the property at the Sub-Registrar office.',
    'With the property legally blocked from sale or mortgage, the seller settled within 72 hours, refunding the full Rs 40 Lakh advance and legal costs. The lesson is clear: an EC and old deed are not enough in Kerala. Verify the Resurvey FMB sketch and Thandapper before signing.',
  ],
  'false-matrimonial-fir': [
    'After a sudden marital fallout, a technology professional in Trivandrum faced an FIR alleging cruelty and criminal breach of trust. The complaint also named his elderly parents and sister, who lived independently in Bangalore. Police arrived at the parents home late at night threatening arrest.',
    'We filed an anticipatory bail petition before the High Court of Kerala under Section 482 BNSS and relied on the Arnesh Kumar safeguards against routine arrest. Rental agreements and bank statements established the sisters independent residence, while locker access records undermined the allegation about jewellery.',
    'The High Court granted absolute pre-arrest bail to the husband, parents and sister, barring custodial detention and directing release on personal bonds. In matrimonial complaints, moving quickly with objective records can neutralize police pressure before custody.',
  ],
  'customs-coerced-confession': [
    'A Gulf returnee was detained at Cochin International Airport after gold paste was found inside an electric oven. After 18 hours of interrogation without sleep, he signed a Section 108 Customs Act statement alleging involvement in an organized syndicate.',
    'At his first judicial production, we filed a formal retraction recording that the confession was coerced and involuntary. We also challenged the search and seizure mahazar for its lack of independent gazetted witnesses and inventory defects, then established through call records and tickets that he was an unwitting carrier.',
    'The Economic Offences Court granted statutory bail, and timely representations neutralized the threat of COFEPOSA detention. A first-production retraction is critical when a Section 108 statement was not voluntary.',
  ],
  'signed-blank-cheque-defense': [
    'A hardware retailer in Thrissur borrowed Rs 5 Lakh and handed over signed blank cheques as security. After the principal and interest were repaid by bank transfer, the financier filled one cheque for Rs 15,00,000 and filed a Section 138 NI Act complaint.',
    'Relying on the probable-defence standard in Basalingappa v. Mudibasappa, we produced passbooks and account statements showing that the original debt had been discharged. We also sought the financiers income-tax returns, which could not explain an alleged undeclared cash loan of Rs 15 Lakh.',
    'The Magistrate dismissed the complaint and acquitted the retailer. A signed security cheque cannot support an arbitrary amount without a legally enforceable debt, but the safest practice is never to hand over blank signed instruments.',
  ],
  'p2p-crypto-account-freeze': [
    'A freelance developer received Rs 1,65,000 while selling USDT through a peer-to-peer exchange. After a separate Gujarat task-scam victim was traced through the same money trail, the developers primary account and linked accounts containing Rs 18 Lakh were frozen without notice.',
    'We challenged the sweeping lien under Section 102 CrPC and Section 106 BNSS, submitting exchange order books, blockchain transaction IDs, KYC records and invoices to establish bona fide third-party status. The developer offered a conditional lien for the disputed amount while seeking release of the operating balance.',
    'The High Court directed the bank to restrict the freeze to Rs 1,65,000 and restore normal business banking. Legitimate vendors should act quickly with a documented transaction trail rather than wait for an indefinite freeze.',
  ],
  'ndps-search-protocol-violations': [
    'A 22-year-old student in Kochi was stopped at a checkpoint and allegedly found with 55 grams of MDMA. He was charged under Section 22(c) NDPS Act and faced the stringent Section 37 bail threshold.',
    'The defence established that the officers did not provide the written Section 50 option of being searched before a Gazetted Officer or Magistrate. The FSL report also showed methamphetamine mixed with neutral cutting agents, bringing the pure narcotic content below the commercial threshold.',
    'The High Court granted regular bail, citing prima facie search non-compliance and chemical discrepancies. Mandatory safeguards in personal searches can be decisive at the liberty stage.',
  ],
  'kerala-data-bank-trap': [
    'A Gulf returnee bought 15 cents of garden land in Malappuram to build a commercial complex, but the Municipality rejected the permit because the BTR and Data Bank classified the property as Nilam. The RDO issued a stop memo after Rs 50 Lakhs had already been invested.',
    'We filed Form 5 under Rule 4(4D) with KSREC satellite imagery showing that the land had been reclaimed before the statutory cutoff. When the RDO delayed, a High Court writ secured a time-bound order. After removal from the Data Bank, Form 6 under Section 27A and Form A under Section 6A corrected the land classification and tax record.',
    'The stop memo was quashed and the building permit sanctioned without unauthorized conversion penalties. In Kerala, physical garden use does not override a Nilam entry: the statutory Form 5, Form 6 and Form A pipeline matters.',
  ],
  'good-samaritan-protection': [
    'A motorist in Palakkad rushed a badly injured rider to hospital during the Golden Hour and signed the casualty register as informant. Police later detained his car and demanded that he appear as a prosecution eyewitness and submit to repeated station visits.',
    'We invoked Section 134A of the Motor Vehicles Act and the Supreme Courts SaveLIFE Foundation directions. The representation explained that a Good Samaritan cannot be compelled to disclose identity, become a witness or face civil or criminal liability for emergency care. We also sought release of the vehicle under Section 497 BNSS.',
    'The District Police Chief closed the queries, released the car and recorded a voluntary affidavit without requiring court attendance. The law protects those who help first and ask questions later.',
  ],
  'unauthorized-dubai-property-purchase': [
    'A Kochi business owner used multiple PANs and an informal overseas arrangement to fund a Dubai apartment worth approximately Rs 3.75 Crores, exceeding the annual Liberalised Remittance Scheme limit. An ED and RBI notice threatened a penalty of up to three times the sum involved.',
    'Banking ledgers distinguished an unexecuted loan from hawala, and a Dubai co-ownership deed regularized the family contribution under the Overseas Investment Rules. We then filed a structured compounding application under Section 15 FEMA before formal adjudication.',
    'The RBI compounded the contravention on a sliding matrix and granted statutory closure with an administrative penalty. LRS family pooling for property must be matched by genuine joint ownership and careful reporting.',
  ],
  'green-channel-electronics-redemption': [
    'A passenger arriving from Sharjah carried 14 boxed iPhones and five laptops worth approximately Rs 22 Lakhs through the Green Channel. Customs seized the goods under Section 110 and initiated absolute-confiscation proceedings.',
    'The defence established that consumer electronics are not prohibited goods under the Foreign Trade Policy; they are dutiable goods imported in breach of baggage rules. Section 125(1) therefore required an option to redeem them on payment of a fine. Dubai invoices also challenged the inflated local valuation.',
    'The Commissioner of Customs (Appeals) rejected absolute confiscation. The passenger cleared the electronics after duty, a calibrated redemption fine and a mitigated penalty.',
  ],
  'premature-cheque-bounce-complaint': [
    'A distributor received a bounced cheque for Rs 12 Lakhs but issued a notice demanding Rs 16.5 Lakhs in combined damages, interest and fees. The complaint was filed only 12 days after notice and before the bank branch having statutory jurisdiction.',
    'Under Section 138 proviso (c), the drawer has 15 full days to pay and cause of action arises on the 16th day. Yogendra Pratap Singh makes a complaint filed earlier non-est. The notice also failed to make a clean demand for the cheque amount, while Section 142(2) placed jurisdiction at the Ernakulam collection branch.',
    'The High Court quashed the summons and proceeding under Section 528 BNSS. A cheque bounce complaint requires exact timing, an unambiguous demand and the correct territorial forum.',
  ],
  'section-9-emergency-account-freeze': [
    'A joint venture partner discovered that more than Rs 3.8 Crores from a Rs 14 Crore infrastructure project had been diverted to an unauthorized account, with further RTGS transfers planned before the weekend. Constituting a tribunal would have taken months.',
    'We approached the Commercial Court under Section 9(1)(ii)(b) Arbitration Act, satisfying the strong prima facie case, balance of convenience and irreparable injury test with audit trails and bank statements. The court ordered a debit freeze and restrained disposal of project machinery, while Section 21 notice was issued to trigger the 90-day clock under Section 9(2).',
    'The diverted money was returned to the joint escrow account and the parties consented to an expedited sole arbitrator. Section 9 can preserve the value of an arbitration before the tribunal exists.',
  ],
  'counterfeit-raid-anton-piller-order': [
    'An Ayurvedic cosmetics manufacturer found that a Palakkad network was copying its trade dress, bottle shape, typography and label artwork. More than 10,000 counterfeit bottles had entered wholesale channels, and advance notice would have allowed the stock and invoices to disappear.',
    'We filed an infringement and passing-off suit and secured an ex-parte Anton Piller order under Order XXVI Rule 9 CPC. An Advocate Local Commissioner was authorized to search, inventory and seize the goods, with police protection under Section 151 CPC.',
    'The dawn inspection sealed the warehouse, impounded 8,400 counterfeit units and secured dyes, packaging and dealer ledgers. Facing civil contempt and criminal exposure, the counterfeiters signed a permanent injunction and agreed to substantial compensatory damages.',
  ],
}

// Single source of truth: metadata from blogMeta, bodies from blogBodies above.
const blogPosts = blogMeta.map((post) => ({
  ...post,
  body: blogBodies[post.slug] || [],
}))

export default blogPosts

export { blogMeta }
