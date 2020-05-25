function getFullname(firstname, surname, useFormalName = false) {
  let fullName = firstname + " " + surname;
  if (useFormalName) {
    fullName = firstname + " " + surname;
  } else {
    fullName = "Lord " + fullName;
  }
  return fullName;
}

const fullName1 = getFullname("Daxious", "wendemu");
console.log(fullName1);
const fullName2 = getFullname("Dave", "Copper");
console.log(fullName2);
