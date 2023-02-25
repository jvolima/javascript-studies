const ID_BTN_START = 'start'
const ID_BTN_STOP = 'stop'
const ID_BTN_RESTART = 'restart'

class Screen {
  static setupBtnStart(onClickFunction) {
    const btnStart = document.getElementById(ID_BTN_START)
    btnStart.onclick = onClickFunction
  }

  static setupBtnStop(onClickFunction) {
    const btnStop = document.getElementById(ID_BTN_STOP)
    btnStop.onclick = onClickFunction
  }

  static setupBtnRestart(onClickFunction) {
    const btnRestart = document.getElementById(ID_BTN_RESTART)
    btnRestart.onclick = onClickFunction
  }

  static updateCount(id, count) {
    const element = document.getElementById(id)
    element.innerText = count
  }
}