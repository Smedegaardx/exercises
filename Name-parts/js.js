const fullName = "Anthon Smedegaard Andreasen";

const start = fullName.indexOf(" ");
const end = fullName.lastIndexOf(" ");

const firstName = fullName.substring(0, start);
console.log(firstName);

const middleName = fullName.substring(start, end);
console.log(middleName);

const lastName = fullName.substring(end);
console.log(lastName);
