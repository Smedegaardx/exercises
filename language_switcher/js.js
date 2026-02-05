"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
      { text: "Ich sprech Deutsch", location: ".p" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
      { text: "Jeg snakker dansk", location: ".p" },
    ],
  },
};
let locale = "da";
change();

document.querySelector("#dropdown").addEventListener("change", (event) => {
  locale = event.target.value;
  change();
});

function change() {
  texts[locale].texts.forEach((elm) => {
    if (elm.location === ".footer") {
      document.querySelector(elm.location).innerHTML = `${elm.text}`;
    } else if (elm.location === ".header") {
      document.querySelector(elm.location).innerHTML = `${elm.text}`;
    } else if (elm.location === ".p") {
      document.querySelector(elm.location).innerHTML = `${elm.text}`;
    }
  });
}
