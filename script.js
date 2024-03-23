const jsConfetti = new JSConfetti();

const click = document.querySelector(".click");
const giftBox = document.querySelector(".gift-box");
const shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".gift-container");
const pony = document.querySelector(".pony");
const horseSound = document.querySelector("#horse-sound");
const confettiSound = document.querySelector("#confetti-sound");

click.addEventListener("click", () => {
  if (click.className === "click") {
    click.classList.add("active");
    giftBox.classList.add("active");
    shadow.classList.add("active");
    giftContainer.classList.add("active");
    pony.classList.add("active");
    pony.classList.remove("active2");
    horseSound.play();
    setTimeout(() => {
      confettiSound.play();
      jsConfetti.addConfetti({
        emojis: ["🦄"],
        emojiSize: 50,
        confettiNumber: 150,
      });
    }, 1200);
  } else {
    click.classList.remove("active");
    giftBox.classList.remove("active");
    shadow.classList.remove("active");
    giftContainer.classList.remove("active");
    pony.classList.remove("active");
    pony.classList.add("active2");
    jsConfetti.removeConfetti();
  }
});
