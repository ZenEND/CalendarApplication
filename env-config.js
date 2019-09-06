const withSass = require('@zeit/next-sass')
const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/your-repository-name' : ''

module.exports = withSass({
  exportPathMap: () => ({
    '/': { page: '/' },
  })
})