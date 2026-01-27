const message = document.getElementById("message");
let randNmbr = Math.round(Math.random() * 100);
let guess = document.getElementById("userGuess");

const send = document.getElementById("send");
send.addEventListener("click", updateNumber);

console.log(randNmbr);

function updateNumber() {
  console.log(guess.valueAsNumber);
  if (guess.valueAsNumber == randNmbr) {
    message.innerHTML = `Tillykke, du gjorde det`;
    message.classList.add("tillyke");
  }

  if (guess.valueAsNumber > randNmbr) {
    message.innerHTML = `Dit tal er for højt`;
    message.classList.remove("tillyke");
  }

  if (guess.valueAsNumber < randNmbr) {
    message.innerHTML = `Dit tal er for lavt`;
    message.classList.remove("tillyke");
  }
}
