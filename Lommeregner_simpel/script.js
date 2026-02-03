const resultText = document.getElementById("resultText");

inputA = document.getElementById("num1");
inputB = document.getElementById("num2");

document.getElementById("calculate").addEventListener("click", udregn);

function udregn() {
  let regneart = document.getElementById("regneart").value;
  const a = Number(inputA.value);
  const b = Number(inputB.value);

  if (regneart == 1) {
    result = Math.round(a + b);
    resultText.innerHTML = `Det giver: ${result}`;
  } else if (regneart == 2) {
    result = Math.round(a - b);
    resultText.innerHTML = `Det giver: ${result}`;
  } else if (regneart == 3) {
    result = Math.round(a * b);
    resultText.innerHTML = `Det giver: ${result}`;
  } else if (regneart == 4) {
    result = Math.round(a / b);
    resultText.innerHTML = `Det giver: ${result}`;
  }
}
