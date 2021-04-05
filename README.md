# Confetch

**Configur-ed/able fetch**

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![codecov](https://codecov.io/gh/akshay-nm/confetch/branch/main/graph/badge.svg?token=4WB73CELH0)](https://codecov.io/gh/akshay-nm/confetch)

## tldr;

This is a wrapper over `window.fetch`. Go through [https://github.com/akshay-nm/confetch-example](https://github.com/akshay-nm/confetch-example) for more details.

This package also has a default `responseHandler` which you can use. The `responseHandler` just resolves the `res.json()` promise if possible, otherwise throws the errors based on statusCodes. You can pass the errors as an object.

```jsx
const { configureStatusCodeBasedErrors, configureConfetch } = require('@akshay-nm/confetch')

// The new object is merged (it does not replace the default status codes configuration).
configureStatusCodeBasedErrors({
  400: 'CUSTOM ERROR MESSAGE TO BE THROWN IF THE RESPONSE CODE IS 400',
}) // This will make sure that all requestHandlers throw error with the custom message whenever the resposne status code is 400

configureConfetch({
  baseUrl: 'YOUR_BASE_URL', // this is the only parameter you NEED to pass (otherwise confetch will throw)
})

...

const { buildResponseHandler, getUrlFromPath } = require('@akshay-nm/confetch')

const responseHandler1 = buildResponseHandler() // This will throw errors preconfigured message
const responseHandler2 = buildResponseHandler({ 400: 'OTHER CUSTOM MESSAGE' }) // This will throw error with 'OTHER CUSTOM MESSAGE' on 400

confetch({
  url: getUrlFromPath('YOUR_PATH?YOUR_QUERY'),
  ... // rest of parameters for fetch
}).send().then(responseHander1).catch(console.log) // this will log the global message in case of a 400 (configured using configureStatusCodeBasedErrors)

confetch({
  url: getUrlFromPath('YOUR_PATH?YOUR_QUERY'),
  ... // rest of parameters for fetch
}).send().then(responseHander1).catch(console.log) // this will log 'OTHER CUSTOM MESSAGE' in case of 400 (configured via buildResponseHandler)

```

Since the response handler just tries to convert the response into JSON, it either returns a promise or just throws the errors.

## Some details

Following configuration options are supported:

- `baseUrl`: You can specify a base url and use the `getUrlFromPath` method to get complete urls for your requests.
- `timeoutDuration`: This is the duration after which your requests will be aborted.
- `headers`: This is an object (just like what you would pass to a simple `fetch` call).

All the configuration parameters are merged with info object passed to a `confetch` call. So you can override the default paramaters while creating configured fetch requests, if that's what you want.

The package also exposes `confetch` method which basically returns an object with 3 properties:

- `request`
- `send`
- `abort`
- `controller`
- `signal`
- `timeout`

The ones which you should be interested in are:

- `send`
- `abort`

You call `send` to send the configured requests and `abort` to manually abort the request.
Both of them return a promise.

So this is how it would look like:

```jsx
const { configure } = require('@akshay-nm/confetch')
confetchConfiguration = {
  baseUrl: 'https://some.org',
  timeoutDuration = 3000,
  headers = {
    'Content-Type': 'application/json'
  }
}
configure(confetchConfiguration)

...
const { confetch } = require('@akshay-nm/confetch')
const info = {
  url: getUrlFromPath(`/some-path?some=query`),
  method: 'GET',
  headers: {
    'Some-Request-Specific-Header': 'ITS_VALUE'
  }
}

// initialise, send, abort
const request = confetch(info)
request.send()
  .then(res => {
    /*do something with res/*
  })
  .catch(error => {
    /*handle error*/
  })
request.abort()

// fire and forget
confetch(info).send()
  .then(res => {
    /*do something with res/*
  })
  .catch(error => {
    /*handle error*/
  })
```

### What's next?

- Some pre-configured fetches
