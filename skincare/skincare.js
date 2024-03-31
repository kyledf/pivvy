const cursor = document.querySelector(".cursor");
const face = document.querySelector(".face");
const finalScore = document.querySelector(".final-score");
const percentageScore = document.querySelector("#score");
let activeProduct;
let productsApplied = [];
let correctRoutine = [
  "cleanser",
  "sink",
  "towel",
  "toner",
  "moisturiser",
  "face-mask",
  "lip-balm",
];

window.onload = () => {
  randomizeProductOrder();
};

randomizeProductOrder = () => {
  let products = document.querySelectorAll(".product");
  let productsArray = Array.from(products);
  productsArray.sort(() => Math.random() - 0.5);
  let container = document.querySelector(".products");
  container.innerHTML = "";
  productsArray.forEach((product) => {
    container.appendChild(product);
  });
};

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
  product.classList.add("active");
  productsApplied.push(activeProduct);
  console.log(productsApplied);
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
      cursor.style.width = "200px";
      cursor.style.height = "200px";
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
    } else if (activeProduct === "sink") {
      face.style.backgroundImage = "url(../assets/skincare/face-4.png)";
    } else if (activeProduct === "face-mask") {
      face.style.backgroundImage = "url(../assets/skincare/face-5.png)";
    }
  }
});
face.addEventListener("mouseout", () => {
  if (cursor.style.opacity === "1") {
    // face.style.transform = "translate(-50%, -30%) scale(1)";
    face.style.backgroundImage = "url(../assets/skincare/face-1.png)";
  }
});

checkRoutine = () => {
  finalScore.style.display = "block";
  let score = 0;
  for (let i = 0; i < correctRoutine.length; i++) {
    if (correctRoutine[i] === productsApplied[i]) {
      score++;
    }
  }
  //rounded to nearest integer
  percentageScore.innerHTML = `${Math.round(
    (score / correctRoutine.length) * 100
  )}%`;
  if (score === correctRoutine.length) {
    percentageScore.innerHTML = "100%";
    document.querySelector("#message").innerHTML =
      "Congratulations! You have completed your skincare routine!";
  }
};

restart = () => {
  finalScore.style.display = "none";
  productsApplied = [];
  document.querySelector("#message").innerHTML =
    "You have not completed your skincare routine in the right order. Restart and try again!";
  document.querySelectorAll(".product.active").forEach((product) => {
    product.classList.remove("active");
  });
  randomizeProductOrder();
};
