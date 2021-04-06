/**
 * @module Confetch
 */
import merge from 'lodash/merge'

const { customFetch } = require('./utils')

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
 *
 * @param {string} baseUrl If you want to send requests on https://www.your.domain/abc, your baseUrl is https://www.your.domain.
 * @param {object} headers Same as headers option passed in fetch: for more information, check: <a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options' rel='nofollow noreferrer' target='_blank'>Supplying request options to fetch</a>.
 * @param {number} timeoutDuration Timeout duration in millis, for 3 secs, it'll be 3000.
 * @param {boolean} debug default: false, set it to true if you want some logs.
 */
const configureConfetch = ({ baseUrl, headers, timeoutDuration, debug }) => {
  config.debug = !!debug || config.debug
  config.baseUrl = baseUrl || config.baseUrl

  config.requestParams.timeoutDuration = timeoutDuration || config.requestParams.timeoutDuration
  config.requestParams.headers = headers || config.requestParams.headers
}

/**
 * Create a confetch instance which can be sent or aborted
 *
 * @param {object} info
 * @returns {object}
 */
const confetch = (info) => {
  const requestConfiguration = merge({}, config.requestParams, info)
  return customFetch(requestConfiguration)
}

/**
 * Configure parameters for all confetch requests
 * @deprecated
 * @param {string} baseUrl If you want to send requests on https://www.your.domain/abc, your baseUrl is https://www.your.domain.
 * @param {object} headers Same as headers option passed in fetch: for more information, check: <a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options' rel='nofollow noreferrer' target='_blank'>Supplying request options to fetch</a>.
 * @param {number} timeoutDuration Timeout duration in millis, for 3 secs, it'll be 3000.
 * @param {boolean} debug default: false, set it to true if you want some logs.
 */
const configure = ({ baseUrl, headers, timeoutDuration, debug }) => {
  config.debug = !!debug || config.debug
  config.baseUrl = baseUrl || config.baseUrl

  config.requestParams.timeoutDuration = timeoutDuration || config.requestParams.timeoutDuration
  config.requestParams.headers = headers || config.requestParams.headers
}

/**
 * Get url from a string containing path and other params.
 * @memberof module:utils
 * @param {string} path
 * @returns {string} complete url.
 * @throws Will throw error if baseUrl is not specified or is not valid.
 */
const getUrlFromPath = (path) => {
  if (!config.baseUrl)
    throw Error('Incomplete configuration: Base url not specified or is not valid. config.urlBase:', config.urlBase)
  return `${config.baseUrl}${path || ''}`
}

exports.confetch = confetch
exports.configureConfetch = configureConfetch
exports.configure = configure
exports.getConfetchConfiguration = getConfetchConfiguration
exports.getCurrentGlobalConfiguration = getCurrentGlobalConfiguration
exports.utils = {}
exports.utils.getUrlFromPath = getUrlFromPath
exports.utils.customFetch = customFetch
exports.handlers = {}
exports.handlers.configureStatusCodeBasedErrors = require('./handlers').configureStatusCodeBasedErrors
exports.handlers.buildResponseHandler = require('./handlers').buildResponseHandler
