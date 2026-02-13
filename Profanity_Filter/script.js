const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const SFWbutton = document.querySelector("#SFW");
let pTag = document.querySelector("#Text");

SFWbutton.addEventListener("click", Filter);

function Filter() {
  let text = pTag.innerHTML;
  let hasBadWords = false;

  curseWords.forEach((word) => {
    const regex = new RegExp(`${word.bad}`);
    if (regex.test(text)) {
      hasBadWords = true;
      text = text.replace(regex, `<span class="good-word">${word.good}</span>`);
    }
  });
  if (!hasBadWords) {
    console.log("Ingen Dårlige ord");
    alert("Der er ingen dårlige ord");
  }
  pTag.innerHTML = text;
}
