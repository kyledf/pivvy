const container = document.querySelector(".container");
const player = document.querySelector(".player");
const falling = document.getElementsByClassName("falling");

//start game
const startGame = () => {
  moveFalling();
  resetScore();
};

// make the player follow the mouse or touch position
const movePlayer = (e) => {
  const x = e.clientX - container.offsetLeft;
  if (x > container.offsetWidth - player.offsetWidth) {
    player.style.left = container.offsetWidth - player.offsetWidth + "px";
    return;
  }
  player.style.left = x + "px";
};

if ("ontouchstart" in document.documentElement) {
  container.ontouchmove = function (e) {
    movePlayer(e.touches[0]);
  };
} else {
  container.onmousemove = function (e) {
    movePlayer(e);
  };
}

// make the falling element move from top of container to bottom starting from random x position
const moveFalling = (obj) => {
  obj = falling[Math.floor(Math.random() * falling.length)];
  obj.style.display = "block";
  let containerX = container.offsetLeft;
  let x = Math.floor(
    Math.random() * (container.offsetWidth - obj.offsetWidth) + containerX
  );
  obj.style.left = x + "px";
  obj.style.top = "60px";
  //check if the falling element is catched by the player
  checkCatch(obj);
  //if the falling element reach the bottom of the container, it will be hidden
  let id = setInterval(() => {
    let y = obj.offsetTop;
    if (y >= container.offsetHeight - obj.offsetHeight) {
      obj.style.display = "none";
      resetScore();
      clearInterval(id);
    } else {
      obj.style.top = y + 1 + "px";
    }
  }, 10);
};

// check if the falling element is catched by the player
const checkCatch = (obj) => {
  let id = setInterval(() => {
    let y = obj.offsetTop;
    let x = obj.offsetLeft;
    let playerX = player.offsetLeft;
    let playerY = player.offsetTop;
    //if the falling element is catched by the player, it will be hidden and the score will be increased when the object touches the player
    if (
      y >= playerY &&
      y <= playerY + player.offsetHeight &&
      x >= playerX &&
      x <= playerX + player.offsetWidth
    ) {
      obj.style.display = "none";
      clearInterval(id);
      increaseScore();
      moveFalling(obj);
    }
  }, 10);
};

//increase the score
const increaseScore = () => {
  let score = document.querySelector(".score-value");
  score.textContent = parseInt(score.textContent) + 1;
};
//reset the score
const resetScore = () => {
  let score = document.querySelector(".score-value");
  score.textContent = 0;
};
