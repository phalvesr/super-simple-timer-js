class Timer {

  constructor(idDisplayTimerContainer = '') {
    this._timerDisplay = document.getElementById(idDisplayTimerContainer)
    this._counting = false
    this.init()
  }

  init() {
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
  }

} 

new Timer('time-container')
    .setStartCountButton('count')
    .setStopCountButton('stop-count')
