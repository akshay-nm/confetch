const customFetch = require('./custom-fetch')
const _ = require('lodash')

const config = {
  debug: false,
  requestParams: {
    headers: {
      'Content-Type': 'application/json',
    },
    timeoutDuration: 3000,
  },
}

const configure = ({ urlBase, headers, timeoutDuration, debug }) => {
  config.debug = !!debug
  config.urlBase = urlBase

  config.requestParams.timeoutDuration = timeoutDuration
  config.requestParams.headers = headers
}

const getUrlFromPath = (path) => {
  try {
    if (!config.urlBase)
      throw Error('Incomplete configuration: Base url not specified or is not valid. config.urlBase:', config.urlBase)
    return `${config.urlBase}/api${path || ''}`
  } catch (error) {
    console.log('Error:', error)
  }
}

const confetch = (info) => {
  const requestConfiguration = _.merge({}, config.requestParams, info)
  return customFetch(requestConfiguration)
}

module.exports = {
  confetch,
  getUrlFromPath,
  configure,
}
