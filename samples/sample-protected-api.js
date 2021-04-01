const { confetch, getUrlFromPath } = require('@akshay-nm/confetch')

const resourceType = 'sample'

const create = (payload) =>
  confetch({
    url: getUrlFromPath(`/${resourceType}`),
    method: 'POST',
    body: JSON.stringify(payload),
  })

const getAll = (accessToken) =>
  confetch({
    url: getUrlFromPath(`/${resourceType}`),
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

const get = (accessToken, resourceId) =>
  confetch({
    url: getUrlFromPath(`/${resourceType}/${resourceId}`),
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

const update = (accessToken, resourceId, payload) =>
  confetch({
    url: getUrlFromPath(`/${resourceType}/${resourceId}`),
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

const terminate = (accessToken, resourceId) =>
  confetch({
    url: getUrlFromPath(`/${resourceType}/${resourceId}`),
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

const search = (accessToken, payload) =>
  confetch({
    url: getUrlFromPath(`${resourceType}?${new URLSearchParams(payload).toString()}`),
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

export default { create, getAll, get, update, terminate, search }
