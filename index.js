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

const getCurrentGlobalConfiguration = () => ({ ...config })

const configure = ({ baseUrl, headers, timeoutDuration, debug }) => {
  config.debug = !!debug || config.debug
  config.baseUrl = baseUrl || config.baseUrl

  config.requestParams.timeoutDuration = timeoutDuration || config.requestParams.timeoutDuration
  config.requestParams.headers = headers || config.requestParams.headers
}

const getUrlFromPath = (path) => {
  if (!config.baseUrl)
    throw Error('Incomplete configuration: Base url not specified or is not valid. config.urlBase:', config.urlBase)
  return `${config.baseUrl}${path || ''}`
}

const confetch = (info) => {
  const requestConfiguration = _.merge({}, config.requestParams, info)
  return customFetch(requestConfiguration)
}

module.exports = {
  confetch,
  getUrlFromPath,
  configure,
  getCurrentGlobalConfiguration,
}
