var millisecondsIntervalId
var secondsIntervalId
var minutesInterValId

$minutes = document.querySelector('#minutes')
$seconds = document.querySelector('#seconds')
$milliseconds = document.querySelector('#milliseconds')
$startButton = document.querySelector('#startButton')
$stopButton = document.querySelector('#stopButton')
$resetButton = document.querySelector('#resetButton')

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
    if (number < 9) {
      $seconds.textContent = '0' + (number + 1)
    }
    else {
      $seconds.textContent = number + 1
    }
  }
  else {
    $seconds.textContent = '00'
  }
}

function minutes () {
  var number = parseInt($minutes.textContent, 10)
  if (number < 59) {
    if (number < 9) {
      $minutes.textContent = '0' + (number + 1)
    }
    else {
      $minutes.textContent = number + 1
    }
  }
  else {
    $minutes.textContent = '00'
  }
}

$startButton.addEventListener('click', function () {
  millisecondsIntervalId = setInterval(milliseconds, 100)
  secondsIntervalId = setInterval(seconds, 1000)
  minutesInterValId = setInterval(minutes, 60000)
})

$stopButton.addEventListener('click', function () {
  clearInterval(millisecondsIntervalId)
  clearInterval(secondsIntervalId)
  clearInterval(minutesInterValId)
})

$resetButton.addEventListener('click', function () {
  $milliseconds.textContent = '0'
  $seconds.textContent = '00'
  $minutes.textContent = '00'
})
