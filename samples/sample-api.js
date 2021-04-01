const { confetch, getUrlFromPath } = require('@akshay-nm/confetch')

const resourceType = 'sample'

const create = (payload) =>
  confetch({
    url: getUrlFromPath(`/${resourceType}`),
    method: 'POST',
    body: JSON.stringify(payload),
  })

const getAll = () =>
  confetch({
    url: getUrlFromPath(`/${resourceType}`),
    method: 'GET',
  })

const get = (resourceId) =>
  confetch({
    url: getUrlFromPath(`/${resourceType}/${resourceId}`),
    method: 'GET',
  })

const update = (resourceId, payload) =>
  confetch({
    url: getUrlFromPath(`/${resourceType}/${resourceId}`),
    method: 'PUT',
    body: JSON.stringify(payload),
  })

const terminate = (resourceId) =>
  confetch({
    url: getUrlFromPath(`/${resourceType}/${resourceId}`),
    method: 'DELETE',
  })

const search = (payload) =>
  confetch({
    url: getUrlFromPath(`${resourceType}?${new URLSearchParams(payload).toString()}`),
    method: 'GET',
  })

export default { create, getAll, get, update, terminate, search }
