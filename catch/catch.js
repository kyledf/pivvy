const container = document.querySelector(".container");
const player = document.querySelector(".player");

const movePlayer = (e) => {
  const x = e.clientX - container.offsetLeft;
  if (x > container.offsetWidth - player.offsetWidth) {
    player.style.left = container.offsetWidth - player.offsetWidth + "px";
    return;
  }
  player.style.left = x + "px";
};

container.onmousemove = function (e) {
  movePlayer(e);
};
container.ontouchmove = function (e) {
  movePlayer(e.touches[0]);
};