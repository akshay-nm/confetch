const defaultStatusCodes = {
  400: 'INCORRECT_REQUEST_FORMAT',
  401: 'INVALID_SESSION',
  403: 'FORBIDDEN',
  404: 'RESOURCE_NOT_FOUND',
  408: 'REQUEST_TIMED_OUT',
}

const errorHandler = (error, statusCodes = defaultStatusCodes) => {
  if (statusCodes[error.message]) throw Error(statusCodes[error.message])
  throw Error(`Unkown error: ${error.message}`)
}

module.exports = errorHandler
