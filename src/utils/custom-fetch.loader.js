module.exports = ({ isBrowser }) => {
  const value = require('./custom-fetch.def.js')
  return `
    const AbortController = ${isBrowser ? 'window.AbortController' : 'require("abort-controller")'};
    const Request = ${isBrowser ? 'window.Request' : 'require("node-fetch").Request'};
    module.exports = ${value}
    `
}
