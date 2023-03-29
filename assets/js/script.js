const startStop = document.getElementById("start-stop");

const minutesHTML = document.getElementById("minutes"),
  secondsHTML = document.getElementById("seconds");

let interval;

startStop.addEventListener("click", () => {
  startStop.innerHTML = "PAUSAR";
  changingTime();
  return startStop.innerHTML;
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
  if(result.minutes < 0 && result.seconds < 0){
    (clearInterval(interval));
    showTimeScreen("00","00");
  }
}
let timer = 01 * 60;






