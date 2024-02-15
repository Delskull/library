// add burger class
let burgerToggle = document.querySelector(".header_burger");
let headerMenu = document.querySelector('.header')

burgerToggle.addEventListener("click", () =>
headerMenu.classList.toggle("open")
);

