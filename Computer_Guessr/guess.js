let pcGuess = 50;
let divider = 50;
let totalGuesses = 1;

const pcGuessField = document.getElementById("computerGuess");

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("lowerBtn").addEventListener("click", lower);
document.getElementById("higherBtn").addEventListener("click", higher);
document.getElementById("correctBtn").addEventListener("click", iWin);

function startGame() {
  pcGuessField.innerHTML = `Jeg gætter på ${pcGuess}`;
  correctBtn.disabled = false;
  lowerBtn.disabled = false;
  higherBtn.disabled = false;
  startBtn.disabled = true;
}

function lower() {
  pcGuess = Math.round(pcGuess - divider / 2);
  divider /= 2;
  totalGuesses = totalGuesses + 1;
  pcGuessField.innerHTML = `Jeg gætter på ${pcGuess}`;
}

function higher() {
  pcGuess = Math.round(pcGuess + divider / 2);
  divider /= 2;
  totalGuesses = totalGuesses + 1;
  pcGuessField.innerHTML = `Jeg gætter på ${pcGuess}`;
}

function iWin() {
  pcGuessField.innerHTML = `Nemt! Jeg gættede det på ${totalGuesses} gæt!`;
  pcGuess = 50;
  divider = 50;
  totalGuesses = 1;
  correctBtn.disabled = true;
  lowerBtn.disabled = true;
  higherBtn.disabled = true;
  startBtn.disabled = false;
}
