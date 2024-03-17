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
  profileWithAutorization.classList.add("visibility");
});
// закрытие меню при аутсайд клике
document.addEventListener("click", function (event) {
  const isClickInsideMenu = headerMenu.contains(event.target);
  if (!isClickInsideMenu) {
    profileLogin.classList.add("visibility");
    profileWithAutorization.classList.add("visibility");
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
const loginBtn = document.querySelector(".login_button");
const popUpRegistr = document.querySelector(".register_wrapper");
const popUpLogin = document.querySelector(".register_wrapper__login");
const buttonSignUp = document.querySelector(".button_signup");
const closeBtn = document.querySelector(".close");
const closeBtnLogin = document.querySelector(".close_login");
const buttonLoginOnCards = document.querySelector(".button_login");
const buyBooksButton = document.querySelectorAll(".button1");
const buttonProfileOnCards = document.querySelector(".button_profile");
const closeBtnProfile = document.querySelector(".close_profile");
const profileModal = document.querySelector(".profile_wrapper");
const myProfileButton = document.querySelector(".profile_autorization-button");
const userCardInProfile = document.querySelector(".number_card");
const buyReaderCard = document.querySelector(".buyCard_wrapper");
const closeBuyReaderCard = document.querySelector(".close_buy");

closeBuyReaderCard.addEventListener("click", () =>
  buyReaderCard.classList.add("visibility")
);

buyReaderCard.addEventListener("click", function (event) {
  if (event.target.classList.contains("buyCard_wrapper")) {
    buyReaderCard.classList.add("visibility");
  }
});

myProfileButton.addEventListener("click", function () {
  profileModal.classList.toggle("visibility");
  profileWithAutorization.classList.toggle("visibility");
});

buttonProfileOnCards.addEventListener("click", function () {
  profileModal.classList.toggle("visibility");
});

// кнопки крестики для закрытия и врапер
closeBtnProfile.addEventListener("click", function () {
  profileModal.classList.add("visibility");
});
profileModal.addEventListener("click", function (event) {
  if (event.target.classList.contains("profile_wrapper")) {
    profileModal.classList.add("visibility");
  }
});

loginBtn.addEventListener("click", function () {
  popUpLogin.classList.toggle("visibility");
  profileLogin.classList.toggle("visibility");
});

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
});

closeBtnLogin.addEventListener("click", function () {
  popUpLogin.classList.add("visibility");
});
buttonLoginOnCards.addEventListener("click", function () {
  popUpLogin.classList.remove("visibility");
});

function wrapperToggleClick() {
  popUpRegistr.addEventListener("click", function (event) {
    if (event.target.classList.contains("register_wrapper")) {
      popUpRegistr.classList.add("visibility");
    }
  });
}

function wrapperToggleClickLogin() {
  popUpLogin.addEventListener("click", function (event) {
    if (event.target.classList.contains("register_wrapper__login")) {
      popUpLogin.classList.add("visibility");
    }
  });
}

function closeBtnCross() {
  popUpRegistr.classList.add("visibility");
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
// прописанное имя и карта по умолчанию, если авторизован
function inputNameWithAutorization() {
  let localData = localStorage.getItem("users");
  let parseLocalData = JSON.parse(localData);
  let card = parseLocalData[0].cardNumber;
  let nameAutorize = parseLocalData[0].name;
  let lastName = parseLocalData[0].lastName;
  inputNameWithAutorizationForm.placeholder = nameAutorize + " " + lastName;
  inputNameWithAutorizationCard.placeholder = card;
}

// достать данные из локала
const storedFormData = localStorage.getItem("users");
let firstLetterName = document.querySelector(".autorize_name");
const registerButton = document.querySelector(".signin_btn");
const checkTheCardButton = document.querySelector(".cards_button");
const informationMenu = document.querySelector(".cards_information__container");
let inputNameWithAutorizationForm = document.querySelector(".input_name");
let inputNameWithAutorizationCard = document.querySelector(".input_card");
let profileInitials = document.querySelector(".left__initials");
let fullNameProfile = document.querySelector(".left__fullName");
const titleText = document.querySelector(".block_right"); // текст тайтл в блоке диджитал кардс
const contentTextOnLibraryCards = document.querySelector(
  ".cards_account__text"
); // текст контент в блоке диджитал кардс
const libraryForm = document.querySelector(".libraryCard_form1");
const buyCard = document.querySelector(".buyCard_btn");

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
        active: false,
        libraryCard: false,
      };

      const books = {
        the_Book_Eaters: false,
        cackle: false,
        Dante_Poet_Of_The_Secular_World: false,
        the_Last_Queen: false,
        the_Body: false,
        Carry_A_Memoir_of_Survival_on_Stolen_Land: false,
        Days_of_Distraction: false,
        Dominicana: false,
        Crude_A_Memoir: false,
        Let_My_People_Go_Surfing: false,
        The_Octopus_Museum_Poems: false,
        Shark_Dialogues_A_Novel: false,
        Casual_Conversation: false,
        The_Great_Fire: false,
        Rickey_The_Life_and_Legend: false,
        Slug_And_Other_Stories: false,
      };
      // сохраняем локал
      const existingData = JSON.parse(localStorage.getItem("users")) || [];
      existingData.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingData));
      // event.target.reset();
      const existingData1 = JSON.parse(localStorage.getItem("books")) || [];
      existingData1.push(books);
      localStorage.setItem("books", JSON.stringify(existingData1));
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
  autorizationUserPage() {
    let localData = localStorage.getItem("users");
    if (localData) {
      let parseLocalData = JSON.parse(localData);
      if (parseLocalData[0].active === true) {
        checkTheCardButton.classList.add("visibility");
        informationMenu.classList.remove("visibility");
        inputNameWithAutorizationForm.classList.add("input_name__brow");
        inputNameWithAutorizationCard.classList.add("input_card__brow");
        buttonSignUp.classList.add("visibility");
        buttonLoginOnCards.classList.add("visibility");
        buttonProfileOnCards.classList.remove("visibility-display");
        inputNameWithAutorization();
        titleText.textContent = "Visit your profile";
        contentTextOnLibraryCards.textContent =
          "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
        contentTextOnLibraryCards.style.width = "60%";
      }
    }
  },
  firstLettersOnProfile() {
    if (storedFormData) {
      const parsednewUser = JSON.parse(storedFormData);
      let name1 = parsednewUser[parsednewUser.length - 1].name[0].toUpperCase();
      let name2 =
        parsednewUser[parsednewUser.length - 1].lastName[0].toUpperCase();
      let firstSymbol = "" + name1 + name2;
      profileInitials.innerHTML = firstSymbol;
    }
  },
  fullNameOnProfile() {
    let localData = localStorage.getItem("users");
    if (localData) {
      let parseLocalData = JSON.parse(localData);
      let nameAutorize = parseLocalData[0].name;
      let lastName = parseLocalData[0].lastName;
      let full = nameAutorize + " " + lastName;
      fullNameProfile.innerHTML = full;
    }
  },
  // клик по книгам без авторизации --> меню логина // меню покупки карты
  loginIfNotAutorization() {
    let localData = localStorage.getItem("users");
    if (localData) {
      let parseLocalData = JSON.parse(localData);
      let autorization = parseLocalData[0].active;
      let readerCard = parseLocalData[0].libraryCard;
      if (autorization === false) {
        buyBooksButton.forEach((elem) => {
          elem.addEventListener("click", function () {
            popUpLogin.classList.remove("visibility");
          });
        });
      }
      if (autorization === true && readerCard === false) {
        buyBooksButton.forEach((elem) => {
          elem.addEventListener("click", function () {
            buyReaderCard.classList.toggle("visibility");
          });
        });
      }
      // если куплена карта и есть авторизация, то при клике меняем кнопку покупки на Own
      if (autorization === true && readerCard === true) {
        buyBooksButton.forEach((elem) => {
          elem.addEventListener("click", function (item) {
            item.target.style.display = "none";
            item.target.nextElementSibling.style.display = "block";
            //exp
            // let booksClass = item.target.parentNode.classList[1];
            // console.log(booksClass);
          });
        });
      }
    }
  },
  buyLibraryCard() {
    libraryForm.addEventListener("submit", function (event) {
      let localData = localStorage.getItem("users");
      let parseLocalData = JSON.parse(localData);
      console.log(parseLocalData);
      parseLocalData.forEach((elem) => (elem.libraryCard = true));
      localStorage.setItem("users", JSON.stringify(parseLocalData));
      buyReaderCard.classList.toggle("visibility");
    });
  },
};
db.addUser();
db.titleName();
db.firstLetters();
db.visitsCount();
db.autorizationUserPage();
db.firstLettersOnProfile();
db.fullNameOnProfile();
wrapperToggleClick();
wrapperToggleClickLogin();
db.loginIfNotAutorization();
db.buyLibraryCard();

