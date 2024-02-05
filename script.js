let stopwatchInterval;
let milliseconds = 0;

function updateStopwatch() {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const ms = milliseconds % 1000;

  const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
    seconds
  )}:${formatTime(ms, 3)}`;
  document.getElementById("time").innerText = timeString;
}

function formatTime(value, digits = 2) {
  return value.toString().padStart(digits, "0");
}

function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    milliseconds += 10;
    updateStopwatch();
  }, 10);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  milliseconds = 0;
  updateStopwatch();
}
