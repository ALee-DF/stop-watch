var millisecondsIntervalId
var secondsIntervalId
var minutesInterValId

var $minutesHtml = document.querySelector('#minutes')
var $minutes = parseInt($minutesHtml.textContent, 10)
var $secondsHtml = document.querySelector('#seconds')
var $seconds = parseInt($secondsHtml.textContent, 10)
var $millisecondsHtml = document.querySelector('#milliseconds')
var $milliseconds = parseInt($millisecondsHtml.textContent, 10)

var $startButton = document.querySelector('#startButton')
var $stopButton = document.querySelector('#stopButton')
var $resetButton = document.querySelector('#resetButton')

var $timeLimit = document.querySelector('#timeLimit')
var $displayTimeLimit = document.querySelector('#displayTimeLimit')
var $submissionError = document.querySelector('#submissionError')
var $minutesLimit = 59
var $secondsLimit = 59
var $millisecondsLimit = 9

function milliseconds () {
  if (($minutes === $minutesLimit) &&
    ($seconds === $secondsLimit) &&
    ($milliseconds === $millisecondsLimit)) {
    clearInterval(millisecondsIntervalId)
    clearInterval(secondsIntervalId)
    clearInterval(minutesInterValId)
  }
  else {
    if ($milliseconds < 9) {
      $milliseconds = $milliseconds + 1
      $millisecondsHtml.textContent = $milliseconds
    }
    else {
      $milliseconds = 0
      $millisecondsHtml.textContent = 0
    }
  }
}

function seconds () {
  if ($seconds < 59) {
    if ($seconds < 9) {
      $seconds = $seconds + 1
      $secondsHtml.textContent = '0' + $seconds
    }
    else {
      $seconds = $seconds + 1
      $secondsHtml.textContent = $seconds
    }
  }
  else {
    $seconds = 0
    $secondsHtml.textContent = '00'
  }
}

function minutes () {
  if ($minutes < 59) {
    if ($minutes < 9) {
      $minutes = $minutes + 1
      $minutesHtml.textContent = '0' + $minutes
    }
    else {
      $minutes = $minutes + 1
      $minutesHtml.textContent = $minutes
    }
  }
  else {
    $minutes = 0
    $minutesHtml.textContent = '00'
  }
}

function stopWatchLimit (event){
  event.preventDefault()
  var checkMinutes = parseInt(document.querySelector('#minutesLimit').value, 10)
  var checkSeconds = parseInt(document.querySelector('#secondsLimit').value, 10)
  var checkMilliseconds = parseInt(document.querySelector('#millisecondsLimit').value, 10)

  if ((checkMinutes < 60) && (checkSeconds < 60) & (checkMilliseconds < 10)) {
    $submissionError.className = 'hideError'
    $minutesLimit = checkMinutes
    $secondsLimit = checkSeconds
    $millisecondsLimit = checkMilliseconds
    $displayTimeLimit.textContent = $minutesLimit + ' Minutes, ' + $secondsLimit
      + ' Seconds, ' + $millisecondsLimit + ' Milliseconds'
  }
  else {
    $submissionError.className = 'showError'
  }
}
$startButton.addEventListener('click', function () {
  millisecondsIntervalId = setInterval(milliseconds, 100)
  secondsIntervalId = setInterval(seconds, 1000)
  minutesInterValId = setInterval(minutes, 60000)
  $stopButton.removeAttribute('class')
  $startButton.className = 'hideButton'
})

$stopButton.addEventListener('click', function () {
  clearInterval(millisecondsIntervalId)
  clearInterval(secondsIntervalId)
  clearInterval(minutesInterValId)
})

$resetButton.addEventListener('click', function () {
  clearInterval(millisecondsIntervalId)
  clearInterval(secondsIntervalId)
  clearInterval(minutesInterValId)
  $millisecondsHtml.textContent = '0'
  $secondsHtml.textContent = '00'
  $minutesHtml.textContent = '00'
  $milliseconds = 0
  $seconds = 0
  $minutes = 0
  $startButton.removeAttribute('class')
  $stopButton.className = 'hideButton'
  $displayTimeLimit.textContent = ''
  $timeLimit.reset()
})

$timeLimit.addEventListener('submit', stopWatchLimit)
