const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const miliseconds = document.getElementById("miliseconds");
let milliCounter = 1;
function updateTime() {
  let time = new Date();

  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  //   let M = time.getMilliseconds();
  hour.textContent = String(normalFormatHour(h)).padStart(2, "0");
  minute.textContent = String(m).padStart(2, "0");
  seconds.textContent = String(s).padStart(2, "0");

  miliseconds.innerHTML = String(milliCounter).padStart(2, "0");
  milliCounter++;
  if (milliCounter > 10) {
    milliCounter = 1;
  }
}
setInterval(updateTime, 100);

function normalFormatHour(hours) {
  if (hours > 12) return hours - 12;
  if (hours == 12) return 12;
}
