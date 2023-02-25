class Pomodoro {
  constructor ({ screen }) {
    this.screen = screen
    this.totalSeconds = 25 * 60
    this.isPaused = false
    this.isStarted = false
    this.secondsPassed = 0
  }

  setup() {
    this.screen.setupBtnStart(this.start.bind(this))
    this.screen.setupBtnStop(this.stop.bind(this))
    this.screen.setupBtnRestart(this.restart.bind(this))
    this.setupTimerToDefault()
  }

  start() {
   if  (this.isStarted) {
      return
    }

    this.isStarted = true
    this.isPaused = false
       
    const timerId = setInterval(() => {
      if (this.isPaused) {
        clearInterval(timerId)
      } else {
        this.secondsPassed ++
        const currentSeconds = this.totalSeconds - this.secondsPassed
        const minutesAmount = Math.floor(currentSeconds / 60)
        const secondsAmount = currentSeconds % 60
        
        const minutes = String(minutesAmount).padStart(2, '0')
        const seconds = String(secondsAmount).padStart(2, '0')
  
        this.fillTimer(minutes, seconds)
  
        if (this.secondsPassed === this.totalSeconds) {
          clearInterval(timerId)
          this.restart()
          alert('Ciclo encerrado!')
        }
      }      
    }, 1000)  
    
    return timerId
  }

  stop() {
    this.isPaused = true
    this.isStarted = false
  }

  restart() {
    this.secondsPassed = 0
    this.isPaused = true
    this.isStarted = false
    this.setupTimerToDefault()
  }

  setupTimerToDefault() {
    const minutes = String(Math.floor(this.totalSeconds / 60)).padStart(2, '0')
    const seconds = String(this.totalSeconds % 60).padStart(2, '0')

    this.fillTimer(minutes, seconds)
  }

  fillTimer(minutes, seconds) {
    this.screen.updateCount('minute1', minutes[0])
    this.screen.updateCount('minute2', minutes[1])
    this.screen.updateCount('second1', seconds[0])
    this.screen.updateCount('second2', seconds[1])
  }
}