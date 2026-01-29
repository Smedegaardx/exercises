udregnMoms(10);

function udregnMoms(a, b = 25) {
  const momsFactor = (a * b) / 100;
  console.log("Prisen efter moms er", a + momsFactor);
}
