/**
 * @module handlers
 */

let defaultStatusCodes = {
  400: 'INCORRECT_REQUEST_FORMAT',
  401: 'INVALID_SESSION',
  403: 'FORBIDDEN',
  404: 'RESOURCE_NOT_FOUND',
  408: 'REQUEST_TIMED_OUT',
}

/**
 * Configure status code based errors for all responseHandlers
 * @param {object} statusCodes
 */
const configureStatusCodeBasedErrors = (statusCodes = {}) => {
  defaultStatusCodes = {
    ...defaultStatusCodes,
    ...statusCodes,
  }
}

/**
 * Create an responseHandler with statusCodes (optional, will merge)
 * @param {object} statusCodes
 * @returns {function} errorHandler
 */
const buildResponseHandler = (statusCodes = {}) => (response) => {
  const requestStatusCodes = {
    ...defaultStatusCodes,
    ...statusCodes,
  }
  if (response) {
    if (response.ok) return response.json()
    if (requestStatusCodes[response.status]) throw Error(requestStatusCodes[response.status])
    throw Error(`${response.status}`)
  } else {
    throw Error('REQUEST_TIMED_OUT')
  }
}

module.exports = {
  buildResponseHandler,
  configureStatusCodeBasedErrors,
}
