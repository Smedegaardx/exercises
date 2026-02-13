const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", oldTheme);

const switcher = document.querySelector("#themes").addEventListener("change", swapTheme);

function swapTheme(evt) {
  body.dataset.theme = `${evt.target.value}`;
  localStorage.setItem("theme", evt.target.value);
}

function oldTheme() {
  body.dataset.theme = localStorage.getItem("theme");
  switcher.value = localStorage.getItem("theme");
}
