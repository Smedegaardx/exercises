const body = document.querySelector("body");

document.querySelector("#themes").addEventListener("change", swapTheme);

function swapTheme(evt) {
  body.dataset.theme = `${evt.target.value}`;
}
