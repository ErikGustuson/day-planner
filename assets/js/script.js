// get clock build into header to display current day and time
const clock = document.getElementById("clock");

function updateClock() {
  const now = moment().format("LLLL");
  clock.textContent = now;
}

setInterval(updateClock, 1000);

var usersSchedule = [
  {
  timeSlot: "9",
  text: "",
  },
  {
  timeSlot: "10",
  text: "",
  },
  {
  timeSlot: "11",
  text: "",
  },
  {
  timeSlot: "12",
  text: "",
  },
  {
  timeSlot: "1",
  text: "",
  },
  {
  timeSlot: "2",
  text: "",
  },
  {
  timeSlot: "3",
  text: "",
  },
  {
  timeSlot: "4",
  text: "",
  },
  {
  timeSlot: "5",
  text: "",
  },]

// TODO: color coded to indicate whether it is in the past, present, or future

// TODO: when you click on the save button it should save text to local storage

function saveText(){
  localStorage.setItem("user activities", JSON.stringify(usersSchedule));
}

function saveOnClick(event) {
  let btnClicked = $(event.target);




// TODO: when you refresh the page the information should persist
