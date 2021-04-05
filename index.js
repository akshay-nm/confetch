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

/**
 * Returns current configuration of confetch requests
 * @returns {object} current configuration of confetch requests
 */
const getConfetchConfiguration = () => ({ ...config })

/**
 * Returns current configuration of confetch requests
 * @deprecated
 * @returns {object} current configuration of confetch requests
 */
const getCurrentGlobalConfiguration = () => ({ ...config })

/**
 * Configure parameters for all confetch requests
 * @param {string} baseUrl
 * @param {object} headers
 * @param {number} timeoutDuration
 * @param {boolean} debug
 */
const configureConfetch = ({ baseUrl, headers, timeoutDuration, debug }) => {
  config.debug = !!debug || config.debug
  config.baseUrl = baseUrl || config.baseUrl

  config.requestParams.timeoutDuration = timeoutDuration || config.requestParams.timeoutDuration
  config.requestParams.headers = headers || config.requestParams.headers
}

/**
 * Configure parameters for all confetch requests
 * @deprecated
 * @param {string} baseUrl
 * @param {object} headers
 * @param {number} timeoutDuration
 * @param {boolean} debug
 */
const configure = ({ baseUrl, headers, timeoutDuration, debug }) => {
  config.debug = !!debug || config.debug
  config.baseUrl = baseUrl || config.baseUrl

  config.requestParams.timeoutDuration = timeoutDuration || config.requestParams.timeoutDuration
  config.requestParams.headers = headers || config.requestParams.headers
}

/**
 * Get url from a string containing path and other params
 * @param {string} path
 * @returns {string} complete url
 */
const getUrlFromPath = (path) => {
  if (!config.baseUrl)
    throw Error('Incomplete configuration: Base url not specified or is not valid. config.urlBase:', config.urlBase)
  return `${config.baseUrl}${path || ''}`
}

/**
 * Create a confetch instance which can be sent or aborted
 * @param {object} info
 * @returns {object}
 */
const confetch = (info) => {
  const requestConfiguration = _.merge({}, config.requestParams, info)
  return customFetch(requestConfiguration)
}

const { buildResponseHandler, configureStatusCodeBasedErrors } = require('./response-handler')

module.exports = {
  confetch,
  getUrlFromPath,
  configureConfetch,
  configure,
  getConfetchConfiguration,
  getCurrentGlobalConfiguration,
  buildResponseHandler,
  configureStatusCodeBasedErrors,
}
