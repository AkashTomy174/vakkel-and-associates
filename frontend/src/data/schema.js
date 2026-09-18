import { SITE_URL, ORG } from "../components/Seo/Seo.jsx";

// Sitewide Organization + LocalBusiness (LegalService) structured data.
// Grounded only in facts already published on the site (footer/contact).
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#organization`,
  name: ORG.name,
  url: SITE_URL,
  email: ORG.email,
  telephone: ORG.telephone,
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    addressLocality: ORG.locality,
    addressRegion: ORG.region,
    addressCountry: ORG.country,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: ORG.name,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// BreadcrumbList builder for inner pages.
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const SITE_URL_EXPORT = SITE_URL;
