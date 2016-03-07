let environment = process.env.NODE_ENV || 'development'

const defaults = {
  'endpoints': {
    'sitemap': '/sitemap.xml'
  },
  'rootDir': __dirname
}

const webconfig = {
  'development': {
    'port': 3000,
    ...defaults
  },
  'production': {
    'port': process.env.port,
    ...defaults
  }
}

export default webconfig[environment]
