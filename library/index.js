// add burger class
let burgerToggle = document.querySelector(".header_burger");
let headerMenu = document.querySelector(".header");
let width;
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
width = document.documentElement.clientWidth;

burgerToggle.addEventListener("click", function () {
  headerMenu.classList.toggle("open");
  profileLogin.classList.add("visibility");
});
// закрытие меню при аутсайд клике
document.addEventListener("click", function (event) {
  const isClickInsideMenu = headerMenu.contains(event.target);
  if (!isClickInsideMenu) {
    profileLogin.classList.add("visibility");
    headerMenu.classList.remove("open");
  }
});
// окно логина по кнопке профиля
const profileLogo = document.querySelector(".header_icon");
let profileLogin = document.querySelector(".profile_login");
profileLogo.addEventListener("click", function () {
  profileLogin.classList.toggle("visibility");
  headerMenu.classList.remove("open");
});

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

let step = 0;

arrowRight.addEventListener("click", function () {
  step += 800;
  if (step >= 3200) {
    arrowRight.style.remove;
  }
  arrowRight.style.left = step + 0 + "px";
});
//-----------------------------------------------карусель^^^^^-----------------------------------
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

const addClassActive = (item) => {
  // перебор карточек и добавление класса актив
  item.forEach((elem) => {
    elem.classList.add("active");
  });
};
const removeClassActive = (item) => {
  // перебор карточек и удаление класса актив
  item.forEach((elem) => {
    elem.classList.remove("active");
  });
};

const targetClick = (event) => {
  const element = event.target;
  if (element.classList.contains("circle_winter")) {
    addClassActive(winterCards);
    removeClassActive(springCards);
    removeClassActive(summerCards);
    removeClassActive(autumnCards);
  }
  if (element.classList.contains("circle_spring")) {
    addClassActive(springCards);
    removeClassActive(winterCards);
    removeClassActive(summerCards);
    removeClassActive(autumnCards);
  }
  if (element.classList.contains("circle_summer")) {
    addClassActive(summerCards);
    removeClassActive(winterCards);
    removeClassActive(springCards);
    removeClassActive(autumnCards);
  }
  if (element.classList.contains("circle_autumn")) {
    addClassActive(autumnCards);
    removeClassActive(winterCards);
    removeClassActive(springCards);
    removeClassActive(summerCards);
  }
};
winterButton.addEventListener("click", targetClick);
springButton.addEventListener("click", targetClick);
summerButton.addEventListener("click", targetClick);
autumnButton.addEventListener("click", targetClick);

// модальное окно регистрации
const registrBtn = document.querySelector(".profile_login__logout");
const popUpRegistr = document.querySelector(".register_wrapper");
const buttonSignUp = document.querySelector(".button_signup");
const closeBtn = document.querySelector(".close");
registrBtn.addEventListener("click", function () {
  popUpRegistr.classList.toggle("visibility");
  profileLogin.classList.toggle("visibility");
});
buttonSignUp.addEventListener("click", function () {
  popUpRegistr.classList.toggle("visibility");
});
// крестик закрывает модалку
closeBtn.addEventListener("click", function () {
  closeBtnCross();
  wrapperToggleClick();
});

function wrapperToggleClick() {
  popUpRegistr.addEventListener("click", function (event) {
    if (event.target.classList.contains("register_wrapper")) {
      popUpRegistr.classList.add("visibility");
    }
  });
}

function closeBtnCross() {
  closeBtn.addEventListener("click", function () {
    popUpRegistr.classList.add("visibility");
  });
}
// данные формы
const registerForm = document.querySelector(".register_form");
const passwordInput = document.getElementById("password");
const firstNameUser = document.getElementById("firstName");
const lastNameUser = document.getElementById("lastName");
const emailUser = document.getElementById("email");
// сохраняем инпуты в локал сторадж
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const passwordValue = passwordInput.value;
  const firstNameValue = firstNameUser.value;
  const lastNameValue = lastNameUser.value;
  const emailValue = emailUser.value;

  const formData = {
    name: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
    password: passwordValue,
  };

  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem("formData", formDataJSON);
});
// достать данные из локала
const storedFormData = localStorage.getItem('formData');
let firstLetterName = document.querySelector('.autorize_name')
// Заглавные буквы вместо иконки пользователя
function firstLetters (){

if (storedFormData) {
    const parsedFormData = JSON.parse(storedFormData);
    // Используйте parsedFormData для дальнейшей обработки данных формы
    let name1 = parsedFormData.name[0].toUpperCase()
    let name2 = parsedFormData.lastName[0].toUpperCase()
    let name3 = '' + name1 + name2
    console.log(name3);
}
}
firstLetters ()
