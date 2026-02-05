document.querySelectorAll("button").forEach((btn) => {
  console.log("btn", btn);
  btn.addEventListener("click", klik);
});

function klik(evt) {
  const currentFilter = evt.target.dataset.filter;
  if (currentFilter === "onlyElectric") {
    showTheseVehicles(onlyElectric);
  } else if (currentFilter === "twoOrMore") {
    showTheseVehicles(twoOrMore);
  } else if (currentFilter === "ryebread") {
    showTheseVehicles(ryebread);
  } else if (currentFilter === "jonas") {
    showTheseVehicles(jonas);
  } else {
    showTheseVehicles(vehicles);
  }
}

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

const onlyElectric = vehicles.filter(isElectric);
const twoOrMore = vehicles.filter(moreThanTwo);
const jonas = vehicles.filter(jonasElectric);
const ryebread = vehicles.filter(ryeBreadSeaters);

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel ?? "-"}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ?? "-"}</td>
  <td>${each.ownedBy ?? "-"}</td>
  <td>${each.isElectric ? "✓ " : "X"}</td>
  <td>${each.isTandem ? "✓ " : "X"}</td>
</tr>`;
  });
}

function isElectric(vehicle) {
  if (vehicle.isElectric === true) {
    return true;
  } else {
    return false;
  }
}

function moreThanTwo(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  } else {
    return false;
  }
}

function jonasElectric(vehicle) {
  if (vehicle.isElectric === true && vehicle.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}

function ryeBreadSeaters(vehicle) {
  if (vehicle.passengers > 1 && vehicle.fuel === "Rugbrød") {
    return true;
  } else {
    return false;
  }
}
