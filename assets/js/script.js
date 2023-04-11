const startStop = document.getElementById("start-stop");

const minutesHTML = document.getElementById("minutes"),
  secondsHTML = document.getElementById("seconds");

let interval;
let timer = parseInt(minutesHTML.innerHTML) * 60;

startStop.addEventListener("click", () => {
  if (startStop.innerHTML == "COMEÇAR") {
    startStop.innerHTML = "PAUSAR";
    changingTime();
  } else {
    startStop.innerHTML = "COMEÇAR";
    clearInterval(interval);
  }
});

const showTimeScreen = (minutes, seconds) => {
  minutesHTML.innerHTML = minutes;
  secondsHTML.innerHTML = seconds;
};

const converterTime = (timer) => {
  return { seconds: timer % 60, minutes: Math.floor(timer / 60) };
};

function changingTime() {
  interval = setInterval(subOneSecond, 1000);
}
const subOneSecond = () => {
  timer--;
  const result = converterTime(timer);
  showTimeScreen(result.minutes, result.seconds);
  if (result.minutes < 0 && result.seconds < 0) {
    clearInterval(interval);
    showTimeScreen("00", "00");
  }
};
