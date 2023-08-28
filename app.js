const navbarToggle = document.querySelector("#navbar__toggle");
const navbarMenu = document.querySelector("#navbar__menu");

navbarToggle.addEventListener("click", function () {
  navbarToggle.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
});
