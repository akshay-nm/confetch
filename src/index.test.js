const { confetch, configureConfetch, getConfetchConfiguration, getUrlFromPath } = require('./index')
const defaultConfiguration = {
  debug: false,
  requestParams: {
    headers: {
      'Content-Type': 'application/json',
    },
    timeoutDuration: 3000,
  },
}

const defaultConfigurePayload = {
  debug: false,
  headers: {
    'Content-Type': 'application/json',
  },
  timeoutDuration: 3000,
}

describe('Confetch:', () => {
  describe('configuration:', () => {
    beforeEach(() => {
      configureConfetch(defaultConfigurePayload)
    })
    test('Default global configuration is set: ', () => {
      expect(getConfetchConfiguration()).toEqual(defaultConfiguration)
    })
    test('Global configuration can be modified correctly (merged and not replaced): ', () => {
      configureConfetch({ timeoutDuration: 4000 })
      const config = getConfetchConfiguration()
      expect(config.requestParams.timeoutDuration).toEqual(4000)
      expect(config.debug).toEqual(defaultConfiguration.debug)
    })
  })
  describe('confetch:', () => {
    test('Return correctly configured request as per passed request information: ', () => {
      const info = {
        url: 'https://sdiot.io',
        method: 'GET',
      }

      expect(() => confetch(info)).not.toThrow()
    })
  })
  describe('getUrlFromPath: ', () => {
    test('Throw if baseUrl is not set: ', () => {
      expect(getConfetchConfiguration().baseUrl).toBe(undefined)
      expect(() => getUrlFromPath()).toThrow()
    })
    test('Return correct url from path: ', () => {
      configureConfetch({
        baseUrl: 'https://sdiot.io',
        timeoutDuration: 5000,
      })

      expect(getConfetchConfiguration().baseUrl).toEqual('https://sdiot.io')
      expect(getUrlFromPath('/xyz')).toEqual('https://sdiot.io/xyz')
      expect(getUrlFromPath('/xyz/abc')).toEqual('https://sdiot.io/xyz/abc')
      expect(getUrlFromPath('/xyz/abc?a=1')).toEqual('https://sdiot.io/xyz/abc?a=1')
    })
  })
  describe('buildResponseHandler:')
})
