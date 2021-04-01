const { confetch, configure, getCurrentGlobalConfiguration } = require('./index')
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
      configure(defaultConfigurePayload)
    })
    test('Default global configuration is set: ', () => {
      expect(getCurrentGlobalConfiguration()).toEqual(defaultConfiguration)
    })
    test('Global configuration can be modified correctly (merged and not replaced): ', () => {
      configure({ timeoutDuration: 4000 })
      const config = getCurrentGlobalConfiguration()
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
})
