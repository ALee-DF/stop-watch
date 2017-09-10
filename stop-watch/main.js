var millisecondsIntervalId
var secondsIntervalId
var minutesInterValId

var $minutes = document.querySelector('#minutes')
var $seconds = document.querySelector('#seconds')
var $milliseconds = document.querySelector('#milliseconds')

var $startButton = document.querySelector('#startButton')
var $stopButton = document.querySelector('#stopButton')
var $resetButton = document.querySelector('#resetButton')

var $timeLimit = document.querySelector('#timeLimit')
var $minutesLimit = '0'
var $secondsLimit = '0'
var $millisecondsLimit = '0'

function milliseconds () {
  var number = parseInt($milliseconds.textContent, 10)
  if (($minutes.textContent === $minutesLimit) &&
    ($seconds.textContent === $secondsLimit) &&
    ($milliseconds.textContent === $millisecondsLimit)) {
    clearInterval(millisecondsIntervalId)
    clearInterval(secondsIntervalId)
    clearInterval(minutesInterValId)
  }
  else {
    if (number < 9) {
      $milliseconds.textContent = number + 1
    }
    else {
      $milliseconds.textContent = 0
    }
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

function stopWatchLimit (event){
  event.preventDefault()
  $minutesLimit = document.querySelector('#minutesLimit').value
  $secondsLimit = document.querySelector('#secondsLimit').value
  $millisecondsLimit = document.querySelector('#millisecondsLimit').value
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

$timeLimit.addEventListener('submit', stopWatchLimit)
