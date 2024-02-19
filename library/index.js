// add burger class
let burgerToggle = document.querySelector(".header_burger");
let headerMenu = document.querySelector(".header");
let width;
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
width = document.documentElement.clientWidth;

burgerToggle.addEventListener("click", () =>
  headerMenu.classList.toggle("open")
);
// slider
let offset = 0;
let circle2 = document.querySelector(".circle_2");
let circle1 = document.querySelector(".circle_1");
let circle3 = document.querySelector(".circle_3");
let circle4 = document.querySelector(".circle_4");
let circle5 = document.querySelector(".circle_5");
const sliderLine = document.querySelector(".caroosel");
// Скролл на  3 кружках
circle2.addEventListener("click", function () {
  offset = 475;
  if (width <= 1024) {
    offset = 800;
  }
  circle2.classList.add("circle_brow");
  circle1.classList.remove("circle_brow");
  circle3.classList.remove("circle_brow");
  circle4.classList.remove("circle_brow");
  circle5.classList.remove("circle_brow");

  sliderLine.style.right = offset + "px";
});

circle3.addEventListener("click", function () {
  offset = 950;
  if (width <= 1024) {
    offset = 1550;
  }
  if (width > 1024) {
    offset = 950;
  }
  circle3.classList.add("circle_brow");
  circle1.classList.remove("circle_brow");
  circle2.classList.remove("circle_brow");
  circle4.classList.remove("circle_brow");
  circle5.classList.remove("circle_brow");

  sliderLine.style.right = offset + "px";
});
circle4.addEventListener("click", function () {
  offset = 950;
  if (width <= 1024) {
    offset = 2300;
  }
  circle4.classList.add("circle_brow");
  circle1.classList.remove("circle_brow");
  circle2.classList.remove("circle_brow");
  circle3.classList.remove("circle_brow");
  circle5.classList.remove("circle_brow");

  sliderLine.style.right = offset + "px";
});
circle5.addEventListener("click", function () {
  offset = 950;
  if (width <= 1024) {
    offset = 3050;
  }
  circle5.classList.add("circle_brow");
  circle1.classList.remove("circle_brow");
  circle2.classList.remove("circle_brow");
  circle3.classList.remove("circle_brow");
  circle4.classList.remove("circle_brow");

  sliderLine.style.right = offset + "px";
});

circle1.addEventListener("click", function () {
  offset = 0;
  circle1.classList.add("circle_brow");
  circle2.classList.remove("circle_brow");
  circle3.classList.remove("circle_brow");
  circle4.classList.remove("circle_brow");
  circle5.classList.remove("circle_brow");
  sliderLine.style.right = offset + "px";
});
// Скролл на  3 кружках конец
let step = 0;
function rollRight() {
  arrowRight.style.left = step + 800 + "px";
}
// arrowRight.addEventListener("click", rollRight());
