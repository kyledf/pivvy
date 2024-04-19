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
  moneySaved(days, hours, minutes, seconds);
}, 1000);

function moneySaved(days, hours, minutes, seconds) {
  let money =
    (days + hours / 24 + minutes / 1440 + seconds / 86400) * 2.85714286;
  document.getElementById("money").innerHTML = "$" + money.toFixed(2);
  let mcChicken = money / 14.5;
  document.getElementById("mcChicken").innerHTML = mcChicken.toFixed(2);
  let powerade = money / 4;
  document.getElementById("powerade").innerHTML = powerade.toFixed(2);
  let goats = money / 80;
  document.getElementById("goats").innerHTML = goats.toFixed(2);
  let raffello = money / (12 / 8);
  document.getElementById("raffello").innerHTML = raffello.toFixed(2);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
