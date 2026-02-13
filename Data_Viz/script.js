const numBucket = document.querySelector("#queue")

document.addEventListener("DOMContentLoaded", getNumber);

setInterval(getNumber,10000)

function getNumber(){fetch(`https://kea-alt-del.dk/kata-distortion/`)
.then((response) => response.json())
.then((Queue) => showNumber(Queue))}


function showNumber(Queue){
    console.log(Queue.inQueue)
    numBucket.classList.add("animateMe")
    if (Queue.inQueue == 0){
numBucket.innerHTML = "Tillykke, <br> du bliver nu viderestillet"
    }
    else{
    numBucket.innerHTML = `${Queue.inQueue}`
    }
}

numBucket.addEventListener("animationend", () => numBucket.classList.remove("animateMe"))