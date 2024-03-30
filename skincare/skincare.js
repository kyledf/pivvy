const cursor = document.querySelector(".cursor");
const face = document.querySelector(".face");
let activeProduct;

activateProduct = (product) => {
  const isActive = document.querySelectorAll(".product.active");
  if (isActive[0]) {
    let active = isActive[0];
    isActive[0].classList.remove("active");
    activeProduct = "";
    if (active === product) {
      return;
    }
  }
  activeProduct = product.id;
  console.log(activeProduct);
  product.classList.add("active");
};

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  if (document.querySelector(".active") !== null) {
    cursor.style.opacity = "1";
    if (activeProduct === "sink") {
      cursor.style.backgroundImage = "url(../assets/skincare/water.webp)";
    } else if (activeProduct === "towel") {
      cursor.style.backgroundImage = "url(../assets/skincare/towel.png)";
    } else if (activeProduct === "cleanser") {
      cursor.style.backgroundImage = "url(../assets/skincare/cream.png)";
    } else if (activeProduct === "toner") {
      cursor.style.backgroundImage = "url(../assets/skincare/cotton-pad.webp)";
    } else if (activeProduct === "moisturiser") {
      cursor.style.backgroundImage = "url(../assets/skincare/cream.png)";
    } else if (activeProduct === "face-mask") {
      cursor.style.backgroundImage = "url(../assets/skincare/face-mask.png)";
    } else if (activeProduct === "lip-balm") {
      cursor.style.backgroundImage = "url(../assets/skincare/lip-balm.webp)";
    }
  } else {
    cursor.style.opacity = "0";
  }
});

face.addEventListener("mouseover", () => {
  if (cursor.style.opacity === "1") {
    // face.style.transform = "translate(-50%, -30%) scale(1.01)";

    face.style.backgroundImage = "url(../assets/skincare/face-2.png)";
    if (activeProduct === "lip-balm") {
      face.style.backgroundImage = "url(../assets/skincare/face-3.png)";
    }
  }
});
face.addEventListener("mouseout", () => {
  if (cursor.style.opacity === "1") {
    // face.style.transform = "translate(-50%, -30%) scale(1)";
    face.style.backgroundImage = "url(../assets/skincare/face-1.png)";
  }
});
