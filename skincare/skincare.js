const cursor = document.querySelector(".cursor");
const face = document.querySelector(".face");

activateProduct = (product) => {
  const isActive = document.querySelectorAll(".product.active");
  if (isActive[0]) {
    let active = isActive[0];
    isActive[0].classList.remove("active");
    if (active === product) {
      return;
    }
  }
  product.classList.toggle("active");
};

document.addEventListener("mousemove", (e) => {
  if (document.querySelector(".active") !== null) {
    console.log("active");
    cursor.style.display = "block";
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  } else {
    cursor.style.display = "none";
  }
});

face.addEventListener("mouseover", () => {
  if (cursor.style.display === "block") {
    face.style.backgroundColor = "blue";
  }
});
face.addEventListener("mouseout", () => {
  face.style.backgroundColor = "white";
});
