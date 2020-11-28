class Timer {

  constructor(idDisplayTimerContainer = '') {
    this._timerDisplay = document.getElementById(idDisplayTimerContainer)
    this.init()
  }

  init() {
    this._counter = 0
  }

  startCounter(startValue = 0) {
    this._counter = startValue
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
        this.startCounter()    
      })
      return this
  }

  setStopCountButton(idStopButton = '') {
    document.getElementById(idStopButton)
    .addEventListener('click', () => {
      clearInterval(this._intervalId)
      this._timerDisplay.textContent = 0
    })
    return this
  }

} 

new Timer('time-container')
    .setStartCountButton('count')
    .setStopCountButton('stop-count')
