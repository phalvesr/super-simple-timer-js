class Timer {
  constructor(idDisplayTimerContainer = '') {
    this._timerDisplay = document.getElementById(idDisplayTimerContainer)
    this._counting = false
    this.init()
  }

  init() {
    this._sessionId = crypto.randomUUID()
    this._counter = 0
  }

  startCounting(startValue = 0) {
    if (this._counting) return
    this._counter = startValue
    this._counting = true

    clearInterval(this._intervalId)
    this._intervalId = setInterval(() => {
      this.addOneSecond()
      this.updateTimer()
    }, 1000)

    gtag('event', 'timer_started', {
      time: new Date().toISOString(),
      sessionId: this._sessionId,
      event_callback: () => console.log('timer_started sent')
    })

    return this
  }

  addOneSecond() {
    this._counter++
  }

  updateTimer() {
    this._timerDisplay.textContent = this._counter
    return this
  }

  setStartCountButton(idStartButton = '') {
    clearInterval(this._intervalId)
    document.getElementById(idStartButton)
      .addEventListener('click', () => {
        this.startCounting()
      })
      return this
  }

  setStopCountButton(idStopButton = '') {
    document.getElementById(idStopButton)
    .addEventListener('click', () => {
      this.stopCounting()
    })
    return this
  }

  stopCounting() {
    if (!this._counting) return
    this._counting = false
    clearInterval(this._intervalId)
    this._timerDisplay.textContent = 0
    gtag('event', 'timer_stopped', {
      time: new Date().toISOString(),
      sessionId: this._sessionId,
      event_callback: () => console.log('timer_stopped sent')
    }) 
  }
}

new Timer('time-container')
    .setStartCountButton('count')
    .setStopCountButton('stop-count')
