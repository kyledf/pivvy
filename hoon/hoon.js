window.setInterval(function () {
  let now = Date.now();
  let then = new Date("2024-04-10T14:35:00").getTime();
  let distance = then - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)) * -1;
  let hours =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * -1 - 1;
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) * -1;
  let seconds = Math.floor((distance % (1000 * 60)) / 1000) * -1 - 1;
  document.getElementById("time").innerHTML =
    days +
    (days == 1 ? " day " : " days ") +
    hours +
    (hours == 1 ? " hour " : " hours ") +
    minutes +
    (minutes == 1 ? " minute " : " minutes ") +
    seconds +
    (seconds == 1 ? " second " : " seconds ");
  moneySaved(days);
}, 1000);

function moneySaved(days) {
  let money = days * 2.86;
  document.getElementById("money").innerHTML = "$" + money.toFixed(2);
}
