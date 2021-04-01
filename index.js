import customFetch from './custom-fetch'
const _ = require('lodash')

const confetch = {}

confetch.config = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeoutDuration: 3000,
}

confetch.configure = ({ everythingInUrlBeforePath, defaultHeaders, timeoutInMillis, debug }) => {
  confetch.debug = !!debug

  confetch.config.urlBase = everythingInUrlBeforePath
  confetch.config.timeoutDuration = timeoutInMillis
  confetch.config.headers = defaultHeaders
}

export const getUrlFromPath = (path) => {
  try {
    if (!confetch.config.urlBase)
      throw Error(
        'Incomplete configuration: Base url not specified or is not valid. config.urlBase:',
        confetch.config.urlBase
      )
    return `${confetch.config.urlBase}/api${path || ''}`
  } catch (error) {
    console.log('Error:', error)
  }
}

export const configuredFetch = (info) => {
  const config = _.merge({}, confetch.config, info)
  return customFetch(config)
}

export default confetch
