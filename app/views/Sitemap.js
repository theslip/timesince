export function renderSitemap (html) {
  return `
    <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
      ${html}
    </urlset>
  `
}
