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

module.exports = getUrlFromPath
