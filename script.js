var clockEl = document.getElementById('clock');
var hoursEl = document.getElementById('hours');
var minEl = document.getElementById('minutes');
var secEl = document.getElementById('seconds');
var ampm = document.getElementById('ampm');

function updateClock(){
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let _ampm = "AM";
  if(hours > 12){
    hours = hours - 12;
    _ampm = "PM";
  }
  if (hours > 12) (hours = hours - 12);
  hoursEl.innerHTML=padDigit(hours);
  minEl.innerHTML=padDigit(minutes);
  secEl.innerHTML=padDigit(seconds);
  ampm.innerHTML = (_ampm);
}

setInterval(updateClock,1000);
updateClock();

function padDigit(digit){
    if(digit < 10){
      return ("0" + digit);
    }
  else{
    return digit;
  }
}
