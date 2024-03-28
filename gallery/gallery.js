const muteButton = document.querySelector("#mute");
const unmuteButton = document.querySelector("#unmute");
const audio = document.querySelector("audio");

muteButton.addEventListener("click", () => {
  muteButton.style.display = "none";
  unmuteButton.style.display = "block";
  audio.muted = false;
  audio.play();
});
unmuteButton.addEventListener("click", () => {
  unmuteButton.style.display = "none";
  muteButton.style.display = "block";
  audio.muted = true;
  audio.pause();
});

let canvasPhotos = document.querySelectorAll(".photo");
let items = document.querySelectorAll(".slider .item");
let currentPhoto = document.getElementById("current");
let totalPhoto = document.getElementById("total");
let active = 0;

function loadShow() {
  currentPhoto.innerText = active + 1;
  totalPhoto.innerText = items.length;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  // show after
  let stt = 0;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${200 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-200 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

loadShow();
let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : 0;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : items.length - 1;
  loadShow();
};

canvasPhotos.forEach((canvas) => {
  let c = canvas.querySelector(".canvas");
  let r = canvas.querySelector(".real");
  canvas.addEventListener("click", () => {
    if (c.style.display === "none") {
      c.style.display = "block";
      r.style.display = "none";
    } else {
      c.style.display = "none";
      r.style.display = "block";
    }
  });
});
