# Confetch

**Configur-ed/able fetch**

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a wrapper over `window.fetch`. Following configuration options are supported:

- `urlBase`: You can specify a base url and use the `getUrlFromPath` method to get complete urls for your requests.
- `timeoutDuration`: This is the duration after which your requests will be aborted.
- `headers`: This is an object (just like what you would pass to a simple `fetch` call).

All the configuration parameters are merged with info object passed to a `configuredFetch` call. So you can override the default paramaters while creating configured fetch requests, if that's what you want.

The package also exposes `configuredFetch` method which basically returns an object with 3 properties:

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

```
confetchConfiguration = {}
confetch.configure(confetchConfiguration)

...

const info = {
  url: getUrlFromPath(`/some-path?some=query`),
  method: 'GET',
  headers: {
    'Some-Request-Specific-Header': 'ITS_VALUE'
  }
}

// initialise, send, abort
const request = configuredFetch(info)
request.send()
  .then(res => {
    /*do something with res/*
  })
  .catch(error => {
    /*handle error*/
  })
request.abort()

// fire and forget
configuredFetch(info).send()
  .then(res => {
    /*do something with res/*
  })
  .catch(error => {
    /*handle error*/
  })
```

You can go through the `sample-api.js` and `sample-protected-api.js` if you are looking for examples.

### What's next?

- tests
