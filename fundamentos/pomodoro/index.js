function onLoad() {
  const dependencies = {
    screen: Screen
  }

  const pomodoro = new Pomodoro(dependencies)
  pomodoro.setup()
}

window.onload = onLoad