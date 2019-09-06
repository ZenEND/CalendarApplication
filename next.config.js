const withSass = require('@zeit/next-sass')
const isProd = (process.env.NODE_ENV || 'production') === 'production'
module.exports = withSass({
    exportPathMap: function () { // /Next-React-Components
        return {
        "/": { page: "/" }
        }
    },
    assetPrefix: isProd ? 'https://ZenEnd.github.io/CalendarApplication/' : '',})
