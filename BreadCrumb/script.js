const list = document.getElementById("bread");

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.getElementById("generate").addEventListener("click", Navigation);

function Navigation() {
  list.innerHTML = "";

  bc.forEach((item, index) => {
    const a = document.createElement("a");
    const p = document.createElement("p");
    if (index < bc.length - 1) {
      a.textContent = item.name;
      a.href = item.link;
      p.textContent = ` / `;

      list.appendChild(a);
      list.appendChild(p);
    } else if (index === bc.length - 1) {
      p.textContent = item.name;
      list.appendChild(p);
    }
  });
}
