// add burger class
let burgerToggle = document.querySelector(".header_burger");
let headerMenu = document.querySelector(".header");

burgerToggle.addEventListener("click", () =>
  headerMenu.classList.toggle("open")
);
// slider
let offset = 0;
let circle2 = document.querySelector(".circle_2");
let circle1 = document.querySelector(".circle_1");
let circle3 = document.querySelector(".circle_3");
const sliderLine = document.querySelector(".caroosel");
// Скролл на  3 кружках
circle2.addEventListener("click", function () {
  offset = 475;
  circle2.classList.toggle("circle_brow");

  sliderLine.style.right = offset + "px";
});

circle3.addEventListener("click", function () {
  offset = 950;
  circle3.classList.toggle("circle_brow");

  sliderLine.style.right = offset + "px";
});

circle1.addEventListener("click", function () {
  offset = 0;
  circle1.classList.toggle("circle_brow");
  sliderLine.style.right = offset + "px";
});
// Скролл на  3 кружках