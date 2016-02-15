'use strict'

let environment = process.env.NODE_ENV || 'development'

const webconfig = {
  'development': {
    'port': 3000
  },
  'production': {
    'port': process.env.port
  }
}

export default webconfig[environment]
