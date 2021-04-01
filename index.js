import customFetch from './custom-fetch'
const _ = require('lodash')

const confetch = {}

confetch.config = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeoutDuration: 3000,
}

confetch.configure = ({ urlBase, headers, timeoutDuration, debug }) => {
  confetch.debug = !!debug

  confetch.config.urlBase = urlBase
  confetch.config.timeoutDuration = timeoutDuration
  confetch.config.headers = headers
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
