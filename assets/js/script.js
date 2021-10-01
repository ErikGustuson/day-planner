// get clock build into header to display current day and time
const clock = document.getElementById("clock");

function updateClock() {
  const now = moment().format("LLLL");
  clock.textContent = now;
}

setInterval(updateClock, 1000);

// TODO: color coded to indicate whether it is in the past, present, or future

// TODO: when you click on the save button it should save text to local storage

$(".activity") = var activity;

$("btn").click(function save(event) {
  var scheduledActivity = {
    loggedActivity: activity.value.trim(),
  };
  localStorage.setItem("scheduledActivity", JSON.stringify(scheduledActivity));
});

// TODO: when you refresh the page the information should persist
