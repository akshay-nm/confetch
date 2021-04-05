module.exports = ({ isBrowser }) => {
  const value = isBrowser ? require('./custom-fetch.browser') : require('./custom-fetch.node')

  return {
    cacheable: true,
    code: 'module.exports = ' + value,
  }
}
