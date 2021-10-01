// get clock build into header to display current day and time
const clock = document.getElementById("clock");

function updateClock() {
  const now = moment().format("LLLL");
  clock.textContent = now;
}

setInterval(updateClock, 1000);

