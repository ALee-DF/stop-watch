$minutes = document.querySelector('#minutes')
$seconds = document.querySelector('#seconds')
$milliseconds = document.querySelector('#milliseconds')
$startButton = document.querySelector('#startButton')

function milliseconds () {
  var number = parseInt($milliseconds.textContent, 10)
  if (number < 9) {
    $milliseconds.textContent = number + 1
  }
  else {
    $milliseconds.textContent = 0
  }
}

function seconds () {
  var number = parseInt($seconds.textContent, 10)
  if (number < 59) {
    $seconds.textContent = number + 1
  }
  else {
    $seconds.textContent = 00
  }
}

function minutes () {
  var number = parseInt($minutes.textContent, 10)
  if (number < 59) {
    $minutes.textContent = number + 1
  }
  else {
    $minutes.textContent = 00
  }
}
$startButton.addEventListener('click', function () {
  setInterval(milliseconds, 100)
  setInterval(seconds, 1000)
  setInterval(minutes, 60000)
})
