const { BehaviorSubject } = require('rxjs')

class ConfetchWithRetries {
  constructor(requestInformation, retries, debug = false) {
    this.confetchPayload = requestInformation
    this.attemptsAllowed = retries

    this.data = null
    this.error = null
    this.subjects = {
      hasStarted: new BehaviorSubject(false),
      hasFinished: new BehaviorSubject(false),
    }

    this.subscriptions = []
  }

  abortFetch() {}
  startFetch() {}
  cleanup() {}
}
