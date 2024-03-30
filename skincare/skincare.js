const products = document.querySelectorAll(".product");

products.forEach((product) => {
  product.addEventListener("click", () => {
    const isActive = document.querySelectorAll(".product.active");
    product.classList.toggle("active");
    if (isActive[0]) {
      isActive[0].classList.remove("active");
    }
  });
});

//make active product follow the mouse
const activeProduct = document.querySelector(".product.active");
document.addEventListener("mousemove", (e) => {
  if (activeProduct) {
    activeProduct.style.position = "absolute";
    activeProduct.style.left = e.pageX + "px";
    activeProduct.style.top = e.pageY + "px";
  }
});
