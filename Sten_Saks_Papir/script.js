const player = document.getElementById("player1");
const computer = document.getElementById("player2");

document.getElementById("rockButton").addEventListener("click", choseRock);
document.getElementById("paperButton").addEventListener("click", chosePaper);
document.getElementById("scissorsButton").addEventListener("click", choseScissors);

function choseRock() {
  player.classList.add("rock");
  player.classList.remove("paper", "scissors");
  animateHands();
  computerStart();
}
function chosePaper() {
  player.classList.add("paper");
  player.classList.remove("rock", "scissors");
  animateHands();
  computerStart();
}
function choseScissors() {
  player.classList.add("scissors");
  player.classList.remove("paper", "rock");
  animateHands();
  computerStart();
}

function animateHands() {
  player.classList.add("shake");
  computer.classList.add("shake");

  setTimeout(function () {
    player.classList.remove("shake");
    computer.classList.remove("shake");
  }, 1850);
}

function computerStart() {
  // Computer vælger hånd
}
