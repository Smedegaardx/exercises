const body = document.querySelector("body");

body.addEventListener("mousemove", changeColor);

function changeColor(event) {
  body.style.setProperty("--lightness", (event.clientX / window.innerWidth) * 100);
}
