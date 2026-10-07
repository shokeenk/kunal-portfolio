import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { site, person } from './src/data/portfolio.js'

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Builds the <head> SEO tags from the same data file the components use.
function seo() {
  const image = new URL(site.ogImage, site.url).href
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    url: site.url,
    email: `mailto:${person.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
    sameAs: person.links.map((l) => l.href),
  }
  const tags = `<title>${esc(site.title)}</title>
    <meta name="description" content="${esc(site.description)}" />
    <link rel="canonical" href="${esc(site.url)}/" />
    <meta property="og:type" content="profile" />
    <meta property="og:url" content="${esc(site.url)}/" />
    <meta property="og:title" content="${esc(site.title)}" />
    <meta property="og:description" content="${esc(site.description)}" />
    <meta property="og:image" content="${esc(image)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(site.title)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(site.title)}" />
    <meta name="twitter:description" content="${esc(site.description)}" />
    <meta name="twitter:image" content="${esc(image)}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`
  return {
    name: 'portfolio-seo',
    transformIndexHtml: (html) => html.replace('<!--seo-->', tags),
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seo()],
})
