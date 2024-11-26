let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const lapTimesList = document.getElementById('lap-times');

// Format the elapsed time
function formatTime(time) {
  let date = new Date(time);
  let minutes = String(date.getUTCMinutes()).padStart(2, "0");
  let seconds = String(date.getUTCSeconds()).padStart(2, "0");
  let milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0");
  return `${minutes}:${seconds}.${milliseconds}`;
}

// Start the stopwatch
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);
}

// Pause the stopwatch
function pause() {
  clearInterval(timerInterval);
}

// Continue the stopwatch after pausing
function continueTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);
}

// Stop the stopwatch
function stop() {
  clearInterval(timerInterval);
}

// Reset the stopwatch
function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00.000";
  elapsedTime = 0;
  lapTimesList.innerHTML = '';
}

// Record a lap time
function recordLap() {
  let li = document.createElement('li');
  li.textContent = formatTime(elapsedTime);
  lapTimesList.appendChild(li);
}

// Event listeners for buttons
document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('continue').addEventListener('click', continueTimer);
document.getElementById('stop').addEventListener('click', stop); // Event listener for Stop button
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', recordLap);