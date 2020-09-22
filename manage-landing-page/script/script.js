let menu_open = document.querySelector(".menu_open");
let menu_close = document.querySelector(".menu_close");
let overlay = document.querySelector(".overlay");
let nav_links = document.querySelector(".nav_menu");
let form = document.querySelector("form");
let input = document.querySelector("input");
let error_msg = document.querySelector(".error_msg");

menu_open.addEventListener("click", () => {
  overlay.classList.toggle("overlay_active");
  menu_open.classList.toggle("menu_on");
  menu_close.classList.toggle("menu_on");
  nav_links.classList.toggle("menu_active");
});
menu_close.addEventListener("click", () => {
  nav_links.classList.toggle("menu_active");
  menu_open.classList.toggle("menu_on");
  menu_close.classList.toggle("menu_on");
  overlay.classList.toggle("overlay_active");
});
function show_error(field) {
  if (field.validity.typeMismatch) {
    error_msg.textContent = `please fill in a valid ${field.name}`;
  }
  error_msg.style.display = "block";
}
form.addEventListener("submit", function (e) {
  if ((!input.validity.valid || !input.value)) {
    show_error(input);
    e.preventDefault();
  } else {
    error_msg.style.display = "none";
  }
});
input.addEventListener("input", () => {
  if (input.validity.valid) {
    error_msg.style.display = "none";
  }
});
// steps taken in form validation
// select form and input fields
// set invalid classes on focus
// display error msg on input
// block sumbmission if input char is invalid amd display error msg
