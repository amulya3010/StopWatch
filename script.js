// Setting the initial timer values
let timer;
let isRunning = false; // initial start position of timer
let [hours, min, sec, millisec] = [0, 0, 0, 0]; // generally we write this as let hours=0 min=0 sec=0 millisec=0
// but we can also write it as let [hours,min,sec,millisec]=[0,0,0,0]

// accessing the btn and display to update
let timerDisplay = document.querySelector(".s-display");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

// console.log(timerDisplay)
// console.log(startBtn)
// console.log(stopBtn)
// console.log(resetBtn)

// adding the events to the btns
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Function to start the Timer
function startTimer() {
  if (!isRunning) {
    // initial isRunning is false by using '!' we can convert false to true
    isRunning = true;
    timer = setInterval(updateTimer, 10); // 10ms is the time interval for the timer
  }
}

// Function to stop the Timer
function stopTimer() {
  if (isRunning) {
    // initial isRunning is true by using '!' we can convert it as flase
    clearInterval(timer); // clearing the interval
    isRunning = false;
  }
}

// Function to reset the Timer
function resetTimer() {
  clearInterval(timer); // clearing the complete timer
  isRunning = false[(hours, min, sec, millisec)] = [0, 0, 0, 0];
  // Updating the Display
  updateDisplay();
}

// Function to run the Timer logic
function updateTimer() {
  // logic
  millisec = millisec + 10;
  if (millisec >= 1000) {
    millisec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
      if (min == 60) {
        min = 0;
        hours++;
      }
    }
  }

  // updating the display for event millisec
  updateDisplay();
}

// function to update the timer on display
function updateDisplay() {
  timerDisplay.textContent = `${String(hours).padStart(2, 0)}:${String(
    min
  ).padStart(2, 0)}:${String(sec).padStart(2, 0)}:${String(
    millisec / 10
  ).padStart(2, 0)}`;
  // padStart(2,0) means 2 is length and 0 is value it should be like '00'
}
