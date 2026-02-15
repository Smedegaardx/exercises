const btnContainer = document.querySelector("#btnContainer");
const nextBtn = document.querySelector("#nextBtn");
const creditsBtn = document.querySelector("#creditsBtn");
const page = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => setTimeout(displayBtns, 2000));

function hideBtns() {
  btnContainer.classList.add("hidden");
}

function displayBtns() {
  btnContainer.classList.remove("hidden");
  nextBtn.classList.add("animate");
  document.querySelector(".animate").addEventListener("animationend", newEpisode);
  nextBtn.addEventListener("click", newEpisode);
  creditsBtn.addEventListener("click", hideBtns);
  page.addEventListener("mousemove", stopAnimation);
}

function stopAnimation() {
  nextBtn.classList.remove("animate");
  nextBtn.style.backgroundColor = "white";
}

function newEpisode() {
  red = Math.round(Math.random() * (255 - 0 + 1) + 0);
  console.log(`red value is = ${red}`);
  green = Math.round(Math.random() * (255 - 0 + 1) + 0);
  console.log(`green value is = ${green}`);
  blue = Math.round(Math.random() * (255 - 0 + 1) + 0);
  console.log(`blue value is = ${blue}`);
  page.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}
