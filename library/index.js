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

arrowRight.addEventListener("click", function () {
  step += 800;
  if (step >= 3200) {
    arrowRight.style.remove;
  }
  arrowRight.style.left = step + 0 + "px";
});
// КАРТОЧКИ FAVORITES
// кнопки радио
let winterButton = document.querySelector(".winter");
let springButton = document.querySelector(".spring");
let summerButton = document.querySelector(".summer");
let autumnButton = document.querySelector(".autumn");
// кнопки

// карточки с книгами
let winterCards = document.querySelectorAll(".cards_winter");
let springCards = document.querySelectorAll(".cards_spring");
let summerCards = document.querySelectorAll(".cards_summer");
let autumnCards = document.querySelectorAll(".cards_autumn");
let allCards = document.querySelectorAll(".cards_visible");
// карточки с книгами
let cards = document.querySelector(".cards"); // общий блок карт

winterButton.addEventListener("click", function () {
  // класс актив по кнопке 1 и сброс остальных
  allCards.forEach((elem) => {
    elem.classList.remove("active");
  });
  winterCards.forEach((elem) => {
    elem.classList.add("active");
  });
});

springButton.addEventListener("click", function () {
  // класс актив по кнопке 2 и сброс остальных
  allCards.forEach((elem) => {
    elem.classList.remove("active");
  });
  springCards.forEach((elem) => {
    elem.classList.add("active");
  });
});

// winterCards.forEach(elem => {
//   elem.classList.add('active')
// })
console.log(winterCards);
