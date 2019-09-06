const withSass = require('@zeit/next-sass')
const debug = process.env.NODE_ENV !== "production";
module.exports = withSass({
    exportPathMap: function () { // /Next-React-Components
        return {
        "/": { page: "/" },
        "/ap-grid-layout": { page: "/ap-grid-layout" },
        "/ap-highlight": { page: "/ap-highlight" },
        }
    },
    assetPrefix: !debug ? 'https://ZenEnd.github.io/CalendarApplication/' : '',})