// делаем Если введённые имя и номер карты совпадают с данными пользователя,
//то отображается панель с информацией, вместо кнопки Check the card на 10 секунд
//кнопка чек зе кард с данными

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
  if (localData) {
    localData = JSON.parse(localData);
    userName = localData[0].name;
    return userName;
  }
}
//достаём номер карты юзера
function getUserCards() {
  let localData = localStorage.getItem("users");
  if (localData) {
    localData = JSON.parse(localData);
    readerCardNumber = localData[0].cardNumber;
    return readerCardNumber;
  }
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

// мини кнопки регистрации и логина и переход между ними
const switchLogin = document.querySelector(".container_form__footer-login");
const switchRegister = document.querySelector(
  ".container_form__footer-register"
);
switchLogin.addEventListener("click", function () {
  popUpRegistr.classList.add("visibility");
  popUpLogin.classList.remove("visibility");
});

switchRegister.addEventListener("click", function () {
  popUpRegistr.classList.remove("visibility");
  popUpLogin.classList.add("visibility");
});
//авторизация
const loginForm = document.querySelector(".login_form");

loginForm.addEventListener("submit", function (event) {
  let loginInputEmailCard = document.querySelector(
    ".login_form__email-card"
  ).value;
  let loginInputPassword = document.querySelector(
    ".login_form__password"
  ).value;
  let localData = localStorage.getItem("users");
  // event.preventDefault();
  if (localData) {
    // получаем емейл карту и пароль из локала
    let parseLocalData = JSON.parse(localData);
    let email = parseLocalData[0].email;
    let cards = parseLocalData[0].cardNumber;
    let password = parseLocalData[0].password;
    // делаем проверку локала и инпута
    if (
      (email === loginInputEmailCard || cards === loginInputEmailCard) &&
      password === loginInputPassword
    ) {
      console.log(parseLocalData[0].active);
      // присваиваем авторизацию
      parseLocalData.forEach((element) => (element.active = true));
      localStorage.setItem("users", JSON.stringify(parseLocalData));
      location.reload();
    }
  }
});
// меняем вид страницы на авторизованный
// cкрываем дроп меню не авторизованного и меняем его на такое же но авторизованное
const profileWithAutorization = document.querySelector(
  ".profile_autorization-login"
);
const profileWithAutorizationTitle = document.querySelector(
  ".profile_autorization-tittle"
);

profileLogo.addEventListener("click", function () {
  let localData = localStorage.getItem("users");
  if (localData) {
    let parseLocalData = JSON.parse(localData);
    if (parseLocalData[0].active === true) {
      profileLogin.classList.add("visibility");
      profileWithAutorization.classList.toggle("visibility");
      let userCard = parseLocalData[0].cardNumber;
      profileWithAutorizationTitle.innerHTML = userCard;
    }
  }
});
// логаут
const logOutButton = document.querySelector(
  ".profile_autorization-logoutButton"
);
logOutButton.addEventListener("click", function () {
  let localData = localStorage.getItem("users");
  let parseLocalData = JSON.parse(localData);
  parseLocalData.forEach((element) => (element.active = false));
  localStorage.setItem("users", JSON.stringify(parseLocalData));
  inputNameWithAutorizationForm.classList.remove("input_name__brow");
  inputNameWithAutorizationCard.classList.remove("input_card__brow");
  buttonSignUp.classList.remove("visibility");
  buttonLoginOnCards.classList.remove("visibility");
  buttonProfileOnCards.classList.add("visibility-display");
  titleText.textContent = "Get a reader card";
  contentTextOnLibraryCards.textContent =
    "You will be able to see a reader card after logging into account or you can register a new account";
  location.reload();
});
//карта пользователя/счётчик в профиле
userCardInProfile.innerHTML = getUserCards();
let profilModalCount = document.querySelector(".count_visits2");
profilModalCount.innerHTML = visitsCount();
// кнопка копирования в буфер
const copyButton = document.querySelector(".copyLink");
copyButton.addEventListener("click", function () {
  let copy = userCardInProfile.textContent;
  navigator.clipboard.writeText(copy);
  document.querySelector(".tooltip-toggle").style.opacity = 1;
  setTimeout(() => {
    document.querySelector(".tooltip-toggle").style.opacity = 0;
  }, "1000");
});

// проверка на авторизацию и если нет либрари карты, то предлагает ее купить

// перепрыгивание на другой инпут после 2 символов
const input = document.querySelector(".code");
const input2 = document.querySelector(".code2");

input.addEventListener("input", (e) => {
  if (e.target.value.length >= 2) {
    e.target.blur();
    document.querySelector(".code2").focus();
  }
});
input2.addEventListener("input", (e) => {
  if (e.target.value.length >= 2) {
    e.target.blur();
    document.querySelector(".cvc").focus();
  }
});
document.querySelector(".cvc").addEventListener("input", function (e) {
  if (e.target.value.length >= 3) {
    e.target.blur();
    document.querySelector(".holderName").focus();
  }
});
buyCard.addEventListener("click", function () {
  if (document.querySelector(".cvc").value.length < 3) {
    alert("cvc должен содержать 3 символа");
  }
});

// делаем кнопку own при покупке
let ownButton = document.querySelectorAll(".button2");

// делаем книги в локал
function addBooks() {
  buyBooksButton.forEach((elem) => {
    elem.addEventListener("click", function (item) {
      let booksClass = item.target.parentNode.classList[1];

      // Создаем массив в локальном хранилище, если он еще не существует
      const existingData = JSON.parse(localStorage.getItem("ownBook")) || [];

      // Добавляем объект в массив
      existingData.push(booksClass);

      // Сохраняем обновленный массив в локальное хранилище
      localStorage.setItem("ownBook", JSON.stringify(existingData));

      console.log(booksClass);
    });
  });
}
addBooks();
// запоминаем состояние
function switchButtons() {
  let localData = localStorage.getItem("books");
  if (localData) {
    let parseLocalData = JSON.parse(localData);
    if (parseLocalData[0].the_Book_Eaters === true) {
      document.querySelector(
        ".the_Book_Eaters__Sunyi_Dean"
      ).children[0].style.display = "none";
      document.querySelector(
        ".the_Book_Eaters__Sunyi_Dean"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].cackle === true) {
      document.querySelector(
        ".cackle__Rachel_Harrison"
      ).children[0].style.display = "none";
      document.querySelector(
        ".cackle__Rachel_Harrison"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].Dante_Poet_Of_The_Secular_World === true) {
      document.querySelector(
        ".Dante_Poet_Of_The_Secular_World__Erich_Auerbach"
      ).children[0].style.display = "none";
      document.querySelector(
        ".Dante_Poet_Of_The_Secular_World__Erich_Auerbach"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].the_Last_Queen === true) {
      document.querySelector(
        ".the_Last_Queen__Clive_Irving"
      ).children[0].style.display = "none";
      document.querySelector(
        ".the_Last_Queen__Clive_Irving"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].the_Body === true) {
      document.querySelector(
        ".the_Body__Stephen_King"
      ).children[0].style.display = "none";
      document.querySelector(
        ".the_Body__Stephen_King"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].Carry_A_Memoir_of_Survival_on_Stolen_Land === true) {
      document.querySelector(
        ".Carry_A_Memoir_of_Survival_on_Stolen_Land__Toni_Jenson"
      ).children[0].style.display = "none";
      document.querySelector(
        ".Carry_A_Memoir_of_Survival_on_Stolen_Land__Toni_Jenson"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].Days_of_Distraction === true) {
      document.querySelector(
        ".Days_of_Distraction__Alexandra_Chang"
      ).children[0].style.display = "none";
      document.querySelector(
        ".Days_of_Distraction__Alexandra_Chang"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].Dominicana === true) {
      document.querySelector(
        ".Dominicana__Angie_Cruz"
      ).children[0].style.display = "none";
      document.querySelector(
        ".Dominicana__Angie_Cruz"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].Crude_A_Memoir === true) {
      document.querySelector(
        ".Crude_A_Memoir__Pablo_Fajardo_Sophie_Tardy-Joubert"
      ).children[0].style.display = "none";
      document.querySelector(
        ".Crude_A_Memoir__Pablo_Fajardo_Sophie_Tardy-Joubert"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].Let_My_People_Go_Surfing === true) {
      document.querySelector(
        ".Let_My_People_Go_Surfing__Yvon_Chouinard"
      ).children[0].style.display = "none";
      document.querySelector(
        ".Let_My_People_Go_Surfing__Yvon_Chouinard"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].The_Octopus_Museum_Poems === true) {
      document.querySelector(
        ".The_Octopus_Museum_Poems__Brenda_Shaughnessy"
      ).children[0].style.display = "none";
      document.querySelector(
        ".The_Octopus_Museum_Poems__Brenda_Shaughnessy"
      ).children[1].style.display = "block";
    }
    if (parseLocalData[0].Shark_Dialogues_A_Novel === true) {
      document.querySelector(".Shark_Dialogues_A_Novel__Kiana_Davenport").children[0].style.display = "none";
      document.querySelector(".Shark_Dialogues_A_Novel__Kiana_Davenport").children[1].style.display = "block";
    }
    if (parseLocalData[0].Casual_Conversation === true) {
      document.querySelector(".Casual_Conversation__Renia_White").children[0].style.display = "none";
      document.querySelector(".Casual_Conversation__Renia_White").children[1].style.display = "block";
    }
    if (parseLocalData[0].The_Great_Fire === true) {
      document.querySelector(".The_Great_Fire__Lou_Ureneck").children[0].style.display = "none";
      document.querySelector(".The_Great_Fire__Lou_Ureneck").children[1].style.display = "block";
    }
    if (parseLocalData[0].Rickey_The_Life_and_Legend === true) {
      document.querySelector(".Rickey_The_Life_and_Legend__Howard_Bryant").children[0].style.display = "none";
      document.querySelector(".Rickey_The_Life_and_Legend__Howard_Bryant").children[1].style.display = "block";
    }
    if (parseLocalData[0].Slug_And_Other_Stories === true) {
      document.querySelector(".Slug_And_Other_Stories__Megan_Milks").children[0].style.display = "none";
      document.querySelector(".Slug_And_Other_Stories__Megan_Milks").children[1].style.display = "block";
    }
  }
}
switchButtons();
// при покупке меняем в локале книгу фолс на тру
function checkButtons (){
  let localData = localStorage.getItem("books");
  if (localData) {
    let parseLocalData = JSON.parse(localData);
    buyBooksButton.forEach((elem)=>{
      elem.addEventListener('click', function(item){
        if(item.target.id === '1'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.the_Book_Eaters = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '2'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.cackle = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '3'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Dante_Poet_Of_The_Secular_World = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '4'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.the_Last_Queen = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '5'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.the_Body = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '6'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Carry_A_Memoir_of_Survival_on_Stolen_Land = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '7'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Days_of_Distraction = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '8'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Dominicana = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '9'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Crude_A_Memoir = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '10'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Let_My_People_Go_Surfing = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '11'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.The_Octopus_Museum_Poems = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '12'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Shark_Dialogues_A_Novel = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '13'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Casual_Conversation = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '14'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.The_Great_Fire = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '15'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Rickey_The_Life_and_Legend = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }
        if(item.target.id === '16'){
          // parseLocalData[0].the_Book_Eaters === true;
          parseLocalData.forEach((elem) => (elem.Slug_And_Other_Stories = true));
      localStorage.setItem("books", JSON.stringify(parseLocalData));
        }

      })
    }
    )
}
}
checkButtons ()