const environment = process.env.NODE_ENV || 'development'
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

module.exports = {
  isProd: environment === 'production',
  host: host,
  port: port,
  endpoints: {
    timesince: `http://${host}:${port}/`,
    webpack: `http://${host}:8080/`,
    sitemap: '/sitemap.xml',
    scripts: 'public/scripts/',
    styles: 'public/styles/'
  },
  bundleName: 'bundle.js',
  cssName: 'site.css',
  rootDir: __dirname
}
