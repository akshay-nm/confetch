let Request, AbortController
try {
  if (typeof window.Request === 'undefined' && typeof process === 'object') {
    // console.log('Running on nodejs')
    Request = require('node-fetch').Request
    AbortController = require('abort-controller')
  } else {
    // console.log('Running on browser')
    Request = window.Request
    AbortController = window.AbortController
  }
} catch (error) {
  // suppressed
}

// initialise the contructors using not utils if not initialised

if (!Request) Request = require('node-fetch').Request
if (!AbortController) AbortController = require('abort-controller')

// console.log('Request: ', typeof Request)
// console.log('AbortController: ', typeof AbortController)

// this is node

/**
 * Wrapper over fetch
 * @memberof module:utils
 *
 * @param {object} parameters url, method, and other request parameters as mentioned in <a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options' rel='nofollow noreferrer' target='_blank'>Supplying request options to fetch</a>
 * @returns {object} { send: () => {}, abort: () => {} }
 */
const customFetch = (parameters = {}) => {
  try {
    // filter parameters
    const {
      method,
      headers,
      body,
      mode,
      credentials,
      cache,
      redirect,
      referrer,
      integrity,
      ...otherOptions
    } = parameters
    const { url, timeoutDuration, ...unsupportedOptions } = otherOptions

    // mention unsupported parameters
    if (Object.keys(unsupportedOptions).length > 0)
      console.log('Custom fetch: Ignoring unsupported options:', unsupportedOptions)

    const fetchOptions = {
      method,
      headers,
      body,
      mode,
      credentials,
      cache,
      redirect,
      referrer,
      integrity,
    }

    //console.log('Custom fetch: Fetch options:', fetchOptions)
    const requestController = {}

    // create an abort controller and add it to fetch options
    requestController.controller = new AbortController()
    fetchOptions.signal = requestController.controller.signal

    // create a request object
    requestController.request = new Request(url, fetchOptions)

    // expose an abort function
    requestController.timeout = null

    requestController.abort = () =>
      new Promise((resolve) => {
        if (requestController.timeout) clearTimeout(requestController.timeout)
        if (!requestController.controller.signal.aborted) requestController.controller.abort()
        resolve(requestController.controller.signal.aborted)
      })

    // expose a send function
    requestController.send = () => {
      requestController.timeout = setTimeout(() => {
        requestController.controller.abort()
      }, timeoutDuration)
      return window.fetch(requestController.request)
    }

    return requestController
  } catch (error) {
    console.log('Error:', error)
    throw Error('Could not initialise the fetch: ', error.message)
  }
}

module.exports = customFetch
