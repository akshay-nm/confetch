const defaultStatusCodes = {
  400: 'INCORRECT_REQUEST_FORMAT',
  401: 'INVALID_SESSION',
  403: 'FORBIDDEN',
  404: 'RESOURCE_NOT_FOUND',
  408: 'REQUEST_TIMED_OUT',
}

const responseHandler = (response, statusCodes = defaultStatusCodes) => {
  if (response?.ok) return response.json()
  if (response && response.status && statusCodes[response.status]) throw Error(statusCodes[response.status])
  throw Error('REQUEST_TIMED_OUT') // This will be reached only if the request was aborted using abort controller
}
