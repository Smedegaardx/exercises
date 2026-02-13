const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", oldTheme);

document.querySelector("#themes").addEventListener("change", swapTheme);

function swapTheme(evt) {
  body.dataset.theme = `${evt.target.value}`;
  localStorage.setItem("theme", evt.target.value);
}

function oldTheme() {
  body.dataset.theme = `${localStorage.theme}`;
}
