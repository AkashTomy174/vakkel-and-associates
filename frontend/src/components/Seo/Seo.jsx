import { Helmet } from 'react-helmet-async'

// Canonical production origin. Keep in sync with scripts/generate-sitemap.mjs.
export const SITE_URL = 'https://www.vakkeelandassociates.com'

// Central brand + org facts used across schema and meta. All values already
// exist elsewhere in the site (footer/contact) — nothing invented here.
export const ORG = {
  name: 'Vakkeel & Associates',
  legalName: 'Vakkeel & Associates',
  url: SITE_URL,
  email: 'Vakkeelandassociates@gmail.com',
  telephone: '+91-6369717520',
  locality: 'Nilambur',
  region: 'Kerala',
  country: 'IN',
}

// Reusable per-page SEO head manager.
// - title: 50–60 chars (page-level, unique)
// - description: 150–160 chars (page-level, unique)
// - path: route path used to build the absolute canonical URL
// - jsonLd: array of structured-data objects (or null)
function Seo({ title, description, path, image, type = 'website', noindex = false, jsonLd }) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={ORG.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {jsonLd?.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  )
}

export default Seo
