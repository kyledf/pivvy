const click = document.querySelector(".click");
const giftBox = document.querySelector(".gift-box");
const shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".gift-container");
const pony = document.querySelector(".pony");

click.addEventListener("click", () => {
  if (click.className === "click") {
    click.classList.add("active");
    giftBox.classList.add("active");
    shadow.classList.add("active");
    giftContainer.classList.add("active");
    pony.classList.add("active");
    pony.classList.remove("active2");
  } else {
    click.classList.remove("active");
    giftBox.classList.remove("active");
    shadow.classList.remove("active");
    giftContainer.classList.remove("active");
    pony.classList.remove("active");
    pony.classList.add("active2");
  }
});
