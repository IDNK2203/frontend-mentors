console.log("butt stains");
// let underlay = document.querySelector(".underlay");
let toggle_switch = document.querySelector("#toggle_switch");
// let dashboard = document.querySelector(".dashboard");
let body = document.querySelector("body")
let heading_para = document.querySelector(".heading p");
let label = document.querySelector("label");
let metrics_card = Array.from(document.querySelectorAll(".metrics_card"));
let follower_text = Array.from(document.querySelectorAll(".follower_text"));
let users = document.querySelectorAll(".user");
let dimensions = Array.from(document.querySelectorAll(".dimension"));
let dimensiion_paras = Array.from(
  document.querySelectorAll(".dimensiion_heading p")
);

// console.log(underlay)
let label_toggle = (e) => {
  if (e.target.checked) {
    label.textContent = "Light Mode";
    return;
  }
  label.textContent = "Dark Mode";
};

toggle_switch.addEventListener("click", (e) => {
  label_toggle(e);

  body.classList.toggle("dark_theme");
  body.classList.toggle("light_theme");

  // heading_para
  heading_para.classList.toggle("dark_theme_cardtext");
  heading_para.classList.toggle("light_theme_cardtext");

  // label
  label.classList.toggle("dark_theme_cardtext");
  label.classList.toggle("light_theme_cardtext");

  // underlay
  // underlay.classList.toggle("dark_theme_underlay");
  // underlay.classList.toggle("light_theme_underlay");

  // metrics_card
  metrics_card.forEach((card) => {
    card.classList.toggle("dark_theme_card");
    card.classList.toggle("light_theme_card");
  });

  // follower_text
  follower_text.forEach((text) => {
    text.classList.toggle("dark_theme_cardtext");
    text.classList.toggle("light_theme_cardtext");
  });

  //  users
  users.forEach((user) => {
    user.classList.toggle("dark_theme_cardtext");
    user.classList.toggle("light_theme_cardtext");
  });

  // dimensions
  dimensions.forEach((dimension) => {
    dimension.classList.toggle("dark_theme_card");
    dimension.classList.toggle("light_theme_card");
  });

  // dimensiion_paras
  dimensiion_paras.forEach((para) => {
    para.classList.toggle("dark_theme_cardtext");
    para.classList.toggle("light_theme_cardtext");
  });
});
