const container = document.querySelector(".container");
const player = document.querySelector(".player");

container.onmousemove = function (e) {
  const x = e.clientX - container.offsetLeft;
  if (x > container.offsetWidth - player.offsetWidth) {
    player.style.left = container.offsetWidth - player.offsetWidth + "px";
    return;
  }
  player.style.left = x + "px";
};
