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

//генератор 16 значной карты
const generateCardNumber = () => {
  let cardNumber = "";
  for (let i = 0; i < 9; i++) {
    cardNumber += Math.floor(Math.random() * 16).toString(16);
  }
  return cardNumber.toUpperCase();
};

// достать данные из локала
const storedFormData = localStorage.getItem("users");
let firstLetterName = document.querySelector(".autorize_name");
const registerButton = document.querySelector(".signin_btn");

const db = {
  addUser() {
    registerForm.addEventListener("submit", function (event) {
      // event.preventDefault();

      const passwordValue = passwordInput.value;
      const firstNameValue = firstNameUser.value;
      const lastNameValue = lastNameUser.value;
      const emailValue = emailUser.value;

      const newUser = {
        name: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue,
        cardNumber: generateCardNumber(),
        visits: 0,
        bonuses: "0",
        books: "0",
      };
      // сохраняем локал
      const existingData = JSON.parse(localStorage.getItem("users")) || [];
      existingData.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingData));
      // event.target.reset();
    });
  },

  firstLetters() {
    if (storedFormData) {
      const parsednewUser = JSON.parse(storedFormData);
      //  parsedFormData для дальнейшей обработки данных формы
      let name1 = parsednewUser[parsednewUser.length - 1].name[0].toUpperCase();
      let name2 =
        parsednewUser[parsednewUser.length - 1].lastName[0].toUpperCase();
      let firstSymbol = "" + name1 + name2;
      firstLetterName.innerHTML = firstSymbol;
      firstLetterName.style.opacity = 1;
    }
  },

  titleName() {
    firstLetterName.addEventListener("mouseover", function () {
      if (storedFormData) {
        const parsednewUser = JSON.parse(storedFormData);
        let name1 = parsednewUser[parsednewUser.length - 1].name;
        let name2 = parsednewUser[parsednewUser.length - 1].lastName;
        let firstSymbol = name1 + " " + name2;
        firstLetterName.setAttribute("title", firstSymbol + "");
      }
    });
  },
  visitsCount() {
    let visits = localStorage.getItem("users");
    if (visits) {
      visits = JSON.parse(visits);
      let count = visits[0].visits;
      // console.log(visits);

      visits.forEach((element) => element.visits++);
      localStorage.setItem("users", JSON.stringify(visits));
    }
  },
};

db.addUser();
db.titleName();
db.firstLetters();
db.visitsCount();

// делаем Если введённые имя и номер карты совпадают с данными пользователя,
//то отображается панель с информацией, вместо кнопки Check the card на 10 секунд
//кнопка чек зе кард с данными
const checkTheCardButton = document.querySelector(".cards_button");
const informationMenu = document.querySelector(".cards_information__container");
let readerNameUser;
let readerCardNumber; // карта юзера из локала
const formLybraryCard = document.querySelector(".form_libraryCards");
let visitCountOnProfile = visitsCount(); // счётчик посещений
let userName;
console.log(visitCountOnProfile);
// прикручиваем счётчик к инфе в диджитал кардс
const countVisits = document.querySelector(".count_visits");
countVisits.innerHTML = visitCountOnProfile;

function showProfileStats() {
  // проверяем наличие данных в локале
  let dataInLocal = localStorage.getItem("users");
  if (dataInLocal) {
    if (readerNameUser === userName && readerCardNumber === userCardNumber) {
      checkTheCardButton.classList.add("visibility");
      informationMenu.classList.remove("visibility");
      setTimeout(() => {
        checkTheCardButton.classList.remove("visibility");
        informationMenu.classList.add("visibility");
      }, "10000");
    } else alert("Library cards not found");
  } else alert("you are not register");
}

function formCheckLibraryCards() {
  formLybraryCard.addEventListener("submit", function (event) {
    event.preventDefault();
    readerNameUser = document.querySelector(".input_name").value;
    userCardNumber = document.querySelector(".input_card").value;
    getUserName();
    getUserCards();
    showProfileStats();
    setTimeout(() => {
      event.target.reset();
    }, "10000");
  });
}
formCheckLibraryCards();
// достаём имя из локал стоража
function getUserName() {
  let localData = localStorage.getItem("users");
  localData = JSON.parse(localData);
  userName = localData[0].name;
  return userName;
}
//достаём номер карты юзера
function getUserCards() {
  let localData = localStorage.getItem("users");
  localData = JSON.parse(localData);
  readerCardNumber = localData[0].cardNumber;
  return readerCardNumber;
}
// получаем число посещений
function visitsCount() {
  let visits = localStorage.getItem("users");
  if (visits) {
    visits = JSON.parse(visits);
    let userCount = visits[0].visits;
    return userCount;
  }
}
