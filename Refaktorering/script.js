let premiumRabatSats = 0.2;

function udregnPrisMedRabat(totalPris, erPremiumKunde) {
  if (erPremiumKunde) {
    return totalPris - totalPris * premiumRabatSats;
  }
  return totalPris;
}

let pris = udregnPrisMedRabat(800, true);
console.log(pris);

// Udtrykker domænet (kurv, premium, rabat, pris)

// Undgår forkortelser

// Undgår magic numbers

// Har tydelig boolean-semantik

// Kan forstås uden kommentarer
