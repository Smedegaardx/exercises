const list = document.querySelector("ul");

const clumArray = [];

setInterval(generateColumns, 500);

function generateColumns() {
  clumArray.push(Math.round(Math.random() * 100));
  list.innerHTML = "";
  clumArray.forEach((height) => {
    const li = document.createElement("li");
    li.style.setProperty("--height", height);
    list.appendChild(li);
  });

  if (clumArray.length >= 20) {
    clumArray.shift();
  }
}
