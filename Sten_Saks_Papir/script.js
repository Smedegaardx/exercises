const player = document.getElementById("player1");
const computer = document.getElementById("player2");

const buttonContainer = document.getElementById("buttons");

document.getElementById("rockButton").addEventListener("click", choseRock);
document.getElementById("paperButton").addEventListener("click", chosePaper);
document.getElementById("scissorsButton").addEventListener("click", choseScissors);

function choseRock() {
  draw.classList.add("hidden")
  win.classList.add("hidden")
  lose.classList.add("hidden")
  player.classList.remove("paper", "scissors");
  player.classList.add("rock");
  playerChoice = 0;
  computerStart();
  animateHands();
  buttonContainer.classList.add("disabled")
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  setTimeout(function (){
  buttonContainer.classList.remove("disabled")
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  }, 2300)
}
function chosePaper() {
  draw.classList.add("hidden")
  win.classList.add("hidden")
  lose.classList.add("hidden")
  player.classList.add("paper");
  player.classList.remove("rock", "scissors");
  playerChoice = 1;
  computerStart();
  animateHands();
  buttonContainer.classList.add("disabled")
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  setTimeout(function (){
  buttonContainer.classList.remove("disabled")
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  }, 2300)
}
function choseScissors() {
  draw.classList.add("hidden")
  win.classList.add("hidden")
  lose.classList.add("hidden")
  player.classList.add("scissors");
  player.classList.remove("paper", "rock");
  playerChoice = 2;
  computerStart();
  animateHands();
  buttonContainer.classList.add("disabled")
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  setTimeout(function (){
  buttonContainer.classList.remove("disabled")
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  }, 2300)
}

function animateHands() {
  player.classList.add("shake");
  computer.classList.add("shake");

  setTimeout(function () {
    player.classList.remove("shake");
    computer.classList.remove("shake");
  }, 1850);

  setTimeout(function(){
    showResult()
  }, 2300);
}

function computerStart() {
  computerChoice = Math.round(Math.random()* 2)
  console.log(computerChoice)
  if (computerChoice == 0){
  computer.classList.add("rock")
  computer.classList.remove("paper", "scissors");

  } 
  if (computerChoice == 1){
  computer.classList.add("paper")
  computer.classList.remove("rock", "scissors");

  } 
  if (computerChoice == 2){
  computer.classList.add("scissors")
  computer.classList.remove("paper", "rock");

  } 
}

const win = document.getElementById("win")
const lose = document.getElementById("lose")
const draw = document.getElementById("draw")

function showResult() {
  if (computerChoice == playerChoice){
  draw.classList.remove("hidden")
  }

  else if ((playerChoice == 0 && computerChoice == 2) || (playerChoice == 1 && computerChoice == 0) || (playerChoice == 2 && computerChoice == 1)){
  win.classList.remove("hidden")
  }

  else {
  lose.classList.remove("hidden")
  }
}
