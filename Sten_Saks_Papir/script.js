const sten = 1;
const papir = 2;
const saks = 3;

const player = document.getElementById("player1");

document.getElementById("rockButton").addEventListener("click", choseRock);
document.getElementById("paperButton").addEventListener("click", chosePaper);
document.getElementById("scissorsButton").addEventListener("click", choseScissors);

function choseRock() {
  player.classList.add("rock");
  player.classList.remove("paper", "scissors");
  animateHands();
}
function chosePaper() {
  player.classList.add("paper");
  player.classList.remove("rock", "scissors");
  animateHands();
}
function choseScissors() {
  player.classList.add("scissors");
  player.classList.remove("paper", "rock");
  animateHands();
}

function animateHands() {
  player.classList.add("shake");

  setTimeout(function () {
    player.classList.remove("shake");
  }, 1850);
}
