module.exports = ({ isBrowser }) => {
  const value = require('./custom-fetch.def.js')
  return {
    cacheable: true,
    code: `
    const AbortController = ${isBrowser ? 'window.AbortController' : 'require("abort-controller")'};
    const Request = ${isBrowser ? 'window.Request' : 'require("node-fetch").Request'};
    module.exports = ${value}
    `,
  }
}
