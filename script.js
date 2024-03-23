const click = document.querySelector(".click");

click.addEventListener("click", () => {
  if (click.className === "click") {
    click.classList.add("active");
  } else {
    click.classList.remove("active");
  }
});
