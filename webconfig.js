'use strict'

let environment = process.env.NODE_ENV || 'development'

const defaults = {
  'endpoints': {
    'sitemap': 'sitemap.xml'
  }
}

const webconfig = {
  'development': {
    'port': 3000,
    'endpoints': defaults.endpoints
  },
  'production': {
    'port': process.env.port,
    'endpoints': defaults.endpoints
  }
}

export default webconfig[environment]
